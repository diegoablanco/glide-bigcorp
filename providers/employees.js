const service = require('../services/employees')
const buildEmployee = require('../builders/employee')

exports.getAll = async function (limit, offset, expands) {
    let employees = await service.getAll(limit, offset)
    employees = await Promise.all(employees.map(employee => buildEmployee(employee, expands)))
    employees = await expandManagers(employees, expands)

    return employees
}
async function expandManagers(employees, expands, accesor = employee => employee) {
    const managerExpands = expands.filter(expand => expand.indexOf('manager') == 0)
    if(managerExpands.length > 0) {
        const expandAccessor = x => accesor(x) && accesor(x).manager
        const managerIds = [...new Set(
            employees.filter(expandAccessor)
            .map(expandAccessor))]
        if(managerIds.length == 0)
            return employees
        const managersList = await service.getByIds(managerIds)
        expands = managerExpands.map(expand => expand.slice(1))
        employees.forEach(employee => {
            if(expandAccessor(employee)) {
                const manager = managersList.filter(x => x.id === accesor(employee).manager)[0]
                accesor(employee).manager = buildEmployee(manager, expands)
            }
        })
        return expandManagers(employees, expands, expandAccessor)
    } else {
        return employees
    }
}
exports.getById = async function (id, expands) {
    const employee = await service.getByIds([id])
    let employees = buildEmployee(employee, expands)
    employees = await expandManagers([...employees], expands)

    return employees[0]
}


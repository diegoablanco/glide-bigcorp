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
        const managersList = await service.getAll(null, null, [...new Set(
            employees.filter(x => accesor(x))
            .map(x => accesor(x).manager))]
        )
        expands = managerExpands.map(expand => expand.slice(1))
        employees.forEach(employee => {
            const manager = managersList.filter(x => x.id === accesor(employee).manager)[0]
            accesor(employee).manager = buildEmployee(manager, expands)
        })
        return expandManagers(employees, expands, employee => accesor(employee).manager)
    } else {
        return employees
    }
}
exports.getById = async function (id, expands) {
    const employee = await service.getById(id)
    return buildEmployee(employee, expands)
}


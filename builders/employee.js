const employeeProvider = require('../providers/employee')
async function build (employee, expands) {
    const managerExpands = expands.filter(expand => expand.indexOf('manager') == 0)
    const departmentExpands = expands.filter(expand => expand.indexOf('department') == 0)
    if(managerExpands.length > 0 && employee.manager) {
        employee.manager = await employeeProvider.getById(employee.manager, managerExpands.map(expand => expand.slice(1)))
    }
    return employee
}

module.exports = build
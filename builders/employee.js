const departmentProvider = require('../providers/departments')
const officeProvider = require('../providers/offices')

function build (employee, expands) {
    const departmentExpands = expands.filter(expand => expand.indexOf('department') == 0)
    const officeExpands = expands.filter(expand => expand.indexOf('office') == 0)

    if(departmentExpands.length > 0 && typeof(employee.department) === "number") {
        employee.department = departmentProvider.getById(employee.department, departmentExpands.map(expand => expand.slice(1)))
    }
    if(officeExpands.length > 0 && typeof(employee.office) === "number") {
        employee.office = officeProvider.getById(employee.office)
    }

    return employee
}

module.exports = build
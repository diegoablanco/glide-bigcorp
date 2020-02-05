const departments = require('./resources/departments.json')

const getById = function (id, expands) {
    const buildDepartment = require('../builders/department')
    const department = departments.filter(department => department.id === id)[0]
    return buildDepartment(department, expands)
}
exports.getById = getById
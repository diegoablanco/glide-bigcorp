const departments = require('./resources/departments.json')
const buildDepartment = require('../builders/department')

exports.getAll = function (expands) {
    return departments.map(department => buildDepartment(department, expands))
}
exports.getById = function (id, expands) {
    const department = departments.filter(department => department.id == id)[0]
    return buildDepartment(department, expands)
}
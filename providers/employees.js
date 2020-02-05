const service = require('../services/employees')

exports.getAll = async function (limit, offset, expands) {
    const buildEmployee = require('../builders/employee')
    const employees = await service.getAll(limit, offset)
    return Promise.all(employees.map(employee => buildEmployee(employee, expands)))
}

exports.getById = async function (id, expands) {
    const buildEmployee = require('../builders/employee')
    const employee = await service.getById(id)
    return await buildEmployee(employee, expands)
}
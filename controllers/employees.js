const axios = require('axios')
const buildEmployee = require('../builders/employee')
const provider = require('../providers/employee')

function parseExpand(expand) {
    return (!Array.isArray(expand) ? [expand] : expand).map(expandString => expandString.split('.'))
}
exports.getAll = async function ({ query: { limit, offset, expand = [] } }, res) {
    const expands = parseExpand(expand)
    const employees = await provider.getAll(limit, offset, expands)
    res.send(employees)
}

exports.getById = async function ({ params: { id }, query: { expand = [] } }, res) {
    const expands = parseExpand(expand)
    const employee = await provider.getById(id, expands)
    res.send(employee)
}
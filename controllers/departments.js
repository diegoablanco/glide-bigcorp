const provider = require('../providers/departments')

function parseExpand(expand) {
    return (!Array.isArray(expand) ? [expand] : expand).map(expandString => expandString.split('.'))
}
exports.getAll = async function ({ query: { expand = [] } }, res) {
    const expands = parseExpand(expand)
    const departments = await provider.getAll(expands)
    res.send(departments)
}

exports.getById = async function ({ params: { id }, query: { expand = [] } }, res) {
    const expands = parseExpand(expand)
    const department = await provider.getById(id, expands)
    res.send(department)
}
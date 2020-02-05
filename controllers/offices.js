const provider = require('../providers/offices')

exports.getAll = function (req, res) {
    const offices = provider.getAll()
    res.send(offices)
}

exports.getById = function ({ params: { id }}, res) {
    const office = provider.getById(id)
    res.send(office)
}
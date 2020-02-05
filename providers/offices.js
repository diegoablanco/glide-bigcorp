const offices = require('./resources/offices.json')

exports.getById  = function (id) {
    return offices.filter(office => office.id === id)[0]
}

exports.getAll = function () {
    return offices
}
exports.getById = function (id) {
    return offices.filter(office => office.id == id)[0]
}
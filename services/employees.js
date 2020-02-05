const axios = require('axios')
const memoize = require("memoizee")

exports.getAll = async function (limit, offset) {
    const { data: employees } = await axios.get('http://localhost:3004/employees', { 
        params: {
            _limit: limit,
            _start: offset
        }
    })
    return employees
}
const getById = async function (id) {
    const { data: employee } = await axios.get(`http://localhost:3004/employees/${id}`)

    return employee
}
exports.getById = memoize(getById)
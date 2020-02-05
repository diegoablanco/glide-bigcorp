const axios = require('axios')
const memoize = require("memoizee")
const endpoint = 'https://rfy56yfcwk.execute-api.us-west-1.amazonaws.com/bigcorp/employees'

exports.getAll = async function (limit, offset) {
    const { data: employees } = await axios.get(endpoint, { 
        params: {
            limit,
            start: offset
        }
    })
    return employees
}
const getById = async function (id) {
    const { data: employee } = await axios.get(`${endpoint}`, { params: { id }})

    return employee
}
exports.getById = memoize(getById)
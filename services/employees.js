const axios = require('axios')
const memoize = require("memoizee")
const endpoint = 'https://rfy56yfcwk.execute-api.us-west-1.amazonaws.com/bigcorp/employees'
//const endpoint = 'http://localhost:3004/employees'
const qs = require('qs');
exports.getAll = async function (limit, offset, ids) {
    let params = ids ? { id: ids } : { limit, offset }
    const { data: employees } = await axios.get(endpoint, { 
        params,
        paramsSerializer: function(params) {
            return qs.stringify(params, {arrayFormat: 'repeat'})
        },
    })
    return employees
}
const getById = async function (id) {
    const { data: employee } = await axios.get(`${endpoint}`, { params: { id }})

    return employee
}
exports.getById = memoize(getById)
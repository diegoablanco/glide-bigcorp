require('axios-debug-log')
const axios = require('axios')
const memoize = require("memoizee")
const endpoint = 'https://rfy56yfcwk.execute-api.us-west-1.amazonaws.com/bigcorp/employees'

const qs = require('qs');
const getAll = async function (limit, offset, ids) {
    let params = ids ? { id: ids } : { limit, offset }
    const { data: employees } = await axios.get(endpoint, { 
        params,
        paramsSerializer: function(params) {
            return qs.stringify(params, {arrayFormat: 'repeat'})
        },
    })
    return employees
}
exports.getByIds = async function (ids) {
     return getAll(null, null, ids)
}
exports.getAll = getAll
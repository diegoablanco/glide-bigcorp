const axios = require('axios')

exports.getAll = async function (limit, offset, expands) {
    const buildEmployee = require('../builders/employee')
    const { data: employees } = await axios.get('http://localhost:3004/employees', { 
        params: {
            _limit: limit,
            _start: offset
        }
    })
    return Promise.all(employees.map(employee => buildEmployee(employee, expands)))
}

exports.getById = async function (id, expands) {
    const buildEmployee = require('../builders/employee')
    const { data: employee } = await axios.get(`http://localhost:3004/employees/${id}`)
    return await buildEmployee(employee, expands)
}
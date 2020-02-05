function build (deparment, expands) {
    const deparmentProvider = require('../providers/departments.js')
    const superDepartmentExpands = expands.filter(expand => expand.indexOf('superdepartment') == 0)
    if(superDepartmentExpands.length > 0 && typeof(deparment.superdepartment) === "number") {
        deparment.superdepartment = deparmentProvider.getById(deparment.superdepartment, superDepartmentExpands.map(expand => expand.slice(1)))
    }
    return deparment
}

module.exports = build
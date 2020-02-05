const express = require("express");
const app = express();
const employees = require('./controllers/employees')
const departments = require('./controllers/departments')
const offices = require('./controllers/offices')

app.route('/employees').get(employees.getAll)
app.route('/employees/:id').get(employees.getById)
app.route('/departments').get(departments.getAll)
app.route('/departments/:id').get(departments.getById)
app.route('/offices').get(offices.getAll)
app.route('/offices/:id').get(offices.getById)
app.listen(3000, () => {
 console.log("Server started at port 3000");
});
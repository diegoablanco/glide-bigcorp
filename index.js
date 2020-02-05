const express = require("express");
const app = express();
const employees = require('./controllers/employees')
app.route('/employees').get(employees.getAll)
app.route('/employees/:id').get(employees.getById)
app.listen(3000, () => {
 console.log("Server started at port 3000");
});
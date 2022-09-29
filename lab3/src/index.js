const EMPLOYEES = require('./employee').employees
const app = require('express')()

console.log('Lab 03 -  NodeJs')

// Define Server Port
const PORT = process.env.PORT || 8081

// Create Web Server using CORE API
app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to Lab Exercise 03</h1>')
})

app.get('/employee', (req, res) => {
  res.status(200).send(EMPLOYEES)
})

app.get('/employee/names', (req, res) => {
  const employees = []

  for (const employee of EMPLOYEES) {
    employees.push(employee.firstName)
  }
  res.status(200).send(employees)
})

app.get('/employee/totalsalary', (req, res) => {
  let totalSalary = 0

  for (const employee of EMPLOYEES) {
    totalSalary += employee.Salary
  }
  res.status(200).send({ total_salary: totalSalary })
})

app.listen(
  PORT,
  () => console.log(`Server listening on http://localhost:${PORT}`)
)

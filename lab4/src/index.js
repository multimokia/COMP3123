const app = require('express')()
// Define Server Port
const PORT = process.env.PORT || 8081

app.get('/hello', (req, res) => {
  res.status(200).send('Hello Express JS')
})

app.get('/user', (req, res) => {
  res.status(200).send(req.query)
})

app.post('/user/:firstname/:lastname', (req, res) => {
  res.status(200).send(req.params)
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

const app = require('express')()
// Define Server Port
const PORT = process.env.PORT || 8081

app.get('/hello', (req, res) => {
  res.status(200).send('Hello Express JS')
})

app.get('/user', (req, res) => {
  const firstname = req.query.firstname
  const lastname = req.query.lastname

  if (firstname === undefined) {
    res.status(400).send('firstname not provided.')
    return
  }
  else if (lastname === undefined) {
    res.status(400).send('lastname not provided.')
    return
  }

  res.status(200).send({ firstname, lastname })
})

app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params

  res.status(200).send({ firstname, lastname })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

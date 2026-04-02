const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello from Docker! This is version after render update!</h1>')
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
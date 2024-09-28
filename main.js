const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Hi there",
    success: true
  })
})


app.post('/:name', (req, res) => {
  const pr = req.params;
  const userId = req.params.name;
  
  res.status(200).send(`Hello World! ${userId}` )
})

app.put('/', (req, res) => {
  res.send('Hello World!')
})
app.delete('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
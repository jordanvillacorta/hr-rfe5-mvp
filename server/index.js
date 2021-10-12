const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/meals', (req, res) => {
  res.send('Hello World!')
})

app.post('/meals', function (req, res) {
  res.send('Got a POST request')
})

app.listen(PORT, () => {
  console.log(`Server is listening at localhost:${PORT}`)
})
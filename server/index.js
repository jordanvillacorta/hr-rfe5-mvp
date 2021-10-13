const express = require('express');
const app = express();
import mealData from '../client/src/mealData.json';

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/meals', (req, res) => {
  // console.log(mealData.data);
  res.send(mealData)
})

app.post('/meals', function (req, res) {
  res.send(req.body)
})

app.listen(PORT, () => {
  console.log(`Server is listening at localhost:${PORT}`)
})
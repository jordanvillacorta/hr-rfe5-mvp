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

app.get('/recipes', (req, res) => {
  // console.log(mealData.data);
  res.send(mealData)
})

app.post('/recipes', (req, res) => {
  // findRsvpAndUpdate(req.body, (err, data) => {
  //   if (err) {
  //     res.sendStatus(400);
  //   } else {
  //     res.json(data);
  //   }
  // })
  res.send(req.body)
})

app.listen(PORT, () => {
  console.log(`Server is listening at localhost:${PORT}`)
})
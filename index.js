const mongoose = require('mongoose');
const express = require('express');
const app = express()

const Ositos = mongoose.model('Ositos', new mongoose.Schema({
  type: String,
  color: String,
}))

mongoose.connect('mongodb://nath:12345678@localhost:27017/miapp?authSource=admin')

app.get('/ositos', async (_req, res) => {
  console.log('listando...')
  const osos = await Ositos.find(await Ositos.create({ type: 'Grisley', color: 'Green' }));
  return res.send(osos)
})
app.listen(3000, () => console.log('listening...'));

const mongoose = require('mongoose');
const express = require('express');
const app = express()

const Ositos = mongoose.model('Ositos', new mongoose.Schema({
  type: String,
  color: String,
}))

mongoose.connect('mongodb://nath:12345678@monguito:27017/miapp?authSource=admin')

app.get('/ositos', async (_req, res) => {
  Ositos.create({ type: 'Grisley', color: 'blue' });
  console.log('creando...');
  const osos = await Ositos.find();
  return res.send('ok')
})



app.listen(3000, () => console.log('listening...'));

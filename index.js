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
  const osos = await Ositos.find();
  return res.send(osos)
})
app.get( async (_req, res) => {
  console.log('creando...')
  await Ositos.create({ tipo: 'Grisley', estado: 'Green' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'));

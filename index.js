const mongoose = require('mongoose');
const express = require('express');
const app = express()

mongoose.connect('mongodb://nath:12345678@monguito:27017/miapp?authSource=admin')

app.get('/ositos', (_req, res) => {
  console.log('creando...')
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'));
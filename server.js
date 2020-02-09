if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const DARKSKY_API = process.env.DARKSKY_API
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.post('/weather', (req, res) =>{
  
})
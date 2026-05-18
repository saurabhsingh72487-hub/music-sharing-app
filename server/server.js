require('dotenv').config()

const express = require('express')
const cors = require('cors')

const connectDB = require('./config/db')

const fileRoutes = require('./routes/fileRoutes')
const chatbotRoutes = require('./routes/chatbotRoutes')

const app = express()

connectDB()

app.use(cors())

app.use(express.json())

app.use('/api/files', fileRoutes)

app.use('/api/chat', chatbotRoutes)

app.get('/', (req, res) => {
  res.send('API Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
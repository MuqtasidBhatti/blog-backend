require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.options('*', cors())
app.use(express.json())

connectDB()

const userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

const postRoutes = require('./routes/postRoutes')
app.use('/api/posts', postRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`)
})

module.exports = app;
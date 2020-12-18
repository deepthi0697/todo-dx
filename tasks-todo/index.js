const express = require('express')
const app = express()
const PORT = 3033
const setupDb = require('./config/db')
const routes = require('./config/routes')
const Cors = require('cors')

app.use(Cors())

app.use(express.json())
app.use('/', routes)

setupDb()

app.get('/', (req,res) => {
    res.json({text: 'welcome to the website'})
})


app.listen(PORT, () => {
    console.log('listening on port', PORT)
})
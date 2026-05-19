require("dotenv").config()
const express = require('express')
const cors = require("cors")
const notesRoutes=require('./routes/notesRoutes')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/notes',notesRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
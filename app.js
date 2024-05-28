import express from 'express'
import connectDB from './database.js'
import userRoute from './user.routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(userRoute)

connectDB()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
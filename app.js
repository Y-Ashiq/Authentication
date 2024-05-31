import express from 'express'
import connectDB from './configs/database.js'
import userRoute from './routes/user.routes.js'


const app = express()
const port = 3000

app.use(express.json())
app.use(userRoute)

//connecting to database
connectDB()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


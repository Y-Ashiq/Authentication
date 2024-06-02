import express from 'express'
import connectDB from './configs/database.js'
import userRoute from './routes/user.routes.js'


const app = express()
const port = 3000

app.use(express.json())
app.use(userRoute)
app.set('views', './view');

app.set("view engine", "ejs")
app.get("/register", (req, res) => res.render("signUp"))


//connecting to database
connectDB()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


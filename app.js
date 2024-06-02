import express from "express";
import connectDB from "./configs/database.js";
import userRoute from "./routes/user.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

//user routing
app.use(userRoute);

//connecting to database
connectDB();

app.get("/", (req, res) => res.send("server connected!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

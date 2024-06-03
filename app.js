import express from "express";
import connectDB from "./configs/database.js";
import userRoute from "./routes/user.routes.js";
import CookieParser from "cookieparser";

const app = express();
const port = 3000;

app.use(express.json());
app.use(CookieParser);

//user routing
app.use(userRoute);

//connecting to database
connectDB();

app.get("/", (req, res) => res.send("server connected!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

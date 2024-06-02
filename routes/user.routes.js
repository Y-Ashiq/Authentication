import express from "express";
import Auth from "../controller/auth.js";

const userRoute = express.Router();

//route to registration with passing registration function
userRoute.route("/registration").post(Auth.registration);
//routr to login with passing login function
userRoute.route("/login").post(Auth.logIn);

userRoute.get("/register", (req, res) => res.render("signUp"));
userRoute.get("/login", (req, res) => res.render("logIn"));

export default userRoute;

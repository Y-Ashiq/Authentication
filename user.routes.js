import express from 'express'
import Auth from './auth.js';

const userRoute = express.Router();

//route to registration with passing registration function
userRoute.route('/registration').post(Auth.registration);
//routr to login with passing login function
userRoute.route('/login').post(Auth.logIn);

export default userRoute;
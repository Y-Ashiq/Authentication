import express from 'express'
import registration from './auth.js';

const userRoute = express.Router();


userRoute.route('/registration').post(registration);

// userRoute.route('/login').post()

export default userRoute;
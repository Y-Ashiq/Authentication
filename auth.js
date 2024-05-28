import user from './userSchema.js'
import bcrypt from 'bcrypt'

/*
function to handle registration of the user with valditaion and hashing password
and then store the the user informartion into database

*/
const registration = async (req, res) => {

    let {
        name,
        email,
        phoneNumber,
        password
    } = req.body;

    try {

        let emailisExist = await user.findOne({
            email
        })
        let phoneIsExist = await user.findOne({
            phoneNumber
        })

        if (emailisExist || phoneIsExist) { //check if the email or phone number are exist .. email and phone number must be unique

            res.status(400).json({
                message: "sorry this email or phone number is already used"
            })
        } else {
            //if the user is new we hash his password and then store the information into the database
            let hasedPassowrd = await bcrypt.hash(password, 10);
            password = hasedPassowrd;


            await user.create({
                name,
                email,
                phoneNumber,
                password
            })
            res.status(200).json({
                message: "User successfully created",

            })



        }


    } catch (error) {
        res.status(400).json({
            message: error
        });

    }


}


/*

this function handle the login of the user and compare the password with hashed one  that stored in the database

*/


const logIn = async (req, res) => {



    try {
        let {
            email,
            password
        } = req.body;
// check of the user email from request if the user exist
        const userAuth = await user.findOne({
            email
        })
        if (userAuth) {
            //and compare the hashed password to login the user
            
            bcrypt.compare(password, userAuth.password).then(function (result) {
                if (result) {
                    res.status(200).json({
                        message: "logged in succefully"
                    })
                } else {
                    res.status(400).json({
                        message: "incorrect password"
                    })


                }
            })


        } else {

            res.status(400).json({
                message: "incorrect email or password"
            })
        }




    } catch (error) {

        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })

    }


}
export default {
    registration,
    logIn
};
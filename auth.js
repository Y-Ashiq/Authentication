import user from './userSchema.js'
import bcrypt from 'bcrypt'


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

        if (emailisExist || phoneIsExist) {

            res.status(400).json({
                message: "sorry this email or phone number is already used"
            })
        } else {

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
export default registration;
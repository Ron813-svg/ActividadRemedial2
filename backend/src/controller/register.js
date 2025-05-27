import registerModel from '../models/Employee.js'
import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import {config} from '../config.js'

const registerControl = {}

registerControl.Register = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await registerModel.findOne({email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const passwordHash = await bcryptjs.hash(password, 10);
        const newUser = new registerModel({
            email,
            password: passwordHash
        })


        await newUser.save()

        res.status(201).json({ message: 'User registered successfully' })

        jsonwebtoken.sign(
            {id: newUser._id},
            config.JWT.secret,
            { expiresIn: config.JWT.expiresIn },

            (err, token) => {
                if(err) console.log({message: "Hubo un error en el token: " + err.message})
                res.cookie("authtoken", token)
            res.json({message: "El empleado se ha registrado correctamente"})
            }
        )
    }
    catch (error) {
        return res.status(500).json({ message: 'Error checking user existence' });
    }
}

export default registerControl
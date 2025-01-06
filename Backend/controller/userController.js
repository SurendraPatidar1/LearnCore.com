const User = require("../model/userModel.js");
const bcryptjs  = require('bcryptjs')
const jwt = require("jsonwebtoken"); 
const dotenv = require('dotenv');

dotenv.config();

const signup = async(req,res) => {
    try{
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User Already exists"})
        }
        const hashPassword =await bcryptjs.hash(password,10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword, 
        });
        await createdUser.save();
        res.status(201).json({message: "User Created Successfully", user:{
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email,
        } })
    } catch(error) {
        console.log("Error: ", error.message);
        res.status(500).json({message: "Internal Server Error"})
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate request body
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare passwords
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { _id: user._id, email: user.email }, // Payload
            process.env.JWT_SECRET, // Secret key
            { expiresIn: "1h" } // Token expiry
        );

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
module.exports = {signup,login};
const express = require("express");

const router = express.Router();

const User = require('./model')

router.post("/sign-up" , async (req , res) => {

    try {
        
        const {username , email , password} = req.body

        const user = new User({username , email , password})

        await user.save()

        res.status(201).json({message : "Registration Successful" , name : user.username , email : user.email})

    } catch (error) {
        
        res.status(500).json({message : error})
    }
})

router.post("/login" , async (req , res) => {


    try {
        
        const {email , password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            
            return res.status(401).json({message : "Invalid username or password"})

        }

        if (user.password !== password) {
            
            return res.status(401).json({error : 'Invalid username or password'})

        }

        res.status(200).json({message : "Signed In Successfully!" , name : user.username , email : user.email})

    } catch (error) {
        
        res.status(500).json({message : "There was a problem signing you in. PLease try again later"})

    }

})

module.exports = router;
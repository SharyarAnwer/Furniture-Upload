//This will hold all the base names for each route 
const express = require("express")

const router = express.Router()

//This holds all the routes related to user
const userRoutes = require("../domains/user")

//This holds all the routes related to sending order confirmation email to user
const sendEmail = require("../domains/send-order-confirmation-email")

//This holds all the routes related to products user
const productRoutes = require("../domains/products")

//Use the user-related routes
router.use("/user" , userRoutes)

//Use the user-related routes
router.use("/send-confirmation-email" , sendEmail)

//Use the user-related routes
router.use("/send-confirmation-email" , sendEmail)

//Use the product-related routes
router.use("/product" , productRoutes)

module.exports = router
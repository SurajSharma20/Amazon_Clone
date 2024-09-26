const express = require("express")
const router = express.Router()
const userController= require("../controllers/signupControler")
const{Insert } = userController


router.post('/signup' , Insert )


module.exports = router;
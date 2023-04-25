const express=require("express")
const  router = express.Router();
const  user=require('../controllers/user/user')
router.use('/user',user)
module.exports =router
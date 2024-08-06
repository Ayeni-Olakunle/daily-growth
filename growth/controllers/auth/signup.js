const asyncNow = require("express-async-handler");
const signupModel = require("../../models/auth/signup")

const getAllUser = asyncNow(async (req, res) => {
    const allUser = await signupModel.find();
    res.status(200).json(allUser);
})

const signupUser = asyncNow(async(req, res) => {
    
})

module.exports = {
    getAllUser
}
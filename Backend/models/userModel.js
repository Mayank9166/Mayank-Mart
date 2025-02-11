const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password: String

})

const employeeModel = mongoose.model("users",userSchema);
module.exports = employeeModel
const mongoose = require("mongo")

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        require: [true, 'User must have a username'],
        unique: true,
    }, 
    password: {
        type: String, 
        require: [true, 'User must have a password'],
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;
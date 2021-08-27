const mongoose = require("mongoose");

const Todo = mongoose.Schema({
    fullname: {
        type: String,
    },
    username:{
        type: String,
    },
    email:{
        type: String,
    },
    address:{
        type: String,
    },
    phonenumber:{
        type: String,
    },
    gender:{
        type: String,
    }
});

module.exports = mongoose.model("Todo", Todo);
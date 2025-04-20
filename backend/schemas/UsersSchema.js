const { Schema } = require("mongoose");

const UsersSchema = new Schema({
    email: String,
    password: String

});

module.exports = { UsersSchema };
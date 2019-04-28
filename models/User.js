let mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//User Schema
mongoose.Promise = global.Promise;

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

});
userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
let User = mongoose.model('User', userSchema, 'users');
module.exports = User;
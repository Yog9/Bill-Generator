let mongoose = require('mongoose');
//Menu Schema

mongoose.Promise = global.Promise;

let menuSchema = new mongoose.Schema({
    dish: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 0,
    }
});

let Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu;
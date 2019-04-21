let mongoose = require('mongoose');

//Pricing Schema

let pricingSchema = new mongoose.Schema({
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
        required: true,
    },
    total_cost: {
        type: Number,
        required: true
    },

});

let Pricing = mongoose.model('Pricing', pricingSchema, 'pricings');
module.exports = Pricing;
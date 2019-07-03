let Pricing = require('../models/pricing');
module.exports = (req, res) => {
    Pricing.find({
    })
        .then(item => {
            //console.log("body: ", req.body);
            console.log("item returned", item);
            //console.log(`Item price ${item[0].price}`);
            res.status(200).json(item)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
}
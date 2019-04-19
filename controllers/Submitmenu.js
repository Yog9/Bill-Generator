let Menu = require('../models/menu');
let Pricing = require('../models/pricing');

module.exports = (req, res, next) => {
    Menu.find({
        "dish": req.body.dish,
    })
        .then(item => {
            //console.log("body: ", req.body);
            console.log("item returned", item);
            //console.log(`Item price ${item[0].price}`);
            //res.status(200).json(item)
            Pricing.create({
                "dish": req.body.dish,
                "price": item[0].price,
                "quantity": parseInt(req.body.quantity),
                "total_cost": item[0].price * parseInt(req.body.quantity)
            }).then(item => {
                console.log(`Pricing item inserted ${item}`)
                res.status(200).json(item)
            })
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })

}
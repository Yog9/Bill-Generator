let Menu = require('../models/menu');
let Pricing = require('../models/pricing');

module.exports = (req, res, next) => {

    Menu.find({
    })
        .then(item => {
            //console.log("body: ", req.body);
            console.log("item returned", item);
            //console.log(`Item price ${item[0].price}`);
            let menu = [];
            for (let i = 0; i < item.length; i++) {
                menu.push({
                    dish: item[i].dish,
                    price: item[i].price,
                    quantity: parseInt(item[i].quantity),
                    total_cost: parseInt(parseInt(item[i].quantity) * item[i].price)
                })
            }
            Pricing.insertMany(menu).then(menu => {
                console.log(`Pricing item inserted ${menu}`)
                res.status(200).json(menu)
            })
                .catch(err => {
                    console.error(err);
                    res.status(500).json(err);
                })

        })
}
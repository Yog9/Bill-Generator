let Menu = require('../models/menu');
let Pricing = require('../models/pricing');

module.exports = (req, res, next) => {

    Menu.find({
    })
        .then(item => {
            console.log("body: ", req.body);
            console.log("item returned", item);
            //console.log(`Item price ${item[0].price}`);
            let menu = [];
            for (let i = 0; i < item.length; i++) {
              let dish_item_name = item[i].dish
              let dish_item_quantity = parseInt(item[i].quantity)
              if (req.body.dish === item[i].dish) {
                dish_item_quantity = parseInt(req.body.quantity)
              }
                menu.push({
                    dish: dish_item_name,
                    price: item[i].price,
                    quantity: dish_item_quantity,
                    total_cost: parseInt(dish_item_quantity * item[i].price)
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

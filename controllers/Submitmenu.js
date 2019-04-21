let Menu = require('../models/menu');
let Pricing = require('../models/pricing');

module.exports = (req, res, next) => {
    menu_selected = [...req.body.bill];
    const menu = [];
    console.log(`Menu selected  ${JSON.stringify(menu_selected)}`);
    for (let i = 0; i < menu_selected.length; i++) {
        if (menu_selected[i] !== null) {
            let quantity = parseInt(menu_selected[i].quantity)
            //console.log(`Quantity is ${menu_selected[i].quantity}`);
            menu.push({
                dish: menu_selected[i].dish,
                price: menu_selected[i].price,
                quantity: quantity,
                total_cost: parseInt(quantity * menu_selected[i].price)
            })
        }
    }
    Pricing.insertMany(menu).then(menu => {
        console.log(`Pricing item inserted ${menu}`)
        res.status(200).json(menu)
    })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
}

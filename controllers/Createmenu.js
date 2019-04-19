let Menu = require('../models/menu');
module.exports = (req, res) => {
    Menu.create({
        "dish": "Chaat Special",
        "price": 30
    })
        .then(item => {
            //console.log("body: ", req.body);
            console.log("item returned", item);
            res.status(200).json(item);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
}
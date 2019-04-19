let Menu = require('../models/menu');
module.exports = (req, res) => {
    Menu.find({
    })
        .then(item => {
            //console.log("body: ", req.body);
            console.log("item returned", item);
            //console.log(`Item price ${item[0].price}`);
            res.json(item)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
}
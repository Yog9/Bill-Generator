const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    const docs = [
        { 'dish': 'Vada Pav', 'price': 20, 'quantity': 0 },
        { 'dish': 'Idli Sambhar', 'price': 20, 'quantity': 0 },
        { 'dish': 'Masala Dosa', 'price': 25, 'quantity': 0 },
        { 'dish': 'Upma', 'price': 20, 'quantity': 0 }
    ];
    const dbo = db.db("foodDB");
    dbo.collection("menus").insertMany(docs, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});
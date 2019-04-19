const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let routes = require('./routes');
app.use(express.static("client"));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use('/', routes);


let url = 'mongodb://localhost:27017/foodDB';

//Set up default mongoose connection
mongoose.connect(url, { useNewUrlParser: true });
//Get the default connection
let db = mongoose.connection;

db.once('open', () => {
    console.log("Connected to mongoDB");
});

db.on('error', (err) => {
    console.log(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
const database = require('./config/database');
require('./routes/product.routes.js')(app);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(database.url, { useNewUrlParser: true, useUnifiedTopology: true
})
.then(() => {
    console.log('connection successful!');
})
.catch(err => {
    console.log("Unable to connect to db ", err);
    process.exit();
})


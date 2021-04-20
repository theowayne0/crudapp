const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/basic-crud-api', { useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('DB connected!');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/quotes', (req, res) => {
    console.log(req.body)
});

app.listen(3000, ()=>{
    console.log('Listing at port 3000');
});


const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const pug = require('pug');
const port = 8080

// load data from data.json
let rawData = fs.readFileSync("data.json");
const data = JSON.parse(rawData);

app.use(express.static(path.join(__dirname + "/resources")));

// pug
app.set('view engine', 'pug')

// routes
app.get('/data', (req, res) => res.send(data));

app.get('/', (req, res) => {
   res.render('main', data)
});



app.listen(process.env.PORT || 8080)
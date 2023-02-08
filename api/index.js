console.log("vercel");
const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');
const services = require('./routes/services');
const plans = require('./routes/plans');

const app = express();
app.engine('ejs',ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended: true}));
// app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'/public')));

app.get('/', (req, res) => {
    res.render('index');
})
app.use('/services', services);
app.use('/plans', plans);


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})
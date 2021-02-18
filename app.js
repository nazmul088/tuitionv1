//jshint esversion:6
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const connectDB = require('./database/connection');
const app = express();
const dotenv = require('dotenv'); 
dotenv.config({path:'config.env'})




app.set('view engine', 'ejs');
app.set('views', 'views'); //if defautl name fof view folder change then need to mention here



app.use(morgan('tiny'));// this module helps us to log incoming url
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

connectDB();


app.use("/",require('./routes/admin'));
/*
app.get("/", function(req, res) {
    console.log("HOME PAGE");
    products = []
    res.render('home', {
        prods: products,
        pageTitle: 'HOME',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
    // Post.find({}, function(err, posts) {
    //     res.render("home", {
    //         startingContent: homeStartingContent,
    //         posts: posts
    //     });
    // });
});

*/


/*
app.use(function(req, res) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    //res.status(404).render('404', { pageTitle: 'Page Not Found' })
});
*/

app.listen(4000, function() {
    console.log("Server started on port 4000");
});
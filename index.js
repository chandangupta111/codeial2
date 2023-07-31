const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());


app.use(express.static('./assets'))
app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router

//views engine explain

 app.set('view engine', 'ejs');
 app.set('views', './views');
 app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
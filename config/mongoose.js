const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codeial');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error conneting to MongoDB"));

db.once('open', function(){
    console.log('connected to Databas :: MongoDB');
});

module.exports = db;
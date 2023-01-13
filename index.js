// install express with `npm install express` 
const express = require('express');
const app = express();
const request = require('request');
const https = require('https');


app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html')
});










app.listen(3000, function (){
    console.log('up on 3k')
})

// export 'app'
// module.exports = app
// install express with `npm install express` 
const express = require('express');
const app = express();
const request = require('request');
const https = require('https');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html')
});


app.use(express.static((__dirname, 'public')));


app.post('/', function (req, res) {
    
height = req.body.height
weight = req.body.weight
age = req.body.age
gender = req.body.test

weightInKg = weight * .453592
heightInCm = height * 2.54

let BMR = null; 

if(gender == "male") {
BMR = 88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * age)
}else if (gender == "female"){
    BMR = 447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * age)
}


res.sendFile(__dirname + '/success.html')

})




app.listen(3000, function (){
    console.log('up on 3k')
})

// export 'app'
module.exports = app
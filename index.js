// install express with `npm install express` 
const express = require('express');
const app = express();
const request = require('request');
const ejs = require('ejs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
let bmr = null;







app.get('/', function (req, res){
    let today = new Date();
    var options = 
{ 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long'
}
let day = today.toLocaleDateString("en-US", options)    

res.render('index', {currentDay: day, bmr: bmr});

});

app.use(express.static(('public')));



app.post('/', function (req, res) {
height = req.body.height
weight = req.body.weight
age = req.body.age
gender = req.body.test
exercise = req.body.exercise

weightInKg = weight * .453592
heightInCm = height * 2.54

if(gender == "male") {
bmr = Math.ceil(88.362 + (13.397 * weightInKg) + (4.799 * heightInCm) - (5.677 * age))
}else if (gender == "female"){
bmr = Math.ceil(447.593 + (9.247 * weightInKg) + (3.098 * heightInCm) - (4.330 * age))
}

if(exercise == "1"){
    let light = bmr * .10
    bmr = bmr + light
}else if(exercise == "2"){
    let light = bmr * .31
    bmr = bmr + light
}else if(exercise == "3"){
    let light = bmr * .37
    bmr = bmr + light
}else if(exercise == "4"){
    let light = bmr * .43
    bmr = bmr + light
}else if(exercise == "5"){
    let light = bmr * .54
    bmr = bmr + light
}else {
   
}
// percent differences based on exercise 
//1 = 18%
//2 = 31%
//3 37%
//4 43%
//5 54%
res.redirect("/")

})




app.listen(3000, function (){
    console.log('up on 3k')
})

// export 'app'
module.exports = app
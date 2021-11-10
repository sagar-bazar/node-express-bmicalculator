const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;
  res.send("The result of calculation is " + result);
});

app.post("/bmiCalculator", function(req, res){
  var w1 = req.body.weight;
  var h1 = req.body.height;
  var bmi = bmiCalculator(w1, h1);
  res.send("Your BMI is " + bmi);
})
app.listen(3000, function(){
  console.log("Server started on port:3000");
});


function bmiCalculator (weight, height) {
    var bmi = weight/Math.pow(height, 2);
    bmi  = Math.round(bmi);
    if (bmi < 18.5){
        var interpretation = ("Your BMI is " + bmi + ", so you are underweight.");
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        var interpretation = ("Your BMI is " + bmi + ", so you have a normal weight.");
    }
    else if (bmi > 24.9){
        var interpretation = ("Your BMI is " + bmi + ", so you are overweight.");
    }
    return interpretation;
}

var halfButton;
var halfInput;
var fortuneButton;
var fortuneInput;
var fortuneOutput;
var text;
var restyleButton;

var marvelFortune = ["Iron Man","Captain America", "Hulk", "Spiderman", "Black Widow", "Hawkeye", "Loki", "Scarlet Witch", "Doctor Strange", "StarLord","Daredevil", "Groot", "ShangChi"]


document.addEventListener("DOMContentLoaded", function(){
  halfButton = document.getElementById("half-button");
  halfInput = document.getElementById("half-input");
  fortuneInput = document.getElementById("fortune-input");
  fortuneButton = document.getElementById("fortune-button");
  fortuneOutput = document.getElementById("fortune-output");
  text = document.getElementById("text");
  restyleButton = document.getElementById("restyle-button");


halfButton.addEventListener("click", function(){
      var currentHalfInput = halfInput.value;;
      halfNumber(currentHalfInput);
    });

fortuneButton.addEventListener("click", function(){
      var currentFortuneInput = fortuneInput.value;
      fortune(currentFortuneInput);
    });

restyleButton.addEventListener("click", restyle);
  });

function halfNumber(num){
  var half_num = num / 2;
    alert("Half of " + num.toString() + " is " + half_num.toString());
}

function fortune(name){
    var marvelName = name + ", you are";
    marvelName += " " + marvelFortune[Math.floor(Math.random() * marvelFortune.length)];
    text.innerText = marvelName;
}

function restyle(){
  var red = Math.random() * 255;
   var green = Math.random() * 255;
   var blue = Math.random() * 255;
   var outputColorString = "rgb(" + red + "," + green + "," + blue + ")";
  text.style.color = outputColorString;
  var fontArray=["Sans Serif","Garamond","Times New Roman","Courier New"];
  var randomindex1= Math.floor(Math.random()*fontArray.length);
  var randRot = Math.random()*20;
  text.style.fontFamily= ""+ fontArray[randomindex1] + "";


 }

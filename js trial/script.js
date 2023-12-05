console.log("hi js")
var tPN = 9;
var pumpkinsPick = 15
// var sumPumpkins = tPN + pumpkinsPick;
tPN = tPN + pumpkinsPick
pumpkinsPick = 10;
tPN = tPN + pumpkinsPick
// console.log("tPN:",tPN)
// console.log ("total number", sumPumpkins)\
console.log("tPN:", tPN)
var userName = "ketana";
var userAge = "19";
var displayUserDate = userName + " is " + userAge + " years old. "
// "ket" is "19" years old
console.log(displayUserDate)
// goal: update text inside h1 and make it into the text inside displayUserDate
// 1. get h1 element from DOM tree
// 2. set the text of h1 element to vlaue inside displayUserData
var h1Element = document.getElementById ("userData")
console.log("h1 element")
var h1Element = document.getElementById("userData")
console.log("h1Element value", h1Element);
h1Element.innerHTML =displayUserDate;

//goal: set bg color of box div 
//1. grab the boxDiv element from the DOM tree document.getElementById
//2. set the color by accessing css stylesheet using style.backgroundColor
var boxDiv = document.getElementById("box");
console.log("bocDiv value", boxDiv);
boxDiv.style.backgroundColor = "pink";

var button = document.getElementById("button");
console.log("button value", button);
button.style.borderRadius = "50%";
button.style.backgroundColor = "orange"

var animation = document.getElementById("animation");
console.log("animation value", animation);
animation.style.animationName = "animation"
animation.style.animationIterationCount = "infinite"



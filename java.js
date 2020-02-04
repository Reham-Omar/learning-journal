

function myFunction() {
  var txt;
  var r = confirm("Press a button!");
  if (r == true) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}

var person = prompt("Please enter your name", "Reham Omar");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}

var text;
var favDrink = prompt("What's your favorite  drink?");
switch(favDrink) {
  case "orange":
    text = "Excellent choice! it is good for your soul.";
    break;
  case "tea":
    text = "tea is my favorite too!";
    break;
  case "coffee":
    text = "Really? Are you sure the coffee is your favorite?";
    break;
  default:
    text = "I have never heard of that one..";
    break;
}
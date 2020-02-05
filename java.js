
var person = prompt("Please enter your name", "Reham Omar");

 if (person != null) {
  person = prompt("hello   " + person + "   how are you today?");
  
 }

function myFunction() {
  var txt;
  var r = prompt("Are you from jordan ?");
  if (r == "yes") {
    person =confirm ("I'm from jordan too ?");
  } else {
    person = confirm ("Welcome to jordan ");
  }
  /*console.log(txt)*/
  /*document.getElementById("demo").innerHTML = txt;*/
}
myFunction ();

 

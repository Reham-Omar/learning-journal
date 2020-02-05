var person = prompt("Please enter your name", "Reham Omar");

 if (person != null) {
  document.getElementById("drink").innerHTML =
   "Hello " + person + "! How are you today?";
 }

function myFunction() {
  var txt;
  var r = confirm("Are you from jordan ?");
  if (r == true) {
    txt = "I really love jordan";
  } else {
    txt = "welcome to jordan";
  }
  console.log(txt)
  document.getElementById("demo").innerHTML = txt;
}
myFunction ();

 

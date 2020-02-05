
var person = prompt("Please enter your name", "Reham Omar");

 if (person != null) {
  person = prompt("hello   " + person + "   how are you today?");
  
 }

function myFunction() {
  var txt;
  var r = prompt("Are you from jordan ? (yes or No)");
  if (r == "yes") {
    person =confirm ("I'm from jordan too ");
  } else if (r=="No"){
    person = confirm ("Welcome to jordan ");
  } else while(r!=="yes" && r!=="No" )
  { 
    var r = prompt("Are you from jordan ? (yes or No)");

  }
  var n = prompt("How many times  did you visit petra ?");
var item="";
for(var i=0;i<n;i++)
{
  item=item+ '<img src="1111.jpg">';
}
  return item;

  }
//myFunction ();

document.write('<p>'+myFunction()+'</p>');

 /*console.log(txt)*/
  /*document.getElementById("demo").innerHTML = txt;*/

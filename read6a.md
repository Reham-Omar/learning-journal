
# summary 
## lab 6 a
## Dynamic web pages with JavaScript

## CREATING A BASIC JAVASCRIPT 

JavaScript is written in plain text, just like HTML and CSS, so you do not
need any new tools to write a script.

*This example adds a greeting into an
HTML page , it is depending on the time of day. *


var today= new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
greeting= 'Good evening!';
else if (hourNow > 12) {
greeting = ' Good afternoon!';
else if (hourNow > 0) {
greeting = 'Good morni ng!';
else {
greeting = 'Welcome! ' ;
document .write( ' <h3>' +greeting + ' </ h3> ');

#### You can put JavaScript in the HTML between opening <script> and closing </script> tags
but it is better to put scripts in their own files

 ###  so what's the way to fit CSS, HTML, JAVASCRIPT  together 

- <html>
CONTENT LAYER (. html files )

- {css}
PRESENTATION LAYER (. css files) 

- javascript()
BEHAVIOR LAYER (.js files )


## Basic javascript instructions : 

- STATEMENTS 
- COMMENTS 


#### WHAT IS A VARIABLE?  

A script will have to temporarily
store the bits of information it
needs to do its job. It can store this
data in variables. 


### DATA TYPES 

- NUMERIC DATA TYPE 
- STRING DATA TYPE 
- BOOLEAN DATA TYPE 

### for example :

var price;
var quantity;
var total;
price = 5;
quantity = 14;
total = price * quantity;
c02/j s/numeri c-vari ab 1 e .j s
var el = document.getElementByid( ' cost ');
el .textContent = '$' +total; 

*we also learn how to copy  full text *

### Read 06 steps to copy full text :
1- Create new repo on GitHub and name it practice-js

2- Clone this repo on your computer locally inside projects folder

3- Go to https://github.com/LTUC/amman-102d3/ and clone this repo on your computer locally
inside projects folder

4- Now, we want to copy a starter code from class-06 folder that is inside the amman-102d6 repo
to our repo practice-js using this command:

cp -r amman-102d3/class-06/starter-code/* practice-js

5- Open your practice-js project on Vscode

6- Create new HTML file and name it add-content.html 

7- Create new folder and name it (js) then create a file inside this folder and name add-content.js

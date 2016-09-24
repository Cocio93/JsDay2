//OPGAVE 1
var divs = document.getElementsByClassName("opg1");
for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red";
}

//OPGAVE 2
function person(firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
}

var p1 = new person("Anders", "Hansen", "23123123", "somethingcool");
var p2 = new person("Christine", "Luksus", "232313", "thisismyemail");
var p3 = new person("Hanne", "Stegepande", "2623423423", "emailisfordorks");
var p4 = new person("Peter", "Fra Leasy", "6552497", "whatisemail?");
var p5 = new person("Simon", "Voldsberg", "992401433", "younevergonnagetit");
var personArray = [p1, p2, p3, p4, p5];

var htmlTable = document.getElementsByTagName("html");
personArray.forEach(function(entry) {
    
});

//OPGAVE 3
function div1() {
    console.log("Hello from red div");
}
function div2() {
    console.log("Hello from blue div");   
}
function div3() {
    console.log("Hello from green div");
}

//OPGAVE 4
function display1(e) {
    e.textContent = "I have a red border";
    e.onmouseleave = function() {
      e.textContent = "";  
    };
}

function display2(e) {
    e.textContent = "I have a blue border";
    e.onmouseleave = function() {
      e.textContent = "";  
    };
}

function display3(e) {
    e.textContent = "I have a green border";
    e.onmouseleave = function() {
      e.textContent = "";  
    };
}

//OPGAVE 5



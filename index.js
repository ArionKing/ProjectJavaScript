// // This function will generate a random colour 

// function getRandomColour() { // this is simply declaring a function and giving it the name of getRandomColour.
//     const letters = "0123456789ABCDEF" ; // this is declaring a constant called letters and assining a string value to it.
//     let colour = "#"; // this is declaring a variable called colour and assining another string value.
//     for (let i = 0; i < 6; i++) { // this is a for loop to generate a colour
//         colour += letters[Math.floor(Math.random() * 16)]; //math.floor generates random number between 0 and 1. math.random rounds down the nearest whole number. 
//     }
//     return colour;
// }


// // function to change the background colour of the body
// function changeColour() {
//     document.body.style.backgroundColor = getRandomColour(); // document: This is a global object in web browsers that represents the entire HTML document.
// } //  combination of dot notation used to access properties and sub-properties of objects.


// // Add event listener to the button
// document.getElementById("colourButton").addEventListener("click", changeColour); //document.getElementById searches my HTML document and finds the ID of colourButton.
// // .addEventListener("click", changeColour) adds an event listener to that button so when its clicked the function changeColour is called.



// //Slideshow code//
// let currentSlide = 0; // This line declares a variable currentSlide and initializes it to 0. 
// const slides = document.querySelectorAll("#slideshow img"); 
// const totalSlides = slides.length;

// function showSlide(index) { // defining a function
//     slides.forEach((slide) => { // This line uses the forEach method to iterate over each element in the slides array.
//         slide.style.display = "none"; // slide is a parameter of forEach method and is being used by an arrow function. 
//     }); 
//     slides[index].style.display = "block"
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % totalSlides; 
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//     showSlide(currentSlide);
// }

// showSlide(currentSlide); 

// setInterval(nextSlide, 3000); // Automatically advance slides every 3 seconds

// // 

// // document.getElementById("message").innerText = "Hello World!"; // this is creating HTML through only JavaScript.

// // 

// window.alert("Hello World!");  // this calls the log method of the console object to display the content specified in the ().

// // 

// console.log("Hello World!")

// // 

// const firstName = "Arion";
// const valueOfPi = 3.142;
// let isValid = true;
// let jsObject = console;
// let jsMethod = console.log;
// let jsSymbol = Symbol();
// let emptyVariable = null;
// let unusedVariable 

// console.log("firstName:" + typeof firstName);
// console.log("valueOfPi:" + typeof valueOfPi);
// console.log("isValid:" + typeof isValid);
// console.log("jsObject:" + typeof jsObject);
// console.log("jsMethod:" + typeof jsMehtod);
// console.log("jsSymbol:" + typeof jsSymbol);
// console.log("emptyVariable:" + typeof emptyVariable);
// console.log("unusedVariable:" + typeof unusedVariable);

// //

// function square(arg) {
//     return arg * arg ; 
// }

// function add(argOne, argTwo = 10 ) {
//     return argOne + argTwo ;
// }

// function squareAdd(arg) {
//     let result = square(arg)
//     return result + add(arg)
// }

// console.log("8 x 8:" + square(8));
// console.log("8 + 20:" + add(8)); 
// console.log("8 + 10:" + add(8));
// console.log("(8 x 8) + (8 + 10):" + squareAdd(8)); 

// // let myName = "External Script" 
// // function readName() {
// //     console.log(myName) 
// // }

// function readName() {
//     let myName = "External Script" ;
//     console.log(myName)
// }

// function getName() {
//     let myName = "internal Script" ;
//     console.log(m)
// }

// // Closures

// const addd = (function () {
//     let count = 0
//     const nested = function () { 
//         return count = count + 1 
//     }
//     return nested
// })(); 

// console.log("Count is " + addd());
// console.log("Count is " + addd());
// console.log("Count is " + addd());

// Convert Values

// ( function () {
//     let sum, net = "25", tax = 5.00 ;
//     sum = net + tax;
//     console.log("sum: " + sum + " " + typeof sum);

//     sum = parseFloat(net) + tax 
//     console.log("sum: " + sum + " " + typeof sum); 

//     console.log("tax: " + tax + " " + typeof tax);
//     tax = tax.toString(); 
//     console.log("tax: " + tax + " " + typeof tax); 

//     net = "$" + net;
//     console.log("net: " + net + " " + parseInt(net)); 
// })()


// ( function () {
//     let sum = 80 + 20 ; console.log("Addition: " + sum ); 
//     let sub = sum - 50 ; console.log("Subtraction: " + sub); 
//     let mul = sum * 5 ; console.log("Multiplication: " + mul);
//     let div = sum / 4 ; console.log("Division: " + div);
//     let mod = sum % 2 ; console.log("Modulus: " + mod);
//     let inc = ++sum ; console.log("Increment: " + inc);
//     let dec = --sum ; console.log("Decrement: " + dec);
// })();

// Assign Values 

// let str = "JavaScript";
// str += " is fun";
// console.log(str);

// ( function() {
//     let msg = "Javascript";
//     msg += " Fun";
//     console.log("Add and concatenate: " + msg);
//     let sum = 5.00;
//     sum += 2.50;
//     console.log("Add and assign decimal: " + sum);
//     sum = 8;
//     sum -= 4;
//     console.log("Subtract and assign integer: " + sum);
//     sum = 8;
//     sum *= 4;
//     console.log("Multiply and assign integer: " + sum);
//     sum = 8;
//     sum /= 4;
//     console.log("Divide and assign: " + sum);
//     sum = 8;
//     sum %= 4;
//     console.log("Modulus and assign integer: " + sum);
// })(); 

// Make comparisons 

// (function () {
//     let comparison, sum = 8, str ="JavaScript"; 
//     comparison = str === "JAVASCRIPT";
//     console.log("String Equality? " + comparison);
//     comparison = str === "JavaScript";
//     console.log("String Equality? " + comparison);
//     comparison = sum === 8;
//     console.log("Number Equality? " + comparison);
//     comparison = sum < 5;
//     console.log("Less than? " + comparison);
//     comparison = sum <= 8;
//     console.log("Less than or equal to? " + comparison);
//     comparison = sum <= 8;
//     console.log("Greater than or equal to " + comparison);
// })(); 

// Assess Logic 

// ( function() {
//     let result, yes = true, no = false;
//     result = yes && yes;
//     console.log("Are both True? " + result); 
//     result = yes && no;
//     console.log("Are both still True? " + result); 
//     result = yes || no; 
//     console.log("Are either True? " + result);
//     console.log("Original value " + yes); 
//     yes = !yes;
//     console.log("Toggled Value " + yes);
// })();

// Examine Conditions 

// ( function() {
//     const numOne = 8, numTwo = 3;
//     let verb = (numOne !== 1) ? " are " : " is ";
//     console.log("There" + verb + numOne);

//     let parity = (numOne % 2 !==0) ? " Odd" : " Even";
//     console.log(numOne + " is" + parity);

//     parity = (numTwo % 2 !==0) ? " Odd" : " Even";
//     console.log( numTwo + " is" + parity);

//     let max = (numOne > numTwo) ? numOne : numTwo;
//     console.log(max + " is the Greater Number");
// })(); 

// Force Order 

// ( function () {
//     let sum = ( 9 + 12) / 3; 
//     console.log("Ungrouped sum: " + sum );
// })();  

// Branch if and if statements

// let flag = true 
// if (!flag) {
//     console.log("power is OFF!");
// };

// if (flag) {
//     console.log("power is ON!");
// }; 

// if (7 < 2) {
//     console.log("Failure");
// };

// if (7 > 2) {
//     console.log("Success");
// };

// Branch Alternatives 

// ( function () {
//     let flag = false;
//     const num = 10;

//     if (!flag) {
//         console.log("Power is OFF");
//     }
//     else {
//     console.log("Power os ON");
//     }

//     if (num === 5) {
//         console.log("Number is Five");
//     }
//     else if (num === 10) {
//         console.log("Number is Ten");
//     }
//     else { 
//         console.log ("Number is Neither Ten nor Five");
//     }
//     }
// )(); 


// Switch Alternatives


// ( function () {
//     let day

//     switch (7) {
//         case 1 : day = "Monday" ; break;
//         case 2 : day = "Tuesday" ; break;
//         case 3 : day = "Wednesday" ; break;
//         case 4 : day = "Thursday" ; break;
//         case 5 : day = "Friday" ; break;
//         default : day = "Weekend"; 
//     }
//     console.log("It is " + day); 
// })();

//For Loops

// for (let i = -4; i < 5; i++) {
//     console.log("Number is: " + i);
// }; 

// ( function() {
//     for (i = 1; i < 11; i++) {
//         console.log("Interation Number: " + i);
//     }
// })(); 

//While Loop





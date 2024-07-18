// This function will generate a random colour 

function getRandomColour() { // this is simply declaring a function and giving it the name of getRandomColour.
    const letters = "0123456789ABCDEF" ; // this is declaring a constant called letters and assining a string value to it.
    let colour = "#"; // this is declaring a variable called colour and assining another string value.
    for (let i = 0; i < 6; i++) { // this is a for loop to generate a colour
        colour += letters[Math.floor(Math.random() * 16)]; //math.floor generates random number between 0 and 1. math.random rounds down the nearest whole number. 
    }
    return colour;
}


// function to change the background colour of the body
function changeColour() {
    document.body.style.backgroundColor = getRandomColour(); // document: This is a global object in web browsers that represents the entire HTML document.
} //  combination of dot notation used to access properties and sub-properties of objects.


// Add event listener to the button
document.getElementById("colourButton").addEventListener("click", changeColour); //document.getElementById searches my HTML document and finds the ID of colourButton.
// .addEventListener("click", changeColour) adds an event listener to that button so when its clicked the function changeColour is called.



//Slideshow code//
let currentSlide = 0; // This line declares a variable currentSlide and initializes it to 0. 
const slides = document.quereySelectorAll("#slideshow img"); 
const totalSlides = slides.length;

function showSlide(index) { // defining a function
    slides.forEach((slide) => { // This line uses the forEach method to iterate over each element in the slides array.
        slide.style.display = "none"; // slide is a parameter of forEach method and is being used by an arrow function. 
    }); 
    slides[index].style.display = "block"
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; 
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

showSlide(currentSlide); 

setInterval(nextSlide, 3000); // Automatically advance slides every 3 seconds
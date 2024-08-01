// script.js

// Function to show notification when the button is clicked
function showNotification() {
    alert("Thank you for your interest! We will contact you shortly.");
}

// Slideshow functionality
let slideIndex = 0;
showSlides();

// Function to change slides by a given offset
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to show slides and handle slideshow logic
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Interactivity for Contact Form Submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
});

// Adding hover effect notification for destinations
document.querySelectorAll('.destination').forEach(item => {
    item.addEventListener('mouseenter', event => {
        alert("You are exploring" ($(item.querySelector('h3').innerText)));
    });
});
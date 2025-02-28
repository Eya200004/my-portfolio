// Particle.js Configuration
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded!');
});
// Typing Animation for Header Text
const animatedText = document.getElementById('animated-text');
const text = "Hey, my name is Aya Karfi."; // Text to type
let index = 0;

function typeText() {
  if (index < text.length) {
    animatedText.textContent += text.charAt(index); // Add one character at a time
    index++;
    setTimeout(typeText, 100); // Adjust speed here (100ms per letter)
  }
}

// Start the typing animation
typeText();

// Dynamic Text Animation
const dynamicText = document.getElementById('dynamic-text');
const texts = ["programmer", "AI enthusiast", "developer"];
let textIndex = 0;

function changeText() {
  dynamicText.textContent = texts[textIndex]; // Update the dynamic text
  textIndex = (textIndex + 1) % texts.length; // Cycle through the array
}

// Initial call to display the first text immediately
changeText();

// Change text every 2 seconds
setInterval(changeText, 2000);

// Hover Effects for Profile Photo
const profilePhoto = document.querySelector('.profile-photo');

profilePhoto.addEventListener('mouseover', () => {
  profilePhoto.style.transform = 'scale(1.1)';
});

profilePhoto.addEventListener('mouseout', () => {
  profilePhoto.style.transform = 'scale(1)';
});

// Hover Effects for Project Cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-10px)';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Hover Effects for Skill Boxes
const skillBoxes = document.querySelectorAll('.skill-box');

skillBoxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    box.style.transform = 'scale(1.1)';
  });

  box.addEventListener('mouseout', () => {
    box.style.transform = 'scale(1)';
  });
});

// Highlight active link based on current URL
const currentLocation = window.location.href;
const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});
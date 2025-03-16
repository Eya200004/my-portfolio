//for hide the header while scrolling
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    document.getElementById("header").classList.remove("hide");
    return;
  }

  if (currentScroll > lastScroll) {
    document.getElementById("header").classList.add("hide");
  } else if (currentScroll < lastScroll) {
    document.getElementById("header").classList.remove("hide");
  }

  lastScroll = currentScroll;
});

// Particle.js Configuration
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded!');
});


const dynamicText = document.getElementById('dynamic-text');
const texts = ["Futur IT Engineer.", "AI Enthusiast.", "Tech-Driven Creator."];
let textIndex = 0;

function changeText() {
  // Fade out the text
  dynamicText.style.opacity = 0;

  // Wait for the fade-out transition to complete
  setTimeout(() => {
    dynamicText.textContent = texts[textIndex]; // Update the text
    textIndex = (textIndex + 1) % texts.length; // Cycle through the array

    // Fade in the new text
    dynamicText.style.opacity = 1;
  }, 500); // Match this duration with the CSS transition
}

// Initial call to display the first text immediately
changeText();

// Change text every 3 seconds (adjust as needed)
setInterval(changeText, 3000);
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

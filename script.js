// Hide header while scrolling
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

// Dynamic Text Animation
const dynamicText = document.getElementById('dynamic-text');
const texts = ["Future IT Engineer.", "AI Enthusiast.", "Tech-Driven Creator."];
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

if (profilePhoto) {
  profilePhoto.addEventListener('mouseover', () => {
    profilePhoto.style.transform = 'scale(1.1)';
  });

  profilePhoto.addEventListener('mouseout', () => {
    profilePhoto.style.transform = 'scale(1)';
  });
}

// Matrix-like animation for the computer screen
function animateDigitalRain() {
  const digitTexts = document.querySelectorAll('.computer-svg text');
  
  setInterval(() => {
    digitTexts.forEach(text => {
      // Randomly change the binary digits
      if (Math.random() > 0.5) {
        const randomBinary = Math.random() > 0.5 ? '01' : '10';
        text.textContent = randomBinary;
      }
      
      // Randomly change opacity for blinking effect
      text.style.opacity = Math.random() > 0.7 ? '0.5' : '1';
    });
  }, 800);
}

// Enhanced Project Cards interactions
function setupProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    // Basic hover effect (from your original code)
    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
    });
    
    // Enhanced 3D hover effect
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate the position for the highlight effect
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Create a subtle tilt effect
      const tiltX = (centerY - y) / 20;
      const tiltY = (x - centerX) / 20;
      
      card.style.transform = `translateY(-10px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      card.style.boxShadow = `0 15px 30px rgba(0, 176, 255, 0.3), 
                              ${(x - centerX) / 10}px ${(y - centerY) / 10}px 20px rgba(0, 176, 255, 0.1)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
      card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });
  });
}

// Hover Effects for Skill Boxes
function setupSkillBoxes() {
  const skillBoxes = document.querySelectorAll('.skill-box');

  skillBoxes.forEach(box => {
    box.addEventListener('mouseover', () => {
      box.style.transform = 'scale(1.1)';
    });

    box.addEventListener('mouseout', () => {
      box.style.transform = 'scale(1)';
    });
  });
}

// Scroll animations for project cards
function setupScrollAnimations() {
  const projectCards = document.querySelectorAll('.project-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.2 });
  
  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s ease';
    observer.observe(card);
  });
}

// Highlight active link based on scroll position
function setupActiveNavLinks() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// Initialize all functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize digital rain animation if the SVG exists
  if (document.querySelector('.computer-svg')) {
    animateDigitalRain();
  }
  
  setupProjectCards();
  setupSkillBoxes();
  setupScrollAnimations();
  setupActiveNavLinks();
  
  // Highlight active link based on current URL (from your original code)
  const currentLocation = window.location.href;
  const navLinks = document.querySelectorAll('header nav a');

  navLinks.forEach(link => {
    if (link.href === currentLocation) {
      link.classList.add('active');
    }
  });
});

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


particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js loaded!');
});


const dynamicText = document.getElementById('dynamic-text');
const texts = ["Future IT Engineer.", "AI Enthusiast.", "Programmer."];
let textIndex = 0;

function changeText() {
  
  dynamicText.style.opacity = 0;

  
  setTimeout(() => {
    dynamicText.textContent = texts[textIndex]; 
    textIndex = (textIndex + 1) % texts.length; 

    
    dynamicText.style.opacity = 1;
  }, 500); 
}


changeText();


setInterval(changeText, 3000);


const profilePhoto = document.querySelector('.profile-photo');

if (profilePhoto) {
  profilePhoto.addEventListener('mouseover', () => {
    profilePhoto.style.transform = 'scale(1.1)';
  });

  profilePhoto.addEventListener('mouseout', () => {
    profilePhoto.style.transform = 'scale(1)';
  });
}


function animateDigitalRain() {
  const digitTexts = document.querySelectorAll('.computer-svg text');
  
  setInterval(() => {
    digitTexts.forEach(text => {
    
      if (Math.random() > 0.5) {
        const randomBinary = Math.random() > 0.5 ? '01' : '10';
        text.textContent = randomBinary;
      }
      
      
      text.style.opacity = Math.random() > 0.7 ? '0.5' : '1';
    });
  }, 800);
}


function setupProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    
    card.addEventListener('mouseover', () => {
      card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'translateY(0)';
    });
    
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      
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


document.addEventListener('DOMContentLoaded', () => {
  
  if (document.querySelector('.computer-svg')) {
    animateDigitalRain();
  }
  
  setupProjectCards();
  setupSkillBoxes();
  setupScrollAnimations();
  setupActiveNavLinks();
  
  
  const currentLocation = window.location.href;
  const navLinks = document.querySelectorAll('header nav a');

  navLinks.forEach(link => {
    if (link.href === currentLocation) {
      link.classList.add('active');
    }
  });
});
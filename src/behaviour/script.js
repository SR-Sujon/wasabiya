'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});

/**Slider Starts */

const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
let currentImageIndex = 0;

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  slider.style.transform = `translateX(${currentImageIndex * -100}%)`;
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  slider.style.transform = `translateX(${currentImageIndex * -100}%)`;
}

// Add event listeners for navigation
document.addEventListener('DOMContentLoaded', () => {
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.addEventListener('click', nextImage);

  const prevButton = document.createElement('button');
  prevButton.textContent = 'Prev';
  prevButton.addEventListener('click', prevImage);

  slider.parentNode.appendChild(nextButton);
  slider.parentNode.appendChild(prevButton);
});

// Auto-play the slideshow
setInterval(nextImage, 3000); // Change image every 5 seconds



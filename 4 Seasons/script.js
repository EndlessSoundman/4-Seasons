// script.js

const images = document.querySelectorAll('.image');
let currentIndex = 0;

document.addEventListener('wheel', (event) => {
  event.preventDefault(); // Prevent default scroll behavior

  // Determine scroll direction
  const direction = event.deltaY > 0 ? 1 : -1;

  // Update currentIndex based on scroll direction
  currentIndex = (currentIndex + direction + images.length) % images.length;

  // Show the corresponding image
  images.forEach((image, index) => {
    if (index === currentIndex) {
      image.style.opacity = 1;
      image.style.transition = 'opacity 0.5s ease-in-out'; // Smooth transition
    } else {
      image.style.opacity = 0;
    }
  });
});

// grab the elements
const hamburger = document.querySelector('.hamburger');
const navLinks  = document.querySelector('.nav-links');

// toggle mobile menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// optional: close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  })
);

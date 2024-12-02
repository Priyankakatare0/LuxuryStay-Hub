// Toggle dropdown menu visibility
const dropdownToggles = document.querySelectorAll('.dropdown');
dropdownToggles.forEach((dropdown) => {
  dropdown.addEventListener('click', () => {
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu) {
      menu.classList.toggle('visible');
    }
  });
});
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});


// Search bar functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    alert('Please enter a search term.');
  }
});

// Hero section buttons
const exploreButton = document.querySelector('.explore-button');
const bookNowButton = document.querySelector('.book-now-button');

exploreButton.addEventListener('click', () => {
  alert('Explore button clicked! Redirecting...');
});

bookNowButton.addEventListener('click', () => {
  alert('Book Now button clicked! Redirecting...');
});

// Responsive navigation menu (optional for mobile toggle)
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<span>☰</span>';
document.querySelector('.nav-container').appendChild(menuToggle);

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('visible');
});

// Smooth scrolling (optional for internal navigation links)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Close dropdown menus on outside click
document.addEventListener('click', (event) => {
  dropdownToggles.forEach((dropdown) => {
    const menu = dropdown.querySelector('.dropdown-menu');
    if (menu && !dropdown.contains(event.target)) {
      menu.classList.remove('visible');
    }
  });
});

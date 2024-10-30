// Get elements
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const newsletterBtn = document.getElementById('newsletter-btn');

// Sections and navigation links
const homeLink = document.getElementById('home-link');
const servicesLink = document.getElementById('services-link');
const aboutLink = document.getElementById('about-link');

const homeSection = document.getElementById('home-section');
const servicesSection = document.getElementById('services-section');
const aboutSection = document.getElementById('about-section');

// Function to hide all sections and show only the selected one
function showSection(section) {
    homeSection.classList.remove('active');
    servicesSection.classList.remove('active');
    aboutSection.classList.remove('active');
    section.classList.add('active');
}

// Event listeners for navigation
homeLink.addEventListener('click', function() {
    showSection(homeSection);
});

servicesLink.addEventListener('click', function() {
    showSection(servicesSection);
});

aboutLink.addEventListener('click', function() {
    showSection(aboutSection);
});

// Show the popup after 5 seconds (5000ms)
window.addEventListener('load', function() {
    setTimeout(function() {
        popup.style.display = 'flex';
    }, 5000); // 5000ms = 5 seconds
});

// Show the popup when the "Subscribe to Newsletter" button is clicked
newsletterBtn.addEventListener('click', function() {
    popup.style.display = 'flex';
});

// Hide the popup when the close button is clicked
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Hide the popup when clicking outside of the form
window.addEventListener('click', function(e) {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

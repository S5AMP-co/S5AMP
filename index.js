// Example JavaScript code for adding dynamic features
// You can use JavaScript to create interactive elements and add functionality

// Example: Toggle a mobile navigation menu
const mobileNavButton = document.querySelector('#mobile-nav-button');
const mobileNavMenu = document.querySelector('#mobile-nav-menu');

mobileNavButton.addEventListener('click', () => {
    mobileNavMenu.classList.toggle('active');
});

// Example: Form validation
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    
    if (!name || !email) {
        alert('Please fill out all required fields.');
    } else {
        // Send form data to the server or perform other actions
        // You may need a backend server to handle form submissions
    }
});

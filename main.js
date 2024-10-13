// Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Redirect to Portfolio Function
function redirectToPortfolio() {
    // Update this URL to your actual portfolio link
    window.location.href = "http://127.0.0.1:5500/Jagadeesh_Portfolio/index.html";
}

// Letter Rotation Functions
function rollLetter(element) {
    element.style.transform = 'rotateY(360deg)';
}

function resetLetter(element) {
    element.style.transform = 'rotateY(0)';
}

// Roles to Keep Changing
const roles = ["Full Stack Web Developer", "MS in Computer Science", "Software Engineer", "Frontend Developer"];

// Function to Update the Role Text
function updateRole() {
    const roleSpan = document.getElementById('role');
    let i = 0;
    setInterval(() => {
        roleSpan.textContent = roles[i];
        i = (i + 1) % roles.length;
    }, 2000); // Changing role every 2 seconds
}

// Calling the Function
updateRole();

// EmailJS Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const serviceID = 'service_6t6aegb'; // EmailJS Service ID
    const templateID = 'template_09xeiqj'; // EmailJS Template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, (err) => {
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS Error:', err);
        });
});

// Toggle Menu Function
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Close Menu if Clicked Outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target) && !closeIcon.contains(event.target)) {
        navLinks.classList.remove('show');
    }
});

function toggleTheme() {
    const body = document.body;
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
}


// Function to toggle dark mode/light mode for the hero section
function toggleHeroTheme() {
    const heroSection = document.getElementById('hero');
    heroSection.classList.toggle('dark-mode');
}


// Calling the function to toggle theme when the toggle switch is clicked
document.getElementById('theme-toggle').addEventListener('change', toggleHeroTheme);


function redirectToPortfolio() {
    window.location.href = "http://127.0.0.1:5500/Jagadeesh_Portfolio/index.html";
}



// Function to rotate each letter on hover
function rollLetter(element) {
    element.style.transform = 'rotateY(360deg)';
}

// Function to reset letter rotation
function resetLetter(element) {
    element.style.transform = 'rotateY(0)';
}


// roles to keep changing
const roles = ["Full Stack Web Developer", "MS in Computer Science", "Software Engineer", "Frontend Developer"];

// Function to update the role text
function updateRole() {
    const roleSpan = document.getElementById('role');
    let i = 0;
    setInterval(() => {
        roleSpan.textContent = roles[i];
        i = (i + 1) % roles.length;
    }, 2000); // Changing role every 2 seconds
}

// calling the function
updateRole();


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const serviceID = 'service_6t6aegb'; // EmailJS Service ID
    const templateID = 'template_09xeiqj'; // EmailJs Template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        }, (err) => {
            alert(JSON.stringify(err));
        });
});

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Closing menu if clicked outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('nav-links');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target) && !closeIcon.contains(event.target)) {
        navLinks.classList.remove('show');
    }
});

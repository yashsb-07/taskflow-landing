// Select all FAQ items
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {

        const isOpen = answer.style.display === 'block';

        // Close all
        faqItems.forEach(i => {
            i.querySelector('.faq-answer').style.display = 'none';
        });

        // Open only if it was previously closed
        if (!isOpen) {
            answer.style.display = 'block';
        }
    });
});

// Contact From
const form = document.getElementById('contactForm');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        nameInput.nextElementSibling.textContent = "Name is required";
        isValid = false;
    }

    // Email validation
    if (emailInput.value.trim() === '') {
        emailInput.nextElementSibling.textContent = "Email is required";
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        emailInput.nextElementSibling.textContent = "Enter a valid email";
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === '') {
        messageInput.nextElementSibling.textContent = "Message cannot be empty";
        isValid = false;
    }

    // If valid
    if (isValid) {
        showToast("Message sent successfully!");
        form.reset();
    }

    if (!isValid) {
    showToast("Please fix errors before submitting");
}
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/* Smooth Scrolling  */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* Toast Message */
function showToast(message) {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/* Reveal */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Set up navigation links' event listeners
    setupNavigation();
});

function setupNavigation() {
    const sections = ['about', 'research', 'blog'];
    const navLinks = document.querySelectorAll('nav a');

    // Set active class on nav link based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        sections.forEach((section, index) => {
            const sectionElement = document.getElementById(section);
            const sectionTop = sectionElement.offsetTop - 100;
            const sectionBottom = sectionTop + sectionElement.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks[index].classList.add('active');
            } else {
                navLinks[index].classList.remove('active');
            }
        });
    });

    // Smooth scroll to the corresponding section on nav link click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}
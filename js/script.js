document.addEventListener('DOMContentLoaded', function() {
    loadContent('about');
    loadContent('research');
    loadContent('blog');

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            setActiveNavItem(this);
        });
    });
});

function loadContent(section) {
    fetch(section + '.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById(section).innerHTML = html;
        })
        .catch(error => console.error('Error loading ' + section + ' content:', error));
}

function setActiveNavItem(clickedItem) {
    document.querySelectorAll('nav a').forEach(item => {
        item.classList.remove('active');
    });
    clickedItem.classList.add('active');
}
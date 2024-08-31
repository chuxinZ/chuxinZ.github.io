document.addEventListener('DOMContentLoaded', function() {
    // 初始加载所有内容
    loadAllContent();

    // 设置导航链接的事件监听器
    setupNavigation();
});

function loadAllContent() {
    ['about', 'research', 'blog'].forEach(section => {
        loadContent(section);
    });
}

function setupNavigation() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // 移除 '#' 符号
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            setActiveNavItem(this);
        });
    });
}

function setActiveNavItem(clickedItem) {
    document.querySelectorAll('nav a').forEach(item => {
        item.classList.remove('active');
    });
    clickedItem.classList.add('active');
}

function loadContent(section) {
    fetch(section + '.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(section).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading ' + section + ' content:', error);
            document.getElementById(section).innerHTML = `<p>Error loading content. Please try again later.</p>`;
        });
}
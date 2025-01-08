const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        const menu = document.querySelector('.navbar ul');
        menu.classList.remove('active');
    });
});
function toggleMenu() {
    const menu = document.querySelector('.navbar ul');
    menu.classList.toggle('active');
}

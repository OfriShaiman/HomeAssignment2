
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav_menu");
    const darkModeToggle = document.querySelector(".dark-mode-toggle");

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('display-menu');
    });

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.href;
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        if (link.href === currentPage) {
            link.classList.add("current-page");
        }
    });
});
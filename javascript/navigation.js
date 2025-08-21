document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('navbar-main');
    const hamburgerIcon = toggleButton.querySelector('.hamburger-icon');
    const closeIcon = toggleButton.querySelector('.close-icon');

    toggleButton.addEventListener('click', function () {
        const isHidden = menu.classList.contains('hidden');

        if (isHidden) {
            menu.classList.remove('hidden');
            menu.classList.add('mobile-menu-enter');
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            toggleButton.setAttribute('aria-expanded', 'true');
        } else {
            menu.classList.add('hidden');
            menu.classList.remove('mobile-menu-enter');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });

    const mobileLinks = menu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!toggleButton.contains(e.target) && !menu.contains(e.target)) {
            if (!menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                toggleButton.setAttribute('aria-expanded', 'false');
            }
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            menu.classList.add('hidden');
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            toggleButton.setAttribute('aria-expanded', 'false');
        }
    });
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
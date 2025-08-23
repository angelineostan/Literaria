// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navbarMain = document.getElementById('navbar-main');
    const hamburgerIcon = mobileMenuButton?.querySelector('.hamburger-icon');
    const closeIcon = mobileMenuButton?.querySelector('.close-icon');

    if (mobileMenuButton && navbarMain && hamburgerIcon && closeIcon) {
        // Set initial state
        navbarMain.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');

        mobileMenuButton.addEventListener('click', () => {
            // Toggle menu visibility
            navbarMain.classList.toggle('hidden');
            
            // Toggle icons
            hamburgerIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
            
            // Update aria-expanded state
            const isExpanded = !navbarMain.classList.contains('hidden');
            mobileMenuButton.setAttribute('aria-expanded', isExpanded.toString());

            // Add slide animation classes
            if (isExpanded) {
                navbarMain.classList.add('mobile-menu-enter');
                // Remove animation class after animation completes
                setTimeout(() => {
                    navbarMain.classList.remove('mobile-menu-enter');
                }, 300);
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInside = mobileMenuButton.contains(event.target) || navbarMain.contains(event.target);
            
            if (!isClickInside && !navbarMain.classList.contains('hidden')) {
                navbarMain.classList.add('hidden');
                hamburgerIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', initMobileMenu);

document.getElementById('hamburger').onclick = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    // Toggle visibility
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
};


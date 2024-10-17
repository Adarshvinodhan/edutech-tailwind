document.getElementById('hamburger').onclick = function() {
        const mobileMenu = document.getElementById('mobileMenu');
        // Toggle visibility
        if (mobileMenu.style.display === 'block') {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
    };
    
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

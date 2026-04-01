// Header scroll effect - change background color when scrolling
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        // When scrolled down more than 50px
        header.style.backgroundColor = 'rgba(27, 38, 59, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        header.style.transition = 'all 0.3s ease';
    } else {
        // When at the top
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
        header.style.transition = 'all 0.3s ease';
    }
});

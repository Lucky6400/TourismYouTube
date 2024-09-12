const menuToggle = document.querySelector("#menu_toggle");
const navLinks = document.querySelector('.nav_links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

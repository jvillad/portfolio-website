const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
    

hamburger.addEventListener('click', (ev) => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll(".nav-item")
    .forEach(item => item.addEventListener('click', (ev) => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');

    }))
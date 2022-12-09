const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
    
function init() {

    hamburger.addEventListener('click', (ev) => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    const navItem = document.querySelectorAll(".nav-item");
        navItem.forEach(item => item.addEventListener('click', (ev) => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
    
        }))
}

init();

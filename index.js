//Burger menu
const burger = document.querySelector('.menu-burger');
const navMenu = document.querySelector('.menu-list-nav');
const html = document.querySelector('html');

function toggleMenu() {
    burger.classList.toggle('open');
    navMenu.classList.toggle('close');
    html.classList.toggle('scroll-close');
}

burger.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', toggleMenu);

//Menu page scroll
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.navbar').offsetHeight;
        //const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
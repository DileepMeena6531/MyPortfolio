var typed=new Typed(".text",{
    strings:["Frontend Developer","Backend Developer","Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('open');
    navbar.classList.toggle('open');
});

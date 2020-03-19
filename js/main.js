var typedTitle2 = new Typed('.title3', {
    strings: ["Ya sabes a donde ir a divertirte?", "La diversión te espera a un solo paso!!! "],
    typeSpeed: 30,
    backSpeed: 20,
    backDelay: 1000,
    startDelay: 500,
    smartBackspace: true,
    loop: false
});
/*
$(window).scroll(function() {
    $('nav').toggleClass('navbar-scroll', $(this).scrollTop > 800);
});*/
//reveal
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.card-singer', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.card-dancer', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('.card-conver', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

//smoth scroll
/*
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});*/
/*
$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('navbar-scroll', $(this).scrollTop() > $nav.height());
    });
});*/
/*
var myNav = document.getElementById('nav');
window.onscroll = function() {

    "use strict";
    if (document.body.scrollTop >= 200) {

        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } else {
        alert("hola" + document.body.scrollTop);
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};*/
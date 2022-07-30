$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.sliderDots',
        dotsClass: 'dots',

        autoplay: true,
        autoplaySpeed: 4000,
    });

    // Doing Responsive from here
    let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobileNav');

    hamburger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
});


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

const skillscontent = document.getElementsByClassName('skills__content'),
    skillsheader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className; //

    for (i = 0; i < skillscontent.length; i++) {
        skillscontent[i].className = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
}
skillsheader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
})
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



    const skillscontent = document.getElementsByClassName('skills__content'),
        skillsheader = document.querySelectorAll('.skills__header');

    function toggleSkills() {
        let itemClass = this.parentNode.className;

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

    // Scroll Up
    function scrollUp() {
        const scrollUp = document.getElementById('scroll-Up');
        if (this.scrollY >= 560)
            scrollUp.classList.add('show-scroll')
        else
            scrollUp.classList.remove('show-scroll')

    }
    window.addEventListener('scroll', scrollUp)


    // Dark-Light Theme
    const themeButton = document.getElementById('theme-button')
    const themeButton1 = document.getElementById('theme-button1')
    const darkTheme = 'dark-theme'
    const iconTheme = 'fa-sun'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'
    const getCurrentIcon1 = () => themeButton1.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
        themeButton1.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
    }


    // Just adding spinning feature in Light Mode
    function addSpinningFeature() {
        if (themeButton.classList.contains('fa-sun')) {
            themeButton.classList.add('fa-spin')
        } else if (themeButton.classList.contains('fa-spin')) {
            themeButton.classList.remove('fa-spin')
        }
    }

    var siteMainWrapper = document.getElementsByClassName('siteMainWrapper')[0];
    var about = document.getElementById('about');
    var header = document.querySelector("header");
    var services = document.getElementById('Services');
    var skills = document.getElementById('skills');
    var qualification = document.getElementsByClassName('qualification')[0];
    var freeLancer = document.getElementsByClassName('freeLancer')[0];
    var reviews = document.getElementsByClassName('reviews')[0];
    var work = document.getElementsByClassName('work')[0];
    var blog = document.getElementsByClassName('blog')[0];
    var GitHubSkyLines = document.getElementsByClassName('GitHubSkyLines')[0];
    var contact = document.getElementsByClassName('contact')[0];

    var linkedinBadgeSection = document.getElementsByClassName('linkedinBadgeSection')[0];
    // Scripting custom LinkedinBadge for Dark Mode

    // 1. For Main Page -> Iframe -> Div of Linkedin Badge

    function darkToggleingLinkedinBadge1() {
        var linkedinBadgeSection = document.getElementsByClassName('linkedinBadgeSection')[0];
        var iframe = linkedinBadgeSection.getElementsByTagName("iframe")[0];
        var frm = iframe.contentDocument

        frm.getElementsByClassName("profile-badge")[0]
        var profilebadge = frm.getElementsByClassName("profile-badge")[0]
        profilebadge.classList.toggle("profile-badge--dark")

        var profilebadgecontentName = frm.getElementsByClassName("profile-badge__content-profile-name-link")[0];

        if (profilebadgecontentName.classList.contains("profile-badge__content-profile-name-link--light")) {
            profilebadgecontentName.classList.remove("profile-badge__content-profile-name-link--light")
            profilebadgecontentName.classList.add("profile-badge__content-profile-name-link--dark")
        } else {
            profilebadgecontentName.classList.remove("profile-badge__content-profile-name-link--dark")
            profilebadgecontentName.classList.add("profile-badge__content-profile-name-link--light")
        }

        var profilebadgeCurrentCompany = frm.getElementsByClassName("profile-badge__content-profile-company-school-info-link")[0];

        if (profilebadgeCurrentCompany.classList.contains("profile-badge__content-profile-company-school-info-link--light")) {
            profilebadgeCurrentCompany.classList.remove("profile-badge__content-profile-company-school-info-link--light")
            profilebadgecontentName.classList.add("profile-badge__content-profile-company-school-info-link--dark")
        } else {
            profilebadgeCurrentCompany.classList.remove("profile-badge__content-profile-company-school-info-link--dark")
            profilebadgeCurrentCompany.classList.add("profile-badge__content-profile-company-school-info-link--light")
        }

    }

    // 2. For Main Page -> Iframe -> Div of Linkedin Badge -> Irame containg Linkedin Badge

    function darkToggleingLinkedinBadge2() {
        var linkedinBadgeSection = document.getElementsByClassName('linkedinBadgeSection')[0];
        var iframe = linkedinBadgeSection.getElementsByTagName("iframe")[0];
        var frm = iframe.contentDocument
        var iframe2 = frm.getElementsByTagName('iframe')[0]
        var frm2 = iframe2.contentDocument

        frm2.getElementsByClassName("profile-badge")[0]
        var profilebadge = frm2.getElementsByClassName("profile-badge")[0]
        profilebadge.classList.toggle("profile-badge--dark")


        var profilebadgecontentName = frm2.getElementsByClassName("profile-badge__content-profile-name-link")[0];

        if (profilebadgecontentName.classList.contains("profile-badge__content-profile-name-link--light")) {
            profilebadgecontentName.classList.remove("profile-badge__content-profile-name-link--light")
            profilebadgecontentName.classList.add("profile-badge__content-profile-name-link--dark")
        } else {
            profilebadgecontentName.classList.remove("profile-badge__content-profile-name-link--dark")
            profilebadgecontentName.classList.add("profile-badge__content-profile-name-link--light")
        }

        var profilebadgeCurrentCompany = frm2.getElementsByClassName("profile-badge__content-profile-company-school-info-link")[0];

        if (profilebadgeCurrentCompany.classList.contains("profile-badge__content-profile-company-school-info-link--light")) {
            profilebadgeCurrentCompany.classList.remove("profile-badge__content-profile-company-school-info-link--light")
            profilebadgecontentName.classList.add("profile-badge__content-profile-company-school-info-link--dark")
        } else {
            profilebadgeCurrentCompany.classList.remove("profile-badge__content-profile-company-school-info-link--dark")
            profilebadgeCurrentCompany.classList.add("profile-badge__content-profile-company-school-info-link--light")
        }

    }




    // End of Scripting
    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        toggleCLasses()
    })

    themeButton1.addEventListener('click', () => {
        toggleCLasses()
    })

    function toggleCLasses() {
        // Add or remove the dark / icon theme

        // document.body.classList.toggle(darkTheme)
        siteMainWrapper.classList.toggle(darkTheme)
        about.classList.toggle(darkTheme)
        header.classList.toggle(darkTheme)
        services.classList.toggle(darkTheme)
        skills.classList.toggle(darkTheme)
        qualification.classList.toggle(darkTheme)
        freeLancer.classList.toggle(darkTheme)
        reviews.classList.toggle(darkTheme)
        work.classList.toggle(darkTheme)
        blog.classList.toggle(darkTheme)
        GitHubSkyLines.classList.toggle(darkTheme)
        contact.classList.toggle(darkTheme)

        try {
            darkToggleingLinkedinBadge1()
        }
        catch (err) {
            darkToggleingLinkedinBadge2()
            console.log("Error in darkToggleingLinkedinBadge1. Hence executing darkToggleingLinkedinBadge2")
        }

        themeButton.classList.toggle(iconTheme)
        themeButton1.classList.toggle(iconTheme)

        addSpinningFeature()

        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
        localStorage.setItem('selected-icon', getCurrentIcon1())
    }

    // Qualifications
    const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')


    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target)
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('qualification__active')
            })
            target.classList.add('qualification__active')
            tabs.forEach(tab => {
                tab.classList.remove('qualification__active')
            })
            tab.classList.add('qualification__active')
        })
    })

    // Portfolio Forms
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyK6xX6650VW1bgDuz8KD91XnLM-OHSmwcRaY0QOrnwHj5zPRUArpgS2SXqexc-x22Exg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('msg');



    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                console.log('Success!', response)
                msg.innerHTML = "Message Sent Succesfully!"
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })

    // Setting the headline dynamically
    var ProfileHeadline = document.getElementById('myProfileHeadlineAndCurrentPosition');
    function TextInAboutMeFunction() {
        ProfileHeadline.innerText = localStorage.getItem('TextInAboutME');
    }

    function addAboutMeDynamically() {
        if (localStorage.getItem('TextInAboutME') != null) {
            ProfileHeadline.innerText = localStorage.getItem('TextInAboutME');
            setTimeout(TextInAboutMeFunction, 5000);
        }
        else {
            setTimeout(addAboutMeDynamically, 1000);
        }
    }

    setTimeout(addAboutMeDynamically, 1000);





    // setTimeout(function () {
    //     ProfileHeadline.innerText = localStorage.getItem('TextInAboutME');
    //     // localStorage.removeItem('TextInAboutME');
    // }, 6000);

    // setInterval(TextInAboutMeFunction, 5000);



});


var aboutMe;

function getAboutMe() {
    aboutMe = document.getElementsByClassName("profile-badge__content-profile-headline")[0].innerText;
    console.log(aboutMe);
    localStorage.setItem('TextInAboutME', aboutMe);
}

setTimeout(getAboutMe, 5000);


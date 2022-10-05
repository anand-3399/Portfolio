function addCssToIframesDocument() {
    var iframe = document.getElementsByTagName("iframe")[0];
    var frm = iframe.contentDocument;
    var otherhead = frm.getElementsByTagName("head")[0];
    var link = frm.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", "css/linkedinBadge.css");
    otherhead.appendChild(link);
}

function addJStoIframesDocument() {
    var iframe = document.getElementsByTagName("iframe")[0];
    var frm = iframe.contentDocument;
    var aboutMe;
    aboutMe = frm.getElementsByClassName("profile-badge__content-profile-headline")[0].innerText;
    console.log(aboutMe);
    localStorage.setItem('TextInAboutME', aboutMe);
}



function getAboutMe() {
    aboutMe = document.getElementsByClassName("profile-badge__content-profile-headline")[0].innerText;
    console.log(aboutMe);
    localStorage.setItem('TextInAboutME', aboutMe);
}

// setTimeout(getAboutMe, 5000);



try {
    setTimeout(addCssToIframesDocument, 2000);
    setTimeout(addJStoIframesDocument, 2000);
} catch (error) {
    console.error("ERROR: " + error);
} finally {
    setTimeout(getAboutMe, 3000);
}
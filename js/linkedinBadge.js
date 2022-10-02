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
    var otherhead = frm.getElementsByTagName("head")[0];
    var script = frm.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "js/linkedinBadge.js");
    otherhead.appendChild(script);
    setTimeout(getAboutMe, 5000);
}

var aboutMe;

function getAboutMe() {
    aboutMe = document.getElementsByClassName("profile-badge__content-profile-headline")[0].innerText;
    console.log(aboutMe);
    localStorage.setItem('TextInAboutME', aboutMe);
}


setTimeout(addCssToIframesDocument, 9000);
setTimeout(addJStoIframesDocument, 9000);

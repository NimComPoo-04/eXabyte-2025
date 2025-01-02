const homeDesktop = document.getElementById("home-desktop");
const eventsDesktop = document.getElementById("events-desktop");
const sponsorsDesktop = document.getElementById("sponsors-desktop");
const magazinesDesktop = document.getElementById("magazines-desktop");
const contactDesktop = document.getElementById("contact-desktop");
const aboutDesktop = document.getElementById("about-desktop");

switch (path) {
    case "/":
    case "/index.html":
        homeDesktop.childNodes[0].classList.add("current-route");
        break;
    case "/events/":
    case "/events/index.html":
        eventsDesktop.childNodes[0].classList.add("current-route");
        break;
    case "/sponsors/":
    case "/sponsors/index.html":
        sponsorsDesktop.childNodes[0].classList.add("current-route");
        break;
    case "/magazines/":
    case "/magazines/index.html":
        magazinesDesktop.childNodes[0].classList.add("current-route");
        break;
    case "/contact/":
    case "/contact/index.html":
        contactDesktop.childNodes[0].classList.add("current-route");
        break;
    case "/about/":
    case "/about/index.html":
        aboutDesktop.childNodes[0].classList.add("current-route");
        break;
}

switch (path) {
    case "/":
    case "/index.html":
    case "/events/":
    case "/events/index.html":
    case "/magazines/":
    case "/magazines/index.html":
    case "/sponsors/":
    case "/sponsors/index.html":
    case "/contact/":
    case "/contact/index.html":
    case "/about/":
    case "/about/index.html":
        break;
}

var routesLinks = document.getElementsByClassName("routes-mobile")[0].childNodes

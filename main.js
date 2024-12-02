var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

document
    .getElementById("visualmodetogglebuttoncontainer")
    .classList.toggle("visualmodeshow");

document.addEventListener(
    "contextmenu",
    function (e) {
        if (e.target.nodeName === "IMG") {
            e.preventDefault();
        }
    },
    false
);

// preloader script ends here.........

function visualMode() {
    document.body.classList.toggle("light-mode");
}
let emptyArea = document.getElementById("emptyarea");
let mobileToggleMenu = document.getElementById("mobiletogglemenu");
// toggle menu by clicking on hamburger
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document
        .getElementById("mobiletogglemenu")
        .classList.toggle("show-toggle-menu");
    document
        .getElementById("burger-bar1")
        .classList.toggle("hamburger-animation1");
    document
        .getElementById("burger-bar2")
        .classList.toggle("hamburger-animation2");
    document
        .getElementById("burger-bar3")
        .classList.toggle("hamburger-animation3");
}
// close mobile toggle menu by clicking on LI
function hideMenuByLi() {
    document.body.classList.toggle("stopscrolling");
    document
        .getElementById("mobiletogglemenu")
        .classList.remove("show-toggle-menu");
    document
        .getElementById("burger-bar1")
        .classList.remove("hamburger-animation1");
    document
        .getElementById("burger-bar2")
        .classList.remove("hamburger-animation2");
    document
        .getElementById("burger-bar3")
        .classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(
    ".navbar .navbar-tabs .navbar-tabs-ul li"
);
const mobileNavLi = document.querySelectorAll(
    ".mobiletogglemenu .mobile-navbar-tabs-ul li"
);

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    mobileNavLi.forEach((li) => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThismobiletab");
        }
    });
    navLi.forEach((li) => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(current)) {
            li.classList.add("activeThistab");
        }
    });
});
console.log(
    "%c Designed and Developed by Vinod Jangid ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);

let myButton = document.getElementById("backtotopbutton");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
    ) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function scrollToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

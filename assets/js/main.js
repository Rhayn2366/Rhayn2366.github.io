var heroImg = document.getElementById("hero-img");

function Fade() {
    var value = 1 + window.scrollY / -screen.height * 1.2;
    heroImg.style.opacity = value;
}

window.addEventListener('scroll', function() {
    Fade();
})

backToTopButton = document.getElementById("backToTopButton");

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener('scroll', function() {
    scrollFunction();
})

var toggleDarkModeButtonIcon = document.getElementById("toggleDarkModeButtonIcon");

var storage = window.localStorage;

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

var darkMode = 0;

function toggleMode() {
    if (darkMode == 1) {
        darkMode = 0;
    } else {
        darkMode = 1;
    }
    setModeDark();
}

function setModeDark() {
    if (darkMode == 1) {
        swapStyleSheet("assets/css/theme_dark.css");
        toggleDarkModeButtonIcon.className = "fas fa-sun";
    } else {
        swapStyleSheet("assets/css/theme_light.css");
        toggleDarkModeButtonIcon.className = "fas fa-moon";
    }
    storage.setItem("darkMode", darkMode);
}

var currentDateElement = document.getElementById("currentDate");
var ageElement = document.getElementById("age");

let currentDate = new Date();

window.addEventListener("load", function() {
    darkMode = storage.getItem("darkMode");
    document.getElementById("toggleDarkModeButton").style.display = "block";
    setModeDark();
    currentDateElement.innerHTML = currentDate.getFullYear();
    ageElement.innerHTML = currentDate.getFullYear() - 1998;
})


var typeWriterElement = document.getElementById("typewriter");
var i = 0;
var activeWord = 0;
var textsToDisplay = [' You can also find me here: ', ' Thank you for visiting :D '];
var msToWait = 100;
var msPause = 1000;
var finished = 0;

function typeWriter() {
    if (finished != 1) {
        typeForwards();
    } else {
        typeBackwards();
    }
}

window.addEventListener("load", function() {
    typeWriter();
})

function typeBackwards() {
    if (i >= 0) {
        typeWriterElement.innerHTML = textsToDisplay[activeWord].substring(0, i);
        i--;
        setTimeout(typeWriter, msToWait);
    } else {
        finished = 0;
        activeWord++;
        if (activeWord == textsToDisplay.length) { activeWord = 0; }
        setTimeout(typeWriter, msPause);
    }
}

function typeForwards() {
    if (i <= textsToDisplay[activeWord].length) {
        typeWriterElement.innerHTML = textsToDisplay[activeWord].substring(0, i);
        i++;
        setTimeout(typeWriter, msToWait);
    } else {
        finished = 1;
        setTimeout(typeWriter, msPause);
    }
}
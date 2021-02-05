var showcase = document.getElementById("Showcase");

document.getElementById("Explore-Designs-Button").onclick = scrollToWebDesigns;

document.getElementById("Explore-Projects-Button").onclick = scrollToWebDevProjects;

document.querySelector(".H").onclick = function() {
    window.scroll(0, 0);
};

document.querySelector(".A").onclick = scrollToAbout;
document.querySelector(".D").onclick = scrollToWebDesigns;
document.querySelector(".P").onclick = scrollToWebDevProjects;

function scrollToAbout() {
    var scrollDistance = showcase.offsetHeight - window.scrollY;
    window.scrollBy(0, scrollDistance);
};

function scrollToWebDesigns() {
    var scrollDistance = showcase.offsetHeight - window.scrollY;

    if (screen.width <= 1436) {
        window.scrollBy(0, scrollDistance + document.querySelector(".Side-Bar").offsetHeight);
    } else {
        window.scrollBy(0, scrollDistance);
    }
};

function scrollToWebDevProjects() {
    var scrollDistance = document.getElementById("First-Block").offsetHeight + showcase.offsetHeight - window.scrollY + 10; // Extra 10px to compensate for uneven margins caused due to texts
    if (screen.width <= 1436) {
        window.scrollBy(0, scrollDistance + document.querySelector(".Side-Bar").offsetHeight);
    } else {
        window.scrollBy(0, scrollDistance);
    }
};
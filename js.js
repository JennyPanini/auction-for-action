const toggler = document.getElementById("toggler");
const overlay = document.getElementById("overlay");
const lines = toggler.querySelectorAll(".line");
const sections = document.querySelectorAll("#intro-div, #about-div, #services-div, #careers-div, #contact-div");

let isOverlayVisible = false;

function toggleNav() {
    isOverlayVisible = !isOverlayVisible;
    overlay.style.display = isOverlayVisible ? "flex" : "none";
    lines[0].style.transform = isOverlayVisible ? "rotate(50deg)" : "";
    lines[1].style.transform = isOverlayVisible ? "rotate(-50deg)" : "";
    toggler.style.height = isOverlayVisible ? "1px" : "40%";
    sections.forEach(section => section.style.display = isOverlayVisible ? "none" : "flex");
}

toggler.onclick = toggleNav;
overlay.onclick = toggleNav;

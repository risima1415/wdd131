document.getElementById("currentyear").textContent = new Date().getFullYear();
const lastModifiedRaw = new Date(document.lastModified);
const options = {year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("lastModified").textContent = lastModifiedRaw.toLocaleDateString(undefined, options);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    // Toggle hamburger symbol between ☰ and X
    if (navMenu.classList.contains("show")) {
        hamburger.textContent = "✖"; // X symbol
    } else {
        hamburger.textContent = "☰"; // hamburger symbol
    }
});
const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav_links");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_links_visible")
})
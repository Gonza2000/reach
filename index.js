const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav_links");
navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("nav_links_visible")

})
if (state == true) {
    document.querySelector(".nav_links").classList.remove("nav_links_visible");
}
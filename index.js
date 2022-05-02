const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav_links");
const item = document.getElementById("servicio");
const items = document.getElementById("servicios");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav_links_visible")

})
item.addEventListener("click", () => {
    navMenu.classList.remove("nav_links_visible");
})
items.addEventListener("click", () => {
    navMenu.classList.remove("nav_links_visible");
})
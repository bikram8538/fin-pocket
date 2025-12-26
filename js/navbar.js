// Nav Toggler
const navToggle = document.querySelector(".nav-toggle");
const navCollapsed = document.querySelector(".nav-collapsed");

navToggle.addEventListener("click", () => {
    navCollapsed.classList.toggle("show");
    navToggle.classList.toggle("active");
});

//  Measuring Header Height

const navbar = document.querySelector("header");
const navbarHeight = navbar.offsetHeight;
console.log(navbarHeight);

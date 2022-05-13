"strict mode";

// current date
const year = document.querySelector(".year");
const currentDate = new Date().getFullYear();
year.textContent = currentDate;

// adding functionality of menu and close buttons

const header = document.querySelector(".header");

const btnNav = document.querySelector(".btn-mobile-nav");

btnNav.addEventListener("click", function () {
  header.classList.toggle("show-nav");
});

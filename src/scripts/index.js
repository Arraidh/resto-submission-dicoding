import "regenerator-runtime"; /* for async await transpile */
import "../../node_modules/@fortawesome/fontawesome-free/js/solid.js";
import "../../node_modules/@fortawesome/fontawesome-free/scss/solid.scss";
import "../styles/main.scss";

console.log("Hello Coders! :)");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const heroElement = document.querySelector(".hero-container");

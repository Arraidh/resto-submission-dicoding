import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";

console.log("Hello Coders! :)");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

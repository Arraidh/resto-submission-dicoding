import "regenerator-runtime";
import "../styles/main.scss";
import data from "../DATA.json";

console.log("Hello Coders! :)");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const restoData = { ...data.restaurants };
const cardData = { ...restoData };

const cardWrapper = document.getElementById("card-wrapper");

for (let card = 0; card < Object.keys(cardData).length; card++) {
  cardWrapper.innerHTML += `<div class="card">
      <div class="head-card">
      <p class="body-city">
      ${cardData[card].city}
    </p>
        <img src="${cardData[card].pictureId}" alt="" />
        <div class="body-rating">
        <img src="./images/Rating.png" alt="" />
        <p>
          ${cardData[card].rating}
        </p>
        </div>
      </div>
      <div class="body-card">
        <h1>${cardData[card].name}</h1>
        <p>
          ${cardData[card].description}
        </p>
      </div>
    </div>`;
}

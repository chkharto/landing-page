const btnEl = document.querySelector(".btn");
const hideEl = document.querySelector(".center");
const btnEl2 = document.querySelector(".btn2");

const headEl = document.querySelector(".header");
const textEl = document.querySelector(".texties");
const imageEl = document.querySelector(".image");
const searchEl = document.querySelector(".search-bar");
const text2El = document.querySelector(".some-text");
const rateEl = document.querySelector(".rate");

btnEl.addEventListener('click', () => {
    hideEl.classList.remove("hidden");
    headEl.classList.add("hide");
    textEl.classList.add("hide");
    imageEl.classList.add("hide");
    searchEl.classList.add("hide");
    text2El.classList.add("hide");
    rateEl.classList.add("hide");
});

btnEl2.addEventListener("click", () => {
    hideEl.classList.add("hidden");
    headEl.classList.remove("hide");
    textEl.classList.remove("hide");
    imageEl.classList.remove("hide");
    searchEl.classList.remove("hide");
    text2El.classList.remove("hide");
    rateEl.classList.remove("hide");
});
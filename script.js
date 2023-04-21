const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const button = document.querySelector(".btn");
const body = document.getElementById("gradient");

const getRandomHex = () => {
  const hexCharacters = "0123456789ABCDEF";
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return hexValue;
};

const randomizeColors = () => {
  color1.value = getRandomHex();
  color2.value = getRandomHex();
  setGradient();
};

const setGradient = () => {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
};

const showColorsOnHover = () => {
  color1.setAttribute("title", color1.value);
  color2.setAttribute("title", color2.value);
};

setGradient();
color1.addEventListener("input", setGradient);
color1.addEventListener("mouseover", showColorsOnHover);
color2.addEventListener("input", setGradient);
color2.addEventListener("mouseover", showColorsOnHover);
button.addEventListener("click", randomizeColors);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
};

changeBtn.addEventListener("click", changeColor);

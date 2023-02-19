const inputRange = document.querySelector("#font-size-control");
const textString = document.querySelector("#text");

inputRange.addEventListener(
  "input",
  (event) => (textString.style.fontSize = `${Number(event.target.value)}px`)
);

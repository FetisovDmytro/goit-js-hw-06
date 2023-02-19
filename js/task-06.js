const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 6) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
});

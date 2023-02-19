const refs = {
  textInput: document.querySelector("#name-input"),
  textOutput: document.querySelector("#name-output"),
};

const editText = () => {
  refs.textOutput.textContent =
    refs.textInput.value === ""
      ? (refs.textOutput.textContent = "Anonymous")
      : (refs.textOutput.textContent = refs.textInput.value);
};

refs.textInput.addEventListener("input", editText);

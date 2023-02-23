// const refs = {
//   textInput: document.querySelector("#name-input"),
//   textOutput: document.querySelector("#name-output"),
// };

// const editText = () => {
//   refs.textOutput.textContent =
//     refs.textInput.value.trim() === ""
//       ? (refs.textOutput.textContent = "Anonymous")
//       : (refs.textOutput.textContent = refs.textInput.value);
// };

// refs.textInput.addEventListener("input", editText);



const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  output.textContent = input.value.trim() === '' ? 'Anonymous' : input.value;
});

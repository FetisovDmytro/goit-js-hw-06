// const inputText = document.querySelector("#validation-input");

// inputText.addEventListener("blur", (event) => {
//   if (event.currentTarget.value.length === 6) {
//     inputText.classList.add("valid");
//     inputText.classList.remove("invalid");
//   } else {
//     inputText.classList.add("invalid");
//     inputText.classList.remove("valid");
//   }
// });


const input = document.querySelector('#validation-input');
const requiredLength = parseInt(input.getAttribute('data-length'));

input.addEventListener('blur', () => {
  const inputLength = input.value.length;
  
  if (inputLength === requiredLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
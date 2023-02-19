const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  email === "" || password === ""
    ? alert("Все поля должны быть заполнены!")
    : console.log({ email, password });
  loginForm.reset();
});

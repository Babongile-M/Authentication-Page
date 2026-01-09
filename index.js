const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("logIn");
const container = document.getElementById("container");
const toggle = document.getElementById("toggleContainer");

registerBtn.addEventListener("click", () => {
    container.classList.add("containerActive");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("containerActive");
});
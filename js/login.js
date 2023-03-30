const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loggedIn = document.querySelector("#logged-in");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    showLoggedin(username);
}

function showLoggedin(username) {
    loggedIn.innerText = "Hello " + username;
    loggedIn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsename = localStorage.getItem(USERNAME_KEY);
if (savedUsename === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    showLoggedin(savedUsename);
}

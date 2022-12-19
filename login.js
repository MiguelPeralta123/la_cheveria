const url = "https://lacheveriaapi-production.up.railway.app/login"

var uName = ""
var uPass = ""

fetch(url)
  .then(response => response.json())
  .then(data => {
    uName = data[0].username
    uPass = data[0].password
  })
  .catch(err => console.log(err))

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };

  if (username.value === uName && password.value === uPass) {
    window.open("file:///C:/Users/Ernesto/Desktop/Miguel%20Peralta/la_cheveria/main.html", "_self");
  }
});
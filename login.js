const url = "https://lacheveriaapi-production.up.railway.app/login"

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");
var uName = ""
var uPass = ""

const getData = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      uName = data[i].username
      uPass = data[i].password
      if (username.value === uName && password.value === uPass) {
        window.open("file:///C:/Users/ASUS/Desktop/la_cheveria/index.html", "_self");
      } else {
        window.alert("Favor de llenar todos los campos correctamente")
        return
      }
    }
  })
  .catch(err => console.log(err))
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };
  getData()
});
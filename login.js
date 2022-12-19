const url = "https://lacheveriaapi-production.up.railway.app/login"

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))

/*const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "localhost",
  user: "sa",
  password: "123",
  database: "la_cheveria,",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("La conexion funciona");
});

const username = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };

  console.log(data);
});
*/
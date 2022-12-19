//import mysql from 'mysql'
const mysql = require("mysql")

//const mysql = require("mysql");
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

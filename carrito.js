const url = "https://lacheveriaapi-production.up.railway.app/carrito";

var cadena = '<tr><th scope="col">Nombre</th><th scope="col">Precio</th><th scope="col">Cantidad</th></tr>';

function cargarProductos() {

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        cadena += `<tr><td scope="col">${data[i].nombre} ${data[i].marca}</td><td scope="col">${data[i].precio}</td><td scope="col"><input type="number" class="form-control" id="txtCantidad" name="txtCantidad" value="1" required></td></tr>`;
      }
      const element = document.getElementById("elementosCarrito");
      element.innerHTML = cadena;
    })
    .catch((err) => console.log(err));

    cantidad = document.getElementById("txtCantidad").value
}
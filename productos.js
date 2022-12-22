const url = "https://lacheveriaapi-production.up.railway.app/producto";
var cadena = "";

function cargarProductos() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        cadena += `<div class="card"><img src="${data[i].urlImagen}" class="card-img"><h5>${data[i].nombre} ${data[i].marca}</h5><p>${data[i].descripcion}</p><p>$${data[i].precio}</p><a href="#" class="button agregar-carrito" onclick="agregarCarrito(${data[i].idProducto})">Comprar</a></div>`;
      }

      const element = document.getElementById("lista-productos");
      element.innerHTML = cadena;
    })
    .catch((err) => console.log(err));
}

const url2 = "https://lacheveriaapi-production.up.railway.app/carrito";

const agregarCarrito = async (id) => {
  var nombre = "";
  var marca = "";
  var precio = "";
  var cantidad = "";

  fetch(url + "/" + id)
    .then((response) => response.json())
    .then((data) => {
      if (data[0].cantidad > 1) {
        nombre = data[0].nombre;
        marca = data[0].marca;
        precio = data[0].precio;
        cantidad = data[0].cantidad;
        postData(nombre, marca, precio, cantidad);
      } else {
        window.alert("Lo sentimos, el producto se ha agotado :(");
        return;
      }
    })
    .catch((err) => console.log(err));
};

const postData = async (nombre, marca, precio, cantidad) => {
  try {
    const response = await fetch(url2, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        marca: marca,
        precio: precio,
        cantidad: cantidad,
      }),
    });
    window.alert(`${username.value} añadido correctamente`);
  } catch (error) {}
};

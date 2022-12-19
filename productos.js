const url = "https://lacheveriaapi-production.up.railway.app/productos"

const cargarProductos = () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                uName = data[i].username
                uPass = data[i].password
                if (username.value === uName && password.value === uPass) {
                    window.open("file:///C:/Users/Ernesto/Desktop/Miguel%20Peralta/la_cheveria/index.html", "_self");
                } else {
                    window.alert("Favor de llenar todos los campos correctamente")
                    return
                }
            }
        })
        .catch(err => console.log(err))
}
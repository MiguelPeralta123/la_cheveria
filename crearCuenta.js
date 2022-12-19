const url = "https://lacheveriaapi-production.up.railway.app/login"

const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementById("button");

button.addEventListener("click", (e) => {
    e.preventDefault();

    if (username.value != null && password.value != null && password.value === password2.value) {
        postData()
    } else {
        window.alert("Favor de llenar todos los compos correctamente")
    }
});

const postData = async () => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            })
        })
        window.alert(`${username.value} añadido correctamente`)
    } catch (error) {

    }
}
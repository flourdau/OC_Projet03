function fetchUser() {

    let user = {
        email: document.getElementById('emaili').value,
        password: document.getElementById('password').value
    };

    fetch("http://localhost:5678/api/users/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(user)
        })
        .then(myResponse => {
            if (myResponse.ok) {
                return myResponse.json()
            }
                let errorText = document.querySelector("#message");
                errorText.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
                throw new Error("Erreur dans l’identifiant ou le mot de passe");
            })
        .then(myResponse => {
            if (myResponse.token) {
                localStorage.setItem("token", myResponse.token);
                document.location.href="./index.html";
            }
        })

console.log(user);
}

export async function myLogin() {

    const form = document.querySelector("#login");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        fetchUser()
    })

}
function fetchUser() {

    let user = {
        email: document.getElementById('email').value,
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
            let message = document.querySelector("#message");
            message.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
            throw new Error(message.innerHTML);
        })
        .then(myResponse => {
            if (myResponse.token) {
                localStorage.setItem("token", myResponse.token);
                document.location.href="./index.html";
            }
        })

    console.log(user);
}

export  function myLogin() {

    const form = document.querySelector("#login");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        fetchUser()
    })

}

export function myLogout() {

    let myStorage = localStorage;
    const myLogoutBtn = document.querySelector("#myLogout");
    
    myLogoutBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (myStorage.token) {
            delete myStorage.token;
            document.location.href="./login.html";
            console.log('LOGIN PARTY!!!!');
    }})

}
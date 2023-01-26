export async function allWorks()
{

    const myRequest = new Request('http://localhost:5678/api/works');
// const myRequest = new Request('http://192.168.1.31:5678/api/works');
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    const myResponse = await fetch(myRequest, myHeaders);

    if (myResponse.ok === true) {
        const tabSet = new Set();
        tabSet.add(myResponse.json());
        return tabSet;
    }
    throw new Error('Impossible de contacter le serveur...');

}

export async function allCategories()
{

    // const myRequest = new Request('http://192.168.1.31:5678/api/categories');
    const myRequest = new Request('http://localhost:5678/api/categories');
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    const myResponse = await fetch(myRequest, myHeaders)
    if (myResponse.ok === true) {
        return myResponse.json();
    }

    throw new Error('Impossible de contacter le serveur...');
}

export function fetchUser() {

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
                sessionStorage.setItem("token", myResponse.token);
                document.location.href="./index.html";
            }
        })
        
}
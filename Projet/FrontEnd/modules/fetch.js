export async function allWorks()
{

    const myRequest = new Request('http://localhost:5678/api/works');
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

    const myRequest = new Request('http://localhost:5678/api/categories');
    const myHeaders = new Headers();

    myHeaders.append("Accept", "application/json");
    const myResponse = await fetch(myRequest, myHeaders)
    if (myResponse.ok === true) {
        return myResponse.json();
    }
    throw new Error('Impossible de contacter le serveur...');

}

export async function fetchUser()
{

    const user = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    const myRequest = new Request("http://localhost:5678/api/users/login");
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json;charset=utf-8");
    myHeaders.append("Content-Type", "application/json;charset=utf-8");

    let myResponse = await fetch(myRequest, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(user)
    });

    if (myResponse.ok) {
        const myJson = await myResponse.json();

        if (myJson.token) {
            sessionStorage.setItem("token", myJson.token);
            document.location.href="./index.html";
        }
    }
    else {
        let message = document.querySelector("#message");
        message.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
        throw new Error(message.innerHTML);
    }

}
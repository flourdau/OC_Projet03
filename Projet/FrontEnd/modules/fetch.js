/*
*   Modul rassemblant les appel API avec la fonction fetch
*/

export async function formSend()
{

    const url = "http://localhost:5678/api/works/";

    let form = new FormData();
    form.append('title', document.querySelector('.titleForm').value);
    form.append('category', document.querySelector('.categorieForm').value);
    form.append('image', document.querySelector('.dlImg').files[0], 'image.jpg');

    let myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Authorization', `Bearer ${sessionStorage.getItem('token')}`);

    const myInit = {
        method: 'POST',
        headers: myHeaders,
        body: form
    };

    let myResponse = await fetch(url, myInit);

    if (myResponse.ok === true) {
        return myResponse.ok;
    }
    
    throw new Error('Impossible de contacter le serveur...');

}

export async function fetchAllWorks()
{

    const url = 'http://localhost:5678/api/works';

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json;charset=utf-8");
    myHeaders.append("Content-Type", "application/json;charset=utf-8");

    const myInit = {
        method: 'GET',
        headers: myHeaders
    };

    const myResponse = await fetch(url, myInit);

    if (myResponse.ok === true) {

        const tabSet = await new Set();
        tabSet.add(myResponse.json());
        console.log(`TabSet = ${(tabSet)}`, tabSet);
        return tabSet;

    }
    throw new Error('Impossible de contacter le serveur...');

}

export async function fetchAllCategories()
{

    const url = 'http://localhost:5678/api/categories';
    const myInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        }
    };

    const myResponse = await fetch(url, myInit)
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

    let myResponse = await fetch(myRequest,
    {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(user)
    });

    if (myResponse.ok) {return await myResponse.json();}
    else {

        let message = document.querySelector("#message");

        message.innerHTML = "Erreur dans l’identifiant ou le mot de passe";
        throw new Error(message.innerHTML);

    }

}

export async function deleteWork(id)
{

    const myRequest = new Request("http://localhost:5678/api/works/" + id);

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json;charset=utf-8");
    myHeaders.append("Content-Type", "application/json;charset=utf-8");
    myHeaders.append("Authorization", `Bearer ${sessionStorage.getItem('token')}`);

    const myInit = {
        method: 'DELETE',
        headers: myHeaders
    };

    return await fetch(myRequest, myInit);

}
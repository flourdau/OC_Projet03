export async function fetchAllWorks()
{

    const url = 'http://localhost:5678/api/works';
    const myInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
        }
    };

    const myResponse = await fetch(url, myInit);
    if (myResponse.ok === true) {
        console.log("myResponse:", myResponse);
        const tabSet = new Set();
        tabSet.add(myResponse.json());
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

export async function deleteWork(id)
{
    console.log(id);
    console.log(sessionStorage.getItem('token'));

    const myInit = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json;charset=utf-8",
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`
        }
    };

    console.log(myInit);
    
    const response = await fetch("http://localhost:5678/api/works/" + id, myInit);
    console.log(response);
    // const workDel = response.json();
    // console.log("RETURN", workDel.status);

    // if (workDel.status === 204) {
    //     return workDel;
    // }
// ELSE ERROR !!!

    // const response = await fetch("http://localhost:5678/api/works/" + id, {
    //     method: 'DELETE',
    //     headers: {
    //         'Content-Type' : 'application/json',
    //         'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
    //     },
    // });

    // const workDel = await response.json();
    // console.log("RETURN", workDel.status);
    // if (ret.status === 204) {
                //     fetchAllWorks().then(works => gallery(works));
                //     console.log("RETURN", ret);
                // }
}
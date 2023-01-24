export async function allWorks()
{

    const myRequest = new Request('http://localhost:5678/api/works');
// const myRequest = new Request('http://192.168.1.31:5678/api/works');
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    const myResponse = await fetch(myRequest, myHeaders);
    console.log(myResponse);
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

export function myFetchLogin(user) {

    console.log("ENTER THE MATRIX 2!!!!!");
    console.log("test", user);
    console.log(user.password);
    console.log(user.email);

    // // const url = "http://192.168.1.31:5678/api/users/login";
    const url = "http://localhost:5678/api/users/login";

    const myRequest = new Request(url);
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    fetch(myRequest, myHeaders).then(myResponse => {
    if (myResponse.ok === true) {
        return myResponse.json();
    }
    let message = document.querySelector('#message');
    throw new Error('Impossible de contacter le serveur...');
    })
}
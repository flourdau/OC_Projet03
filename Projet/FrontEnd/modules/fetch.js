export async function allWorks()
{
    const myRequest = new Request('http://192.168.1.31:5678/api/works');
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    const myResponse = await fetch(myRequest, myHeaders)

    if (myResponse.ok === true) {
        const tabSet = new Set();
        tabSet.add(myResponse.json());
        return tabSet;
    }
    throw new Error('Impossible de contacter le serveur...');
}

export async function allCategories()
{
    const myRequest = new Request('http://192.168.1.31:5678/api/categories');
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    const myResponse = await fetch(myRequest, myHeaders)

    if (myResponse.ok === true) {
        return myResponse.json();
    }
    throw new Error('Impossible de contacter le serveur...');
}
export async function allWorks()
{
    const request = new Request('http://192.168.1.31:5678/api/works');
    const init = {headers: {"Accept": "application/json"}};

    const response = await fetch(request, init)

    if (response.ok === true) {
        return response.json();
    }
    throw new Error('Impossible de contacter le serveur...');
}
export async function allWorks()
{
    const response = await fetch('http://localhost:5678/api/works', {
        headers: {
            'Cross-Origin-Resource-Policy': 'cross-origin',
            "Accept": "application/json"
        }}
    )

    if (response.ok === true) {
        return response.json();
    }
    throw new Error('Impossible de contacter le serveur...');
}
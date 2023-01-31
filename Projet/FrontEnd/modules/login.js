import { fetchUser } from './fetch.js';

export async function myLogin()
{

    const form = document.querySelector("#login");

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        await fetchUser()
    })

}

export function myLogout()
{

    const myLogoutBtn = document.querySelector("#myLogout");
    
    myLogoutBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (sessionStorage.getItem('token')) {
            sessionStorage.clear();
            document.location.href="./login.html";
    }})

}
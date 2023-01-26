import { fetchUser } from './fetch.js';

export function myLogin() {

    const form = document.querySelector("#login");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        fetchUser()
    })

}

export function myLogout() {

    const myLogoutBtn = document.querySelector("#myLogout");
    
    myLogoutBtn.addEventListener('click', (event) => {
        event.preventDefault();
        if (sessionStorage.getItem('token')) {
            sessionStorage.clear();
            document.location.href="./login.html";
            console.log('Login!');
    }})

}
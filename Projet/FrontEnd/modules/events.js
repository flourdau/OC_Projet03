import { allWorks as fetchAllWorks, allCategories as fetchAllCategories } from './fetch.js';
import { gallery as varGallery, allCards as gallery, cleanGallery, createGallery, createCard } from './gallery.js';

function myDisplayCategories(className, tabSet)
{

    cleanGallery();
    createGallery();
    for (let item of tabSet)
    {
        item.then(works =>
        {
            works.forEach(work => 
            {
                if (parseInt(className) === work.categoryId)
                {
                    const card = createCard(work);
                    varGallery.appendChild(card);
                }
            }
        )})
    }

}

async function deleteWork(id)
{
    let token = sessionStorage.getItem('token');

    let rep = await fetch("http://localhost:5678/api/works/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
    })
    return (rep.status) 

}


export function createEvents(tabSet)
{

    const btnDelWork = document.querySelectorAll(".miniCard button");
    const portfolio = document.getElementById("portfolio");
    const myBtns = document.querySelectorAll(".filter-btn");
    const myBtnTous = document.getElementsByClassName("filter-btn-tous");

    myBtnTous[0].addEventListener('click', {
        handleEvent: function () {
            fetchAllWorks().then(works => gallery(works));
    }});

    myBtns.forEach(button => {
        button.addEventListener('click', {
            handleEvent: function () {
                myDisplayCategories(button.value, tabSet);
    }})});

    btnDelWork.forEach(button => {
        button.addEventListener('click', {
            handleEvent: function () {
                console.log(button.value);
                let ret = deleteWork(button.value);
                if (ret === 204) {
                    console.log(ret);
                }
    }})});

}

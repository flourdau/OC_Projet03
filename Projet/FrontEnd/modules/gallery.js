/*
*   Module de création de la gallerie
*/

import { createElemForm } from './createForm.js';
const portfolio = document.getElementById("portfolio");
export let gallery = portfolio.querySelector(".gallery");
const modal = document.querySelector(".modal-wrapper");
let miniGallery = document.querySelector("#miniGallery");
export let contenerGallery = document.querySelector("#contenerGallery");


export function cleanGallery()
{

    gallery.remove();
    miniGallery.remove();

}

export function createMiniGallery()
{

    miniGallery = document.createElement("div");
    miniGallery.setAttribute('id', 'miniGallery');
    contenerGallery = document.createElement("div");
    contenerGallery.setAttribute('id', 'contenerGallery');

    let h2 = document.createElement("h2");
    h2.innerHTML = "Galerie photo";

    miniGallery.appendChild(h2);
    miniGallery.appendChild(contenerGallery);

    let bottomBar = document.createElement("div");
    let buttonAdd = document.createElement("button");
    let buttonDel = document.createElement("button");
    let myHr = document.createElement("hr");

    buttonAdd.setAttribute("type", "button");
    buttonAdd.setAttribute("class", "buttonAdd");
    buttonDel.setAttribute("type", "button");
    bottomBar.setAttribute("id", "bottomBar");
    buttonAdd.innerHTML = "Ajouter une photo";
    buttonDel.innerHTML = "Supprimer la galerie";
    buttonAdd.focus();
    bottomBar.appendChild(buttonAdd);
    bottomBar.appendChild(buttonDel);

    miniGallery.appendChild(myHr);
    miniGallery.appendChild(bottomBar);

}

export function createCard(card)
{

    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    const myImage = new Image(363, 484);

    figure.dataset.id = card.id;
    myImage.src = card.imageUrl;
    myImage.crossOrigin = "Anonymous";

    figure.appendChild(myImage);
    figcaption.innerText = card.title;
    figure.appendChild(figcaption);

    return figure;

}

export function createMiniCard(card)
{

    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    let divUpBar = document.createElement("div");
    let buttonDelete = document.createElement("button");
    let buttonFleche = document.createElement("button");
    let icoDelete = document.createElement("i");
    let icoFleche = document.createElement("i");
    const myImage = new Image(78, 104);
    figure.dataset.id = card.id;

    figure.setAttribute('class', 'miniCard');
    figure.setAttribute('class', 'miniCard');
    buttonFleche.setAttribute('type', 'button');
    icoFleche.setAttribute('class', 'fa-solid fa-arrows-up-down-left-right');
    buttonFleche.appendChild(icoFleche);
    
    icoDelete.setAttribute('class', 'fa-sharp fa-solid fa-trash-can');
    buttonDelete.setAttribute('type', 'button');
    buttonDelete.setAttribute('class', 'btn-del-work');
    buttonDelete.appendChild(icoDelete);
    buttonDelete.dataset.id = card.id;

    divUpBar.appendChild(buttonFleche);
    divUpBar.appendChild(buttonDelete);
    figure.appendChild(divUpBar);

    myImage.src = card.imageUrl;
    myImage.crossOrigin = "Anonymous";

    figure.appendChild(myImage);
    figcaption.innerText = "éditer";
    figure.appendChild(figcaption);

    return figure;

}

export function createGallery()
{

    gallery = document.createElement("div");
    gallery.setAttribute('class', 'gallery');
    portfolio.appendChild(gallery);

}

export function createGalleries(tabSet, categories)
{

    for (let item of tabSet) {

        item.then(works =>
        {
            document.querySelector('#modal1').style.display = "none";
            cleanGallery();
            createGallery();
            createMiniGallery();
            works.forEach(card => {
    
                gallery.appendChild(createCard(card));
                if (sessionStorage.getItem('token')) {contenerGallery.appendChild(createMiniCard(card));}

            });
            if (sessionStorage.getItem('token')) {
                modal.appendChild(miniGallery);
                modal.appendChild(createElemForm(categories));
            }

        })
    }

}
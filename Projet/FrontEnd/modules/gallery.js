const portfolio = document.getElementById("portfolio");
const modal = document.querySelector(".modal-wrapper");
export let gallery = portfolio.querySelector(".gallery");
let miniGallery = portfolio.querySelector(".miniGallery");

export function cleanGallery()
{

    gallery.remove();
    miniGallery.remove();

}

export function createGallery()
{

    gallery = document.createElement("div");
    gallery.setAttribute('class', 'gallery');
    portfolio.appendChild(gallery);

}

export function createMiniGallery()
{

    miniGallery = document.createElement("div");
    let bottomBar = document.createElement("div");
    let buttonAdd = document.createElement("button");
    let buttonDel = document.createElement("button");
    let myHr = document.createElement("hr");

    bottomBar.setAttribute("id", "bottomBar");
    buttonAdd.innerHTML = "Ajouter une photo";
    buttonDel.innerHTML = "Supprimer la galerie";
    buttonAdd.focus();
    bottomBar.appendChild(buttonAdd);
    bottomBar.appendChild(buttonDel);

    miniGallery.setAttribute('class', 'miniGallery');

    modal.appendChild(miniGallery);
    modal.appendChild(myHr);
    modal.appendChild(bottomBar);

}

export function createCard(card)
{

    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    const myImage = new Image(363, 484);

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

    figure.setAttribute('class', 'miniCard');
    icoFleche.setAttribute('class', 'fa-solid fa-arrows-up-down-left-right');
    buttonFleche.appendChild(icoFleche);
    
    icoDelete.setAttribute('class', 'fa-sharp fa-solid fa-trash-can');
    buttonDelete.appendChild(icoDelete);
    buttonDelete.setAttribute('value', card.id);

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

export function allCards(tabSet)
{

    for (let item of tabSet) {
        item.then(works => {
            
            cleanGallery();
            createGallery();
            createMiniGallery();
            works.forEach(card => {
                    gallery.appendChild(createCard(card));
                    if (sessionStorage.getItem('token')) {
                        miniGallery.appendChild(createMiniCard(card));
                    }
                }
            );

        })
    }

}
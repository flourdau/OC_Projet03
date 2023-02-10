import { formSend } from './fetch.js';

const portfolio = document.getElementById("portfolio");
export let gallery = portfolio.querySelector(".gallery");
const modal = document.querySelector(".modal-wrapper");
let miniGallery = document.querySelector("#miniGallery");
let contenerGallery = document.querySelector("#contenerGallery");
const contenerForm = document.querySelector("#myFormulaire");

function createElemForm(categories) {
    // CREATION DU FORMULAIRE
    let form = document.createElement("form");
    form.setAttribute("id", "myformAdd");
    // form.setAttribute("method", "post")
    // form.setAttribute("enctype", "application/x-www-form-urlencoded")

    // Création du container
    let myDlContener = document.createElement("div");
    myDlContener.setAttribute("class", "myDlContener");
    let icoImg = document.createElement("i");
    icoImg.setAttribute("class", "fa-regular fa-image");
    let dlImg = document.createElement("input");
    dlImg.setAttribute("required", "required");
    dlImg.setAttribute("class", "dlImg");
    dlImg.setAttribute("name", "imageUrl");
    dlImg.setAttribute("type", "file");
    dlImg.setAttribute("accept", "image/jpeg, image/jpg, image/png");
    dlImg.setAttribute("value", "+ Ajouter photo");

    let p = document.createElement("p");
    p.innerText = "jpg, png : 4mo max";
    myDlContener.appendChild(icoImg);
    myDlContener.appendChild(dlImg);
    myDlContener.appendChild(p);

    // Création des input
    let myInputContener = document.createElement("div");
    myInputContener.setAttribute("class", "myInputContener");
    let inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "title");
    inputTitle.setAttribute("class", "titleForm");
    inputTitle.setAttribute("id", "title-select");
    inputTitle.setAttribute("required", "required");
    
    let selectCategory = document.createElement("select");

    selectCategory.setAttribute("required", "required");
    selectCategory.setAttribute("id", "categories-select");
    selectCategory.setAttribute("name", "categoryId");
    selectCategory.setAttribute("class", "categorieForm");
    let option = document.createElement("option");
    option.innerText = "";
    selectCategory.appendChild(option);
    
    categories.forEach(categorie => {
        let option = document.createElement("option");
        option.setAttribute("value", categorie.id);
        option.setAttribute("name", 'categoryId');
        option.innerText = categorie.name;
        selectCategory.appendChild(option);
    });
    
    let labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "title-select");
    labelTitle.innerText = "Titre";

    let labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "categories-select");
    labelCategory.innerText = "Catégorie";

    myInputContener.appendChild(labelTitle);
    myInputContener.appendChild(inputTitle);
    myInputContener.appendChild(labelCategory);
    myInputContener.appendChild(selectCategory);

    // CRATION DU BOUTTON SUBMIT
    let bottomBar = document.createElement("div");
    bottomBar.setAttribute("class", "bottomBar");
    let hrModal = document.createElement("hr");
    let submitForm = document.createElement("button");
    submitForm.setAttribute("id", "submitFormAdd");
    submitForm.setAttribute("type", "submit");
    submitForm.innerText = "Valider";
    bottomBar.appendChild(hrModal);
    bottomBar.appendChild(submitForm);

    form.appendChild(myDlContener);
    form.appendChild(myInputContener);
    form.appendChild(bottomBar);
    contenerForm.appendChild(form);

    // form.addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     let tmp = formSend(form);
    // });

    return contenerForm;

}

export function cleanGallery()
{

    gallery.remove();
    miniGallery.remove();

    gallery = document.createElement("div");
    gallery.setAttribute('class', 'gallery');
    miniGallery = document.createElement("div");
    miniGallery.setAttribute('id', 'miniGallery');
    contenerGallery = document.createElement("div");
    contenerGallery.setAttribute('id', 'contenerGallery');
    let h2 = document.createElement("h2");
    h2.innerHTML = "Galerie photo";

    miniGallery.appendChild(h2);
    miniGallery.appendChild(contenerGallery);
}

export function createGallery()
{

    portfolio.appendChild(gallery);

}

export function createMiniGallery()
{

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

    return miniGallery;

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

export async function createGalleries(tabSet, categories)
{

    for (let item of tabSet) {
        item.then(works => {
            cleanGallery();
            createGallery();
            works.forEach(card => {
                gallery.appendChild(createCard(card));
                if (sessionStorage.getItem('token')) {
                    contenerGallery.appendChild(createMiniCard(card));
                }
            });
            miniGallery = createMiniGallery();
            modal.appendChild(miniGallery);
            if (sessionStorage.getItem('token')) {
                modal.appendChild(createElemForm(categories));
            }
            document.querySelector('#modal1').style.display = "none";
        })
    }

}
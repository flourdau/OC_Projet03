const portfolio = document.getElementById("portfolio");
export let gallery = portfolio.querySelector(".gallery");
const modal = document.querySelector(".modal-wrapper");
let miniGallery = document.querySelector("#miniGallery");
let contenerGallery = document.querySelector("#contenerGallery");
const contenerForm = document.querySelector("#myFormulaire");

function createElemForm() {

    // CREATION DU FORMULAIRE
    let form = document.createElement("form");

    // Création du container
    let myDlContener = document.createElement("div");
    let icoImg = document.createElement("i");
    icoImg.setAttribute("class", "");
    let dlImg = document.createElement("button");
    dlImg.innerText = "+ Ajouter photo";
    let p = document.createElement("p");
    p.innerText = "jpg, png : 4mo max";
    myDlContener.appendChild(icoImg);
    myDlContener.appendChild(dlImg);
    myDlContener.appendChild(p);

    // Création des input
    let myInputContener = document.createElement("div");
    let inputTitle = document.createElement("input");
    let inputCategory = document.createElement("input");
    let labelTitle = document.createElement("label");
    let labelCategory = document.createElement("label");
    labelTitle.innerText = "Titre";
    labelCategory.innerText = "Catégorie";
    myInputContener.appendChild(labelTitle);
    myInputContener.appendChild(inputTitle);
    myInputContener.appendChild(labelCategory);
    myInputContener.appendChild(inputCategory);

    // CRATION DU BOUTTON SUBMIT
    let bottomBar = document.createElement("div");
    let hrModal = document.createElement("hr");
    let submitForm = document.createElement("button");
    submitForm.innerText = "Valider";
    bottomBar.appendChild(hrModal);
    bottomBar.appendChild(submitForm);

    form.appendChild(myDlContener);
    form.appendChild(myInputContener);
    form.appendChild(bottomBar);
    contenerForm.appendChild(form);

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

    contenerGallery.appendChild(myHr);
    contenerGallery.appendChild(bottomBar);

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

export function createGalleries(tabSet)
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
                modal.appendChild(createElemForm());
            }
            document.querySelector('#modal1').style.display = "none";
        })
    }

}
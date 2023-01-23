/* DEBUG VM */
// const API_URL = 'localhost';
const API_URL = '192.168.1.31';

const portfolio = document.getElementById("portfolio");
let gallery = portfolio.querySelector(".gallery");

export function cleanGallery() {

    gallery.remove();

}

export function createGallery() {

    gallery = document.createElement("div");
    gallery.setAttribute('class', 'gallery');
    portfolio.appendChild(gallery);
    return gallery;

}

export function createCard(card) 
{

    let figure = document.createElement("figure");
    figure.setAttribute('class', card.categoryId);

    let figcaption = document.createElement("figcaption");
    const myImage = new Image(363, 484);

    /* DEBUG VM */
    card.imageUrl = card.imageUrl.replace('localhost', API_URL);

    myImage.src = card.imageUrl;
    myImage.crossOrigin = "Anonymous";

    figure.appendChild(myImage);
    figcaption.innerText = card.title;
    figure.appendChild(figcaption);

    return figure;

}

export function allCards(tabSet) 
{

    for (let item of tabSet) {
        item.then(work => {
            cleanGallery();
            let gallery = createGallery();
            work.forEach(card => gallery.appendChild(createCard(card)));
        })
    }

}
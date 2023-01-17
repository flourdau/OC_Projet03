export function createCard(card) 
{
    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");
    const myImage = new Image(363, 484);

/* DEBUG VM */
card.imageUrl = card.imageUrl.replace('localhost', '192.168.1.31');

    myImage.src = card.imageUrl;
    myImage.crossOrigin = "Anonymous";

    figure.appendChild(myImage);
    figcaption.innerText = card.title;
    figure.appendChild(figcaption);

    return figure;

}

export async function allCards(data) 
{
    const gallery = document.querySelector(".gallery");
    data.forEach(element => gallery.appendChild(createCard(element)));
}

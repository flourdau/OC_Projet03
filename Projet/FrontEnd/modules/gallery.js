/* Function One Card */
export function createCard(card) 
{
    let figure = document.createElement("figure");
    let figcaption = document.createElement("figcaption");

    const myImage = new Image(100, 200);
    myImage.src = card.imageUrl;
    figure.appendChild(myImage);
    figcaption.innerText = card.title;
    figure.appendChild(figcaption);
    
    return figure;

}

/* Function allCard */
export async function allCards(data) 
{
console.log(data);    
const gallery = document.querySelector(".gallery");
// gallery.appendChild(tabCards);
    data.forEach(element => gallery.appendChild(createCard(element)));

console.log('youpi!');    
    // return(tabCards);
}

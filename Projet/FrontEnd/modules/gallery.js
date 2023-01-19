export function createCard(card) 
{
    let figure = document.createElement("figure");
    figure.setAttribute('class', card.categoryId);

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

export async function allCards(tabSet) 
{
    for (let item of tabSet) {
        item.then(work => {

            // Clean Gallery Portfolio
            const portfolio = document.getElementById("portfolio");
            let gallery = portfolio.querySelector(".gallery");
            gallery.remove();
        
            // Create Gallery Div
            gallery = document.createElement("div");
            gallery.setAttribute('class', 'gallery');
            portfolio.appendChild(gallery);
        
            // Create All Card
            work.forEach(element => gallery.appendChild(createCard(element)));

        })
    }
    return tabSet;
}

/* Add Gallery */
export async function addGallery(tabCards) 
{
    const gallery = document.querySelector(".gallery");
    gallery.appendChild(tabCards);
console.log(tabCards)
}

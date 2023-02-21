/*
*   Module pour la recréation de la gallerie après une selection de catégorie 
*/

import { gallery as varGallery, cleanGallery, createGallery, createCard } from './gallery.js';

export function filterCategories(className, tabSet)
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

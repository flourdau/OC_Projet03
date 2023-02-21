/*
*   Module principal d'initiation
*/

import { fetchAllWorks, fetchAllCategories } from './fetch.js';
import { createGalleries } from './gallery.js';
import { createMenu } from './createFilters.js';
import { createEvents, createEventsModal } from './events.js';
import { checkToken } from './storage.js';
import { createBlocksModifier } from './modifier.js';
import { myLogout } from './login.js';

export async function main()
{

    try {

        //  Reccup des works
        const tabSet = await fetchAllWorks();

        //  Reccup des Catégories
        const categories = await fetchAllCategories();

        //  Affichage des works
        await createGalleries(tabSet, categories);//??

        //  Affichage du menu de catégories
        createMenu(categories);

        //  Si Log
        if (checkToken()) {
            // on crée le block Modal
            createBlocksModifier();
            // Le bouton Logout
            myLogout();
            // Ainsi que les events de la modal
            createEventsModal();
        }

        //  Création des events restants
        createEvents(tabSet);

    }
    catch (e) {

        let message = 'Error! :(';
        console.log(message);
        throw new Error(message);

    }

}
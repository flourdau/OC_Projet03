import { fetchAllWorks, fetchAllCategories } from './fetch.js';
import { createGalleries } from './gallery.js';
import { createMenu } from './createFilters.js';
import { createEvents, createEventsModal } from './events.js';
import { checkToken } from './storage.js';
import { createBlocksModifier } from './modifier.js';
import { myLogout } from './login.js';

export async function main() {
    try {
        let tabSet = await fetchAllWorks();
        // console.log(tabSet);
        createGalleries(tabSet);
        let categories = await fetchAllCategories();
        // console.log(categories);
        createMenu(categories);

        if (checkToken()) {
            // console.log(checkToken());
            createBlocksModifier();
            createEventsModal();
        }
        createEvents(tabSet);
        myLogout();
    }
    catch (e) {
        let message = 'Error! :(';
        console.log(message);
        throw new Error(message);
    }
}
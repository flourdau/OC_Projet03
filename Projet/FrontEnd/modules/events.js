import { allWorks as fetchAllWorks, allCategories as fetchAllCategories } from './fetch.js';
import { allCards as gallery, cleanGallery, createGallery, createCard } from './gallery.js';

function myDisplayClass(className, tabSet) {

    let tabSetTMP = new Set();
    cleanGallery();
    let gallery = createGallery();
    for (let item of tabSet) {
        item.then(works => {
            works.forEach(work => {
                if (parseInt(className) === work.categoryId) {
                    const card = createCard(work);
                    gallery.appendChild(card);
                }
            })})
        }

}

export function createEvents(tabSet) {

    const portfolio = document.getElementById("portfolio");
    const myBtns = document.querySelectorAll(".filter-btn");
    const myBtnTous = document.getElementsByClassName("filter-btn-tous");

    // all
    myBtnTous[0].addEventListener('click', {
        handleEvent: function (event) {
            fetchAllWorks().then(works => gallery(works));
    }});

    myBtns.forEach(button => {
        button.addEventListener('click', {
            handleEvent: function (event) {
                myDisplayClass(button.value, tabSet);
    }})});

}
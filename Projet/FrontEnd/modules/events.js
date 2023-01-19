import { allWorks as fetchAllWorks, allCategories as fetchAllCategories } from './fetch.js';
import { allCards as gallery } from './gallery.js';

async function myDisplayClass(className, tabSet) {
    console.log(tabSet);
    console.log(className);

    let works = [];

    console.log('ENTER TO THE MATRIX! XD');
    // gallery(tabSet);
}

export async function createEvents(tabSet) {

    const portfolio = document.getElementById("portfolio");
    // const myBtns = document.getElementsByClassName("filter-btn");
    const myBtns = document.querySelectorAll(".filter-btn");
    const myBtnTous = document.getElementsByClassName("filter-btn-tous");

    // all
    myBtnTous[0].addEventListener('click', {
        handleEvent: function (event) {
            fetchAllWorks().then(works => gallery(works));
    }});

    console.log(tabSet);

    myBtns.forEach(button => {
        button.addEventListener('click',
            myDisplayClass(button.value, tabSet));
    });
}
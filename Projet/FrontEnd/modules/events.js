import { allWorks as fetchAllWorks, allCategories as fetchAllCategories } from './fetch.js';
import { createCard, allCards as gallery } from './gallery.js';

function myDisplayClass(className, tabSet) {

    let tabSetTMP = new Set();
    // let tabTMP = Array();

    // Clean Gallery Portfolio
    const portfolio = document.getElementById("portfolio");
    let gallery = portfolio.querySelector(".gallery");
    gallery.remove();

    // Create Gallery Div
    gallery = document.createElement("div");
    gallery.setAttribute('class', 'gallery');
    portfolio.appendChild(gallery);

    for (let item of tabSet) {
        item.then(works => {
            works.forEach(work => {
                if (parseInt(className) === work.categoryId) {

                    let figure = document.createElement("figure");
                    figure.setAttribute('class', work.categoryId);
                
                    let figcaption = document.createElement("figcaption");
                    const myImage = new Image(363, 484);
                
                /* DEBUG VM */
                work.imageUrl = work.imageUrl.replace('localhost', '192.168.1.31');
                
                    myImage.src = work.imageUrl;
                    myImage.crossOrigin = "Anonymous";
                
                    figure.appendChild(myImage);
                    figcaption.innerText = work.title;
                    figure.appendChild(figcaption);
                    // return figure;
                    // tabTMP.forEach(element => gallery.appendChild(createCard(element)));
                    // tabTMP.push(work)
                    gallery.appendChild(figure);
                }
            }
            )})
    }

    // console.log(tabTMP);
    // console.log(typeof(tabTMP));



    // for (let element of tabTMP) {
    //     console.log(element);
    // }
    // return tabTMP;
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
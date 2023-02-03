import { fetchAllWorks, deleteWork } from './fetch.js';
import { filterCategories } from './category.js';
import { createGalleries } from './gallery.js';
import { openModal, closeModal } from './modal.js';

export function createEvents(tabSet)
{

    const portfolio = document.getElementById("portfolio");
    const myBtns = document.querySelectorAll(".filter-btn");
    const myBtnTous = document.getElementsByClassName("filter-btn-tous");

    myBtnTous[0].addEventListener('click', {
        handleEvent: function () {
            fetchAllWorks().then(works => createGalleries(works));
    }});

    myBtns.forEach(button => {
        button.addEventListener('click', {
            handleEvent: function () {
                filterCategories(button.value, tabSet);
    }})});

}

export function createEventsModal(tabSet)
{

    const btnDelWork = document.querySelectorAll(".btn-del-work");

    btnDelWork.forEach(button => {
        button.addEventListener('click', function (event) {
            console.log('ENTER!');
            event.preventDefault();
            let workDel = deleteWork(button.dataset.id);

            // let tabSet = await fetchAllWorks();
            // await gallery(tabSet);
 
            // initModal(tabSet);
            // await createEvents(tabSet);
            // console.log('HELOO', workDel);
    });});

    document.querySelectorAll('.js-modal').forEach(a => {
        a.addEventListener('click', openModal);
    });

    window.addEventListener('keydown', function (e) {
        console.log(e.key);
        if (e.key === 'Escape' || e.key === 'Esc')
        {
            closeModal(e);
        }
        // if (e.key === 'Tab' && modal === null)
        // {
        //     focusModal(e);
        // }
    })

}
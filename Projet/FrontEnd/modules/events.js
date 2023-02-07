import { fetchAllWorks, fetchAllCategories, deleteWork } from './fetch.js';
import { filterCategories } from './category.js';
import { createGalleries } from './gallery.js';
import { openModal, closeModal } from './modal.js';
import { modalFormAddOn, modalFormAddOff } from './formAdd.js';


export function createEvents(tabSet)
{

    // const portfolio = document.getElementById("portfolio");
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

export function createEventsModal()
{
    // buttonIcoLast.addEventListener('click', function (event) {
    //     reOpenModal(event);
    // });

    const btnDelWork = document.querySelectorAll(".btn-del-work");
    btnDelWork.forEach(button => 
    {
        button.addEventListener('click', function (event)
        {
            event.preventDefault();
            deleteWork(button.dataset.id).then(response =>
            {
                if (response.ok)
                {
                    //Remove Work
                    document.querySelector(`.gallery>figure[data-id="${(button.dataset.id)}"]`).remove();
                    //Remove MiniWork
                    document.querySelector(`#contenerGallery>figure[data-id="${(button.dataset.id)}"]`).remove();
                }
    });});});

    document.querySelectorAll('.js-modal').forEach(a => {a.addEventListener('click', openModal);});

    window.addEventListener('keydown', function (event)
    {
        console.log(event.key);
        if (event.key === 'Escape' || event.key === 'Esc')
        {
            closeModal(event);
        }
        // if (e.key === 'Tab' && modal === null)
        // {
        //     focusModal(e);
        // }
    })

    const buttonAdd = document.querySelector('.buttonAdd')
    buttonAdd.addEventListener('click', function (event)
    {

        event.preventDefault();
        modalFormAddOn();

    })

    const buttonReturn = document.querySelector('.js-return-modal')
    buttonReturn.addEventListener('click', function (event) {

        event.preventDefault();
        modalFormAddOff();
    });

}
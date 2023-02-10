import { fetchAllWorks, fetchAllCategories, deleteWork, formSend } from './fetch.js';
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



    
    // function deleteImage(index) {
        //     // imagesArray.splice(index, 1);
        //     displayImages();
        // }
        

    function displayImages(files) {
    
        let previewImg = document.createElement('img')
        previewImg.classList.add('previewImg');
        previewImg.setAttribute("alt", "image");
        previewImg.src = window.URL.createObjectURL(files[0])
        document.querySelector(".myDlContener").appendChild(previewImg);
        
    }
    
    const myInput = document.querySelector(".dlImg");
    myInput.addEventListener('change', function (event) {
    
        event.preventDefault();
        console.log(myInput.files)
        displayImages(myInput.files);

    })

    const form = document.querySelector("#myformAdd");

    form.addEventListener('submit', {
        handleEvent: function (event) {
            event.preventDefault();
            formSend();
    }});

    // const btnAddWork = document.querySelector("#submitFormAdd");
    // btnAddWork.addEventListener('click', function (event) {
    //         event.preventDefault();
    //         formSend();

    // })
    // btnAddWork.addEventListener('click', (event) => {
    //     // formValid();
    //     // afficheData();
    // })

}
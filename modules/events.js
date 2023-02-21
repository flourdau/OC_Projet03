/*
*   Module réunissant tous les events listener
*/

import { fetchAllWorks, fetchAllCategories, deleteWork, formSend } from './fetch.js';
import { filterCategories } from './category.js';
import { gallery, contenerGallery, createGalleries, createCard, createMiniCard } from './gallery.js';
import { openModal, closeModal } from './modal.js';
import { modalFormAddOn, modalFormAddOff } from './formToggle.js';

export function createEvents(tabSet)
{

    // Nettoie la class activeBtn des boutons du menu de filtre
    function cleanBtn() {

        const allBtn = document.querySelectorAll("#menuFilters button");
        allBtn.forEach(button => {

            button.classList.remove("activeBtn");

        });

    }

    // Bouton 'Tous'
    const myBtnTous = document.getElementsByClassName("filter-btn-tous");
    myBtnTous[0].addEventListener('click', {
        handleEvent: function () {
            if (!myBtnTous[0].classList.contains('activeBtn')) {
                cleanBtn();
                myBtnTous[0].classList.add("activeBtn"); 
                fetchAllWorks().then(works => createGalleries(works));
            }
    }});

    // Tous les Boutons de Catégories
    const myBtns = document.querySelectorAll(".filter-btn");
    myBtns.forEach(button => {

        button.classList.remove("activeBtn"); 
        button.addEventListener('click', {
            handleEvent: function () {

                if (!button.classList.contains('activeBtn')) {
                        cleanBtn();
                        button.classList.add("activeBtn"); 
                        filterCategories(button.value, tabSet);
                }

    }})});

}

export function createEventsModal()
{

    // bouton Fermer la modal
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

    // Fermeture du formalaire avec Escape
    window.addEventListener('keydown', function (event)
    {

        if (event.key === 'Escape' || event.key === 'Esc')
        {

            closeModal(event);

        }

    })


    // bouton return modal
    const buttonReturn = document.querySelector('.js-return-modal')
    buttonReturn.addEventListener('click', function (event) {

        event.preventDefault();
        modalFormAddOff();

    });


    // bouton Ajouter un work
    const buttonAdd = document.querySelector('.buttonAdd')
    buttonAdd.addEventListener('click', function (event)
    {

        event.preventDefault();
        modalFormAddOn();

    })


    // Toggle image et input download image
    function displayImages(files) {
    
        let previewImg = document.createElement('img');

        previewImg.classList.add('previewImg');
        previewImg.setAttribute("alt", "image");
        previewImg.src = window.URL.createObjectURL(files[0])
        document.querySelector(".labelImg").style.display = 'none';
        document.querySelector(".myDlContener i").style.display = 'none';
        document.querySelector(".myDlContener p").style.display = 'none';
        document.querySelector(".myDlContener").appendChild(previewImg);

    }


    // Si download image à changé
    const myInput = document.querySelector(".dlImg");
    myInput.addEventListener('change', function (event) {

        event.preventDefault();
        displayImages(myInput.files);

    })


    // Creation d'un objet card
    function createCards()
    {

        const card = new Object;
        const files = document.querySelector(".dlImg").files;
        card.id = document.querySelector(".categorieForm").value;
        card.title = document.querySelector(".titleForm").value;
        card.imageUrl  = window.URL.createObjectURL(files[0])
     
        gallery.appendChild(createCard(card));
        if (sessionStorage.getItem('token'))
        {

            contenerGallery.appendChild(createMiniCard(card));

        }

    }


    // Verif les input du formulaire de la modal2
    function verifInput() {

        // select input
        const imgUrl = myInput.value;
        let categories = document.querySelector("#categories-select").value;
        const title = document.querySelector("#title-select").value;

        if (categories && title && imgUrl) {

            // Check categories
            const regex = /^[0-9]+$/;
            const test = regex.test(categories);
            if (test === false)  
            {

                console.log('ERROR categories');
                return false;

            }

            // Ckeck title
            const regex2 = /^[A-Za-z0-9\s\ -_,'\.;:❤()]+$/;
            const test2 = regex2.test(title);
            if (test2 && title.length <= 3 || title.length > 64) 
            {

                console.log('ERROR title');
                return false;

            }

            // Check Image URL
            const regex3 = /^[A-Za-z0-9\s\-_]+$/;
            const test3 = regex3.test(imgUrl);
            if (test3 && imgUrl.length <= 3 || imgUrl.length > 64) 
            {

                console.log('ERROR Image title');
                return false;

            }
        }
        else
        {

            return false;
            console.log('ERROR input');

        }

        return true;
    }


    // Button Submit Modal2
    const form = document.querySelector("#myformAdd");
    form.addEventListener('submit', {

        handleEvent: async function (event) {

            event.preventDefault();
            if (verifInput())
            {

                if (await formSend())
                {

                    createCards(event);
                    form.reset();
                    document.querySelector(".myDlContener img").remove();
                    document.querySelector(".labelImg").style.display = 'block';
                    document.querySelector(".myDlContener i").style.display = 'inline';
                    document.querySelector(".myDlContener p").style.display = 'inline';
                    closeModal(event);

                }

            }
            else
            {

                let message2 = document.querySelector(".message2");
                message2.innerText = "Formulaire invalide";

            }

    }});

}
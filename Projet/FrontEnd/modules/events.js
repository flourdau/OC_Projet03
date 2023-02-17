import { main } from './init.js';
import { fetchAllWorks, fetchAllCategories, deleteWork, formSend } from './fetch.js';
import { filterCategories } from './category.js';
import { gallery, contenerGallery, createGalleries, createCard, createMiniCard } from './gallery.js';
import { openModal, closeModal } from './modal.js';
import { modalFormAddOn, modalFormAddOff } from './formToggle.js';


export function createEvents(tabSet)
{

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

    // function addWork()
    // {

    //     const formDel = document.querySelector("#myformAdd");
    //     formDel.removeEventListener('submit', ()=>{});
    //     let myformAdd = document.querySelector('#myformAdd');
    //     const myInput = document.querySelector(".dlImg");
    //     myInput.removeEventListener('change', ()=>{});
    //     myformAdd.remove();
    //     document.getElementById("myFormulaire").style.display = "none";

    // }

    function createCards()
    {
        // card.id;
        // card.imageUrl;
        // card.title;

        // createCard(card);
        // createMiniCard(card);
        const card = new Object;
        const files = document.querySelector(".dlImg").files;
        card.id = document.querySelector(".categorieForm").value;
        card.title = document.querySelector(".titleForm").value;


        card.imageUrl  = window.URL.createObjectURL(files[0])
     
        gallery.appendChild(createCard(card));
        if (sessionStorage.getItem('token')) {
            contenerGallery.appendChild(createMiniCard(card));
        }
        console.log('Diarra ❤', card);
    }

    const form = document.querySelector("#myformAdd");
    form.addEventListener('submit', {

        handleEvent: async function (event) {

            event.preventDefault();
            if (await formSend())
            {
                // verifInput();
                createCards(event);
                form.reset();
                document.querySelector(".myDlContener img").remove();
                closeModal(event);
            }

    }});

}
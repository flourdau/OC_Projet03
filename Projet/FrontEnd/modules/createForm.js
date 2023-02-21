/*
*   Module de création du formulaire
*/

const contenerForm = document.querySelector("#myFormulaire");
export function createElemForm(categories) {

    // CREATION DU FORMULAIRE
    let form = document.createElement("form");
    form.setAttribute("id", "myformAdd");

    // Création du container
    let myDlContener = document.createElement("div");
    myDlContener.setAttribute("class", "myDlContener");
    let icoImg = document.createElement("i");
    icoImg.setAttribute("class", "fa-regular fa-image");

    let lableImg = document.createElement("label");
    lableImg.setAttribute("class", "labelImg");
    lableImg.innerText = '+ Ajouter photo';

    let dlImg = document.createElement("input");
    dlImg.setAttribute("required", "required");
    dlImg.setAttribute("class", "dlImg");
    dlImg.setAttribute("name", "imageUrl");
    dlImg.setAttribute("type", "file");
    dlImg.setAttribute("accept", "image/jpeg, image/jpg, image/png");
    lableImg.appendChild(dlImg);

    let p = document.createElement("p");
    p.innerText = "jpg, png : 4mo max";
    myDlContener.appendChild(icoImg);
    myDlContener.appendChild(lableImg);
    myDlContener.appendChild(p);

    // Création des input
    let myInputContener = document.createElement("div");
    let myMessage2 = document.createElement("p");
    myMessage2.setAttribute("class", "message2");
    myInputContener.setAttribute("class", "myInputContener");
    let inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("name", "title");
    inputTitle.setAttribute("class", "titleForm");
    inputTitle.setAttribute("id", "title-select");
    inputTitle.setAttribute("required", "required");
    inputTitle.setAttribute("minlength", "3");
    inputTitle.setAttribute("maxlength", "64");

    let selectCategory = document.createElement("select");

    selectCategory.setAttribute("required", "required");
    selectCategory.setAttribute("id", "categories-select");
    selectCategory.setAttribute("name", "categoryId");
    selectCategory.setAttribute("class", "categorieForm");
    let option = document.createElement("option");
    option.innerText = "";
    selectCategory.appendChild(option);
    
    categories.forEach(categorie => {
        let option = document.createElement("option");
        option.setAttribute("value", categorie.id);
        option.setAttribute("name", 'categoryId');
        option.innerText = categorie.name;
        selectCategory.appendChild(option);
    });
    
    let labelTitle = document.createElement("label");
    labelTitle.setAttribute("for", "title-select");
    labelTitle.setAttribute("class", "title-select");
    labelTitle.innerText = "Titre";

    let labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "categories-select");
    labelCategory.setAttribute("class", "categories-select");
    labelCategory.innerText = "Catégorie";

    myInputContener.appendChild(myMessage2);
    myInputContener.appendChild(labelTitle);
    myInputContener.appendChild(inputTitle);
    myInputContener.appendChild(labelCategory);
    myInputContener.appendChild(selectCategory);

    // CRATION DU BOUTTON SUBMIT
    let bottomBar = document.createElement("div");
    bottomBar.setAttribute("class", "bottomBar");
    let hrModal = document.createElement("hr");
    let submitForm = document.createElement("button");
    submitForm.setAttribute("id", "submitFormAdd");
    submitForm.setAttribute("type", "submit");
    submitForm.innerText = "Valider";
    bottomBar.appendChild(hrModal);
    bottomBar.appendChild(submitForm);

    form.appendChild(myDlContener);
    form.appendChild(myInputContener);
    form.appendChild(bottomBar);
    contenerForm.appendChild(form);

    return contenerForm;

}
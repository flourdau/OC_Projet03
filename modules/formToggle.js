/*
*   Toggle entre les 2 modal
*/

export function modalFormAddOn()
{

    document.getElementById("miniGallery").style.display = "none";
    document.getElementById("myFormulaire").style.display = "flex";
    document.querySelector(".js-return-modal").style.opacity = 1;

}

export function modalFormAddOff()
{
    document.getElementById("miniGallery").style.display = "flex";
    document.getElementById("myFormulaire").style.display = "none";
    document.querySelector(".js-return-modal").style.opacity = 0;
}
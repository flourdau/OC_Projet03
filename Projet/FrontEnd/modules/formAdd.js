export function modalFormAddOn()
{

    document.getElementById("miniGallery").style.display = "none";
    document.getElementById("myFormulaire").style.display = "flex";
    document.querySelector(".js-return-modal").style.display = "flex";

}

export function modalFormAddOff()
{
    document.getElementById("miniGallery").style.display = "flex";
    document.getElementById("myFormulaire").style.display = "none";
    document.querySelector(".js-return-modal").style.display = "none";
}


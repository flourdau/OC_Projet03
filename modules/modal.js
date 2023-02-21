/*
*   Module de gestion de l'affichage et la fermeture de la modal
*/

let modal = null;

const stopPropagation = function(e) {e.stopPropagation();}
export const closeModal = function(event)
{

    if (modal === null)
    {

        return

    }

    event.preventDefault();
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', true);
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.js-close-modal').removeEventListener('click', closeModal);
    modal.querySelector('.js-stop-modal').removeEventListener('click', stopPropagation);
    modal = null;

}

export const openModal= function(event)
{

    event.preventDefault();
    modal = document.querySelector("#modal1");
    modal.style.display = 'flex';
    modal.setAttribute('class', 'modal');
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
    modal.addEventListener('click', closeModal);
    modal.querySelector('.js-close-modal').addEventListener('click', closeModal);
    modal.querySelector('.js-stop-modal').addEventListener('click', stopPropagation);

}
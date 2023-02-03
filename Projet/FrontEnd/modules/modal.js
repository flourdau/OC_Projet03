import { createEventsModal } from './events.js';
let modal = null;
// const focusableSelector = 'button, a, input, textarea';
// let focusables = [];

// const focusModal = function(e) {
//     e.preventDefault();
//     let i = focusables.findIndex(f => f === modal.querySelector(":focus"));

//     if (e.shiftKey === true)
//     {
//         i--;
//     }
//     else
//     {
//         i++;
//     }
//     if (i <= focusables.length)
//     {
//         i = 0;
//     }
//     if (i < 0) {
//         i = focusables.length - 1;
//     }
//     focusables[i].focus;
// }

const stopPropagation = function(e) {e.stopPropagation();}
export const closeModal = function(e)
{

    if (modal === null) {
        return
    }
    e.preventDefault();
    modal.setAttribute('class', 'myDisplayNone');
    modal.setAttribute('aria-hidden', true);
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModal);
    modal.querySelector('.js-close-modal').removeEventListener('click', closeModal);
    modal.querySelector('.js-stop-modal').removeEventListener('click', stopPropagation);
    modal = null;

}

export const openModal= function(e)
{

    e.preventDefault();
    modal = document.querySelector("#modal1");
    // focusables = Array.from(modal.querySelectorAll(focusableSelector));
    // focusables[0].focus();
    modal.setAttribute('class', 'modal');
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
    // modal.setAttribute('aria-dialog', ':focus');
    modal.addEventListener('click', closeModal);
    modal.querySelector('.js-close-modal').addEventListener('click', closeModal);
    modal.querySelector('.js-stop-modal').addEventListener('click', stopPropagation);

}

export function initModal(tabSet)
{

    createEventsModal(tabSet);

}
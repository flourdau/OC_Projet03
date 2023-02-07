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
export const closeModal = function(event)
{

    if (modal === null) {
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
    // focusables = Array.from(modal.querySelectorAll(focusableSelector));
    // focusables[0].focus();
    modal.setAttribute('class', 'modal');
    modal.removeAttribute('aria-hidden');
    modal.setAttribute('aria-modal', 'true');
    modal.addEventListener('click', closeModal);
    modal.querySelector('.js-close-modal').addEventListener('click', closeModal);
    modal.querySelector('.js-stop-modal').addEventListener('click', stopPropagation);

}
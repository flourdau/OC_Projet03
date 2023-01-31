let modal = null;

const closeModal = function(e)
{

    if (modal === null) {
        return
    }
    e.preventDefault();
    modal.setAttribute('class', 'myDisplayNone');
    modal.removeAttribute('aria-modal');
    modal.removeEventListener('click', closeModal);
    modal = null;

}

const openModal= function(e)
{

    e.preventDefault();
    const target = document.querySelector("#modal1");
    target.setAttribute('class', 'modal');
    target.removeAttribute('aria-hidden');
    target.setAttribute('aria-modal', 'true');
    modal = target;
    modal.addEventListener('click', closeModal);
    console.log(target);

}

export function createEventModal1()
{

    document.querySelectorAll('.js-modal').forEach(a => {
        a.addEventListener('click', openModal);
    });

}
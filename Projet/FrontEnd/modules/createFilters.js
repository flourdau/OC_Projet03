function createBtn(categorie)
{

    let btn = document.createElement("button");
    btn.setAttribute('class', 'filter-btn');
    btn.setAttribute('value', categorie.id);
    btn.innerText = categorie.name;
    return btn;

}

export async function createMenu(categories)
{

    const menuFilters = document.getElementById("menuFilters");
    categories.forEach(categorie => menuFilters.appendChild(createBtn(categorie)))

}
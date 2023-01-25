export function checkStorage() {
	let myStorage = localStorage;

	if (myStorage.token) {
        console.log('LOGIN PARTY!!!!');

        const body = document.querySelector("body");
        const intro = document.querySelector("#introduction>article");
        const projet = document.querySelector("#portfolio>h2");
        // let div, div2 = document.createElement("div");
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let btn = document.createElement("button");
        // let span, span2 = document.createElement("span");
        let span = document.createElement("span");
        let span2 = document.createElement("span");
        let span3 = document.createElement("span");
        let i = document.createElement("i");
        let i2 = document.createElement("i");
        let i3 = document.createElement("i");

        div.setAttribute('class', 'edition');
        div2.setAttribute('class', 'edition2');
        div3.setAttribute('class', 'edition3');
        btn.setAttribute('class', 'edition-btn');
        i.setAttribute('class', 'fa-regular fa-pen-to-square');
        i2.setAttribute('class', 'fa-regular fa-pen-to-square');
        i3.setAttribute('class', 'fa-regular fa-pen-to-square');
        btn.innerText = "Publier les chanchements";
        span.innerText = "Mode édition";
        span2.innerText = "Modifier";
        span3.innerText = "Modifier";

        div.appendChild(i);
        div.appendChild(span);
        div.appendChild(btn);
        body.prepend(div);

        div2.appendChild(i2);
        div2.appendChild(span2);
        intro.prepend(div2);

        div3.appendChild(i3);
        div3.appendChild(span3);
        projet.appendChild(div3);
    }

}

export function checkStorageLogin() {
	let myStorage = localStorage;
	if (myStorage.token) {
		console.log('User login!');
		document.location.href="./index.html";
	}
}

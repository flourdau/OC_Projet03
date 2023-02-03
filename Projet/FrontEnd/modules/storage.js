export function checkToken(){return sessionStorage.getItem('token');}

export function checkTokenLogin()
{

	if (sessionStorage.getItem('token')) {
		document.location.href="./index.html";
	}

}
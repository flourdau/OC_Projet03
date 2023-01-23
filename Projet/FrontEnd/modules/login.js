export async function testLogin() {
    console.log("ENTER THE MATRIX");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NDQ5MDg5MiwiZXhwIjoxNjc0NTc3MjkyfQ.Ya__LWuCJ-X5UFSPo0PwvWxFEUjBihrKZMfYEZsS8uA";

    let user = {
        "email": "sophie.bluel@test.tld",
        "password": "S0phie"
    }
    // const url = "http://localhost:5678/api/users/login";
    const url = "http://192.168.1.31:5678/api/users/login";

    let response = await fetch('/article/fetch/post/user', {
        method: 'POST',
        headers: {
        //   'Content-Type': 'application/json;charset=utf-8'
        'Content-Type': 'multipart/form-data;charset=utf-8'
        },
        body: JSON.stringify(user)
    });

    let result = await response.json();
    alert(result.message);
}
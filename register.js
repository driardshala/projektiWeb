let nameRegex = /[A-Z a-z]{3,8}$/;
let lastRegex = /[A-Z a-z]{3,8}$/
let emailRegex = /^\S+@\S+\.\S+$/;
let passwordRegex = /^[A-Z][a-z]{3,8}$/;

function validateForm(){
    let name = document.getElementById('name').value;
    let last = document.getElementById('last').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
}

if(!nameRegex.test(name)){
    alert('keni gabuar')
    return false;
}

if(!lastRegex.test(last)){
    alert('keni gabuar')
    return false;
}
if(!emailRegex.test(email)){
    alert('keni gabuar')
    return false;
}
if(!passwordRegex.test(password)){
    alert('keni gabuar')
    return false;
}




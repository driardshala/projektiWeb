let nameRegex = /[A-Z a-z]{3,8}$/;
let lastnameRegex = /[A-Z a-z]{3,8}$/;
let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^[A-Z][a-z]$/;
let cpasswordRegex = /^[A-Z][a-z]$/;


function validateForm(){
    let nameInput = document.getElementById('name');
    let nameError = document.getElementById('nameError');
    let lastnameInput = document.getElementById('lastname');
    let lastnameError = document.getElementById('lastnameError');
    let emailInput = document.getElementById('email');// value me marr vlera inpute
    let emailError = document.getElementById('emailError');
    let passwordInput = document.getElementById('password');
    let passwordError = document.getElementById('passwordError');
    let cpasswordInput = document.getElementById('cpassword');
    let cpasswordError = document.getElementById('cpasswordError');

    nameError.innerText = '';
    lastnameError.innerText = '';
    emailError.innerText = '';
    passwordError.innerText = '';
    confirmError

    if(!nameRegex.test(nameInput.value)){
        nameError.innerText = 'invalid name';
        return;
    }
    
    if(!lastnameRegex.test(lastnameInput.value)){
        lastnameError.innerText = 'invalid lastname';
        return;
    }

    if(!emailRegex.test(emailInput.value)){
        emailError.innerText = 'invalid email';
        return;
    }

    if(!passwordRegex.test(passwordInput.value)){
        passwordError.innerText = 'invalid password';
        return;
    }

    if(!cpasswordRegex.test(cpasswordInput.value)){
        cpasswordError.innerText = 'invalid password'
        return;
    }
    if(cpasswordInput !== passwordInput){
        cpasswordError.innerText = 'Passwords do not match';
        return;
    }else{
        cpasswordError.innerText = '';
    }


    alert('form submitted succesfully!');
}




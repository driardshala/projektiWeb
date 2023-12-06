const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}); 

    let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^[A-Z][a-z]{3,8}$/;

    function validateForm(){
        let emailInput = document.getElementById('email');// value me marr vlera inpute
        let emailError = document.getElementById('emailError');
        let passwordInput = document.getElementById('password');
        let passwordError = document.getElementById('passwordError');

        emailError.innerText = '';
        passwordError.innerText = '';

        if(!emailRegex.test(emailInput.value)){
            emailError.innerText = 'invalid email';
            return;
        }
        if(!passwordRegex.test(passwordInput.value)){
            passwordError.innerText = 'invalid password';
            return;
        }

        alert('form submitted succesfully!');
    }
    


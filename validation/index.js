import { ValidationPage } from './rules.js';
import SuccessReg from './success-reg.js';

const form = document.querySelector('form');
const name = document.querySelector('#name');
const nameError = document.getElementById('name-error');
const surnameError = document.getElementById('surname-error');
const emailError = document.getElementById('email-error')
const passwordError = document.getElementById('password-error');
const surname = document.querySelector('#surname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('button');
const checkbox = document.querySelector('input[type="checkbox"]');

const validationPage = new ValidationPage();
const successReg = new SuccessReg();

function validOrInvalid(elem, valid, errorElem, errorText) {
    const errors = validationPage.errors;
    if (valid) {
        elem.classList.add('valid');
        elem.classList.remove('invalid');
        errorElem.textContent = '';
    } else {
        elem.classList.add('invalid');
        elem.classList.remove('valid');
        errorElem.textContent = errorText;
    }
    if (errors.email || errors.password || errors.firstName || errors.lastName || name.value === '' || surname.value === '' || email.value === '' || password.value === '') {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    successReg.writeName(name.value + ' ' + surname.value);
})

name.addEventListener('input', () => {
    validationPage.validateName(name.value, 'firstName');
    if (validationPage.errors.firstName) {
        validOrInvalid(name, false, nameError, validationPage.errors.firstName.at(-1));
    } else {
        validOrInvalid(name, true, nameError, '')
    }
});

surname.addEventListener('input', () => {
    validationPage.validateName(surname.value, 'lastName');
    if (validationPage.errors.lastName) {
       validOrInvalid(surname, false, surnameError, validationPage.errors.lastName.at(-1));
    } else {
        validOrInvalid(surname, true, surnameError, '')
    }
});

email.addEventListener('input', () => {
    validationPage.validateEmail(email.value);
    if (validationPage.errors.email) {
        validOrInvalid(email, false, emailError, validationPage.errors.email.at(-1));
    } else {
        validOrInvalid(email, true, emailError, '');
    }
});

password.addEventListener('input', () => {
    validationPage.validatePassword(password.value);
    if (validationPage.errors.password) {
        validOrInvalid(password, false, passwordError, validationPage.errors.password.at(-1));
    } else {
        validOrInvalid(password, true, passwordError, '');
    }
})

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
})
const form_submit = document.querySelector('#create_customer button');
const password_field = document.querySelector('#RegisterForm-password');
const confirm_password_field = document.querySelector('#RegisterForm-confirm-password');
const confirm_password_error = document.querySelector('#RegisterForm-confirm-password-error');

form_submit.addEventListener('click', (e) => {
  if (password_field.value === confirm_password_field.value) confirm_password_error.classList.add('hide');
  else {
    e.preventDefault();
    confirm_password_error.classList.remove('hide');
  }
});

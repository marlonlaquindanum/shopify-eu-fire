const confirm_password_error = document.querySelector('#RegisterForm-confirm-password-error');

document.querySelector('#create_customer button').addEventListener('click', (e) => {
  if (
    document.querySelector('#RegisterForm-password').value ===
    document.querySelector('#RegisterForm-confirm-password').value
  )
    confirm_password_error.classList.add('hide');
  else {
    e.preventDefault();
    confirm_password_error.classList.remove('hide');
  }
});

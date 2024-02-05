import toastr from 'toastr';
const { login } = require("../http/userAPI")

const loginInput = document.querySelector('#loginInput')
const passwordInput = document.querySelector('#passwordInput')
const button = document.querySelector('#button')

button.addEventListener('click', (e) => {
  e.preventDefault()
  login(loginInput.value, passwordInput.value).then(() => {
    window.location.replace(window.location.origin + '/admin/adminPanel.html');
  }).catch((error) => {
    if (error.code === 'ERR_NETWORK') {
      toastr.error(error.message);
    } else {
      toastr.error(error.response.data.message);
    }
  })
})
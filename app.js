let loginButton = document.getElementById('login-button'),
    closeButton = document.getElementById('close-button');
    modal = document.getElementById('modal');

loginButton.addEventListener('click', () => {
    modal.classList.toggle('modal-active');
})
closeButton.addEventListener('click', () => {
    modal.classList.toggle('modal-active');
})
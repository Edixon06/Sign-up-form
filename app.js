let body = document.getElementById('body'),
    loginButton = document.getElementById('login-button'),
    closeButton = document.getElementById('close-button'),
    modal = document.getElementById('modal');

body.addEventListener('click', (e) => {
    let tgt = e.target;
    if(tgt === loginButton) {
        modal.classList.add('modal-active');
    } else if (tgt === closeButton || tgt === modal) {
        modal.classList.remove('modal-active');
    }
})
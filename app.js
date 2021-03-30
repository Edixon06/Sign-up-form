let body = document.getElementById('body'),
    loginButton = document.getElementById('login-button'),
    closeButton = document.getElementById('close-button'),
    modal = document.getElementById('modal'),
    inputs = document.querySelectorAll('#sign-up-form input');

body.addEventListener('click', (e) => {
    let tgt = e.target;
    if(tgt === loginButton) {
        modal.classList.add('modal-active');
    } else if (tgt === closeButton || tgt === modal) {
        modal.classList.remove('modal-active');
    }
})

for (const input of inputs) {
    input.addEventListener('change', () => {
        if (input.name === 'first_name' || input.name === 'last_name') {
            let regex = /[0-9]/;
            if (regex.test(input.value)){
                if (input.classList.contains('succeed-input')){
                    input.classList.remove('succeed-input');
                }
                input.placeholder = "You can't introduce numbers in your name!";
                input.value = '';
                input.classList.add('warning-input');
            } else if (!regex.test(input.value)){
                if (input.classList.contains('warning-input')){
                    input.classList.remove('warning-input');
                } 
                input.classList.add('succeed-input');
            }
        }
        if (input.name === 'email'){
            let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(regex.test(input.value)){
                if (input.classList.contains('warning-input')){
                    input.classList.remove('warning-input');
                }
                input.classList.add('succeed-input');
            } else {
                if (input.classList.contains('succeed-input')){
                    input.classList.remove('succeed-input');
                }
                input.classList.add('warning-input');
                input.placeholder = 'Your email address is not correct';
                input.value = '';
            }
        }
        if (input.name === 'password'){
            let regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
            if (regex.test(input.value)){
                if (input.classList.contains('warning-input')){
                    input.classList.remove('warning-input');
                }
                input.classList.add('succeed-input');
            } else {
                if (input.classList.contains('succeed-input')){
                    input.classList.remove('succeed-input');
                }
                input.classList.add('warning-input');
                input.placeholder = 'Your password is not correct';
                input.value = '';
            }
        }
        if (input.name === 'password_confirm') {
            if (input.value === input.previousElementSibling.value) {
                input.classList.add('succeed-input');
            } else {
                input.classList.remove('succeed-input');
                input.classList.add('warning-input');
            }
        }
    })
}
const sendForm = () => {
    let form;

    const postData = (body) => {
        return fetch('/./contact/', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/html',
            },
            body: JSON.stringify(body),
        });
    };
    const validator = () => {
        const email = form.querySelector('.email').value,
            phone = form.querySelector('.phone').value,
            name = form.querySelector('.name').value,
            agreement = form.querySelector('button.checkbox1'),
            emailBlock = form.querySelector('#formScript-email'),
            phoneBlock = form.querySelector('#formScript-phone'),
            nameBlock = form.querySelector('#formScript-first_name'),
            emailValid = /^[\w-]+@\w+\.\w{2,}$/i,
            phoneValid = /^[\+\d- ]{11,}$/,
            nameValid = /^[А-яёA-z\ ]{2,50}$/i;

        if(!emailValid.test(email)){
            emailBlock.classList.add('field-invalid');
            return false;
        } else {
            emailBlock.classList.remove('field-invalid');
        }
        if(!nameValid.test(name)){
            nameBlock.classList.add('field-invalid');
            return false;
        } else {
            nameBlock.classList.remove('field-invalid');
        }
        if(!phoneValid.test(phone)){
            phoneBlock.classList.add('field-invalid');
            return false;
        } else {
            phoneBlock.classList.remove('field-invalid');
        }
        if(!agreement.classList.contains('checked')){
            return false;
        } else
        return true;
    }

    document.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let target = e.target;

        if(target.closest('#signup-form')){
            form = target;  
        }
        if(!validator()){
            return;
        }
        const inputs = [...form.querySelectorAll('.input')];
        const checkboxes = [...form.querySelectorAll('.checkbox')];

        const formData = new FormData(form);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        inputs.forEach(item => {
            item.value = '';
        });
        checkboxes.forEach(item => {
            item.classList.remove('checked');
            document.querySelector(`.${item.id}`).value = 0;
        });
        
        postData(body)
            .then((response) => {

            })
            .catch((error) => {
            });
    });

};
const item = document.querySelector('.correspondence'),
    body = document.querySelector('body');
let clientWidth =  document.documentElement.clientWidth;

document.addEventListener("DOMContentLoaded", () => {
    createRespond(configChatbot.bot[0], createButtons,  '/./statc/media/robo-avatar.jpg');
});

document.addEventListener('click', (e) => {
let target = e.target, id;
    
    if(target.closest('.btns-scripts__btn')){
        createUserAnswer(target.closest('.btns-scripts__btn').querySelector('p').textContent);
        id = target.closest('.btns-scripts__btn').id; 
        target.closest('.correspondence__item').innerHTML = ''; 
    } 
    if(id){
      createRespond(configChatbot.bot[id], createButtons, '/./statc/media/robo-avatar.jpg');  
    }
    
    if(target.closest('.checkbox2')){
        if(target.closest('.checkbox2').classList.contains('checked')){
           document.querySelector(`.${target.id}`).value = 1; 
        } else {
            document.querySelector(`.${target.id}`).value = 0;
        }
    }

});

document.addEventListener('input', (e) => {
    let target = e.target;

    let optArr = Array.from(document.querySelector('.phone-flag select').options);

    if(target.closest('.phone.input')){
        optArr.forEach(item => {
            if(('+' + item.value === target.value) && item.value){
                document.querySelector('.phone-flag').style.backgroundImage = `url(/./static/media/${item.dataset.idCountry}.gif)`;
            } else if ((('+' + item.value === target.value) && !item.value) || target.value === ''){
                document.querySelector('.phone-flag').style.backgroundImage = `url(/./static/media/flag.gif)`;
            }
        })
    }

});

document.addEventListener('change', (e) => {
    let optArr = Array.from(document.querySelector('.phone-flag select').options);
    let target = e.target;

    if(target.closest('#formScript-country select')){

        optArr.forEach(item => {
            if(item.matches(`[data-id-country="${target.options[target.selectedIndex].dataset.id}"]`)){
                document.querySelector('.phone-flag').style.backgroundImage = `url(/./static/media/${item.dataset.idCountry}.gif)`;

                if(item.value !== document.querySelector('.phone.input').value.substring(0, target.value.length)){
                    document.querySelector('.phone.input').value = '+' + item.value;
                }
            }
        })
    }

    if(target.closest('.phone-flag .empty-value')){
        if(target.options[target.selectedIndex].dataset.idCountry){
            document.querySelector('.phone-flag').style.backgroundImage = 
            `url(/./static/media/${target.options[target.selectedIndex].dataset.idCountry}.gif)`;
        } else {
            document.querySelector('.phone-flag').style.backgroundImage = `url(/./static/media/flag.gif)`;
        }
        if(target.value !== document.querySelector('.phone.input').value.substring(0, target.value.length)){
            document.querySelector('.phone.input').value = '+' + target.value;
        }
    } 
})

window.addEventListener('resize', () => {
    clientWidth =  document.documentElement.clientWidth;
    let form = document.querySelector('.fields-wrapper');

    if(form){
        clientWidth <= 491 ? form.style.height = '322px': clientWidth <= 520? 
        form.style.height = '202px' : form.style.height = '187px'; 
    }
});

window.onload = function() {
    window.scrollTo(0, 9999);
};
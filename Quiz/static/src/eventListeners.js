const item = document.querySelector('.correspondence'),
    body = document.querySelector('body');
let clientWidth =  document.documentElement.clientWidth; 


document.addEventListener("DOMContentLoaded", () => {
    createRespond(configChatbot.bot[0], createButtons);
});

document.addEventListener('click', (e) => {
let target = e.target, id, form, messengers, buttons;
    
    if(target.closest('.btns-scripts__btn')){
        createUserAnswer(target.closest('.btns-scripts__btn').querySelector('p').textContent);
        id = target.closest('.btns-scripts__btn').id; 
        target.closest('.correspondence__item').innerHTML = ''; 
    } 
    if(id){
      createRespond(configChatbot.bot[id], createButtons);  
    }
    
    if(target.closest('.checkbox2')){
        if(target.closest('.checkbox2').classList.contains('checked')){
            console.log(document.querySelector(`.${target.id}`));
           document.querySelector(`.${target.id}`).value = 1; 
        } else {
            document.querySelector(`.${target.id}`).value = 0;
        }
    } 

});

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
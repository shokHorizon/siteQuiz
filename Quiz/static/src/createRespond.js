const createRespond = (obj, callback, link) => {
    let arr = obj.content;
    let human = obj.human,i = 0, form = 0, timeId;
    
    function createItem(){
            
        const preloader = document.createElement('div');
        preloader.innerHTML = `
            <div class='sk-three-bounce'>
            <div class='sk-bounce-1 sk-child'></div>
            <div class='sk-bounce-2 sk-child'></div>
            <div class='sk-bounce-3 sk-child'></div>
            </div>
        `;
        const wrap = document.createElement('div');
        wrap.className = 'correspondence__item';
        
        const text = document.createElement('p');
        text.innerHTML = `${arr[i]}`;

        const botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerHTML = (`
            <div class="interlocator chat-message interlocator-last-message">
                <div class="interlocator__wrap-img">
                    <img alt="interlocator" class="interlocator__img" src = "/./static/media/robo-avatar.jpg"/>
                </div>
                <div class="interlocator__message" style="background: rgba(255, 255, 255);">
                    <div class="left-arrow" style="border-color: rgba(0, 0, 0, 0) rgb(255, 255, 255) rgb(255, 255, 255) rgba(0, 0, 0, 0);"></div>
                    <div class="interlocator__text">
                    </div>
                </div>
            </div
        `);

        const addItem = () => {
            botMessage.querySelector('.interlocator__text').append(preloader);
            wrap.append(botMessage);
            item.append(wrap);
            window.onload();
        }
        const changeItem = () => {
            botMessage.querySelector('.interlocator__text').innerHTML = '';
            if(arr[i][0].substring(0, 5) === 'https'){
                const video = createVideo(arr[i][0]);
                wrap.innerHTML = '';
                item.append(video);
                window.onload();
            } else {
                    botMessage.querySelector('.interlocator__text').append(text);
                wrap.append(botMessage);
                item.append(wrap);
                window.onload();
            }
            
            i++;
            if(i < arr.length){
                createItem();
            } else {
                clearTimeout(timeId);
                if(human !== 'end'){
                    callback(human);
                }
                
                if(form){
                    item.append(form);
                    window.onload();
                }
            }
        }
        addItem();
        timeId = setTimeout(changeItem, 800);
    }
    createItem();  

    if(obj === configChatbot.bot[11]){
        form = createForm();
    }
};
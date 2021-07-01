const createButtons = (arr) => {

    const wrap = document.createElement('div');
    wrap.className = 'correspondence__item';

    const btnWrapper = document.createElement('div');
    btnWrapper.className = 'btns-scripts chat-message';

    let newArr = arr.map((item)=> configChatbot.human[item]);
    newArr.forEach((elem) => {

        const button = document.createElement('button');
        button.className = 'btns-scripts__btn';
        button.style.background = 'rgb(101, 162, 220)';
        button.style.color = 'rgb(255, 255, 255)';
        button.innerHTML = (`<p>${elem.content}</p>`);

        button.id = elem.bot;
        btnWrapper.append(button);
        
    })
    wrap.append(btnWrapper);
    item.append(wrap);
    window.onload();
};
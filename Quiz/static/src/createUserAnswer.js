const createUserAnswer = (text) => {

    const wrap = document.createElement('div');
    wrap.className = 'correspondence__item';

    const userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerHTML = (`
        <div class="user chat-message">
            <div class="user__message" style="background: rgb(226, 247, 203);">
                <div class="right-arrow" style="border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(226, 247, 203) rgb(226, 247, 203);"></div>
                <p class="user__text" style="color: rgb(48, 48, 48);">${text}</p>
            </div>
        </div>
    `);
    wrap.append(userMessage);
    item.append(wrap);
    window.onload();
}
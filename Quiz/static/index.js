'use strict';

const item = document.querySelector('.correspondence'),
    body = document.querySelector('body');
let clientWidth =  document.documentElement.clientWidth; 

const configChatbot = {
    bot: {
      0: { content: ['Привет!<span>&#128075</span>', 'Был ли у тебя ранее опыт работы в интернете, даже самый незначительный?'], human: [0, 1]},
      1: { content: ['А какая работа была?'], human: [2,3,4]},
      2: { content: ['А чем ты занимаешься?'], human: [35, 36, 37, 38, 39]},
      3: { content: ['Ты действующий или бывший сетевик?'], human: [5, 6]},
      4: { content: ['А с какой компанией сотрудничаешь?'], human: [7, 8, 9, 10, 11, 12]},
      5: { content: ['Смотри: я тоже сотрудничаю с этой компанией, и наша команда использует крутые инструменты автоматизации - <span>&#129302</span>боты, автоворонки, сайты,' + 
      'системы сопровождения и дубликации. Сейчас ты как раз на одной из них.', 'Скорее всего, к нам в команду я тебя взять не смогу,' + 
      'но если тебе понравится этот инструмент, то сейчас, в правом нижнем углу, появился виджет обратной связи с моими контактами,' + 
      'изучи воронку до конца и напиши мне, через него, удобным для тебя способом, в сообщении спроси,' + 
      'как получить себе в команду такой же инструмент и я расскажу.', 'Кстати, если вдруг у тебя последний заказ в компании делался' + 
      'более 1 года назад, то ты можешь зарегистрироваться и к нам.'], human: [13]},
      6: { content: ['Каким способом рекрутируешь?'], human: [14, 15, 16, 17, 18, 19, 20]},
      7: { content: ['А результат тебя устраивает?', 'У тебя и у твоих партнеров каждый день регистрируются новички через крутые инструменты' + 
      '(<span>&#129302</span>боты, автоворонки, сайты...), они активно включаются в работу и система им помогает эффективно дублицировать лидеров?', 
      'Из каталога в каталог у тебя идет постоянный прирост группового товарооборота и ты закрываешь несколько званий в год?', 
      'При этом ты не работаешь, как белка в колесе, и уделяешь много времени себе и семье?'], human: [21, 30]},
      8: { content: ['Хочешь я расскажу тебе, как работаем мы, чтобы получать такие результаты?'], human: [22, 23]},
      9: { content: ['Внимательно смотри видео до самого конца и отличные результаты тебе гарантированы!', 'После просмотра нажми на кнопку ниже:'], human: [24] },
      10: { content: ['Откуда берутся деньги и кто платит за все это?', 'В чем суть бизнеса?', 
                    'Внимательно смотри видео до самого конца и после завершения нажми кнопку под видео:'], human: [25]},
      11: { content: ['Пожалуйста, заполни все поля анкеты и нажми на кнопку "ОТПРАВИТЬ":'], human: 'end' },
      12: { content: ['А ты в курсе, что уже более 45% людей работают на дому через интернет официально и получают хороший доход?', 'Потому что - это:<br>'+
                    '<b>1. </b>Свободный график<br><b>2. </b>Работа из любой точки мира<br><b>3. </b>Без начальников<br><b>4. </b>Комфортная обстановка дома'+ 
                    '<br><b>5. </b>Без финансовых рисков и вложений'+
                    '<br><b>6. </b>Неограниченное количество клиентов<br><b>7. </b>Много времени на себя и семью', 'Хочешь так же работать из дома?'], human: [40, 27]},
      13: { content: ['А сколько тебе хотелось бы зарабатывать в месяц, работая из дома?', 'Только учти, что это может быть как просто подработка,'+
                    'так и работа на постоянной основе!'], human: [31, 32, 33, 34] },
      14: { content: ['Отлично, сейчас я расскажу тебе, как зарабатывать такую сумму ежемесячно и даже повышать ее уровень из года в год.',
                    'Но для начала давай разберемся, почему мы ПРОТИВ классической наемной работы и к чему она приводит 92% людей.', 
                    'Внимательно смотри видео до самого конца:', 'После просмотра нажми на кнопку ниже:'], human: [28]},
      15: { content: ['Как осуществить свои мечты?', 'Как выбраться из этого замкнутого круга?', 'Внимательно смотри видео до самого конца:',
                    'После просмотра нажми на кнопку ниже:'], human: [29]},
      16: { content: ['За что именно партнеры получают деньги?', 'В чем суть бизнеса и кто платит за все это?', 
                    'Внимательно смотри видео до самого конца и после завершения нажми кнопку под видео:'], human: [25]},
      17: { content: ['Укажи причину ухода из сетевого бизнеса?'], human: [41, 42, 43, 44, 45]},
      18: { content: ['А если представить, что у тебя есть самые крутые инструменты (<span>&#129302</span>боты, автоворонки, сайты...),' + 
                    'с помощью которых ты и партнеры из твоей команды получают минимум 1 АКТИВНОГО новичка каждый день!', 'Тебе это поможет быстро расти?',
                    'Из каталога в каталог делать постоянный прирост группового товарооборота, закрывать несколько званий в год.',
                    'При этом не работать, как белка в колесе, и уделять много времени себе и семье, за счет автоматизированной системы сопровождения и дубликации.'], human: [46, 47] },
      19: { content: ['Ну смотри, ты сейчас уже находишься в рекрутинговой воронке и автоматически коммуницируешь с нашей системой,' + 
                    'а что тебя ждет впереди, так вообще обалдеешь <span>&#128293</span>!', 'Хочешь я расскажу тебе, как мы работаем, чтобы получать такие результаты<span>&#128640</span>,'+
                    'в которые ты даже не веришь?'], human: [50, 51] },
      20: { content: ['Вот это я понимаю уровень, наш человек! Респект <span>&#128170</span>', 'А хочешь чтобы вообще в космос <span>&#128640</span> улететь по результатам?',
                    'Рассказать тебе, как работаем мы?'], human: [48, 49] },
      21: { content: ['Отлично, тогда давай я расскажу тебе, как работаем мы, чтобы получать такие резульаты?'], human: [50, 51] },
    },
    human: {
      0: { content: 'Да<span>&#128187</span>', bot: 1 },//
      1: { content: 'Нет<span>&#128581</span>', bot: 2 },//
      2: { content: 'Сетевой маркетинг', bot: 3},//
      3: { content: 'Удаленная работа', bot: 13},//
      4: { content: 'Фриланс', bot: 13},//
      5: { content: 'Действующий', bot:  4},//
      6: { content: 'Бывший', bot: 17},//
      7: { content: 'Faberlic', bot: 5},//
      8: { content: 'Oriflame', bot: 6},//
      9: { content: 'Avon', bot: 6},//
      10: { content: 'Amway', bot: 6},//
      11: { content: 'GreenWay', bot: 6},//
      12: { content: 'Другая', bot:6},//
      13: { content: 'Все понятно, давай далее <span>&#9654</span>', bot:6},//
      14: { content: 'СПАМ', bot: 7},//
      15: { content: 'Роботы или боты', bot: 7},//
      16: { content: 'Личный бренд', bot: 7},//
      17: { content: 'Встречи и звонки', bot: 7},//
      18: { content: 'Доски объявлений', bot: 7},//
      19: { content: 'Реклама', bot: 7},//
      20: { content: 'Другое', bot: 7},//
      21: { content: 'Нет, у меня результаты хуже<span>&#128577</span>', bot: 8},//
      22: { content: 'Очень хочу!', bot: 9},//
      23: { content: 'Ну давай, удиви меня', bot: 10},//
      24: { content: 'Следующее видео <span>&#9654</span>', bot: 10},//
      25: { content: 'Регистрация <span>&#9654</span>', bot: 11},//
      26: { content: 'Другое', bot: 9},
      27: { content: 'Ну, не знаю<span>&#129300</span>', bot: 13},//
      28: { content: 'Следующее видео <span>&#9654</span>', bot: 15},//
      29: { content: 'Следующее видео <span>&#9654</span>', bot: 16},//
      30: { content: 'Да, все именно так!<span>&#128526</span>', bot: 20},//
      31: { content: '300<span>&#128178</span>', bot: 14},//
      32: { content: '700<span>&#128178</span>', bot: 14},//
      33: { content: '1000<span>&#128178</span>', bot: 14},//
      34: { content: 'более 2000<span>&#128178</span>', bot: 14},//
      35: { content: 'Работаю', bot: 12},//
      36: { content: 'Без работы', bot: 12},//
      37: { content: 'Учусь', bot: 12},//
      38: { content: 'В декрете', bot: 12},//
      39: { content: 'Пенсионер', bot: 12},//
      40: { content: 'Да<span>&#128077</span>', bot: 13},//
      41: { content: 'Большой ЛТО', bot: 18},//
      42: { content: 'Ассортимент', bot: 18},//
      43: { content: 'Высокие цены', bot: 18},//
      44: { content: 'Система работы', bot: 18},//
      45: { content: 'Другое', bot: 18},
      46: { content: 'Да, конечно', bot: 21},//
      47: { content: 'Не верю', bot: 19},//
      48: { content: 'Расскажи!', bot: 9},//
      49: { content: 'Ну давай, удиви меня', bot: 9},//
      50: { content: 'Расскажи!', bot: 9},//
      51: { content: 'Ну давай, удиви меня', bot: 9},//
    }
};

const createRespond = (obj, callback) => {
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
                    <img alt="interlocator" class="interlocator__img" src="https://botapi.vekrosta.ru/media/-robo-avatar_grHyYcE.jpg"/>
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
            botMessage.querySelector('.interlocator__text').append(text);
            wrap.append(botMessage);
            item.append(wrap);
            window.onload();
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
        form = document.createElement('div');
        form.className = 'correspondence__item';
        form.innerHTML = `
        <div>
        <div class="chat-message " id="formScript29" style="background-color: rgb(255, 255, 255);">
            <div _ngcontent-jwa-c0="" id="form29">
                <iframe src="https://vekrosta.ru/form/457604/23903/?formKey=1624789022330&amp;stat=0" frameborder="0" style="width: 100%; 
                   " scrolling="no" id="oseFormIframe_1624789022330" allowtransparency="">
                </iframe>
            </div>
            <script type="text/javascript">
                    let item=undefined;
                    let customObject=undefined
            oseFormHelper.insertForm(
                {uid: 457604, tid: 23903},                                    
                'form36',        
                function (form) {                                            
                    if(item)                                          
                        form('setValue', item);   
                    if(customObject)                                       
                        form('setValue', customObject);
                }
            );
            </script>
        </div></div>
        `;

    }
};

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

document.addEventListener("DOMContentLoaded", () => {
    createRespond(configChatbot.bot[0], createButtons);
});

document.addEventListener('click', (e) => {
    let target = e.target, id;
    if(target.closest('.btns-scripts__btn')){
        createUserAnswer(target.closest('.btns-scripts__btn').querySelector('p').textContent);
        id = target.closest('.btns-scripts__btn').id; 
        target.closest('.correspondence__item').innerHTML = ''; 
    } else {
        return;
    }
    createRespond(configChatbot.bot[id], createButtons);
});

window.addEventListener('resize', () => {
    clientWidth =  document.documentElement.clientWidth;
    let iframe;
    iframe = document.querySelector('iframe');
    if(iframe){
       clientWidth <= 491 ? iframe.style.height = '322px': clientWidth <= 520? iframe.style.height = '202px' : iframe.style.height = '187px'; 
    }
})

window.onload = function() {
    window.scrollTo(0, 9999);
};


const score = {
    good : 0,
    bad : 0
}


const dataEz = {
    eng : [
        "beach",
        "table",
        "chair",
        "food",
        "bed",
        "laptop",
        "book",
        "pen",
        "pencil",
        "ring",
        
    ],
    rus : [
        "Пляж",
        "Стол",
        "Стул",
        "Еда",
        "Кровать",
        "Ноутбук",
        "Книга",
        "Ручка",
        "Карандаш",
        "Кольцо",
        
    ],
    pic : [
        "https://www.meme-arsenal.com/memes/dd01b97ec416fbf19addb3ebafd3b939.jpg",
        "https://pbs.twimg.com/media/ENXr9d0XkAAtnAn.jpg",
        "https://www.meme-arsenal.com/memes/ef5dbc896a31a85a909a444e19813c98.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCZFuKi8drMxTgLm-30shRmzvprNcazgbow&usqp=CAU",
        "https://memegenerator.net/img/images/72618462.jpg",
        "https://www.meme-arsenal.com/memes/e2b9b5bafa82415037e7d3007ecb887b.jpg",
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1547358939l/43551330._SY475_.jpg",
        "https://adm.pen.ru/files/prodpics/8065446/8065446_0_930x560.png",
        "https://lh3.googleusercontent.com/proxy/f7xWCtlltAIggQcotgu3QMDRwcEWgCf2cNbIFH40LHubQ7TrlS2qUjLhm4NhuaUrWApCT3WBdh7bGKJV76dMZXkW1ur7O6gO6QqssJ7SQdRZ0Xp7C_XzXtHM2h4GVuT2ZizThkc",
        "https://www.meme-arsenal.com/memes/3d246bb9a21424797d7befcced820029.jpg",
        
    ],
    been : [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]
}
const dataMed = {
    eng : [
        "numbers",
        "trap",
        "cool",
        "cat",
        "weapon",
        "crab",
        "music",
        "home",
        "night",
        "guitar",
        
    ],
    rus : [
        "Числа",
        "Ловушка",
        "Крутой",
        "Кот",
        "Оружие",
        "Краб",
        "Музыка",
        "Дом",
        "Ночь",
        "Гитара",
        
    ],
    pic : [
        "https://m.media-amazon.com/images/I/51QTFYapjkL._AC_SX466_.jpg",
        "https://i.ytimg.com/vi/vOj87IrbZz0/maxresdefault.jpg",
        "https://img.ifunny.co/images/ddbb12263697cf6fdf6e1278e0d3b8eebb41d16c37c5e83ae0dfa0acfae5a001_1.jpg",
        "https://pbs.twimg.com/media/FFR0UMNWQAcHuFY.jpg",
        "https://preview.redd.it/qougllwpfox71.jpg?auto=webp&s=0f3c8ff953971daaf030920b1250d9e10f273842",
        "https://memestatic.fjcdn.com/pictures/_b3f75f_6554782.jpg",
        "https://img-9gag-fun.9cache.com/photo/a1oYm9v_460s.jpg",
        "https://i.ytimg.com/vi/C4E-0JmoHSk/maxresdefault.jpg",
        "http://www.ljplus.ru/img4/p/a/paulkorry/P7300593.jpg",
        "https://sun9-55.userapi.com/impg/ngfeTbpELf09PLuRRBHPrNB5ct8jqP2aFdUnLQ/xf-2CSNxOuU.jpg?size=604x444&quality=96&sign=148e7847a71e8ce4a32156bca6a88302&type=album",
        
    ]
    
}
const dataHard = {
    eng : [
        "care",
        "glasses",
        "chimera",
        "health",
        "dog",
        "observation",
        "difference",
        "painter",
        "grandfather",
        "impostor",
        
    ],
    rus : [
        "Забота",
        "Очки",
        "Химера",
        "Здоровье",
        "Собака",
        "Наблюдение",
        "Разница",
        "Художник",
        "Дедушка",
        "Cамозванец",
        
    ],
    pic : [
        "https://pbs.twimg.com/media/EF5QBpKW4AAEdf_.jpg",
        "https://lh3.googleusercontent.com/OiEkmx0i4qFRcvZVM4hVyKO57N_oFcM3WDgnXO1kyZ5zEzgzqEodKJKfLVanv4kXOZZygg=s139",
        "https://cs9.pikabu.ru/images/big_size_comm/2017-04_1/1491303011147919292.jpg",
        "https://pbs.twimg.com/media/FDWhGxTWYAQm69k.jpg",
        "https://pbs.twimg.com/profile_images/862512087448387584/ZYAWYGfd_400x400.jpg",
        "https://cs.pikabu.ru/post_img/2013/10/28/11/1382986173_1177372670.jpg",
        "https://img-9gag-fun.9cache.com/photo/aO3LxdE_460s.jpg",
        "https://www.peoples.ru/images/interesting/interesting_201406130755051.jpg",
        "https://i.ytimg.com/vi/-OQ4nmYWhvI/maxresdefault.jpg",
        "https://memepedia.ru/wp-content/uploads/2021/05/amogus.jpg",
        
    ],
    been : [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ]
}




const Start = () => {
    
    let rad = $('input[name = "dif"]')

    if (rad[0].checked) {
        $("nav").toggleClass("hidden")
        $(".pop-up").toggleClass("hidden")
        StartTest(dataEz, "Легкий")
    } else if (rad[1].checked) {
        $("nav").toggleClass("hidden")
        $(".pop-up").toggleClass("hidden")
        StartTest(dataMed, "Средний")
    } else if (rad[2].checked) {
        $("nav").toggleClass("hidden")
        $(".pop-up").toggleClass("hidden")
        StartTest(dataHard, "Трудный")
    } else {
        $(".pop-up>h2").text("Выберете сложность")
        $(".pop-up>p").text("Вы не выбрали сложность")
    }

    
}


const StartTest = (data, dif) => {
    $("#difff").text(`Уровень сложности: ${dif}`)
    var iter = 0;
    score.bad = 0;
    score.good = 0;
    SetInterface(data, iter)

    $("#check").click({dat : data, iter : iter}, Check)
}

const Check = (event) => {
    GetAnswer(event.data.dat, event.data.iter)
    event.data.iter++;
    if(event.data.iter == 10){
        $("#check").unbind();
        FindResult();
        $("nav").toggleClass("hidden")
        $(".pop-up").toggleClass("hidden")
    }else{
        SetInterface(event.data.dat, event.data.iter)
    }
    
}

const CountPoint = (value) => {
    if(value > 0){
        score.good++;
    } else {
        score.bad++;
    }
}

const GetAnswer = (data, iter) => {
    
    if ($("#inpt").val().toLowerCase() == data.eng[iter]) {
        CountPoint(1);
    } else {
        CountPoint(-1)
    }
    $("#inpt").val('');
}

const SetInterface = (data, iter) => {
    console.log(score.good);
    $("#rusWord").text(data.rus[iter]);
    $("#good").text(score.good);
    $("#bad").text(score.bad);
    $(".pic_wrapper").css('background-image', `url(${data.pic[iter]})`);
}

const FindResult = () => {
    switch (score.good) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4: 
            RevialResult("Мега плох");
            break;
        case 5:
        case 6:
        case 7:
        case 8:
            RevialResult("Хорош");
            break;
        case 9:
        case 10:
            RevialResult("Мега хорош");
            break;

        default:
            clg("error")
            break;
    }
}

const RevialResult = (h2) => {
    $(".pop-up>h2").text(`Ваш уровень знания языка на указаном уровне сложности : ${h2}`)
    $(".pop-up>p").text(`Вы набрали ${score.good} очков из 10`);
}
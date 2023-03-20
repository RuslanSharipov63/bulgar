import questionType from './types/Types';

let db: questionType[] = [
    {
        id: 1,
        question: 'Основным занятием волжских булгар в XII-XIII вв. было:',
        answer1: 'охота',
        answer2: 'земледелие',
        answer3: 'рыболовство',
        correctanswer: 'земледелие',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 2,
        question: 'Первые люди на территории современного Татарстана появились:',
        answer1: '250 тыс. лет назад',
        answer2: '200 тыс. лет назад',
        answer3: '100 тыс. лет назад',
        correctanswer: '100 тыс. лет назад',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 3,
        question: 'Правитель Волжской Булгарии в разные периоды назывался',
        answer1: 'султан',
        answer2: 'халиф',
        answer3: 'эмир',
        correctanswer: 'эмир',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 4,
        question: 'Савиры, барсилы и баранджары пришли на Волгу и Каму под давлением:',
        answer1: 'гуннов',
        answer2: 'арабов',
        answer3: 'турок осман',
        correctanswer: 'гуннов',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 5,
        question: 'Съезд булгарской знати, на котором было закреплено принятие ислама, состоялся в:',
        answer1: '922 г.',
        answer2: '988 г.',
        answer3: '123 г.',
        correctanswer: '922 г.',
        answeruser: null,
        leaveForLater: false,
       
    },
    {
        id: 6,
        question: 'В каком году на монгольском курултае было принято решение о походе на Волжскую Болгарию:',
        answer1: 'в 1226 г.',
        answer2: 'в 1230 г.',
        answer3: 'в 1235 г.',
        correctanswer: 'в 1230 г.',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 7,
        question: 'Волжская Булгария была завоевана монголами в',
        answer1: '1229 г.',
        answer2: '1236 г.',
        answer3: '1242 г.',
        correctanswer: '1236 г.',
        answeruser: null,
        leaveForLater: false,
       
    },
    {
        id: 8,
        question: 'Древнейшее стойбище людей на территории древнего Татарстана обнаружено:',
        answer1: 'у деревни Кзыл Байрак Верхнеуслонского района',
        answer2: 'в урочище «Красная глинка» Тетюшского района',
        answer3: 'у села Ананьино Елабужского района',
        correctanswer: 'в урочище «Красная глинка» Тетюшского района',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 9,
        question: 'Ранние булгары на Средней Волге изначально вели:',
        answer1: 'кочевой образ жизни',
        answer2: 'полукочевой образ жизни',
        answer3: 'оседлый образ жизни',
        correctanswer: 'полукочевой образ жизни',
        answeruser: null,
        leaveForLater: false,
      
    },
    {
        id: 10,
        question: 'Аборигенами (т.е. коренным населением) Волго — Камья можно считать:',
        answer1: 'финно — угорские племена',
        answer2: 'тюркоязычные племена',
        answer3: 'восточнославянские племена',
        correctanswer: 'финно — угорские племена',
        answeruser: null,
        leaveForLater: false,
       
    },
    {
        id: 11,
        question: 'Принято считать, что единая народность с общим названием «булгары» возникла:',
        answer1: 'в X веке',
        answer2: 'в XI веке',
        answer3: 'в XIII веке',
        correctanswer: 'в X веке',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 12,
        question: 'Одним из исследователей жизни Волжской Булгарии начала X века был:',
        answer1: 'византийский император Константин Багрянородный',
        answer2: 'русский путешественник Афанасий Никитин',
        answer3: 'арабский географ Ибн Русте',
        correctanswer: 'арабский географ Ибн Русте',
        answeruser: null,
        leaveForLater: false,
      
    },
    {
        id: 13,
        question: 'Начальные школы в Волжской Булгарии назывались:',
        answer1: 'мударрмсы',
        answer2: 'мектебе',
        answer3: 'медресе',
        correctanswer: 'мектебе',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 14,
        question: 'Посольство из Багдада, прибывшее в Волжскую Булгарию для церемонии официального принятия ислама, возглавлялось Ахмедом ибн — Фадланом',
        answer1: 'верно',
        answer2: 'не верно',
        answer3: 'посольства никогда не было',
        correctanswer: 'верно',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 15,
        question: 'Волжская Булгария в IX X вв. платила дань:',
        answer1: 'Арабскому Халифату',
        answer2: 'Хазарскому Каганату',
        answer3: 'Уйгурскому Каганату',
        correctanswer: 'Хазарскому Каганату',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 16,
        question: 'Сувар являлся столицей Волжской Булгарии',
        answer1: 'верно',
        answer2: 'не верно',
        answer3: 'города никогда не существовало',
        correctanswer: 'не верно',
        answeruser: null,
        leaveForLater: false,
       
    },
    {
        id: 17,
        question: 'Государство Волжская Булгария возникло в 9 10 веках',
        answer1: 'верно',
        answer2: 'не верно',
        correctanswer: 'верно',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 18,
        question: 'Мирный договор между Русью и Волжской Булгарией, рассчитанный на вечные времена, был заключен:',
        answer1: 'в 922 г.',
        answer2: 'в 986 г.',
        answer3: 'в 985 г.',
        correctanswer: 'в 985 г.',
        answeruser: null,
        leaveForLater: false,
      
    },
    {
        id: 19,
        question: 'Волжские булгары вели так называемую меновую торговлю с народами:',
        answer1: 'запада (русскими)',
        answer2: 'юга (кипчаками)',
        answer3: 'севера (финно — угорскими племенами)',
        correctanswer: 'севера (финно — угорскими племенами)',
        answeruser: null,
        leaveForLater: false,
        
    },
    {
        id: 20,
        question: 'В тройку крупнейших наиболее известных городов Волжской Булгарии не входил:',
        answer1: 'Болгар',
        answer2: 'Биляр',
        answer3: 'Кашан',
        correctanswer: 'Кашан',
        answeruser: null,
        leaveForLater: false,
       
    },
    {
        id: 21,
        question: 'Крупнейший торговый центр Ага Базар располагался близ:',
        answer1: 'Биляра',
        answer2: 'Джукетау',
        answer3: 'Болгара',
        correctanswer: 'Болгара',
        answeruser: null,
        leaveForLater: false,
     
    },
    {
        id: 22,
        question: 'Автором двухтомной «Истории Булгара» является:',
        answer1: 'Якуб ибн Нугман',
        answer2: 'Кул Гали',
        answer3: 'Ахмад ибн Фадлан',
        correctanswer: 'Якуб ибн Нугман',
        answeruser: null,
        leaveForLater: false,
    
    },
]

export default db;
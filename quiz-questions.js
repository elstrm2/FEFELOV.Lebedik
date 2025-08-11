const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Какое у вас сейчас настроение?",
    answers: [
      { text: "Хочу взбодриться", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Нужно расслабиться", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Нужна концентрация", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 2,
    question: "В какое время дня обычно пьете чай?",
    answers: [
      { text: "Утром", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Днем", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Вечером", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "В любое время", effects: [], time: ["morning", "day", "evening"], taste: [] },
    ],
  },
  {
    id: 3,
    question: "Какой вкус чая вам больше нравится?",
    answers: [
      { text: "Сладкий и мягкий", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "Терпкий и насыщенный", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Фруктовый и освежающий", effects: ["focus"], time: ["day"], taste: ["fruity"] },
    ],
  },
  {
    id: 4,
    question: "Как часто вы пьете чай?",
    answers: [
      { text: "Несколько раз в день", effects: ["energy"], time: ["morning", "day"], taste: [] },
      { text: "Один раз в день", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Изредка, по настроению", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 5,
    question: "Предпочитаете ли вы крепкий чай?",
    answers: [
      { text: "Да, очень крепкий", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Средней крепости", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Слабый, легкий", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
    ],
  },
  {
    id: 6,
    question: "Добавляете ли в чай сахар или мед?",
    answers: [
      { text: "Да, люблю сладкий чай", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "Иногда добавляю", effects: [], time: [], taste: ["sweet"] },
      { text: "Предпочитаю без добавок", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
    ],
  },
  {
    id: 7,
    question: "Какую температуру чая предпочитаете?",
    answers: [
      { text: "Очень горячий", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Теплый", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Комнатной температуры", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 8,
    question: "Пьете ли чай с молоком?",
    answers: [
      { text: "Да, только с молоком", effects: ["relax"], time: ["morning", "evening"], taste: ["sweet"] },
      { text: "Иногда добавляю", effects: [], time: [], taste: [] },
      { text: "Никогда не добавляю", effects: ["energy"], time: ["day"], taste: ["bitter"] },
    ],
  },
  {
    id: 9,
    question: "Какой аромат чая вам приятнее?",
    answers: [
      { text: "Цветочный", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Фруктовый", effects: ["focus"], time: ["day"], taste: ["fruity"] },
      { text: "Древесный", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Травяной", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
    ],
  },
  {
    id: 10,
    question: "Как вы относитесь к кофеину в чае?",
    answers: [
      { text: "Нужен для бодрости", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Умеренное количество", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Предпочитаю без кофеина", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
    ],
  },
  {
    id: 11,
    question: "В какой обстановке чаще всего пьете чай?",
    answers: [
      { text: "За работой", effects: ["focus", "energy"], time: ["day"], taste: [] },
      { text: "Дома в спокойной обстановке", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "В компании друзей", effects: [], time: ["day"], taste: ["fruity"] },
    ],
  },
  {
    id: 12,
    question: "Какое время заваривания предпочитаете?",
    answers: [
      { text: "Быстро, 1-2 минуты", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Средне, 3-5 минут", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Долго, 5+ минут", effects: ["relax"], time: ["evening"], taste: ["bitter"] },
    ],
  },
  {
    id: 13,
    question: "Предпочитаете листовой или пакетированный чай?",
    answers: [
      { text: "Только листовой", effects: ["focus"], time: [], taste: ["bitter"] },
      { text: "И то, и другое", effects: [], time: [], taste: [] },
      { text: "Удобнее пакетированный", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 14,
    question: "Какой цвет чая вам больше нравится?",
    answers: [
      { text: "Темный, насыщенный", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Золотистый", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Светлый, прозрачный", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
    ],
  },
  {
    id: 15,
    question: "Как относитесь к специям в чае?",
    answers: [
      { text: "Люблю пряный чай", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Иногда добавляю", effects: [], time: [], taste: [] },
      { text: "Предпочитаю чистый вкус", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 16,
    question: "В какой сезон чаще всего пьете горячий чай?",
    answers: [
      { text: "Круглый год", effects: [], time: ["morning", "day", "evening"], taste: [] },
      { text: "Осенью и зимой", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Только когда холодно", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 17,
    question: "Предпочитаете чай с лимоном?",
    answers: [
      { text: "Да, всегда с лимоном", effects: ["energy"], time: ["morning"], taste: ["fruity"] },
      { text: "Иногда добавляю", effects: [], time: [], taste: [] },
      { text: "Не люблю кислый вкус", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
    ],
  },
  {
    id: 18,
    question: "Какую посуду предпочитаете для чая?",
    answers: [
      { text: "Большую кружку", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Маленькую чашечку", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Стеклянную посуду", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 19,
    question: "Как быстро пьете заваренный чай?",
    answers: [
      { text: "Сразу, пока горячий", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Не спеша, наслаждаясь", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "По мере остывания", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 20,
    question: "Какой эффект ожидаете от чая?",
    answers: [
      { text: "Взбодриться и проснуться", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Расслабиться и отдохнуть", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Сосредоточиться на работе", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Просто утолить жажду", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 21,
    question: "Пьете ли чай во время еды?",
    answers: [
      { text: "Да, всегда запиваю", effects: [], time: ["morning", "day"], taste: [] },
      { text: "После еды", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Отдельно от еды", effects: ["focus"], time: [], taste: [] },
    ],
  },
  {
    id: 22,
    question: "Какой объем чая выпиваете за раз?",
    answers: [
      { text: "Одну чашку", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "2-3 чашки", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Много, весь чайник", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 23,
    question: "Какую воду используете для заваривания?",
    answers: [
      { text: "Фильтрованную", effects: ["focus"], time: [], taste: [] },
      { text: "Бутилированную", effects: [], time: [], taste: [] },
      { text: "Из крана", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 24,
    question: "При какой температуре воды завариваете?",
    answers: [
      { text: "Кипяток", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "80-90°C", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Не обращаю внимания", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 25,
    question: "Сколько сахара добавляете в чай?",
    answers: [
      { text: "Много, люблю сладкое", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "1-2 ложки", effects: [], time: [], taste: ["sweet"] },
      { text: "Пью без сахара", effects: ["energy", "focus"], time: ["morning", "day"], taste: ["bitter"] },
    ],
  },
  {
    id: 26,
    question: "Какие фруктовые добавки предпочитаете?",
    answers: [
      { text: "Ягоды", effects: ["relax"], time: ["evening"], taste: ["fruity", "sweet"] },
      { text: "Цитрусовые", effects: ["energy"], time: ["morning"], taste: ["fruity"] },
      { text: "Яблоко", effects: ["focus"], time: ["day"], taste: ["fruity", "sweet"] },
      { text: "Не добавляю фрукты", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 27,
    question: "Как часто экспериментируете с новыми сортами?",
    answers: [
      { text: "Постоянно ищу новое", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Иногда пробую", effects: [], time: [], taste: [] },
      { text: "Предпочитаю привычное", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 28,
    question: "Какой чай пьете перед сном?",
    answers: [
      { text: "Травяной", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Зеленый", effects: ["focus"], time: ["evening"], taste: [] },
      { text: "Не пью перед сном", effects: ["energy"], time: ["morning", "day"], taste: [] },
    ],
  },
  {
    id: 29,
    question: "Предпочитаете чай с мятой?",
    answers: [
      { text: "Да, освежает", effects: ["relax", "focus"], time: ["day", "evening"], taste: ["herbal"] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Не люблю мяту", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 30,
    question: "Какой чай предпочитаете в стрессовых ситуациях?",
    answers: [
      { text: "Крепкий черный", effects: ["energy"], time: ["morning", "day"], taste: ["bitter"] },
      { text: "Успокаивающий травяной", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Любой доступный", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 31,
    question: "Пьете ли холодный чай летом?",
    answers: [
      { text: "Да, часто", effects: ["focus"], time: ["day"], taste: ["fruity"] },
      { text: "Изредка", effects: [], time: [], taste: [] },
      { text: "Только горячий", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 32,
    question: "Какой чай помогает вам проснуться?",
    answers: [
      { text: "Крепкий черный", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Зеленый с жасмином", effects: ["energy", "focus"], time: ["morning"], taste: [] },
      { text: "Пуэр", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
    ],
  },
  {
    id: 33,
    question: "Как относитесь к чаю улун?",
    answers: [
      { text: "Мой favorite", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Иногда пью", effects: [], time: [], taste: [] },
      { text: "Не пробовал", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 34,
    question: "Предпочитаете чай с бергамотом?",
    answers: [
      { text: "Да, Earl Grey любимый", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Слишком ароматный", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 35,
    question: "Какой чай пьете во время болезни?",
    answers: [
      { text: "Имбирный", effects: ["energy"], time: ["morning", "day"], taste: [] },
      { text: "С медом и лимоном", effects: ["relax"], time: ["evening"], taste: ["sweet", "fruity"] },
      { text: "Травяной", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
    ],
  },
  {
    id: 36,
    question: "Сколько раз завариваете одни листья?",
    answers: [
      { text: "Один раз", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "2-3 раза", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Много раз подряд", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 37,
    question: "Какой чай предпочитаете для медитации?",
    answers: [
      { text: "Белый чай", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "Улун", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Не медитирую", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 38,
    question: "Как относитесь к чаю мате?",
    answers: [
      { text: "Очень люблю", effects: ["energy"], time: ["morning", "day"], taste: ["bitter"] },
      { text: "Пробовал, нормально", effects: [], time: [], taste: [] },
      { text: "Слишком специфичный", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 39,
    question: "Предпочитаете чай с корицей?",
    answers: [
      { text: "Да, особенно зимой", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "Иногда добавляю", effects: [], time: [], taste: [] },
      { text: "Не люблю специи", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 40,
    question: "Какой чай пьете во время учебы/работы?",
    answers: [
      { text: "Зеленый", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Черный", effects: ["energy"], time: ["morning", "day"], taste: [] },
      { text: "Любой", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 41,
    question: "Как часто пьете чай из самовара?",
    answers: [
      { text: "По возможности", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "На праздники", effects: [], time: [], taste: [] },
      { text: "У меня нет самовара", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 42,
    question: "Предпочитаете чай с кардамоном?",
    answers: [
      { text: "Да, люблю масала", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Изредка", effects: [], time: [], taste: [] },
      { text: "Слишком пряный", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 43,
    question: "Какой чай помогает вам сосредоточиться?",
    answers: [
      { text: "Матча", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Улун", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Пуэр", effects: ["focus"], time: ["day"], taste: ["bitter"] },
    ],
  },
  {
    id: 44,
    question: "Пьете ли чай с печеньем/сладостями?",
    answers: [
      { text: "Всегда", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "По настроению", effects: [], time: [], taste: [] },
      { text: "Предпочитаю отдельно", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 45,
    question: "Какой температуры воду предпочитаете для зеленого чая?",
    answers: [
      { text: "70-80°C", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Кипяток", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Не знаю разницы", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 46,
    question: "Как часто пьете чай ройбуш?",
    answers: [
      { text: "Регулярно", effects: ["relax"], time: ["evening"], taste: ["herbal", "sweet"] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Не пробовал", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 47,
    question: "Предпочитаете чай с ванилью?",
    answers: [
      { text: "Да, мягкий вкус", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "Изредка", effects: [], time: [], taste: [] },
      { text: "Слишком сладкий", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 48,
    question: "Какой чай пьете в дождливую погоду?",
    answers: [
      { text: "Согревающий с специями", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Крепкий черный", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Любой", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 49,
    question: "Как относитесь к чаю с жасмином?",
    answers: [
      { text: "Обожаю аромат", effects: ["relax", "focus"], time: ["day", "evening"], taste: [] },
      { text: "Нормально", effects: [], time: [], taste: [] },
      { text: "Слишком ароматный", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 50,
    question: "Предпочитаете чай с розой?",
    answers: [
      { text: "Да, романтично", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Не мой вкус", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 51,
    question: "Какой крепости чай пьете утром?",
    answers: [
      { text: "Очень крепкий", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Средний", effects: ["focus"], time: ["morning"], taste: [] },
      { text: "Легкий", effects: ["relax"], time: ["morning"], taste: ["sweet"] },
    ],
  },
  {
    id: 52,
    question: "Пьете ли чай с вареньем?",
    answers: [
      { text: "Да, по-русски", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Предпочитаю мед", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 53,
    question: "Какой чай предпочитаете в путешествиях?",
    answers: [
      { text: "Пакетированный для удобства", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Местные сорта", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Не пью в поездках", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 54,
    question: "Как часто пьете чай каркаде?",
    answers: [
      { text: "Регулярно", effects: ["relax"], time: ["evening"], taste: ["fruity"] },
      { text: "Летом", effects: ["focus"], time: ["day"], taste: ["fruity"] },
      { text: "Редко", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 55,
    question: "Предпочитаете чай с облепихой?",
    answers: [
      { text: "Да, витамины", effects: ["relax"], time: ["evening"], taste: ["fruity", "sweet"] },
      { text: "Зимой", effects: ["energy"], time: ["morning"], taste: ["fruity"] },
      { text: "Не пробовал", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 56,
    question: "Какой чай пьете во время диеты?",
    answers: [
      { text: "Зеленый", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Пуэр", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Травяной", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
    ],
  },
  {
    id: 57,
    question: "Как относитесь к чаю с чабрецом?",
    answers: [
      { text: "Люблю горный аромат", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Иногда пью", effects: [], time: [], taste: [] },
      { text: "Слишком терпкий", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 58,
    question: "Предпочитаете чай с лимонграссом?",
    answers: [
      { text: "Да, освежающий", effects: ["focus"], time: ["day"], taste: ["herbal"] },
      { text: "Пробовал", effects: [], time: [], taste: [] },
      { text: "Не знаком", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 59,
    question: "Какой чай помогает вам расслабиться?",
    answers: [
      { text: "Ромашковый", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Мелисса", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Лаванда", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
    ],
  },
  {
    id: 60,
    question: "Пьете ли чай с медом манука?",
    answers: [
      { text: "Да, полезный", effects: ["energy"], time: ["morning"], taste: ["sweet"] },
      { text: "Обычный мед", effects: [], time: [], taste: ["sweet"] },
      { text: "Без меда", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 61,
    question: "Как часто пьете белый чай?",
    answers: [
      { text: "Регулярно", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "По особым случаям", effects: [], time: [], taste: [] },
      { text: "Редко или никогда", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 62,
    question: "Предпочитаете чай с гвоздикой?",
    answers: [
      { text: "Да, в холода", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Слишком острый", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 63,
    question: "Какой чай пьете после тренировки?",
    answers: [
      { text: "Зеленый", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Холодный", effects: ["energy"], time: ["day"], taste: [] },
      { text: "Не пью после спорта", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 64,
    question: "Как относитесь к копченому чаю?",
    answers: [
      { text: "Интересный вкус", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Пробовал", effects: [], time: [], taste: [] },
      { text: "Не мой стиль", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 65,
    question: "Предпочитаете чай с анисом?",
    answers: [
      { text: "Да, необычно", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Изредка", effects: [], time: [], taste: [] },
      { text: "Слишком специфичный", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 66,
    question: "Какой чай пьете во время чтения?",
    answers: [
      { text: "Легкий зеленый", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Ароматный черный", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Любой тихий", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 67,
    question: "Как часто пьете ферментированный чай?",
    answers: [
      { text: "Постоянно", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Что это такое?", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 68,
    question: "Предпочитаете чай с шиповником?",
    answers: [
      { text: "Да, витаминный", effects: ["energy"], time: ["morning"], taste: ["fruity"] },
      { text: "Зимой", effects: ["relax"], time: ["evening"], taste: ["fruity"] },
      { text: "Кисловатый", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 69,
    question: "Какой чай пьете на работе?",
    answers: [
      { text: "Простой черный", effects: ["energy"], time: ["morning", "day"], taste: [] },
      { text: "Зеленый для концентрации", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Пакетированный", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 70,
    question: "Как относитесь к чаю с женьшенем?",
    answers: [
      { text: "Бодрящий эффект", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Пробовал", effects: [], time: [], taste: [] },
      { text: "Слишком активизирующий", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 71,
    question: "Предпочитаете чай с лепестками роз?",
    answers: [
      { text: "Романтично", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "По настроению", effects: [], time: [], taste: [] },
      { text: "Слишком декоративно", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 72,
    question: "Какой чай пьете в бане/сауне?",
    answers: [
      { text: "Травяной", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Холодный", effects: ["energy"], time: ["day"], taste: [] },
      { text: "Не пью в бане", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 73,
    question: "Как часто экспериментируете со смесями?",
    answers: [
      { text: "Постоянно", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Предпочитаю классику", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 74,
    question: "Предпочитаете чай с календулой?",
    answers: [
      { text: "Полезно", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Пробовал", effects: [], time: [], taste: [] },
      { text: "Не знаком", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 75,
    question: "Какой чай помогает при головной боли?",
    answers: [
      { text: "Мятный", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Зеленый", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Крепкий черный", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
    ],
  },
  {
    id: 76,
    question: "Пьете ли чай со льдом?",
    answers: [
      { text: "Летом часто", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Только горячий", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 77,
    question: "Как относитесь к чаю с куркумой?",
    answers: [
      { text: "Полезно и вкусно", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Пробовал", effects: [], time: [], taste: [] },
      { text: "Специфический вкус", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 78,
    question: "Предпочитаете чай с лотосом?",
    answers: [
      { text: "Экзотично", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Редкость", effects: [], time: [], taste: [] },
      { text: "Не встречал", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 79,
    question: "Какой чай пьете при простуде?",
    answers: [
      { text: "С имбирем и медом", effects: ["energy"], time: ["morning"], taste: ["sweet"] },
      { text: "Липовый", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Малиновый", effects: ["relax"], time: ["evening"], taste: ["fruity", "sweet"] },
    ],
  },
  {
    id: 80,
    question: "Как часто пьете чай пуэр?",
    answers: [
      { text: "Регулярно", effects: ["energy", "focus"], time: ["morning", "day"], taste: ["bitter"] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Слишком специфичный", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 81,
    question: "Предпочитаете молочный улун?",
    answers: [
      { text: "Мягкий и нежный", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "По настроению", effects: [], time: [], taste: [] },
      { text: "Обычный лучше", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 82,
    question: "Какой чай пьете зимними вечерами?",
    answers: [
      { text: "Согревающий с специями", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Фруктовый", effects: ["relax"], time: ["evening"], taste: ["fruity"] },
      { text: "Обычный черный", effects: [], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 83,
    question: "Как относитесь к чаю с гибискусом?",
    answers: [
      { text: "Красивый и полезный", effects: ["relax"], time: ["evening"], taste: ["fruity"] },
      { text: "Кисловатый", effects: [], time: [], taste: [] },
      { text: "Не пробовал", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 84,
    question: "Предпочитаете чай с дымком?",
    answers: [
      { text: "Интересный вкус", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Редко", effects: [], time: [], taste: [] },
      { text: "Не люблю", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 85,
    question: "Какой чай пьете во время массажа?",
    answers: [
      { text: "Расслабляющий травяной", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Не пью", effects: [], time: [], taste: [] },
      { text: "Зеленый", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 86,
    question: "Как часто пьете красный чай?",
    answers: [
      { text: "Часто", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Предпочитаю другие", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 87,
    question: "Предпочитаете чай с личи?",
    answers: [
      { text: "Экзотический вкус", effects: ["focus"], time: ["day"], taste: ["fruity"] },
      { text: "Пробовал", effects: [], time: [], taste: [] },
      { text: "Слишком сладкий", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 88,
    question: "Какой чай помогает пищеварению?",
    answers: [
      { text: "Пуэр", effects: ["focus"], time: ["day"], taste: ["bitter"] },
      { text: "Мятный", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Зеленый", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 89,
    question: "Пьете ли чай с кокосовой стружкой?",
    answers: [
      { text: "Тропический вкус", effects: ["relax"], time: ["evening"], taste: ["sweet"] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Не пробовал", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 90,
    question: "Как относитесь к дымному лапсанг сушонг?",
    answers: [
      { text: "Уникальный вкус", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Слишком интенсивный", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Не знаком", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 91,
    question: "Предпочитаете чай с фенхелем?",
    answers: [
      { text: "Полезно для желудка", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Редко", effects: [], time: [], taste: [] },
      { text: "Не люблю анисовый вкус", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 92,
    question: "Какой чай пьете в спа-салонах?",
    answers: [
      { text: "Детокс", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Зеленый", effects: ["focus"], time: ["day"], taste: [] },
      { text: "Не хожу в спа", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 93,
    question: "Как часто пьете чай ташкентский?",
    answers: [
      { text: "Классика", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "По настроению", effects: [], time: [], taste: [] },
      { text: "Редко", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 94,
    question: "Предпочитаете чай с лимонной травой?",
    answers: [
      { text: "Освежающий", effects: ["focus"], time: ["day"], taste: ["herbal"] },
      { text: "Иногда", effects: [], time: [], taste: [] },
      { text: "Кислый", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 95,
    question: "Какой чай пьете перед важной встречей?",
    answers: [
      { text: "Бодрящий черный", effects: ["energy"], time: ["morning"], taste: ["bitter"] },
      { text: "Успокаивающий", effects: ["relax"], time: ["morning"], taste: ["herbal"] },
      { text: "Концентрирующий зеленый", effects: ["focus"], time: ["day"], taste: [] },
    ],
  },
  {
    id: 96,
    question: "Пьете ли чай с барбарисом?",
    answers: [
      { text: "Кисло-сладкий", effects: ["energy"], time: ["morning"], taste: ["fruity"] },
      { text: "Редко", effects: [], time: [], taste: [] },
      { text: "Не встречал", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 97,
    question: "Как относитесь к чаю с лимонной мятой?",
    answers: [
      { text: "Двойная свежесть", effects: ["focus"], time: ["day"], taste: ["herbal"] },
      { text: "Иногда пью", effects: [], time: [], taste: [] },
      { text: "Слишком активный вкус", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
  {
    id: 98,
    question: "Предпочитаете чай с османтусом?",
    answers: [
      { text: "Нежный аромат", effects: ["relax"], time: ["evening"], taste: [] },
      { text: "Что это?", effects: [], time: [], taste: [] },
      { text: "Редкость", effects: [], time: [], taste: [] },
    ],
  },
  {
    id: 99,
    question: "Какой чай пьете на природе?",
    answers: [
      { text: "Иван-чай", effects: ["relax"], time: ["evening"], taste: ["herbal"] },
      { text: "Что возьму с собой", effects: [], time: [], taste: [] },
      { text: "Термос черного", effects: ["energy"], time: ["morning"], taste: [] },
    ],
  },
  {
    id: 100,
    question: "Как часто заходите в чайные магазины?",
    answers: [
      { text: "Регулярно", effects: ["focus"], time: [], taste: [] },
      { text: "По необходимости", effects: [], time: [], taste: [] },
      { text: "Покупаю в супермаркете", effects: ["energy"], time: ["morning"], taste: [] },
      { text: "Заказываю онлайн", effects: ["relax"], time: ["evening"], taste: [] },
    ],
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUIZ_QUESTIONS };
} else if (typeof window !== "undefined") {
  window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
}

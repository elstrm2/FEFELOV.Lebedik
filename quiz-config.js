window.quizQuestions = [
    // --- Effect Questions ---
    {
        question: "Какой эффект вы ищете в первую очередь?",
        type: "single",
        answers: [
            { text: "Взбодриться и получить энергию", mapping: { effect: "energy" } },
            { text: "Расслабиться и снять стресс", mapping: { effect: "relax" } },
            { text: "Сконцентрироваться для работы или учебы", mapping: { effect: "focus" } },
            { text: "Просто насладиться моментом", mapping: {} }
        ]
    },
    {
        question: "Чай для какого состояния вам нужен?",
        type: "single",
        answers: [
            { text: "Утренняя бодрость", mapping: { effect: "energy", time: "morning" } },
            { text: "Дневной тонус", mapping: { effect: "energy", time: "day" } },
            { text: "Вечернее расслабление", mapping: { effect: "relax", time: "evening" } },
            { text: "Медитативное спокойствие", mapping: { effect: "focus" } }
        ]
    },
    {
        question: "Что для вас важнее всего в чае?",
        type: "multiple",
        answers: [
            { text: "Ясность ума", mapping: { effect: "focus" } },
            { text: "Прилив сил", mapping: { effect: "energy" } },
            { text: "Гармония и спокойствие", mapping: { effect: "relax" } },
            { text: "Новые вкусовые ощущения", mapping: { taste: ["fruity", "herbal", "sweet", "bitter"] } }
        ]
    },
    {
        question: "Как вы планируете провести ближайший час?",
        type: "single",
        answers: [
            { text: "Продуктивно поработать", mapping: { effect: "focus" } },
            { text: "Отдохнуть с книгой или фильмом", mapping: { effect: "relax" } },
            { text: "Заняться спортом или активным делом", mapping: { effect: "energy" } },
            { text: "Пообщаться с друзьями", mapping: { taste: ["sweet", "fruity"] } }
        ]
    },
    {
        question: "Какой напиток вам нужен, чтобы пережить тяжелый день?",
        type: "single",
        answers: [
            { text: "Энергетик, чтобы взбодриться", mapping: { effect: "energy" } },
            { text: "Успокоительное, чтобы снять напряжение", mapping: { effect: "relax" } },
            { text: "Кофе, чтобы сосредоточиться", mapping: { effect: "focus" } }
        ]
    },

    // --- Time of Day Questions ---
    {
        question: "В какое время дня вы чаще всего пьете чай?",
        type: "multiple",
        answers: [
            { text: "Ранним утром, чтобы проснуться", mapping: { time: "morning" } },
            { text: "В середине рабочего дня", mapping: { time: "day" } },
            { text: "Вечером, перед сном", mapping: { time: "evening" } },
            { text: "Пью чай в любое время!", mapping: {} }
        ]
    },
    {
        question: "Выберите идеальное время для чаепития:",
        type: "single",
        answers: [
            { text: "Завтрак", mapping: { time: "morning" } },
            { text: "Обеденный перерыв", mapping: { time: "day" } },
            { text: "После ужина", mapping: { time: "evening" } }
        ]
    },
    {
        question: "Чай для какого приема пищи вы ищете?",
        type: "multiple",
        answers: [
            { text: "К легкому завтраку", mapping: { time: "morning", taste: "sweet" } },
            { text: "К плотному обеду", mapping: { time: "day", taste: "bitter" } },
            { text: "К десерту вечером", mapping: { time: "evening", taste: "fruity" } }
        ]
    },
    {
        question: "Когда вам больше всего хочется чая?",
        type: "single",
        answers: [
            { text: "Сразу после пробуждения", mapping: { time: "morning" } },
            { text: "Когда нужно сделать перерыв в работе", mapping: { time: "day" } },
            { text: "Когда хочется уюта перед сном", mapping: { time: "evening" } }
        ]
    },
    {
        question: "Какой чай вы бы предпочли для выходного дня?",
        type: "multiple",
        answers: [
            { text: "Бодрящий для активного утра", mapping: { time: "morning", effect: "energy" } },
            { text: "Вкусный для долгой дневной прогулки", mapping: { time: "day", taste: "fruity" } },
            { text: "Успокаивающий для уютного вечера", mapping: { time: "evening", effect: "relax" } }
        ]
    },

    // --- Taste Questions ---
    {
        question: "Какие вкусы вы предпочитаете в напитках?",
        type: "multiple",
        answers: [
            { text: "Сладкие и медовые", mapping: { taste: "sweet" } },
            { text: "Терпкие и насыщенные", mapping: { taste: "bitter" } },
            { text: "Фруктовые и ягодные", mapping: { taste: "fruity" } },
            { text: "Травяные и цветочные", mapping: { taste: "herbal" } }
        ]
    },
    {
        question: "Вы любите добавлять в чай сахар или мед?",
        type: "single",
        answers: [
            { text: "Да, всегда", mapping: { taste: "sweet" } },
            { text: "Нет, предпочитаю чистый вкус", mapping: { taste: ["bitter", "herbal"] } },
            { text: "Иногда, по настроению", mapping: {} }
        ]
    },
    {
        question: "Какой десерт вы бы выбрали к чаю?",
        type: "single",
        answers: [
            { text: "Шоколадный торт", mapping: { taste: "bitter" } },
            { text: "Фруктовый салат", mapping: { taste: "fruity" } },
            { text: "Медовик", mapping: { taste: "sweet" } },
            { text: "Травяной леденец", mapping: { taste: "herbal" } }
        ]
    },
    {
        question: "Аромат чего вам нравится больше?",
        type: "multiple",
        answers: [
            { text: "Свежескошенной травы", mapping: { taste: "herbal" } },
            { text: "Цветущего сада", mapping: { taste: "fruity" } },
            { text: "Старой библиотеки", mapping: { taste: "bitter" } },
            { text: "Кондитерской", mapping: { taste: "sweet" } }
        ]
    },
    {
        question: "Какой из этих вкусов вам кажется наиболее интригующим?",
        type: "single",
        answers: [
            { text: "Орхидея и сирень", mapping: { taste: "fruity" } },
            { text: "Кора дерева и орехи", mapping: { taste: "bitter" } },
            { text: "Сухофрукты и карамель", mapping: { taste: "sweet" } },
            { text: "Полевые цветы и мята", mapping: { taste: "herbal" } }
        ]
    },

    // --- Combination Questions ---
    {
        question: "Идеальный чай для рабочего утра – это...",
        type: "single",
        answers: [
            { text: "Крепкий и бодрящий", mapping: { effect: "energy", time: "morning", taste: "bitter" } },
            { text: "Мягкий, помогающий настроиться", mapping: { effect: "focus", time: "morning", taste: "sweet" } },
            { text: "Ароматный, чтобы поднять настроение", mapping: { taste: "fruity", time: "morning" } }
        ]
    },
    {
        question: "Какая атмосфера вам ближе для вечернего чаепития?",
        type: "single",
        answers: [
            { text: "Спокойная, с книгой у камина", mapping: { effect: "relax", time: "evening", taste: "herbal" } },
            { text: "Романтическая, с фруктами и сладостями", mapping: { taste: ["sweet", "fruity"], time: "evening" } },
            { text: "Философская, для глубоких размышлений", mapping: { effect: "focus", time: "evening", taste: "bitter" } }
        ]
    },
    {
        question: "Если бы чай был музыкой, что бы вы включили?",
        type: "single",
        answers: [
            { text: "Энергичный рок", mapping: { effect: "energy" } },
            { text: "Спокойный эмбиент", mapping: { effect: "relax" } },
            { text: "Классическую музыку", mapping: { effect: "focus" } },
            { text: "Легкий джаз", mapping: { taste: "sweet" } }
        ]
    },
    {
        question: "Куда бы вы отправились с чашкой чая?",
        type: "single",
        answers: [
            { text: "В горы, созерцать вершины", mapping: { taste: "bitter", effect: "focus" } },
            { text: "На цветущий луг", mapping: { taste: "herbal", effect: "relax" } },
            { text: "В тропический сад", mapping: { taste: "fruity", effect: "energy" } },
            { text: "На пасеку, к ульям", mapping: { taste: "sweet" } }
        ]
    },
    {
        question: "Чай для вас – это скорее...",
        type: "single",
        answers: [
            { text: "Топливо для продуктивности", mapping: { effect: ["energy", "focus"] } },
            { text: "Способ замедлиться и отдохнуть", mapping: { effect: "relax" } },
            { text: "Гастрономическое приключение", mapping: { taste: ["fruity", "herbal", "sweet", "bitter"] } }
        ]
    },
    // Adding 30 more questions to reach 50
    {
        question: "Какой фильм вы бы посмотрели за чашкой чая?",
        type: "single",
        answers: [
            { text: "Динамичный боевик", mapping: { effect: "energy" } },
            { text: "Интеллектуальный детектив", mapping: { effect: "focus" } },
            { text: "Романтическую комедию", mapping: { effect: "relax", taste: "sweet" } },
            { text: "Документальный фильм о природе", mapping: { taste: "herbal" } }
        ]
    },
    {
        question: "Выберите погоду за окном:",
        type: "single",
        answers: [
            { text: "Солнечный, ясный день", mapping: { effect: "energy", taste: "fruity" } },
            { text: "Дождливый, меланхоличный вечер", mapping: { effect: "relax", taste: "bitter" } },
            { text: "Туманное утро", mapping: { effect: "focus", taste: "herbal" } }
        ]
    },
    {
        question: "С кем бы вы разделили чаепитие?",
        type: "single",
        answers: [
            { text: "С самим собой, в тишине", mapping: { effect: "focus" } },
            { text: "С лучшим другом за душевной беседой", mapping: { effect: "relax" } },
            { text: "С коллегами во время перерыва", mapping: { effect: "energy" } }
        ]
    },
    {
        question: "Какой запах вам приятнее?",
        type: "single",
        answers: [
            { text: "Запах земли после дождя", mapping: { taste: "bitter" } },
            { text: "Аромат свежей выпечки", mapping: { taste: "sweet" } },
            { text: "Запах соснового леса", mapping: { taste: "herbal" } },
            { text: "Благоухание роз", mapping: { taste: "fruity" } }
        ]
    },
    {
        question: "Какую книгу вы бы читали с чаем?",
        type: "single",
        answers: [
            { text: "Научно-популярную, для новых знаний", mapping: { effect: "focus" } },
            { text: "Фантастический роман, для полета воображения", mapping: { effect: "energy" } },
            { text: "Сборник стихов, для души", mapping: { effect: "relax" } }
        ]
    },
    {
        question: "Ваш идеальный отпуск - это...",
        type: "single",
        answers: [
            { text: "Поход в горы", mapping: { taste: "bitter", effect: "energy" } },
            { text: "Отдых на пляже", mapping: { taste: "fruity", effect: "relax" } },
            { text: "Экскурсии по древним городам", mapping: { effect: "focus" } }
        ]
    },
    {
        question: "Какой вид искусства вам ближе?",
        type: "single",
        answers: [
            { text: "Живопись импрессионистов", mapping: { taste: "fruity", effect: "relax" } },
            { text: "Архитектура модернизма", mapping: { taste: "bitter", effect: "focus" } },
            { text: "Скульптура", mapping: { taste: "herbal" } }
        ]
    },
    {
        question: "Чай нужен, чтобы...",
        type: "multiple",
        answers: [
            { text: "Согреться", mapping: { taste: "bitter" } },
            { text: "Освежиться", mapping: { taste: "fruity" } },
            { text: "Найти вдохновение", mapping: { effect: "focus" } },
            { text: "Побаловать себя", mapping: { taste: "sweet" } }
        ]
    },
    {
        question: "Какую текстуру вы предпочитаете?",
        type: "single",
        answers: [
            { text: "Бархатистую, плотную", mapping: { taste: "bitter" } },
            { text: "Легкую, шелковистую", mapping: { taste: "sweet" } },
            { text: "Маслянистую, густую", mapping: { taste: "herbal" } }
        ]
    },
    {
        question: "Чай для вас - это ритуал?",
        type: "single",
        answers: [
            { text: "Да, это целая церемония", mapping: { effect: "focus" } },
            { text: "Нет, просто напиток на каждый день", mapping: { effect: ["energy", "relax"] } },
            { text: "Иногда хочется устроить что-то особенное", mapping: {} }
        ]
    },
    {
        question: "Что вы цените в людях?",
        type: "single",
        answers: [
            { text: "Энергичность и жизнелюбие", mapping: { effect: "energy" } },
            { text: "Спокойствие и мудрость", mapping: { effect: "relax" } },
            { text: "Острый ум и креативность", mapping: { effect: "focus" } }
        ]
    },
    {
        question: "Выберите фрукт:",
        type: "single",
        answers: [
            { text: "Персик", mapping: { taste: "fruity" } },
            { text: "Лимон", mapping: { taste: "herbal" } },
            { text: "Чернослив", mapping: { taste: "sweet" } },
            { text: "Грейпфрут", mapping: { taste: "bitter" } }
        ]
    },
    {
        question: "Какой завтрак вам по душе?",
        type: "single",
        answers: [
            { text: "Овсянка с фруктами", mapping: { time: "morning", taste: "fruity" } },
            { text: "Яичница с беконом", mapping: { time: "morning", taste: "bitter" } },
            { text: "Круассан с джемом", mapping: { time: "morning", taste: "sweet" } }
        ]
    },
    {
        question: "Что поможет вам принять важное решение?",
        type: "single",
        answers: [
            { text: "Чашка крепкого чая для ясности мыслей", mapping: { effect: "focus" } },
            { text: "Прогулка на свежем воздухе для перезагрузки", mapping: { effect: "energy" } },
            { text: "Медитация для внутреннего спокойствия", mapping: { effect: "relax" } }
        ]
    },
    {
        question: "Какое послевкусие вы предпочитаете?",
        type: "single",
        answers: [
            { text: "Долгое, обволакивающее", mapping: { taste: "bitter" } },
            { text: "Короткое, освежающее", mapping: { taste: "fruity" } },
            { text: "Сладкое, медовое", mapping: { taste: "sweet" } }
        ]
    },
    {
        question: "Как вы относитесь к экспериментам?",
        type: "single",
        answers: [
            { text: "Обожаю пробовать новое!", mapping: { taste: ["fruity", "herbal"] } },
            { text: "Предпочитаю проверенную классику", mapping: { taste: ["sweet", "bitter"] } },
            { text: "Зависит от настроения", mapping: {} }
        ]
    },
    {
        question: "Чай для вас - это напиток для...",
        type: "single",
        answers: [
            { text: "Тела (здоровье и тонус)", mapping: { effect: ["energy", "relax"] } },
            { text: "Ума (концентрация и идеи)", mapping: { effect: "focus" } },
            { text: "Души (удовольствие и гармония)", mapping: { taste: ["sweet", "fruity"] } }
        ]
    },
    {
        question: "Какой чай вы бы взяли в путешествие?",
        type: "single",
        answers: [
            { text: "Тот, что легко заваривать в любых условиях", mapping: { effect: "energy" } },
            { text: "Тот, что поможет расслабиться после долгого дня", mapping: { effect: "relax" } },
            { text: "Самый необычный, чтобы удивить новых знакомых", mapping: { taste: "fruity" } }
        ]
    },
    {
        question: "Ваш идеальный вечер пятницы?",
        type: "single",
        answers: [
            { text: "Шумная вечеринка с друзьями", mapping: { effect: "energy" } },
            { text: "Тихий вечер дома", mapping: { effect: "relax" } },
            { text: "Интеллектуальная игра или квиз", mapping: { effect: "focus" } }
        ]
    },
    {
        question: "Что вы хотите почувствовать после чашки чая?",
        type: "multiple",
        answers: [
            { text: "Прилив жизненных сил", mapping: { effect: "energy" } },
            { text: "Безмятежность", mapping: { effect: "relax" } },
            { text: "Обострение чувств и мыслей", mapping: { effect: "focus" } },
            { text: "Приятную сладость на языке", mapping: { taste: "sweet" } }
        ]
    },
    {
        question: "Выберите элемент:",
        type: "single",
        answers: [
            { text: "Огонь", mapping: { effect: "energy" } },
            { text: "Вода", mapping: { effect: "relax" } },
            { text: "Земля", mapping: { taste: "bitter" } },
            { text: "Воздух", mapping: { taste: "herbal" } }
        ]
    },
    {
        question: "Какой инструмент вам нравится больше?",
        type: "single",
        answers: [
            { text: "Скрипка", mapping: { taste: "fruity" } },
            { text: "Виолончель", mapping: { taste: "bitter" } },
            { text: "Арфа", mapping: { taste: "sweet" } },
            { text: "Флейта", mapping: { taste: "herbal" } }
        ]
    },
    {
        question: "Чай нужен для продуктивного дня или для спокойного вечера?",
        type: "single",
        answers: [
            { text: "Продуктивный день", mapping: { time: "day", effect: ["energy", "focus"] } },
            { text: "Спокойный вечер", mapping: { time: "evening", effect: "relax" } }
        ]
    },
    {
        question: "Вы предпочитаете...",
        type: "single",
        answers: [
            { text: "Сложные, многогранные вкусы", mapping: { taste: "bitter" } },
            { text: "Простые и понятные вкусы", mapping: { taste: "sweet" } }
        ]
    },
    {
        question: "Какая страна вас больше привлекает?",
        type: "single",
        answers: [
            { text: "Китай, с его древней историей", mapping: { taste: ["bitter", "herbal"] } },
            { text: "Индия, с ее яркими красками", mapping: { taste: ["fruity", "sweet"] } },
            { text: "Япония, с ее минимализмом", mapping: { effect: "focus" } }
        ]
    },
    {
        question: "Чай должен быть похож на...",
        type: "single",
        answers: [
            { text: "Прогулку по весеннему саду", mapping: { taste: "fruity" } },
            { text: "Посиделки у костра в лесу", mapping: { taste: "bitter" } },
            { text: "Отдых в спа-салоне", mapping: { taste: "herbal", effect: "relax" } }
        ]
    },
    {
        question: "Что для вас важнее в дизайне?",
        type: "single",
        answers: [
            { text: "Функциональность", mapping: { effect: "focus" } },
            { text: "Эстетика", mapping: { taste: "fruity" } },
            { text: "Комфорт", mapping: { effect: "relax" } }
        ]
    },
    {
        question: "Какой подарок вы бы хотели получить?",
        type: "single",
        answers: [
            { text: "Билет на концерт любимой группы", mapping: { effect: "energy" } },
            { text: "Редкую книгу", mapping: { effect: "focus" } },
            { text: "День в спа", mapping: { effect: "relax" } },
            { text: "Коробку экзотических фруктов", mapping: { taste: "fruity" } }
        ]
    },
    {
        question: "Выберите время года:",
        type: "single",
        answers: [
            { text: "Весна", mapping: { taste: "herbal" } },
            { text: "Лето", mapping: { taste: "fruity" } },
            { text: "Осень", mapping: { taste: "bitter" } },
            { text: "Зима", mapping: { taste: "sweet" } }
        ]
    },
    {
        question: "Чай для вас - это скорее мужской или женский напиток?",
        type: "single",
        answers: [
            { text: "Мужской (крепость, терпкость)", mapping: { taste: "bitter" } },
            { text: "Женский (нежность, аромат)", mapping: { taste: ["sweet", "fruity"] } },
            { text: "Универсальный", mapping: {} }
        ]
    }
];

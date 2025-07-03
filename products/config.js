const teaProducts = [
  {
    id: "da-hong-pao",
    name: "Да Хун Пао",
    shortDescription: "Легендарный утёсный улун с богатым вкусом и глубоким ароматом",
    priceNumber: 2800,
    weight: 50,
    effects: ["energy", "focus"],
    timeOfDay: ["morning", "day"],
    taste: ["bitter"],
    description: `Да Хун Пао — один из самых знаменитых китайских чаёв, растущий на скалах Уишань. 
        Этот утёсный улун обладает невероятно сложным вкусом с нотами жареных орехов, сухофруктов и лёгкой минеральности. 
        Чай даёт мягкую энергию без резкого возбуждения, помогает сосредоточиться и настроиться на работу.`,
    story: `Согласно легенде, этот чай спас жизнь матери императора династии Мин. В благодарность император приказал 
        укрыть чайные кусты красными мантиями, отсюда и название "Большой Красный Халат". Сегодня оригинальные 
        материнские кусты охраняются как национальное достояние Китая.`,
    brewingTips: "Заваривать водой 95°C, первая заварка 30 секунд, каждая следующая на 10-15 секунд дольше. Выдерживает до 8-10 заварок.",
    images: {
      main: "products/da-hong-pao/main.jpg",
      thumb: "products/da-hong-pao/thumb.svg",
      gallery: [
        "products/da-hong-pao/gallery-1.jpg",
        "products/da-hong-pao/gallery-2.jpg",
        "products/da-hong-pao/gallery-3.jpg",
        "products/da-hong-pao/gallery-4.jpg",
      ],
    },
  },
  {
    id: "tie-guan-yin",
    name: "Тё Гуань Инь",
    shortDescription: "Классический улун с цветочным ароматом и освежающим вкусом",
    priceNumber: 2200,
    weight: 50,
    effects: ["relax", "focus"],
    timeOfDay: ["day", "evening"],
    taste: ["sweet", "fruity"],
    description: `Тё Гуань Инь — один из самых популярных улунов Китая из провинции Фуцзянь. 
        Отличается ярким цветочным ароматом с нотами орхидеи и свежестью весеннего сада. 
        Вкус мягкий, сладковатый, с длительным послевкусием. Идеален для медитации и расслабления.`,
    story: `Название переводится как "Железная Богиня Милосердия". По легенде, бедный фермер каждый день 
        приносил чай к статуе богини Гуань Инь. В благодарность за его преданность богиня указала ему 
        на особенный чайный куст, который и стал родоначальником этого сорта.`,
    brewingTips: "Заваривать водой 90-95°C, первая заварка 45 секунд. Очень ароматный, выдерживает 6-8 заварок.",
    images: {
      main: "products/tie-guan-yin/main.jpg",
      thumb: "products/tie-guan-yin/thumb.svg",
      gallery: ["products/tie-guan-yin/gallery-1.jpg", "products/tie-guan-yin/gallery-2.jpg", "products/tie-guan-yin/gallery-3.jpg"],
    },
  },
  {
    id: "silver-needles",
    name: "Серебряные Иглы",
    shortDescription: "Элитный белый чай с нежным вкусом и целебными свойствами",
    priceNumber: 3500,
    weight: 50,
    effects: ["relax"],
    timeOfDay: ["day", "evening"],
    taste: ["sweet"],
    description: `Бай Хао Инь Чжэнь (Серебряные Иглы) — король белых чаёв из провинции Фуцзянь. 
        Изготавливается только из нераспустившихся почек, покрытых серебристым пушком. 
        Вкус деликатный, сладковатый, с нотами мёда и свежих фруктов. Минимальная обработка сохраняет максимум полезных веществ.`,
    story: `Белый чай был доступен только императорскому двору. Сборщицы должны были соблюдать строгие правила: 
        не есть лук и чеснок, не пользоваться парфюмом. Собирать можно было только в ясную погоду, 
        ранним утром, когда роса ещё не высохла.`,
    brewingTips: "Заваривать водой 75-80°C, первая заварка 2-3 минуты. Очень деликатный, можно заваривать 4-5 раз.",
    images: {
      main: "products/silver-needles/main.jpg",
      thumb: "products/silver-needles/thumb.svg",
      gallery: ["products/silver-needles/gallery-1.jpg", "products/silver-needles/gallery-2.jpg"],
    },
  },
  {
    id: "jasmine-phoenix-pearls",
    name: "Жасминовые Жемчужины",
    shortDescription: "Зелёный чай с натуральным жасмином, скрученный в жемчужины",
    priceNumber: 2000,
    weight: 50,
    effects: ["relax", "energy"],
    timeOfDay: ["morning", "day"],
    taste: ["fruity", "herbal"],
    description: `Зелёный чай высшего качества, ароматизированный свежими цветами жасмина по традиционной технологии. 
        Чай скручен в небольшие жемчужины, которые красиво раскрываются при заваривании. 
        Вкус свежий, с ярким жасминовым ароматом и лёгкой сладостью.`,
    story: `Традиция ароматизации чая жасмином зародилась в династию Сун (960-1279 гг.). 
        Процесс очень трудоёмкий: свежие цветы жасмина смешивают с чаем на ночь, 
        утром цветы убирают. Процедуру повторяют до 7 раз для получения насыщенного аромата.`,
    brewingTips: "Заваривать водой 80-85°C, первая заварка 2 минуты. Жемчужины красиво раскрываются в прозрачном чайнике.",
    images: {
      main: "products/jasmine-phoenix-pearls/main.jpg",
      thumb: "products/jasmine-phoenix-pearls/thumb.svg",
      gallery: [
        "products/jasmine-phoenix-pearls/gallery-1.jpg",
        "products/jasmine-phoenix-pearls/gallery-2.jpg",
        "products/jasmine-phoenix-pearls/gallery-3.jpg",
      ],
    },
  },
  {
    id: "aged-puer",
    name: "Выдержанный Пуэр",
    shortDescription: "Тёмный чай с глубоким землистым вкусом и согревающим эффектом",
    priceNumber: 2600,
    weight: 100,
    effects: ["relax", "focus"],
    timeOfDay: ["day", "evening"],
    taste: ["bitter", "herbal"],
    description: `Шу Пуэр 10-летней выдержки из провинции Юньнань. Тёмный, почти чёрный настой 
        с насыщенным землистым вкусом и нотами влажной древесины. Очень мягкий, согревающий, 
        помогает пищеварению. Идеален для вечернего чаепития.`,
    story: `Пуэр — единственный чай, который с годами становится только лучше. Этот сорт проходит 
        специальную ферментацию и может храниться десятилетиями. Настоящие коллекционеры готовы 
        платить огромные деньги за пуэры возрастом 20-30 лет.`,
    brewingTips: "Заваривать кипятком, первую заварку слить (промыть чай). Вторая заварка 30 секунд, выдерживает 10+ заварок.",
    images: {
      main: "products/aged-puer/main.jpg",
      thumb: "products/aged-puer/thumb.svg",
      gallery: [
        "products/aged-puer/gallery-1.jpg",
        "products/aged-puer/gallery-2.jpg",
        "products/aged-puer/gallery-3.jpg",
        "products/aged-puer/gallery-4.jpg",
        "products/aged-puer/gallery-5.jpg",
      ],
    },
  },
  {
    id: "dragon-well",
    name: "Колодец Дракона",
    shortDescription: "Знаменитый зелёный чай с нежным вкусом и бодрящим эффектом",
    priceNumber: 1800,
    weight: 50,
    effects: ["energy", "focus"],
    timeOfDay: ["morning", "day"],
    taste: ["sweet"],
    description: `Лун Цзин — самый знаменитый зелёный чай Китая из окрестностей Ханчжоу. 
        Плоские, красиво обжаренные листочки дают нежный, свежий настой с лёгкой сладостью 
        и ореховыми нотами. Богат антиоксидантами, бодрит и освежает.`,
    story: `Император Цяньлун династии Цин так восхитился этим чаем, что лично назначил 
        18 чайных кустов "императорскими". До сих пор чай с этих кустов считается 
        самым престижным и стоит баснословных денег.`,
    brewingTips: "Заваривать водой 75-80°C, первая заварка 2-3 минуты. Нежный, можно заваривать 3-4 раза.",
    images: {
      main: "products/dragon-well/main.jpg",
      thumb: "products/dragon-well/thumb.svg",
      gallery: ["products/dragon-well/gallery-1.jpg", "products/dragon-well/gallery-2.jpg"],
    },
  },
];

window.teaProducts = teaProducts;

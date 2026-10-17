// ==========================================
// 🧠 БАЗА ДАННЫХ: ФАКТЫ
// ==========================================
const kittenFactsList = [
    "Мозг 17-летнего человека потребляет около 20% всей энергии организма, хотя составляет всего 2% от веса тела. 🧠",
    "Каждую секунду в твоём теле происходит около 37 секстиллионов (37·10²¹) химических реакций. 🔬",
    "Длина всех кровеносных сосудов одного человека — около 100 000 км. Этим «канатом» можно обогнуть Землю 2,5 раза. 🫀",
    "Примерно каждые 7–10 лет твоё тело полностью обновляет большинство своих клеток. 🧬",
    "Твой желудок полностью меняет свою слизистую оболочку каждые 4 дня! 🧪",
    "Скорость нервного импульса, идущего от мозга к конечностям, достигает 400 км/ч. ⚡",
    "Информационная емкость человеческого мозга оценивается примерно в 2.5 петабайта. 💾",
    "Твой глаз способен различать отдельные фотоны света в полной темноте. 👁️",
    "Кости человека на сжатие прочнее бетона сходного объема примерно в 4 раза. 🦴",
    "Разрешение человеческого глаза составляет примерно 576 мегапикселей. 📸",
    "В твоём теле содержится около 0,2 мг чистого золота — в основном оно растворено в крови. ✨",
    "Печень — единственный орган, способный восстановить свой объем даже после потери 75% ткани. 🩸",
    "Ощущение «дежавю» — это рассинхронизация между обработкой визуального сигнала и его записью в память. 🔄",
    "Гипнагогический рывок — когда ты вздрагиваешь при засыпании, мозг путает расслабление мышц с падением. 💤",
    "Пальцы обладают невероятной чувствительностью: если бы палец был размером с Землю, ты бы на ощупь отличил дома от машин! 🖐️",
    "Атомы, из которых состоит твоё тело, были синтезированы в недрах умирающих звёзд. Мы — звездная пыль! ✨",
    "Время течет с разной скоростью: на вершине гор из-за меньшей гравитации время идет чуть быстрее. ⏳",
    "Если бы Солнце мгновенно исчезло, мы узнали бы об этом только через 8 минут и 20 секунд. ☀️",
    "В наблюдаемой Вселенной больше звезд, чем песчинок на всех пляжах Земли. 🌌",
    "На Луне нет ветра, отпечатки ботинок астронавтов останутся там минимум на 100 миллионов лет. 🌙",
    "Самый высокий вулкан — Олимп на Марсе. Его высота 22 км (в 3 раза выше Эвереста). 🌋",
    "Закат на Марсе для наблюдателя выглядит не красным, а голубым. 🔴",
    "Если сжать историю Земли в 1 год, человечество появилось бы 31 декабря около 23:58. 🕒",
    "Земля несётся сквозь космос со скоростью около 107 000 км/ч вокруг Солнца. 🚀",
    "Один день на Венере длится дольше, чем весь её год. 🪐",
    "На Нептуне и Уране высокое давление превращает метан в настоящие алмазные дожди. 💎",
    "В космосе царит абсолютная вакуумная тишина. 👨‍🚀",
    "Свету требуется около 100 000 лет, чтобы пересечь нашу галактику Млечный Путь. 💫",
    "В 1 грамме ДНК можно сохранить до 215 петабайт цифровых данных. 🧬",
    "Чайная ложка вещества нейтронной звезды на Земле весила бы около 6 миллиардов тонн! ⚛️",
    "Атомы на 99.9999999% состоят из пустоты. 🧊",
    "Горячая вода при определенных условиях замерзает быстрее холодной (эффект Мпембы). ❄️",
    "Эффект квантовой спутанности: изменение одной частицы мгновенно меняет другую на другом конце Вселенной. 🔗",
    "Стекло — аморфный материал, структура которого похожа на застывшую сверхвязкую жидкость. 🪟",
    "На квантовом уровне просто факт наблюдения за частицей меняет её поведение. 🔬",
    "Облако средней величины весит около 500 тонн (как 100 слонов). ☁️",
    "В одном кубическом сантиметре воздуха содержится около 45 миллиардов миллиардов молекул. 💨",
    "Шум ракушки у уха — это резонанс звуков окружающей среды и движение крови по твоим сосудам. 🐚",
    "Антиматерия — самое дорогое вещество. Производство 1 грамма стоило бы 62.5 триллионов долларов. ⚛️",
    "В телескоп с расстояния 65 млн световых лет от Земли можно было бы увидеть динозавров. 🦕",
    "В чайной ложке лесной почвы обитает больше микроорганизмов, чем людей на Земле. 🌱",
    "Вся видимая материя составляет лишь 5% Вселенной, остальные 95% — тёмная материя и энергия. 🌌",
    "Фотоны генерируются в центре Солнца и могут пробиваться наружу до 100 000 лет. ☀️",
    "Давление на дне Марианской впадины в 1086 раз больше атмосферного. 🌊",
    "Шум на старых телевизорах без сигнала на 1% состоит из эха Большого Взрыва. 📺",
    "Осьминоги имеют 3 сердца, голубую кровь и 9 мозгов! 🐙",
    "У деревьев в лесу есть подземный «интернет» из мицелия грибов для обмена питанием. 🌲",
    "Вороны способны запоминать лица людей на годы и строят сложные планы. 🐦",
    "Медуза Turritopsis dohrnii биологически бессмертна и может откатывать свой возраст. 🪼",
    "Акулы появились на Земле 400 млн лет назад — они старше деревьев и колец Сатурна! 🦈",
    "Гриб Армиллярия в Орегоне занимает 9 км² — это самый крупный живой организм. 🍄",
    "Шотландия выбрала своим национальным животным Единорога. 🦄",
    "Эйфелева башня летом становится выше примерно на 15 см из-за жары. 🗼",
    "Пчёлы способны распознавать человеческие лица. 🐝",
    "Мёд никогда не портится: в пирамидах находили съедобный мёд возрастом 3000 лет. 🍯",
    "Сердце синего кита размером с автомобиль. 🐋",
    "Компания Nintendo была основана в 1889 году и производила игральные карты. 🎮",
    "Самый короткий авиаперелёт в мире длится всего 57 секунд. ✈️",
    "Дельфины дают друг другу уникальные имена-свисты. 🐬",
    "Существует более 7500 сортов яблок. 🍎"
];
// Состояние приложения и котёнка
let catSatiety = 50; 
let catMood = "Котёнок в лягушачьей шапочке довольно мурчит!";
let currentBookNumber = 1;
let currentBookT2Number = 1;

let unusedFacts = typeof kittenFactsList !== 'undefined' ? [...kittenFactsList] : [];
let readFactsCount = 0;

// ⚙️ ГЛАВНАЯ ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ РАЗДЕЛОВ
function showMessage(section) {
    const message = document.getElementById("message");

    if (section === 'books') {
        openBooks();
        return;
    }

    if (section === 'trilogy2') {
        showTrilogy2();
        return;
    }

    if (section === 'facts') {
        showRandomFact();
        return;
    }

    if (section === 'letters') {
        openLettersMenu();
        return;
    }

    if (section === 'roseBook') {
        openRoseBook();
        return;
    }

    if (section === 'feed') {
        message.innerHTML = `
            <div class="book-page feed-container">
                <h2>🐟 Покорми Оскаровского котёнка</h2>
                <p id="cat-status-text"><strong>Настроение:</strong> ${catMood}</p>
                
                <div class="progress-bar-container">
                    <div class="progress-bar" id="satiety-bar" style="width: ${catSatiety}%"></div>
                </div>
                <p>Сытость: <span id="satiety-number">${catSatiety}</span>%</p>

                <div class="food-options">
                    <button class="food-item" onclick="feedCat('meat')">🥩 Мясо (+15)</button>
                    <button class="food-item" onclick="feedCat('fish')">🐟 Рыбка (+10)</button>
                    <button class="food-item" onclick="feedCat('strawberry')">🍓 Клубника (+10)</button>
                    <button class="food-item" onclick="feedCat('cherry')">🍒 Вишня (+10)</button>
                    <button class="food-item" onclick="feedCat('milk')">🥛 Молочко (+5)</button>
                    <button class="food-item" onclick="feedCat('treat')">🍬 Вкусняшка (+15)</button>
                </div>
                <br>
                <button onclick="resetMenuMessage()" class="menu-button">← Главное меню</button>
            </div>
        `;
        return;
    }
}

// 🌊 Раздел: Вторая трилогия
function showTrilogy2() {
    const message = document.getElementById("message");

    message.innerHTML = `
        <div style="padding: 10px; text-align: center;">
            <h2 style="margin-bottom: 18px;">🌊 Трилогия 2: Вторая история Оскара</h2>
            <p style="margin-bottom: 20px;">Выбери книгу для чтения:</p>

            <button onclick="openBookT2(1)" class="menu-button">📖 Книга 1: Туда, где заканчиваются дороги</button><br>
            <button onclick="openBookT2(2)" class="menu-button">📖 Книга 2: Море забытых снов</button><br>
            <button onclick="openBookT2(3)" class="menu-button">📖 Книга 3: Последний фонарь</button><br>

            <br>
            <button onclick="resetMenuMessage()" class="menu-button">← Назад в главное меню</button>
        </div>
    `;
    updateKittenDialog("Какую из трех книг 2-й трилогии откроем? 🌊✨");
}

function openBookT2(number) {
    currentBookT2Number = number; 
    const message = document.getElementById("message");
    
    let bookTitle = "";
    let currentBookData = null;

    if (number === 1) {
        bookTitle = "Туда, где заканчиваются дороги";
        currentBookData = typeof book1_t2 !== 'undefined' ? book1_t2 : null;
    } else if (number === 2) {
        bookTitle = "Море забытых снов";
        currentBookData = typeof book2_t2 !== 'undefined' ? book2_t2 : null;
    } else if (number === 3) {
        bookTitle = "Последний фонарь";
        currentBookData = typeof book3_t2 !== 'undefined' ? book3_t2 : null;
    }

    if (!currentBookData || currentBookData.length === 0) {
        message.innerHTML = `
            <div class="book-page">
                <h2>📖 ${bookTitle}</h2>
                <p>Текст этой книги еще на стадии написания...</p>
                <br>
                <button onclick="showTrilogy2()" class="menu-button">← К выбору книг 2-й трилогии</button>
            </div>
        `;
        return;
    }

    let htmlButtons = "";
    currentBookData.forEach((chapter, index) => {
        htmlButtons += `
            <button class="menu-button" onclick="showChapterT2(${index + 1})">
                ${chapter.title}
            </button><br>
        `;
    });

    message.innerHTML = `
        <div class="book-page">
            <h2>📖 ${bookTitle}</h2>
            <br>
            <h3>📚 Оглавление:</h3>
            <br>
            ${htmlButtons}
            <br>
            <button onclick="showTrilogy2()" class="menu-button">← Назад к выбору книг</button>
        </div>
    `;
}

function showChapterT2(chapterNumber) {
    const message = document.getElementById("message");
    
    let currentBookData = [];
    if (currentBookT2Number === 1 && typeof book1_t2 !== 'undefined') currentBookData = book1_t2;
    if (currentBookT2Number === 2 && typeof book2_t2 !== 'undefined') currentBookData = book2_t2;
    if (currentBookT2Number === 3 && typeof book3_t2 !== 'undefined') currentBookData = book3_t2;

    const chapter = currentBookData[chapterNumber - 1];

    if (!chapter) {
        message.innerHTML = `
            <div class="book-page">
                <p>Эта глава не найдена.</p>
                <button onclick="openBookT2(${currentBookT2Number})" class="menu-button">← К оглавлению</button>
            </div>
        `;
        return;
    }

    message.innerHTML = `
        <div class="book-page">
            <h2>📖 ${chapter.title}</h2>
            <br>
            <div class="chapter-text" style="text-align: left; line-height: 1.6;">
                ${chapter.text.replace(/\n/g, "<br>")}
            </div>
            <br><br>
            <button onclick="openBookT2(${currentBookT2Number})" class="menu-button">📚 К оглавлению</button>
        </div>
    `;
}

// 🌹 Раздел: "Сад, который помнит"
function openRoseBook() {
    const message = document.getElementById("message");
    
    if (typeof roseBook === 'undefined' || roseBook.length === 0) {
        message.innerHTML = `<div class="book-page"><p>Данные книги с розами не найдены.</p></div>`;
        return;
    }

    let htmlButtons = "";
    roseBook.forEach((chapter, index) => {
        htmlButtons += `
            <button class="menu-button" onclick="showRoseChapter(${index + 1})">
                ${chapter.title}
            </button><br>
        `;
    });

    message.innerHTML = `
        <div class="book-page">
            <h2>🌹 Сад, который помнит</h2>
            <p><em>История о розах, времени и принцессе Розарии</em></p>
            <br>
            <h3>📚 Оглавление:</h3>
            <br>
            ${htmlButtons}
            <br>
            <button onclick="resetMenuMessage()" class="menu-button">← Назад в меню</button>
        </div>
    `;
    updateKittenDialog("Сад роз ждёт тебя... 🌹✨");
}

function showRoseChapter(chapterNumber) {
    const message = document.getElementById("message");
    const chapter = roseBook[chapterNumber - 1];

    if (!chapter) {
        message.innerHTML = `
            <div class="book-page">
                <p>Глава не найдена.</p>
                <button onclick="openRoseBook()" class="menu-button">← К оглавлению</button>
            </div>
        `;
        return;
    }

    message.innerHTML = `
        <div class="book-page">
            <h2>🌹 ${chapter.title}</h2>
            <br>
            <div class="chapter-text" style="text-align: left; line-height: 1.6;">
                ${chapter.text.replace(/\n/g, "<br>")}
            </div>
            <br><br>
            <button onclick="openRoseBook()" class="menu-button">📚 К оглавлению роз</button>
        </div>
    `;
}

// 💌 Раздел: Письма
function openLettersMenu() {
    const message = document.getElementById("message");

    if (typeof oskarLetters === 'undefined') return;

    let lettersHTML = "";
    oskarLetters.forEach((letter) => {
        lettersHTML += `
            <button class="menu-button" onclick="readLetter(${letter.id})" style="margin-bottom: 8px;">
                ${letter.title}
            </button><br>
        `;
    });

    message.innerHTML = `
        <div class="book-page">
            <h2>💌 Почтовый ящик Оскара</h2>
            <p style="font-size: 15px; color: #d8c9a7; margin-bottom: 15px;">
                <em>Выбери конверт, чтобы прочитать письмо:</em>
            </p>
            ${lettersHTML}
            <br>
            <button onclick="resetMenuMessage()" class="menu-button">← Главное меню</button>
        </div>
    `;
    updateKittenDialog("Тебе пришло письмо! Посмотрим? ✉️✨");
}

function readLetter(id) {
    const message = document.getElementById("message");
    const letter = oskarLetters.find(l => l.id === id);

    if (!letter) return;

    message.innerHTML = `
        <div class="book-page">
            <h2>${letter.title}</h2>
            <p style="font-size: 13px; color: #8bc34a; font-weight: bold; margin-bottom: 15px;">
                📅 ${letter.date}
            </p>
            <div style="background: rgba(255, 255, 255, 0.05); border-left: 4px solid #8bc34a; padding: 18px 20px; border-radius: 8px; margin: 15px 0; text-align: left; white-space: pre-line; font-size: 15px; line-height: 1.7; color: #f5ead0;">
${letter.text}
            </div>
            <br>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <button onclick="openLettersMenu()" class="menu-button">✉️ К спискам писем</button>
                <button onclick="resetMenuMessage()" class="menu-button">← Главное меню</button>
            </div>
        </div>
    `;

    updateKittenDialog("Какое трогательное и важное письмо... 💚");
}

// ✨ Раздел: Факты
function showRandomFact() {
    const message = document.getElementById("message");

    if (typeof kittenFactsList === 'undefined') return;

    if (unusedFacts.length === 0) {
        unusedFacts = [...kittenFactsList];
        readFactsCount = 0;
    }

    const randomIndex = Math.floor(Math.random() * unusedFacts.length);
    const randomFact = unusedFacts.splice(randomIndex, 1)[0];
    readFactsCount++;

    message.innerHTML = `
        <div class="book-page">
            <h2>✨ Интересные факты от котёнка</h2>
            <br>
            <p style="font-size: 14px; color: #8bc34a; font-weight: bold;">
                Прочитано фактов: ${readFactsCount} из ${kittenFactsList.length}
            </p>
            <p style="font-size: 16px; color: #d8c9a7; margin-top: 5px; margin-bottom: 10px;">
                <em>Знаешь ли ты, Оскар?..</em>
            </p>
            
            <div style="background: rgba(255, 255, 255, 0.05); border-left: 4px solid #8bc34a; padding: 18px 20px; border-radius: 8px; margin: 15px 0; text-align: left;">
                <p style="font-size: 17px; line-height: 1.6; color: #f5ead0; margin: 0;">
                    "${randomFact}"
                </p>
            </div>
            
            <br>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <button onclick="showRandomFact()" class="menu-button">🎲 Узнать новый факт!</button>
                <button onclick="resetMenuMessage()" class="menu-button">← Главное меню</button>
            </div>
        </div>
    `;

    updateKittenDialog("Наука — невероятная штука! 🐸✨");
}

// 📚 Раздел: Первая трилогия
function openBooks() {
    const message = document.getElementById("message");

    message.innerHTML = `
        <div style="padding: 10px; text-align: center;">
            <h2 style="margin-bottom: 18px;">📚 Трилогия про Котёнка</h2>
            <p style="margin-bottom: 20px;">Выбери книгу для чтения:</p>

            <button onclick="openBook(1)" class="menu-button">📖 Книга 1: Котёнок в лягушачьей шапочке</button><br>
            <button onclick="openBook(2)" class="menu-button">📖 Книга 2: Эхо далёких миров</button><br>
            <button onclick="openBook(3)" class="menu-button">📖 Книга 3: Дорога домой</button><br>

            <br>
            <button onclick="resetMenuMessage()" class="menu-button">← Назад в меню</button>
        </div>
    `;
}

function openBook(number) {
    currentBookNumber = number; 
    const message = document.getElementById("message");
    
    let bookTitle = "";
    let bookSubtitle = "";
    let currentBookData = null;

    if (number === 1) {
        bookTitle = "Котёнок в лягушачьей шапочке";
        bookSubtitle = "Книга первая";
        currentBookData = typeof book1 !== 'undefined' ? book1 : null;
    } else if (number === 2) {
        bookTitle = "Эхо далёких миров и шёпот звёздных дорог";
        bookSubtitle = "Книга вторая";
        currentBookData = typeof book2 !== 'undefined' ? book2 : null;
    } else if (number === 3) {
        bookTitle = "Дорога домой и звездный свет";
        bookSubtitle = "Книга третья";
        currentBookData = typeof book3 !== 'undefined' ? book3 : null;
    }

    if (!currentBookData || currentBookData.length === 0) {
        message.innerHTML = `
            <div class="book-page">
                <h2>📖 Книга ${number}</h2>
                <p>Файл книги не найден или пуст.</p>
                <br>
                <button onclick="openBooks()" class="menu-button">← К выбору книг</button>
            </div>
        `;
        return;
    }

    let htmlButtons = "";
    currentBookData.forEach((chapter, index) => {
        htmlButtons += `
            <button class="menu-button" onclick="showChapter(${index + 1})">
                ${chapter.title}
            </button><br>
        `;
    });

    message.innerHTML = `
        <div class="book-page">
            <h2>📖 ${bookTitle}</h2>
            <p><em>${bookSubtitle}</em></p>
            <br>
            <h3>📚 Оглавление:</h3>
            <br>
            ${htmlButtons}
            <br>
            <button onclick="openBooks()" class="menu-button">← Назад к выбору книг</button>
        </div>
    `;
}

function showChapter(chapterNumber) {
    const message = document.getElementById("message");
    
    let currentBookData = [];
    if (currentBookNumber === 1 && typeof book1 !== 'undefined') currentBookData = book1;
    if (currentBookNumber === 2 && typeof book2 !== 'undefined') currentBookData = book2;
    if (currentBookNumber === 3 && typeof book3 !== 'undefined') currentBookData = book3;

    const chapter = currentBookData[chapterNumber - 1];

    if (!chapter) {
        message.innerHTML = `
            <div class="book-page">
                <p>Эта глава не найдена.</p>
                <button onclick="openBook(${currentBookNumber})" class="menu-button">← К оглавлению</button>
            </div>
        `;
        return;
    }

    message.innerHTML = `
        <div class="book-page">
            <h2>📖 ${chapter.title}</h2>
            <br>
            <div class="chapter-text" style="text-align: left; line-height: 1.6;">
                ${chapter.text.replace(/\n/g, "<br>")}
            </div>
            <br><br>
            <button onclick="openBook(${currentBookNumber})" class="menu-button">📚 К оглавлению</button>
        </div>
    `;
}

// 🥩 Механика кормления
function feedCat(foodType) {
    let points = 0;
    let phrases = [];

    if (foodType === 'meat') {
        points = 15;
        phrases = ["Сытное мясо! Котёнок полон сил! 🥩", "Ням-ням, отличный выбор, Оскар!", "*довольное урчание*"];
    } else if (foodType === 'fish') {
        points = 10;
        phrases = ["Мнямм! Рыбка была очень вкусной! 🐾", "Хрум-хрум, Оскар, спасибо за рыбку! 🐸", "*довольное чавканье в лягушачьей шапочке*"];
    } else if (foodType === 'strawberry') {
        points = 10;
        phrases = ["Сладкая клубничка! 🍓", "Мурр, какой ароматный перекус!", "Лапкой цап — и нет клубнички!"];
    } else if (foodType === 'cherry') {
        points = 10;
        phrases = ["Сочная вишня! 🍒", "Сладкий хруст! Спасибо за ягодки!"];
    } else if (foodType === 'milk') {
        points = 5;
        phrases = ["Лизь-лизь... Тёплое молочко — то что надо! 🥛", "Усы в молоке, шапочка набок, котёнок доволен! ✨", "Муррр, как вкусно!"];
    } else if (foodType === 'treat') {
        points = 15;
        phrases = ["Ого! Самая элитная вкусняшка! Спасибо! ❤️", "Самый счастливый котёнок на свете! 🍬"];
    }

    catSatiety = Math.min(100, catSatiety + points);
    catMood = phrases[Math.floor(Math.random() * phrases.length)];

    const satietyBar = document.getElementById("satiety-bar");
    const satietyNum = document.getElementById("satiety-number");
    const catStatus = document.getElementById("cat-status-text");

    if (satietyBar) satietyBar.style.width = catSatiety + "%";
    if (satietyNum) satietyNum.innerText = catSatiety;
    if (catStatus) catStatus.innerHTML = `<strong>Настроение:</strong> ${catMood}`;

    updateKittenDialog(catMood);
}

// 💬 Диалоги с котёнком
function talkToCat(topic = 'main') {
    const message = document.getElementById("message");
    let content = "";

    if (topic === 'main') {
        content = `
            <h2>💬 Разговор с котёнком</h2>
            <br>
            <p>О чем ты хочешь поговорить или спросить?</p>
            <br>
            <button onclick="talkToCat('tired')" class="menu-button">😴 «Я устал...»</button><br>
            <button onclick="talkToCat('hug')" class="menu-button">🤗 «Мне нужны виртуальные обнимашки»</button><br>
            <button onclick="talkToCat('secret')" class="menu-button">🤫 «Расскажи мне секрет»</button><br>
            <button onclick="talkToCat('random')" class="menu-button">🎲 Случайная мыслишка котёнка</button><br>
            <br>
            <div style="margin-top: 15px;">
                <input type="text" id="cat-user-input" placeholder="Напиши что-то котёнку..." style="padding: 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.2); color: #fff; width: 70%;">
                <button onclick="sendUserMessageToCat()" class="menu-button" style="display:inline-block; width: auto;">Отправить</button>
            </div>
            <br>
            <button onclick="resetMenuMessage()" class="menu-button">← Главное меню</button>
        `;
    }
    else if (topic === 'tired') {
        updateKittenDialog("Отдыхай, я посижу рядом... 💚");
        content = `
            <h2>💬 Разговор с котёнком</h2>
            <br>
            <p style="font-size: 16px; color: #d8c9a7;"><strong>Оскар:</strong> «Я устал...»</p>
            <br>
            <p style="font-size: 18px; line-height: 1.6; color: #f5ead0; font-style: italic;">
                "Тогда давай никуда не спешить. Оставь все дела за этой дверью, укутайся во что-то уютное, а я посижу рядом и покараулю твои сны. Ты имеешь право просто отдыхать, Оскар. 💚"
            </p>
            <br><br>
            <button onclick="talkToCat('main')" class="menu-button">💬 Ответить котёнку</button>
            <button onclick="resetMenuMessage()" class="menu-button">← Главное меню</button>
        `;
    }
    else if (topic === 'hug') {
        updateKittenDialog("Муррр! Крепко обнимаю тебя лапками! 🐾");
        content = `
            <h2>💬 Разговор с котёнком</h2>
            <br>
            <p style="font-size: 16px; color: #d8c9a7;"><strong>Оскар:</strong> «Мне нужны виртуальные обнимашки»</p>
            <br>
            <p style="font-size: 18px; line-height: 1.6; color: #f5ead0; font-style: italic;">
                "Котёнок молча подбегает, забирается на ручки, уютно сворачивается клубочком и громко-громко мурчит, прижимаясь всем телом. Крепко-крепко обнимаю тебя лапками! Ты моё самое любимое сокровище. 🤗🐾"
            </p>
            <br><br>
            <button onclick="talkToCat('main')" 
            <button onclick="talkToCat('main')" class="menu-button">💬 Ответить котёнку</button>
            <button onclick="resetMenuMessage()" class="menu-button">← Главное меню</button>
        `;
    }
    else if (topic === 'secret') {
        updateKittenDialog("Тссс... Это наш секрет! 😉");
        content = `
            <h2>💬 Разговор с котёнком</h2>
            <br>
            <p style="font-size: 16px; color: #d8c9a7;"><strong>Оскар:</strong> «Расскажи мне какой-нибудь секрет»</p>
            <br>
            <p style="font-size: 18px; line-height: 1.6; color: #f5ead0; font-style: italic;">
                "Секрет такой: где бы я ни прятался — в звёздах, под луной или в этой лягушачьей шапке — мои мысли всегда где-то рядом с тобой. А еще... я считаю, что у тебя самая прекрасная улыбка в мире. Тссс, никому! 😉✨"
            </p>
            <br><br>
            <button onclick="talkToCat('main')" class="menu-button">💬 Ответить котёнку</button>
            <button onclick="resetMenuMessage()" class="menu-button">← Главное меню</button>
        `;
    }
    else if (topic === 'random') {
        const randomPhrases = [
            "Знаешь, Оскар, глядя на ночное небо, я понял одну вещь: звёзды яркие, но ты всё равно ярче! 🌟",
            "Муррр... А давай представим, что мы сидим на облаке и едим самую большую рыбу на свете? 🐟☁️",
            "Если бы у меня было сто жизней, я бы в каждой из них выбирал охранять твой покой и приходить к тебе в гости. 💚",
            "Твоя лягушачья шапка передает тебе огромный привет и говорит, что ты выглядишь потрясающе! 🐸",
            "Спасибо, что создал этот мир для нас. Я очень-очень дорожу тобой, Оскар.",
            "Ходят слухи, что сегодня ночью случится что-то хорошее. Например, кто-то (ты!) улыбнется без причины. ✨"
        ];
        const phrase = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
        updateKittenDialog(phrase);

        content = `
            <h2>💬 Разговор с котёнком</h2>
            <br>
            <p style="font-size: 18px; line-height: 1.6; color: #f5ead0; font-style: italic;">
                "${phrase}"
            </p>
            <br><br>
            <button onclick="talkToCat('random')" class="menu-button">💬 Послушать ещё</button>
            <button onclick="talkToCat('main')" class="menu-button">← Написать/выбрать реплику</button>
            <button onclick="resetMenuMessage()" class="menu-button">← Главное меню</button>
        `;
    }

    message.innerHTML = `<div class="book-page">${content}</div>`;
}

function sendUserMessageToCat() {
    const input = document.getElementById("cat-user-input");
    if (!input || !input.value.trim()) return;

    const userText = input.value.trim();
    const lower = userText.toLowerCase();
    let catReply = "";

    if (lower.includes("привет") || lower.includes("хай") || lower.includes("здравствуй")) {
        catReply = "Привет-привет, Оскар! Я так рад тебя слышать! 🐾";
    } else if (lower.includes("люблю") || lower.includes("обожаю")) {
        catReply = "Я тоже люблю тебя всем своим кошачьим сердцем и всей своей лягушачьей шапкой! ❤️🐸";
    } else if (lower.includes("как дела") || lower.includes("как ты")) {
        catReply = "Всё просто мур-р-р отлично! Особенно теперь, когда ты со мной разговариваешь. ✨";
    } else if (lower.includes("спасибо") || lower.includes("благодарю")) {
        catReply = "Тебе спасибо за то, что ты есть! 💚";
    } else if (lower.includes("груст") || lower.includes("плохо") || lower.includes("тяжело")) {
        catReply = "Прижимайся ко мне скорее... Я рядом, и мы со всем обязательно справимся. 🤗";
    } else if (lower.includes("спокойной ночи") || lower.includes("спн") || lower.includes("спать")) {
        catReply = "Сладких тебе и волшебных снов, Оскар! Пускай звёздочки охраняют твой сон. 🌙⭐";
    } else {
        const defaultReplies = [
            `Ты написал "${userText}"... И котёнок с задумчивым видом мурчит в ответ: ты самый лучший! ✨`,
            `Котёнок внимательно выслушал твои слова и тёрся носом о твою ладонь: "Я всегда на твоей стороне!" 🐾`,
            `Муррр! Каждое твоё слово для меня как самая вкусная рыбка! 🐟`
        ];
        catReply = defaultReplies[Math.floor(Math.random() * defaultReplies.length)];
    }

    updateKittenDialog(catReply);

    const message = document.getElementById("message");
    message.innerHTML = `
        <div class="book-page">
            <h2>💬 Разговор с котёнком</h2>
            <br>
            <p style="font-size: 16px; color: #d8c9a7;"><strong>Оскар:</strong> «${userText}»</p>
            <br>
            <p style="font-size: 18px; line-height: 1.6; color: #f5ead0; font-style: italic;">
                "${catReply}"
            </p>
            <br><br>
            <button onclick="talkToCat('main')" class="menu-button">💬 Написать ещё</button>
            <button onclick="resetMenuMessage()" class="menu-button">← Главное меню</button>
        </div>
    `;
}

// 🛠️ Вспомогательные функции
function updateKittenDialog(text) {
    const dialogBox = document.getElementById("kitten-talk");
    if (dialogBox) {
        dialogBox.innerText = text;
    }
}

function resetMenuMessage() {
    document.body.className = '';
    document.getElementById("message").innerHTML = `
        Нажми на любую карточку — 
        <span>котёнок пока только знакомится с тобой.</span>
    `;
}



// ==========================================
// 💌 БАЗА ДАННЫХ: ПИСЬМА ОСКАРА
// ==========================================
const oskarLetters = [
    {
        id: 1,
        title: "✉️ Письмо 1: Ты чудо, Демиданов Оскар Артурович",
        date: "Первое послание",
        text: `Котенок к сожалению не мой но все же,если ты это видишь значит что все же я смогла доделать сайт , что я успела и смогла сделать котенка в шапочке лягушки,что я не сдалась,хоть ты и показал что я тебе неприятна,что я тебе противна и я это понимаю, но я тебе обещала быть рядом даже если это буду не я, но я хотела создать мини друга для тебя, чтобы ты больше никогда не был один ,я не хочу чтобы ты унижался или переживал из за тварей которые тебя окружают, ты это лучик света который делает этот мир лучше,твоя доброта это блеск надежды для этого мира , поэтому береги её, даже если ты и считаешь себя ужасным человеком , даже если ты думаешь что характер хреновый,помни ты лягушонок который в будущем перевернёт этот мир с ног на голову и я всегда буду гордиться за то что жизнь хоть год подарила с тобой побыть рядом,я тебя всегда буду ценить хоть и говорил забыть тебя но это невозможно, уж прости но это факт,ты не заменим , ты ценен таким которым ты есть и я надеюсь что хоть все так и сложилось то ты будешь счастлив,что найдёшь своё счастье будь то карьера или хобби а в будущем и твоя собственная семья,и всегда,услышал? ВСЕГДА буду рядом,я в отличи от некоторых держу свое обещание,а не как этот человек который сейчас читает это , ты обещал беречь себя а в результате сбил сон ,опять пьешь энергетики ,а про сигарету я молчу ,я тебе ее всегда буду помнить , ты меня знаешь я это могу,до сих пор помню тот блеск в твоих карих глазах , взгляд как у милого котёнка,и сопение как у щеночка ,ты это чудо Демиданов Оскар Артурович,просто чудо ,я хочу чтобы ты был счастлив, именно поэтому это последний мой след в твоей жизни, ты больше меня не увидишь и не услышишь , только ради тебя наверное я и ухожу,живи дальше как будто ничего и не было,не было ни меня,ни моей семьи,ни отношений,странно звучит, пытаюсь тебя подбодрить а сама расплакалась,ладно я отошла от темы, этот проект и все в этом сайте я сделала сама , поэтому за рукожопость будешь знать кого винить ,я написала 10 писем ,пока не знаю каких ,но думаю если ты это читаешь то ты это уже узнал ,может я сделаю их больше или меньше,не знаю пока , но все же скажу в последний раз
Люблю , целую, обнимаю, пух 💋`
    },
    {
        id: 2,
        title: "✉️ Письмо 2: Когда тебе тяжело (25 августа)",
        date: "Второе послание",
        text: `И вот 2 письмо , сегодня (я даже специально посмотрела число) 25 августа,я не знаю,пока я делаю этот подарок для тебя, даже с пониманием что возможно ты не прочитаешь даже и одного письма , даже и главы книги но все равно мне почему-то легче? Я не чувствую той острой туги , снова отошла от темы ,это письмо я хочу написать для того , когда у тебя мысли о самоубийстве, особенно оно мне кажется будет нужным зимой,дада ,я понимаю что это тупо ,что возможно ты скажешь что сам справишься, что я дурочка и должна забыть тебя,но такой блеск луны , такую звёздочку,не забуду никогда, когда тебе плохо ты часто идёшь к ботам или один был ,я не хочу этого, скажем так никогда не поздно что то сделать, правда? Именно Демиданов, никогда не поздно , поэтому я и делала это все ,многие говорили не тратить время зря ,то что ты не оценишь,и я это понимаю но все равно,в душе я знаю что тебе эти слова могут быть теплыми к душе,что ты даже можешь заплакать потому что возможно никто не делал такого поэтому именно я,гадина, это решила сделать, если ты это читаешь и тебе плохо,либо грустно ,либо одиноко ,я хоть и не рядом но верю в тебя,ты не один ,у тебя прекрасный круг общения,хоть и не все ,но они всегда будут любить и ценить тебя,не молчи ,и не держи в себе, любую проблему можно решить разговором,помни это ,просто тебе стоит говорить о своем состоянии, хорошо? Не вреди себе ,не трожь шею ,руки ,ляжки ,и не пей ничего,это не выход ,слишишь ?
Если плохое настроение то лучше погуляй,поиграй ,поговори с кем то ,но трожь себя,и кстати я замечала что сладкое на тебя действует немного как для меня еда,для настроения, поэтому включи себе анимешку или ужастик,но не на ночь,возьми вкусняшки и забей на всех тварей ,если тебе плохо из за зимы то котенок всегда рядом ,как и твои друзья и близкие,это трудное время но ты сильный,и справишься,я верю в тебя!`
    },
    {
        id: 3,
        title: "✉️ Письмо 3: Твои сны и тревожность",
        date: "Про твои сны",
        text: `Третье письмо в студию! Это письмо я хотела бы посвятить твоему сну и снам, потому что после твоих снов настроение часто у тебя не очень, а я этого не люблю, хоть часто и была этому причиной, все равно не хочу чтобы твоё личико было грустным, а то в твоем возрасте ходить грустным часто добавляет морщины 🙄

Я не скажу что в отношениях я не знала как помочь тебе со снами а щас резко поняла, нет, просто после тебя я начала много изучать о тревожности, снах и тд, понять тебя мне даже полезно? Не знаю, правда зная что сейчас тебе трудно и поэтому ты пьёшь кофе то в твоём случае оно перед сном полезно, но это в том случае если ты не пьёшь энергетики и кофе по 5+ раз, понял?

Перед сном прими ванну или сходи в баню как ты любишь, и не пей перед сном все же много кофе/энергетиков, лучше выпей зелёный чай с шоколадкой, не смотри и не играй в какие то ужасы а также после сна на утро, можно попробовать придумать другой конец его, например что тебя не убили, что ты сидел возле сакуры на траве после дождя, и скажи себе в голове, что все, все хорошо, ты в безопасности.`
    },
    {
        id: 4,
        title: "✉️ Письмо 4: С 1 сентября, котёнок!",
        date: "1 сентября",
        text: `С 1 сентября котенок! Я очень хотела бы поздравить тебя лично, провести этот день с тобой и смотреть как ты растёшь с школьника уже в студенты но ничего, я хотела бы сказать чтобы ты не переживал, что не будет так как в школе было, ты лучше всех у меня и я уверена что в колледже ты найдешь кучу новых знакомств, новых друзей, откроешь что то новое и интересное для себя.

Смотря на то как ты любишь готовить, как вкусно ты это делаешь то думаю, там тебе и место, ты многого в этом мире добьешься, главное не опускай руки и не закрывайся, ты прекрасен Демиданов!

Ты добрый, милый, отзывчивый, иногда вредный но все же, верный, на тебя можно положиться, не слушай никого кто говорит иначе, не теряй тот огонёк, свою доброту, и свои ямочки также как и свой огонёк в глазах.`
    },
    {
        id: 5,
        title: "✉️ Письмо 5: Мой пиздежь ",
        date: "24 сентября",
        text: `Я не знаю какая сама идея этого всего, сегодня 24 сентября, прошёл месяц почти с прошлого письма, раньше если я думала что ты оценишь подарок и это все ,что будешь рад ,то по правде говоря сейчас куча сомнений,куча вопросов зачем,для чего ,идея сделать хоть немного приятно она есть ,и это главное,просто не знать реакцию на подарок для меня страшно,как будто пытка,но все равно,если тебе хоть немного понравится,ты мне скажешь,я впервые что то такое делаю, поэтому как минимум я уже умничка,пхах ,(знал бы ты как странно это сейчас выглядит,я как будто с ума сошла и теперь разговариваю сама с собой) Но все же ,то что у меня не все дома,это факт, вчера я поссорилась в боте и чуть сердце не остановилось ,я так скучаю что сил нету ,но я же серьезный человек дап 😌 Поэтому конечно же не пишу,спиздела , ДАП`
    },
    {
        id: 6,
        title: "✉️ Письмо 6: День до дня рождения",
        date: "16 октября",
        text: `
А завтра твой день рождения 🙃 Старичок) Лягушонок,что я могу сказать,этот проект я делаю с августа и за это время я кучу раз думала и не только я что ты не оценишь ,что не примешь и тд , но когда ты пел мне песню на день рождения,все равно я поняла что ты не скотина уж настолько чтобы не принять мой подарок 🙄 Шутка , шутка) Я сюда вложила кучу времени,сил , эмоций,были случаи что я писала эти письма и ревела как белуга,а были что смеялась как конь ,но все равно лягушонок ,я до последнего боюсь что тебе не понравится и что ты не отреагируешь так как в отношениях,НО ТАК И НЕ НАДО ,дай бог хоть сейчас плакать не будешь ,придурка кусок ,отвечаю . Ты для меня безумно ценный человек,хоть я и не держусь за тебя как раньше,но и не скажу что отпустила ,это как золотая середина,ты ахуенный парень , человек которого ценить я буду до тех пор пока моё сердце бьётся,ты безумно красивый, Добрый, сексуальный (я тебе еще отомщу за то что дразнился ,СПАТЬ ТАК НЕ КОМЕЛЬФО),милый, заботливый, смешной, общительный, отзывчивый,и еще 1000 слов которые я говорила,говорю и буду говорить,я не знаю будешь ли ты это все читать но я просто хочу сказать что даже если я твоя бывшая все равно я рядом,была и буду,возле такого хорошего маленького принца )
`
    },
    {
        id: 7,
        title: "✉️ Письмо 7: Благодарность",
        date: "16 октября",
        text: `
Я дописала книгу) Пхаха но сейчас не об этом это одни из последних писем , возможно и последнее,и в нем я хочу поблагодарить тебя, поблагодарить за то что ты был и есть , за то что поддерживал ,за то что ты любил и дал ту любовь которую не смогла получить годами и возможно не получаю ,но с тобой я стала более опытнее? Умнее,я выросла с тобой и я очень рада что встретила именно тебя,прости что все испортила,что не смогла дать тебе то что ты хотел, возможно все было бы хорошо ,и я очень жалею что все так вышло ,но возможно так и лучше, ты живёшь так как возможно и хотел ,а если сейчас и не все прекрасно то в будущем,ты обязательно добьешься высот ,и будешь жить счастливо с своей семьёй,А ЕСЛИ НЕТ ,ТО Я ТЕБЯ КУСАТЬ БУДУ ,больно и сильно 🙄 Не смей забывать кто ты ,ты последний из рода Демидановых ,ты Оскар Артурович который поднялся из такого говна что и вспоминать страшно ,и другие умерли бы уже на стадии школы,и всего того ужаса ,ты маленький принц и супергерой ,ты лягушонок и просто лучик света) И так будет всегда`
    }
  ];
    // ==========================================
// 🌹 БАЗА ДАННЫХ: САД, КОТОРЫЙ ПОМНИТ (32 ГЛАВЫ)
// ==========================================
const roseBook = [
    { title: "Глава 1: Элиар", text: `

Розария не знала, что спит.

Она просто открыла глаза.

Первое, что она почувствовала, — холод.

Не тот холод, который пробирается под одеяло зимним утром, а другой — влажный, ночной, пахнущий землёй и травой. Он касался босых ступней, забирался под тонкую ткань платья и заставлял её невольно поёжиться.

Розария посмотрела вниз.

На ней было светлое платье, которого она никогда прежде не видела.

Она нахмурилась.

— Что за...

Голос прозвучал слишком тихо.

Розария подняла голову.

Перед ней простирался сад.

Огромный.

Настолько огромный, что его дальний край терялся в серебристой дымке. Деревья стояли вдоль извилистых дорожек, их ветви переплетались высоко над головой, образуя почти сплошной свод.

А между ними росли розы.

Сотни.

Нет.

Тысячи.

Красные, белые, розовые, золотистые.

Некоторые были совсем маленькими, едва распустившимися бутонами. Другие тяжело склонялись под собственным весом.

Но были и такие, на которые Розария смотрела с непонятным беспокойством.

Увядшие цветы.

Только выглядели они странно.

Один лепесток падал на землю.

Розария моргнула.

Лепесток снова оказался на цветке.

Она нахмурилась.

— Ладно...

Она оглянулась.

Никого.

Ни слуг.

Ни стражников.

Ни придворных.

Ни даже птиц.

Только ветер.

И луна.

Розария подняла глаза.

Луна казалась огромной. Она висела так низко, что казалось — протяни руку, и можно будет коснуться её кончиками пальцев.

Но страннее всего было другое.

Она не помнила, как сюда попала.

Розария попыталась вспомнить.

Дворец.

Своя комната.

Кровать.

Вечер.

А потом...

Ничего.

Она сделала шаг назад.

Под ногой хрустнула ветка.

Звук разнёсся по саду и почему-то показался слишком громким.

— Есть кто-нибудь?

Ответа не последовало.

Розария сжала пальцы.

Она могла бы испугаться.

Наверное, нормальный человек испугался бы.

Но страх у Розарии почти всегда сначала превращался в раздражение.

Если она не понимала, что происходит, ей хотелось разобраться.

Поэтому вместо того чтобы искать выход, она пошла вперёд.

Дорожка была выложена светлыми камнями. Некоторые из них покрывал мох, а между другими пробивалась маленькая трава.

Через несколько шагов Розария заметила небольшую табличку.

На ней было написано одно слово.

Элиар.

Розария остановилась.

Она прочитала ещё раз.

— Элиар...

Почему это слово показалось ей знакомым?

Она не могла вспомнить.

Розария провела пальцами по буквам.

Камень оказался тёплым.

Слишком тёплым для ночи.

Она быстро убрала руку.

Где-то впереди раздался тихий звон.

Розария подняла голову.

Снова.

Тонкий металлический звук.

Будто где-то далеко ударили в маленький колокольчик.

Она пошла на него.

С каждым шагом сад становился всё тише.

А потом Розария заметила странную вещь.

Она только что прошла мимо одной и той же белой розы.

Она была уверена.

Розария остановилась.

Посмотрела назад.

Дорожка уходила вдаль.

Она снова посмотрела на розу.

— Я уже здесь была.

Ей стало не по себе.

Розария развернулась и пошла дальше.

Через минуту роза снова оказалась перед ней.

Только теперь она была красной.

Розария застыла.

— Нет.

Она подошла ближе.

Та же форма куста.

Те же листья.

Но цвет изменился.

Она протянула руку.

И едва коснулась лепестка, как услышала шёпот.

Не голос.

Не слова.

Просто ощущение чужого присутствия.

Розария резко обернулась.

Пусто.

Тогда она впервые подумала:

«Мне нужно проснуться».

Но ничего не произошло.

Она закрыла глаза.

Открыла.

Сад остался.

Розария выдохнула.

— Отлично.

Она скрестила руки.

— Значит, это не работает.

Где-то впереди снова прозвенел колокольчик.

На этот раз ближе.

Розария пошла дальше.

И тогда деревья расступились.

Перед ней оказался небольшой круглый участок сада.

В центре стоял старый фонтан.

Вода в нём не двигалась.

Она была совершенно неподвижной, словно стекло.

Розария подошла ближе.

И увидела в воде своё отражение.

Но отражение улыбалось.

Розария отшатнулась.

Её собственное лицо в воде продолжало смотреть на неё.

А потом отражение медленно подняло руку.

Розария не двигалась.
Она смотрела, как её отражение касается поверхности воды.

По воде расходятся круги.

И вместо собственного лица она увидела...

чужое.

Мальчик.

Тёмные волосы.

Спокойный взгляд.

Она не знала его.

Но почему-то сердце болезненно сжалось.

Розария моргнула.

Вода снова стала обычной.

Она долго смотрела на своё отражение.

— Кто ты?..

Ответа не было.

Только ветер прошёлся по розам.

И где-то совсем рядом тихо скрипнула дверь.

Розария подняла голову.

В глубине сада, за фонтаном, стояла дверь.

Просто дверь.

Без стены.

Без дома.

Без забора.

Она стояла посреди сада, словно всегда была здесь.

Розария медленно подошла.

Чем ближе она становилась, тем сильнее ощущала странное знакомое чувство.

Будто уже видела её.

Будто когда-то давно держала руку на этой ручке.

Будто...

знала, что находится по ту сторону.

Розария остановилась в нескольких шагах.

На земле что-то блеснуло.

Она посмотрела вниз.

Ключ.

Маленький.

Старый.

Серебристый.

Розария подняла его.

И в ту же секунду сад изменился.

Все розы одновременно качнулись от ветра.

Хотя ветра не было.

Луна скрылась за облаками.

Вдалеке снова прозвенел колокольчик.

Один раз.

Второй.

Третий.

Розария посмотрела на ключ.

На его поверхности был выгравирован маленький символ.

Она не знала, что он означал.

Но почему-то он показался ей знакомым.

Очень знакомым.

Розария подошла к двери.

В центре замка находилось отверстие.

Она медленно вставила ключ.

Подошёл.

Она повернула его.

Щёлк.

Дверь слегка приоткрылась.

Из-за неё потянуло холодом.

Розария замерла.

За дверью не было комнаты.

Там была темнота.

Такая глубокая, что лунный свет не мог проникнуть внутрь.

Розария протянула руку.

Ещё немного.

Ещё один шаг.

И вдруг позади неё раздался голос.

Тихий.

Мужской.

Совсем близко.

— Не открывай.

Розария резко обернулась.

На другом конце дорожки стоял человек.

Высокий силуэт.

Лица она не видела.

Только глаза — две едва заметные точки света в темноте.

Розария сжала ключ.

— Кто ты?

Он молчал.

— Я спросила, кто ты.

Человек сделал шаг вперёд.

— Ты знаешь.

— Нет.

Ещё шаг.

Розария почему-то не могла отвести взгляд.

— Пока нет, — произнёс он.

У неё перехватило дыхание.

— Что это значит?

Он остановился.

И посмотрел прямо на неё.

— Ты снова опоздала.

Розария нахмурилась.

— Мы знакомы?

Ответа не было.

Она сделала шаг к нему.

— Подожди!

Он исчез.

Просто исчез.

Розария побежала вперёд.

— Эй!

Но дорожка оказалась пустой.

Она обернулась.

Дверь всё ещё стояла позади.

Открытая.

И из темноты за ней доносился тихий звук.

Будто где-то очень далеко тикали часы.

Розария медленно повернулась обратно.

Сделала шаг.

Ещё один.

Подняла руку к двери.

И в этот момент часы пробили тринадцать раз.

Раз.

Два.

Три.

Розария застыла.

Четыре.

Пять.

Шесть.

Она не понимала, почему считает.

Семь.

Восемь.

Девять.

Сердце забилось быстрее.

Десять.

Одиннадцать.

Двенадцать.

И...

Тринадцать.

Дверь распахнулась.

Белый свет ударил ей в глаза.

Розария вскрикнула —

и проснулась.

Она резко села на кровати.

Несколько секунд не могла понять, где находится.

Знакомая комната.

Тёмные шторы.

Лунный свет на полу.

Тишина.

Она тяжело дышала.

Провела рукой по лицу.

— Сон...

Всего лишь сон.

Розария закрыла глаза.

Попыталась вспомнить последнюю часть.

Сад.

Дверь.

Человек.

Ты снова опоздала.

Она нахмурилась.

Почему эта фраза звучала так, будто она уже слышала её раньше?

Розария посмотрела на прикроватную тумбочку.

И замерла.

На белой ткани возле её руки лежал предмет.

Серебристый.

Маленький.

Старый.

Розария медленно протянула руку.

Коснулась его пальцами.

Ключ был холодным.

Точно таким, каким был во сне.

На его поверхности был тот же символ.

А на самом конце, где во сне она этого не заметила, была выгравирована одна короткая надпись.

Элиар.
 ` },
    { title: "Глава 2: Не сон", 
    text: `Розария ещё долго не двигалась.

Она сидела на кровати, сжимая ключ в ладони, и смотрела на него так, словно надеялась, что тот исчезнет, если смотреть достаточно долго.

Но он не исчезал.

Серебро холодило кожу.

На нём всё ещё была выгравирована роза.

А ниже — слово.

Элиар.

Розария провела большим пальцем по буквам.

— Этого не может быть...

Она сказала это вслух, будто комнате требовалось объяснение.

Комната, конечно, ничего не ответила.

За окном медленно светлело небо.

Ночь отступала, уступая место рассвету. На крышах дворца лежал тонкий слой тумана, а первые солнечные лучи едва касались башен Астеры.

Розария снова посмотрела на ключ.

В памяти вспыхнуло лицо из воды.

Она не знала этого человека.

Не знала его имени.

Не знала, почему при одном воспоминании о нём внутри становилось странно спокойно, а при другом — хотелось немедленно найти его и потребовать объяснений.

И уж точно не знала, почему его голос казался знакомым.

Ты снова опоздала.

Розария нахмурилась.

— Снова?

Она встала.

Подошла к зеркалу.

Несколько секунд просто смотрела на своё отражение.

Растрёпанные волосы, сонные глаза, ночная рубашка.

Совершенно обычная девушка.

Никакая не путешественница между временами.

Никакая не избранная.

Просто Розария.

Принцесса Астеры.

Она подняла ключ.

Отражение подняло ключ вместе с ней.

Настоящее отражение.

Не то, что было в фонтане.

Розария поморщилась.

— Это был сон.

Она опустила руку.

— Просто очень странный сон.

Сказав это, она почувствовала себя немного лучше.

Всего на несколько секунд.

Потом посмотрела на ключ.

И перестала чувствовать себя лучше.

Розария открыла прикроватную тумбочку и положила его внутрь.

Закрыла.

Через пару секунд снова открыла.

Ключ лежал там же.

Она вытащила его.

— Отлично.

Розария вздохнула.

— Просто отлично.


---

К завтраку она спустилась позже обычного.

Это было уже достаточно подозрительно.

Розария никогда не любила ранние подъёмы, но обычно умудрялась хотя бы выглядеть так, будто проснулась вовремя.

Сегодня же она даже не пыталась.

Эсмерия встретила её у лестницы.

— Вы не спали?

Розария посмотрела на неё.

— Почему ты решила, что не спала?

— Потому что вы сейчас смотрите на стену так, будто она вас оскорбила.

Розария невольно усмехнулась.

— Может, она действительно оскорбила.

— Тогда прошу передать стене мои извинения.

— Поздно. Я уже затаила обиду.

Эсмерия улыбнулась.

Это было почти обычное утро.

Почти.

Розария продолжила идти.

— Ты странно себя ведёшь, — заметила Эсмерия.

— Я всегда странно себя веду.

— Это правда.

— Спасибо.

— Не за что.

Они дошли до дверей столовой.

Розария остановилась.

Ей вдруг стало страшно.

Она не знала почему.

Просто на секунду ей показалось, что стоит войти внутрь — и всё снова станет обычным.

А ей почему-то совсем не хотелось, чтобы всё становилось обычным.

Потому что тогда пришлось бы признать:

Элиара не существует.

Она сжала пальцы.

Ключ лежал во внутреннем кармане платья.

Розария чувствовала его вес.

— Ваше высочество?

Она вздрогнула.

— Что?

— Вы идёте?

— Да.

Она открыла дверь.


---

За столом уже сидела Люстерия.

Королева держала чашку чая обеими руками и просматривала какие-то документы.

Напротив неё сидел Артариан.

Он что-то говорил, но Розария услышала только конец:

— ...поэтому я думаю, что к вечеру это уже будет решено.

— Хорошо, — ответила Люстерия.

Рядом сидела Альбиана.

Увидев Розарию, она сразу оживилась.

— Наконец-то!

— Я не опоздала.

— Ты опоздала.

— На сколько?

Альбиана посмотрела на часы.

— На двадцать минут.

Розария села рядом.

— Значит, не сильно.

— Мама сказала, что если ты не придёшь через пять минут, тебя будут искать.

Розария посмотрела на Люстерию.

— Правда?

Люстерия подняла глаза от документов.

— Возможно.

— Я была в комнате.

— Я знаю.

— Тогда почему меня нужно было искать?

— Потому что ты иногда можешь находиться в своей комнате и при этом каким-то образом оказываться совершенно в другом месте.

Розария замерла.

Сердце неприятно кольнуло.

Она опустила взгляд.

Совершенно в другом месте.

Эти слова почему-то отозвались слишком сильно.

Альбиана ничего не заметила.

— Ты сегодня какая-то тихая.

— Я всегда тихая.

Все за столом посмотрели на неё.

Розария подняла бровь.

— Что?

Артариан усмехнулся.

— Ничего.

— Я вообще-то могу быть тихой.

— Конечно, — сказала Люстерия.

— Вот.

— Когда спишь, — добавил Артариан.

Альбиана засмеялась.

Розария закатила глаза.

— Я пришла сюда завтракать, а не подвергаться семейным нападкам.

— Это семейная традиция, — невозмутимо ответила Люстерия.

На несколько минут всё стало обычным.

Настолько обычным, что Розария почти забыла о сне.

Почти.

Пока Альбиана не потянулась за вазой с фруктами.

Её рука задела маленькую серебряную подвеску, лежавшую возле Розарии.

Ключ выглянул из кармана.

Альбиана остановилась.

— Что это?

Розария мгновенно накрыла ключ ладонью.

— Ничего.

Альбиана нахмурилась.

— Это не похоже на ничего.

— Просто ключ.

— От чего?

— От двери.

— Какой?

— Обычной.

Альбиана прищурилась.

— Ты врёшь.

Розария замолчала.

Сестра знала её слишком хорошо.

— Потом расскажу.

Альбиана ещё несколько секунд смотрела на неё, но спорить не стала.

— Ладно.

Розария почувствовала облегчение.

Однако краем глаза заметила, что Люстерия тоже смотрит на её руку.

Всего секунду.

Потом королева снова опустила взгляд на документы.

Розария нахмурилась.

Она заметила?

Или показалось?


---

После завтрака у Розарии была первая обязанность на этот день.

Урок истории.

Она ненавидела историю.

Не потому, что не любила прошлое.

Наоборот.

Её раздражало, что в учебниках прошлое всегда выглядело слишком аккуратным.

Короли приходили к власти.

Войны начинались.

Войны заканчивались.

Границы менялись.

Кто-то становился героем.

Кто-то — предателем.

Всё было разложено по годам и датам.

Но Розария всегда думала:

а что если всё было не так?

Сегодня этот вопрос особенно не давал ей покоя.

Учитель рассказывал о старых королевских династиях, когда Розария вдруг услышала:

— ...в четыреста двадцать третьем году король Эдриан Великий приказал закрыть западную часть старого дворца.

Розария подняла голову.

— Почему?

Учитель посмотрел на неё.

— Простите?

— Почему её закрыли?

Он немного помолчал.

— Из-за аварийного состояния здания.

— А почему её так и не восстановили?

— Потому что королевская семья решила оставить эту часть дворца закрытой.

— Почему?

Учитель улыбнулся.

— Ваше высочество, история не всегда отвечает на все вопросы.

Розария скрестила руки.

— Тогда это плохая история.

Кто-то тихо засмеялся.

Учитель вздохнул.

— Возможно.

Розария снова посмотрела в окно.

Западное крыло было видно отсюда.

Старые башни скрывались за деревьями.

Она смотрела на них несколько секунд.

И вдруг увидела дверь.

Не настоящую.

Ей просто показалось.

На мгновение среди деревьев возникла та самая дверь из сна.

Розария моргнула.

Её не было.

Она закрыла глаза.

Открыла.

Обычная стена.

— Ваше высочество?

Розария вздрогнула.

— Да?

— Вы слушаете?

— Конечно.

— Что я только что сказал?

Пауза.

Розария посмотрела на него.

— Что история не всегда отвечает на все вопросы?

В классе снова раздался смех.

Учитель покачал головой.

— Именно.

Но Розария уже не улыбалась.

Она снова посмотрела на западное крыло.

Дверь исчезла.

Но она точно её видела.


---

После урока её догнал Вайан.

— Ты сегодня странная.

— Все сегодня решили мне это сказать?

— Значит, действительно странная.

— Спасибо.

— Всегда пожалуйста.

Он шёл рядом, засунув руки в карманы.

Они знали друг друга почти всю жизнь.

Поэтому между ними никогда не было необходимости заполнять тишину.

Некоторое время они просто шли.

— Тебе приснилось что-то? — вдруг спросил Вайан.

Розария остановилась.

— Почему ты спрашиваешь?

— Потому что ты во сне выглядишь примерно так же.

— А ты откуда знаешь, как я выгляжу во сне?

— Не знаю.

Он пожал плечами.

— Просто предположил.

Розария внимательно посмотрела на него.

— Ты сегодня тоже странный.

— Отлично. Значит, мы оба странные.

Она улыбнулась.

Но улыбка быстро исчезла.

— Вайан.

— М?

— Ты когда-нибудь слышал слово «Элиар»?

Он задумался.

— Нет.

— Совсем?

— Совсем.

— А если я скажу, что это название сада?

Вайан посмотрел на неё.

— Тогда я скажу, что ты опять нашла себе загадку.

Розария тихо рассмеялась.

— Наверное.

— И ты собираешься её разгадать?

Она посмотрела на него.

На секунду захотелось рассказать всё.

Про сон.

Про воду.

Про Странника.

Про ключ.

Но что-то остановило её.

Не страх.

Скорее странное ощущение, будто она не должна пока никому говорить.

— Не знаю, — ответила Розария.

Вайан кивнул.

— Когда узнаешь — расскажешь.

Она посмотрела ему вслед, когда он пошёл дальше.

И впервые за всё утро почувствовала себя немного спокойнее.


---

В библиотеку Розария пришла ближе к вечеру.

Она никого не предупредила.

Даже Эсмерию.

Внутри пахло старой бумагой и деревом.

Высокие окна пропускали золотистый свет, который ложился на пол длинными полосами.

Розария подошла к стеллажам.

Она не знала, с чего начать.

Поэтому начала с очевидного.

Элиар.

Ничего.

Она проверила снова.

Ничего.

Другой каталог.

Снова ничего.

— Серьёзно?

Розария раздражённо закрыла книгу.

— Ты не можешь просто не существовать.

Она взяла другую.

Сады Астеры.

Несколько страниц.

Королевские сады.

Старые оранжереи.

Сады соседних земель.

Элиара нет.

Розария достала третью книгу.

Потом четвёртую.

Пятую.

Через час вокруг неё образовалась небольшая гора книг.

Она устало опустилась на пол.

— Прекрасно.

Ключ в кармане неприятно напомнил о себе.

Розария достала его.

Положила на раскрытую книгу.

Роза на ключе оказалась прямо напротив изображения цветка.

Розария нахмурилась.

Это была роза.

Но не обычная.

Лепестки были длиннее, чем у известных ей сортов, а в центре цветка виднелся маленький серебристый круг.

Она перевернула страницу.

Под рисунком было написано:

«Роза Элиара».

Розария перестала дышать.

Ниже было всего несколько строк.

Она начала читать.

Но на третьей строке страница была вырвана.

Она быстро перевернула её.

Следующая страница тоже была вырвана.

И следующая.

Розария поднялась.

— Кто-то специально это сделал.

Она посмотрела на обложку.

«Цветы старой Астеры».

Автор не указан.

Год издания отсутствовал.

Розария перелистнула книгу назад.

И увидела на внутренней стороне обложки маленькую запись.

Сделанную от руки.

Она не могла разобрать весь текст.

Но одно слово было видно совершенно отчётливо:

Элена.

Розария замерла.

Бабушка.

Она посмотрела на книгу.

Потом на ключ.

Потом снова на имя.

И вдруг вспомнила фотографию, которую когда-то видела в семейном альбоме.

Элена стояла возле огромных кустов роз.

Тогда Розария никогда не обращала внимания на фон.

Но сейчас...

Она вспомнила.

Там был фонтан.

И за ним — дверь.

Та самая.

Розария закрыла книгу.

Её сердце забилось быстрее.

Теперь она знала, что делать.

Она должна была найти семейный альбом.

А после этого —

поговорить с Эленой.

Розария спрятала ключ обратно в карман.

Подняла книгу.

И, прежде чем уйти, ещё раз посмотрела на пустые страницы.

Ей показалось, что где-то между ними осталась чужая фраза.

Не написанная чернилами.

А будто оставленная самой книгой.

Она не могла её прочитать.

Но почему-то была уверена:

Элиар уже знал, что она придёт.
` },
    { title: "Глава 3: Фотография", text: `
К вечеру дворец становился совсем другим.

Днём он был шумным: шаги слуг, голоса придворных, открывающиеся двери, шелест платьев, звон посуды и бесконечные разговоры, которые Розария старалась не слушать.

Но после заката всё постепенно стихало.

Словно сам дворец уставал от людей.

Розария любила это время.

Она шла по длинному коридору, прижимая к груди книгу из библиотеки.

«Цветы старой Астеры».

Она так и не смогла решить, зачем взяла её с собой.

Наверное, потому что не хотела оставлять её в библиотеке.

Слишком странной она казалась.

И слишком сильно её беспокоило имя Элены на внутренней стороне обложки.

Розария остановилась у высокого окна.

За стеклом темнел сад.

Обычный дворцовый сад.

Она знала его с детства.

Знала каждую дорожку, каждый фонтан, каждое дерево.

И всё же сейчас ей показалось, что среди деревьев что-то мелькнуло.

Розария прищурилась.

Ничего.

Она коснулась лбом холодного стекла.

— Я начинаю сходить с ума.

— Это ты сама с собой разговариваешь?

Розария вздрогнула.

Позади стояла Альбиана.

— Ты меня напугала!

— Я просто подошла.

— Именно. Очень тихо.

Альбиана посмотрела на книгу.

— Что это?

— Книга.

— Я вижу.

— Тогда зачем спрашиваешь?

— Потому что ты уже час ходишь с ней по дворцу.

Розария посмотрела на обложку.

— Я кое-что ищу.

— Что?

Она хотела ответить.

Но передумала.

— Цветы.

Альбиана несколько секунд молчала.

— Ты искала цветы в библиотеке?

— Да.

— Вечером?

— Да.

— После того как всю жизнь говорила, что терпеть не можешь ботанику?

— Я изменилась.

Альбиана рассмеялась.

— Ты ужасно врёшь.

Розария улыбнулась.

— Знаю.

Они продолжили идти вместе.

— Можно посмотреть?

— Нет.

— Почему?

— Потому что я ещё сама не разобралась.

Альбиана задумалась.

— Ты можешь рассказать мне.

Розария посмотрела на сестру.

Вот это было сложно.

Альбиана была младше.

Она не должна была знать о странном сне.

О ключе.

О двери.

О человеке в воде.

Розария сама ещё ничего не понимала.

— Я расскажу, когда разберусь.

Альбиана кивнула.

— Хорошо.

И уже через несколько шагов добавила:

— Но если ты найдёшь сокровища, я хочу половину.

Розария рассмеялась.

— Договорились.

— Даже если там драгоценности?

— Особенно если драгоценности.

Альбиана убежала вперёд.

Розария осталась одна.

Она улыбалась ещё несколько секунд.

А потом снова вспомнила Элиар.

Улыбка исчезла.


---

Семейный архив находился в старой части дворца.

Туда Розария почти никогда не заходила.

Комната была небольшой, но стены от пола до потолка занимали шкафы.

На полках стояли коробки, книги, письма и альбомы.

Некоторые были настолько старыми, что кожа на переплётах потрескалась.

Розария поставила книгу на стол.

Огляделась.

Она не знала, где искать.

В детстве здесь было проще.

Она просто брала первый попавшийся альбом и рассматривала фотографии.

Теперь же каждый шкаф казался частью огромной головоломки.

Она начала с самых старых.

Первый альбом.

Ничего.

Второй.

Портреты королей.

Третий.

Праздники.

Четвёртый.

Семейные поездки.

Пятый...

Розария замерла.

На обложке было написано:

«Семья Люстерии. Личные фотографии.»

Она открыла его.

Первые страницы были посвящены её матери.

Люстерия в детстве.

Люстерия рядом с Эльдарисом.

Люстерия и Элена.

Розария перелистывала страницы всё быстрее.

Она даже не заметила, как начала улыбаться.

Вот Элена держит маленькую Люстерию за руку.

Вот Эльдарис, ещё совсем юный, стоит рядом.

Вот трое смеются возле фонтана.

На одной фотографии Элена смотрит в камеру с таким выражением лица, будто фотограф ей чем-то задолжал.

Розария тихо рассмеялась.

— Вот откуда у мамы характер.

Она перелистнула страницу.

И улыбка исчезла.

Фотография была чёрно-белой.

Элена стояла среди цветов.

Молодая.

Совсем молодая.

На ней было светлое платье, а волосы были длиннее, чем Розария привыкла видеть на старых портретах.

За ней...

Розария перестала дышать.

Сад.

Она медленно приблизила фотографию к лицу.

Розы.

Дорожка.

Фонтан.

И дальше...

Дверь.

Та самая дверь.

Розария почувствовала, как холодеют пальцы.

Она достала из кармана ключ.

Посмотрела на него.

Потом снова на фотографию.

Роза на ключе.

Роза на фотографии.

Одинаковые.

— Нет...

Она перевернула фотографию.

На обороте стояла дата.

17 октября.

Год был почти стёрт, но цифры всё ещё можно было различить.

Гораздо раньше её рождения.

Розария села.

Она несколько секунд просто смотрела на фотографию.

Потом заметила ещё одну вещь.

Элена стояла не одна.

Вернее...

рядом с ней должен был кто-то стоять.

По краю фотографии сохранился кусок чужого плеча.

Тёмная ткань.

Часть руки.

И маленький серебряный кулон.

В форме...

Розария приблизила фотографию.

Розы.

Она резко отодвинулась.

Ключ выпал из её руки.

Звон металла разнёсся по комнате.

Розария посмотрела на него.

Потом снова на фотографию.

Кто был рядом с Эленой?

Почему его вырезали?

И почему у него был такой же символ?

Она осторожно провела пальцем по краю фотографии.

Кто-то сделал это очень аккуратно.

Ножом.

И давно.

Очень давно.

Розария перевернула фотографию ещё раз.

Под датой была маленькая надпись.

Почерк она узнала сразу.

Элена.

Всего два слова:

 «Последний раз.»



Розария почувствовала, как по спине пробежал холод.

Последний раз.

Что это означало?

Последний раз в саду?

Последний раз с этим человеком?

Последний раз перед чем-то?

Она взяла книгу из библиотеки.

Открыла страницу с розой Элиара.

И приложила фотографию рядом.

Совпадало.

Слишком многое совпадало.

Розария закрыла глаза.

Она снова увидела воду.

Своё отражение.

Чужое лицо.

Странника.

Ты снова опоздала.

Она открыла глаза.

— Кто ты?

В комнате было тихо.

Розария посмотрела на фотографию.

— И кто был рядом с моей бабушкой?

Ответа не последовало.

Она собрала фотографии и уже собиралась убрать их обратно, когда заметила на дне коробки небольшой конверт.

Он был спрятан под альбомом.

На нём было написано:

«Розарии».

Она застыла.

Почерк был не Элены.

Розария медленно взяла конверт.

Повернула его.

Он был запечатан.

Она провела пальцем по краю.

Но прежде чем открыть, остановилась.

Ей стало страшно.

Не так, как в Элиаре.

По-другому.

Потому что теперь это было связано с её настоящей жизнью.

С её семьёй.

С её прошлым.

И почему-то она была уверена:

этот конверт не должен был оказаться здесь.

Розария положила его обратно.

— Сначала Элена.

Она закрыла коробку.

Взяла фотографию.

И вдруг услышала звук.

Тихий.

Едва различимый.

Тинь.

Розария замерла.

Тот самый звук.

Как в саду.

Она медленно повернулась.

За её спиной никого не было.

Только старое окно.

Тёмное стекло.

И её отражение.

Розария смотрела на него.

Отражение смотрело в ответ.

Она сделала шаг назад.

И тогда отражение...

улыбнулось.

Розария резко обернулась.

Ничего.

Она снова посмотрела на стекло.

Обычное отражение.

Без улыбки.

Она схватила фотографию и книгу.

Ключ.

И вышла из комнаты.

Дверь закрылась.

Но уже в коридоре Розария услышала за спиной тихий шёпот.

Неизвестно откуда.

Неизвестно чей.

> — Некоторые фотографии лучше не рассматривать слишком долго.



Розария остановилась.

Медленно повернулась.

Коридор был пуст.

Она прижала фотографию к груди.

И впервые за всё это время поняла одну простую вещь:

Элиар не остался во сне.

Он начал приходить за ней в Астеру.
` },
    { title: "Глава 4: То, что помнит Элена", text: `

Розария нашла Элену в зимнем саду.

Это было одно из немногих мест во дворце, где бабушка могла оставаться одна.

Здесь всегда пахло землёй и свежими листьями. Стеклянная крыша пропускала последние лучи вечернего солнца, а между высокими растениями прятались маленькие фонари.

Элена сидела в кресле у окна.

В руках у неё была книга.

Розария остановилась у входа.

На секунду ей захотелось развернуться.

Не потому, что она боялась бабушки.

Потому что боялась услышать ответ.

Но потом вспомнила фотографию.

И ключ.

И дверь.

Розария вошла.

— Бабушка.

Элена подняла взгляд.

— Розария.

В её голосе была обычная мягкость.

Та самая, которую Розария знала с детства.

— Можно с тобой поговорить?

Элена закрыла книгу.

— Конечно.

Розария подошла ближе.

Она положила на стол фотографию.

Элена посмотрела на неё.

И замерла.

Совсем ненадолго.

Но Розария заметила.

— Ты знаешь этот сад?

Элена ничего не ответила.

— Бабушка?

Элена медленно провела пальцами по краю фотографии.

— Где ты её нашла?

— В семейном архиве.

— Кто ещё её видел?

— Никто.

Элена подняла глаза.

— Ты уверена?

— Да.

Несколько секунд они молчали.

Розария достала из кармана ключ.

Положила рядом.

Элена побледнела.

Розария почувствовала, как внутри всё сжалось.

— Ты знаешь, что это?

Элена не ответила.

— Бабушка.

Тишина.

— Элиар.

Одно слово.

Розария почувствовала холод.

— Значит, он существует.

Элена закрыла глаза.

— Да.

Это короткое «да» оказалось страшнее всего, что Розария могла услышать.

Она села напротив.

— Что это за место?

— Не место.

— Что?

Элена посмотрела на неё.

— По крайней мере, не такое место, каким ты его представляешь.

Розария нахмурилась.

— Тогда что такое Элиар?

Элена долго молчала.

Потом сказала:

— Это место между временем.

Розария усмехнулась.

— Между временем?

— Да.

— Такого не бывает.

— Я тоже так думала.

Розария посмотрела на фотографию.

— Ты там была.

— Была.

— Когда?

— Очень давно.

— Насколько давно?

Элена отвела взгляд.

— До твоего рождения.

— Это я и сама поняла.

— Розария...

— Нет.

Она впервые перебила бабушку.

— Я хочу знать правду.

Элена посмотрела на неё.

В её глазах было что-то, чего Розария раньше никогда не видела.

Страх.

Настоящий.

Не за себя.

За неё.

— Хорошо, — тихо сказала Элена.

Она поднялась и подошла к окну.

— Время кажется нам прямой дорогой.

— А оно не такое?

— Нет.

— Тогда какое?

Элена посмотрела на отражение луны в стекле.

— Оно похоже на сад.

Розария молчала.

— Иногда ты идёшь по одной дорожке и думаешь, что движешься вперёд. Иногда возвращаешься назад. Иногда оказываешься там, где уже была, хотя помнишь это иначе.

— Элиар связан с этим?

— Элиар существует там, где прошлое, настоящее и будущее могут соприкасаться.

Розария посмотрела на ключ.

— А эта сила?

Элена медленно кивнула.

— Она была у меня.

Розария почувствовала, как всё внутри будто остановилось.

— У тебя?

— Да.

— И теперь она у меня?

Элена ничего не ответила.

Ответ был очевиден.

— Почему?

— Потому что некоторые вещи передаются по наследству.

— Как цвет глаз?

— Нет.

Элена повернулась к ней.

— Как память.

Розария нахмурилась.

— Я не понимаю.

— Тебе и не нужно было понимать.

— Тогда зачем ты молчала?

Элена отвернулась.

— Потому что я хотела защитить тебя.

Розария почувствовала, как злость начинает подниматься внутри.

— От чего?

— От этого.

Элена указала на ключ.

— От Элиара.

— Но почему?

— Потому что сила не приходит одна.

Розария замолчала.

— Что это значит?

— У каждого дара есть цена.

Эти слова повисли между ними.

— Какая цена?

Элена долго смотрела на неё.

— Я не знаю, какую заплатишь ты.

Розария сжала руки.

— А какую заплатила ты?

Элена не ответила.

И этого оказалось достаточно.

Розария встала.

— Ты потеряла кого-то там?

Элена резко посмотрела на неё.

Розария поняла, что угадала.

— Кто это был?

— Не спрашивай.

— Почему?

— Потому что тебе не нужно знать.

— Это человек с фотографии?

Элена молчала.

Розария достала снимок.

— Его вырезали.

— Я знаю.

— Почему?

— Потому что так было безопаснее.

— Для кого?

Элена закрыла глаза.

— Для тебя.

Розария почувствовала, как злость сменяется растерянностью.

— Для меня?

— Я думала, если сотру всё, что связывает нашу семью с Элиаром, он больше не сможет тебя найти.

Розария посмотрела на бабушку.

— Но он нашёл.

Элена тихо ответила:

— Да.

Розария вспомнила сон.

Фонтан.

Вода.

Чужое лицо.

Она медленно произнесла:

— В саду был человек.

Элена замерла.

— Что ты сказала?

— Я видела кого-то.

— Где?

— В воде.

Лицо Элены изменилось.

— Ты видела его отражение?

— Да.

Элена подошла ближе.

— Опиши его.

Розария задумалась.

— Тёмные волосы.

Элена молчала.

— Спокойный взгляд.

Ещё тише:

— Он был один.

Элена смотрела на неё так, будто услышала имя человека, которого давно считала потерянным.

— Он что-нибудь сказал?

Розария сглотнула.

— Да.

— Что?

Она посмотрела прямо в глаза Элене.

— Сказал: «Ты снова опоздала».

Элена побледнела.

Розария впервые увидела, как бабушка действительно испугалась.

— Кто он?

Элена медленно села.

— Я надеялась, что ты никогда его не встретишь.

— Значит, ты знаешь его.

Пауза.

— Да.

— Кто он?

Элена посмотрела на фотографию.

— Странник.

Розария нахмурилась.

— Это имя?

— Нет.

— Тогда кто?

Элена долго молчала.

— Человек, который слишком долго ходит между временами.

Розария почувствовала странное покалывание в пальцах.

— И почему он знает меня?

Элена подняла глаза.

— Потому что, возможно...

Она не договорила.

— Потому что что?

— Потому что он ждал тебя.

Тишина.

Розария посмотрела на ключ.

Роза на серебре будто блеснула.

— А если я не хочу туда возвращаться?

Элена подошла к ней.

— Тогда не возвращайся.

— Но если Элиар зовёт меня?

— Не отвечай.

— А если он снова придёт?

Элена крепко сжала её руку.

— Тогда не открывай дверь.

Розария вспомнила темноту за дверью.

И впервые поняла:

Элена не просто знала об Элиаре.

Она боялась его.

— Бабушка...

— Что?

— Почему именно я?

Элена посмотрела на неё очень долго.

А потом сказала:

— Потому что ты унаследовала от меня то, от чего я всю жизнь пыталась тебя уберечь.

Розария хотела спросить ещё.

Но Элена вдруг посмотрела на часы.

Стрелки остановились.

На 13:13.

Обе замерли.

А потом часы снова пошли.

Будто ничего не произошло.

Элена медленно отпустила руку Розарии.

— Тебе нужно уйти.

— Почему?

— Сейчас.

— Но...

— Розария.

Голос Элены стал необычно твёрдым.

— Элиар уже знает, что ты всё вспомнила.

Розария почувствовала холод.

Она взяла ключ.

И вышла из зимнего сада.

А за стеклянной дверью Элена ещё долго смотрела ей вслед.

Она знала то, чего Розария пока не знала.

Ключ не просто открыл дверь.

Он открыл дорогу.
` },
    { title: "Глава 5: След времени    ", text: `

Розария не помнила, как дошла до своей комнаты.

Она помнила только коридоры.

Один за другим.

Длинные окна, за которыми уже окончательно стемнело. Золотистый свет настенных фонарей. Шорох собственного платья. Тяжесть ключа в кармане.

И голос Элены.

«Тебе нужно уйти».

«Элиар уже знает, что ты всё вспомнила».

Розария закрыла дверь своей комнаты и несколько секунд стояла, прислонившись к ней спиной.

Тишина.

Наконец-то.

Она выдохнула.

— Прекрасно.

Слово прозвучало настолько тихо, что почти растворилось в комнате.

Розария прошла к окну.

За стеклом была ночь.

Астера выглядела совершенно спокойно.

Где-то далеко горели огни города. На площади, вероятно, ещё оставались люди. В садах шелестели деревья. Во дворце кто-то разговаривал, кто-то смеялся, кто-то торопился по своим делам.

Обычная жизнь.

Розария посмотрела на всё это и вдруг почувствовала странную зависть.

Как же легко было бы ничего не знать.

Проснуться утром.

Поспорить с Альбианой.

Пожаловаться на уроки.

Провести время с Эсмерией.

Поспорить с Вайаном из-за какой-нибудь ерунды.

А вечером лечь спать и думать только о том, что будет завтра.

Она хотела именно этого.

Всегда хотела.

Почему тогда ей казалось, будто она уже слишком далеко от этой жизни?

Розария сняла с себя украшения и бросила их на стол.

Потом достала ключ.

Он лёг на ладонь с привычной тяжестью.

Она смотрела на него долго.

— Ты ведь настоящий.

Никакого ответа.

Она перевернула ключ.

Роза.

Та самая.

Семейный символ.

Розария вспомнила слова Элены:

«Некоторые вещи передаются по наследству».

Она нахмурилась.

— Но почему именно мне?

Это был вопрос, на который Элена не ответила.

И чем больше Розария об этом думала, тем сильнее злилась.

Бабушка знала.

Знала всё.

Знала об Элиаре.

Знала о силе.

Знала о ключе.

И, возможно, знала Странника.

А Розария должна была узнать обо всём случайно — из собственного сна, старой книги и фотографии.

Она сжала ключ.

— Ты могла просто рассказать мне.

Голос дрогнул.

— Я бы поняла.

Но тут же сама себя остановила.

Поняла бы?

Нет.

Наверное, нет.

Если бы Элена много лет назад сказала ей:

«Розария, в нашей семье есть сила, связанная со временем, существует сад вне обычного времени, а однажды туда придёт человек, которого ты увидишь в воде».

Розария бы решила, что бабушка сошла с ума.

Она даже сейчас с трудом верила во всё это.

Розария усмехнулась.

— И всё равно могла рассказать.

Она положила ключ на стол.

---

Ночью она почти не спала.

Каждый раз, когда закрывала глаза, возвращался Элиар.

Только теперь он казался другим.

Не таким прекрасным.

Не таким спокойным.

Раньше Розария видела в нём загадку.

Теперь она видела предупреждение.

Она вспоминала дверь.

Тёмное пространство за ней.

Тринадцать ударов.

И его лицо в воде.

Странник.

Розария перевернулась на другой бок.

Почему он сказал:

«Ты снова опоздала»?

Не «ты опоздала».

Именно снова.

Слово не давало покоя.

Оно подразумевало прошлое.

Встречу.

Событие, которого Розария не помнила.

Она закрыла глаза.

И снова увидела воду.

Тёмную, неподвижную.

Лицо отражалось в ней совершенно ясно.

Но чем сильнее Розария пыталась вспомнить лицо Странника сейчас, тем меньше у неё получалось.

Она помнила волосы.

Помнила взгляд.

Помнила голос.

Но черты...

Они будто ускользали.

Розария нахмурилась.

— Странно.

Она открыла глаза.

Комната была на месте.

Ключ лежал на столе.

Она снова закрыла глаза.

И попыталась представить его.

Получилось.

На секунду.

А потом лицо изменилось.

Будто память не позволяла ей удержать его.

Розария села на кровати.

Теперь ей действительно стало не по себе.

Она посмотрела на часы.

02:47.

Она легла обратно.

Но уснуть уже не смогла.

---

Утро началось слишком рано.

Розария проснулась от солнечного света.

Она не сразу поняла, где находится.

Потом увидела ключ.

И всё вернулось.

Элиар.

Элена.

Странник.

Сила.

Время.

Розария закрыла лицо руками.

— Почему нельзя просто проснуться и обнаружить, что всё это мне приснилось?

— Потому что тогда ты бы опять проспала завтрак.

Розария резко убрала руки.

Альбиана сидела на подоконнике.

— Ты давно здесь?!

— Достаточно.

— Почему ты вообще в моей комнате?

— Потому что ты не отвечала.

Розария посмотрела на часы.

— Который час?

— Почти десять.

— Что?!

Она вскочила.

Альбиана рассмеялась.

— Вот видишь. Я спасла тебя от очередного семейного скандала.

— Ты ужасный человек.

— Зато полезный.

Розария быстро привела себя в порядок.

Но прежде чем выйти, заметила, что ключ исчез.

Она замерла.

— Нет.

Она проверила стол.

Пусто.

Тумбочку.

Пусто.

Карман вчерашнего платья.

Ничего.

Сердце забилось быстрее.

— Что ты ищешь? — спросила Альбиана.

— Ничего.

Розария начала открывать ящики.

— Ты опять врёшь.

— Я ничего не ищу.

— Тогда почему ты роешься в ящиках?

— Потому что...

Она замолчала.

Ключ лежал на подоконнике.

Прямо рядом с Альбианой.

Розария застыла.

Она была уверена, что только что проверяла это место.

— Нашла?

Розария быстро забрала ключ.

— Да.

Альбиана посмотрела на неё.

— Красивый.

— Спасибо.

— Он старый?

— Наверное.

— От какой двери?

Розария замерла.

— Не знаю.

Альбиана спрыгнула с подоконника.

— Тогда зачем он тебе?

Розария посмотрела на ключ.

— Пока не знаю.

И это был первый раз, когда она сказала правду.

---

После завтрака Розария решила проверить кое-что.

Она вернулась в библиотеку.

Ей хотелось найти больше информации о силе.

Не об Элиаре.

Не о Страннике.

О времени.

Она провела почти час среди старых книг.

Некоторые рассказывали о пророчествах.

Другие — о магии.

Третьи утверждали, что путешествия во времени невозможны.

Одна книга говорила, что время нельзя изменить.

Другая утверждала обратное.

Розария раздражённо закрыла её.

— Великолепно.

Она посмотрела на стопку книг.

— Никто ничего не знает.

Она взяла следующую.

Старая книга без названия.

Переплёт был тёмно-зелёным.

Розария открыла первую страницу.

Пусто.

Вторую.

Пусто.

Третью.

Тоже.

Она уже хотела отложить книгу, когда заметила засушенный цветок.

Маленький.

Почти полностью потерявший цвет.

Розария осторожно коснулась его.

И мир исчез.

Не полностью.

Просто изменился.

Библиотека осталась на месте.

Но стала другой.

Свет — ярче.

Стеллажи — новее.

Воздух — теплее.

Розария услышала шаги.

Она обернулась.

По библиотеке шла молодая Элена.

Розария перестала дышать.

— Бабушка...

Элена не услышала.

Конечно.

Она была не здесь.

Не сейчас.

Это было прошлое.

Розария сделала шаг.

Молодая Элена остановилась возле окна.

В руках у неё была книга.

Та самая?

Розария приблизилась.

И услышала голос.

Чужой.

Мужской.

— Ты не должна была возвращаться.

Элена резко повернулась.

— Я должна была.

— Зачем?

— Потому что он начал просыпаться.

Розария нахмурилась.

Он?

Кто?

Она попыталась приблизиться.

Но видение дрогнуло.

Молодая Элена сказала:

— Если она когда-нибудь узнает...

Голос перебил её:

— Она не должна узнать.

Розария резко вдохнула.

— Кто она?

Но никто её не услышал.

Видение исчезло.

Библиотека снова стала обычной.

Розария пошатнулась и схватилась за стол.

Сердце бешено билось.

Она посмотрела на цветок.

Тот лежал на странице.

Ничего необычного.

— Это было...

Она не закончила.

Розария снова коснулась цветка.

Ничего.

Попробовала ещё раз.

Ничего.

— Конечно.

Она нервно рассмеялась.

— Один раз показать мне прошлое и всё.

Она закрыла книгу.

Но теперь знала наверняка.

Она могла видеть прошлое.

Не воспоминания.

Не сны.

Именно прошлое.

---

Розария вернулась в свою комнату ближе к вечеру.

Она никому не рассказала о видении.

Даже Эсмерии.

Не потому, что не доверяла ей.

Просто ей нужно было сначала понять саму себя.

Она положила перед собой несколько вещей.

Ключ.

Засушенный цветок.

Семейную фотографию.

Книгу.

Разложила их рядом.

Получилась странная коллекция.

Четыре вещи.

Четыре кусочка одной загадки.

Розария посмотрела на фотографию.

На Элену.

На вырезанное место рядом с ней.

— Кто ты?

Она провела пальцем по пустому краю.

Потом коснулась фотографии.

Ничего.

Она вздохнула.

Попробовала ещё раз.

Ничего.

— Значит, не каждая вещь...

Розария замолчала.

Кончики пальцев начали покалывать.

Фотография потеплела.

Она резко убрала руку.

Перед глазами на мгновение мелькнуло что-то.

Сад.

Элена.

Дверь.

И чья-то рука, лежащая на плече Элены.

Розария моргнула.

Всё исчезло.

Она снова посмотрела на фотографию.

Теперь она была обычной.

Но Розария знала:

она видела это.

Она действительно видела.

И впервые за всё время ей стало страшно не из-за Элиара.

А из-за собственной силы.

---

Вечером Розария сидела на полу возле кровати.

Ключ лежал рядом.

Она снова взяла его.

На этот раз ничего не произошло.

Она провела пальцами по розе.

— Ты меня выбрал?

Тишина.

— Или тебя выбрали для меня?

Она сама не знала, зачем задаёт этот вопрос.

Но ответ ей был нужен.

Вдруг в коридоре раздались шаги.

Розария быстро спрятала ключ.

Дверь открылась.

Эсмерия заглянула внутрь.

— Я помешала?

— Нет.

Она вошла.

— Ты весь день какая-то не такая.

— Все решили мне сегодня это сказать.

— Потому что это правда.

Розария улыбнулась.

— Я просто устала.

Эсмерия села рядом.

Некоторое время они молчали.

— Ты можешь рассказать мне, — сказала она наконец.

Розария посмотрела на неё.

И вдруг поняла, насколько сильно ей хотелось это сделать.

Рассказать всё.

О сне.

О саде.

О ключе.

О бабушке.

О Страннике.

Но она не смогла.

— Я знаю.

Эсмерия ничего не стала спрашивать.

Просто осталась рядом.

И почему-то именно это было нужно Розарии больше всего.

---

Ночью ей снова приснился Элиар.

Но на этот раз сад был пуст.

Ни фонтана.

Ни двери.

Ни Странника.

Только розы.

Розария шла между ними.

Под ногами шуршали лепестки.

Она остановилась.

Перед ней стояла скамья.

На ней лежал маленький предмет.

Розария подошла ближе.

Это был серебряный кулон.

Роза.

Точно такой же, какой она видела на фотографии.

Она протянула руку.

Но прежде чем успела коснуться его, услышала голос.

— Не бери.

Розария обернулась.

Странник стоял далеко от неё.

— Почему?

— Потому что ты ещё не готова.

— К чему?

Он не ответил.

Розария сделала шаг к нему.

— Ты знаешь Элену?

Молчание.

— Ты был на той фотографии?

Он отвёл взгляд.

— Ты знаешь, кто вырезал тебя?

Странник посмотрел на неё.

И впервые в его взгляде Розария увидела не спокойствие.

Боль.

— Ты задаёшь слишком много вопросов.

— А ты даёшь слишком мало ответов.

На его губах появилась едва заметная улыбка.

— В этом мы похожи.

Розария нахмурилась.

— Я тебя знаю?

Странник ничего не сказал.

— Ответь.

Он посмотрел на неё.

Долго.

А потом произнёс:

— Не так, как думаешь.

Розария почувствовала, как внутри всё сжалось.

— Что это значит?

Но сад начал исчезать.

— Подожди!

Она бросилась вперёд.

— Странник!

Он стоял неподвижно.

И перед тем, как всё вокруг растворилось, Розария услышала его голос:

— Когда вспомнишь — не верь первому воспоминанию.

Розария проснулась.

Резко.

Сердце билось быстро.

Комната была тёмной.

Она села.

Долго смотрела перед собой.

Потом заметила кое-что.

На прикроватной тумбочке лежал ключ.

Но она точно помнила, что оставила его в другом месте.

Розария медленно протянула руку.

Ключ был холодным.

Она перевернула его.

И увидела на обратной стороне розы то, чего раньше там не было.

Тонкую линию.

Как будто кто-то только что выгравировал её.

Линия складывалась в символ.

Розария не знала, что он означает.

Но почему-то ей показалось, что она уже его видела.

Где-то очень давно.

Она провела по нему пальцем.

И услышала тихий звук часов.

Тринадцать ударов.

Но за окном только начинался рассвет.` },
    { title: "Глава 6: Чужое воспоминание", text: `

Утро в Астере началось совершенно обычно.

И именно это раздражало Розарию больше всего.

После всего, что произошло за последние несколько дней, ей казалось, что мир обязан был хотя бы немного измениться.

Небо должно было стать темнее.

Часы — остановиться.

Стены дворца — покрыться трещинами.

Где-нибудь обязательно должна была появиться та самая дверь из Элиара.

Но ничего не произошло.

Солнце поднялось над крышами города.

Слуги ходили по коридорам.

На кухне кто-то спорил из-за свежего хлеба.

Альбиана с самого утра пыталась найти свои ленты для волос и обвиняла в их исчезновении весь дворец.

Даже погода решила не поддерживать атмосферу таинственности.

Было тепло.

Слишком тепло.

Розария стояла у окна и смотрела на двор.

— Ты опять думаешь.

Она не обернулась.

— Я всегда думаю.

— Нет. Сейчас ты думаешь особенно громко.

Розария посмотрела через плечо.

Эсмерия стояла у двери, держа в руках две чашки.

— Я не знала, что мысли могут быть громкими.

— Твои могут.

Эсмерия протянула ей чашку.

— Держи.

Розария сделала глоток.

— Что это?

— Чай.

— Почему он странный?

— Потому что я добавила туда травы.

— Какие?

— Если скажу, ты перестанешь пить.

Розария подозрительно посмотрела на чашку.

— Эсмерия.

— Пей.

Она вздохнула и снова сделала глоток.

— Нормально.

— Видишь?

— Пока.

Эсмерия села на край кресла.

Некоторое время они молчали.

— Ты всё ещё думаешь о разговоре с Эленой?

Розария опустила глаза.

— Да.

— Хочешь поговорить?

— Не знаю.

Эсмерия не стала давить.

И Розария была ей за это благодарна.

Иногда ей казалось, что люди слишком сильно стараются получить ответы.

Будто молчание обязательно нужно заполнить.

А иногда молчание было единственным местом, где можно было спокойно подумать.

— Я просто не понимаю, почему она мне не сказала, — произнесла Розария.

— Может быть, боялась.

— Она всегда боится за меня.

— Потому что любит тебя.

Розария усмехнулась.

— Это не оправдание.

— Нет.

Эсмерия посмотрела на неё.

— Но иногда любовь заставляет людей делать очень глупые вещи.

Розария задумалась.

— Например?

— Например, решать за другого человека, от чего его нужно защищать.

Эти слова задели её сильнее, чем она ожидала.

Она посмотрела в окно.

— Именно.

---

Через несколько часов Розария уже почти забыла о своих проблемах.

Почти.

Они с Альбианой отправились в сад.

Альбиана пыталась собрать букет, который должен был выглядеть «совершенно случайно».

Получалось ужасно.

— Это не букет, — заметила Розария.

— А что?

— Катастрофа.

— Зато красивая.

— Очень спорно.

Альбиана подняла цветок.

— А этот?

— Оставь его.

— Почему?

— Он красивый.

Альбиана улыбнулась.

— Значит, ты всё-таки умеешь делать комплименты.

— Иногда.

— Запишу дату.

Розария толкнула её плечом.

Альбиана засмеялась.

На несколько минут всё действительно стало обычным.

Никакого Элиара.

Никакого Странника.

Никаких загадок.

Только солнце, цветы и сестра рядом.

Розария поймала себя на мысли, что скучала по этому.

По обычности.

По жизни, в которой самым страшным событием дня была потерянная лента или испорченный букет.

Она посмотрела на Альбиану.

И вдруг подумала:

Я хочу, чтобы у меня была такая жизнь.

Не дворец.

Не титул.

Не сила.

Просто...

дом.

Люди, которых она любит.

Свой маленький сад.

Кто-то рядом.

И чтобы никто не исчезал.

Мысль пришла настолько неожиданно, что Розария сама от неё отмахнулась.

Она посмотрела на цветы.

Одна роза росла чуть в стороне.

Белая.

Розария подошла.

Провела пальцами по лепестку.

И ничего не произошло.

Она облегчённо выдохнула.

Значит, вчерашнее было случайностью.

Наверное.

Она уже хотела уйти, когда услышала:

— Розария.

Она обернулась.

Вайан стоял у дорожки.

— Ты опять потерялся?

— Я вообще-то пришёл к тебе.

— Зачем?

— Эсмерия сказала, что ты здесь.

— И ты поверил Эсмерии?

— Не особенно.

Розария улыбнулась.

— Правильно.

Вайан посмотрел на её руки.

— Что это?

— Цветок.

— Я вижу.

— Тогда зачем спрашиваешь?

— Вы сегодня все решили отвечать вопросом на вопрос?

Альбиана рассмеялась.

Розария закатила глаза.

На несколько минут разговор ушёл в совершенно обычные вещи.

Кто опоздал.

Кто опять забыл книгу.

Кто собирался устроить небольшую прогулку за город.

Розария слушала их и постепенно расслаблялась.

И всё же где-то глубоко внутри оставалось ощущение.

Словно что-то ждало.

---

После обеда она вернулась в свою комнату.

На столе лежала старая брошь.

Розария сразу её узнала.

Эта брошь принадлежала Элене.

Небольшая.

Серебряная.

В форме цветка.

Она нашла её несколько дней назад среди старых вещей бабушки.

Раньше Розария не придавала ей значения.

Теперь же она смотрела на неё совсем иначе.

Время показывает прошлое.

Элена говорила, что сила была у неё.

Значит, если Розария действительно получила её...

может быть, она сможет увидеть, откуда всё началось.

Она взяла брошь.

Ничего.

Розария закрыла глаза.

Сосредоточилась.

Ничего.

— Давай.

Она снова коснулась металла.

Ничего.

— Пожалуйста.

Ничего.

Розария раздражённо положила брошь на стол.

— Великолепно.

Она отошла.

Через несколько секунд вернулась.

Снова взяла её.

На этот раз она почувствовала тепло.

Совсем лёгкое.

Как будто металл только что лежал под солнцем.

Розария замерла.

Тепло усилилось.

Комната стала тише.

Слишком тише.

Она услышала собственное дыхание.

Потом...

чужое.

Розария резко открыла глаза.

Но её комнаты больше не было.

---

Она стояла в другом месте.

Это был дворец.

Но старый.

Светлее.

Мебель другая.

Стены ещё не покрыты теми же узорами, которые Розария знала с детства.

Она оглянулась.

Никого.

Потом услышала шаги.

Элена.

Молодая.

Розария смотрела на неё, не в силах произнести ни слова.

Элена шла по коридору и держала в руках ту самую брошь.

Розария пошла следом.

Она знала, что Элена не может её видеть.

Это было прошлое.

Она просто наблюдала.

Элена остановилась у двери.

Перед ней стоял мужчина.

Розария не видела его лица.

Только силуэт.

— Ты не понимаешь, — сказала Элена.

— Я понимаю больше, чем ты думаешь.

— Если ты откроешь её, всё повторится.

— Оно уже повторяется.

Розария нахмурилась.

Что повторяется?

Элена сжала брошь.

— Она ещё ребёнок.

— Именно поэтому у неё есть шанс.

— Нет.

Элена покачала головой.

— У неё должен быть шанс на обычную жизнь.

Мужчина ничего не ответил.

Элена продолжила:

— Я заберу у неё память.

Розария застыла.

— Нет...

Она сама не понимала, почему произнесла это вслух.

Видение продолжалось.

— Ты не имеешь права.

— Имею.

— Она однажды вспомнит.

Элена посмотрела на него.

— Тогда я буду надеяться, что к тому времени меня уже не будет рядом.

Мир дрогнул.

Розария почувствовала, что видение заканчивается.

— Подожди!

Она бросилась вперёд.

Мужчина повернулся.

На мгновение Розария увидела его лицо.

Но не успела его рассмотреть.

Всё исчезло.

---

Розария открыла глаза.

Она стояла посреди своей комнаты.

Брошь выпала из руки.

Розария тяжело дышала.

Она посмотрела на неё.

Потом на дверь.

— Что...

Она села.

Руки дрожали.

Я заберу у неё память.

Слова Элены снова и снова звучали в голове.

Если это было правдой...

если Элена действительно что-то сделала с её памятью...

то что именно она забрала?

И почему?

Розария закрыла глаза.

Перед ней снова возник силуэт мужчины.

Она пыталась вспомнить лицо.

Ничего.

Только ощущение.

Она знала его.

Нет.

Не знала.

Но почему-то казалось, что знала.

Розария посмотрела на брошь.

— Ещё раз.

Она снова взяла её.

На этот раз видение пришло мгновенно.

Но оно было другим.

Она увидела сад.

Элиар.

Фонтан.

И девочку.

Маленькую.

Совсем маленькую.

Розария замерла.

Она узнала себя.

Девочка стояла возле фонтана и держала что-то в руках.

Ключ.

Тот самый.

Розария почувствовала, как перехватило дыхание.

Но рядом с маленькой Розарией никого не было.

Ни Элены.

Ни Странника.

Только вода.

Маленькая Розария посмотрела на фонтан.

И сказала:

— Ты обещал вернуться.

Розария в настоящем почувствовала ледяной холод.

Кому она это сказала?

Вода пошла рябью.

И в отражении появился силуэт.

Розария не успела увидеть лицо.

Видение оборвалось.

Она отдёрнула руку.

Брошь упала на пол.

---

Долго Розария просто сидела.

Она не плакала.

Не кричала.

Не звала никого.

Она просто смотрела на брошь.

Теперь она знала две вещи.

Первая:

Элена действительно скрывала что-то связанное с её памятью.

Вторая:

Розария уже была в Элиаре.

Не сейчас.

Не в первом сне.

Когда-то раньше.

Но она этого не помнила.

И тут в голове всплыла фраза Странника.

«Когда вспомнишь — не верь первому воспоминанию.»

Розария медленно подняла взгляд.

— Почему?

Ответа не было.

Только часы.

Обычные.

Тихие.

Они показывали половину шестого.

Розария подошла к столу.

Взяла ключ.

И вдруг заметила на его поверхности тот самый символ, который появился прошлой ночью.

Она рассматривала его несколько секунд.

И неожиданно поняла.

Это не просто символ.

Это был рисунок.

Две розы.

Одна распустившаяся.

Вторая — закрытая.

Между ними проходила тонкая линия.

Как дорога.

Как нить.

Как связь.

Розария провела пальцем по знаку.

И услышала тихий шёпот.

Не во сне.

Не в воспоминании.

Прямо рядом с собой.

— Не ищи Странника.

Розария замерла.

Она медленно повернулась.

Комната была пуста.

Но голос продолжил:

— Ищи того, кто открыл дверь.

Розария сжала ключ.

— Кто ты?

Тишина.

А затем часы остановились.

05:31.

Розария посмотрела на них.

Стрелка секунд не двигалась.

Пять секунд.

Десять.

Пятнадцать.

И вдруг часы пошли обратно.

05:30.

05:29.

05:28.

Розария смотрела, не моргая.

Время двигалось назад.

Она сделала шаг назад.

И тогда часы остановились.

На 05:27.

В комнате стало холодно.

А на столе, рядом с ключом, появилась одна белая роза.

Розария была уверена:

ещё секунду назад её там не было.

Она не прикоснулась к ней.

Только прошептала:

— Элиар...

И где-то далеко, за пределами дворца, пробили часы.

Один раз.

Потом второй.

Третий.

Розария считала удары.

И на тринадцатом...

все часы в Астере остановились.
` },
    { title: "Глава 7: Имя, которого не было", 
    text: `На следующее утро часы снова шли.

Именно это Розарию пугало больше всего.

Если бы они остановились и больше не заработали, всё было бы проще.

Можно было бы назвать это проклятием.

Магией.

Чем-то необъяснимым.

Но утром стрелки двигались совершенно нормально.

Тик.

Так.

Тик.

Так.

Будто прошлой ночью ничего не произошло.

Розария стояла перед часами и смотрела на них уже несколько минут.

— Ты собираешься так смотреть на них весь день?

Она обернулась.

Альбиана сидела на кровати и завязывала ленту в волосах.

— Возможно.

— Почему?

— Мне кажется, они странные.

Альбиана посмотрела на часы.

— Это часы.

— Я знаю.

— Они показывают время.

— Я тоже знаю.

Альбиана нахмурилась.

— Тогда что в них странного?

Розария открыла рот.

Закрыла.

Что она могла сказать?

Вчера ночью все часы в Астере одновременно остановились, а потом пошли назад?

В моей комнате появилась роза?

Я видела своё прошлое?

И, возможно, разговаривала с человеком из сна?

— Ничего, — сказала она.

Альбиана прищурилась.

— Ты ужасно врёшь.

— Спасибо.

— Это не комплимент.

Розария улыбнулась.

На самом деле ей было немного легче.

Обычный разговор.

Обычное утро.

Обычная сестра.

Это напоминало ей, что мир ещё существует за пределами всех этих загадок.

Она быстро собралась и вышла из комнаты.

Но прежде чем закрыть дверь, ещё раз посмотрела на часы.

08:14.

Они шли.

И всё-таки Розария не могла избавиться от ощущения, что время просто притворяется.

---

В течение дня ничего не происходило.

Совсем ничего.

Розария даже начала сомневаться в собственных ощущениях.

На занятиях она несколько раз ловила себя на том, что смотрит в окно и ждёт чего-то.

Чего?

Она не знала.

Может быть, появления двери.

Может быть, Странника.

Может быть, очередного видения.

Но ничего не было.

И постепенно тревога сменилась раздражением.

— Если ты собираешься появиться, — пробормотала она себе под нос, — то хотя бы появись нормально.

— Ты сейчас опять со мной разговариваешь?

Розария вздрогнула.

Вайан стоял рядом.

— Нет.

— Ты только что что-то сказала.

— Себе.

— Понятно.

Он посмотрел на неё.

— Ты в последнее время часто разговариваешь сама с собой.

— Спасибо за наблюдение.

— Всегда пожалуйста.

Розария хотела ответить, но вдруг заметила кое-что.

На пальцах Вайана была маленькая царапина.

— Что случилось?

Он посмотрел на руку.

— Ничего.

— Ты опять полез куда не надо?

— Возможно.

— Вайан.

— Я сказал «возможно».

Розария закатила глаза.

На секунду всё стало настолько обычным, что она почти забыла обо всём остальном.

Почти.

Пока не увидела на стене старый портрет Элены.

Розария остановилась.

Элена была изображена молодой.

Совсем такой же, как на фотографии.

Рядом стояла Люстерия.

Розария уже видела этот портрет раньше.

Но сегодня что-то было иначе.

Она подошла ближе.

— Что ты рассматриваешь? — спросил Вайан.

— Портрет.

— Это я тоже вижу.

— Помолчи.

Она всматривалась в раму.

На секунду ей показалось, что за плечом Элены есть тень.

Чья-то фигура.

Розария моргнула.

Ничего.

Она отступила.

— Показалось.

— Что?

— Ничего.

---

После занятий Розария пошла в архив.

Она сама не могла объяснить зачем.

Наверное, просто хотела проверить, не изменилось ли там что-нибудь.

Старая фотография лежала на месте.

Книга Элиара тоже.

Конверт с её именем — там же.

Розария облегчённо выдохнула.

Всё было нормально.

Она уже собиралась закрыть шкаф, когда заметила семейное древо.

Оно висело на дальней стене.

Большое.

Старое.

С именами нескольких поколений.

Розария знала его почти наизусть.

Элена.

Люстерия.

Эльдар.

Она.

Альбиана.

И ещё множество имён до них.

Она подошла ближе.

Сначала ничего не заметила.

Потом остановилась.

На ветви рядом с Эленой было что-то написано.

Розария нахмурилась.

Подошла ещё ближе.

Там было имя.

Она никогда его не видела.

Никогда.

Розария провела пальцами по бумаге.

Астериан.

Она отступила.

— Что?

Имя было написано аккуратно.

Рядом стояла дата.

17 октября.

Розария почувствовала, как внутри всё похолодело.

Та же дата.

Старая фотография.

Кулон.

Элиар.

Теперь это.

Она быстро сняла древо со стены.

Перевернула.

На обороте были старые печати.

Никаких следов нового листа.

Никакого свежего клея.

Ничего.

Розария провела пальцем по имени.

Чернила были сухими.

Даже слишком сухими.

Она достала маленькую лупу из ящика.

Рассмотрела надпись.

Чернила не выглядели свежими.

Наоборот.

Они были потемневшими от времени.

Розария почувствовала, как по спине пробежал холод.

— Но это невозможно.

Она посмотрела на дату.

Имя появилось сегодня.

Она видела это древо вчера.

И точно знала, что этого имени там не было.

Розария вернула древо на место.

Потом снова сняла.

Нет.

Она должна была проверить.

Она нашла старую копию семейного древа.

Положила рядом.

Сравнила.

В старой версии имени не было.

Совсем.

Она перевернула несколько страниц архивной книги.

Нашла список членов семьи.

Элена.

Люстерия.

Эльдар.

Никого Астериана.

Розария почувствовала, как сердце начинает биться быстрее.

Она открыла ещё одну книгу.

Потом ещё одну.

Ничего.

Имени не существовало.

Она вернулась к древу.

Астериан.

Имя всё ещё было там.

Она коснулась его.

И в ту же секунду библиотека исчезла.

---

Розария стояла в той же комнате.

Но десятилетия назад.

Она поняла это сразу.

Всё вокруг было немного другим.

На столе стояли свечи.

За окном шёл дождь.

Молодая Элена сидела перед семейным древом.

В руках у неё была кисть.

Розария приблизилась.

Элена что-то писала.

Розария посмотрела.

Имя.

Астериан.

Она замерла.

Элена поставила дату.

17 октября.

Розария не понимала.

Она была уверена, что это имя появилось только сегодня.

Но вот оно.

Элена писала его сама.

Много лет назад.

Розария хотела подойти ближе.

И вдруг услышала голос.

— Ты всё-таки написала его.

Элена резко обернулась.

В дверях стоял тот же неизвестный человек.

Розария не могла увидеть его лица.

— Мне пришлось.

— Зачем?

— Потому что иначе она никогда не найдёт дорогу.

— Ты обещала, что не впутаешь её.

Элена опустила кисть.

— Я обещала защитить её.

— Это не одно и то же.

Элена посмотрела на семейное древо.

— Иногда, чтобы защитить человека, нужно оставить ему путь.

Розария не понимала.

— Какой путь?

Мужчина ничего не ответил.

Видение задрожало.

Розария почувствовала, как её вытягивает обратно.

— Подожди!

Но Элена вдруг посмотрела прямо на неё.

Прямо в глаза.

Розария застыла.

Молодая Элена...

видела её.

— Ты всё-таки пришла.

Розария отступила.

— Бабушка?

Элена улыбнулась.

Грустно.

— Значит, время не послушалось меня.

Всё исчезло.

---

Розария упала на колени.

Архив вернулся.

Она долго не двигалась.

В голове было пусто.

Она поднялась.

Подошла к семейному древу.

Имя всё ещё было там.

Астериан.

Она провела пальцем по чернилам.

И вдруг заметила маленькую надпись под датой.

Её почти невозможно было увидеть.

Всего несколько слов:

«Тот, кто вернётся».

Розария застыла.

Кто вернётся?

Астериан?

Странник?

Или кто-то другой?

Она закрыла глаза.

В голове снова прозвучал голос Странника:

«Не верь первому воспоминанию.»

Розария открыла глаза.

— Хорошо.

Она посмотрела на древо.

— Тогда я не буду верить.

Она сняла его со стены.

И впервые решила не идти к Элене.

Не сейчас.

Потому что если бабушка скрывала правду...

то Розария должна была сначала найти её сама.

---

Когда она вернулась в комнату, уже стемнело.

На столе лежала книга.

Та самая, которую она оставила утром.

Розария подошла.

Книга была открыта.

На странице, где раньше ничего не было, появилась надпись.

Чернила медленно проступали на бумаге.

Будто их кто-то писал прямо сейчас.

Розария не дышала.

Буква за буквой.

Слово за словом.

«Ты ищешь не того человека».

Розария смотрела на страницу.

Ниже появилась ещё одна строка.

«Имя было здесь всегда».

Она почувствовала холод.

— Нет.

Третья строка.

«Просто ты ещё не помнила».

Розария резко закрыла книгу.

В комнате стало тихо.

Слишком тихо.

Она посмотрела на часы.

17:27.

Стрелка секундной стрелки остановилась.

Розария ждала.

Одна секунда.

Две.

Три.

А потом часы пошли.

Только теперь они показывали:

17:26.

Розария медленно подняла глаза.

На стене, рядом с её семейным древом, появилась новая ветвь.

Её раньше не было.

От имени Элены.

К имени Астериана.

А под ним...

ещё одно имя.

Розария подошла ближе.

Она не знала этого человека.

Но увидела дату.

9 июня.

И впервые за всё время ей стало по-настоящему страшно.

Потому что эта дата была не из далёкого прошлого.

Она была датой, которую Розария помнила лично.

А значит, кто-то или что-то только что вписало в её прошлое человека, которого там никогда не было.
`},
    { title: "Глава 8:Имя в старой книге",
    text:`Розария вернулась в библиотеку ещё до того, как дворец окончательно проснулся.

Она не сказала никому, куда идёт.

Даже Эсмерии.

Особенно Эсмерии.

Не потому, что не доверяла ей.

Просто некоторые вещи становились слишком реальными, когда произносились вслух.

А Розария пока не была готова признать вслух, что боится.

Она вошла в библиотеку и закрыла за собой дверь.

Тишина встретила её почти с облегчением.

Здесь всё казалось прежним.

Высокие стеллажи.

Запах старой бумаги.

Пыль в солнечных лучах.

Тяжёлые шторы.

Большие часы над камином.

Розария посмотрела на них.

Стрелки двигались.

Нормально.

Она всё ещё не могла решить, радовало это её или пугало.

— Хорошо, — прошептала она. — Давай без фокусов хотя бы сегодня.

Она подошла к столу.

На нём лежало семейное древо.

Розария принесла его сюда прошлым вечером.

Она снова посмотрела на имя.

Астериан.

Под ним стояла дата.

17 октября.

А чуть ниже — тонкая надпись:

Тот, кто вернётся.

Розария провела пальцем по бумаге.

— Кто ты?

Ничего.

Она усмехнулась.

— Конечно.

Она раскрыла первую книгу.

Потом вторую.

Потом третью.

История Астеры.

Старые хроники.

Семейные записи.

Легенды.

Она искала одно слово.

Астериан.

Час спустя вокруг неё лежала целая гора книг.

А результата не было.

— Ничего...

Розария откинулась на спинку стула.

Может быть, Элена всё-таки ошиблась.

Может быть, это имя вообще не связано с семьёй.

Может быть, время просто...

Она остановилась.

Время просто?

После всего, что произошло, эта мысль звучала почти смешно.

Розария взяла очередную книгу.

Тёмно-синяя обложка.

На ней не было названия.

Она открыла её.

Первые страницы были пустыми.

На пятой странице стояла дата.

17 октября.

Розария замерла.

Ниже было написано:

«День возвращения».

Она быстро перелистнула страницу.

Там была другая запись.

«Когда граница между прошлым и настоящим станет тонкой, Астериан откроется вновь».

Розария нахмурилась.

— Откроется?

Она перечитала предложение.

Астериан не был человеком.

По крайней мере, здесь.

Она продолжила.

«Не ищи его среди людей. Он не принадлежит одному времени».

Розария почувствовала холод.

Следующая страница.

«Те, кто вошёл туда, возвращаются не всегда такими, какими ушли».

Она закрыла книгу.

Слишком быстро.

Несколько секунд просто сидела неподвижно.

Потом снова открыла.

Ничего.

Записи исчезли.

Розария моргнула.

Страница была пустой.

— Нет.

Она перевернула назад.

Тоже пусто.

— Нет-нет-нет...

Она провела пальцами по бумаге.

Чернила исчезли.

Будто их никогда не существовало.

Розария сжала книгу.

— Я это видела.

В ответ раздался тихий скрип.

Одна из книжных полок сама собой сдвинулась.

Розария резко встала.

За ней оказался узкий проход.

— Что за...

Она подошла ближе.

Внутри была маленькая ниша.

И в ней — одна книга.

Старая.

Покрытая пылью.

Розария достала её.

На обложке была выжжена роза.

Она знала этот знак.

Семья.

Розария открыла книгу.

На первой странице было написано:

«Элена Люстерия Астериан.»

Розария перестала дышать.

— Астериан...

Она перечитала имя.

Это была фамилия?

Нет.

В старых семейных документах Элена никогда не называлась так.

Там было другое имя.

Розария быстро перевернула страницу.

На следующей стояла дата.

9 июня.

Розария почувствовала, как внутри всё оборвалось.

Та самая дата.

Та, что появилась в семейном древе.

Она начала читать.

«В этот день дверь открылась впервые.»

Следующая строка:

«Элена вошла в Астериан.»

Розария провела пальцем по словам.

«И вернулась одна.»

Она остановилась.

Одна?

Тогда кто был с ней?

Розария перевернула страницу.

Пусто.

Ещё одну.

Пусто.

Ещё.

Пусто.

А потом появилась запись.

Будто чернила проступали прямо на глазах.

«Она не должна была возвращаться».

Розария отшатнулась.

Страница снова стала пустой.

— Почему всё исчезает?!

Она ударила ладонью по столу.

В этот момент дверь библиотеки открылась.

Розария резко обернулась.

Эсмерия.

— Я так и знала.

— Что?

— Что ты будешь здесь.

Розария быстро закрыла книгу.

— Я просто...

— Ты ужасно врёшь.

— Сегодня уже второй человек мне это говорит.

Эсмерия подошла ближе.

— Что ты нашла?

— Ничего.

Эсмерия посмотрела на стол.

Потом на семейное древо.

Потом на Розарию.

— Тогда почему ты выглядишь так, будто увидела призрака?

Розария молчала.

Эсмерия села напротив.

— Я не буду заставлять тебя рассказывать.

Розария посмотрела на неё.

— Почему?

— Потому что ты расскажешь сама, когда будешь готова.

Несколько секунд они просто смотрели друг на друга.

— Я нашла имя, — наконец сказала Розария.

— Какое?

— Астериан.

Эсмерия нахмурилась.

— Это имя?

— Я тоже так думала.

Розария раскрыла книгу.

— Но, кажется, нет.

Она рассказала всё.

Про древо.

Про дату.

Про старые записи.

Про Элену.

Эсмерия слушала молча.

— И что теперь? — спросила она.

Розария посмотрела на книгу.

— Теперь я хочу узнать, что произошло девятого июня.

---

Они провели в библиотеке ещё несколько часов.

Но больше ничего не нашли.

Ни одного упоминания.

Ни одной записи.

Ни одного человека.

Будто девятого июня вообще никогда не существовало.

Когда Эсмерия ушла, Розария осталась одна.

Она сидела перед книгой и смотрела на пустую страницу.

— Что ты от меня скрываешь?

Книга молчала.

Розария протянула руку.

Коснулась страницы.

И снова увидела прошлое.

---

Дождь.

Сильный.

Молодая Элена стояла перед огромной дверью.

Рядом с ней кто-то был.

На этот раз Розария видела его лучше.

Юноша.

Почти ровесник Странника.

Он стоял спиной.

В руках у него был ключ.

Тот самый.

Розария почувствовала холод.

— Ты уверена? — спросил он.

Элена покачала головой.

— Нет.

— Тогда почему мы здесь?

— Потому что выбора больше нет.

— Выбор есть всегда.

— Не для неё.

Розария приблизилась.

Она пыталась рассмотреть лицо юноши.

Но видение будто специально не позволяло.

Он повернулся.

На мгновение Розария увидела глаза.

Знакомые.

Слишком знакомые.

Но прежде чем она успела понять почему, видение оборвалось.

---

Розария резко открыла глаза.

Книга лежала перед ней.

Сердце билось быстро.

Она смотрела на свои руки.

— Странник...

Это был он?

Или ей только показалось?

Она не знала.

Но теперь у неё был новый вопрос.

Что Странник делал рядом с Эленой?

И почему он выглядел так молодо?

Розария посмотрела на часы.

Прошло всего несколько минут.

Хотя ей казалось, что она провела в прошлом целый час.

Она поднялась.

Закрыла книгу.

И тогда увидела надпись на последней странице.

На этот раз она не исчезала.

«Если Розария когда-нибудь найдёт это, значит, я снова ошиблась».

Почерк Элены.

Розария провела пальцами по буквам.

— В чём ты ошиблась?

Ниже появилась ещё одна строка.

Розария замерла.

«Я думала, что смогу защитить её от времени».

Она прочитала её ещё раз.

И ещё.

А затем появилась последняя:

«Но время никогда не забирает то, что ему не принадлежит».

Книга закрылась сама.

Розария не пыталась её открыть.

---

Вечером она пошла к Элене.

Но возле двери остановилась.

Внутри кто-то разговаривал.

Она узнала голос бабушки.

И второй.

Мужской.

Розария замерла.

Она прислонилась к стене.

— Ты не должен был возвращаться, — сказала Элена.

Мужчина ответил:

— Я тоже так думал.

Розария почувствовала, как сердце ударило сильнее.

Она знала этот голос.

Не полностью.

Но знала.

Странник.

— Она уже вспомнила, — сказала Элена.

— Не всё.

— Этого достаточно.

— Нет.

Пауза.

— Она ищет Астериан.

Элена тяжело вздохнула.

— Я знаю.

— Тогда времени почти не осталось.

Розария прикрыла рот рукой.

Внутри что-то упало.

Элена сказала:

— Когда она найдёт настоящую дверь, ты должен будешь остановить её.

— А если она откроет её раньше?

Молчание.

Потом Элена ответила:

— Тогда мне придётся сказать ей правду.

Розария отступила от двери.

Она не стала слушать дальше.

Ей было достаточно.

Она вернулась в свою комнату.

Закрыла дверь.

И только тогда поняла, что всё это время держала ключ.

На его поверхности появилась новая надпись.

Розария поднесла его ближе.

Три слова.

«Он уже вернулся».

Она закрыла глаза.

Странник вернулся.

Элена знала.

А значит...

он был в Астере.

Прямо сейчас.

Розария подошла к окну.

Город лежал перед ней в ночном свете.

Она смотрела на улицы.

На башни.

На далёкие огни.

И вдруг увидела человека.

На площади.

Стоящего под фонарём.

Высокого.

Неподвижного.

Розария не могла разглядеть лица.

Но знала.

Это он.

Странник поднял голову.

И посмотрел прямо на её окно.

Розария застыла.

Он поднял руку.

В ней что-то блеснуло.

Ключ.

Такой же.

Розария посмотрела на свой.

И впервые за всё время поняла:

ключей было два.

Один — у неё.

Другой — у него.

А между ними лежала дверь, которую кто-то однажды уже открыл.`},
    { title: "Глава 9: До того, как ты забыла", text: `Розария не спала.

Она сидела у окна и смотрела на площадь.

Фонарь всё ещё горел.

Но человека под ним больше не было.

Она несколько раз проверяла.

Никого.

Только пустая площадь и редкие прохожие.

Розария посмотрела на ключ в своей руке.

Потом снова на улицу.

— Странник...

Имя прозвучало почти шёпотом.

Она не понимала, чего хочет больше — чтобы он действительно был здесь или чтобы его не было.

Если его не было, всё можно было списать на видения.

На усталость.

На силу, которой она ещё не умела управлять.

Но если он действительно вернулся...

тогда всё становилось настоящим.

Розария посмотрела на второй ключ, который видела в его руке.

Два ключа.

Одна дверь.

И неизвестно сколько лет между ними.

Она легла, но сон так и не пришёл.

---

Утром Розария нашла на подоконнике белую розу.

Она даже не удивилась.

— Конечно.

Роза была свежей.

На лепестках лежали капли воды.

Розария осторожно взяла её.

И увидела на стебле тонкую серебряную нить.

К ней был привязан маленький листок.

Всего несколько слов:

«Старый мост. После заката. Приходи одна.»

Подписи не было.

Но она знала, кто это.

Розария перечитала записку.

Потом ещё раз.

— Ты серьёзно?

Она посмотрела в сторону двери.

— Приходи одна?

Внутри тут же поднялось раздражение.

Ага. Конечно. Загадочный незнакомец оставляет мне записку и предлагает пойти одной в неизвестное место.

Она смяла бумагу.

Развернула.

Снова посмотрела.

Она могла не идти.

Наверное, это было самое разумное решение.

Но Розария уже знала, что сделает.

Она пойдёт.

---

До вечера время тянулось мучительно медленно.

Она пыталась читать.

Не получилось.

Пыталась заниматься.

Не получилось.

Даже Альбиана заметила её состояние.

— Ты куда-то собираешься?

— Нет.

— Ты опять врёшь.

— Почему ты стала такой наблюдательной?

— Потому что ты стала такой подозрительной.

Розария улыбнулась.

— Всё нормально.

Альбиана посмотрела на неё несколько секунд.

— Если что-то случится...

— Не случится.

— Ты даже не знаешь, о чём я.

Розария замолчала.

Альбиана подошла ближе.

— Просто будь осторожна.

Розария посмотрела на неё.

— Хорошо.

И на этот раз она не врала.

---

Старый мост находился на окраине Астеры.

Когда-то он соединял две части города.

Теперь им почти никто не пользовался.

Камни покрылись мхом.

Перила местами потрескались.

Под мостом текла река.

Розария пришла первой.

Она остановилась посреди моста.

Вечерний ветер трепал волосы.

Она посмотрела вниз.

Вода была спокойной.

Слишком спокойной.

Розария вспомнила Элиар.

Фонтан.

Лицо Странника.

Вода помнит больше, чем человек.

Она отвела взгляд.

— Я пришла.

Никто не ответил.

— Ты просил прийти.

Тишина.

Розария скрестила руки.

— Если это какая-нибудь глупая загадка, предупреждаю сразу: у меня сегодня не то настроение.

— Я знаю.

Розария вздрогнула.

Голос раздался позади.

Она медленно обернулась.

Он стоял у другого конца моста.

Странник.

Не во сне.

Не в отражении.

Не в воспоминании.

Здесь.

Настоящий.

Он выглядел немного иначе, чем в Элиаре.

Не таким недосягаемым.

Обычным.

Почти.

Но взгляд был тот же.

Розария несколько секунд просто смотрела на него.

— Ты настоящий.

Он слегка улыбнулся.

— Разочарована?

— Пока не решила.

Он подошёл ближе.

Розария заметила второй ключ на его шее.

Он висел на тонкой цепочке.

Такой же.

Но не совсем.

На его ключе вместо розы был другой символ.

Закрытый цветок.

Розария указала на него.

— Почему они разные?

— Потому что мы разные.

— Не уходи от ответа.

— Я и не ухожу.

— Тогда отвечай.

Странник тихо усмехнулся.

— Ты действительно не изменилась.

Розария замерла.

— Что?

Он сразу замолчал.

— Что ты сейчас сказал?

— Ничего.

— Нет.

Она подошла ближе.

— Ты сказал, что я не изменилась.

— Я сказал...

— Я слышала.

Он посмотрел на неё.

И впервые Розария заметила в его глазах что-то похожее на тревогу.

— Хорошо.

Он вздохнул.

— Ты действительно не изменилась.

— Откуда ты меня знаешь?

Молчание.

— Я задала вопрос.

Странник отвёл взгляд.

— Ты не готова.

Розария вспыхнула.

— Я сама решу, к чему готова!

Он снова посмотрел на неё.

— Именно это ты и говорила раньше.

Розария замерла.

— Раньше?

— Да.

— Когда?

Он ничего не ответил.

— Когда?!

— До того, как ты забыла.

Слова повисли между ними.

Розария почувствовала, как внутри всё похолодело.

— Ты знал меня до Элиара?

Он посмотрел прямо ей в глаза.

— Я знал тебя до того, как ты забыла меня.

Розария перестала дышать.

На несколько секунд вокруг исчезли все звуки.

Река.

Ветер.

Город.

Остался только его голос.

До того, как ты забыла меня.

— Почему я тебя не помню?

— Потому что память не всегда принадлежит тому, кто её хранит.

— Это Элена?

Он не ответил.

И Розария поняла.

— Это она.

Странник опустил глаза.

— Она пыталась тебя защитить.

— От чего?

— От меня.

Розария отступила.

— От тебя?

— Не так, как ты думаешь.

— Тогда объясни!

Он сжал ключ.

— Если я объясню сейчас, ты начнёшь вспоминать.

— И что?

— А воспоминания могут быть опасными.

Розария нервно рассмеялась.

— Ты серьёзно? После всего, что происходит, ты решил сказать мне, что воспоминания опасны?

— Именно.

— Почему?

Странник посмотрел на реку.

— Потому что твоё прошлое связано с Астерианом.

Розария замолчала.

— Что такое Астериан?

Он не ответил.

— Я уже нашла это имя.

— Знаю.

— Тогда почему ты молчишь?

— Потому что ты пока видишь только одну сторону.

— А какая другая?

Он посмотрел на неё.

— Та, в которой Астериан не место.

Розария нахмурилась.

— Тогда что это?

— Я не могу сказать.

— Почему?

— Потому что это должен сказать не я.

— Кто?

Странник посмотрел на её ключ.

— Ты.

Розария раздражённо выдохнула.

— Я ненавижу загадки.

— Знаю.

— И перестань говорить «знаю».

Он улыбнулся.

— Хорошо.

Розария хотела рассердиться.

Но почему-то не смогла.

На секунду ей показалось, что они уже так разговаривали.

Не один раз.

Много.

Она посмотрела на него.

— Мы раньше часто спорили?

— Постоянно.

— Я побеждала?

— Иногда.

— Иногда?

— Ладно. Чаще.

Розария улыбнулась.

И тут улыбка исчезла.

Потому что это чувство было слишком знакомым.

Будто она действительно знала его.

Будто рядом с ним ей не нужно было объяснять каждую свою реакцию.

Она отвернулась.

— Почему ты вернулся?

Странник долго молчал.

— Потому что время начало возвращать то, что Элена спрятала.

— Меня?

— Не только тебя.

— Тогда кого?

Он посмотрел на неё.

— Меня.

Розария нахмурилась.

— Ты тоже что-то забыл?

— Да.

— Что?

— Тебя.

Розария замерла.

Он продолжил:

— Я помнил тебя раньше. Потом забыл. Потом вспомнил снова.

— Почему?

— Потому что некоторые воспоминания не исчезают. Они просто ждут.

Ветер стал сильнее.

Вода под мостом пошла рябью.

Розария посмотрела вниз.

В отражении воды появились двое детей.

Она.

И Странник.

Розария резко отступила.

— Ты это видишь?

Он посмотрел вниз.

Его лицо изменилось.

— Нет.

— Но я вижу.

В воде маленькая Розария держала его за руку.

Она что-то говорила.

Розария не слышала.

Потом маленький Странник поднял голову.

И произнёс:

— Я вернусь.

Вода снова стала обычной.

Розария посмотрела на него.

— Ты обещал мне?

Он молчал.

— Ты обещал?

— Да.

— И вернулся.

— Да.

— Тогда почему ты выглядишь так, будто боишься?

Странник впервые не смог сразу ответить.

Он посмотрел на неё.

— Потому что я уже однажды не успел.

Розария почувствовала, как внутри что-то дрогнуло.

— Не успел что?

Он сделал шаг назад.

— Спасти тебя.

В этот момент ключ на шее Странника вспыхнул.

А её собственный ключ ответил.

Розария почувствовала тепло в ладони.

Перед ними воздух начал дрожать.

На мосту появилась тонкая светлая линия.

Вертикальная.

Будто кто-то проводил пальцем по воздуху.

Странник резко подошёл к ней.

— Розария.

— Что?

— Не открывай.

— Я ничего не делаю!

— Тогда не прикасайся к ключу.

Она посмотрела на свою руку.

Ключ двигался сам.

Он тянулся вперёд.

К линии.

К двери, которой ещё не было.

Розария попыталась отпустить его.

Не получилось.

— Странник!

Он схватил её за руку.

— Смотри на меня.

Она посмотрела.

— Не на дверь.

— Почему?

— Потому что она показывает то, чего ты хочешь.

— А если я хочу узнать правду?

— Тогда она покажет тебе то, во что ты захочешь поверить.

Розария замерла.

И поняла.

Первое воспоминание.

Она вспомнила его слова.

Не верь первому воспоминанию.

Линия в воздухе погасла.

Ключ перестал двигаться.

Розария тяжело выдохнула.

Странник всё ещё держал её за руку.

Он быстро отпустил.

— Прости.

— Ничего.

Она посмотрела на него.

— Ты правда боишься за меня?

Он улыбнулся едва заметно.

— Больше, чем должен.

Розария не знала, что ответить.

Поэтому просто посмотрела на реку.

Вода снова была спокойной.

Но теперь она знала:

в её прошлом был Странник.

В её будущем тоже.

И где-то между ними существовало место, которое называлось Астерианом.

Место, которое ждало её.

Когда Розария вернулась домой, было уже поздно.

Она прошла в свою комнату.

Закрыла дверь.

Села на кровать.

Ключ лежал на ладони.

Она перевернула его.

На обратной стороне появилась новая надпись.

Не три слова.

Не предупреждение.

Имя.

«Розария Астериан».

Она замерла.

Провела пальцем по буквам.

А затем услышала в коридоре голос Элены.

— Нет...

Розария подняла голову.

Бабушка стояла за дверью.

Она смотрела на ключ.

И впервые Розария увидела настоящий страх в её глазах.

— Бабушка?

Элена не ответила.

Она только прошептала:

— Значит, время всё-таки вернуло тебя.` },
    { title: "Глава 10: То, что Элена не сказала", text: `— Значит, время всё-таки вернуло тебя.

Розария несколько секунд просто смотрела на Элену.

Она не знала, что страшнее.

Слова бабушки.

Или то, насколько спокойно они прозвучали.

Будто Элена ждала этого.

Будто знала, что однажды Розария войдёт в эту комнату с ключом в руке.

— Вернуло?

Элена медленно закрыла дверь.

— Да.

— Откуда?

— Из места, которое ты забыла.

Розария сжала ключ.

— Элиар?

Элена ничего не ответила.

— Астериан?

Бабушка отвела взгляд.

И этого было достаточно.

— Значит, я была там.

— Да.

— Когда?

Элена молчала.

— Когда, бабушка?

— Ты была слишком маленькой, чтобы помнить.

— Тогда почему я вообще должна была забыть?

Элена посмотрела на неё.

— Потому что я попросила время забрать это воспоминание.

Розария почувствовала, как внутри всё сжалось.

— Ты попросила?

— Да.

— Ты могла просто рассказать мне!

— Нет.

— Почему?!

Элена вздрогнула от её голоса.

Розария тоже замолчала.

Она редко замечала, насколько быстро может вспыхнуть.

Но сейчас злость была сильнее неё.

— Ты все эти годы знала, — сказала она уже тише. — Знала, что я была в Элиаре. Знала про Странника. Знала про ключ.

Элена опустила глаза.

— Не всё.

— Но достаточно.

— Да.

— И всё равно молчала.

— Потому что хотела дать тебе обычную жизнь.

Розария горько усмехнулась.

— И получилось?

Элена ничего не сказала.

Розария посмотрела на неё.

— Я всё равно чувствовала, что со мной что-то не так.

— Я знаю.

— Я боялась вещей, которые даже не могла объяснить.

— Знаю.

— Я искала подвох там, где его не было.

Элена закрыла глаза.

— Знаю.

Розария сжала руки.

— И ты думала, что если я ничего не вспомню, всё исчезнет?

— Я надеялась.

— Но не исчезло.

— Нет.

В комнате повисла тишина.

---

Элена подошла к окну.

За стеклом медленно начинался дождь.

— Ты хочешь знать, что произошло девятого июня?

Розария замерла.

— Да.

— Ты уверена?

— Я устала от того, что все вокруг спрашивают меня, готова ли я.

Элена едва заметно улыбнулась.

— Ты всегда была такой.

— Какой?

— Если чего-то хочешь — идёшь до конца.

Розария ничего не ответила.

Элена продолжила:

— Девятого июня ты впервые вошла в Элиар.

— Впервые?

— Да.

— Значит, я была там раньше, чем Странник?

Элена посмотрела на неё.

— Нет.

Розария нахмурилась.

— Тогда он был там?

— Он был там до тебя.

— Сколько?

— Достаточно.

Розария вспомнила его слова.

«Я знал тебя до того, как ты забыла меня».

— Мы были друзьями?

Элена помедлила.

— Вы были детьми.

— Это не ответ.

— Иногда дети становятся друг другу ближе, чем взрослые могут понять.

Розария отвела взгляд.

В памяти снова всплыла вода.

Маленькая девочка.

Мальчик рядом.

Его обещание:

Я вернусь.

— Что произошло?

Элена долго молчала.

— Ты открыла дверь.

— Я?

— Да.

Розария посмотрела на ключ.

— Но я была ребёнком.

— Именно поэтому ты смогла.

— Почему?

— Потому что ты ещё не знала, что дверь нельзя открывать.

Розария тихо усмехнулась.

— Очень похоже на меня.

Элена тоже улыбнулась.

Но улыбка быстро исчезла.

— После того дня всё изменилось.

— Что случилось со Странником?

Элена отвернулась.

— Он остался.

— В Элиаре?

— Да.

Розария почувствовала неприятный холод.

— А я?

— Я забрала тебя.

— Оставив его?

Элена закрыла глаза.

— У меня не было выбора.

— Был.

Голос Розарии дрогнул.

— Ты могла забрать его тоже.

— Если бы я это сделала, ты бы не вернулась.

Розария замолчала.

— Почему?

— Потому что Элиар не отпускает тех, кто должен остаться.

— А почему отпустил меня?

Элена посмотрела ей в глаза.

— Потому что Элиар никогда не отпускал тебя.

Розария нахмурилась.

— Тогда почему я здесь?

— Потому что я забрала тебя раньше.

— Как?

— Через Астериан.

Розария почувствовала, что запутывается ещё сильнее.

— Я думала, Астериан — это место.

— Может быть.

— А может быть?

Элена кивнула.

— Иногда место — это не место.

Розария устало потерла виски.

— Ненавижу такие ответы.

— Я знаю.

---

Элена подошла к старому шкафу.

Открыла его.

Достала небольшую деревянную коробку.

Розария никогда раньше её не видела.

Элена поставила коробку на стол.

— Здесь то, что осталось от того времени.

Розария открыла крышку.

Внутри лежали несколько вещей.

Старая лента.

Засохший цветок.

Маленький серебряный колокольчик.

И фотография.

Розария взяла её.

На фотографии была она.

Маленькая.

Лет шесть, может быть.

Она стояла возле фонтана.

Рядом был мальчик.

Розария замерла.

— Это...

Она не договорила.

Элена кивнула.

— Да.

Розария перевернула фотографию.

На обороте была дата.

9 июня.

А ниже:

«Первый день».

Розария подняла глаза.

— Почему ты сохранила это?

— Потому что знала, что однажды ты спросишь.

— А если бы не спросила?

— Тогда я бы никогда тебе не показала.

Розария снова посмотрела на фотографию.

Маленькая она улыбалась.

А мальчик рядом смотрел не в камеру.

Он смотрел на неё.

Так, будто весь мир вокруг него перестал существовать.

Розария провела пальцем по фотографии.

И почувствовала тепло.

— Нет...

— Что?

— Я что-то вижу.

Мир дрогнул.

---

Она стояла посреди сада.

Но теперь всё было иначе.

Солнце.

Цветы.

Фонтан.

И две маленькие фигуры.

Она и Странник.

Розария наблюдала за ними.

Маленькая Розария держала ключ.

— Ты обещал, — сказала она.

— Что?

— Что не уйдёшь.

Мальчик посмотрел на неё.

— Я не уйду.

— Никогда?

Он немного подумал.

— Никогда.

Маленькая Розария улыбнулась.

А потом вода в фонтане потемнела.

Мальчик резко повернулся.

— Розария, отойди.

— Почему?

— Быстро.

Из воды появился силуэт.

Не Элиар.

Не Странник.

Кто-то другой.

Розария не могла увидеть лица.

Но услышала голос.

— Время уже выбрало.

Маленькая Розария испугалась.

Мальчик встал перед ней.

— Не трогай её.

— Ты не можешь защитить её.

— Могу.

— Тогда докажи.

Вода поднялась.

Всё вокруг начало рушиться.

Маленькая Розария закричала:

— Странник!

Он схватил её за руку.

— Я вернусь!

В этот момент появилась Элена.

Она вошла в сад.

— Розария!

Девочка побежала к ней.

Элена схватила её.

Мальчик остался у фонтана.

— Заберите её!

Элена посмотрела на него.

— Я вернусь за тобой.

— Обещаете?

— Обещаю.

Но дверь закрылась.

И Элена ушла.

Оставив его одного.

---

Розария резко открыла глаза.

Она была снова в комнате Элены.

Фотография лежала на столе.

Розария тяжело дышала.

— Ты обещала вернуться за ним.

Элена закрыла глаза.

— Да.

— Но не вернулась.

— Я пыталась.

— Пыталась?

— Дверь закрылась.

— И ты просто оставила его?

— Нет.

Голос Элены дрогнул.

— Я пыталась открыть её снова.

Розария замолчала.

— Каждый год.

Элена посмотрела на неё.

— Но Элиар не открывался.

— До сих пор.

— До сих пор.

Розария посмотрела на ключ.

Теперь всё начинало складываться.

Ключ появился после сна.

Странник вернулся.

Часы начали идти назад.

Семейное древо изменилось.

Имя Астериан появилось там, где его никогда не было.

— Почему сейчас?

Элена не ответила.

Розария посмотрела на неё.

— Почему именно сейчас?

— Потому что ты достигла возраста, в котором сила просыпается полностью.

— Сколько у меня времени?

Элена замерла.

— Что?

— Сколько времени до того, как что-то случится?

— Я не знаю.

— Ты знаешь.

— Нет.

— Бабушка.

Розария впервые заметила, что Элена выглядит старше, чем утром.

Уставшей.

Почти сломанной.

— Я не знаю, — повторила она. — Потому что теперь время делает то, чего я никогда не видела.

— Что?

Элена посмотрела на ключ.

— Оно возвращает людей.

Розария почувствовала холод.

— Кого ещё?

Элена не успела ответить.

Из коридора донёсся звук.

Три удара.

Тук.

Пауза.

Тук.

Пауза.

Тук.

Розария и Элена одновременно повернулись к двери.

— Кто там?

Ответа не было.

Элена побледнела.

— Не открывай.

Розария посмотрела на неё.

— Почему?

— Потому что я знаю этот стук.

Три удара повторились.

Тук.

Тук.

Тук.

Элена прошептала:

— Так стучали в ту ночь.

Розария медленно подошла к двери.

— Какую ночь?

Элена не ответила.

Розария положила руку на ручку.

— Розария, нет.

Она остановилась.

За дверью раздался голос.

Тихий.

Знакомый.

— Розария.

Она застыла.

Странник.

— Открой.

Элена схватила её за руку.

— Не открывай.

Розария посмотрела на бабушку.

— Почему?

Элена смотрела на дверь.

И прошептала:

— Потому что Странник никогда не стучит три раза.

Розария почувствовала, как холод проходит по всему телу.

За дверью снова раздался голос.

Но теперь он звучал иначе.

Чуть ниже.

Чуть медленнее.

— Розария...

Она отступила.

И впервые поняла:

за дверью стоял кто-то, кто очень хорошо знал голос Странника.
` },
    { title: "Глава 11:Тот, кто стучит трижды", text: `В комнате стало так тихо, что Розария услышала собственное дыхание.

Три стука всё ещё звучали в её голове.

Первый.

Второй.

Третий.

Они были совершенно обычными — тихими, почти вежливыми. Именно поэтому от них становилось ещё страшнее.

За дверью кто-то стоял.

И этот кто-то говорил голосом Странника.

— Розария. Открой.

Она невольно сделала шаг назад.

Элена мгновенно встала между ней и дверью.

— Не подходи.

— Но это же он…

— Нет.

Ответ прозвучал настолько быстро, что Розария замолчала.

— Ты даже не проверила.

— Мне не нужно проверять.

Элена посмотрела на дверь.

В её лице не осталось ни привычной мягкости, ни усталой улыбки. Перед Розарией снова была та Элена, которую она видела в старых воспоминаниях: молодая, испуганная и готовая спорить со временем, если это понадобится.

За дверью снова раздался голос.

— Розария.

На этот раз он звучал чуть иначе.

Теплее.

Почти так, как Странник говорил с ней, когда хотел успокоить.

— Я знаю, что ты там.

Розария почувствовала, как по спине пробежал холод.

— Оно знает, что я здесь.

— Конечно, знает.

— Что это?

Элена не ответила.

— Бабушка.

Молчание.

— Элена.

Старушка медленно повернула голову.

— Когда-то я думала, что смогу уничтожить это.

— Что именно?

— Не знаю.

Розария нахмурилась.

— Как это — не знаешь?

Элена посмотрела на неё.

— Потому что оно никогда не оставляет после себя одного имени.

За дверью послышался тихий смешок.

Голос Странника сказал:

— Вы снова всё усложняете.

Розария вздрогнула.

Он действительно звучал как он.

Даже интонация.

Даже эта небольшая пауза между словами.

— Это не Странник, — тихо повторила Элена.

— Тогда кто?

— То, что осталось после него.

Розария почувствовала неприятный холод в груди.

— После него?

— После того, как время забрало его.

Она хотела задать ещё один вопрос, но за дверью вдруг стало тихо.

Настолько тихо, будто там никого не было.

Элена подняла палец к губам.

Они ждали.

Прошла минута.

Потом ещё одна.

Ничего.

Розария уже начала думать, что всё закончилось.

И тогда ручка двери медленно опустилась.

Щёлк.

Розария перестала дышать.

Дверь не открылась.

Ручка поднялась обратно.

Щёлк.

Элена закрыла глаза.

— Оно не может войти, — прошептала она.

— Почему?

— Потому что у него нет разрешения.

— А если я открою?

Элена посмотрела ей прямо в глаза.

— Тогда ты сама его впустишь.

Розария сглотнула.

— А если это действительно Странник?

Элена долго молчала.

— Тогда он найдёт другой способ попасть сюда.

Эти слова почему-то напугали её сильнее всего.

Потому что в них не было сомнения.

Элена знала.

Знала, что настоящий Странник может прийти.

И знала, что тот, кто стоит за дверью, — нет.

---

Они отошли от двери только тогда, когда за окном начало светать.

Ночь растворялась медленно.

Сначала исчезла чернота над садом.

Потом стали видны очертания деревьев.

Потом первые розы у стены.

Розария сидела на краю кресла и не сводила глаз с двери.

Она почти не спала.

Каждый раз, когда закрывала глаза, ей казалось, что слышит голос:

Розария. Открой.

Элена сидела напротив и листала старую книгу.

Но уже в третий раз перечитывала одну и ту же страницу.

— Ты не спишь, — сказала Розария.

— Ты тоже.

— Я хотя бы не делаю вид.

Элена слабо улыбнулась.

— Справедливо.

Розария посмотрела на книгу.

— Там что-то есть?

— Да.

— Что?

Элена провела пальцем по пожелтевшей странице.

— Запись о первом появлении.

— Чьём?

— Астерian.

Розария замерла.

— Ты сказала, что Астериан — не человек.

— Я и не говорила, что это человек.

— Но в семейном архиве рядом с его именем стоит дата. И написано «тот, кто вернётся».

— Именно поэтому я и боялась, что ты увидишь эту запись.

Розария встала.

— Почему?

Элена закрыла книгу.

— Потому что ты начинаешь задавать правильные вопросы.

— Разве это плохо?

— Иногда правильный вопрос опаснее неправильного ответа.

Розария закатила глаза.

— Все в этой семье разговаривают загадками?

— Видимо, это наследственное.

На секунду они обе улыбнулись.

Но улыбка быстро исчезла.

Розария подошла к окну.

Сад выглядел совершенно нормально.

Слишком нормально.

— Оно ушло?

— Нет.

Розария резко повернулась.

— Тогда где оно?

Элена посмотрела в сторону сада.

— В Элиаре.

Розария почувствовала, как сердце ускорилось.

— Но дверь была здесь.

— Дверь — не всегда место.

— Опять это…

— Да.

Элена поднялась.

— Ты должна кое-что увидеть.

---

Они вышли в сад.

Утренний воздух был холодным.

Розы покрывали тонкие капли росы, и каждый лепесток блестел в первых лучах солнца.

Розария шла рядом с Эленой, но постоянно оглядывалась.

Ей всё казалось, что между деревьями кто-то стоит.

Кто-то знакомый.

Кто-то, кто выглядит как Странник.

— Бабушка…

— М?

— Если оно может выглядеть как он…

— Оно может выглядеть как любой человек, которого ты помнишь.

Розария остановилась.

— Почему?

Элена тоже остановилась.

— Потому что память — самая лёгкая дверь.

Розария посмотрела на неё.

— И оно использует её?

— Да.

— Тогда почему оно выбрало Странника?

Элена отвела взгляд.

— Потому что ты ждёшь его.

Розария ничего не сказала.

Это было правдой.

И именно поэтому было так неприятно.

Она ждала его.

Даже если пыталась убедить себя, что нет.

Даже если не знала, где он сейчас.

Даже если всё, что происходило между ними, было запутано временем, воспоминаниями и тайнами.

Она всё равно ждала.

Элена продолжила:

— Оно не может придумать воспоминание.

— Но может изменить его?

— Да.

— Тогда я могу больше никому не верить?

— Можешь.

Розария посмотрела на неё.

— Очень полезный совет.

— Я сказала «можешь», а не «должна».

Они пошли дальше.

Через несколько минут Элена остановилась возле старого фонтана.

Розария никогда раньше не обращала на него внимания.

Он почти полностью зарос мхом.

В центре находилась каменная чаша.

Вода в ней была абсолютно неподвижной.

Даже ветер не касался её поверхности.

— Что это?

— Первый источник.

Розария нахмурилась.

— Источник чего?

Элена не ответила.

Вместо этого она достала из кармана маленький предмет.

Ключ.

Не тот, который был у Розарии.

Другой.

Розария сразу узнала его.

— Это…

— Второй ключ.

Она подняла его на свет.

На металле был вырезан символ.

Не роза.

Другой цветок.

Розария приблизилась.

— Что это?

— Незабудка.

Розария почувствовала странное покалывание в пальцах.

— Почему незабудка?

Элена посмотрела на воду.

— Потому что некоторые вещи нельзя помнить.

— А некоторые нельзя забывать?

— Именно.

Элена опустила ключ в воду.

Розария резко вдохнула.

Ничего не произошло.

Потом вода дрогнула.

Один круг.

Второй.

Третий.

И на поверхности появилось отражение.

Не Розарии.

Не Элены.

Странника.

Он стоял посреди Элиара.

Совсем юный.

Розария смотрела на него, не двигаясь.

Он что-то говорил.

Но вода не передавала звука.

Потом рядом с ним появилась маленькая девочка.

Розария.

Они стояли возле той самой двери.

Той, которую она видела во сне.

Девочка держала розовый ключ.

А мальчик — ключ с незабудкой.

Розария прошептала:

— Мы были здесь вместе.

— Да.

— Но почему я этого не помню?

— Потому что я попросила время забрать это воспоминание.

— Зачем?

Элена закрыла глаза.

— Потому что тогда ты была слишком маленькой.

Вода задрожала.

Изображение изменилось.

Теперь Странник стоял один.

Девочка исчезла.

Он смотрел прямо туда, где находилась Розария.

И вдруг поднял руку.

На его ладони появился тот самый знак.

Незабудка.

А потом он сказал.

На этот раз Розария услышала.

— Если она забудет меня, я всё равно её найду.

Вода резко потемнела.

Розария отступила.

— Он знал?

— Да.

— Он знал, что я его забуду?

— Он знал, что я собираюсь заставить тебя забыть.

Розария посмотрела на Элену.

— И он согласился?

Элена покачала головой.

— Нет.

— Тогда почему позволил?

Элена долго молчала.

— Потому что в тот день он сделал выбор.

— Какой?

— Остаться в Элиаре вместо тебя.

Розария почувствовала, будто земля под ногами стала мягче.

— Что?

— Он знал, что дверь закроется. Знал, что кто-то должен остаться по ту сторону.

— И он…

Она не закончила.

Не смогла.

Элена сказала:

— Он выбрал себя вместо тебя.

Розария сжала руки.

— Но ты говорила, что оставила его.

— Я оставила его.

— Тогда почему говоришь, что это был его выбор?

Элена посмотрела ей в глаза.

— Потому что я дала ему выбор.

Вода снова стала неподвижной.

Но прежде чем отражение исчезло окончательно, Розария увидела ещё кое-что.

На берегу фонтана стояла фигура.

Не Странник.

Не ребёнок.

Высокая тёмная фигура без лица.

Она смотрела прямо на них.

И в руке держала третий ключ.

Розария резко обернулась.

Позади никого не было.

— Элена…

Но Элена уже смотрела на воду.

Её лицо побледнело.

— Что?

— Ты видела?

— Да.

— Кто это?

Элена медленно покачала головой.

— Я надеялась, что никогда больше его не увижу.

Розария почувствовала холод.

— Ты знаешь, кто это?

Элена прошептала:

— Нет.

Пауза.

— Но я знаю, чего он хочет.

— Чего?

Элена посмотрела на ключ в воде.

— Он хочет, чтобы ты вспомнила всё.

Розария нахмурилась.

— Разве это плохо?

Элена подняла глаза.

— Если ты вспомнишь всё сразу…

Она замолчала.

— Что?

— Ты вспомнишь и то, что я заставила тебя забыть.

Розария почувствовала, как внутри всё сжалось.

— Что именно?

Элена не ответила.

Где-то далеко, за стенами сада, раздался звук.

Три тихих стука.

Розария медленно повернула голову.

Элена закрыла глаза.

— Он уже здесь.

И на этот раз стучали не в дверь дома.

Стучали в ворота Элиара.
` },
    { title: "Глава 12: Третья дверь", text: `Три удара в ворота прозвучали снова.

На этот раз они были громче.

Не потому, что тот, кто стучал, бил сильнее.

Просто Элиар будто сам стал тише.

Даже ветер исчез.

Розы перестали покачиваться.

Птицы замолчали.

А вода в старом фонтане застыла так неподвижно, словно её поверхность превратилась в стекло.

Розария смотрела на ворота.

Они находились в нескольких десятках шагов от неё.

Высокие, железные, покрытые вьющимися розами.

Она помнила их с детства.

Вернее…

Она думала, что помнила.

Теперь в её памяти появилось слишком много пустых мест.

— Не открывай, — сказала Элена.

— Я и не собиралась.

— Хорошо.

Розария посмотрела на неё.

— Но ты ведь знаешь, что оно может войти само?

Элена медленно кивнула.

— Если дверь решит, что его нужно впустить.

— Дверь может решать?

— В Элиаре многое может решать.

Третий удар.

Розария вздрогнула.

— Почему именно три?

Элена сжала в руке второй ключ.

— Потому что первые два раза дверь спрашивает.

— А третий?

— Третий раз она открывается.

Розария посмотрела на ворота.

— Но они же закрыты.

— Пока.

Они направились к воротам.

Каждый шаг отдавался в Розарии неприятным ощущением, будто она идёт не вперёд, а куда-то в прошлое.

Чем ближе они подходили, тем холоднее становился воздух.

На одном из камней у дорожки Розария заметила надпись.

Она была почти стёрта.

Розария присела.

Провела пальцами по поверхности.

Буквы проступили ярче.

НЕ ВПУСКАЙ ТОГО, КТО ЗНАЕТ ТЕБЯ ЛУЧШЕ, ЧЕМ ТЫ САМА.

Розария замерла.

— Элена…

— Я знаю.

— Это ты написала?

— Нет.

Розария выпрямилась.

— Тогда кто?

Элена ничего не ответила.

Они подошли к воротам.

За ними никого не было видно.

Только длинная дорожка, уходящая в туман.

Розария нахмурилась.

— Там был сад.

— Да.

— А теперь туман.

— Да.

— Почему ты отвечаешь так спокойно?

— Потому что я уже видела это.

Элена положила ладонь на ворота.

— Очень давно.

Металл оказался покрыт инеем.

Розария увидела, как по пальцам Элены пробежала дрожь.

— Бабушка.

— Не бойся.

— Я не боюсь.

Элена посмотрела на неё.

— Ты врёшь.

— Немного.

— Это нормально.

И вдруг из тумана раздался голос.

— Розария.

Она узнала его.

Странник.

Но теперь голос звучал не из-за ворот.

Он звучал отовсюду.

Из деревьев.

Из воды.

Из камней.

Даже из воздуха.

— Розария, ты ведь хотела меня найти.

Она сделала шаг вперёд.

Элена схватила её за руку.

— Не слушай.

— Но…

— Он знает, что ты хочешь услышать.

Голос снова раздался.

— Я знаю, что ты думаешь.

Розария застыла.

— Я знаю, что ты скучаешь.

Её сердце болезненно сжалось.

— Я знаю, что ты боишься, что я снова исчезну.

Розария закрыла глаза.

— Хватит.

— Тогда открой ворота.

Она резко открыла глаза.

— Нет.

Тишина.

Потом голос изменился.

Он стал холоднее.

— Почему?

Розария посмотрела прямо в туман.

— Потому что настоящий Странник не стал бы просить меня открыть дверь, если знал бы, что Элена запрещает мне это.

Тишина.

Элена посмотрела на неё.

В её глазах появилось что-то похожее на гордость.

А затем из тумана раздался тихий смех.

Не злой.

Скорее удивлённый.

— Ты стала умнее.

Розария нахмурилась.

— Кто ты?

— Ты уже знаешь.

— Нет.

— Знаешь.

— Тогда скажи.

Туман начал двигаться.

Медленно.

Будто кто-то шёл через него.

Розария увидела сначала силуэт.

Высокий.

Тёмный.

Без лица.

Тот самый, которого она видела в воде.

Он остановился у ворот.

В руке у него был третий ключ.

Розария почувствовала, как похолодели пальцы.

— Откуда он у тебя?

Фигура не ответила.

Вместо этого подняла ключ.

Он выглядел старше двух других.

На нём не было ни розы, ни незабудки.

Только пустой круг.

— Что это значит?

Элена ответила за него.

— Ничего.

Фигура повернула голову к Элене.

— Ты всё ещё лжёшь.

Розария посмотрела на бабушку.

— О чём?

Элена молчала.

— Бабушка?

Фигура приблизилась к воротам.

— Она никогда не рассказывала тебе о третьем ключе.

Розария посмотрела на Элену.

— Потому что его не должно было существовать, — сказала та.

— Но он существует.

— Да.

— И что он открывает?

Элена посмотрела на третий ключ.

— Третью дверь.

Розария почувствовала, как внутри что-то дрогнуло.

— Я видела её.

— Где?

— Во сне.

Элена побледнела.

— Опиши.

Розария задумалась.

— Она была в конце сада.

— Какая?

— Чёрная.

Элена закрыла глаза.

— Ещё.

— На ней не было ручки.

— Ещё.

— А рядом росла белая роза.

Элена отступила на шаг.

Розария впервые увидела настоящий страх на её лице.

— Что?

Элена прошептала:

— Ты уже была там.

— Когда?

— До того, как забыла.

Туман за воротами резко закрутился.

Фигура исчезла.

Розария бросилась вперёд.

— Подожди!

Но ворота распахнулись.

Настолько быстро, что Элена не успела её остановить.

Розария сделала шаг.

И оказалась по другую сторону.

---

Элиар исчез.

Розария стояла в совершенно другом месте.

Перед ней был сад.

Но не тот сад, который она знала.

Здесь всё выглядело моложе.

Розы были выше.

Дорожки — чище.

Фонтан — целее.

Даже небо казалось другим.

Она обернулась.

Ворота стояли позади.

Элена была по ту сторону.

— Розария!

Она бросилась обратно.

Но ворота уже закрылись.

— Бабушка!

Элена ударила ладонью по металлу.

— Не двигайся!

— Как мне вернуться?

— Не открывай никакие двери!

Розария посмотрела на сад.

— Даже если найду тебя?

Элена замолчала.

— Бабушка?

— Если увидишь меня…

Пауза.

— Не подходи.

Розария похолодела.

— Почему?

Элена посмотрела ей прямо в глаза.

— Потому что это можешь быть не я.

Ворота исчезли.

Просто исчезли.

На их месте осталась каменная стена.

Розария медленно отступила.

— Отлично…

Она оглянулась.

— Просто прекрасно.

Тишина.

Она была одна.

Но почему-то не чувствовала себя одинокой.

Потому что где-то в глубине сада раздался знакомый звук.

Смех.

Тихий.

Почти детский.

Розария замерла.

— Кто там?

Ответа не было.

Она пошла вперёд.

Через несколько метров увидела старую деревянную скамью.

На ней лежал маленький предмет.

Розария подошла.

Ключ.

Но не её.

И не тот, что был у Странника.

Третий.

Она подняла его.

И в тот же момент услышала голос за спиной.

— Ты всё-таки вернулась.

Розария резко обернулась.

На дорожке стоял мальчик.

Ему было лет семь.

Тёмные волосы.

Знакомый взгляд.

В руках он держал маленькую коробку.

Розария перестала дышать.

— Странник?..

Мальчик улыбнулся.

— Ты опоздала.

Она не могла пошевелиться.

— Я тебя ждала.

Он нахмурился.

— Нет.

Розария почувствовала, как сердце забилось быстрее.

— Что?

Мальчик подошёл ближе.

— Это я тебя ждал.

Он протянул ей коробку.

— Но ты всё забыла.

Розария посмотрела на неё.

На крышке была вырезана роза.

Она осторожно открыла коробку.

Внутри лежал лист бумаги.

Всего одна фраза.

Почерк был детским.

Но она узнала его.

«Если я когда-нибудь стану для тебя чужим, не верь мне сразу.»

Розария перечитала.

Потом ещё раз.

— Почему?

Мальчик посмотрел на неё.

— Потому что однажды я вернусь не один.

— С кем?

Он посмотрел куда-то за её спину.

Розария медленно обернулась.

В глубине сада стояла дверь.

Чёрная.

Без ручки.

Перед ней росла белая роза.

Точно такая, какую она видела во сне.

А рядом с дверью стоял Странник.

Только теперь он был уже не ребёнком.

Он был таким, каким Розария знала его сейчас.

Он посмотрел на неё.

И сказал:

— Наконец-то ты вспомнила.

Розария сделала шаг назад.

— Ты настоящий?

Он ничего не ответил.

Вместо этого поднял руку.

На ладони был ключ с незабудкой.

— Открой дверь.

Розария посмотрела на него.

Потом на мальчика.

Потом на третий ключ в своей руке.

И вдруг поняла.

Она держала не ключ.

Она держала чужое воспоминание.

А значит, всё, что она сейчас видела, могло быть ложью.

И впервые за всё время она не стала верить тому, что хотела услышать.

Она крепче сжала ключ.

— Нет.

Странник нахмурился.

— Почему?

Розария посмотрела ему прямо в глаза.

— Потому что ты слишком хорошо знаешь, чего я хочу.

Он улыбнулся.

Но улыбка была неправильной.

Слишком спокойной.

Слишком пустой.

Мальчик рядом с ней вдруг прошептал:

— Молодец.

Розария резко повернулась.

Но мальчика уже не было.

А когда она снова посмотрела на Странника, его тоже не было.

Осталась только чёрная дверь.

И белая роза.

Розария подошла ближе.

На двери медленно проступили слова.

«ПЕРВАЯ ПАМЯТЬ — ЛОЖЬ.»

Она коснулась букв.

И услышала за дверью детский голос:

— Розария…

Пауза.

— А теперь вспомни вторую.
` },
    { title: "Глава 13: Вторая память", text: `— А теперь вспомни вторую.

Голос за дверью прозвучал совсем тихо.

Розария стояла неподвижно.

Перед ней была чёрная дверь.

За ней — неизвестность.

В руке она всё ещё держала третий ключ.

Он казался странно тёплым, будто до неё его кто-то долго держал.

Розария посмотрела на надпись.

ПЕРВАЯ ПАМЯТЬ — ЛОЖЬ.

Она провела пальцами по буквам.

— Тогда какая правда?

Дверь не ответила.

Вместо этого белая роза рядом с ней раскрылась.

Один лепесток.

Второй.

Третий.

И с каждым раскрывшимся лепестком Розария слышала что-то из прошлого.

Смех.

Шаги.

Шорох травы.

Детский голос.

— Быстрее!

Розария закрыла глаза.

Она знала этот голос.

Слишком хорошо.

Странник.

Но ребёнок.

— Я не успеваю!

— Ты же принцесса! Принцессы должны успевать!

— Это вообще не правило!

— Я только что придумал.

Детский смех.

Розария улыбнулась.

Совсем незаметно.

Она уже не смотрела на дверь.

Она видела сад.

Другой.

Солнечный.

Тёплый.

Без тумана.

Без чёрных стен.

Без страшных голосов.

Двое детей бегали между розами.

Мальчик был впереди.

Девочка пыталась его догнать.

— Стой!

— Догони!

— Я тебя сейчас…

— Что?

— Ничего!

Мальчик рассмеялся.

Розария открыла глаза.

— Это настоящее.

Ответа не было.

Она снова закрыла глаза.

И воспоминание продолжилось.

---

— Смотри!

Мальчик остановился возле фонтана.

В воде плавал маленький деревянный кораблик.

— Ты его сделал?

— Сам.

— Он кривой.

— Спасибо.

— Я не хотела обидеть.

— Поздно.

— Дай сюда.

Розария забрала кораблик.

— Сейчас исправлю.

— Ты сломаешь.

— Не сломаю.

— Сломаешь.

— Не сломаю!

— Сломаешь.

— Странник!

— Ладно-ладно.

Она поставила кораблик на воду.

Он поплыл.

Медленно.

По кругу.

Розария смотрела на него с гордостью.

— Видишь?

— Вижу.

— Я смогла.

— Я никогда не сомневался.

Она посмотрела на него.

— Правда?

Он кивнул.

— Правда.

Воспоминание дрогнуло.

Розария почувствовала боль.

Не физическую.

Другую.

Ту, которая возникает, когда понимаешь, что что-то очень хорошее когда-то существовало, а потом исчезло.

Она открыла глаза.

— Почему я этого не помню?

Чёрная дверь молчала.

Розария сжала ключ.

— Я хочу знать.

Дверь открылась.

---

За ней была не комната.

Там было лето.

Розария стояла посреди поляны.

Ей снова было семь.

Рядом был Странник.

Он держал её за руку.

— Ты обещала.

— Что?

— Не отпускать.

Она посмотрела на их руки.

— Я не отпущу.

— Даже если Элена попросит?

Девочка задумалась.

— Даже тогда.

Мальчик улыбнулся.

— Хорошо.

Они подошли к фонтану.

На его краю лежали два ключа.

Розовый и с незабудкой.

Но рядом стоял ещё один.

Третий.

Пустой круг.

Розария в настоящем резко открыла глаза.

— Третий ключ…

Воспоминание продолжалось.

Мальчик взял его.

— Он твой.

— Почему?

— Потому что ты должна однажды открыть третью дверь.

— А ты?

— Я буду рядом.

— Обещаешь?

— Обещаю.

Девочка улыбнулась.

И тогда в сад вошла Элена.

Но она была моложе.

Гораздо моложе.

И на её лице был страх.

— Розария.

Дети обернулись.

— Бабушка!

Девочка побежала к ней.

Элена присела и крепко обняла её.

Но потом посмотрела на мальчика.

— Ты должен уйти.

Он покачал головой.

— Нет.

— Странник.

— Я не оставлю её.

— Ты не понимаешь.

— Понимаю.

Элена посмотрела на него.

— Если она останется, Астериан найдёт её.

Мальчик замер.

— Он уже нашёл.

Элена побледнела.

— Что ты сказал?

Мальчик показал на воду.

На поверхности фонтана появился силуэт.

Тёмный.

Без лица.

Розария в настоящем почувствовала холод.

Это была та же фигура.

Она была здесь.

С самого начала.

Элена резко подняла Розарию на руки.

— Бежим.

— Но Странник!

— Сейчас же!

— Нет!

Девочка протянула руки.

Странник схватил её за ладонь.

Но Элена была сильнее.

На несколько секунд их пальцы всё ещё соприкасались.

Потом разомкнулись.

Мальчик остался в саду.

Розария плакала.

— Вернись!

— Я вернусь!

— Обещаешь?

— Обещаю!

Элена вынесла её через дверь.

И в тот момент, когда дверь закрывалась, Розария увидела нечто за спиной Странника.

Тёмная фигура стояла рядом с ним.

И держала третий ключ.

---

Розария открыла глаза.

Она снова была перед чёрной дверью.

Но теперь она была одна.

Белая роза осыпалась.

Лепестки лежали на земле.

Она тяжело дышала.

— Он не остался по своей воле…

Внутри что-то болезненно сжалось.

— Элена забрала меня.

Она посмотрела на третий ключ.

— А кто остался?

Ответ пришёл сразу.

Из-за двери.

— Не он.

Розария замерла.

Голос был не Странника.

Не ребёнка.

И даже не того существа.

Это был голос самой Розарии.

Её собственный голос.

— Что?..

— Ты оставила его.

Розария отступила.

— Нет.

— Ты обещала вернуться.

— Я была ребёнком.

— Но обещала.

— Я не могла!

— Ты могла.

Розария закрыла уши.

— Замолчи.

— Ты могла.

— Замолчи!

— Ты могла.

— Я сказала, замолчи!

Третий ключ в её руке задрожал.

На металле появилась новая надпись.

«ПАМЯТЬ НЕ ВРЁТ. ВРЁТ ТОТ, КТО ЕЁ СОХРАНЯЕТ.»

Розария замерла.

Элена.

Слова будто ударили её.

Неужели дело было не только в том, что она забыла?

Неужели кто-то всё это время выбирал, какие воспоминания ей оставить?

Она посмотрела на дверь.

— Элена…

В ответ — тишина.

— Если ты меня слышишь…

Ничего.

— Я хочу знать правду.

Тогда за дверью раздался голос.

Но теперь он был совсем другим.

Старым.

Уставшим.

Знакомым.

Голос Элены.

— Тогда тебе придётся увидеть третью память.

Розария подняла глаза.

— Ты здесь?

— Нет.

— Тогда откуда ты говоришь?

— Из того места, которое ты забыла.

Розария медленно подошла к двери.

— Что в третьей памяти?

Долгая пауза.

— Причина, по которой я стерла первые две.

Розария почувствовала, как по коже пробежали мурашки.

— И что там произошло?

Элена ответила:

— Ты открыла дверь сама.

Тишина.

— Какую?

— Ту, которую не должна была видеть.

Розария посмотрела на чёрную дверь.

На белую розу.

На третий ключ.

И впервые заметила то, чего раньше не было.

На самой двери появился маленький символ.

Роза.

А под ней — незабудка.

А между ними…

Пустой круг.

Три ключа.

Три памяти.

Три двери.

Розария медленно протянула руку.

Но прежде чем она коснулась двери, услышала шаги.

Сзади.

Один.

Второй.

Третий.

Она не обернулась.

— Кто там?

Ответа не было.

Только тихий голос:

— Ты опять не дождалась меня.

Розария замерла.

Она знала этот голос.

Настоящий.

Не отражение.

Не память.

Не подделка.

Странник.

— Где ты? — прошептала она.

— За твоей спиной.

Розария закрыла глаза.

И впервые за всё это время ей стало страшно повернуться.

Потому что если он действительно стоял там…

то кто тогда был за чёрной дверью?
` },
    { title: "Глава 14: За твоей спиной", text: `
— Ты опять не дождалась меня.

Розария закрыла глаза.

Несколько секунд она просто стояла, не двигаясь.

За спиной слышалось дыхание.

Настоящее.

Не такое, каким его показывала вода.

Не такое, каким его возвращала память.

Просто дыхание человека.

Розария медленно повернула голову.

Странник стоял в нескольких шагах от неё.

Не ребёнок.

Не отражение.

Не силуэт в тумане.

Он.

Таким, каким она его знала.

На его одежде были следы дороги, волосы растрепались от ветра, а в руке он держал ключ с незабудкой.

Он смотрел на неё несколько секунд, будто тоже не до конца верил, что действительно нашёл её.

— Ты настоящая?

Розария невольно усмехнулась.

— Вообще-то это я собиралась тебя об этом спросить.

— Тогда спрашивай.

Она внимательно посмотрела на него.

— Как мы впервые встретились?

Он не ответил сразу.

— Ты хочешь проверить меня?

— Да.

— Хорошо.

Он сделал шаг ближе.

— Тебе было семь.

Розария нахмурилась.

— Это я уже знаю.

— Ты заблудилась в саду.

— Нет.

— Ты утверждала, что не заблудилась.

Розария замерла.

— Я сказала, что просто исследую.

Странник улыбнулся.

— Именно.

Она впервые за долгое время почувствовала, как напряжение внутри немного отпускает.

— А потом?

— Потом ты нашла старую беседку и решила, что это твой дворец.

— Я не помню.

— Знаю.

Он произнёс это спокойно.

Без упрёка.

— Что ещё?

— Ты заставила меня стать своим рыцарем.

— Я?

— Ты.

— И что я сказала?

— «Если будешь хорошим рыцарем, я дам тебе половину королевства».

Розария невольно улыбнулась.

— Я бы сказала именно так.

— А потом передумала.

— Почему?

— Потому что решила, что половина королевства тебе пригодится самой.

— Очень разумно.

— Я тоже так думал.

На несколько секунд они просто смотрели друг на друга.

Всё вокруг казалось почти нормальным.

Слишком нормальным.

Но Розария не забыла, где находится.

Она подняла третий ключ.

— Что это?

Странник посмотрел на него.

Улыбка исчезла.

— Где ты его нашла?

— Здесь.

— Не бери его больше.

— Почему?

— Потому что он не открывает дверь.

Розария нахмурилась.

— А что тогда?

— Он открывает воспоминание.

Она посмотрела на чёрную дверь.

— Она сказала, что первая память — ложь.

— Кто?

— Дверь.

Странник посмотрел на неё так, будто надеялся, что она пошутила.

— Ты разговаривала с дверью?

— А что мне оставалось делать?

— Ничего.

— Очень полезный совет.

Он тихо рассмеялся.

И этот смех окончательно убедил её.

Это действительно был он.

Тот самый смех.

Не идеальная копия.

Не воспоминание.

Живой человек.

Розария выдохнула.

— Я думала, что больше тебя не увижу.

Странник опустил взгляд.

— Я тоже.

— Тогда почему ты здесь?

Он посмотрел на чёрную дверь.

— Потому что она позвала меня.

— Она?

— Элиар.

Розария замолчала.

— Элиар — это сад?

— Не совсем.

— Тогда что?

Странник покачал головой.

— Я всё ещё не знаю.

— Но ты был здесь раньше.

— Да.

— Сколько раз?

— Не знаю.

— Как это возможно?

— Потому что здесь время не идёт одинаково.

Он посмотрел на деревья.

— Для тебя могли пройти годы.

— А для тебя?

— Иногда несколько часов.

— А иногда?

— Несколько десятилетий.

Розария почувствовала неприятный холод.

— И ты всё это время был здесь?

— Не всё.

— Где ты был?

Странник посмотрел на неё.

— Между.

— Между чем?

— Между тем, что произошло, и тем, что должно было произойти.

Она хотела спросить ещё, но услышала звук.

Тихий.

Металлический.

Ключ в её руке повернулся сам.

— Что…

Третий ключ потянул её вперёд.

Розария попыталась удержать его, но пальцы разжались.

Ключ полетел к чёрной двери.

Он не ударился о неё.

Он просто исчез в металле.

И дверь впервые за всё время издала звук.

Щёлк.

Странник резко подошёл к Розарии.

— Назад.

— Что происходит?

— Она открывается.

— Но у неё нет ручки.

— Ей не нужна ручка.

По поверхности двери прошла тонкая трещина света.

Розария увидела за ней не комнату.

Не коридор.

Сад.

Но совсем другой.

Он был покрыт снегом.

Розы стояли под ледяной коркой.

Деревья были голыми.

А в центре сада стояла маленькая девочка.

Розария.

Семилетняя.

Она держала за руку мальчика.

Странника.

Но они не были одни.

За ними стояла Элена.

И рядом с ней — кто-то ещё.

Розария прищурилась.

Лица не было видно.

— Кто это?

Странник ничего не ответил.

— Ты знаешь?

— Да.

— Кто?

Он крепче сжал её руку.

— Не смотри.

— Почему?

— Потому что это не воспоминание.

Розария посмотрела на него.

— Тогда что?

— Предупреждение.

Свет за дверью стал ярче.

Изображение приблизилось.

Теперь Розария увидела лицо неизвестного.

Она резко отступила.

Потому что лицо было знакомым.

Очень знакомым.

Она видела его раньше.

На старой фотографии.

В архиве.

В воде.

В воспоминаниях.

Но это было невозможно.

Потому что человек на фотографии был…

Элена.

Только моложе.

Гораздо моложе.

И рядом с ней стоял мужчина, которого Розария никогда раньше не видела.

Мужчина держал третий ключ.

А маленький Странник говорил:

— Не отдавай ей ключ.

Розария посмотрела на настоящего Странника.

— Кому?

Он молчал.

— Кому он его не должен был отдавать?

Странник наконец ответил:

— Тебе.

Розария нахмурилась.

— Почему?

— Потому что тогда ты бы открыла дверь.

— Какую?

— Эту.

Чёрная дверь дрогнула.

Снег за ней исчез.

Теперь Розария видела летний день.

Тот самый.

Первый день.

9 июня.

Она увидела себя ребёнком.

Увидела Странника.

Увидела Элену.

И увидела мужчину.

Он стоял возле фонтана.

А на его лице была улыбка.

Розария присмотрелась.

Она уже почти узнала его.

Но изображение внезапно исчезло.

Дверь захлопнулась.

Третий ключ выпал на землю.

Розария тяжело дышала.

— Кто он?

Странник поднял ключ.

— Пока не должен тебе сказать.

— Почему?

— Потому что если скажу, ты начнёшь искать его.

— А если я уже хочу?

— Тогда он найдёт тебя раньше.

Розария посмотрела на него.

— Он жив?

Странник молчал.

Этого было достаточно.

— Он жив.

— Возможно.

— Ты знаешь.

— Я знаю, что время не любит прямых ответов.

Розария нахмурилась.

— Хватит говорить загадками.

— Я стараюсь.

— Плохо стараешься.

Он усмехнулся.

— Ты не изменилась.

— А ты изменился.

Улыбка исчезла.

— Да.

Розария посмотрела на него внимательнее.

В его глазах было что-то такое, чего она раньше не замечала.

Усталость.

Не обычная.

Такая, которая появляется у человека, слишком долго жившего с одной и той же тайной.

— Что с тобой случилось?

— Ничего.

— Ты врёшь.

— Да.

Она удивилась.

— Ты даже не споришь?

— Нет.

— Почему?

— Потому что теперь я знаю: тебе лучше говорить правду.

Он протянул ей ключ.

— Держи.

Розария не взяла его.

— Ты уверен?

— Нет.

— Тогда почему отдаёшь?

— Потому что он уже выбрал тебя.

— Кто?

Странник посмотрел на третий ключ.

— Элиар.

Розария осторожно взяла его.

На этот раз он был холодным.

Совершенно холодным.

И тогда на его поверхности появилась новая надпись.

Всего два слова.

«ВСПОМНИ МЕНЯ.»

Розария подняла взгляд.

— Это ты написал?

— Нет.

— Тогда кто?

Странник посмотрел на чёрную дверь.

— Вот это мне и не нравится.

Где-то далеко раздался колокольный звон.

Один удар.

Потом второй.

Третий.

Странник резко побледнел.

— Что?

— Нам нужно уходить.

— Почему?

Он посмотрел на неё.

— Потому что часы снова остановились.

Розария прислушалась.

Тишина.

— Но я ничего не слышу.

— Именно.

Он взял её за руку.

— Пока здесь тихо, у нас есть время.

— А когда часы снова пойдут?

Странник посмотрел на чёрную дверь.

— Тогда третья память начнёт вспоминать тебя сама.` },
    { title: "Глава 15: Когда часы молчат", text: `— Пока здесь тихо, у нас есть время.

Странник всё ещё держал Розарию за руку.

Она смотрела на него, потом на сад.

Ничего не происходило.

Ни ветра.

Ни шелеста листьев.

Ни пения птиц.

Даже вода в фонтане не двигалась.

Это было не просто затишье.

Элиар будто перестал существовать на одно мгновение.

— Сколько у нас времени? — спросила Розария.

— Не знаю.

— Ты ведь только что сказал, что оно есть.

— Есть.

— Тогда сколько?

Странник посмотрел на небо.

— Пока не услышишь первый звук.

— А что будет первым?

Он не ответил.

— Странник.

— Лучше тебе не знать.

— Ненавижу, когда ты так говоришь.

— Я знаю.

Он отпустил её руку.

— Нам нужно идти.

— Куда?

— К центру Элиара.

Розария посмотрела на сад.

— Разве мы не у центра?

— Нет.

— А где?

— Мы вообще сейчас не там, где думаешь.

Она нахмурилась.

— Это снова из-за времени?

— Да.

— Тогда объясни.

Странник остановился.

— Хорошо.

Он посмотрел на неё.

— Представь, что Элиар — это не сад.

— А что?

— Часы.

Розария моргнула.

— Часы?

— Огромные часы.

— Ладно.

— А мы внутри них.

— И?

— Иногда стрелки идут вперёд. Иногда назад. Иногда одна стрелка остаётся на месте, а другая продолжает двигаться.

— И сейчас?

— Сейчас обе остановились.

Розария посмотрела на него.

— Что это значит?

— Что Элиар не знает, какое время выбрать.

Она замолчала.

— А если он не выберет?

Странник посмотрел на третий ключ.

— Тогда начнёт выбирать за нас.

Они пошли.

---

Дорожка, по которой они шли, постепенно становилась незнакомой.

Розария была уверена, что знает этот сад.

Но теперь каждый поворот приводил туда, где она раньше никогда не была.

Они прошли мимо фонтана.

Потом мимо высокой арки.

Потом увидели старую оранжерею.

На стекле проступали узоры инея.

— Она была здесь раньше?

— Да.

— Почему я её не помню?

— Потому что её не было в твоём времени.

Розария остановилась.

— Это как вообще?

— Очень неудобно.

— Спасибо.

— Пожалуйста.

Она снова пошла.

Внутри оранжереи было тепло.

Слишком тепло.

Розы росли вдоль стен, переплетаясь между собой.

Некоторые были обычными.

Другие казались почти прозрачными.

А одна роза была полностью чёрной.

Розария остановилась возле неё.

— Не трогай.

— Почему?

— Потому что она помнит слишком много.

— Растение может помнить?

— В Элиаре — да.

Розария внимательно посмотрела на цветок.

— Что она помнит?

Странник отвёл взгляд.

— Меня.

Она ничего не сказала.

— Почему?

— Потому что когда-то я посадил её здесь.

— Зачем?

— Для тебя.

Розария посмотрела на него.

— Я любила чёрные розы?

— Нет.

— Тогда зачем?

— Потому что ты сказала, что хочешь цветок, который никто никогда не сможет у тебя отнять.

Она провела пальцем по воздуху возле лепестка, но не коснулась его.

— Я сказала это?

— Да.

— А ты запомнил?

— Всё.

Розария улыбнулась.

Но улыбка быстро исчезла.

— А я забыла.

Странник ничего не ответил.

Это молчание оказалось тяжелее любого ответа.

Они прошли дальше.

В конце оранжереи находилась маленькая дверь.

Обычная.

Деревянная.

С круглой ручкой.

Странник открыл её.

За ней оказался коридор.

Розария остановилась.

— Я думала, мы идём в центр сада.

— Так и есть.

— Почему тогда здесь коридор?

— Потому что центр Элиара находится не в пространстве.

Она вздохнула.

— Конечно.

---

Коридор был длинным.

На стенах висели картины.

Розария сначала не обращала на них внимания.

Пока не увидела первую знакомую.

На ней была Элена.

Молодая.

Рядом стояла девочка.

Розария.

Ей было около пяти лет.

Она держала в руках белую розу.

На следующей картине Розарии было шесть.

На следующей — семь.

Но каждый раз рядом находился Странник.

Иногда они сидели у фонтана.

Иногда бегали по саду.

Иногда просто разговаривали.

Розария остановилась.

— Почему эти картины здесь?

Странник посмотрел на них.

— Потому что Элиар хранит всё.

— Даже то, что люди хотят забыть?

— Особенно это.

Она подошла ближе.

На последней картине они стояли перед чёрной дверью.

Розарии было семь.

Страннику тоже.

Но рядом с ними стоял ещё один человек.

Мужчина.

Тот самый.

Розария почувствовала, как сердце ударило сильнее.

— Это он.

Странник кивнул.

— Да.

— Ты знаешь его имя?

Он помолчал.

— Знаю.

— Скажи.

— Не могу.

— Почему?

— Потому что имя — это тоже ключ.

Розария сжала губы.

— Тогда хотя бы скажи, кем он был.

Странник посмотрел на картину.

— Он был хранителем третьей двери.

— А сейчас?

— Сейчас он хочет открыть её.

Розария посмотрела на него.

— Зачем?

— Чтобы вернуть то, что Элена забрала.

— Моё воспоминание?

— Не только твоё.

— А что ещё?

Странник отвернулся.

— Моё.

Розария замерла.

— Что?

Он медленно повернулся к ней.

— Элена стерла не только твои воспоминания.

— Тогда чьи?

— Мои.

Розария смотрела на него.

— Ты тоже забыл?

— Да.

— Что именно?

Он усмехнулся.

— Если бы я знал, не пришлось бы искать.

Они продолжили идти.

Но теперь Розария смотрела на картины внимательнее.

И заметила кое-что странное.

На каждой картине их становилось меньше.

Сначала были трое.

Потом двое.

Потом только она.

Потом только Странник.

А на последней картине стояла пустая дверь.

Без людей.

— Почему здесь нет Элены?

Странник остановился.

— Потому что последнюю картину она уничтожила.

— Тогда почему она здесь?

Он посмотрел на стену.

— Потому что Элиар не умеет забывать.

---

В конце коридора они вышли в огромный зал.

В центре стояли часы.

Огромные.

Выше человеческого роста.

Без стрелок.

Без цифр.

Только круглый циферблат и три отверстия.

Розария подошла ближе.

— Это и есть центр?

— Да.

Она достала ключ.

Первый — с розой.

Второй — с незабудкой.

Третий — с пустым кругом.

Три отверстия.

Розария посмотрела на Странника.

— Они подходят?

— Не знаю.

— Но ты знал про них.

— Да.

— И не сказал.

— Да.

— Ты ужасный человек.

— Знаю.

Она посмотрела на него.

— Ты хотя бы иногда можешь отвечать «нет»?

— Нет.

Розария рассмеялась.

Совсем тихо.

Но смех быстро исчез.

Потому что часы начали двигаться.

Без стрелок.

Внутри механизма что-то щёлкнуло.

Раз.

Два.

Три.

Три отверстия загорелись слабым светом.

Первое.

Второе.

Третье.

Странник резко изменился в лице.

— Назад.

— Почему?

— Розария, сейчас же.

Но было поздно.

Третий ключ в её руке начал нагреваться.

Она вскрикнула и выронила его.

Ключ упал на пол.

И зал наполнился голосами.

Детскими.

Взрослыми.

Знакомыми.

Незнакомыми.

Сотнями голосов.

Все говорили одновременно.

Но один пробился сквозь остальные.

Голос Розарии.

Только старше.

Испуганнее.

— Я не хотела.

Розария замерла.

— Что?

Голос повторил:

— Я не хотела этого делать.

Странник подошёл к ней.

— Не слушай.

— Это мой голос.

— Знаю.

— Но я этого не помню.

— Знаю.

— Тогда что я сделала?

Странник посмотрел на часы.

— Мы должны уйти.

— Что я сделала?

— Розария…

— Скажи мне!

Он замолчал.

И в этот момент часы заговорили.

Не голосом.

Стук.

Один.

Стук.

Два.

Стук.

Три.

На циферблате появилась надпись.

«ВТОРАЯ ПАМЯТЬ ВОЗВРАЩЕНА.»

Розария побледнела.

— Но мы только что её видели.

Странник покачал головой.

— Нет.

— Что значит «нет»?

— То, что ты видела, было только частью.

Розария почувствовала, как внутри всё холодеет.

— А где остальное?

Странник посмотрел на часы.

— В тебе.

— Тогда почему я его не помню?

— Потому что ты сама его спрятала.

Розария замерла.

— Я?

— Да.

— Зачем?

Он посмотрел ей в глаза.

— Чтобы однажды, когда придёт время, никто не смог заставить тебя вспомнить раньше срока.

— Кто?

Странник медленно повернул голову.

В дальнем конце зала стоял человек.

Тот самый.

Хранитель третьей двери.

Теперь его лицо было видно.

Розария узнала его.

Она знала его.

Не по картине.

Не по фотографии.

Не по воде.

По памяти.

Только эта память была не её.

Мужчина улыбнулся.

— Наконец-то.

Странник встал перед Розарией.

— Не подходи.

Мужчина сделал шаг.

— Я не к ней пришёл.

Он посмотрел на Странника.

— Я пришёл за тобой.

И тогда все часы в Элиаре одновременно пошли.
` },
    { title: "Глава 16: Имя Хранителя", text: `И тогда все часы в Элиаре одновременно пошли.

Сначала Розария услышала один звук.

Тихий.

Почти незаметный.

Тик.

Она даже не сразу поняла, что это было.

Потом второй.

Так.

А затем десятки, сотни, тысячи механизмов ответили друг другу из темноты.

Элиар ожил.

Стрелки на старых часах сорвались с места. Одни пошли вперёд, другие — назад. На некоторых циферблатах цифры начали меняться местами, словно время больше не помнило, в каком порядке должно существовать.

Розария невольно отступила.

Странник тут же встал перед ней.

Хранитель не двигался.

Он просто смотрел.

И почему-то именно это пугало сильнее всего.

— Ты пришёл за мной, — тихо сказала Розария.

Хранитель перевёл взгляд на неё.

— Нет.

Ответ прозвучал неожиданно.

— Тогда за кем?

Он посмотрел на Странника.

— За ним.

Странник сжал руку, в которой держал ключ с незабудкой.

— Я никуда с тобой не пойду.

— Я не спрашивал.

На несколько секунд стало совершенно тихо.

Даже часы будто замерли.

Розария посмотрела на Странника.

Она впервые увидела в его лице не раздражение и не страх.

А узнавание.

Будто он уже слышал этот голос.

Не здесь.

Не сейчас.

Где-то очень давно.

— Ты его знаешь? — спросила она.

Странник не ответил.

— Знаешь?

— Не знаю.

— Ты врёшь.

Он резко посмотрел на неё.

— Я не помню.

Эти слова прозвучали совсем иначе.

Не как оправдание.

Как признание.

Хранитель медленно подошёл ближе.

— Вот поэтому я и пришёл.

— Чтобы вернуть ему память? — спросила Розария.

— Чтобы вернуть то, что было отнято.

Розария нахмурилась.

— Кем?

Хранитель посмотрел на неё.

— Тобой.

Она застыла.

— Что?

Странник резко обернулся к нему.

— Не смей.

Но Хранитель продолжил:

— Ты уже забрала часть его памяти однажды.

— Я ничего у него не забирала!

— Не ты сегодняшняя.

Он сделал паузу.

— Та Розария.

От этих слов внутри неё словно что-то оборвалось.

Та Розария.

Не она.

И одновременно — она.

— Я была ребёнком.

— Именно.

Странник подошёл ближе.

— Не слушай его.

— Почему?

— Потому что он хочет, чтобы ты вспомнила всё сразу.

Хранитель усмехнулся.

— А ты боишься, что она вспомнит?

Странник ничего не сказал.

Розария посмотрела на него.

И впервые заметила странную вещь.

Он не смотрел на Хранителя.

Он смотрел на неё.

Так, будто боялся не за себя.

А за то, что она может узнать.

— Странник…

— Потом.

— Нет. Сейчас.

Он закрыл глаза.

Несколько секунд молчал.

Потом тихо сказал:

— Я не помню день, когда мы впервые встретились.

Розария почувствовала холод.

— Но ты помнишь меня.

— Да.

— Как?

— Отрывками.

Он провёл рукой по волосам.

— Я помню твой голос. Помню, как ты смеялась. Помню, что ты всегда спорила со мной, даже когда была неправа.

Розария чуть улыбнулась.

— Я никогда не была неправа.

— Вот видишь.

На мгновение между ними возникло что-то почти обычное.

Но улыбка Странника быстро исчезла.

— А потом… пустота.

— Что именно ты не помнишь?

Он посмотрел на часы.

— Последний день.

Хранитель произнёс:

— Потому что именно тогда ты вошёл в Астериан.

Слово отдалось эхом.

Астериан.

Розария почувствовала, как ключ в её кармане нагрелся.

— Что такое Астериан на самом деле?

Хранитель не ответил сразу.

Он посмотрел на часы.

— Это не место.

Розария уже слышала подобное.

Но теперь ответ звучал иначе.

— Тогда что?

— Это то, что остаётся между двумя воспоминаниями.

Она нахмурилась.

— Я не понимаю.

— Представь, что ты помнишь начало истории и её конец.

Он провёл пальцем по воздуху.

— Но забыла середину.

— И?

— Астериан находится именно там.

Розария замолчала.

Хранитель продолжил:

— Между тем, что произошло, и тем, что ты думаешь, что произошло.

Странник тихо произнёс:

— Поэтому его нельзя найти.

— Можно.

— Нет.

— Можно, если ты уже потерялся внутри.

Странник посмотрел на него.

И вдруг побледнел.

Розария сразу это заметила.

— Что?

Он не ответил.

— Странник?

— Я вспомнил.

— Что?

Он сделал шаг назад.

— Коридор.

Хранитель закрыл глаза.

— Наконец.

— Я был там.

— Да.

— Один.

— Нет.

Странник нахмурился.

— Кто был со мной?

Хранитель посмотрел на Розарию.

Она почувствовала, как сердце ударило сильнее.

— Нет, — прошептал Странник.

— Ты был не один.

— Я сказал нет.

— Ты сам знаешь ответ.

Странник отвернулся.

Розария подошла к нему.

— Кто был рядом с тобой?

Он долго молчал.

А потом сказал:

— Ты.

У Розарии перехватило дыхание.

— Я?

— Ты держала меня за руку.

В её голове что-то вспыхнуло.

Коридор.

Холодный каменный пол.

Слабый свет.

Маленькая ладонь в её руке.

И голос.

Её собственный.

«Если мы заблудимся, просто иди за мной.»

Она резко закрыла глаза.

Перед ней возникла дверь.

Чёрная.

Та самая.

Но теперь рядом с ней стоял не взрослый Странник.

А ребёнок.

Маленький мальчик смотрел на неё.

И плакал.

Розария открыла глаза.

— Я видела это.

Странник смотрел на неё.

— Что?

— Ты плакал.

Он замер.

— Я?

— Да.

— Я не плачу.

— Ты плакал.

Он отвернулся.

— Значит, это было давно.

Розария почти улыбнулась.

Но Хранитель сказал:

— Потому что ты тогда исчезла.

Улыбка исчезла.

— Что значит исчезла?

— Розария, — тихо сказал Странник.

— Нет. Я хочу знать.

Хранитель подошёл к часам.

На циферблате появилась новая надпись.

Буквы проступали прямо на старом металле.

«ПАМЯТЬ ТРЕТЬЯ НЕ ПРИНАДЛЕЖИТ ОДНОМУ ЧЕЛОВЕКУ.»

Розария прочитала её вслух.

— Что это значит?

— Что ты не сможешь вспомнить её одна.

— А кто ещё должен вспомнить?

Хранитель посмотрел на Странника.

— Он.

Странник медленно поднял голову.

— И если я вспомню?

— Тогда третья дверь откроется.

Розария почувствовала холод.

— А что за ней?

Хранитель впервые за всё время выглядел не загадочным.

Не спокойным.

Не уверенным.

Он выглядел испуганным.

— Не знаю.

Розария нахмурилась.

— Ты Хранитель и не знаешь?

— Я храню дверь.

Он посмотрел на неё.

— Но не знаю, что находится за ней.

Странник сжал ключ.

— Тогда зачем тебе я?

Хранитель ответил не сразу.

— Потому что дверь открывается не ключом.

Он посмотрел прямо на него.

— Она открывается тем, кто её закрыл.

В этот момент часы остановились.

Все.

Одновременно.

Розария посмотрела на чёрную дверь в конце зала.

На ней появилась тонкая светящаяся трещина.

Из-за двери донёсся голос.

Детский.

Знакомый.

До боли знакомый.

— Розария…

Она перестала дышать.

Странник схватил её за руку.

— Не отвечай.

Голос повторил:

— Розария…

А потом добавил:

— Ты обещала вернуться.

Розария посмотрела на Странника.

Он был совершенно бледным.

— Я знаю этот голос, — прошептал он.

— Чей?

Он медленно посмотрел на дверь.

— Мой.` },
    { title: "Глава 17: Голос за дверью", text: `— Мой.

Это слово ещё долго стояло между ними.

Не исчезало.

Не растворялось в тишине.

Мой.

Розария смотрела на Странника, а он — на чёрную дверь.

Она никогда не видела его таким.

Даже тогда, когда Хранитель появился перед ними.

Даже тогда, когда часы сошли с ума.

Даже тогда, когда выяснилось, что их прошлое было совсем не таким, каким она его помнила.

Но сейчас в его лице было что-то другое.

Не страх.

Не совсем.

Скорее, ужас от узнавания.

— Это невозможно, — тихо сказал он.

За дверью снова раздался его голос.

Но теперь он звучал чуть иначе.

Моложе.

Мягче.

Так, как Странник мог бы говорить много лет назад.

— Ты всегда так говорил.

Странник вздрогнул.

Розария сжала его руку.

— Что?

— Он знает.

— Кто?

— Меня.

Голос за дверью усмехнулся.

— Конечно, я знаю тебя.

Странник шагнул к двери.

Розария удержала его.

— Не надо.

— Я должен услышать.

— А если он специально этого хочет?

— Тогда я узнаю зачем.

Хранитель стоял неподалёку и молчал.

Розария посмотрела на него.

— Ты знаешь, что там?

— Нет.

— Тогда почему ты не остановишь его?

Хранитель ответил спокойно:

— Потому что если дверь решила говорить, она всё равно будет говорить.

— Очень успокаивает.

— Я не пытался.

Розария бросила на него недовольный взгляд.

Странник почти незаметно улыбнулся.

Совсем чуть-чуть.

И эта маленькая улыбка почему-то помогла ей не испугаться окончательно.

Она снова посмотрела на дверь.

— Если ты действительно Странник… скажи что-нибудь, чего он не знает.

Тишина.

Потом голос ответил:

— Он знает.

Розария нахмурилась.

— Что?

— Он знает всё, что нужно.

Странник медленно поднял голову.

— Тогда скажи мне то, чего я забыл.

Голос за дверью замолчал.

На несколько секунд.

А затем произнёс:

— Ты ненавидел грозу.

Странник застыл.

Розария посмотрела на него.

— Ты говорил, что не боишься её.

Голос продолжил:

— Но каждый раз, когда начинался дождь, ты закрывал ставни в комнате.

Странник побледнел.

— Это может знать любой.

— Тогда другое.

Голос стал тише.

— Ты однажды разбил часы.

Розария посмотрела на Странника.

— Какие часы?

Он молчал.

— Ты разбил их потому, что они показывали неправильное время.

Странник медленно прикрыл глаза.

— Я помню.

— Нет, — ответил голос. — Ты помнишь только это.

На двери появилась первая светящаяся линия.

— Ты разбил часы не потому, что они шли неправильно.

Вторая линия.

— Ты разбил их потому, что они показали тебе день, который ещё не наступил.

Третья.

Розария почувствовала, как холод прошёл по спине.

Странник открыл глаза.

— Какой день?

Голос ответил:

— Девятое июня.

Розария перестала дышать.

Эта дата.

Снова.

Она уже встречала её.

В архиве.

В старой фотографии.

В первом дне.

В том дне, когда они впервые пришли в Элиар.

— Что произошло девятого июня? — спросила Розария.

Голос за дверью не ответил.

Вместо него заговорил Странник:

— Мы пришли сюда.

— Да.

— А потом ты исчезла.

— Я не исчезала.

— Исчезала.

Он посмотрел на неё.

— Для меня — да.

Розария ничего не сказала.

Она вдруг почувствовала странное давление в голове.

Будто кто-то осторожно открывал ящик, который она сама когда-то заперла.

Перед глазами мелькнула картинка.

Сад.

Летний вечер.

Ей семь.

Страннику девять.

Они стоят возле фонтана.

Он держит что-то в руках.

Маленький деревянный предмет.

— Что это? — спросила она.

— Часы.

— Они не работают.

— Работают.

— Нет.

— Просто не для тебя.

Она засмеялась.

Картинка исчезла.

Розария пошатнулась.

Странник поймал её за плечо.

— Ты видела?

— Да.

— Что?

— Часы.

Он замолчал.

— Какие?

— Маленькие. Деревянные.

Странник посмотрел на свои руки.

— Я помню их.

— Где они?

Он не ответил.

Хранитель впервые вмешался:

— Их нет.

— Откуда ты знаешь?

— Потому что они были уничтожены.

— Когда?

Хранитель посмотрел на Странника.

— В тот день.

Странник медленно поднял голову.

— Я их уничтожил?

— Нет.

— Тогда кто?

Хранитель промолчал.

Розария почувствовала, как внутри нарастает раздражение.

— Почему все здесь постоянно говорят загадками?!

Её голос эхом разлетелся по залу.

— Если вы что-то знаете — скажите!

Часы вокруг неё задрожали.

Хранитель посмотрел на неё.

— Хорошо.

Он сделал шаг вперёд.

— Девятого июня ты и Странник пришли в Элиар не впервые.

Розария застыла.

— Что?

— Вы уже были здесь.

— Но Элена сказала…

— Элена сказала то, что считала правдой.

— Сколько раз мы приходили?

Хранитель посмотрел на чёрную дверь.

— Двадцать семь.

Розария почувствовала, что не понимает смысла слов.

— Что?

— Вы приходили в Элиар двадцать семь раз.

Странник резко повернулся к нему.

— Нет.

— Да.

— Я бы помнил.

— Именно поэтому ты ничего не помнишь.

В зале стало тихо.

Розария смотрела на Странника.

Он выглядел потерянным.

Не загадочным.

Не сильным.

Просто мальчиком, которому вдруг сообщили, что значительная часть его жизни была украдена.

— Почему мы возвращались? — спросила Розария.

Хранитель ответил:

— Потому что каждый раз вы пытались открыть третью дверь.

— Зачем?

— Потому что за ней было то, что вы потеряли.

— Что?

Хранитель посмотрел на неё.

— Друг друга.

Розария почувствовала, как сердце болезненно сжалось.

Но голос за дверью вдруг засмеялся.

Не зло.

Почти грустно.

— Он снова ошибается.

Все трое замерли.

— Что? — спросила Розария.

Голос стал серьёзным.

— За третьей дверью нет того, что вы потеряли.

Странник подошёл ближе.

— Тогда что там?

Ответ прозвучал почти шёпотом:

— То, что вы оставили.

Розария почувствовала, как ключ в её кармане начал дрожать.

Роза на его поверхности стала светиться.

А затем произошло то, чего никто не ожидал.

Чёрная дверь медленно приоткрылась.

Совсем немного.

На один палец.

Из щели потянулся холодный воздух.

И вместе с ним — запах цветов.

Роз.

Тех самых, которые росли в саду много лет назад.

Розария услышала детский смех.

Свой.

И другой.

Она посмотрела на Странника.

— Мы должны войти?

Он смотрел на дверь.

— Нет.

Розария удивилась.

— Почему?

Он крепче сжал её руку.

— Потому что я вспомнил ещё кое-что.

— Что?

Он посмотрел ей прямо в глаза.

— В прошлый раз мы вошли туда вместе.

Розария почувствовала холод.

— И?

Странник посмотрел на приоткрытую дверь.

— Вышел оттуда только один из нас.` },
    { title: "Глава 18: Только один", text: `— Вышел только один из нас.

Слова Странника повисли в воздухе.

Розария смотрела на него и никак не могла заставить себя поверить.

— Кто?

Он молчал.

— Странник.

— Я не знаю.

— Ты только что сказал, что вспомнил.

— Я вспомнил дверь.

Он провёл ладонью по лицу.

— Но не то, что было после.

Розария посмотрела на чёрную дверь.

Она всё ещё была приоткрыта.

Всего на несколько сантиметров.

Но теперь ей казалось, что за этой щелью находится не просто тёмная комната.

Там находилось прошлое.

Настоящее.

И что-то третье, чему она пока не могла подобрать название.

— Закрой её, — сказал Странник.

Розария повернулась к нему.

— Почему?

— Потому что мы не знаем, что там.

— А если там ответ?

— Тогда он подождёт.

Хранитель впервые улыбнулся.

— Нет.

Странник резко посмотрел на него.

— Что?

— Эта дверь не ждёт.

Хранитель подошёл ближе.

— Она выбирает.

— Что выбирает?

— Кого оставить.

Розария почувствовала, как внутри всё сжалось.

— Опять?

Хранитель ничего не ответил.

И тогда из-за двери донёсся голос.

Не голос Странника.

Не её голос.

Голос Элены.

— Розария.

Она замерла.

— Бабушка?

Странник тут же схватил её за руку.

— Не отвечай.

— Но это её голос.

— Именно.

Из-за двери снова:

— Розария, пожалуйста.

На этот раз голос звучал испуганно.

Совсем как Элена в ту ночь, когда за дверью кто-то стучал три раза.

— Она зовёт меня.

— Нет.

— Откуда ты знаешь?

Странник посмотрел на неё.

— Потому что Элена никогда не говорит «пожалуйста», когда ей страшно.

Розария нахмурилась.

— Откуда ты это знаешь?

Он замолчал.

А затем очень тихо сказал:

— Я знал её раньше.

Розария почувствовала, как внутри что-то оборвалось.

— До того, как она забрала меня?

— Да.

— И ты никогда мне этого не говорил?

— Потому что не помнил.

Хранитель отвернулся.

— Теперь начинает возвращаться.

Розария посмотрела на него.

— Что именно?

— Всё то, что вы так старательно оставили за дверью.

Она снова посмотрела на чёрный проём.

И вдруг заметила кое-что.

На внутренней стороне двери были царапины.

Маленькие.

На уровне глаз ребёнка.

Она подошла ближе.

— Здесь что-то написано.

Странник сразу оказался рядом.

На дереве действительно были слова.

Неровные.

Детские.

Будто их выцарапали камнем.

Розария провела пальцами по буквам.

«НЕ ЗАХОДИ ЗА МНОЙ.»

Ниже было ещё несколько слов.

«Я ВЕРНУСЬ.»

Розария медленно повернулась к Страннику.

— Это твой почерк?

Он посмотрел на надпись.

И побледнел.

— Да.

— Ты написал это?

— Да.

— Кому?

Он не ответил.

Розария почувствовала, что уже знает ответ.

— Мне?

Странник кивнул.

— Тогда почему ты сказал, что мы вошли вместе?

Он закрыл глаза.

— Потому что…

Он замолчал.

— Потому что что?

— Потому что я не помню, что было до этой надписи.

Розария снова посмотрела на дверь.

И увидела ещё одну строку.

Она была почти незаметной.

Под слоем старой краски.

«ЕСЛИ ОНА ВОЙДЁТ, НЕ ПУСКАЙ ЕЁ ОБРАТНО.»

— Странник…

Он прочитал.

И отступил.

— Нет.

— Что?

— Этого здесь не было.

— Ты уверен?

— Да.

Хранитель подошёл к двери.

Провёл рукой по надписи.

— Она появилась сейчас.

Розария почувствовала холод.

— Почему?

— Потому что дверь услышала ваш разговор.

Странник посмотрел на Хранителя.

— Дверь не может слышать.

— В Элиаре многое не может.

— Тогда что она делает?

Хранитель посмотрел прямо на Розарию.

— Помнит.

И в этот момент внутри двери что-то упало.

Раздался глухой звук.

Потом ещё один.

Шаг.

Розария замерла.

Кто-то находился там.

Кто-то шёл к ним.

Странник встал перед ней.

— Не подходи.

Но Розария уже смотрела в темноту.

Сначала она увидела руку.

Маленькую.

Детскую.

Потом плечо.

Тёмные волосы.

И лицо.

Розария перестала дышать.

Перед ней стояла девочка.

Лет семи.

С розой, заплетённой в волосы.

С теми же глазами.

С тем же маленьким шрамом возле брови.

С тем же выражением лица, которое она видела в зеркале.

Розария смотрела на себя.

На себя семилетнюю.

Девочка тоже смотрела на неё.

А потом улыбнулась.

— Ты всё-таки вернулась.

Розария не могла произнести ни слова.

Странник тихо сказал:

— Не подходи к ней.

Но маленькая Розария посмотрела прямо на него.

— Почему ты ей не сказал?

Странник замер.

— Что?

Девочка улыбнулась чуть шире.

— Что именно ты сделал.

— Я ничего…

— Ты всегда так говоришь.

Она подняла руку.

В ней был маленький деревянный предмет.

Часы.

Те самые.

Странник резко побледнел.

— Откуда они у тебя?

Девочка ответила:

— Ты сам мне их отдал.

— Когда?

Она посмотрела на Розарию.

— Перед тем, как ушёл.

Розария почувствовала, как сердце забилось быстрее.

— Куда?

Девочка улыбнулась.

— За третью дверь.

Странник сделал шаг вперёд.

— Розария, не слушай её.

Маленькая Розария нахмурилась.

— Я и не говорила тебе.

Странник остановился.

Девочка повернулась к нему.

— Ты забыл самое главное.

— Что?

Она подняла деревянные часы.

Стрелки на них двигались.

Назад.

— Ты не пытался открыть дверь.

Розария посмотрела на Странника.

— Тогда зачем?

Девочка ответила вместо него:

— Он пытался закрыть её.

Тишина.

Хранитель медленно поднял голову.

— Невозможно.

Девочка посмотрела на него.

— Ты тоже забыл.

И впервые за всё время Хранитель испугался.

Девочка подошла к двери.

Остановилась прямо перед Розарией.

И тихо сказала:

— Мы не должны были возвращаться сюда.

Розария прошептала:

— Почему?

Маленькая Розария посмотрела ей прямо в глаза.

— Потому что в прошлый раз…

Она замолчала.

— В прошлый раз что?

Девочка протянула ей деревянные часы.

— Мы оставили здесь кое-кого.

Розария не взяла их.

— Кого?

Девочка посмотрела на Странника.

А затем сказала:

— Тебя.
` },
    { title: "Глава 19: Цветок, который помнит", text: `— Тебя.

Последнее слово маленькой Розарии прозвучало почти шёпотом.

Тебя.

Розария не сразу поняла.

— Что значит… меня?

Девочка не ответила.

Она только протянула ей деревянные часы.

Розария осторожно взяла их.

Они были тёплыми.

Слишком тёплыми для старого предмета.

Стрелки на циферблате остановились.

А потом одна из них медленно пошла назад.

Странник смотрел на часы так, будто они были частью кошмара, который он слишком долго пытался забыть.

— Я их помню, — сказал он.

Розария посмотрела на него.

— Что именно?

— Ты держала их.

— Я?

Он кивнул.

— Ты постоянно забирала их у меня.

Розария нахмурилась.

— Зачем?

Странник задумался.

И вдруг на его лице появилась едва заметная улыбка.

— Потому что говорила, что они идут неправильно.

Розария почувствовала странное тепло внутри.

— И они действительно шли неправильно?

— Конечно.

— Тогда я была права.

— Ты всегда так говорила.

— Потому что я всегда права.

Странник тихо усмехнулся.

На несколько секунд Элиар исчез.

Не буквально.

Просто всё вокруг перестало иметь значение.

Не было Хранителя.

Не было чёрной двери.

Не было странных часов и потерянных воспоминаний.

Были только они.

И ощущение, будто разговор уже происходил когда-то.

Очень давно.

Где-то, куда память пока не позволяла им вернуться.

Вдруг из стены донёсся тихий звук.

Плюх.

Розария вздрогнула.

— Что это?

Странник нахмурился.

Из маленькой трещины между камнями выкатилась вода.

Совсем немного.

А за ней появилась маленькая серебристая рыбка.

Она лежала на сухом камне.

И почему-то… не умирала.

Розария присела рядом.

— Откуда здесь рыба?

Странник смотрел на неё несколько секунд.

Потом совершенно серьёзно сказал:

— О ней думать надо.

Розария повернулась к нему.

— Что?

Он моргнул.

— Не знаю.

— Ты только что сказал: «О ней думать надо».

— Я знаю.

— Почему?

Странник задумался.

— Не знаю.

Розария рассмеялась.

— Ты странный.

— Ты тоже.

— Я хотя бы знаю почему.

— И почему?

— Потому что я принцесса.

— Очень убедительно.

Она улыбнулась.

И в этот момент в её руке вспыхнул ключ.

Роза на нём засветилась.

Рядом с серебристой рыбкой появился маленький цветок.

Сначала один лепесток.

Потом второй.

Потом третий.

Белый цветок медленно распустился прямо из камня.

Розария осторожно коснулась его.

— Он красивый.

Странник посмотрел на цветок.

И вдруг произнёс:

— Когда ты улыбаешься, он светится.

Розария замерла.

Странник тоже.

Он сам будто испугался собственных слов.

— Откуда я это знаю?

Она ничего не ответила.

Цветок действительно начал сиять сильнее.

Мягким, почти тёплым светом.

— Ты уже говорил это? — спросила Розария.

— Не помню.

— Но знаешь.

Он кивнул.

— Знаю.

Розария посмотрела на него.

— Тогда, может быть, память возвращается.

Странник покачал головой.

— Нет.

— Почему?

— Потому что я не вспомнил событие.

Он коснулся лепестка.

— Я вспомнил чувство.

Розария задумалась.

— А разве это не одно и то же?

— Нет.

Странник посмотрел на неё.

— Событие можно забыть.

Он чуть улыбнулся.

— А чувство иногда остаётся.

Эти слова почему-то отозвались в ней болью.

Потому что она тоже кое-что чувствовала.

Она не помнила всего.

Но иногда ей казалось, что рядом со Странником она знает его дольше, чем должна.

Словно сердце помнит то, чего не знает разум.

Хранитель всё это время молча наблюдал.

Теперь он подошёл к ним.

— Первый фрагмент вернулся.

Розария подняла голову.

— Какой?

— Тот, который невозможно стереть полностью.

— Почему?

Хранитель посмотрел на светящийся цветок.

— Потому что он связан не с памятью.

Он сделал паузу.

— С привязанностью.

Странник резко взглянул на него.

— Не называй это так.

— Почему?

— Потому что это звучит так, будто ты всё понимаешь.

— Я понимаю меньше, чем ты думаешь.

Хранитель наклонился к рыбке.

Она вдруг исчезла.

Просто растворилась в воздухе.

На камне осталась маленькая капля воды.

Розария коснулась её пальцем.

И мир исчез.

---

Она стояла посреди сада.

Но не нынешнего.

Старого.

Молодого.

Солнечного.

Ей было семь.

Страннику — девять.

Они сидели возле фонтана.

Перед ними лежали деревянные часы.

— Они опять остановились, — сказала маленькая Розария.

— Потому что ты их сломала.

— Я не ломала.

— Ты их уронила.

— Это другое.

Странник засмеялся.

Розария надулась.

— Беее.

Он рассмеялся ещё сильнее.

— Не сердись.

— Я не сержусь.

— Сердишься.

— Нет.

— Тогда улыбнись.

Она попыталась не улыбаться.

Но не выдержала.

Странник посмотрел на цветок рядом с фонтаном.

И сказал:

— Вот.

— Что?

— Теперь он светится.

Розария посмотрела на цветок.

Лепестки действительно сияли.

— Почему?

Странник пожал плечами.

— Потому что ты улыбаешься.

Она задумалась.

А потом совершенно серьёзно сказала:

— Тогда я буду улыбаться чаще.

Странник улыбнулся.

— Хорошо.

Картинка задрожала.

Сад исчез.

Розария снова оказалась в Элиаре.

Она стояла на коленях возле фонтана.

Странник держал её за плечи.

— Розария?

Она посмотрела на него.

— Я вспомнила.

— Что?

Она улыбнулась сквозь слёзы.

— Цветок.

Странник замер.

— Какой?

Розария посмотрела на белый цветок.

— Тот, который сиял.

Он долго молчал.

А потом очень тихо сказал:

— Я тоже его вспомнил.

И впервые за всё время Розария увидела в его глазах не потерю.

А надежду.

Но на камне возле фонтана появилась новая надпись.

Не старая.

Она возникла прямо сейчас.

«ПЕРВЫЙ ФРАГМЕНТ ВОЗВРАЩЁН.»

Ниже проступили ещё четыре слова:

«НО ВСПОМНИТЬ — НЕ ЗНАЧИТ ПОНЯТЬ.»

Розария медленно прочитала их.

А затем заметила кое-что ещё.

На месте, где только что была рыбка, лежали деревянные часы.

Стрелки на них двигались медленно.

Тик.

Так.

Тик.

Так.

А потом остановились.

Розария наклонилась ближе.

На маленьком циферблате была дата.

17 октября.

Она посмотрела на Странника.

Он тоже заметил.

Несколько секунд он ничего не говорил.

Потом тихо произнёс:

— Это мой день рождения.

Розария улыбнулась.

— Я знаю.

Он посмотрел на неё с лёгким удивлением.

— Откуда?

— Ты когда-то сам мне говорил.

Странник замер.

— Я говорил?

— Да.

Он снова посмотрел на часы.

— Тогда почему они здесь?

Розария не знала ответа.

Хранитель подошёл ближе.

Его взгляд остановился на деревянных часах.

И впервые за всё время он выглядел по-настоящему серьёзным.

— Потому что Элиар помнит даты.

— И что? — спросила Розария.

— Для обычного человека день рождения — это просто день.

Он коснулся циферблата.

Стрелки дрогнули.

— Для Элиара это начало.

— Начало чего?

Хранитель посмотрел на Странника.

— Вот это вам ещё предстоит вспомнить.

Странник нахмурился.

— Что произошло семнадцатого октября?

Хранитель не ответил.

Вместо него заговорили часы.

Тихим детским голосом.

— С днём рождения.

Странник резко отступил.

Розария почувствовала холод.

Голос продолжил:

— Ты загадал желание.

Стрелка часов дёрнулась.

— И оно исполнилось.

Розария посмотрела на Странника.

— Какое желание?

Он молчал.

На его лице появилось странное выражение.

Будто где-то очень глубоко он уже знал ответ.

И вдруг прошептал:

— Чтобы ты никогда меня не забыла.

Розария перестала дышать.

Часы остановились.

Белый цветок вспыхнул.

А на камне появилась последняя надпись:

«ЖЕЛАНИЕ БЫЛО ИСПОЛНЕНО НЕ ТАК, КАК ОН ХОТЕЛ.»

Розария подняла глаза.

Странник смотрел на неё.

И впервые они оба поняли:

возможно, именно его желание стало причиной того, почему они потеряли друг друга.` },
    { title: "Глава 20: Желание", text: `
Странник долго смотрел на надпись.

«ЖЕЛАНИЕ БЫЛО ИСПОЛНЕНО НЕ ТАК, КАК ОН ХОТЕЛ.»

Никто не произносил ни слова.

Даже часы молчали.

— Я этого не помню, — наконец сказал он.

Розария посмотрела на него.

— Но ты сказал это.

— Да.

— Значит, ты вспомнил.

Он покачал головой.

— Нет.

Он коснулся виска.

— Я просто… знаю.

— Разве это не одно и то же?

— Нет.

Странник посмотрел на неё.

— Воспоминание — это когда ты видишь то, что было.

Он сделал паузу.

— А это чувство, будто кто-то оставил у тебя в голове чужую страницу.

Розария нахмурилась.

— Тогда давай найдём остальные.

Странник улыбнулся.

— Ты всё ещё такая же.

— Какая?

— Если дверь закрыта, ты обязательно захочешь её открыть.

— Конечно.

— Даже если на ней написано «не открывать».

— Особенно если написано «не открывать».

Он тихо рассмеялся.

И вдруг Розария заметила, что смеётся вместе с ним.

Совсем как раньше.

Она не знала, сколько таких моментов было потеряно.

Не знала, сколько ещё лежало где-то за дверями Элиара.

Но впервые ей показалось, что они действительно могут их вернуть.

Хранитель тем временем отошёл к стене.

— Не радуйтесь слишком рано.

Розария повернулась к нему.

— А можно хотя бы пять минут?

— Нет.

— Ты ужасный.

— Мне говорили.

Странник усмехнулся.

— Не переживай. Она ещё не начинала.

— Я всё слышу!

Хранитель впервые едва заметно улыбнулся.

Но затем его лицо стало серьёзным.

— Желание Странника связано с третьей дверью.

— Как?

— Он загадал его здесь.

— В Элиаре?

— Да.

— В день рождения?

Хранитель кивнул.

— Семнадцатого октября.

Розария посмотрела на деревянные часы.

— Сколько ему тогда было?

— Девять.

Она замерла.

Девять.

Столько же, сколько было Страннику в том воспоминании.

— А мне?

— Семь.

Розария почувствовала знакомое покалывание в пальцах.

Ключ.

Он снова становился тёплым.

— Что я делала здесь в тот день?

Хранитель посмотрел на неё.

— Ты была рядом.

— Это я уже знаю.

— Нет.

Он покачал головой.

— Ты была рядом в тот момент, когда он загадывал желание.

Розария замерла.

Перед глазами мелькнуло воспоминание.

Стол.

Два стула.

Маленький пирог.

Слишком много свечей.

Странник сидит напротив неё и пытается спрятать улыбку.

— Загадывай, — говорит она.

— Отвернись.

— Зачем?

— Потому что желание нельзя говорить.

— Я не услышу.

— Ты обязательно услышишь.

Она смеётся.

— Тогда я закрою уши.

Маленький Странник закрывает глаза.

Делает вдох.

И задувает свечи.

Картинка исчезла.

Розария открыла глаза.

— Я видела.

Странник посмотрел на неё.

— Что?

— Твой день рождения.

Он молчал.

— Был пирог.

— Какой?

— Не знаю.

— Шоколадный?

— Кажется.

— Значит, шоколадный.

Розария улыбнулась.

— Ты даже сейчас не уверен.

— Я пытаюсь вспомнить.

Она вдруг заметила, что он выглядит расстроенным.

— Эй.

Он поднял взгляд.

— Что?

— Не заставляй себя.

— А если я не вспомню?

— Тогда вспомнишь потом.

— А если никогда?

Розария ненадолго замолчала.

— Тогда я расскажу тебе.

Странник посмотрел на неё.

— Всё?

— Всё, что смогу.

— Даже то, что я делал глупости?

— Особенно это.

Он усмехнулся.

— Тогда ты будешь рассказывать очень долго.

— У тебя их много?

— Не знаю.

Розария улыбнулась.

— Значит, будем проверять.

Он тоже улыбнулся.

Но через секунду его лицо изменилось.

— Подожди.

— Что?

— Я кое-что помню.

Он посмотрел на часы.

— После того дня ты спросила меня, не злюсь ли я.

Розария нахмурилась.

— Я?

— Да.

— Почему?

— Не знаю.

Он закрыл глаза.

— Я сказал тебе, что нет.

Пауза.

— А потом ты спросила ещё раз.

Розария тихо рассмеялась.

— Похоже на меня.

— А потом я сказал…

Он замолчал.

— Что?

Странник нахмурился, пытаясь поймать ускользающее воспоминание.

— Что ты моя…

Он остановился.

Будто наткнулся на невидимую стену.

Розария не стала его торопить.

— Не получается.

— Ничего страшного.

Он открыл глаза.

— Но я помню твоё лицо.

— Какое?

Он улыбнулся.

— Ты тогда была довольная.

— Почему?

— Потому что я перестал злиться.

Розария почувствовала странное тепло.

Такое маленькое воспоминание.

Совершенно обычное.

Не спасение мира.

Не магия.

Не древняя дверь.

Просто разговор двух детей.

И именно поэтому оно казалось настоящим.

Внезапно часы на стене начали идти.

Одна стрелка.

Вторая.

Третья.

Все они остановились на 17:00.

Хранитель резко поднял голову.

— Что случилось?

— Ты должен знать, — сказала Розария.

— Нет.

— Тогда почему ты испугался?

Он не ответил.

На циферблате появилась новая надпись.

«ПЯТЬ ЧАСОВ ВЕЧЕРА.»

А затем ниже:

«ВРЕМЯ ЗАГАДАННОГО ЖЕЛАНИЯ.»

Странник подошёл ближе.

— Я был здесь в пять?

Хранитель кивнул.

— Да.

— И Розария была со мной?

— Да.

— Тогда почему я её забыл?

Хранитель посмотрел на него.

— Потому что желание было не твоим.

Странник замер.

Розария почувствовала холод.

— Что?

Хранитель продолжил:

— Ты попросил, чтобы Розария никогда тебя не забыла.

Он посмотрел на девочку на старой картине.

— Но желание услышала не только она.

В глубине Элиара что-то щёлкнуло.

Чёрная дверь медленно закрылась.

А потом из-за неё донёсся знакомый детский голос:

— Я не просил её помнить меня.

Странник резко повернулся.

Голос продолжил:

— Я просил, чтобы она никогда не могла меня забыть.

Розария почувствовала, как кровь отхлынула от лица.

Потому что голос был его.

Но теперь она поняла главное.

Это говорил не тот Странник, который стоял рядом с ней.

Это был Странник из прошлого.

И он всё ещё находился за дверью.
` },
    { title: "Глава 21: Тот, кто остался за дверью", text: `

— Я не просил её помнить меня.

Детский голос прозвучал снова.

— Я просил, чтобы она никогда не могла меня забыть.

Розария стояла перед чёрной дверью и не могла пошевелиться.

Она смотрела на Странника, который находился рядом, но впервые не была уверена, что знает его.

Не потому, что он изменился.

А потому, что за дверью находился кто-то, кто говорил его голосом, знал его мысли и помнил то, что он сам забыл.

— Ты слышал? — спросила она.

— Да.

— Он сказал, что загадал желание.

— Я слышал.

— Но ты не помнишь, что именно произошло?

Странник покачал головой.

— Нет.

Из-за двери донёсся тихий смех.

— Ты всегда был ужасно упрямым.

Странник сжал ключ с незабудкой.

— Хватит.

— Что, неприятно слышать собственный голос?

— Я сказал, хватит!

Часы на стенах задрожали.

Розария невольно вздрогнула, но Странник даже не посмотрел на них. Он смотрел на дверь так, словно хотел заставить её замолчать одной лишь силой воли.

— Ты не он, — произнёс он.

— А ты уверен?

— Да.

— Тогда почему ты не можешь вспомнить, как мы попрощались?

Странник побледнел.

Розария медленно повернулась к нему.

— Вы попрощались?

— Я не знаю.

— Но…

— Розария, пожалуйста.

Он произнёс это так тихо, что она сразу замолчала.

Странник редко просил её о чём-то таким голосом. Обычно он отшучивался, переводил разговор на другую тему или делал вид, что его совершенно ничего не беспокоит.

Сейчас он не пытался казаться спокойным.

И это пугало её сильнее, чем любая магия Элиара.

Розария осторожно взяла его за руку.

— Хорошо. Не будем пока об этом.

Он посмотрел на неё.

— Ты не злишься?

Вопрос прозвучал так неожиданно, что она даже растерялась.

— За что?

— За то, что я ничего не помню.

Розария несколько секунд молчала.

А потом покачала головой.

— Я могу злиться на тебя за то, что ты упрямый, вредный и иногда совершенно невыносимый.

— Очень приятно.

— Я ещё не закончила.

— Прости.

— Но я не стану злиться на тебя за то, чего ты не можешь изменить одним желанием.

Странник опустил взгляд.

И Розария заметила, как крепко он сжимает её руку.

— А если я вспомню что-то плохое?

— Тогда мы разберёмся.

— А если тебе не понравится то, что ты узнаешь?

Она вздохнула.

— Тогда я скажу тебе об этом. Но я не буду заранее решать, что ты виноват, только потому, что кто-то за дверью утверждает, будто знает наше прошлое.

Странник поднял глаза.

На мгновение он выглядел так, словно хотел что-то ответить, но не нашёл подходящих слов.

Поэтому просто кивнул.

И это оказалось важнее любого обещания.

---

— Вы оба забываете одну вещь, — раздался голос Хранителя.

Розария обернулась.

Он стоял возле старого циферблата, на котором теперь вместо цифр появились двенадцать маленьких роз.

— Какую? — спросила она.

— Память не возвращается только потому, что вы хотите её вернуть.

— Мы уже заметили.

— Нет. Вы пока не поняли.

Хранитель коснулся одной из роз.

Она потемнела.

— Воспоминания можно вернуть. Можно увидеть событие, услышать голос, прочитать собственные слова. Но это ещё не означает, что вы знаете, почему всё произошло именно так.

— Значит, нам нужно узнать правду, — сказала Розария.

— Да.

— Тогда открой дверь.

— Я не могу.

Странник коротко усмехнулся.

— Конечно. Никто здесь ничего не может, зато все прекрасно умеют говорить загадками.

Хранитель посмотрел на него.

— Ты тоже когда-то так говорил.

— Неудивительно.

— Ты говорил это каждый раз, когда не хотел признавать, что испугался.

Странник перестал улыбаться.

Хранитель подошёл к нему.

— Ты думаешь, что забыл только события. Но ты забыл и собственные решения.

— Какие решения?

— Те, которые привели тебя сюда.

Розария посмотрела на чёрную дверь.

— Он хотел закрыть её?

— Да.

— Тогда почему оказался по другую сторону?

Хранитель не ответил сразу.

— Потому что в тот день дверь не открывалась для того, кто хотел войти.

Он посмотрел на Странника.

— Она открывалась для того, кто был готов остаться.

Розария почувствовала холод.

— Остаться навсегда?

— Никто не знает, что значит «навсегда» в Элиаре.

— А если человек не хочет оставаться?

Хранитель посмотрел на неё.

— Тогда Элиар должен услышать его настоящее желание.

— А если желание уже загадано?

— Тогда время пытается исполнить его.

Часы издали низкий звук.

Стрелки начали двигаться в обратную сторону.

— И иногда, — продолжил Хранитель, — время исполняет желание буквально, забывая о том, что человек на самом деле хотел сказать.

Розария медленно поняла.

— Странник хотел, чтобы я никогда его не забывала.

— Да.

— Но вместо этого…

— Вместо этого его желание стало частью закона Элиара.

Странник поднял голову.

— Какого закона?

Хранитель ответил:

— Всё, что однажды было связано с тобой, может вернуться. Но не обязательно в том виде, в каком ты это потерял.

Розария вспомнила голос за дверью.

«Я просил, чтобы она никогда не могла меня забыть».

— Значит, если я не могу его забыть…

Она не закончила.

Хранитель кивнул.

— Это не обязательно означает, что ты помнишь его.

Розария посмотрела на Странника.

— Можно помнить кого-то и не помнить, что именно с ним произошло?

— Можно.

— И чувствовать, что он важен, даже если не можешь объяснить почему?

— Да.

Странник тихо произнёс:

— Тогда, возможно, я тоже что-то сохранил.

Он посмотрел на неё.

— Даже если не могу вспомнить.

Розария ничего не ответила.

Она просто осталась рядом.

---

Внезапно из-за двери донёсся звук.

Три тихих удара.

Розария вздрогнула.

— Нет, — прошептал Странник.

На этот раз голос не стал звать её.

Вместо этого он произнёс:

— Розария, помнишь цветок?

Она замерла.

— Какой цветок? — спросила она.

— Тот, который ты посадила возле моего окна.

Розария медленно повернулась к Страннику.

Он смотрел на дверь, не произнося ни слова.

— Я посадила цветок возле твоего окна?

— Да, — ответил голос. — Потому что я сказал, что у меня ничего не растёт.

Розария почувствовала, как внутри вспыхнуло воспоминание.

Небольшая комната.

Деревянный подоконник.

Горшок с землёй.

Мальчик, который смотрит на него с таким серьёзным видом, словно перед ним стоит самая сложная задача в мире.

— Он всё равно умрёт, — говорит он.

— Не умрёт.

— Откуда ты знаешь?

— Потому что я буду за ним ухаживать.

— Ты забываешь поливать цветы.

— Неправда!

— Вчера ты забыла.

— Это было позавчера.

Мальчик смеётся.

Она показывает ему язык.

Потом осторожно сажает в землю маленький росток.

И говорит:

— Вот увидишь. Он вырастет.

Картинка исчезла.

Розария прижала пальцы к вискам.

— Я помню.

Странник резко повернулся.

— Что ты видела?

— Цветок. У твоего окна. Я посадила его.

Он смотрел на неё так, словно боялся пошевелиться.

— Какой он был?

Розария закрыла глаза, пытаясь удержать воспоминание.

— Белый. Кажется, с розовой серединкой.

Странник медленно выдохнул.

— Незабудка.

Она открыла глаза.

— Незабудки не бывают такими.

— Я знаю.

— Тогда почему ты сказал?..

Он не ответил.

Потому что в его руке ключ с незабудкой начал светиться.

А на чёрной двери появилась новая надпись.

«ТО, ЧТО ТЫ ОСТАВИЛ, ВСЁ ЕЩЁ РАСТЁТ.»

Розария подошла ближе.

— Что это означает?

Хранитель посмотрел на неё.

— Возможно, то, что потерянное прошлое не исчезло полностью.

— Где оно?

— Там, где вы перестали его искать.

Странник покачал головой.

— Опять загадки.

— Тогда попробуй сам.

Он нахмурился.

И вдруг посмотрел на собственный ключ.

— Окно.

Розария повернулась к нему.

— Что?

— Комната. Цветок. Моё окно.

Он поднял голову.

— У меня была комната в Элиаре.

Хранитель медленно кивнул.

— Была.

— Где она?

— За третьей дверью.

Розария посмотрела на приоткрытый проём.

— Но мы же не можем туда войти.

— Пока нет.

— А что нужно?

Хранитель посмотрел на часы.

Все двенадцать роз на циферблате одновременно раскрылись.

— Вам нужно перестать спрашивать, как открыть дверь.

Он коснулся пустого места в центре циферблата.

— И вспомнить, почему вы её закрыли.

---

В этот момент чёрная дверь распахнулась.

Не полностью.

Лишь настолько, чтобы Розария увидела комнату по другую сторону.

Маленькую.

Старую.

С деревянным столом возле окна.

На столе лежал раскрытый блокнот.

Рядом стоял горшок с высохшей землёй.

А на подоконнике рос белый цветок.

Розария сделала шаг.

Странник удержал её.

— Подожди.

— Там твоя комната.

— Я вижу.

— Может быть, мы наконец узнаем…

— Розария.

Она замолчала.

Он смотрел на цветок.

— Он живой.

Она снова посмотрела в комнату.

Цветок действительно был живым.

Но его лепестки медленно опадали.

Один за другим.

— Почему он умирает? — прошептала она.

Хранитель ответил из темноты:

— Потому что кто-то перестал помнить, зачем посадил его.

Странник крепче сжал её руку.

— Я не хочу снова потерять тебя.

Розария посмотрела на него.

— Тогда не отпускай мою руку.

Он кивнул.

И они переступили порог вместе.

В комнате пахло дождём, старой бумагой и цветами.

Розария подошла к столу.

Блокнот был открыт на последней странице.

Почерк был детским.

Но слова казались слишком взрослыми для девятилетнего мальчика.

«Если она когда-нибудь вернётся, я должен сказать ей правду».

Ниже было написано:

«Я не хотел, чтобы она забыла меня».

Розария почувствовала, как сжалось сердце.

На следующей строке чернила расплылись, словно на бумагу когда-то упала вода.

Она осторожно наклонила страницу к свету.

Под расплывшимися буквами проступили ещё несколько слов.

«Я хотел забыть тот день сам».

Странник подошёл к ней.

Он долго смотрел на запись.

Потом тихо произнёс:

— Я не хотел, чтобы ты забыла меня.

Розария посмотрела на него.

— Я знаю.

— Но я хотел забыть то, что случилось.

Он провёл пальцами по странице.

— И, кажется, получил сразу оба желания.

За окном пошёл дождь.

Цветок на подоконнике дрогнул.

А внизу страницы медленно проступила последняя фраза.

«Если я снова встречу её, не позволяй мне вспомнить всё сразу».

Странник отступил.

Розария почувствовала, что комната начинает меняться.

Стены потемнели.

Дождь за окном превратился в чёрную воду.

А из глубины блокнота раздался голос мальчика:

— Потому что, если я вспомню, что сделал…

Он замолчал.

Страницы начали переворачиваться сами собой.

И на последней, совершенно чистой странице появились четыре слова.

«Я САМ ЗАКРЫЛ ДВЕРЬ».

Странник стоял неподвижно.

Розария осторожно взяла его за руку.

— Мы узнаем правду, — прошептала она.

Но он смотрел не на неё.

Он смотрел на отражение в оконном стекле.

Там, за его плечом, стоял маленький мальчик.

И мальчик беззвучно произнёс:

«Не верь мне, когда я всё вспомню».
` },
    { title: "Глава 22: Комната, в которой остановилось время", text: `

— Не верь мне, когда я всё вспомню.

Мальчик в отражении повторил эти слова ещё раз.

На этот раз медленнее.

Будто хотел убедиться, что Розария услышала каждое.

Она резко обернулась.

За её спиной никого не было.

Только Странник, старый стол и раскрытый блокнот.

— Ты тоже это видел? — спросила она.

— Да.

— Значит, это не просто воспоминание?

Странник посмотрел на окно.

Дождь за стеклом продолжал идти, хотя за пределами комнаты не было ни облаков, ни неба. Там простиралась бесконечная темнота, в которой иногда вспыхивали крошечные огоньки.

— Не знаю, — ответил он. — Но я уверен в одном.

— В чём?

— Этот мальчик не хотел, чтобы мы сюда пришли.

Розария подошла к окну.

В отражении снова появился маленький Странник.

Он стоял совсем близко.

На его лице не было ни улыбки, ни страха. Только усталость, которой не должно было быть у ребёнка.

Мальчик поднял руку и указал куда-то за спину Розарии.

Она обернулась.

На стене, между книжным шкафом и дверью, висела небольшая картина.

Розария раньше её не замечала.

На картине был изображён сад.

Белые розы.

Старый фонтан.

Деревянная скамейка.

И двое детей, сидящих рядом.

Розария узнала их сразу.

Но кое-что на картине было неправильным.

Мальчик смотрел на девочку.

Девочка смотрела на фонтан.

А между ними, на пустом месте скамейки, лежал третий ключ.

Тот самый, с пустым кругом.

— Почему он здесь? — прошептала Розария.

Странник подошёл к картине.

— Я не помню её.

— Но это мы.

— Да.

— А ключ?

Он покачал головой.

Розария внимательно осмотрела раму. На нижнем краю дерева виднелась маленькая царапина.

Она провела по ней пальцем.

Рама щёлкнула.

Картина отодвинулась от стены, открывая неглубокую нишу.

Внутри лежал сложенный лист бумаги.

Розария осторожно достала его.

На лицевой стороне было написано:

«ОТКРЫТЬ ТОЛЬКО ТОГДА, КОГДА ОНА СНОВА НАЙДЁТ МОЮ КОМНАТУ».

— Это ты написал? — спросила она.

Странник долго рассматривал почерк.

— Похоже.

— Ты оставил себе послание?

— Видимо.

— И не подумал подписать?

— Я был маленьким.

— Даже маленьким можно было догадаться.

Он посмотрел на неё.

— Ты собираешься ругать меня за то, что я сделал много лет назад?

— Пока не решила.

— Тогда открывай.

Розария развернула лист.

Внутри было всего несколько строк.

Если ты читаешь это, значит, она вернулась.

Не говори ей о третьей двери.

Не рассказывай, что случилось в последний день.

И самое главное — не позволяй ей увидеть, что находится под кроватью.

Розария медленно опустила письмо.

Потом посмотрела на кровать.

Потом на Странника.

— Серьёзно?

Он вздохнул.

— Я тоже это читаю впервые.

— Ты понимаешь, что теперь я обязана посмотреть под кровать?

— Я надеялся, что ты так скажешь.

— Тогда зачем ты написал предупреждение?

— Потому что, судя по всему, я прекрасно тебя знал.

Розария фыркнула.

И всё же опустилась на колени.

Под кроватью было темно.

Она протянула руку, нащупала что-то деревянное и потянула на себя.

Это оказался небольшой ящик.

Старый, покрытый пылью, с замком в форме розы.

— У меня есть ключ, — сказала она.

Странник покачал головой.

— Не тот.

Она посмотрела на него.

— Откуда ты знаешь?

Он указал на замок.

— Посмотри на середину.

Внутри розы было крошечное отверстие в форме незабудки.

Розария достала ключ Странника.

Он едва заметно дрожал в её пальцах.

— Можно?

Странник кивнул.

Ключ вошёл в замок без сопротивления.

Щёлк.

Ящик открылся.

Внутри лежали десятки маленьких бумажных звёзд.

Сложенных из разноцветной бумаги, некоторых выцветших, некоторых почти новых.

Розария осторожно достала одну.

На ней было написано:

«Сегодня она сказала, что я вредный. Наверное, это означает, что мы помирились».

Она невольно улыбнулась.

— Это ты записывал?

Странник выглядел озадаченным.

— Похоже на меня.

— Почему?

— Потому что я действительно вредный.

— Наконец-то признание.

Она развернула следующую звезду.

«Она снова сказала, что всегда права. Я не согласен, но спорить бесполезно».

Розария рассмеялась.

— Вот видишь! Даже тогда ты понимал, что я права.

— Я этого не говорил.

— Здесь написано.

— Здесь написано, что я не согласен.

— Не придирайся к мелочам.

Странник улыбнулся.

И вдруг замолчал.

Он смотрел на звёзды так, будто за каждой из них скрывалась целая жизнь, которую он когда-то прожил, а теперь не мог узнать.

Розария заметила это.

— Что?

— Я помню, как их делал.

Она перестала улыбаться.

— Правда?

— Нет. Не совсем.

Он осторожно взял одну звезду.

— Я помню бумагу. Помню, как складывал углы. Помню, что боялся испортить их.

— Почему?

Странник долго смотрел на маленькую звезду.

— Потому что собирался отдать их тебе.

Розария почувствовала тепло в груди.

— Зачем?

Он пожал плечами.

— Не знаю.

— Может, это был подарок?

— Возможно.

— Тогда почему ты его не отдал?

Странник перевернул звезду.

На обратной стороне было написано:

«Когда-нибудь я расскажу ей всё. Но не сегодня».

Он долго смотрел на эти слова.

— Похоже, я всё время откладывал.

Розария осторожно сложила звезду обратно.

— Тогда не откладывай сейчас.

Странник поднял глаза.

— Что?

— Если что-то вспомнишь, расскажи. Даже если это будет мелочь.

Он помолчал.

— Хорошо.

Но прежде чем они успели продолжить, ящик дрогнул.

Все бумажные звёзды одновременно раскрылись.

Комнату заполнил шелест.

На каждом листке появились новые слова.

Они проступали прямо на бумаге, будто кто-то писал невидимыми чернилами.

Розария наклонилась к ближайшему листку.

«Сегодня я понял, почему она приходит сюда».

На следующем:

«Она не хочет оставлять меня одного».

Ещё на одном:

«Но если она останется, дверь заберёт её».

Розария перестала дышать.

Странник выхватил последний листок.

На нём было написано:

«Я ДОЛЖЕН ЗАСТАВИТЬ ЕЁ УЙТИ».

— Нет, — прошептал он.

Розария посмотрела на него.

— Ты пытался прогнать меня?

— Я не помню.

— Но здесь написано…

— Я вижу!

Он резко поднялся.

Бумажные звёзды разлетелись по комнате.

Странник отвернулся к стене, пытаясь успокоиться.

Розария не стала подходить сразу.

Она знала, что иногда человеку нужно несколько секунд, чтобы собраться с мыслями.

Поэтому просто осталась рядом.

Через некоторое время он заговорил.

— А если я действительно сделал это?

— Что именно?

— Если я заставил тебя уйти, потому что думал, что так будет лучше?

Розария задумалась.

— Тогда мне захочется узнать почему.

— И всё?

— Нет. Возможно, я буду злиться. Возможно, мне будет больно.

Она посмотрела на него.

— Но я не хочу придумывать тебе вину раньше, чем узнаю правду.

Странник медленно повернулся.

— Ты правда так думаешь?

— Правда.

Он опустил голову.

— Спасибо.

Впервые за всё время это слово прозвучало так, будто он действительно нуждался в нём.

Розария уже хотела ответить, но вдруг заметила, что в глубине ящика остался ещё один предмет.

Маленький конверт.

Без имени.

Без надписи.

Только нарисованная от руки звезда.

Она достала его.

Внутри лежала фотография.

На ней были Розария и Странник.

Но не детьми.

Они выглядели старше.

На заднем плане виднелся сад, которого Розария никогда не видела.

Она перевернула фотографию.

На обороте стояла дата.

17 октября.

И короткая фраза:

«Если однажды ты забудешь, почему осталась, вспомни: ты сама попросила меня закрыть дверь».

Розария перечитала слова.

Потом ещё раз.

— Странник…

Он подошёл ближе.

Когда он увидел фотографию, его лицо изменилось.

— Откуда это?

— Из ящика.

Он осторожно взял снимок.

Долго смотрел на него.

А затем тихо произнёс:

— Я помню этот день.

Розария почувствовала, как сердце забилось быстрее.

— Что произошло?

Странник поднял на неё глаза.

— Ты пришла ко мне.

— И?

Он посмотрел на фотографию ещё раз.

— Ты плакала.

Розария замерла.

— Почему?

Странник закрыл глаза.

И впервые воспоминание вернулось к нему целиком.

Он увидел сад.

Услышал дождь.

Почувствовал, как Розария сжимает его руку.

И услышал её голос:

«Пожалуйста. Если я передумаю, не позволяй мне открывать эту дверь».

Странник резко открыл глаза.

— Ты сама попросила меня закрыть её.

Розария медленно покачала головой.

— Но я не помню.

Он посмотрел на неё.

— Я знаю.

В этот момент фотография потемнела.

Лица на снимке исчезли.

На их месте проступили две фигуры перед чёрной дверью.

Одна из них держала ключ с незабудкой.

Другая — ключ с розой.

А между ними стоял Хранитель.

Только теперь у него было лицо.

Розария почувствовала, как по спине пробежал холод.

Она знала это лицо.

Не по портретам.

Не по книгам.

И даже не по встрече в Элиаре.

Она узнала его по воспоминанию, которое ещё не успела вернуть.

— Странник, — прошептала она.

— Что?

Она не отрывала взгляда от фотографии.

— Хранитель был с нами в тот день.

— Да.

— Нет.

Розария медленно подняла голову.

— Он был не просто с нами.

Она посмотрела в сторону двери комнаты.

За ней стоял Хранитель.

Он больше не улыбался.

Розария сделала шаг назад.

— Ты был тем, кого мы оставили за третьей дверью.

Хранитель молчал.

И этого оказалось достаточно.

Потому что в следующий миг часы в комнате начали идти назад.

А Хранитель тихо сказал:

— Теперь вы оба вспомнили слишком много.
` },
    { title: "Глава 23: Тот, кого нельзя вернуть", text: `

Часы шли назад.

Не все сразу. Сначала одна — над дверью, с треснувшим циферблатом. Потом другая, спрятанная за книжным шкафом. Затем часы на стене, которых Розария прежде не замечала, хотя была уверена, что знает эту комнату почти наизусть.

Стрелки двигались против привычного направления, и вместе с каждым их движением мир словно пытался отменить что-то уже случившееся.

Пылинки поднимались с пола и возвращались на полки. Лист бумаги, выпавший из коробки, сам собой складывался обратно. На фотографии лица становились моложе, а тени — длиннее.

И только Хранитель не менялся.

Он стоял у двери, разделявшей комнату и коридор, и смотрел на Розарию так, словно ждал от неё чего-то очень простого.

Например, чтобы она наконец вспомнила его имя.

— Что значит «слишком много»? — спросила Розария.

Хранитель не ответил.

— Ты всё время говоришь загадками. «Вы оставили меня». «Вы вспомнили слишком много». «Третья дверь». Может, хоть раз ты объяснишь что-нибудь нормально?

— Нормально? — переспросил он.

— Да. Это когда человек задаёт вопрос, а ему отвечают словами, которые можно понять без старой книги, трёх ключей и внезапного появления призраков!

Странник тихо выдохнул.

— Вот теперь я точно уверен, что ты вспомнила себя.

Розария резко повернулась к нему.

— Я сейчас и тебя в стену впечатать могу.

— Знаю.

— И ты даже не испугался?

— Я семь лет назад видел, как ты пыталась прогнать садового гуся, потому что он занял твою беседку. После этого меня трудно напугать.

— Он украл мою булочку!

— Он был гусём.

— Это не оправдание!

На мгновение между ними возникло что-то прежнее. Такое простое и тёплое, что Розария почти забыла, где они находятся.

Почти.

Потому что часы вдруг остановились.

Все.

И Хранитель впервые отвёл взгляд.

— Он услышал, — произнёс он.

— Кто?

Вместо ответа Хранитель посмотрел на фотографию, лежавшую на полу.

На ней были трое.

Две знакомые фигуры — Розария и Странник. Между ними стоял Хранитель, но теперь его лицо на снимке стало совершенно чётким.

Он выглядел молодым. Не старше двадцати. У него были светлые волосы, усталые глаза и маленькая родинка возле левого виска.

Розария смотрела на него и чувствовала, как где-то глубоко внутри шевелится воспоминание.

Не лицо.

Не имя.

Ощущение.

Будто когда-то она очень долго держала этого человека за руку, а потом сама разжала пальцы.

— Я тебя знаю, — прошептала она.

Хранитель медленно поднял голову.

— Да.

— Но я не помню откуда.

— Это тоже было твоим решением.

Странник шагнул вперёд.

— Хватит. Ты обещал рассказать правду, когда мы найдём комнату.

— Я обещал, что вы получите возможность её услышать.

— Не играй словами.

— Я не играю, Странник. Это вы оба слишком долго считали, что время обязано быть справедливым.

Хранитель поднял руку и коснулся стены.

За обоями что-то щёлкнуло.

Комната дрогнула, словно огромный механизм внутри Элиара повернулся на одно деление. Книжный шкаф отъехал в сторону, открывая узкую дверь. За ней находилась лестница, ведущая вниз.

Розария посмотрела на Странника.

— Ты знал, что здесь есть ещё одна дверь?

— Нет.

— Правда?

— Розария, если бы я знал о каждой тайной двери в этом саду, мы бы уже давно отсюда выбрались.

— Или застряли бы в какой-нибудь кладовке.

— Это тоже возможно.

Она хотела улыбнуться, но не смогла.

Потому что из-за двери доносился детский плач.

Тихий, сдавленный, словно ребёнок старался не разбудить кого-то в соседней комнате.

Розария первой ступила на лестницу.

— Подожди, — сказал Странник.

Она остановилась.

— Что?

— На этот раз не иди одна.

Он протянул ей руку.

Розария посмотрела на его ладонь. На секунду ей показалось, что она уже видела этот жест. Не сейчас. Не в этой комнате. Давным-давно, когда мир был проще, а обещания казались нерушимыми.

Она вложила свою руку в его.

И они спустились вместе.

---

Внизу не было ни подвала, ни комнаты.

Там находился коридор, наполненный мягким золотистым светом. По обеим сторонам стояли высокие стеклянные витрины, а внутри каждой лежал какой-нибудь предмет: деревянная лодочка, засохший цветок, серебряная пуговица, маленький колокольчик, сломанная игрушечная лошадка.

Розария остановилась возле первой витрины.

Внутри лежала детская корона из листьев.

— Я её помню, — сказала она.

— Ты сделала её из веток старой розы, — отозвался Странник. — Потом объявила себя королевой сада и запретила мне входить в беседку.

— А ты всё равно входил.

— Потому что ты оставляла дверь открытой.

— Я проверяла, послушаешься ли ты.

— Конечно.

— И?

— Я не послушался.

Розария едва заметно улыбнулась.

Под короной лежала маленькая табличка.

«ПЕРВАЯ КОРОНА. ВОЗРАСТ: СЕМЬ ЛЕТ. ВЛАДЕЛИЦА: РОЗАРИЯ ЛЮСТЕРИЯ.»

Но ниже, словно кто-то пытался стереть надпись, проступали другие буквы:

«ПОДАРЕНО ТЕМ, КТО ОСТАЛСЯ.»

Розария коснулась стекла.

В тот же миг витрина исчезла.

Она увидела себя маленькую — босую, с растрёпанными волосами и зелёной лентой на запястье. Рядом стоял мальчик, которого она узнала сразу.

Хранитель.

Только на этот раз он не выглядел незнакомцем.

Он смеялся, пока Розария пыталась закрепить на его голове венок из листьев.

— Не двигайся! — приказывала она.

— Он колется!

— Королевская корона не может быть удобной.

— Тогда я не хочу быть королём.

— А я не спрашивала!

Мальчик рассмеялся громче.

И Розария вдруг поняла: когда-то она тоже смеялась рядом с ним. Не потому, что должна была. Не потому, что хотела кому-то понравиться.

Просто потому, что была счастлива.

Воспоминание рассыпалось.

Розария отступила от стекла.

— Ты был моим другом.

Хранитель стоял в нескольких шагах от них.

— Был.

— Почему ты не сказал?

— Ты не помнила меня.

— Но ты мог попытаться!

— Я пытался.

В его голосе не было обвинения. И от этого слова прозвучали ещё больнее.

— Каждый раз, когда ты возвращалась в Элиар, я пытался напомнить тебе. Каждый раз ты смотрела на меня так, будто видела впервые. А потом дверь закрывалась, и я оставался здесь один.

Странник крепче сжал руку Розарии.

— Что значит «каждый раз»?

Хранитель указал на витрины.

— Здесь осталось то, что вы не смогли забрать с собой. Каждая попытка. Каждая память. Каждый день, который вы пытались переписать.

— Но мы не помним двадцать семь попыток, — сказала Розария.

— Потому что двадцать шесть из них закончились одинаково.

— Чем?

Хранитель посмотрел на Странника.

— Тем, что он закрывал дверь.

Странник побледнел.

— Нет.

— Ты закрывал её снова и снова.

— Я не мог помнить такое.

— Именно поэтому ты просил забыть.

Розария отпустила его руку, но не отошла.

— А я? Что делала я?

Хранитель долго молчал.

Потом подошёл к самой дальней витрине.

Внутри лежал маленький белый цветок. Его лепестки были прозрачными, словно сделанными из тонкого льда. На стебле виднелась крошечная капля воды, которая не падала вниз, сколько бы времени ни проходило.

Под витриной было написано:

«ПОСЛЕДНЕЕ, ЧТО ОНА ПОПРОСИЛА СОХРАНИТЬ.»

— Что это? — спросила Розария.

— Твоя память о том дне.

— Но я ничего не помню.

— Ты попросила меня забрать её.

Розария покачала головой.

— Зачем?

— Потому что ты увидела, что находится за третьей дверью.

— И что же там?

Хранитель посмотрел на неё с такой усталостью, будто этот вопрос задавали ему уже сотни раз.

— Не чудовище. Не проклятие. Не конец света.

Он коснулся стекла.

— Там было будущее.

Капля на цветке дрогнула.

— Твоё будущее, Розария. И ты увидела, чем оно закончится, если останешься в Элиаре.

— Чем?

— Ты умрёшь здесь.

Слова повисли в тишине.

Странник резко шагнул к Хранителю.

— Ты не можешь знать этого!

— Я видел.

— Будущее меняется!

— Иногда.

— Тогда мы могли что-то сделать!

— Вы и пытались. Двадцать семь раз.

Странник замолчал.

Розария чувствовала, как холодеют её пальцы.

Она не хотела верить Хранителю. Но где-то внутри уже знала, что он говорит правду — по крайней мере, ту её часть, которую сам помнил.

— Значит, я попросила тебя закрыть дверь, чтобы спасти себя?

— Нет, — тихо ответил Хранитель. — Ты попросила закрыть её, чтобы спасти его.

Он посмотрел на Странника.

— Потому что в том будущем он оставался здесь вместо тебя.

Странник отвернулся.

— Я бы сделал это.

— Ты и сделал.

— Я бы сделал это снова.

— Я знаю.

В голосе Хранителя впервые появилась злость.

— Вот в этом и была проблема! Ты всегда был готов остаться. А она всегда возвращалась за тобой. И каждый раз сад забирал у вас ещё немного памяти, пока вы не перестали понимать, что именно пытаетесь спасти.

Розария посмотрела на белый цветок.

— А ты?

Хранитель не ответил.

— Что случилось с тобой?

— Кто-то должен был удерживать дверь закрытой с другой стороны.

— И ты остался.

— Да.

— Но почему именно ты?

Он улыбнулся — очень слабо и совсем не весело.

— Потому что в тот день вы оба решили, что меня можно вернуть.

По коридору пробежала дрожь.

Витрины начали гаснуть одна за другой. Внутри них предметы исчезали, словно их стирала невидимая рука.

— Что происходит? — спросил Странник.

Хранитель посмотрел наверх, туда, где за потолком находился огромный часовой механизм Элиара.

— Вы вспомнили то, что сад не собирался вам возвращать.

— И что теперь?

— Теперь он попытается забрать это обратно.

Раздался треск.

Стекло над белым цветком покрылось тонкими чёрными линиями. Капля на лепестке сорвалась и упала вверх, к потолку.

Розария схватила Хранителя за руку.

— Мы не оставим тебя здесь.

Он посмотрел на её пальцы, сжавшие его запястье.

И впервые за всё время в его глазах появился страх.

— Не обещай этого.

— Почему?

— Потому что ты уже обещала.

Пол под ними дрогнул.

В дальнем конце коридора возникла дверь — высокая, чёрная, без ручки. Та самая третья дверь.

Только теперь на ней не было ни надписей, ни замочной скважины.

Вместо этого в центре медленно проступили три имени.

РОЗАРИЯ.

СТРАННИК.

ИМЯ, КОТОРОЕ ОНИ ЗАБЫЛИ.

Последняя строка мерцала, словно дверь пыталась вспомнить её вместе с ними.

Розария посмотрела на Хранителя.

— Как тебя зовут?

Он открыл рот.

Но прежде чем успел ответить, из-за двери раздался голос самой Розарии — взрослый, усталый, отчаянный:

— Не возвращайте его. Пожалуйста. На этот раз не возвращайте его.

Странник побледнел.

— Это ты?

Розария не могла произнести ни слова.

Потому что голос за дверью продолжил:

— Если он вернётся, Элиар вспомнит, кого должен забрать вместо него.

Хранитель медленно высвободил руку.

— Теперь вы понимаете, почему я не хотел, чтобы вы вспоминали?

— Нет, — прошептала Розария. — Я понимаю только то, что снова что-то решила за нас троих.

Она шагнула к двери.

Странник перехватил её ладонь.

— Розария…

— Я не собираюсь открывать её.

Она посмотрела ему в глаза.

— Я собираюсь узнать, почему однажды попросила не возвращать нашего друга.

Впервые Хранитель отступил от двери.

Не от страха перед ней.

От страха перед Розарией.

Потому что он наконец понял: она больше не собиралась позволять прошлому принимать решения за неё.

А за чёрной дверью кто-то тихо рассмеялся.

И произнёс:

— Тогда спроси Странника, что он сделал в последний день.

Странник не отпустил её руку.

Но и не посмотрел ей в глаза.

И Розария поняла: он вспомнил.

Всё.` },
    { title: "Глава 24:Последний день", text: `Странник молчал.

Розария никогда не любила это молчание.

Не то спокойное, привычное, когда он сидел рядом, смотрел в окно и позволял ей рассказывать обо всём подряд. Не то молчание, в котором не требовалось подбирать слова, потому что рядом с ним можно было просто быть собой.

Она не любила другое — тяжёлое, напряжённое, будто человек уже знает ответ, но надеется, что вопрос так и останется невысказанным.

Сейчас Странник молчал именно так.

— Посмотри на меня, — попросила Розария.

Он не поднял головы.

— Пожалуйста.

Тогда он посмотрел.

В его глазах не было привычной отстранённости. Только страх — настоящий, почти детский. Такой, который невозможно скрыть ни холодным голосом, ни насмешкой, ни притворным равнодушием.

— Я сделал то, о чём ты меня просила, — сказал он.

— Что именно?

— Закрыл дверь.

— Я знаю.

— Нет. Ты не понимаешь.

Он отступил на шаг, словно между ними внезапно возникла невидимая стена.

— Ты просила меня не позволить тебе вернуться. Даже если будешь плакать. Даже если станешь кричать. Даже если скажешь, что ненавидишь меня. Ты сказала, что я должен помнить твою просьбу, когда сама уже не смогу.

Розария почувствовала, как у неё сжалось сердце.

— И ты согласился?

— Да.

— Даже не попытался найти другой способ?

— Пытался.

Он произнёс это так тихо, что она едва расслышала.

— Мы искали другой способ до самого конца.

Хранитель стоял у чёрной двери и не вмешивался. Впервые за всё время он не пытался направлять их, предупреждать или объяснять, что они должны делать.

Казалось, эта часть истории принадлежала только двоим.

— Расскажи мне, — попросила Розария. — Не то, что ты считаешь правильным рассказать. Не то, что поможет тебе выглядеть лучше. Всё, что помнишь.

Странник закрыл глаза.

И Элиар ответил за него.

---

Сначала Розария услышала дождь.

Не тот дождь, который шёл за окнами дворца, когда капли стучали по стеклу и дворцовые служанки спешили убрать цветы с балконов.

Этот дождь был другим.

Он падал вверх.

Вода поднималась с земли, стекала с листьев к небу, собиралась в перевёрнутые лужи под ветвями деревьев. Облака двигались по кругу, а солнце висело низко над горизонтом, словно не могло решить, наступает ли утро или вечер.

В центре сада стояли трое детей.

Розария узнала себя сразу.

Семилетняя принцесса была в светлом платье, перепачканном землёй, а на запястье у неё красовалась зелёная лента. Волосы растрепались, щёки раскраснелись от бега.

Рядом стоял Странник.

Он держал в руках деревянные часы — те самые, которые Розария видела за третьей дверью.

Третий ребёнок был Хранителем.

Тогда он ещё не был Хранителем. Просто мальчиком, который слишком много знал о времени и слишком часто пытался скрыть это за улыбкой.

— Ты обещал, — сказала маленькая Розария.

— Я помню.

— Нет, ты всегда так говоришь! «Я помню», «я постараюсь», «я вернусь». А потом всё равно уходишь!

Странник опустил глаза.

— Я не хочу уходить.

— Тогда не уходи!

— Розария…

— Нет! — Она топнула ногой. — Если ты сейчас скажешь, что это ради меня, я тебя укушу!

Хранитель фыркнул.

— Она действительно может.

— Я слышу! — возмутилась Розария.

— Именно поэтому и говорю вслух, — ответил он.

На мгновение все трое рассмеялись.

И от этого смеха воспоминание стало почти невыносимым.

Потому что Розария увидела не трагедию, не проклятие и не страшную тайну. Она увидела обычный день троих детей, которые ещё не знали, что однажды будут искать друг друга среди осколков собственной памяти.

Странник присел перед Розарией и протянул ей деревянные часы.

— Возьми.

— Зачем?

— Чтобы у тебя было что-то, что напоминает обо мне.

Она нахмурилась.

— У меня и так есть ты.

— Я знаю.

— Тогда это глупо.

— Наверное.

Розария прижала часы к груди.

— Я всё равно не отдам их никому.

— Даже если я попрошу?

Она задумалась.

— Посмотрим, насколько хорошо ты попросишь.

Хранитель покачал головой.

— Вы двое когда-нибудь сведёте меня с ума.

— Ты сам с нами дружишь, — заметила Розария.

— Вот именно. Это моя самая большая ошибка.

Но он улыбался.

И Розария была уверена: пока они втроём, ничего по-настоящему плохого случиться не может.

Она ошибалась.

---

Первой перемену заметила Розария.

Вода в фонтане перестала течь вверх.

Капли замерли в воздухе, а затем упали обратно в чашу.

Где-то в глубине сада пробили часы.

Один раз.

Потом второй.

На третий звук Хранитель резко обернулся.

Улыбка исчезла с его лица.

— Нам нужно уходить.

— Почему? — спросила Розария.

— Сейчас.

Странник взял её за руку.

Они побежали по дорожке между розовыми кустами. Впереди показалась арка, за которой находилась знакомая беседка.

Но чем ближе они подходили, тем сильнее менялся сад.

Деревья становились выше, дорожки удлинялись, а знакомые повороты исчезали. На месте фонтана возникла гладкая поверхность воды, в которой отражалось небо, которого не существовало над их головами.

И за этой водой Розария увидела себя.

Только не семилетнюю.

Взрослую.

Та стояла у чёрной двери, держала в руках белую розу и плакала.

Розария остановилась.

— Кто это?

Странник обернулся и посмотрел на воду.

Его лицо изменилось.

— Не смотри.

— Но это я!

— Розария, отойди!

Поздно.

Отражение подняло голову.

И произнесло голосом, который Розария узнала бы среди тысячи:

— Если ты останешься, он погибнет.

Вода пошла рябью.

В отражении появился Странник — взрослый, измученный, с закрытыми глазами. Он стоял по другую сторону двери, а вокруг него медленно исчезали цветы.

— Если уйдёшь, он сможет жить, — продолжил голос. — Он забудет тебя. Ты забудешь его. И однажды вы оба сможете стать счастливыми.

Маленькая Розария замотала головой.

— Нет.

— Ты ведь хочешь, чтобы он был счастлив?

— Да, но…

— Тогда отпусти его.

Она прижала деревянные часы к груди.

— Это неправда.

Хранитель подбежал к ней и схватил за плечи.

— Не слушай! Это не будущее. Это только один из вариантов!

Но вода уже показывала другое.

Дворец.

Солнечный день.

Розария, которая выросла, не зная Странника.

Он, который жил далеко от Элиара, улыбался, разговаривал с другими людьми, строил свою жизнь.

Всё выглядело спокойно.

Правильно.

Почти счастливо.

И в этой картине не было её.

Маленькая Розария смотрела на отражение, и слёзы текли по её щекам.

— Я не хочу его забывать.

— Тогда он останется здесь, — ответил голос.

— Нет…

— Он останется, чтобы дверь не открылась. И однажды сад заберёт его целиком.

Странник встал перед ней, закрывая собой воду.

— Не верь этому.

— Но вдруг это правда?

— Даже если правда, мы найдём другой способ.

— А если не найдём?

Он замолчал.

И это молчание напугало Розарию больше любых слов.

Потому что он тоже боялся.

Но всё равно не собирался отпускать её руку.

---

Они вернулись к чёрной двери втроём.

За ней что-то двигалось.

Не существо и не тень — скорее, множество воспоминаний, которые пытались обрести форму. Розария видела знакомые места, слышала голоса, узнавала смех и обрывки разговоров.

И каждый раз, когда она пыталась сосредоточиться, что-то внутри неё становилось слабее.

Хранитель положил ладонь на дверь.

— Я могу удержать её, — сказал он. — Но только если кто-то останется по эту сторону.

— Тогда останусь я, — немедленно ответил Странник.

— Нет, — сказала Розария.

Оба посмотрели на неё.

Она стояла, крепко сжимая деревянные часы.

— Я не позволю вам решать за меня.

— Розария, — начал Странник.

— Нет! Вы оба всё время говорите, что хотите меня защитить. Но почему никто не спрашивает, чего хочу я?

Её голос дрожал.

— Я хочу, чтобы мы ушли отсюда вместе. Все трое. Я хочу вернуться домой, посадить цветы возле беседки и больше никогда не видеть эту дверь!

Хранитель опустил голову.

— Я тоже хочу.

— Тогда пойдём!

— Не получится.

Тишина.

— Почему?

Хранитель посмотрел на свои руки.

По пальцам медленно пробегал золотистый свет, похожий на тонкие трещины в стекле.

— Потому что я уже связан с дверью. Если мы все уйдём, она откроется снова. А если я останусь, у вас будет шанс.

— Значит, мы найдём другой способ разорвать связь!

— Мы пробовали.

— Попробуем ещё!

— Розария…

— Не смей говорить мне, что ничего нельзя сделать!

Она плакала и злилась одновременно. Ей хотелось ударить дверь, разбить её, заставить весь сад исчезнуть. Хотелось проснуться в своей кровати, увидеть солнечный свет и узнать, что всё это было лишь страшным сном.

Но Хранитель стоял перед ней, и она понимала: он не собирается отступать.

Странник присел рядом с ней.

— Послушай меня.

— Нет.

— Пожалуйста.

Она подняла на него заплаканные глаза.

— Если я закрою дверь, ты должна будешь уйти.

— Нет.

— Розария.

— Я сказала нет!

— Если ты останешься, я не смогу тебя спасти.

— А кто спасёт тебя?!

Он не ответил.

И тогда она поняла.

Он не собирался искать способ спасти себя.

Он собирался остаться вместо неё.

Розария схватила его за рукав.

— Не смей. Слышишь? Не смей решать, что можешь просто исчезнуть из моей жизни!

— Я не хочу исчезать.

— Тогда пообещай!

Он посмотрел на неё.

И, несмотря на страх, на странный свет за дверью и на то, что сад рушился вокруг них, улыбнулся своей знакомой улыбкой.

— Я вернусь.

— Ты всегда так говоришь.

— На этот раз я постараюсь выполнить обещание.

— Нет. Ты должен.

Он коснулся её лба своим.

— Хорошо. Должен.

Розария закрыла глаза.

Она не знала, что это будет последняя секунда, когда они стоят рядом, не разделённые дверью, временем или чужими решениями.

Когда она открыла глаза, Хранитель уже протягивал ей маленький белый цветок.

— Сохрани его, — попросил он.

— Зачем?

— Чтобы однажды ты вспомнила, что я тоже был частью вашей истории.

Розария взяла цветок.

— Ты не будешь просто частью истории. Ты вернёшься с нами.

Хранитель ничего не ответил.

Он лишь посмотрел на Странника.

И в этом взгляде было что-то, чего Розария тогда не поняла.

Благодарность.

Прощание.

И просьба, которую он не решался произнести.

---

— Я закрыл дверь, — сказал Странник.

Воспоминание исчезло.

Розария снова стояла в подземном коридоре Элиара, рядом с чёрной дверью. Её ладони были холодными, а на щеках остались слёзы, которых она не заметила.

— Я закрыл её, потому что ты попросила меня спасти тебя, — продолжил он. — Ты сказала, что если передумаешь, я не должен слушать. Ты сказала, что не простишь меня, если я позволю тебе остаться.

— Но я ведь хотела, чтобы мы все ушли…

— Знаю.

— И ты всё равно закрыл дверь?

— Да.

Она отступила.

Странник не стал её останавливать.

— Ты мог не послушаться.

— Мог.

— Ты мог попробовать ещё раз!

— Мог.

— Тогда почему?!

Он посмотрел на неё, и в его глазах больше не было попытки спрятать правду.

— Потому что я испугался, Розария.

Она замолчала.

— Я испугался, что потеряю тебя навсегда. И решил, что лучше позволить тебе забыть меня, чем смотреть, как ты исчезаешь у меня на глазах.

Он тяжело вдохнул.

— Я думал, что если закрою дверь, ты будешь жить. Что однажды вырастешь, забудешь этот сад и найдёшь своё счастье. Я не знал, что сам забуду тебя. Не знал, что желание, которое загадал раньше, превратит наше решение в закон.

— А Хранитель?

Странник опустил взгляд.

— Он остался удерживать дверь. Я обещал, что вернусь за ним.

— Но не вернулся.

— Не смог.

Эти слова прозвучали почти неслышно.

Розария хотела разозлиться. Хотела обвинить его, сказать, что он не имел права решать за неё, что он должен был бороться до конца.

Но она вспомнила его лицо в том воспоминании.

Он был ребёнком.

Испуганным ребёнком, который пытался спасти двух людей, которых любил, и не знал, как сделать так, чтобы никто не пострадал.

Он совершил выбор.

И теперь им предстояло жить с его последствиями.

— Я злюсь на тебя, — наконец сказала Розария.

Странник кивнул.

— Знаю.

— Очень.

— Знаю.

— И мне нужно время, чтобы всё это понять.

— Хорошо.

Она помолчала.

— Но я не хочу, чтобы ты снова решал за меня, даже если тебе страшно.

Он посмотрел на неё.

— Я постараюсь.

— Нет, Странник. Не «постараюсь». Пообещай.

Он долго молчал, а потом протянул ей руку.

— Обещаю.

Розария взяла её.

Не потому, что уже простила его.

А потому, что хотела сама решить, что делать дальше.

---

Хранитель стоял у двери и смотрел на белый цветок в руках Розарии.

— Теперь ты знаешь, — сказал он. — Вы оба сделали выбор. Никто из вас не хотел причинить боль другому. Но от этого боль не исчезла.

— Я знаю.

— Тогда уходите. Пока дверь ещё закрыта.

Розария покачала головой.

— Мы заберём тебя.

— Ты не понимаешь…

— Тогда объясни.

Хранитель впервые за долгое время рассмеялся. Устало, почти беззвучно.

— Ты всё такая же.

— Это комплимент?

— Пока не решил.

— Вот и решай быстрее. У нас тут, между прочим, целый сад пытается нас съесть.

Странник тихо хмыкнул.

И на мгновение Хранитель тоже улыбнулся.

Но улыбка исчезла, когда белый цветок в руках Розарии начал темнеть.

Сначала почернел один лепесток.

Затем второй.

Из глубины чёрной двери раздался скрежет.

— Что происходит? — спросила Розария.

Хранитель резко повернулся.

— Вы нарушили закон.

— Какой ещё закон?!

— Вы вспомнили правду, но не приняли её. Элиар считает, что история осталась незавершённой.

— И что ему нужно?

Хранитель посмотрел на Странника.

— Чтобы тот, кто закрыл дверь, снова сделал выбор.

На чёрной поверхности появилась надпись:

«ОДИН ДОЛЖЕН ОСТАТЬСЯ.»

Розария почувствовала, как Странник сжал её руку.

— Нет, — сказала она.

Буквы изменились.

«ОДИН УЖЕ ОСТАЛСЯ.»

Хранитель побледнел.

А затем из-за двери донёсся третий голос.

Не голос Розарии.

Не голос Странника.

И даже не голос Хранителя.

Он звучал так, будто говорил сам сад.

— Вы забыли самое главное.

Дверь медленно приоткрылась.

В щели показалась маленькая рука, сжимающая деревянные часы.

И детский голос произнёс:

— Вы оставили не меня. Вы оставили того, кем я должен был стать.

Розария посмотрела на Странника.

Он побледнел так сильно, что она испугалась за него.

Потому что теперь он понял: за третьей дверью всё это время находился не только Хранитель.

Там оставалась ещё одна версия его самого.

Та, которая никогда не вернулась домой.

И она наконец нашла способ выйти.
` },
    { title: "Глава 25:Мальчик по ту сторону времени", text: `Глава 25. Мальчик по ту сторону времени

Дверь открылась всего на несколько сантиметров.

Этого оказалось достаточно, чтобы в коридор проник холод.

Он не был похож на зимний мороз, от которого мёрзнут пальцы и краснеет нос. Этот холод будто забирал не тепло, а что-то гораздо более важное: ощущение, что ты находишься в настоящем моменте.

Розария вдруг перестала понимать, сколько ей лет.

На мгновение она снова стала семилетней принцессой, стоявшей у фонтана с деревянными часами в руках. Потом — пятнадцатилетней девушкой, которая впервые нашла ключ возле своей кровати. А затем увидела себя совсем взрослой, с серебряными прядями в волосах и усталым взглядом человека, слишком долго прожившего одну и ту же историю.

Она пошатнулась.

Странник тут же поддержал её.

— Не смотри в щель, — сказал он.

— Я уже посмотрела.

— Тогда больше не смотри.

— Ты понимаешь, что твои советы иногда появляются слишком поздно?

— Да.

— И всё равно продолжаешь их давать?

— Это моя отличительная черта.

Она хотела ответить, но за дверью снова раздался тихий стук.

Один раз.

Второй.

На третий Странник резко отступил.

Розария заметила это.

— Что?

— Ничего.

— Ты сейчас сделал такое лицо, будто увидел собственную могилу.

— Неудачное сравнение.

— Значит, всё-таки что-то увидел.

Он не ответил.

И тогда Розария поняла: дело было не в самом стуке.

Он узнал ритм.

Три коротких удара, между которыми проходили одинаковые промежутки времени.

Так стучал маленький Странник, когда приходил к ней в комнату в детстве и хотел позвать её на прогулку, но не желал, чтобы его услышали взрослые.

Так же он стучал по стене соседней комнаты, если они ссорились и не хотели разговаривать друг с другом.

Три удара означали: «Я здесь. Ты меня слышишь?»

Розария посмотрела на него.

— Это ты?

— Нет.

— Но стук…

— Я знаю.

За дверью послышался голос:

— Ты ведь обещал вернуться.

Странник закрыл глаза.

— Не отвечай ему, — прошептал он.

— Почему?

— Потому что я не знаю, кто из нас сейчас говорит правду.

---

Хранитель подошёл к двери и провёл пальцами по её краю.

— Он не должен был проснуться.

— Кто? — спросила Розария.

— Тот, кем Странник мог стать.

— Это не ответ.

— Другого у меня нет.

Хранитель повернулся к ним.

— Послушайте внимательно. Элиар хранит не только воспоминания. Он сохраняет возможности, которые когда-то существовали, но так и не стали настоящим. Неосуществлённые решения. Несказанные слова. Пути, по которым вы могли пойти, но не пошли.

— Значит, за дверью другая версия Странника? — спросила Розария.

— Да.

— И она хочет занять его место?

— Не совсем.

Странник усмехнулся, но в его голосе не было веселья.

— Конечно. Было бы слишком просто, если бы кто-то просто захотел украсть мою жизнь.

— Он не хочет твою жизнь, — сказал Хранитель. — Он хочет получить ту, которой у него никогда не было.

За дверью раздался смешок.

— Как красиво ты всё объясняешь, — произнёс голос. — А ведь можно было сказать проще: ты оставил меня одного.

Хранитель побледнел.

Розария заметила, как он сжал пальцы.

— Ты его знаешь? — спросила она.

— Я знаю, кем он был.

— Кем?

Хранитель посмотрел на Странника.

— Им.

Странник резко поднял голову.

— Что ты сказал?

— До того как ты закрыл дверь, у тебя было два возможных будущих. В одном ты возвращался вместе с Розарией. В другом оставался в Элиаре и продолжал удерживать дверь. Сад не уничтожил второй вариант. Он сохранил его.

— Это невозможно.

— Ты находишься в саду, который хранит время в цветах и воспоминаниях в воде. Мы давно прошли границу обычного возможного.

— И ты всё это время знал?

— Не всё. Я знал, что однажды дверь может попытаться вернуть то, что осталось за ней.

Странник смотрел на Хранителя так, будто хотел задать тысячу вопросов, но не мог выбрать ни одного.

Розария сделала шаг к двери.

— Если это тоже Странник, значит, он помнит всё, что произошло?

— Он помнит ту часть истории, в которой ты ушла, — ответил Хранитель. — И ту, в которой он остался ждать.

За дверью наступила тишина.

А потом мальчик произнёс:

— Я ждал тебя.

Розария почувствовала, как у неё сжалось сердце.

— Сколько?

— Не знаю. Здесь нет дней. Нет ночей. Иногда мне кажется, что прошло несколько минут. Иногда — что целая жизнь.

— Мне жаль.

— Тебе всегда жаль, когда ты наконец вспоминаешь.

Странник резко шагнул вперёд.

— Не смей говорить с ней так.

— А ты не смей защищать её от меня! — Голос за дверью впервые сорвался. — Ты ведь тоже её бросил!

Слова ударили по тишине, как камень по стеклу.

Странник замолчал.

И Розария увидела, что он не собирается спорить.

Потому что в этом обвинении была часть правды.

---

Дверь раскрылась ещё немного.

Теперь Розария могла увидеть коридор по другую сторону.

Он был почти таким же, как тот, в котором они стояли. Те же витрины, те же каменные стены, тот же золотистый свет.

Но все цветы в нём были чёрными.

На полу сидел мальчик лет семи.

У него были волосы Странника, его глаза и та же привычка наклонять голову, когда он пытался понять что-то сложное. На запястье мальчика красовалась знакомая зелёная лента.

Он держал деревянные часы.

Розария перестала дышать на несколько секунд.

Это был Странник.

Не взрослый, не изменившийся временем, не похожий на него лишь внешне.

Это был тот самый ребёнок, которого она помнила из своих возвращённых воспоминаний.

— Привет, Розария, — сказал мальчик.

Она не знала, что ответить.

— Ты выросла.

— А ты…

— Не вырос?

Он улыбнулся.

И эта улыбка была такой знакомой, что Розария невольно улыбнулась в ответ.

— Наверное, мне просто некуда было расти, — добавил он.

Странник рядом с ней напрягся.

— Отойди от двери.

Мальчик посмотрел на него.

Долго.

С любопытством, почти с нежностью.

— Ты стал взрослым.

— Да.

— Ты помнишь её?

— Да.

— А она помнит тебя?

Странник не ответил сразу.

— Начинает.

Мальчик кивнул, словно услышал ожидаемый ответ.

— Тогда тебе повезло.

В его голосе не было злости.

Именно это пугало сильнее всего.

— Ты ведь можешь выйти, — сказала Розария.

Хранитель резко обернулся.

— Розария, не надо.

Но она уже смотрела на ребёнка.

— Если ты — часть Странника, если ты тоже существуешь, мы можем найти способ вернуть тебя.

Мальчик опустил глаза на часы.

— Ты правда этого хочешь?

— Да.

— Даже если из-за меня он перестанет существовать?

Розария замерла.

Странник схватил её за руку.

— Не отвечай.

— Но…

— Пожалуйста.

Она посмотрела на него.

Он не пытался командовать ею. Не пытался скрыть правду. Он просто боялся.

Боялся, что она снова окажется перед выбором, который невозможно сделать без потерь.

Розария осторожно высвободила руку.

— Я не буду обещать то, чего пока не понимаю, — сказала она мальчику. — Но и оставлять тебя за дверью только потому, что нам страшно, не собираюсь.

Мальчик посмотрел на неё с неожиданной серьёзностью.

— Ты всегда была такой.

— Какой?

— Ты сначала говоришь, что всё исправишь, а потом придумываешь, как именно.

— Неправда.

— Правда.

— Я вообще-то принцесса.

— И что?

— Мне положено быть убедительной.

Мальчик тихо рассмеялся.

На секунду он снова стал просто ребёнком.

Не возможностью, не потерянной памятью и не угрозой.

Мальчиком, который хотел вернуться домой.

— Я скучал по тебе, — сказал он.

Розария почувствовала, как защипало глаза.

— Я тоже.

И в этот момент дверь задрожала.

Хранитель оттащил её назад.

— Не говори этого!

— Почему?!

— Потому что он не просто слышит твои слова. Он становится частью того, что ты помнишь. Каждое чувство, которое ты к нему испытываешь, делает границу слабее!

Розария обернулась к мальчику.

Тот больше не улыбался.

— Значит, ты всё-таки не хочешь, чтобы я вернулся, — сказал он.

— Я хочу, чтобы ты был в безопасности!

— Здесь я не в безопасности. Здесь я просто не могу умереть.

Он поднял голову.

— Это не одно и то же.

---

Часы в руках мальчика начали тикать.

Странник побледнел.

— Нет…

— Что? — спросила Розария.

— Эти часы остановились в тот день.

— Но они сейчас идут.

— Именно.

Мальчик посмотрел на стрелки.

— Я нашёл способ.

Хранитель отступил от двери.

— Какой способ?

— Ты ведь сам учил меня, что время можно обмануть.

— Я учил тебя, что время нельзя заставить вернуть то, что оно забрало.

— Нет. Ты учил меня, что любая дверь открывается с двух сторон.

Мальчик встал.

Он был невысоким, едва доставал взрослому Страннику до плеча. Но когда поднялся, Розария почувствовала странное давление в воздухе, будто весь сад повернулся в его сторону.

— Я долго думал, — сказал мальчик. — Если я не могу выйти сам, мне нужен кто-то, кто откроет дверь снаружи.

— Поэтому ты говорил с нами? — спросил Странник.

— Сначала да.

— А теперь?

Мальчик посмотрел на Розарию.

— Теперь я знаю, что она вернулась.

Странник встал между ними.

— Она не твоя.

Мальчик нахмурился.

— Я и не говорил, что моя.

— Тогда чего ты хочешь?

— Чтобы она помнила.

— Она помнит!

— Не всё.

Мальчик сделал шаг к двери.

— Она помнит, как ты смеялся. Как вы спорили. Как ты обещал вернуться. Но она не помнит, что ты сказал мне перед тем, как уйти.

Странник замер.

Розария посмотрела на него.

— Что ты сказал?

Он молчал.

Мальчик прижал часы к груди.

— Ты сказал: «Если я забуду, напомни мне, кем я был».

Взрослый Странник закрыл глаза.

— Нет…

— Ты попросил меня сохранить всё, что мы пережили. Все наши воспоминания. Все обещания. Всё, что ты не хотел потерять.

Мальчик подошёл ближе к двери.

— И я сохранил.

Витрины за его спиной начали светиться.

В каждой возникло отражение Странника — маленького, подростка, взрослого. Разные выражения лица, разные годы, разные воспоминания.

— Я сохранил твою радость, когда она впервые улыбнулась тебе. Твой страх, когда ты понял, что можешь её потерять. Твою злость на Элиар. Твоё обещание вернуться.

Он посмотрел на взрослого Странника.

— И твою боль, когда ты решил, что лучше забыть.

Странник не двигался.

— Я не хотел, чтобы ты нёс это один, — прошептал он.

— А я не хотел, чтобы ты забывал меня.

Мальчик протянул руку.

Между его ладонью и ладонью взрослого Странника оставалось всего несколько сантиметров.

— Если ты позволишь мне выйти, я верну тебе всё.

Хранитель резко крикнул:

— Не соглашайся!

Но Странник смотрел только на мальчика.

— Всё? — переспросил он.

— Всё, что ты потерял.

— Даже плохие воспоминания?

— Особенно их.

Мальчик улыбнулся.

— Ведь ты всегда хотел знать правду.

Странник медленно поднял руку.

Розария схватила его за запястье.

— Подожди.

Он посмотрел на неё.

— Я должен помнить.

— Да. Но ты не должен отдавать себя ради этого.

— Это не то же самое.

— А если он обманывает?

— Он не обманывает.

— Откуда ты знаешь?

Странник не ответил.

И Розария вдруг поняла: он верил мальчику не потому, что тот доказал свою правоту.

Он верил ему, потому что видел в нём самого себя.

Того, кто остался ждать.

Того, кто сохранил память.

Того, кому он когда-то пообещал вернуться.

---

— Есть другой способ, — произнесла Розария.

Хранитель повернулся к ней.

— Какой?

— Мы уже знаем, что дверь удерживает не только замок. Она держится на обещании. На решении, которое мы приняли тогда.

— Да.

— Значит, нам нужно изменить не прошлое, а то, что мы делаем сейчас.

Мальчик внимательно слушал.

— Ты хочешь сказать, что я могу выйти?

— Я хочу сказать, что мы не обязаны снова повторять тот же выбор.

Розария посмотрела на Странника.

— Мы не будем просто менять тебя на него. Не будем заставлять кого-то оставаться за дверью только потому, что когда-то решили, будто другого выхода нет.

— А если выхода действительно нет? — спросил Хранитель.

— Тогда мы найдём причину, по которой его нет.

Она глубоко вдохнула.

— Мы ведь даже не знаем, что случится, если дверь откроется полностью.

Хранитель молчал.

И это молчание сказало Розарии больше, чем все его прежние объяснения.

Он тоже не знал.

Все эти годы он удерживал дверь, потому что боялся последствий. Потому что считал старое решение единственным возможным.

Но, возможно, он просто слишком долго жил внутри чужого выбора.

Мальчик посмотрел на деревянные часы.

— Я могу помочь.

— Как? — спросил Странник.

— Я знаю, что находится за дверью.

— Мы и так знаем.

— Нет. Вы знаете только то, что помните.

Мальчик повернул часы циферблатом к ним.

На месте цифр появились три маленьких символа: роза, незабудка и пустой круг.

— Три ключа открывают не три двери, — сказал он. — Они открывают три части одного воспоминания.

Розария почувствовала, как холодеют пальцы.

Роза.

Незабудка.

Пустой круг.

— Первый ключ вернул то, что ты помнила, — продолжил мальчик. — Второй — то, что ты забыла. А третий…

Он посмотрел на Хранителя.

— Третий хранит то, что никто из вас не захотел помнить.

Хранитель побледнел.

— Замолчи.

— Ты ведь знаешь, о чём я.

— Замолчи!

Впервые голос Хранителя сорвался настолько сильно, что стены задрожали.

Мальчик не отступил.

— Ты не просто остался за дверью.

Он посмотрел прямо на него.

— Ты сам попросил нас забыть, что сделал.

И в тот же миг все витрины погасли.

Хранитель стоял неподвижно.

Розария медленно повернулась к нему.

— Что ты сделал?

Он не ответил.

А за дверью маленький Странник опустил деревянные часы.

— Спроси его, — сказал он. — Почему именно он должен был остаться.

Хранитель закрыл глаза.

И впервые за всё время Розария увидела, как по его щеке скатилась слеза.

— Потому что, — произнёс он, — если бы вы вспомнили, что произошло на самом деле, вы бы никогда не смогли уйти.

Где-то глубоко в Элиаре пробили часы.

Один раз.

Второй.

На третий звук чёрная дверь распахнулась настежь.

А за ней стоял не мальчик.

Там стоял весь Элиар — сад, каким он был до их первой потери, до всех попыток и до последнего обещания.

И в самом центре сада находился четвёртый ключ.

Тот, которого никогда не существовало.

Розария посмотрела на него.

Потом — на Хранителя.

— Теперь ты расскажешь нам всё.

Хранитель медленно кивнул.

— Да.

Он сделал шаг к открытой двери.

— Но вы должны понять одну вещь. Когда вы узнаете правду, возможно, вы больше не сможете считать нас друзьями.

И первым в сад вошёл Хранитель.
` },
    { title: "Глава 26:Четвёртый ключ", text: `

За дверью не было темноты.

Розария почему-то ожидала именно её: густой, бесконечной, похожей на чернила тьмы, из которой могли появиться любые чудовища. Но за порогом простирался сад.

Настоящий Элиар.

Не тот, который менял дорожки и прятал комнаты за стенами. Не тот, где часы ходили назад, а цветы хранили чужие голоса. И не тот, который показывал Розарии её собственные воспоминания, каждый раз немного отличавшиеся от предыдущих.

Этот сад был живым.

Ветер шевелил листья. В фонтане звенела вода. По дорожкам разбегались солнечные пятна, а возле каменной скамейки росли кусты белых роз. Где-то вдалеке пела птица.

Ничего не ломалось.

Ничего не исчезало.

Время шло вперёд.

Розария переступила порог и замерла.

— Я помню это место, — прошептала она.

Странник встал рядом.

— Я тоже.

Они не смотрели друг на друга. Оба боялись, что стоит произнести ещё хоть слово, и сад снова изменится.

Впереди находилась беседка.

Та самая, которую Розария в детстве объявила своим королевским дворцом, а потом запретила Страннику входить туда за то, что он съел последнюю булочку.

Возле беседки стоял маленький столик. На нём лежали три чашки, деревянная лодочка и раскрытая книга.

Всё выглядело так, будто трое детей просто вышли ненадолго прогуляться и вот-вот вернутся.

Только теперь Розария знала, что они не вернулись.

По крайней мере, не все.

— Почему здесь всё осталось таким? — спросила она.

Хранитель шёл впереди, не оборачиваясь.

— Потому что это не воспоминание.

— Тогда что?

— Последний день, каким он был на самом деле.

Он остановился у беседки.

— Элиар сохранил его до мельчайших подробностей. Но не позволял вам увидеть целиком. Каждый из вас помнил только ту часть, с которой мог жить дальше.

— А ты? — спросил Странник.

Хранитель посмотрел на свои ладони.

— Я помнил всё.

— И поэтому попросил нас забыть?

— Не совсем.

Он наконец повернулся к ним.

— Я попросил вас забыть меня.

Розария почувствовала, как внутри всё сжалось.

— Но зачем?

Хранитель посмотрел на неё так, будто хотел ответить, но боялся услышать собственные слова.

— Потому что именно я открыл третью дверь.

---

Они сели за столик в беседке.

Никто не притронулся к чашкам.

Хранитель стоял напротив них, положив ладони на спинку свободного стула. Солнечный свет падал ему на лицо, и теперь он выглядел ещё моложе, чем в коридоре с витринами. Не таинственным существом, которое могло управлять временем, а обычным человеком, слишком долго носившим на себе чужую вину.

— Когда мы впервые нашли Элиар, — начал он, — мы не знали, что сад умеет сохранять возможности. Мы думали, что он просто показывает воспоминания.

— Как мы, — тихо сказала Розария.

— Да. Вы оба приходили сюда, потому что хотели найти место, где никто не станет решать за вас, кем вам быть. А я пришёл, потому что хотел узнать, почему мне снятся события, которых ещё не случилось.

Странник поднял голову.

— Тебе снились пророческие сны?

— Сначала — только отдельные вещи. Разбитая чашка. Закрытая дверь. Цветок на снегу. Потом я начал видеть людей, которых никогда не встречал, и разговоры, которые ещё не состоялись.

Хранитель посмотрел на Розарию.

— А потом увидел тебя.

Розария нахмурилась.

— Меня?

— В одном из снов ты стояла посреди пустого сада. Все деревья были чёрными, а в руках у тебя был четвёртый ключ.

Он сделал паузу.

— Ты сказала мне: «Если однажды я забуду, кто ты, не позволяй мне вспомнить».

Розария похолодела.

— Я не могла этого сказать. Я даже не знала о четвёртом ключе.

— Тогда ты тоже так думала.

— И ты поверил сну?

— Нет. Я решил, что смогу его изменить.

Хранитель опустил глаза.

— В этом и была моя ошибка.

Он рассказал, как начал искать четвёртый ключ. В старых книгах его не было. На семейных деревьях — тоже. Даже в записях Елены, которая знала об Элиаре больше остальных, не находилось ни одного упоминания.

Но в самом саду существовали следы.

Четвёртая тень возле трёх дверей.

Четвёртый звук в часах, которые били только три раза.

Четвёртый лепесток на цветке, который должен был иметь всего три.

И пустое место в памяти каждого, кто когда-либо входил в Элиар.

— Я думал, ключ поможет мне остановить сон, — сказал Хранитель. — Я думал, если найду его первым, то смогу изменить будущее.

— И нашёл? — спросил Странник.

— Да.

— Где?

Хранитель указал на середину сада.

Там стоял фонтан.

На его краю лежал небольшой металлический предмет.

Розария встала так резко, что стул скрипнул по камню.

Она знала этот ключ.

Именно его она увидела в своём первом сне, когда нашла дверь, потянулась к замку и проснулась с холодным металлом возле подушки.

Тогда она решила, что ключ был послан ей.

Но теперь понимала: возможно, он принадлежал куда более старой истории.

— Он был у тебя? — спросила она.

Хранитель кивнул.

— Я спрятал его в фонтане. Хотел, чтобы никто не нашёл.

— Но я нашла.

— Потому что Элиар выбрал тебя.

— Или потому что ты позволил мне его найти.

Хранитель не ответил.

И Розария поняла, что попала в точку.

---

— Ты знал, что я увижу сон, — сказала она.

— Да.

— Знал, что ключ окажется рядом со мной.

— Да.

— Знал, что я вернусь в Элиар.

— Я надеялся, что ты не вернёшься.

Розария стиснула зубы.

— Ты мог сказать мне правду.

— Не мог.

— Почему?!

Хранитель поднял глаза.

— Потому что четвёртый ключ не открывает дверь, Розария. Он меняет того, кто её открывает.

Тишина.

Даже птица вдалеке перестала петь.

— Объясни, — потребовал Странник.

— Три ключа связаны с памятью. Роза возвращает то, что принадлежит Розарии. Незабудка — то, что Странник пытался сохранить. Пустой круг открывает то, что они оба оставили позади.

Хранитель посмотрел на ключ у фонтана.

— А четвёртый позволяет человеку выбрать, какую версию самого себя он оставит в настоящем.

Розария не сразу поняла смысл этих слов.

— Версию себя?

— В Элиаре существует много возможных вариантов каждого из нас. Но только один становится настоящим. Остальные могут исчезнуть, остаться в саду или превратиться в воспоминания. Четвёртый ключ способен поменять их местами.

Странник медленно выпрямился.

— Значит, мальчик за дверью…

— Может стать тобой.

— А я?

— Можешь оказаться на его месте.

Странник посмотрел на фонтан.

Розария сразу заметила, как изменилось его лицо.

Она знала этот взгляд. Он уже принимал решение.

— Даже не думай, — сказала она.

— Я ещё ничего не сказал.

— Тебе и не нужно. Я знаю, что ты собираешься предложить.

— Если я поменяюсь с ним местами, он сможет выйти.

— А ты останешься здесь!

— Это не обязательно навсегда.

— Ты сам веришь в то, что говоришь?

Он промолчал.

— Вот именно! — Розария отвернулась, пытаясь справиться с дрожью в голосе. — Я устала от того, что все вокруг готовы пожертвовать собой, а потом называют это заботой.

Хранитель тихо сказал:

— Ты права.

Она обернулась.

— Что?

— Ты права. Мы оба слишком долго считали, что любовь означает выбрать за другого человека, что для него лучше.

Он посмотрел на Странника.

— Я оставил тебя здесь, потому что боялся последствий. Ты закрыл дверь, потому что боялся потерять Розарию. А она пыталась вернуть вас обоих, потому что боялась остаться одна.

Хранитель медленно выдохнул.

— Мы все действовали из страха. И каждый раз убеждали себя, что делаем это ради кого-то другого.

Розария опустила взгляд.

Она не могла отрицать его слова.

Потому что помнила, как сама просила Странника закрыть дверь. Помнила, как требовала обещаний, как боялась, что он уйдёт, и как была готова на всё, лишь бы этого не произошло.

Но она не хотела, чтобы их история закончилась тем, что каждый из них снова исчезнет ради остальных.

— Тогда давайте впервые сделаем что-нибудь не из страха, — сказала она.

Странник посмотрел на неё.

— Например?

— Для начала перестанем принимать решения без друг друга.

Хранитель чуть заметно улыбнулся.

— Звучит подозрительно разумно для человека, который однажды объявил войну гусю.

— Это была необходимая военная операция.

— Разумеется.

Странник тихо рассмеялся.

И впервые за долгое время Розария почувствовала, что они действительно стоят рядом.

Не прошлые версии себя.

Не обрывки памяти.

Трое друзей, которые наконец могли говорить друг с другом правду.

Но спокойствие продлилось недолго.

Потому что фонтан заговорил.

---

— Ты опоздал.

Голос принадлежал Елене.

Розария резко повернулась.

Вода в фонтане потемнела, а на её поверхности появилось лицо бабушки. Не отражение — настоящее изображение, словно где-то далеко Елена смотрела сквозь толщу времени.

— Бабушка?

Губы Елены дрогнули.

— Розария, если ты слышишь меня, значит, четвёртый ключ уже найден.

Хранитель отступил от фонтана.

— Это невозможно.

— Ты всегда так говоришь, когда что-то идёт не по твоему плану, — ответила Елена из воды.

Розария едва не рассмеялась. Даже сквозь магическое послание бабушка умудрялась звучать так, будто только что застала их за очередной проделкой.

Но улыбка быстро исчезла.

Елена выглядела измученной. Её лицо было бледным, а волосы казались почти серебряными.

— Я не знаю, сколько времени у меня осталось, — продолжила она. — Поэтому слушайте внимательно. Четвёртый ключ нельзя использовать, пока вы не узнаете, кто первым открыл третью дверь.

Розария посмотрела на Хранителя.

— Мы уже знаем. Это он.

Елена покачала головой.

— Нет, дитя. Он открыл её физически. Но дверь появилась задолго до того, как кто-либо из вас вошёл в Элиар.

Хранитель побледнел.

— Елена, не продолжай.

— Я должна.

Вода пошла рябью.

— Третья дверь появилась в тот день, когда я попыталась изменить судьбу собственной дочери.

Розария замерла.

Люстерия.

Её мать.

— Что ты сделала? — спросила она.

Елена посмотрела прямо на внучку.

— Я хотела спасти Люстерию от будущего, которое увидела во сне. Я использовала силу Элиара, чтобы убрать из её жизни один-единственный день. Мне казалось, что если этот день никогда не наступит, всё остальное можно будет исправить.

— И получилось?

— Нет.

Елена закрыла глаза.

— Время не исчезло. Оно просто нашло другое место, куда могло спрятать последствия моего решения.

Розария почувствовала, как холодок пробежал по спине.

— Третья дверь…

— Стала хранилищем всего, что я пыталась изменить. И когда ты, Странник и Хранитель нашли её, она уже знала ваши имена.

Странник медленно произнёс:

— Значит, мы не случайно оказались в Элиаре.

— Нет, — ответила Елена. — Вас привело туда моё решение. Но то, что произошло дальше, выбрали уже вы сами.

На поверхности воды возникла новая надпись:

«ЧЕТВЁРТЫЙ КЛЮЧ НЕ СОЗДАН. ОН ВОЗВРАЩЁН.»

Розария прочитала её дважды.

— Кем?

Елена посмотрела на неё с такой нежностью, что Розария вдруг захотела оказаться рядом с бабушкой, обнять её и услышать, что всё ещё можно исправить.

— Тобой.

Вода замерла.

— Я не понимаю, — прошептала Розария.

— Ты создала четвёртый ключ в тот день, когда решила, что готова забыть собственную боль, лишь бы остальные могли жить. Ты не знала, что делаешь. Но Элиар услышал твоё желание.

Розария отступила от фонтана.

— Нет. Я не могла…

— Ты была ребёнком. Ты хотела спасти друзей. Ты хотела, чтобы никто больше не страдал. И сад дал твоему желанию форму.

Лицо Елены начало исчезать.

— Запомни, Розария. Четвёртый ключ нельзя использовать, чтобы заменить одного человека другим. Он предназначен для того, чтобы вернуть каждому право быть собой.

— Бабушка! Подожди!

— И ещё одно…

Вода вспыхнула белым светом.

— Когда Странник вспомнит последний фрагмент, не позволяй ему открывать дверь в одиночку.

Изображение исчезло.

Фонтан снова наполнился обычной водой.

Розария стояла неподвижно.

— Значит, это я создала ключ, — сказала она наконец.

Хранитель кивнул.

— Да.

— И ты знал.

— Я догадывался.

— Поэтому позволил мне найти его?

— Я надеялся, что теперь ты сможешь выбрать иначе.

Розария посмотрела на ключ, лежавший на каменном бортике.

Он больше не казался чужим.

На его поверхности проступил крошечный знак: четыре лепестка, соединённые тонкой линией.

Роза.

Незабудка.

Пустой круг.

И четвёртый символ — маленькая звезда.

Розария коснулась его пальцами.

В голове вспыхнуло воспоминание.

Она снова была ребёнком. Стояла у фонтана и держала в руках маленький ключ, который только что сделала сама из кусочка серебра и тонкой проволоки.

Рядом сидел Странник.

Хранитель стоял у дерева, наблюдая за ними.

— А для чего этот ключ? — спросил Странник.

Маленькая Розария пожала плечами.

— Не знаю.

— Тогда зачем ты его сделала?

Она посмотрела на друзей и улыбнулась.

— Чтобы у нас всегда был выбор.

Воспоминание исчезло.

Розария открыла глаза.

— Я вспомнила.

Странник осторожно коснулся её плеча.

— Что?

Она посмотрела на него, потом на Хранителя.

— Зачем создала четвёртый ключ.

И в этот момент ключ поднялся с бортика фонтана и завис в воздухе.

Четыре символа на его поверхности засветились.

А в глубине сада, там, где раньше находилась третья дверь, раздался детский смех.

Мальчик за дверью всё ещё ждал.

Но теперь Розария знала: его возвращение не должно означать чьё-то исчезновение.

Она протянула руку к ключу.

— Мы пойдём за ним вместе.

Хранитель кивнул.

Странник взял её за руку.

И впервые за всю историю Элиара четвёртый ключ не указал на дверь.

Он указал на них троих.

Потому что иногда единственный способ изменить судьбу — не выбрать, кого спасти.

А перестать соглашаться с тем, что кто-то обязательно должен остаться позади.
` },
    { title: "Глава 27:Звезда между нами", text: `Четвёртый ключ не опускался.

Он висел над фонтаном, медленно вращаясь в воздухе. На его поверхности по очереди вспыхивали четыре символа: роза, незабудка, пустой круг и звезда.

Розария смотрела на последний знак.

Она не знала, почему именно звезда завершала узор. Не помнила, когда впервые решила добавить её к остальным символам. Но чувствовала, что этот маленький знак был важнее, чем казалось.

Роза принадлежала ей.

Незабудка — Страннику.

Пустой круг был связан с Хранителем и тем, что он оставил по ту сторону двери.

А звезда…

Звезда словно принадлежала всем троим одновременно.

— Ты ведь помнишь, как я его делала? — спросила Розария.

Хранитель кивнул.

— Помню.

— Тогда почему не сказал раньше?

— Потому что ты забыла не только ключ. Ты забыла, зачем он тебе понадобился.

— И ты решил, что лучше я сама всё вспомню?

— Нет. Я решил, что если расскажу тебе раньше времени, ты попытаешься исправить прошлое, не понимая последствий.

Розария нахмурилась.

— Знаешь, иногда ты ужасно похож на мою бабушку.

— Мне часто это говорили.

— И это не комплимент.

— Я понял.

Странник тихо рассмеялся.

Розария посмотрела на него.

— А ты чего смеёшься?

— Ничего.

— Вот только не надо. Я знаю это твоё «ничего».

— Тогда зачем спрашиваешь?

— Проверяю, не разучился ли ты отвечать на вопросы.

— Пока справляюсь.

На мгновение всё стало почти обычным.

Трое друзей стояли у фонтана, перебрасывались колкостями и пытались понять, что делать дальше. Если не смотреть на странные часы, невозможные двери и ключ, который нарушал законы времени, можно было представить, что они просто собрались после долгой разлуки.

Розария хотела задержать этот момент.

Но ключ внезапно перестал вращаться.

Все четыре символа вспыхнули одновременно.

И из глубины сада донёсся голос:

— Вы обещали.

Розария сразу узнала его.

Маленький Странник.

— Мы идём, — ответила она.

Хранитель резко повернулся.

— Не отвечай ему издалека!

— Почему?

— Потому что теперь он слышит не только тебя. Он слышит сам ключ.

Серебряный предмет задрожал.

На земле возле фонтана появилась тонкая светлая линия. Она тянулась между деревьями, огибала кусты роз и уходила туда, где начиналась старая часть Элиара.

— Путь, — прошептал Странник.

Хранитель кивнул.

— Ключ показывает дорогу к месту, где всё началось.

— Разве мы не были там? — спросила Розария.

— Были. Но не вместе.

Он посмотрел на них обоих.

— Вы видели разные части одного события. Теперь Элиар впервые показывает вам их одновременно.

Розария протянула ладонь.

Ключ мягко опустился на неё.

— Тогда хватит ждать.

И трое друзей пошли за светящейся линией.

---

Дорога вела через старую розовую аллею.

Розария помнила её смутно. В детстве здесь росли кусты, которые казались ей огромными, почти до самых облаков. Она любила прятаться между ними и уверяла, что никто никогда не сможет её найти.

Странник находил всегда.

Иногда за несколько минут.

Иногда специально делал вид, что ищет дольше, чтобы она успела придумать себе новое имя и объявить себя правительницей соседнего королевства.

— Ты помнишь, как мы здесь играли? — спросила она.

— Конечно.

— Ты всегда находил меня слишком быстро.

— Ты каждый раз пряталась в одном месте.

— Неправда!

— За третьим кустом слева.

— Там было удобно!

— Ты однажды сама сказала мне, что это лучшее место для тайника.

Розария на секунду замолчала.

Потом фыркнула.

— Ладно. Возможно, я была немного предсказуемой.

— Немного?

— Странник.

— Молчу.

Но он улыбался.

И Розария тоже.

Светящаяся линия привела их к старому дереву, которое стояло на краю аллеи. Его ствол был широким, покрытым глубокими трещинами, а ветви поднимались над садом, словно руки, пытающиеся удержать небо.

На коре виднелись три небольших углубления.

Роза.

Незабудка.

Пустой круг.

Четвёртого знака не было.

— Здесь мы нашли первые ключи, — сказал Хранитель.

— Все вместе? — спросила Розария.

— Нет. Сначала ты.

Он коснулся углубления с розой.

— Ты нашла свой ключ во сне. Странник получил незабудку возле фонтана. А я нашёл пустой круг в день, когда понял, что сад сохраняет то, чего люди боятся лишиться.

— Значит, мы никогда не находили их одновременно?

— Нет.

Розария посмотрела на дерево.

— А теперь?

Хранитель отступил.

— Теперь у вас есть возможность сделать то, чего вы никогда не делали раньше.

— Какую?

— Положить все четыре ключа в одно место.

Странник посмотрел на серебряный предмет в руке Розарии.

— Но у нас только один.

— Остальные существуют здесь.

Хранитель провёл ладонью по коре.

Три углубления наполнились мягким светом. Из ствола вышли три маленьких ключа, словно дерево хранило их внутри все эти годы.

Розария узнала каждый.

Её роза.

Незабудка Странника.

Пустой круг Хранителя.

Они медленно поднялись в воздух и замерли перед ними.

Четыре ключа.

Четыре символа.

И одно место, которое никто не мог открыть в одиночку.

— Что будет, если мы положим их вместе? — спросила Розария.

— Не знаю, — честно ответил Хранитель.

Она удивлённо посмотрела на него.

— Ты впервые сказал это без загадок.

— Я стараюсь меняться.

— Продолжай. Тебе идёт.

Странник взял ключ с незабудкой.

— Мы готовы?

Розария посмотрела на обоих.

Впервые она не искала подвоха в их словах. Не пыталась заранее угадать, кто из них собирается исчезнуть, кто промолчит, а кто снова решит, что лучше пожертвовать собой.

Она просто спросила:

— Все согласны?

— Да, — ответил Странник.

— Да, — сказал Хранитель.

Розария кивнула.

И они одновременно коснулись дерева своими ключами.

---

Сад исчез.

Не взорвался, не рассыпался на осколки, не погрузился во тьму.

Он просто перестал быть вокруг них.

Розария оказалась в огромном пространстве, похожем на ночное небо. Под ногами не было земли, но она стояла уверенно. Вокруг медленно вращались тысячи крошечных огней.

Звёзды.

Некоторые сияли ярко. Другие едва заметно мерцали. Одни двигались по ровным линиям, другие сталкивались, меняли направление и снова разлетались в стороны.

Розария подняла голову.

Вверху не было ни луны, ни привычных созвездий.

Вместо них висели часы.

Сотни часов.

Каждые показывали разное время.

— Где мы? — прошептала она.

Голос Хранителя прозвучал совсем рядом:

— В промежутке.

— Между чем?

— Между тем, что произошло, и тем, что могло произойти.

Странник стоял по другую сторону от неё. Он смотрел на огни с таким выражением, будто узнавал их один за другим.

— Это воспоминания?

— Не совсем, — ответил Хранитель. — Это возможные жизни. Каждая звезда — решение, которое когда-то мог принять кто-то из вас.

Розария протянула руку к ближайшему огоньку.

Внутри неё мелькнула картина.

Она увидела себя взрослой, живущей в небольшом доме с садом. На подоконнике стояли чашки, в углу лежали книги, а у двери сушились мокрые плащи. За окном кто-то смеялся.

Розария не могла разглядеть лица.

Но ей было спокойно.

Она улыбнулась.

И звезда погасла.

— Почему она исчезла? — спросила Розария.

— Потому что ты посмотрела на неё как на воспоминание, — сказал Хранитель. — А это была только возможность.

— То есть я могла так жить?

— Могла.

— А могла иначе?

— Да.

Розария посмотрела на другие звёзды.

В одной она была королевой, сидящей на высоком троне. В другой путешествовала по незнакомым землям. В третьей стояла возле могилы, которую не могла разглядеть.

Она отвернулась.

— Не хочу смотреть дальше.

— Не нужно, — ответил Странник.

Он подошёл ближе.

— Нам не обязательно знать каждую возможную жизнь, чтобы выбрать настоящую.

Розария посмотрела на него.

— Когда ты успел стать таким мудрым?

— Я слушал тебя.

— О, тогда мне жаль тебя.

Он рассмеялся.

И одна из звёзд рядом с ними вспыхнула так ярко, что Розария зажмурилась.

Когда она открыла глаза, перед ними стоял маленький Странник.

Тот самый мальчик из-за третьей двери.

Он больше не находился за стеклом или по другую сторону замка. Теперь он был здесь, в промежутке между возможностями.

В руках он держал деревянные часы.

— Ты пришёл, — сказал он взрослому Страннику.

Тот долго смотрел на него.

— Да.

— Я думал, ты не придёшь.

— Я тоже так думал.

Мальчик нахмурился.

— Это странный ответ.

— Я знаю.

— Ты стал странным.

— А ты остался вредным.

Мальчик улыбнулся.

— Значит, мы оба не изменились.

Розария тихо засмеялась.

Но затем мальчик посмотрел на неё.

— Ты обещала, что мы больше не будем расставаться.

Её улыбка исчезла.

— Я помню.

— Тогда почему ты позволила ему уйти?

Странник напрягся.

— Это было не так…

— Я спрашиваю её.

Мальчик смотрел только на Розарию.

Она могла бы объяснить, что была ребёнком. Что не понимала, что происходит. Что сама просила Странника закрыть дверь, потому что боялась потерять его навсегда.

Но это не отменило бы того, что мальчик остался один.

— Я не знала, как тебя спасти, — ответила она. — И до сих пор не знаю. Но теперь я не хочу делать вид, что тебя никогда не существовало.

Мальчик опустил глаза.

— А если я не хочу исчезать?

— Тогда мы будем искать другой путь.

— Даже если он будет долгим?

— Да.

— Даже если ты будешь злиться?

— Я уже злюсь.

Он удивлённо поднял голову.

Розария скрестила руки.

— На вас обоих. Один решил всё за меня, другой решил всё за нас троих. И вообще, у меня такое чувство, что в этом саду никто не умеет нормально разговаривать!

Мальчик моргнул.

Странник прикрыл лицо ладонью.

Хранитель впервые за долгое время рассмеялся по-настоящему.

А затем мальчик тоже засмеялся.

Сначала тихо.

Потом громче.

И Розария поняла, что именно этого ей не хватало всё это время: не ещё одного воспоминания, не нового ключа и не очередного доказательства того, что прошлое было настоящим.

Ей не хватало возможности снова услышать их смех.

Но звёзды вокруг начали гаснуть.

Одна за другой.

Хранитель перестал улыбаться.

— Времени мало.

— Что происходит? — спросил Странник.

— Промежуток не может удерживать все возможности бесконечно. Если мы останемся здесь слишком долго, звёзды погаснут, а вместе с ними исчезнут и пути, по которым можно вернуться.

— Тогда как нам выбраться?

Хранитель посмотрел на мальчика.

— Для этого нужно, чтобы вы оба приняли правду.

Взрослый Странник нахмурился.

— Какую правду?

— Ты должен перестать считать его частью себя, которую необходимо вернуть любой ценой.

Затем Хранитель посмотрел на мальчика.

— А ты должен перестать считать, что твоё существование зависит от того, помнит ли тебя Розария.

Мальчик крепче сжал часы.

— Но если она забудет…

— Тогда ты всё равно будешь существовать здесь как часть истории, — сказал Хранитель. — И мы будем искать способ дать тебе собственный путь. Не за счёт чужой жизни.

Розария подошла к мальчику и присела перед ним.

— Послушай. Я не могу обещать, что всё получится именно так, как мы хотим. Но я могу обещать другое.

— Что?

— Я больше не буду просить тебя исчезнуть ради моего счастья. И не буду просить Странника отказаться от себя ради меня. Мы попробуем найти решение, в котором никто не должен доказывать свою любовь жертвой.

Мальчик долго смотрел на неё.

— Ты правда так думаешь?

— Да.

Он медленно протянул ей деревянные часы.

— Тогда возьми их.

Розария приняла подарок.

Стрелки часов остановились.

На циферблате вместо цифр проступила маленькая надпись:

«НЕ ВСЁ, ЧТО ОСТАЛОСЬ В ПРОШЛОМ, ДОЛЖНО ОСТАТЬСЯ ТАМ НАВСЕГДА.»

Вокруг них вспыхнули звёзды.

Они соединились тонкими серебряными линиями, образовав четыре знакомых символа.

Роза.

Незабудка.

Пустой круг.

Звезда.

А в центре возникла дверь.

Не чёрная, не каменная, не похожая на те, что скрывались в глубине Элиара.

Обычная деревянная дверь с маленькой ручкой.

Розария узнала её.

Это была дверь её детской комнаты во дворце.

Той самой комнаты, в которой она проснулась много лет назад и впервые увидела ключ возле подушки.

— Это выход? — спросила она.

Хранитель покачал головой.

— Это выбор.

— Какой?

— Вы можете вернуться к началу. К моменту, когда всё ещё можно изменить. Но если вы войдёте, вы увидите последнюю часть воспоминания.

Странник посмотрел на дверь.

— И что будет после?

— Этого я не знаю.

Розария взяла его за руку.

Потом протянула вторую руку Хранителю.

— Тогда пойдём вместе.

Хранитель посмотрел на её ладонь.

Впервые за долгое время он не пытался предугадать последствия.

Он просто принял её руку.

Мальчик встал рядом со взрослым Странником.

И вчетвером они направились к двери.

Но перед самым порогом мальчик остановился.

— Розария?

Она обернулась.

— Да?

— Когда мы вернёмся, не забудь кое-что.

— Что именно?

Он посмотрел на деревянные часы в её руках.

— В последний день я был не тем, кто попросил вас забыть.

Розария почувствовала, как по спине пробежал холод.

— Тогда кто?

Мальчик посмотрел на Хранителя.

— Тот, кого мы все считали спасённым.

И дверь открылась.

За ней стояла Елена.

Только она была совсем молодой.

А рядом с ней находилась женщина с лицом Люстерии.

Мать Розарии держала на руках маленькую девочку.

На запястье девочки красовалась зелёная лента.

И Елена произнесла слова, от которых у Розарии перехватило дыхание:

— Мы должны отдать её Элиару. Иначе он заберёт всех остальных.
` },
    { title: "Глава 28:Цена спасения", text: `— Мы должны отдать её Элиару. Иначе он заберёт всех остальных.

Слова молодой Элены повисли в воздухе.

Розария не сразу поняла, что именно видит. Перед ней была комната, освещённая золотистым светом ламп. За высокими окнами шумел дождь, а на столе стояла чаша с водой, в которой отражались звёзды — хотя за окном было пасмурно.

Элена выглядела почти так же, как на старых портретах, только моложе. В её волосах ещё не было серебряных прядей, а лицо не носило той усталости, которую Розария привыкла видеть в настоящем.

Рядом стояла Люстерия — её мать.

На руках Люстерии лежал младенец, завёрнутый в светлое одеяло. Маленькая девочка спала, поджав крошечные пальцы под подбородок. На её запястье виднелась тонкая розовая отметина, похожая на лепесток.

Розария невольно коснулась собственного запястья.

У неё была такая же.

— Это… я? — прошептала она.

— Да, — ответил Странник.

Он стоял рядом, но смотрел не на младенца. Его взгляд был прикован к Элене.

— Вот что она скрывала от нас.

Хранитель молчал.

И это молчание пугало Розарию сильнее, чем любые объяснения.

Она шагнула вперёд. Пальцы прошли сквозь край стола, словно перед ней находилось не настоящее помещение, а воспоминание, которому позволили на мгновение стать видимым.

— Мы не можем просто смотреть, — сказала она. — Мы должны узнать, что произошло.

— Именно поэтому мы здесь, — отозвался Хранитель. — Но помни: воспоминание показывает то, что случилось. Не обязательно то, что люди тогда понимали.

Розария повернулась к нему.

— Ты говоришь так, будто заранее знаешь, что я сейчас увижу.

— Я знаю, чего боялась Элена.

— А чего боялся ты?

Хранитель отвёл глаза.

И Розария поняла, что ответа не будет. Пока.

---

— Ты не можешь этого сделать, — сказала Люстерия.

Она прижимала ребёнка к себе так крепко, словно Элена уже протянула руки, чтобы забрать девочку.

— Я не хочу её забирать.

— Тогда не говори, что мы должны отдать её саду!

Элена вздрогнула.

— Люстерия, послушай меня. Элиар пробуждается. Он больше не удерживает границу между тем, что было, и тем, что могло произойти. Вчера в зеркале отразился человек, которого ещё не существует. Сегодня часы в западном крыле пошли вспять. Завтра сад может начать возвращать то, что мы пытались изменить.

— И какое отношение к этому имеет моя дочь?

Элена посмотрела на младенца.

— Она родилась с тем, что способно удержать границу.

В комнате стало тихо.

— Ты хочешь использовать её, — произнесла Люстерия.

— Я хочу спасти её.

— Не называй это спасением, если для этого собираешься отнять у неё жизнь!

— Я не собираюсь её убивать!

Элена повысила голос так резко, что младенец заворочался и тихонько заплакал.

Обе женщины тут же замолчали.

Люстерия принялась покачивать дочь, шепча ей что-то ласковое. И Розария, наблюдая за этой сценой, вдруг почувствовала странную боль.

Она не помнила материнских рук из младенчества. Не могла помнить. Но сейчас ей казалось, что где-то очень глубоко, за всеми забытыми годами, сохранилось ощущение тепла.

— Тогда объясни, — потребовала Люстерия уже тише. — Что значит «отдать Элиару»?

Элена закрыла глаза.

— Элиар не человек. Он не может просто выбрать ребёнка и забрать его. Это место между временем и памятью. Но когда граница рушится, ему нужен якорь — то, что удержит прошлое от смешения с возможными будущими.

— И этим якорем должна стать Розария?

— Её дар подходит для этого лучше всего.

— Она даже не умеет говорить!

— Именно поэтому она ещё не связана с собственными воспоминаниями так, как взрослый человек. Если провести обряд сейчас, сад сможет удержать её силу, не забирая её саму.

Люстерия отступила на шаг.

— А что будет с ней?

Элена не ответила сразу.

Этого оказалось достаточно.

— Что будет с моей дочерью? — повторила Люстерия.

— Она останется здесь. Будет жить. Вырастет. Но часть её навсегда будет принадлежать Элиару. Она будет слышать его, видеть то, чего не видят другие. И однажды, когда сад позовёт, она не сможет отказаться.

— Значит, ты собираешься сделать мою дочь пленницей.

— Я собираюсь не дать погибнуть всем остальным!

— А кто дал тебе право решать, чью жизнь можно связать с чужой бедой?!

Голос Люстерии дрогнул. Она прижала девочку к груди, и Розария заметила, как мать поцеловала её в лоб.

— Я не отдам её.

Элена опустила голову.

— Тогда Элиар начнёт забирать другие вещи. Сначала воспоминания. Потом имена. Потом людей, которые держат эти воспоминания в себе. Ты думаешь, он заберёт только меня? Нет, Люстерия. Он доберётся до тебя. До твоей семьи. До всех, кто когда-либо входил в сад.

— Значит, мы найдём другой способ.

— Я искала.

— Значит, будешь искать дальше!

Впервые Розария увидела в матери не только ту женщину, которая умела утешать и оберегать. Она увидела человека, готового спорить даже с самой судьбой, если та посмеет потребовать её ребёнка.

И почему-то ей стало легче дышать.

— Вот откуда у тебя упрямство, — негромко заметил Странник.

— У меня? — Розария бросила на него взгляд. — Это у нас семейное.

— Разумеется. Ты никогда не признаёшь поражения.

— А ты никогда не упускаешь возможности меня подразнить.

На мгновение его губы дрогнули в улыбке.

Но улыбка исчезла, когда в воспоминании раздался стук.

Не три удара.

Один.

Элена резко повернулась к двери.

— Нет, — прошептала она. — Он не должен был прийти.

Дверь открылась сама.

На пороге стоял мальчик.

Розария сразу узнала его, хотя никогда прежде не видела таким маленьким. Те же внимательные глаза. Та же привычка держать плечи напряжёнными, словно он заранее готовился к тому, что его прогонят. Только лицо было ещё детским, а на ладони лежал маленький металлический ключ.

Хранитель.

Не тот, кто стоял сейчас рядом с Розарией, — мальчик из воспоминания.

Тот, кто однажды останется за третьей дверью.

— Ты обещала, что не станешь этого делать, — сказал он Элене.

— Ты не должен здесь находиться.

— Я живу здесь.

— Ты не понимаешь, что происходит.

— Тогда объясни.

Элена устало провела ладонью по лицу.

— Если Розария станет якорем Элиара, граница удержится. Все остальные будут в безопасности.

— А она?

— Она будет жить.

— Но не будет свободна.

Элена промолчала.

Мальчик перевёл взгляд на младенца. Девочка уже проснулась и смотрела на него большими глазами. Она не плакала, только шевелила пальцами, будто пыталась ухватить полоску света, падавшую с потолка.

— Она даже не знает, что её собираются отдать, — произнёс мальчик.

— Она ещё ничего не знает, — ответила Элена. — И именно поэтому у неё есть шанс.

— Нет. Именно поэтому за неё все решают.

Розария почувствовала, как внутри что-то сжалось.

Она знала этот голос. Не по звуку — по ощущению. Так говорил человек, который слишком рано понял, что чужое решение может изменить всю его жизнь.

— Есть другой способ, — сказал мальчик.

Элена побледнела.

— Даже не думай.

— Ты сама говорила, что саду нужен якорь.

— Я сказала, что нужен человек, способный удержать границу. Но ты не можешь им стать.

— Почему?

— Потому что ты уже связан с Элиаром!

Мальчик посмотрел на ключ в своей руке.

— Тогда связь можно замкнуть.

— Ты не понимаешь цену.

— А ты понимаешь цену того, что собираешься сделать с ребёнком?

Элена шагнула к нему.

— Послушай меня. Если ты свяжешь себя с третьей дверью, сад сохранит всё, что ты оставишь по эту сторону. Твои воспоминания, твои чувства, даже те варианты тебя, которые никогда не должны были существовать. Ты не сможешь просто уйти, когда передумаешь.

— А если я не свяжу себя с дверью, ты отдашь ему Розарию.

— Я ещё не решила!

— Ты уже решила.

Элена замерла.

Мальчик повернулся к Люстерии.

— Можно мне подержать её?

Люстерия не ответила сразу. Она внимательно изучала его лицо, будто пыталась понять, сколько лет он на самом деле несёт на своих плечах.

Затем она осторожно передала ему ребёнка.

Мальчик взял девочку неуверенно, но бережно. Поддержал её голову, поправил край одеяла. Младенец ухватился за его палец.

И он улыбнулся.

Совсем немного. Так, словно эта улыбка была чем-то запретным.

— Она маленькая, — прошептал он.

— Все дети сначала маленькие, — сказала Люстерия.

— А потом вырастают и начинают спорить со всеми подряд?

Люстерия неожиданно рассмеялась сквозь слёзы.

— Боюсь, эта начнёт спорить раньше, чем научится ходить.

— Тогда ей будет с кем спорить.

Мальчик посмотрел на младенца.

— Привет, Розария.

Ребёнок сжал его палец сильнее.

В тот же миг ключ на его ладони вспыхнул.

Из чаши на столе поднялась тонкая нить воды. Она вытянулась в воздухе, словно живая, и обвилась вокруг запястья мальчика. На коже проступил знак — пустой круг, перечёркнутый маленькой звёздой.

Хранитель, стоявший рядом с настоящей Розарией, резко отступил.

— Нет…

Она повернулась к нему.

— Что это?

— Начало.

— Начало чего?

Он не ответил.

Воспоминание продолжалось.

Элена схватила мальчика за плечи.

— Немедленно положи её!

— Если я замкну границу, Элиар перестанет требовать якорь.

— Он не перестанет требовать! Он просто будет требовать тебя!

— Значит, пусть требует меня.

— Ты не понимаешь, что потеряешь!

Мальчик посмотрел на неё спокойно.

— А ты понимаешь, что потеряет она?

Элена не смогла ответить.

Мальчик вернул ребёнка Люстерии и отошёл к чаше. Он положил ключ на её край. Вода потемнела, а отражение комнаты исчезло. Вместо него возник сад — такой, каким Розария никогда его не видела: без дорожек, без фонтанов, без знакомых аллей. Только огромное дерево, чьи ветви уходили в туман, и чёрная дверь у самого его ствола.

Третья дверь.

Тогда Розария ещё не знала, что однажды будет стоять перед ней.

— Я могу удержать дверь изнутри, — сказал мальчик. — Но кто-то должен открыть её снаружи, когда придёт время.

— Ты просишь нас однажды вернуть тебя? — спросила Люстерия.

Он посмотрел на неё.

— Я прошу вас не превращать это в обещание.

— Почему?

— Потому что если вы будете помнить, что я там, вы попытаетесь меня спасти. А если попытаетесь меня спасти, сад снова потребует кого-то взамен.

Он повернулся к Элене.

— Поэтому вы должны забыть.

— Нет, — прошептала она.

— Все должны забыть. Иначе дверь никогда не останется закрытой.

— Ты ещё ребёнок!

— А Розария ещё меньше.

Он произнёс это без упрёка. Просто напомнил.

И от этого стало страшнее.

Мальчик поднял ключ. Вода в чаше дрогнула, и звёзды, отражавшиеся в ней, одна за другой погасли.

— Я не хочу, чтобы она когда-нибудь узнала, что её спасли ценой моей жизни, — сказал он. — Она решит, что обязана меня вернуть. Или что виновата. Я не хочу, чтобы она росла с этим.

— Но если она забудет тебя, — прошептала Люстерия, — ты останешься там совсем один.

Мальчик улыбнулся ей той самой печальной улыбкой, которую Розария уже видела на лице Хранителя.

— Не совсем. У меня будет сад.

— Сад не заменит тебе людей.

— Я знаю.

И тогда он посмотрел прямо на Розарию.

Не на младенца из воспоминания.

На неё — ту, что стояла по другую сторону времени.

На миг ей показалось, что он действительно видит её.

— А ты, — произнёс он, — однажды всё равно меня найдёшь.

Розария шагнула вперёд.

— Я уже нашла тебя!

Но он не услышал.

Мальчик коснулся ключом воды.

Комната содрогнулась.

Тонкая нить света отделилась от младенца и потянулась к его запястью. Элена закричала, пытаясь остановить обряд, но поздно. Знак пустого круга вспыхнул на руке мальчика, а розовый лепесток на запястье Розарии засветился в ответ.

Связь замкнулась.

И тогда произошло то, чего не ожидал никто.

Младенец заплакал.

Не громко — всего один короткий вскрик. Но вода в чаше взлетела вверх, превратившись в сотни крошечных капель. В каждой отражалось своё небо, своя дорога, своя жизнь, которой ещё не случилось.

Среди этих отражений Розария увидела себя.

Взрослую.

Она стояла в чёрном саду, сжимая в руке четвёртый ключ.

А рядом с ней стояли Странник и Хранитель — оба живые, оба свободные.

На секунду Розария поверила, что это и есть будущее, которое они смогут выбрать.

Но затем отражение изменилось.

Странник исчез.

Хранитель исчез.

Осталась только она — одна посреди сада.

И голос, доносившийся из воды, произнёс:

— Если однажды ты захочешь спасти всех, не забудь спросить, хотят ли они, чтобы ты решала за них.

Розария обернулась к Страннику.

Он смотрел на то же отражение. Его лицо побледнело.

— Это было предсказание? — спросил он.

Хранитель покачал головой.

— Нет. Возможность.

— И она могла сбыться?

— Она могла стать единственным будущим, если бы никто не попытался её изменить.

Розария снова посмотрела на мальчика.

Он стоял у чаши, тяжело дыша. На его руке проступали тонкие серебряные линии, похожие на трещины на стекле.

Элена держала его за плечи.

— Я не позволю тебе уйти туда, — сказала она. — Мы найдём другой способ. Я обещаю.

— Ты уже дала одно обещание, — ответил мальчик. — И собиралась нарушить его ради спасения остальных.

— Я хотела спасти тебя тоже!

— Тогда не стирай меня полностью.

Элена закрыла глаза.

— Я не знаю, как это сделать.

— Знаешь.

Он вложил ей в ладонь маленькую бумажную звезду.

— Оставь одну память. Не обо мне в саду. Не о двери. О том, что я был здесь, с вами. Что я сам выбрал.

— Но если я оставлю память, она может привести Розарию обратно.

— Тогда спрячь её так, чтобы она нашла её только тогда, когда будет готова.

Мальчик посмотрел на Люстерию.

— А вы… пожалуйста, не говорите ей, что она должна меня спасать.

Люстерия прижала ладонь ко рту.

— Я не знаю, смогу ли забыть.

— Не забывайте меня, — тихо сказал он. — Забудьте только дверь.

Вода поднялась выше.

За окнами дождь остановился в воздухе. Каждая капля застыла, как стеклянная бусина.

Мальчик сделал шаг назад — к отражению сада.

Элена попыталась удержать его, но он осторожно высвободил руку.

— Не надо, — сказал он. — Если ты удержишь меня сейчас, Элиар выберет другого.

— Кого?

Мальчик посмотрел на младенца.

— Её.

И шагнул в воду.

В тот миг, когда его пальцы коснулись поверхности, Розария услышала собственный голос — взрослый, надломленный, доносящийся словно из далёкого будущего:

— Нет! Мы же договорились, что никто не останется!

Она узнала этот голос.

Это был её голос.

Но она не помнила, когда произнесла эти слова.

Чаша раскололась.

Вся комната погрузилась во тьму.

---

Розария очнулась на коленях посреди звёздного пространства.

Она не сразу поняла, где находится. Под ладонями было что-то похожее на холодный камень, а вокруг медленно гасли светящиеся точки. Странник стоял рядом, опустившись на одно колено, и держал её за руку.

Хранитель находился в нескольких шагах от них.

Он смотрел на собственное запястье.

Знак пустого круга исчез.

На его месте осталась тонкая серебряная линия.

— Ты был тем мальчиком, — сказала Розария.

Это прозвучало не как вопрос.

Хранитель не поднял головы.

— Да.

— Ты сам решил остаться за дверью.

— Да.

— И попросил нас забыть тебя.

— Да.

Розария медленно поднялась на ноги.

Ей хотелось закричать. Хотелось спросить, почему он не рассказал им раньше, почему позволил им искать ответы, почему каждый раз отступал, когда они приближались к правде.

Но за всеми этими вопросами стоял один, самый страшный.

— Ты знал, что мы будем пытаться тебя вернуть?

Хранитель наконец посмотрел на неё.

— Я знал, что ты будешь пытаться спасти всех. Даже тех, кто не просил тебя об этом.

Розария вздрогнула.

— Значит, ты не доверял мне.

— Я доверял тебе настолько, что боялся того, на что ты готова ради меня.

Странник встал между ними, но не для того, чтобы защитить кого-то одного. Он просто протянул руку Розарии, давая ей возможность решить самой, хочет ли она её принять.

Она приняла.

— Ты мог рассказать нам, — произнесла она.

— Тогда ты бы открыла дверь раньше времени.

— Ты не знаешь этого!

— Знаю, — тихо ответил Хранитель. — Потому что уже видел, как ты её открывала.

Розария замолчала.

— В двадцать седьмой раз? — спросил Странник.

— И раньше. И позже. Время в Элиаре не всегда считает попытки одинаково.

— Но сейчас мы помним, — сказала Розария. — Значит, всё изменилось.

Хранитель кивнул.

— Да. И именно поэтому я боюсь.

Он протянул ладонь.

На ней лежала та самая бумажная звезда из воспоминания.

Розария осторожно взяла её. Бумага была старой, но не рассыпалась. На внутренней стороне виднелись две короткие строки, написанные детским почерком.

«Я не остался потому, что не мог уйти.

Я остался потому, что вы должны были получить шанс уйти оба».

Розария сжала звезду.

— Ты спас нас.

— Я сделал выбор.

— А потом попросил нас забыть, чтобы мы не могли вернуть тебе этот выбор.

— Да.

— Но ты не учёл одну вещь.

Хранитель посмотрел на неё настороженно.

Розария вытерла щёку и выпрямилась.

— Я ужасно упрямая.

Странник тихо фыркнул.

— Это ещё мягко сказано.

— Тебя никто не спрашивал.

— Я просто уточнил.

На этот раз Розария действительно улыбнулась. Совсем немного. Но Странник посмотрел на неё так, словно в темноте снова зажёгся маленький цветок.

Затем она повернулась к Хранителю.

— Мы не будем возвращать тебя ценой чьей-то жизни. И не будем решать за тебя, что тебе нужно. Но теперь, когда мы знаем правду, ты тоже больше не будешь решать за нас.

Хранитель долго молчал.

Потом впервые за всё время улыбнулся по-настоящему.

— Значит, ты всё-таки её дочь.

— Чью?

— Люстерии.

Розария хотела ответить, но звёздное пространство вдруг содрогнулось.

Бумажная звезда в её руке раскрылась сама собой. На обратной стороне, которой раньше не было, проступили новые слова.

«ЭЛЕНА НЕ СКАЗАЛА ВСЕЙ ПРАВДЫ».

Ниже появилась дата.

9 июня.

Странник перестал улыбаться.

— Это день, когда мы впервые вошли в Элиар, — прошептал он.

— Нет, — ответил Хранитель. — Это день, когда вы впервые решили войти.

Он посмотрел на чёрную дверь, возникшую среди звёзд.

— А произошло это не в детстве.

Дверь медленно открылась.

За ней стояла взрослая Элена.

В её руках была четвёртая ключевая связка, а рядом с ней — женщина, которую Розария узнала сразу.

Люстерия.

Только теперь её мать была не молодой женщиной из воспоминания, а такой, какой Розария помнила её дома. На лице Люстерии застыло выражение человека, который слишком долго хранил одну тайну и больше не мог делать вид, что её не существует.

Она посмотрела прямо на дочь.

— Розария, — сказала она. — Если ты это видишь, значит, Элена всё-таки не смогла удержать дверь закрытой.

Розария шагнула к ней.

— Мама? Ты знала?

Люстерия закрыла глаза.

— Я знала, что ты однажды вернёшься в сад.

— И что я оставила там Хранителя?

— Нет, — прошептала Люстерия. — Не только его.

За её спиной показалась тень.

Невысокая фигура в светлом платье стояла у самой двери. На запястье у неё сияла розовая отметина.

Розария узнала себя.

Но не ребёнка и не младенца.

Это была другая Розария — та, которой она могла бы стать, если бы в тот день всё пошло иначе.

Девушка подняла глаза и произнесла:

— Ты ведь понимаешь, что Хранитель был не единственным, кто остался по ту сторону времени?

Дверь за ней захлопнулась.

И на этот раз с другой стороны раздался стук.

Три раза.` },
    { title: "Глава 29: Девочка по ту сторону", text: `Третий удар прозвучал тише первых двух.

Но именно после него дверь открылась.

Не наружу и не внутрь — она словно исчезла на мгновение, оставив на своём месте узкую полоску темноты. Из неё потянуло холодом, запахом мокрых роз и чем-то ещё, едва уловимым. Запахом старых книг, которые слишком долго пролежали в закрытой комнате.

Розария не двигалась.

По ту сторону стояла она сама.

Та же линия подбородка. Те же глаза. Те же волосы, падавшие на плечи. Даже маленькая отметина на запястье была на месте.

Но незнакомка выглядела старше. Не намного — может быть, на год или два. Только дело было не в возрасте. В её лице жила усталость человека, который слишком долго ждал и уже не верил, что ожидание когда-нибудь закончится.

— Наконец-то, — сказала другая Розария.

Голос у неё был почти такой же.

Почти.

Настоящая Розария невольно посмотрела на Странника. Он стоял рядом, напряжённый, готовый вмешаться, но не делал ни шага.

— Не подходи к ней, — тихо сказал Хранитель.

— Почему? — спросила Розария.

— Потому что я не знаю, что произойдёт, если вы окажетесь слишком близко.

Девушка за дверью усмехнулась.

— Как всегда. Ты знаешь достаточно, чтобы запрещать, но недостаточно, чтобы объяснять.

Хранитель побледнел.

Розария заметила это.

— Ты её знаешь?

— Я знаю, кем она могла стать.

— Неправильный ответ, — отрезала Розария. — Попробуй ещё раз.

Странник едва заметно коснулся её руки. Не останавливая, не заставляя замолчать — просто напоминая, что она не одна.

Хранитель долго смотрел на девушку за дверью.

— Я знаю, кем она была в одном из вариантов прошлого.

— Вариантов? — переспросила Розария.

— Элиар хранит не только воспоминания. Он сохраняет и то, что могло произойти, но не произошло. Иногда такие возможности исчезают. Иногда остаются. А иногда начинают помнить себя так, будто прожили целую жизнь.

Девушка скрестила руки на груди.

— Как удобно. Назвать меня возможностью, чтобы не признавать, что я настоящая.

— Я не говорил, что ты ненастоящая.

— Но ты надеялся, что я исчезну.

На этот раз Хранитель не ответил.

Розария шагнула к двери.

— Как тебя зовут?

Незнакомка посмотрела на неё с нескрываемым удивлением.

— Ты серьёзно?

— Вполне.

— Меня зовут Розария.

— Тогда нам нужно придумать, как различать нас.

— Неужели? — Девушка наклонила голову. — Ты всегда так спокойно реагируешь на то, что кто-то выглядит точь-в-точь как ты?

— Нет. Обычно я сначала задаю вопросы. А потом начинаю паниковать.

Странник тихо рассмеялся.

— Очень узнаваемо.

— Ты сейчас на чьей стороне? — спросила Розария, не поворачиваясь к нему.

— На стороне той, которая не попытается открыть неизвестную дверь голыми руками.

— Я ещё ничего не открывала!

— Пока.

Другая Розария вдруг улыбнулась.

И эта улыбка напугала настоящую Розарию сильнее, чем сходство лиц.

Она была знакомой. Не потому, что Розария когда-либо видела её на фотографиях, а потому, что когда-то сама так улыбалась — когда уже решила что-то сделать и собиралась сообщить об этом остальным только после того, как всё станет необратимым.

— Вот видишь, — сказала незнакомка. — Он помнит тебя лучше, чем ты сама.

— А ты, похоже, слишком много о нас знаешь.

— Я знаю о вас всё, что вы забыли.

---

Они вошли в дверь не сразу.

Сначала Розария попросила незнакомку отойти на несколько шагов, а сама внимательно осмотрела проём. На камне не было ни надписей, ни замочной скважины, ни следов ключа. Только тонкие линии, складывавшиеся в изображение розы.

Роза была разломана пополам.

Одна половина смотрела в сторону сада, другая — в сторону темноты.

— Это не третья дверь, — заметил Странник.

Хранитель кивнул.

— Нет. Это проход, возникший после того, как четвёртый ключ изменил границу. Раньше он не мог существовать.

— Значит, мы сами его создали? — спросила Розария.

— Возможно.

— Ты можешь хоть раз сказать что-нибудь определённое?

— Могу. Например, что мне не нравится этот проход.

— Уже лучше.

Странник первым переступил порог. За ним вошла Розария, а Хранитель задержался на мгновение, прежде чем последовать за ними.

По ту сторону оказался коридор.

Он напоминал западное крыло дворца, но был гораздо длиннее. На стенах висели портреты. В каждом из них Розария узнавала себя — только в разных возрастах и одеждах.

На одном портрете она была маленькой девочкой с венком из листьев.

На другом — подростком, стоявшим рядом со Странником у старого фонтана.

На третьем — взрослой женщиной в короне, которую она никогда не носила.

В четвёртом портрете Розария держала в руках ключ, а за её спиной горел Элиар.

— Это всё возможные жизни? — спросила она.

— Да, — ответила незнакомка. Она шла впереди, не оглядываясь. — Жизни, которые ты могла прожить. Те, от которых отказалась. Те, которых боялась. И те, которые выбрали за тебя.

Розария остановилась перед портретом взрослой женщины.

На картине она стояла в незнакомом зале. Рядом с ней был Странник, только его волосы стали чуть длиннее, а на лице появилась спокойная улыбка. Он держал её за руку. Между ними не было ни дверей, ни ключей, ни чёрных роз.

Просто двое людей.

Счастливые.

Розария почувствовала, как внутри что-то болезненно сжалось.

— Это тоже могло случиться?

— Конечно, — сказала другая Розария. — Но не смотри слишком долго.

— Почему?

— Потому что начнёшь думать, что эта жизнь лучше твоей. А потом захочешь забрать её себе.

Розария отвела взгляд.

— Я не собираюсь забирать чужую жизнь.

— Ты уже однажды собиралась.

Хранитель шагнул вперёд.

— Достаточно.

— Нет, — резко сказала незнакомка. — Хватит заставлять её идти вслепую! Она должна знать, что сделала.

— Я хочу знать, — подтвердила Розария. — Но от тебя я тоже хочу услышать правду.

Незнакомка остановилась у последнего портрета.

Он был пустым.

На холсте не было ни изображения, ни подписи. Только маленькая розовая отметина в нижнем углу.

— Этот портрет должен был принадлежать тебе, — сказала она.

— Почему он пустой?

— Потому что ты не выбрала, кем станешь.

— А ты выбрала?

Другая Розария посмотрела ей прямо в глаза.

— Я выбрала остаться.

И коснулась пустого холста.

---

За портретом находилась комната.

В ней не было окон. Вдоль стен стояли часы, но ни одни не показывали одинакового времени. На столе лежала знакомая деревянная игрушка — маленькие часы, которые Розария видела за третьей дверью.

Рядом находилась коробка, перевязанная выцветшей лентой.

На крышке было написано:

«ТОЙ, КОТОРАЯ НЕ ВЕРНУЛАСЬ».

Странник замер.

— Я помню эту коробку.

Розария повернулась к нему.

— Откуда?

— Не знаю. Но я помню, что боялся её открывать.

Другая Розария взяла коробку со стола.

— Это неудивительно. Внутри лежит день, который вы оба пытались забыть.

— Последний день? — спросила Розария.

— Нет. День, который был до последнего.

Незнакомка развязала ленту.

Внутри лежали три предмета: маленькая белая роза, бумажная звезда и листок с несколькими строчками.

Розария узнала почерк сразу.

Это был её собственный почерк.

«Если я снова начну искать способ спасти всех, напомни мне, что я не могу выбирать за других.

Если я решу, что кто-то должен остаться, не верь мне.

Если я скажу, что всё понимаю, спроси меня, чего я боюсь».

Розария перечитала записку.

— Я написала это?

— Ты, — ответила незнакомка. — Но не та, которой ты являешься сейчас.

— А что случилось с тобой?

— Я сделала то, чего ты не смогла.

— Что именно?

Другая Розария аккуратно положила записку на стол.

— Я осталась в Элиаре вместо Хранителя.

Тишина стала почти осязаемой.

Странник первым нарушил её:

— Но Хранитель сказал, что сам выбрал остаться.

— Он и правда выбрал. Только он не знал, что я собираюсь сделать.

Хранитель медленно покачал головой.

— Нет. Я помню тот день.

— Ты помнишь только ту его часть, которую тебе позволили сохранить.

Незнакомка повернулась к нему.

— Ты открыл дверь. Ты взял на себя связь с садом. Ты попросил всех забыть тебя. Но ты не помнишь, что произошло сразу после этого.

Хранитель побледнел.

— Что произошло?

— Я вернулась.

Розария почувствовала, как холодеют пальцы.

— Ты вернулась в сад после того, как он закрыл дверь?

— Да. Я нашла способ открыть проход. Но к тому времени Элиар уже закрепил свой выбор. Ему нужен был якорь, и Хранитель стал им. Если бы я просто вытащила его, граница рухнула бы.

— Поэтому ты решила остаться вместо него?

— Я решила, что смогу заменить его.

— И что произошло?

Незнакомка улыбнулась, но в её глазах не было радости.

— Элиар принял моё желание. Только он понял его иначе.

Она указала на часы.

Стрелки всех часов одновременно двинулись назад.

— Я хотела освободить Хранителя. А сад услышал: «Пусть одна Розария останется вместо другой».

Странник резко повернулся к ней.

— Ты разделила себя?

— Нет. Я стала той возможностью, которая возникла из моего решения. В одном будущем Розария вернулась домой, забыла сад и продолжила жить. В другом — Розария осталась здесь, чтобы удерживать границу.

— Значит, ты не копия, — прошептала настоящая Розария.

— Я не копия. Я не воспоминание. Я жизнь, которая могла стать твоей.

Розария посмотрела на собственные руки.

Всё это время она думала, что ищет человека, которого можно вернуть. Но перед ней стояла девушка, которая когда-то была ею — не полностью, не в каждом воспоминании, но в каждом выборе, который мог привести к другой судьбе.

— Ты хочешь занять моё место? — спросила она.

Незнакомка не ответила сразу.

— Когда-то хотела.

— А теперь?

— Теперь я хочу, чтобы ты поняла, почему я не могу просто исчезнуть.

Она подошла к столу и коснулась белой розы.

Лепестки рассыпались в воздухе, но вместо того, чтобы упасть на пол, превратились в маленькие светящиеся точки.

В каждой из них Розария увидела короткий фрагмент другой жизни.

В одной она оставалась в саду и взрослела рядом с Хранителем.

В другой Странник находил её, но не узнавал.

В третьей Люстерия приходила к закрытой двери каждый год, оставляя у порога цветы.

В четвёртой Элена наконец открывала проход — и исчезала вместе с ним.

Розария отступила.

— Сколько таких жизней?

— Я не считала.

— Ты прожила их все?

— Нет. Я видела их. Чувствовала их. Иногда помнила то, чего не происходило со мной. Иногда просыпалась с чужими словами на языке. Но у меня есть собственная память, Розария. Собственная боль. Собственные желания.

Она подняла глаза.

— И я устала быть той, которую никто не считает настоящей.

Розария не нашла ответа.

Потому что впервые за всё время не могла просто сказать, что понимает чужую боль.

Она не понимала.

Но могла выслушать.

— Я не буду говорить тебе, что ты должна исчезнуть, — произнесла она наконец. — И не стану обещать, что смогу вернуть тебя в мой мир. Я пока не знаю, как это сделать.

Другая Розария смотрела на неё настороженно.

— Ты не боишься, что я захочу забрать твою жизнь?

— Боюсь.

Ответ оказался таким неожиданным, что незнакомка замолчала.

— Но если я начну делать вид, что не боюсь, это не поможет ни тебе, ни мне. Я не хочу, чтобы кто-то снова решил за нас обеих.

Странник подошёл ближе.

— Тогда нам нужно найти способ, при котором ни одна из вас не исчезнет.

— Ты говоришь так, будто это легко, — заметила другая Розария.

— Нет. Я говорю так, будто иначе мы даже не начнём искать.

Она долго смотрела на него.

— Ты всегда был таким?

— Каким?

— Упрямым.

Розария фыркнула.

— К сожалению, да.

— Эй!

— Что «эй»? Это правда.

На секунду обе девушки посмотрели друг на друга.

И рассмеялись.

Совсем тихо. Неловко. Почти испуганно.

Но это был первый момент, когда Розария увидела в незнакомке не угрозу и не отражение, а человека, с которым можно было хотя бы попытаться договориться.

Тогда часы остановились.

Все до одного.

Из-под стола донёсся голос.

— Если вы закончили знакомиться, у нас осталось не так много времени.

Розария замерла.

Она знала этот голос.

Так говорил Странник, когда пытался скрыть страх за насмешкой.

Но Странник стоял рядом.

А голос звучал из-под пола.

---

Хранитель опустился на колени и приложил ладонь к камню.

— Здесь ещё один проход.

— Куда он ведёт? — спросила Розария.

— К месту, где хранится первая версия последнего дня.

— Я думала, мы уже видели последний день.

— Вы видели тот, который сохранила память. Но есть ещё тот, который Элиар не позволил вам вспомнить.

Другая Розария закрыла коробку.

— Именно поэтому я ждала тебя.

— Чтобы я открыла проход?

— Чтобы ты услышала, что сказал Странник до того, как Хранитель закрыл дверь.

Настоящий Странник напрягся.

— Я знаю, что сказал.

— Ты помнишь слова. Но не помнишь, почему произнёс их.

Она подошла к Розарии и протянула ей бумажную звезду.

— Возьми. Она принадлежала тебе в том будущем, где ты осталась. Я сохранила её, потому что боялась однажды забыть, какой была до того, как Элиар сделал меня своей возможностью.

Розария осторожно взяла звезду.

На её поверхности появилась новая надпись:

«НЕ ВСЁ, ЧТО ТЫ ПОТЕРЯЛА, БЫЛО ОТНЯТО У ТЕБЯ».

Под ней проступили ещё слова:

«ИНогда ТЫ САМА ПРОСИЛА ОСТАВИТЬ ЭТО ЗА ДВЕРЬЮ».

— Что я попросила забыть? — прошептала Розария.

Другая девушка покачала головой.

— Не я должна тебе это рассказывать.

Она посмотрела на Странника.

— Он должен вспомнить сам.

Странник не двигался.

Розария почувствовала, как его рука слегка сжалась вокруг её пальцев.

— Что ты не помнишь? — спросила она.

Он долго молчал.

— В тот день, когда я закрыл дверь, — наконец произнёс он, — ты попросила меня пообещать одну вещь.

— Какую?

Он поднял на неё глаза.

В них не было ни страха перед садом, ни попытки спрятаться за привычной улыбкой.

Только боль, которую он ещё не мог назвать.

— Ты попросила меня никогда не возвращаться за тобой.

Розария замерла.

— Но я ведь просила тебя вернуться.

— Да.

— Я просила тебя обещать, что ты вернёшься.

— Да.

— Тогда почему…

— Потому что ты сказала это первой, — прошептал Странник. — А потом попросила меня забыть, что сказала.

Где-то глубоко под полом снова ударили часы.

Один раз.

Второй.

На третий удар каменная плита отодвинулась, открывая узкую лестницу.

Внизу горел свет.

И из темноты донёсся голос маленькой Розарии:

— Если ты всё-таки пришла за мной, значит, ты нарушила обещание.

Настоящая Розария посмотрела на девушку, которая могла бы стать ею.

Та медленно покачала головой.

— Это не я, — сказала она.

Странник сделал шаг к лестнице.

Хранитель схватил его за руку.

— Не спускайся.

— Почему?

— Потому что тот, кто говорит снизу, знает, что ты помнишь. Но он не знает, что ты забыл.

Странник высвободил руку.

— Тогда пора узнать.

Розария взяла его за ладонь.

— Вместе.

И они начали спускаться.

А наверху, в комнате с неподвижными часами, другая Розария осталась одна.

Она посмотрела на пустой портрет.

На его поверхности медленно проступили очертания девушки, которая стояла по ту сторону времени.

И впервые на холсте появилось её имя.

РОЗАРИЯ.

Под ним — ещё одно слово.

НАСТОЯЩАЯ.` },
    { title: "Глава 30:Обещание, которого не было", text: `
Лестница уходила глубоко под Элиар.

Ступени были узкими, каменными, влажными на ощупь. По стенам тянулись корни, тонкие, как нити, и среди них иногда вспыхивали маленькие огоньки. Они напоминали звёзды, отражённые в воде, — те самые, что Розария видела в пространстве между прошлым и возможным будущим.

Странник шёл впереди.

Розария держалась рядом, стараясь не отставать. За ними спускался Хранитель, и с каждым шагом его лицо становилось всё бледнее.

— Ты бывал здесь? — спросила Розария.

— Да.

— Когда?

— Не помню.

Она посмотрела на него.

— Ты постоянно так говоришь.

— Потому что это правда.

— Тогда почему у тебя вид, будто ты знаешь, что нас ждёт?

Хранитель остановился на ступеньке.

— Потому что иногда тело помнит то, что разум забыл. Я знаю, что здесь холодно, хотя в Элиаре нет настоящего холода. Знаю, что на следующей ступени будет трещина. Знаю, что впереди нас ждёт комната, в которую я обещал больше никогда не возвращаться.

Он помолчал.

— И я знаю, что в прошлый раз не сдержал обещание.

Розария хотела задать ещё один вопрос, но Странник поднял руку.

Впереди послышался звук.

Тихий, ритмичный.

Тик.

Тик.

Тик.

Они вышли к двери, вмонтированной прямо в стену. Она была деревянной, с облупившейся краской и маленькой латунной ручкой. На ней не было ни символов, ни надписей.

Самая обычная дверь.

Именно поэтому Розария испугалась.

Она помнила, что в Элиаре обычные вещи редко оставались обычными надолго.

— Это моя комната, — произнёс Странник.

Он не прикоснулся к ручке.

— Ты жил здесь? — спросила Розария.

— Не совсем.

— Объясни.

Странник провёл пальцами по деревянному косяку.

— Здесь я хранил то, что не хотел брать с собой. Вещи, которые не помещались в обычной памяти. Слова, которые не мог произнести. Обещания, которые боялся выполнить.

— Почему ты не рассказывал?

— Потому что не помнил.

Розария хотела возразить, но остановилась.

Он не пытался оправдаться. Он просто стоял перед дверью, за которой, возможно, находилась часть его самого, которую он потерял.

Она осторожно коснулась его плеча.

— Мы можем уйти, если ты не готов.

Странник посмотрел на неё.

— А если я снова забуду?

— Тогда будем искать заново.

— А если ты забудешь?

Розария улыбнулась краешком губ.

— Тогда тебе придётся объяснять мне всё с самого начала. И желательно без загадок. У меня терпение не бесконечное.

— Знаю, — тихо сказал он. — Это одна из вещей, которые я помню.

Он взялся за ручку.

Дверь открылась.

---

Внутри находилась маленькая комната.

У стены стояла кровать с тёмным покрывалом. На подоконнике лежали засохшие цветы. Рядом с письменным столом возвышалась полка, заполненная книгами, бумажными фигурками и маленькими деревянными игрушками.

На стене висел рисунок.

Три ребёнка стояли возле фонтана. Девочка с венком из листьев держала за руку мальчика, а рядом с ними стоял второй мальчик, чуть выше первого. Все трое улыбались.

Внизу неровным почерком было написано:

«МЫ ВСЕГДА БУДЕМ ВМЕСТЕ. ДАЖЕ ЕСЛИ ВРЕМЯ ЗАХОЧЕТ НАС РАЗЛУЧИТЬ».

Розария подошла ближе.

— Это мы?

— Да, — ответил Хранитель.

— Ты нарисовал?

— Кажется, я.

Она оглянулась на него.

— Ты был художником?

— Нет. Я был ребёнком, который плохо рисовал.

— Тут у Странника три ноги.

— Это не ноги, — возразил Странник. — Это плащ.

Розария посмотрела на рисунок.

— У тебя плащ растёт из колена?

— Художественная условность.

— Конечно.

Она рассмеялась, и на короткое мгновение комната перестала казаться страшной.

Но затем Странник подошёл к письменному столу.

На нём лежала раскрытая тетрадь.

Он узнал её сразу.

— Я писал сюда каждый раз, когда боялся что-то забыть.

Розария остановилась рядом.

На первой странице стояла дата — 9 июня.

Ниже было написано:

«Сегодня мы снова пришли в сад. Розария говорит, что однажды найдёт способ сделать так, чтобы никто больше не исчезал. Я сказал, что это невозможно. Она назвала меня вредным и сказала, что всё равно попробует.

Наверное, поэтому я ей верю».

Странник медленно перевернул страницу.

«Хранитель сегодня опять пытался нас напугать рассказом о третьей двери. Розария сказала, что не боится дверей.

Потом она попросила меня идти впереди, потому что сама боится темноты.

Я не стал ей об этом напоминать. Она и так знает, что я прав».

Розария закрыла рот ладонью, пытаясь сдержать улыбку.

— Это действительно похоже на меня.

— Ты всегда говорила, что не боишься темноты, — произнёс Странник. — Но никогда не любила идти первой.

— Потому что кто-то должен был проверять, не собирается ли дверь нас съесть.

— Разумная стратегия.

— Вот именно.

Они переглянулись.

И на мгновение между ними возникло нечто большее, чем воспоминание: знакомое чувство, будто они уже тысячу раз спорили об одном и том же и всё равно возвращались друг к другу.

Странник перевернул ещё несколько страниц.

Записи становились короче.

«Элена опять говорила с Хранителем. Они думают, что мы не слышим. Мы слышим».

«Розария сегодня спросила, что будет, если мы однажды перестанем помнить друг друга. Я сказал, что такого не случится».

«Она спросила, откуда я знаю. Я ответил, что обещаю».

Следующая страница была вырвана.

За ней шла чистая.

А на следующей, написанной неровно и почти неразборчиво, стояло:

«Я солгал».

Странник перестал дышать на несколько секунд.

Розария не стала спрашивать.

Он продолжил читать.

«Я не знаю, почему она начала забывать. Иногда она смотрит на меня так, будто мы едва знакомы. Иногда вспоминает всё и сердится, что я не сказал ей правду.

Хранитель говорит, что дверь уже выбрала.

Я не верю ему.

Но сегодня Розария попросила меня кое о чём. Она сказала, что если однажды забудет меня, я не должен пытаться вернуть её любой ценой.

Я не смог ответить».

На этом запись обрывалась.

Странник закрыл тетрадь.

— Я не помню, чтобы писал это.

— Но это твой почерк, — сказала Розария.

— Знаю.

Он посмотрел на неё.

— А ты помнишь, что просила меня?

Розария покачала головой.

— Нет. Но я хочу узнать.

Хранитель подошёл к столу и провёл пальцем по пустой странице.

— Здесь осталось ещё одно воспоминание.

— Как его открыть? — спросил Странник.

— Не ключом. Не желанием. И не силой.

Хранитель указал на два стула, стоявших у окна.

— Вам нужно сесть и рассказать друг другу то, что вы помните о последнем дне. Не то, что вы видели в саду. Не то, что услышали от меня или Элены. Только то, что принадлежит вам самим.

Розария нахмурилась.

— И всё?

— Всё.

— Ты уверен?

— Нет.

— Прекрасно. Обожаю твои планы.

Хранитель почти улыбнулся.

— Я тоже.

---

Они сели напротив друг друга.

За окном комнаты не было сада. Там простиралось тёмное пространство, в котором медленно двигались светящиеся точки. Некоторые приближались, другие исчезали вдали.

Розария положила руки на колени.

— Я помню воду, — начала она. — Помню, как стояла у фонтана. Помню, что было очень холодно, хотя день казался тёплым. И помню, что ты был рядом.

Странник кивнул.

— Я помню, что ты плакала.

Она удивлённо подняла голову.

— Я?

— Да. Но ты злилась, если я говорил об этом. Поэтому я делал вид, что ничего не замечаю.

— Очень благородно с твоей стороны.

— Я старался.

Розария опустила взгляд.

— Кажется, я боялась потерять кого-то.

— Меня?

Она не ответила сразу.

— Не только тебя.

Хранитель стоял у двери, не вмешиваясь.

Розария закрыла глаза.

— Я помню голос Элены. Она говорила, что есть только один способ остановить Элиар. Что если мы останемся, сад заберёт нас обоих. Но если уйдём, один из нас сможет вернуться домой.

Странник напрягся.

— Я помню это иначе.

— Как?

— Элена сказала, что дверь уже открылась. Что она не сможет закрыть её сама. Что кто-то должен остаться с другой стороны, пока граница не восстановится.

— И ты решил, что этим человеком будешь ты.

— Да.

Розария покачала головой.

— Но я ведь просила тебя не оставаться.

— Ты просила меня спасти тебя.

— Это не одно и то же.

— Тогда я не понимал разницы.

Он произнёс это тихо, без попытки защитить себя.

— Я думал, если закрою дверь, ты останешься жива. Я не думал, что забуду тебя. Не думал, что сад сохранит другую версию меня. Не думал, что Хранитель останется там один.

— А я думала, что если заставлю тебя закрыть дверь, то смогу потом вернуться за тобой.

Странник посмотрел на неё.

— Но ты попросила меня никогда не возвращаться.

Розария медленно подняла глаза.

— Да.

Она сама удивилась тому, насколько уверенно прозвучало это слово.

Не потому, что вспомнила всё. Но потому, что внутри неё словно открылся маленький замок.

— Я сказала тебе это, — продолжила она. — И теперь начинаю понимать почему.

Она сцепила пальцы.

— Я увидела будущее. Не одно из тех отражений, что показывал Элиар. Настоящее предсказание. Я увидела, что если ты однажды вернёшься в сад, дверь снова откроется. И в следующий раз она потребует не тебя и не Хранителя.

— Кого? — спросил Странник.

Розария посмотрела на собственное запястье.

— Меня.

Тишина наполнила комнату.

— Я поняла, что если ты будешь помнить меня, то не сможешь оставить меня в покое, — сказала она. — Ты будешь искать меня, даже если это опасно. А я… я не смогу отказаться от тебя, если узнаю, что ты всё ещё там.

Странник отвёл взгляд.

— Поэтому ты решила, что я должен забыть.

— Я решила, что если мы забудем друг друга, у нас обоих появится шанс прожить свою жизнь.

— Ты решила за меня.

— Да.

Она не стала оправдываться.

— И это было неправильно. Даже если я хотела тебя защитить.

Странник долго молчал.

Потом протянул руку через стол.

Розария посмотрела на неё, прежде чем вложить свою ладонь в его.

— Я злился на тебя, — признался он. — Даже когда не помнил, почему. Иногда мне казалось, что ты меня бросила. Иногда — что я сам тебя оставил. А иногда я просто знал, что мне кого-то не хватает, и не понимал кого.

Розария крепче сжала его руку.

— Мне жаль.

— Мне тоже.

Он не сказал, что всё прощено. Она не попросила его забыть обиду.

Но между ними больше не было необходимости притворяться, будто они не могли причинить друг другу боль.

И это оказалось важнее любого обещания.

---

Вдруг в комнате погас свет.

На столе раскрылась тетрадь.

Страницы переворачивались сами собой, пока не остановились на последней записи.

Чернила проступали медленно, будто кто-то писал прямо сейчас.

«Если мы когда-нибудь вернёмся сюда вместе, значит, мы наконец вспомнили достаточно.

Но есть одна вещь, которую я не должен забыть.

В тот день Розария не просила меня закрыть дверь.

Она просила меня открыть её».

Странник вскочил.

— Это невозможно.

Розария перечитала запись.

— Но это твой почерк.

— Я знаю!

Он провёл ладонью по волосам.

— Я помню, как держал ключ. Помню, как ты стояла перед дверью. Помню, что хотел закрыть её, а ты…

Он замолчал.

— Я что?

Странник зажмурился.

Перед его глазами возникло воспоминание.

Дождь.

Чёрная дверь.

Маленькая Розария, стоящая перед ним с мокрыми волосами и сжатыми кулаками.

Она не плакала.

Она была сердита.

— Открой её! — требовала она.

— Нет.

— Ты обещал!

— Я обещал, что вернусь!

— Нет! Ты обещал, что не позволишь Элиару решать за нас!

Странник почувствовал, как воспоминание начинает распадаться.

Он попытался удержать его.

— Розария, подожди…

Но девочка уже повернулась к двери.

В её руке был ключ с розовым лепестком.

— Если ты не откроешь её, я открою сама.

И тогда мальчик сделал единственное, что мог придумать.

Он выхватил ключ из её руки.

— Прости, — сказал он.

И повернул его в замке.

Дверь открылась.

Но не в сад.

За ней была комната, полная света. В центре стояла взрослая Розария, держа на ладони четвёртый ключ.

А рядом с ней — другая версия Странника.

Та, которая никогда не возвращалась.

Маленький Странник посмотрел на неё и прошептал:

— Значит, я всё-таки не один.

Взрослый Странник резко распахнул глаза.

Он отшатнулся от стола, словно воспоминание обожгло его.

— Я не закрывал дверь, — выдохнул он. — Я открыл её.

Розария встала.

— Зачем?

Он посмотрел на неё.

— Потому что ты попросила меня не спасать тебя.

— Что?

— Ты сказала, что если я действительно хочу спасти тебя, то должен перестать решать, что для тебя лучше. Ты хотела сама войти в дверь. Сама найти способ удержать сад. И я…

Он с трудом сглотнул.

— Я решил, что если позволю тебе войти, то потеряю тебя навсегда.

Розария почувствовала, как мир вокруг неё накренился.

— Но ты ведь не позволил мне…

— Нет. Я открыл дверь, чтобы войти вместо тебя.

Он посмотрел на свои руки.

— Я собирался закрыть её изнутри. Забрать на себя всё, что она потребует. Но когда я вошёл, там уже была другая версия меня. Она сказала, что знает способ вернуть тебя домой. И что для этого мне нужно отдать ей свои воспоминания.

— Ты согласился?

Странник медленно кивнул.

— Я думал, что это спасёт тебя.

— И что произошло?

Он поднял на неё глаза.

— Я отдал ей всё, что помнил о тебе.

Розария перестала дышать на мгновение.

— Всё?

— Всё.

— Даже наше детство?

— Да.

— Даже тот день у фонтана?

— Да.

— Даже то, что ты обещал вернуться?

Странник не смог ответить.

И тогда она поняла.

Он не просто забыл её.

Он добровольно отдал собственные воспоминания, чтобы она могла жить дальше, не чувствуя себя обязанной вернуться за ним.

А та версия Странника, которая осталась за дверью, сохранила всё.

Каждую встречу.

Каждую ссору.

Каждое обещание.

Каждую причину, по которой он хотел вернуться.

— Ты не должен был делать это один, — прошептала Розария.

— Я знаю.

— Мы могли найти другой способ.

— Я знаю.

Она опустилась на стул.

Ей хотелось сердиться. Хотелось спросить, почему он снова решил, что может выбирать за неё. Но она вспомнила собственное решение — попросить его не возвращаться, потому что боялась, что он погибнет.

Они оба пытались защитить друг друга.

И оба не заметили, как защита превратилась в стену.

Хранитель подошёл к тетради.

— Теперь вы знаете, что произошло перед закрытием двери. Но не знаете, кто предложил сделку.

— Другая версия Странника, — ответила Розария.

— Нет.

Хранитель перевернул последнюю страницу.

Под записью появилась ещё одна строка.

«Я согласился отдать воспоминания не ему.

Я согласился отдать их тому, кто обещал вернуть мне Розарию».

Розария медленно подняла голову.

— Кому?

Хранитель посмотрел на дверь комнаты.

— Тому, кто всё это время помогал вам искать правду.

В дверном проёме стояла Элена.

Она выглядела старой, уставшей и испуганной.

В её руке был ключ с пустым кругом.

— Мне жаль, — сказала она.

Странник сделал шаг вперёд.

— Это ты забрала мои воспоминания?

Элена покачала головой.

— Нет.

— Тогда кто?

Она закрыла глаза.

— Я.

Розария замерла.

— Ты сказала, что не забирала их.

— Я не забирала их силой. Я согласилась на сделку.

— Какую сделку?

Элена посмотрела на них обоих.

— Я попросила Элиар вернуть Розарию домой. А взамен обещала отдать ему то, что связывало её со Странником.

— Наши воспоминания? — спросила Розария.

— Да.

— Но ты знала, что мы забудем друг друга!

— Знала.

— Ты знала, что он останется за дверью!

— Я думала, что это единственный способ спасти тебя!

Розария отступила.

Впервые за всё время она не могла найти ни одного слова.

Элена протянула ей ключ.

— Но я ошиблась. Потому что Элиар не забирает только то, что ему отдают. Он забирает и то, что люди пытаются спрятать. Я хотела спасти тебя от боли, а в итоге помогла саду разделить вас.

Розария смотрела на ключ.

На его поверхности проступила тонкая трещина.

— Почему ты не рассказала нам?

— Потому что боялась, что вы захотите вернуть всё сразу. А если бы вы попытались вернуть всё сразу, Элиар мог забрать вас обоих.

— Ты не имела права решать за нас!

— Я знаю.

Элена не стала спорить.

И от этого Розарии стало ещё больнее.

Потому что перед ней стояла не злодейка, которую можно было ненавидеть без сомнений. Перед ней была женщина, которая много лет назад испугалась, сделала выбор и теперь вынуждена смотреть на последствия.

Но любовь не делала её решение правильным.

— Я не знаю, смогу ли тебя простить, — сказала Розария.

Элена кивнула.

— Я понимаю.

— И я не обещаю, что верну всё так, как было.

— Не нужно.

Розария взяла Странника за руку.

— Мы больше не будем отдавать друг друга в обмен на спасение.

Он посмотрел на неё и кивнул.

Хранитель поднял четвёртый ключ.

— Тогда пора решить, что делать с тем, кто хранит ваши воспоминания.

Элена побледнела.

— Нет. Вы не можете…

— Можем, — ответила Розария. — Но сначала узнаем правду до конца.

Она повернулась к Хранителю.

— Где он?

Хранитель указал на дверь, за которой начиналась лестница.

— Там, где время перестало выбирать между вами.

Из глубины раздался голос.

Знакомый.

Тихий.

Почти счастливый.

— Розария?

Странник побледнел.

Потому что голос принадлежал ему.

Тому, кто остался за дверью.

— Ты наконец пришла, — произнёс голос. — Я сохранил всё.

Пауза.

— Даже то, что ты просила меня забыть.

И где-то в глубине Элиара впервые за много лет зазвонили часы.
` },
    { title: "Глава 31: Тот, кто помнил всё", text: `Часы продолжали звонить.

Их звон разносился по коридорам Элиара, проходил сквозь стены и заставлял дрожать стёкла в окнах, которых здесь не должно было быть. Казалось, сад наконец вспомнил, что у времени есть голос, и теперь пытался сказать всё сразу.

Розария крепче сжала руку Странника.

— Ты слышишь?

— Да.

— Это он?

Странник не ответил.

Он знал этот голос. Не просто узнавал его — чувствовал, словно тот звучал изнутри его собственной памяти.

— Это я, — наконец произнёс он. — Только тот, которым я мог стать.

Хранитель открыл дверь в конце комнаты.

За ней начинался длинный коридор, освещённый сотнями маленьких фонарей. В каждом фонаре плавало воспоминание: чья-то улыбка, детский смех, забытое обещание, рука, протянутая в темноте.

Розария остановилась перед одним из них.

Внутри маленькая девочка с растрёпанными волосами спорила с мальчиком у фонтана. Мальчик держал в руках деревянную лодочку, а девочка пыталась доказать, что именно она должна решать, куда лодка поплывёт.

— Это мы, — прошептала она.

— Да, — ответил Хранитель. — Здесь собраны воспоминания, которые не вернулись в обычное время.

— Значит, они все настоящие?

— Настоящие. Но не все принадлежат одной жизни.

Розария отвела взгляд.

Ей вдруг стало страшно, что она может увидеть здесь счастливое воспоминание, которого не было в её собственной жизни. Что она захочет забрать его себе, а потом уже не сможет отличить то, что действительно пережила, от того, что могло случиться.

Странник заметил её тревогу.

— Не нужно смотреть на каждый фонарь, — сказал он. — Нам не обязательно возвращать всё сразу.

— А если мы пропустим что-то важное?

— Тогда найдём это позже.

Она посмотрела на него.

— Ты стал удивительно разумным.

— Не привыкай.

Розария улыбнулась.

И они пошли дальше.

---

В конце коридора стояла чёрная дверь.

На этот раз она была распахнута.

За ней находился сад, который Розария уже видела во сне, в отражениях воды и в чужих воспоминаниях. Только теперь он казался настоящим. Земля была покрыта серебристой травой, на ветвях деревьев висели бумажные звёзды, а над прудом медленно кружились белые лепестки.

Посреди сада стоял мальчик.

Нет, уже не мальчик.

Он был почти таким же, как Странник, которого Розария держала за руку. Те же черты лица, тот же взгляд, та же привычка чуть наклонять голову, когда он внимательно слушал.

Но в его глазах было гораздо больше прожитого времени.

Он держал в ладони маленькую бумажную звезду.

Увидев Розарию, он улыбнулся.

— Привет.

Она не смогла ответить.

Он посмотрел на Странника.

— А ты всё-таки вернулся.

— Да.

— Я рад.

Эти слова прозвучали настолько искренне, что Розария почувствовала, как у неё защипало в глазах.

Она ожидала увидеть злость. Обвинения. Может быть, желание занять чужое место.

Но перед ней стоял человек, который выглядел так, будто ждал этой встречи очень долго и боялся, что она окажется последней.

— Как тебя называть? — спросила Розария.

Он задумался.

— Когда-то меня звали так же, как его.

— А сейчас?

— Сейчас я не знаю, имею ли право на это имя.

Странник сделал шаг вперёд.

— Ты имеешь право на всё, что помнишь о себе.

Другой Странник посмотрел на него с грустной улыбкой.

— Ты так говоришь, потому что не помнишь, каково это — оставаться здесь.

— Ты прав. Не помню.

— Я помню каждый день.

Он повернулся к Розарии.

— Я помню, как ты впервые вошла в сад. Как мы строили лодочки. Как ты спорила со мной из-за каждого пустяка. Как однажды спрятала мою книгу, потому что я назвал тебя упрямой.

— Я не прятала её, — машинально возразила Розария. — Я временно переместила её в другое место.

Другой Странник засмеялся.

— Вот именно это я и помню.

Он опустил взгляд на бумажную звезду.

— Я помню твой день рождения. Помню, как ты хотела увидеть настоящий звёздный дождь и решила, что для этого нужно не спать всю ночь. Помню, как ты уснула прямо на скамейке, а потом обвиняла меня в том, что я не разбудил тебя.

Розария почувствовала, как по щеке скатилась слеза.

Она не знала этих воспоминаний.

Но почему-то каждое его слово отзывалось в ней чем-то тёплым и болезненно знакомым.

— Почему ты не ушёл? — спросила она. — Когда появилась возможность, почему не попытался выбраться?

Он посмотрел на пруд.

— Я пытался.

— И что случилось?

— Каждый раз, когда я подходил к двери, Элиар показывал мне будущее, в котором я возвращаюсь, а ты исчезаешь. Сначала я не верил. Потом решил, что смогу обмануть сад. Но чем больше я пытался, тем яснее понимал: я не хочу возвращаться ценой твоей жизни.

— Ты мог рассказать нам.

— Кому? — тихо спросил он. — Тебе, которая меня не помнила? Или ему, который не помнил, что я существую?

Он не обвинял их.

И именно поэтому его слова было так трудно выдержать.

— Я видел, как вы искали друг друга, — продолжил он. — Иногда вы проходили совсем рядом. Иногда я мог дотянуться до вас, но тогда дверь открывалась шире. Я боялся, что если позову тебя, ты снова попытаешься меня спасти.

Розария опустила голову.

— Я бы попыталась.

— Знаю.

— Даже если бы ты попросил меня не делать этого.

— Знаю.

Он улыбнулся.

— Ты всегда была ужасно упрямой.

— А ты всегда был ужасно вредным.

— Мы оба это пережили.

Настоящий Странник тихо усмехнулся.

На мгновение два человека, которые когда-то были одним, смотрели друг на друга без вражды.

Но затем другой Странник поднял бумажную звезду.

— Есть одна вещь, которую ты должен узнать.

Он протянул её настоящему Страннику.

— Я сохранил не только хорошие воспоминания.

---

Бумажная звезда раскрылась.

Внутри находился крошечный листок, исписанный знакомым почерком.

Настоящий Странник прочитал первую строку и побледнел.

— Что там? — спросила Розария.

Он не ответил.

Другой Странник произнёс:

— Прочитай вслух.

Странник сжал листок.

— Нет.

— Ты должен.

— Я сказал нет.

Впервые в голосе другого Странника прозвучала злость.

— Ты хочешь получить обратно только то, что делает тебя хорошим? Только улыбки, обещания и счастливые дни? А всё остальное оставить мне?

— Я не говорил этого!

— Но ты именно этого хочешь.

Розария встала между ними.

— Хватит. Мы пришли сюда не для того, чтобы заставлять друг друга страдать.

Другой Странник посмотрел на неё.

— Я не хочу заставлять его страдать. Я хочу, чтобы он перестал считать, что может вернуться и просто забрать свою жизнь обратно.

Он снова повернулся к своему двойнику.

— Ты должен знать, что было после того, как ты отдал мне свои воспоминания.

Настоящий Странник молчал.

И тогда другой начал рассказывать.

— Элена вывела тебя из сада. Ты больше не помнил Розарию, и поэтому смог уйти. Ты проснулся в обычном мире, в своей комнате, и решил, что всё, что произошло в Элиаре, было сном. Но ты не мог спать спокойно. Ты просыпался среди ночи и записывал слова, которые не понимал. Иногда рисовал розы. Иногда писал дату девятого июня. Ты не знал почему.

Розария медленно повернулась к настоящему Страннику.

Он смотрел в землю.

— Я помню обрывки, — признался он. — Думал, что это просто странные сны.

— А я помнил всё, — продолжил другой. — Я помнил, как ты уходил. Как хотел вернуться. Как боялся, что своим возвращением сделаешь только хуже. Я помнил каждое утро, когда просыпался и надеялся, что дверь наконец откроется.

Он сделал паузу.

— Но больше всего я помнил твоё обещание.

Странник поднял голову.

— Какое?

— Ты сказал мне, что если однажды мы встретимся снова, я должен отдать тебе все воспоминания. Даже те, которые причинят боль. Потому что ты не хочешь, чтобы я оставался здесь только ради твоего страха.

Настоящий Странник побледнел ещё сильнее.

— Я сказал это?

— Да.

— Почему я не помню?

— Потому что ты отдал мне и это воспоминание.

Другой Странник посмотрел на Розарию.

— Но есть ещё кое-что. В тот день ты тоже дала обещание.

Розария почувствовала, как сердце ударилось о рёбра.

— Какое?

Он протянул ей бумажную звезду.

— Ты сказала, что если однажды встретишь меня снова, то не станешь выбирать, какой из нас настоящий. Ты сказала, что я заслуживаю не меньше права на жизнь, чем тот, кто вернулся домой.

Розария смотрела на него, не в силах произнести ни слова.

— Ты сказала, что мы оба имеем право быть собой, — повторил он. — Даже если это будет трудно. Даже если для этого придётся изменить сам Элиар.

Настоящий Странник медленно подошёл к нему.

— Я не помню, как мы прощались.

— Я помню.

— Я не помню, что обещал тебе.

— Я знаю.

— Но я не хочу оставлять тебя здесь.

Другой Странник посмотрел на него долгим взглядом.

— Тогда не оставляй.

Он протянул руку.

Настоящий Странник не сразу понял, чего тот ждёт.

— Ты хочешь, чтобы я забрал твои воспоминания?

— Нет. Я хочу, чтобы ты перестал считать, будто мои воспоминания принадлежат только тебе.

Он указал на бумажную звезду.

— Они принадлежат мне тоже. Я прожил их. Я чувствовал их. Я был там, когда ты не мог помнить. Я не хочу снова исчезать, чтобы ты мог стать прежним.

— Но если мы не объединим воспоминания, граница останется открытой, — произнёс Хранитель.

Другой Странник повернулся к нему.

— Ты всё ещё думаешь, что Элиар нужно удерживать ценой чьей-то жизни?

Хранитель замолчал.

— Мы так долго пытались найти правильного человека, который должен остаться, — продолжил он. — Но что, если проблема не в том, кто останется? Что, если сама граница держится на том, что мы продолжаем выбирать друг против друга?

Розария посмотрела на него.

И вдруг поняла.

Все эти годы они искали способ закрыть дверь. Найти нужный ключ. Вернуть правильное воспоминание. Определить, кто должен остаться, а кто заслужил возвращение.

Но никто не спрашивал, почему дверь вообще требовала выбора.

— Элиар хранит то, что время не смогло удержать, — медленно произнесла она. — Он сохраняет воспоминания, возможности и то, что мы оставили позади.

— Да, — сказал Хранитель.

— А мы всё время пытались заставить его выбрать только одну версию событий.

— Да.

Розария посмотрела на двух Странников.

— Но ведь обе жизни произошли. Одна — в обычном времени. Другая — здесь. Ни одна из них не становится ложной только потому, что другая тоже существует.

Другой Странник впервые улыбнулся без грусти.

— Именно.

— Значит, нам не нужно решать, кто из вас настоящий.

— Нам нужно перестать заставлять Элиар выбирать, — сказал Хранитель.

Он подошёл к пруду.

Вода в нём была совершенно неподвижной.

— Я не знаю, получится ли. Но если мы хотим изменить границу, нужно вернуть ей то, чего ей не хватало с самого начала.

— Чего? — спросил настоящий Странник.

Хранитель посмотрел на Розарию.

— Возможности не терять одну жизнь ради другой.

---

Четвёртый ключ оказался холодным, когда Розария достала его из кармана.

Символы на его поверхности светились: роза, незабудка, пустой круг и звезда.

Она подошла к пруду и опустила ключ над водой.

— Если я ошибаюсь, — сказала она, — нам придётся искать другой способ.

— Если ошибаешься, — ответил Странник, — мы будем искать вместе.

— Ты мог бы хотя бы сделать вид, что веришь в меня.

— Я верю в тебя. Но я также знаю, что ты способна открыть любую дверь, не прочитав, что на ней написано.

— Я однажды прочитала!

— После того, как открыла.

Другой Странник рассмеялся.

— Она всегда такая?

— Всегда, — ответили оба Странника одновременно.

Розария закатила глаза.

— Прекрасно. Теперь вас двое.

Она улыбнулась и опустила ключ в воду.

Пруд засветился.

На его поверхности появились четыре круга. В первом отражалась маленькая Розария у фонтана. Во втором — мальчик, который остался за дверью. В третьем — Странник, вернувшийся домой. В четвёртом — другая Розария, жившая в саду.

Круги не сливались друг с другом.

Они существовали рядом.

И впервые вода не пыталась выбрать, какое отражение правильное.

Розария протянула руку двум Странникам.

— Я не могу обещать, что у нас всё получится. Не могу обещать, что никто больше не будет страдать. Но я могу обещать, что больше не стану решать за вас, какую жизнь вы должны прожить.

Настоящий Странник взял её за руку.

Другой — тоже.

— А я обещаю, — сказал первый, — что не буду пытаться вернуть прошлое, если для этого придётся отнять у кого-то настоящее.

— А я обещаю, — сказал второй, — что больше не буду считать себя обязанным исчезнуть ради того, чтобы остальные могли быть счастливы.

Хранитель подошёл к ним.

— А я обещаю, что перестану скрывать правду, даже если она окажется страшнее того, что вы себе представляли.

— Это очень хорошее обещание, — сказала Розария. — Запиши его где-нибудь, а то мы тебя знаем.

Хранитель улыбнулся.

И положил ладонь на воду.

В этот момент четыре круга вспыхнули.

Звон часов прекратился.

По поверхности пруда прошла волна, и в её глубине открылось небо, полное звёзд. Каждая звезда была чьей-то жизнью — возможной, прожитой или забытой. Но теперь ни одна не исчезала, когда появлялась другая.

Две фигуры Странника начали светиться.

Розария испуганно сжала их руки.

— Нет. Подождите. Что происходит?

— Не бойся, — сказал настоящий Странник.

— Я не боюсь!

— Конечно.

Он улыбнулся ей.

— Просто держи нас за руки.

Она держала.

Свет становился всё ярче. Воспоминания двух Странников начали переходить из одного в другого — не исчезая, не стираясь, а словно находя место рядом. Хорошие и плохие. Радостные и тяжёлые. Все те дни, которые один прожил в обычном времени, и те, которые другой провёл в Элиаре.

Настоящий Странник закрыл глаза.

Другой тоже.

На мгновение Розария увидела перед собой не двух людей, а бесконечное множество отражений одного лица. И каждое было настоящим.

Когда свет рассеялся, перед ней стоял один Странник.

Но не совсем тот, которого она помнила.

Он выглядел так же, как прежде. Однако в его взгляде появилось что-то новое — не чужое воспоминание, а понимание, что его жизнь была больше, чем он думал.

Розария осторожно коснулась его щеки.

— Ты здесь?

Он накрыл её ладонь своей.

— Здесь.

— Ты помнишь?

— Не всё. Но теперь я знаю, что у меня было больше одной дороги. И ни одна из них не делает меня чужим самому себе.

Розария улыбнулась сквозь слёзы.

— Тогда пойдём домой.

Странник посмотрел на сад.

— Подожди.

У самого края пруда стояла другая Розария.

Та, что когда-то осталась в Элиаре.

Она не исчезла.

Не растворилась в свете.

Она стояла на траве, прижимая к груди бумажную звезду, и смотрела на них с тихой улыбкой.

Розария подошла к ней.

— Ты остаёшься?

Другая девушка посмотрела на сад.

— Пока не знаю.

— Ты можешь уйти с нами?

— Возможно. Но я не хочу, чтобы ты снова решала за меня.

Розария кивнула.

— Тогда я не буду.

Они обнялись.

И в этот момент Розария почувствовала не чужое воспоминание и не отражение собственной боли, а что-то совершенно новое.

Признание.

Она не обязана была становиться другой версией себя, чтобы понять её. И не обязана была стирать эту версию, чтобы вернуться домой.

— Я найду способ, — сказала Розария. — Не обещаю, что быстро. Но я буду искать.

Другая Розария улыбнулась.

— Знаю.

Она вложила бумажную звезду в ладонь настоящей Розарии.

— На этот раз не забудь спросить меня, чего я хочу.

— Спрошу.

— И не открывай двери без меня.

— Постараюсь.

— Розария!

— Ладно! Обещаю.

Они рассмеялись.

А потом другая Розария отступила на шаг и повернулась к саду.

— Идите. Вам ещё нужно вернуться к Элене.

— А ты?

— А я впервые за долгое время хочу остаться здесь не потому, что должна.

Она подняла голову к звёздам.

— А потому, что сама выбираю.

---

Обратный путь оказался короче.

Коридор с фонарями больше не казался бесконечным. В каждом свете они видели воспоминания, которые больше не требовали немедленного возвращения. Некоторые оставались на своих местах. Другие медленно уходили в глубину, находя собственные дороги.

У лестницы их ждала Элена.

Она смотрела на Странника так, словно боялась, что он исчезнет, если она моргнёт.

— Ты вспомнил?

— Да.

— Всё?

Странник задумался.

— Не всё. Но достаточно, чтобы понять, что вы обе пытались спасти нас и обе совершили ошибки.

Элена опустила голову.

— Я не прошу прощения.

Розария подошла к ней.

— И правильно. Потому что я пока не знаю, готова ли простить.

Элена кивнула.

— Я понимаю.

— Но я хочу, чтобы ты рассказала нам всё. Без новых тайн. Даже если это будет неприятно.

— Расскажу.

— И больше не будешь решать за меня, что мне нужно забыть.

— Не буду.

Розария обняла её.

Это не означало, что боль исчезла. Не означало, что все ошибки были исправлены одним объятием.

Но это означало, что они могли начать разговор заново.

Странник взял Розарию за руку.

— Нам пора.

Они поднялись по лестнице и вышли в сад Элиара.

Утро уже начиналось.

На траве блестела роса. У фонтана распустились белые цветы, а на ветке старой яблони сидела маленькая птичка. Она встряхнула крыльями и улетела, оставив после себя тихий шорох.

Розария вдохнула прохладный воздух.

Впервые за долгое время сад не казался ей ловушкой.

Он был местом, которое хранило слишком много боли, слишком много любви и слишком много несказанных слов.

Но теперь у него появился шанс стать чем-то другим.

Странник посмотрел на неё.

— Ты улыбаешься.

— И что?

— Ничего. Просто заметил.

Она слегка толкнула его плечом.

— Не начинай.

— Я ещё ничего не сказал.

— Но собирался.

Он рассмеялся.

И Розария вдруг поняла, что именно этого ей не хватало всё это время.

Не идеального прошлого.

Не полного возвращения всех воспоминаний.

Не обещания, что больше никогда не будет больно.

А возможности идти рядом с человеком, которого она любила, не требуя от него быть тем, кем он был когда-то.

У фонтана тихо звякнул колокольчик.

На воде появилась надпись:

«ГРАНИЦА ВОССТАНОВЛЕНА».

Но под ней проступили ещё слова.

«САД БОЛЬШЕ НЕ МОЖЕТ ВЫБИРАТЬ ЗА ВАС».

Розария улыбнулась.

— Кажется, мы справились.

Странник посмотрел на надпись.

— Кажется.

— Ты мог бы хоть раз сказать уверенно!

— Я не хочу сглазить.

Она рассмеялась.

И именно тогда за их спинами раздался тихий голос.

— Розария?

Она обернулась.

У ворот сада стояла Альбиана.

Её младшая сестра выглядела растерянной и испуганной. В руках она держала маленькую деревянную коробку, которую Розария никогда раньше не видела.

— Я искала тебя, — сказала Альбиана. — Элена велела мне не открывать это, пока ты не вернёшься.

Розария подошла к ней.

— Что там?

Альбиана протянула коробку.

На крышке была вырезана роза.

А под ней — имя, написанное рукой, которую Розария узнала бы среди тысячи других.

«ЛЮСТЕРИЯ».

Странник перестал улыбаться.

Потому что он помнил эту коробку.

И знал, что её содержимое могло изменить всё, что они только что исправили.

— Не открывай, — прошептал он.

Розария посмотрела на него.

— Почему?

Он медленно поднял глаза.

— Потому что я вспомнил, что произошло после того, как мы покинули Элиар в первый раз.

Он посмотрел на коробку.

— И твоя мать была не той, кто заключил сделку.

Ветер прошёл по саду.

Все белые цветы одновременно закрылись.

А на крышке коробки проступила новая надпись:

«ОТКРЫТЬ ТОЛЬКО ПОСЛЕ ТОГО, КАК РОЗАРИЯ ВЕРНЁТСЯ ДОМОЙ».` },
    { title: "Глава 32:Дом, который помнит", text: `
Белые цветы закрылись одновременно.

Не один за другим, не медленно, словно наступал вечер, — все сразу, будто сад Элиар на мгновение перестал дышать.

Альбиана стояла посреди дорожки, прижимая к груди деревянную коробку. На её крышке темнело имя матери.

ЛЮСТЕРИЯ.

— Почему они закрылись? — тихо спросила она.

Никто не ответил.

Розария смотрела на коробку. Странник стоял рядом, и его пальцы едва заметно сжимались и разжимались. После встречи со своей второй версией он стал другим — не чужим, нет. Скорее человеком, который внезапно получил обратно целую жизнь, но ещё не научился носить её в себе.

— Ты сказал, что моя мать не заключала сделку, — произнесла Розария. — Объясни.

Странник перевёл взгляд на коробку.

— Я вспомнил не всё. Но помню, что после нашего первого возвращения домой Элиар ещё не был закрыт. Он продолжал звать тебя. И кто-то ответил ему раньше, чем ты успела услышать.

— Кто?

— Не знаю. Поэтому нам и нужно открыть коробку.

Альбиана нахмурилась.

— Она появилась в моей комнате сегодня утром. Я думала, это какая-то старая семейная вещь. Но на крышке было написано, что открыть её можно только после возвращения Розарии домой.

Она протянула коробку сестре.

— Я решила, что это ты.

Розария осторожно взяла её. Дерево было тёплым, словно коробка долго лежала на солнце, хотя в саду стоял прохладный вечер. На крышке под именем матери обнаружился едва различимый рисунок: роза, незабудка, пустой круг и звезда.

Четыре символа четвёртого ключа.

— Она ждала не просто моего возвращения, — прошептала Розария. — Она ждала, когда я вернусь собой.

— Тогда не будем заставлять её ждать дальше, — сказал Странник.

На коробке не было замка.

Розария провела пальцем по крышке. Дерево тихо щёлкнуло, и крышка приподнялась сама.

Внутри лежали письмо, небольшая стеклянная пластинка и засохшая белая роза.

Не чёрная, которую Странник когда-то посадил для неё. Не та белая, что раскрывалась при возвращении памяти.

Эта роза была старой. Её лепестки стали почти прозрачными, но не рассыпались от прикосновения.

Розария развернула письмо.

Почерк матери она узнала сразу.

Моя маленькая роза.

Если ты читаешь это, значит, ты вернулась из Элиара. Значит, время наконец перестало прятать от тебя то, что мы так долго боялись рассказать.

Я не знаю, сколько тебе лет, когда ты найдёшь письмо. Не знаю, сколько воспоминаний к тому моменту вернётся. Поэтому прошу тебя об одном: дочитай до конца, прежде чем решишь, кого винить.

Я не заключала сделку с Элиаром. Но я знала, что она существует.

Розария остановилась.

— Значит, Странник был прав.

— Читай дальше, — негромко попросила Элена.

Розария подняла глаза.

— Ты знала об этом письме?

Старая женщина не стала отворачиваться.

— Да.

— И всё это время молчала?

— Я надеялась, что оно никогда не понадобится.

— Это не ответ.

— Нет, — согласилась Элена. — Не ответ.

Розария снова посмотрела на лист.

Когда ты была совсем маленькой, Элиар начал тянуться к тебе. Не потому, что хотел причинить тебе боль. Он тянулся к твоей силе — той части тебя, которая могла соединять воспоминания и время.

Элена пыталась удержать сад. Хранитель пытался удержать дверь. А я пыталась удержать тебя.

Мы все боялись потерять то, что любили. И каждый из нас совершил ошибку, решив, что ради спасения другого имеет право выбирать за него.

В саду послышался шелест.

Один белый цветок чуть приоткрыл лепестки.

Розария продолжила.

Хранитель первым предложил себя вместо тебя. Он был уже связан с Элиаром и верил, что сможет удержать дверь изнутри. Он хотел, чтобы ты выросла, не зная о нём, чтобы тебе никогда не пришлось возвращаться за ним.

Элена приняла его предложение, но Элиар потребовал ещё одну цену: связь между тобой и мальчиком, который всегда возвращался к тебе.

Элена согласилась. Она думала, что так спасёт тебя окончательно.

Она не хотела отнимать у вас друг друга. Но страх иногда умеет говорить голосом любви.

Розария медленно опустила письмо.

— Значит, Хранитель предложил себя. А ты согласилась отдать нашу связь.

Элена закрыла глаза.

— Да.

— И ты сказала мне, что сама заключила сделку.

— Потому что я её приняла. Потому что могла отказаться. Потому что, когда Элиар потребовал цену, я испугалась настолько, что убедила себя: другого выхода нет.

— Но он был?

— Я не знаю, — тихо ответила Элена. — И, возможно, именно этого я никогда себе не прощу.

Странник смотрел на старую женщину без прежней враждебности, но и без доверия, которое можно вернуть одним признанием.

— Ты могла рассказать нам.

— Могла.

— Мы могли попытаться найти другой путь.

— Да.

— Мы потеряли годы.

Элена кивнула.

— Да.

Она не оправдывалась. Не просила немедленного прощения. И от этого её признание звучало тяжелее любого заклинания.

Розария снова посмотрела на письмо. На дне коробки оставалась стеклянная пластинка.

Она подняла её к свету.

Внутри медленно закружились крошечные золотые точки. Они сложились в изображение комнаты, залитой утренним солнцем. На кровати сидела молодая Люстерия, а рядом стояла Элена. Между ними спал младенец, укрытый мягким одеялом.

Розария узнала себя.

— Это воспоминание? — спросила Альбиана.

— Да, — ответил Странник. — Но не Элиара. Человеческое. Сохранённое для того, чтобы его нельзя было переписать.

Изображение дрогнуло, и заговорила Люстерия.

— Если ты видишь это, моя девочка, значит, ты уже достаточно взрослая, чтобы услышать правду.

Молодая женщина посмотрела прямо перед собой, будто знала, что однажды её дочь будет смотреть на неё из другого времени.

— Я хотела забрать тебя подальше от Элиара. Хотела уехать, спрятаться, сделать вид, что никакого сада не существует. Но я понимала: если просто убежать, он продолжит искать тебя. И тогда пострадают другие.

Люстерия погладила спящего ребёнка по щеке.

— Я не соглашалась отдавать тебя. Я не соглашалась отдавать твою память. И я не соглашалась, чтобы кто-то решал, кого ты должна любить, а кого забыть.

Её голос стал тише.

— Но я позволила Элене действовать. Я поверила, что она найдёт способ защитить тебя. Это тоже был мой выбор. И за него я отвечаю.

Элена на изображении выглядела совсем молодой. Уставшей, испуганной, с руками, которые никак не могли перестать дрожать.

— Я обещаю, — произнесла она, глядя на младенца, — что однажды ты узнаешь всё.

Воспоминание погасло.

На стекле проступили слова:

«НЕ ЗАБИРАЙТЕ У НЕЁ ПРАВО ВЫБРАТЬ САМОЙ».

Розария долго молчала.

Она столько раз представляла, как узнает правду о своей семье. В одних воспоминаниях мать казалась спасительницей, в других — человеком, который отдал её саду. Элена то выглядела предательницей, то единственным человеком, пытавшимся её защитить.

Но правда оказалась сложнее.

Они любили её. И всё равно причинили ей боль.

— Я не знаю, могу ли простить тебя сейчас, — наконец сказала Розария Элене.

— Тебе не нужно решать это сегодня.

— И я не хочу, чтобы ты снова что-нибудь скрывала ради моего же блага.

— Больше не буду.

— Даже если правда окажется страшной?

Элена посмотрела на неё.

— Особенно тогда.

Розария кивнула. Это ещё не было прощением. Но, возможно, впервые между ними появилась возможность однажды к нему прийти.

---

— А что теперь будет с садом? — спросила Альбиана.

Они стояли у фонтана. Вода в нём была неподвижной, но на поверхности отражались звёзды, хотя небо ещё оставалось светлым.

Хранитель присел у каменного края и коснулся воды.

— Раньше Элиару нужен был человек, который удерживал бы дверь закрытой. Поэтому я остался здесь. Но четвёртый ключ изменил правило.

Он достал ключ. Четыре символа на нём больше не светились по отдельности. Теперь они образовывали единый узор.

— Сад больше не должен удерживать кого-то против его воли, — продолжил он. — Ни меня. Ни тебя, Розария. Ни того, кто оказался по другую сторону.

— Значит, ты можешь уйти? — спросила она.

— Могу.

— Тогда почему ты всё ещё здесь?

Хранитель улыбнулся краешком губ.

— Потому что я хочу закончить то, что начал. Но теперь я могу уйти, когда захочу. И вернуться, если захочу. Это совсем другое.

Он повернул ключ.

Где-то в глубине сада раздался звук, похожий на последний удар часов перед рассветом.

Вода поднялась над фонтаном прозрачной аркой. За ней показалась другая дорожка — та, по которой они когда-то шли в поисках третьей двери.

Только теперь дорожка не исчезала в тумане.

На другой стороне стояла другая Розария.

Она выглядела почти так же, как настоящая, но держалась иначе. В её глазах было больше усталости, а улыбка появлялась медленнее, будто она давно отвыкла улыбаться кому-то, кроме самой себя.

Она не приближалась.

— Я не уверена, что хочу уходить, — сказала она.

Розария сделала шаг к арке, но остановилась.

Раньше она бы сразу протянула руку. Попросила бы вернуться. Попыталась бы убедить, что снаружи лучше, что дома её ждут, что всё можно исправить.

Теперь она просто спросила:

— А чего ты хочешь?

Другая Розария задумалась.

— Я хочу увидеть, каким бывает сад, когда он не пытается меня удержать. А потом… возможно, я захочу увидеть мир за его пределами.

— Хорошо.

— Ты не будешь заставлять меня выбрать прямо сейчас?

— Нет.

— И не будешь считать меня менее настоящей, если я останусь?

Розария покачала головой.

— Ты прожила свою жизнь. У тебя свои воспоминания, свои страхи и свои желания. Я не могу отнять у тебя всё это только потому, что мы похожи.

На лице другой Розарии появилось выражение, которого прежде никто из них не видел: облегчение.

— Тогда я останусь ненадолго.

— А когда захочешь уйти, — сказала Розария, — мы найдём дорогу.

— Вместе?

— Если ты этого захочешь.

Другая Розария улыбнулась.

— Ты стала немного умнее.

— Не привыкай. Я всё ещё чаще всего права.

— Вот теперь я тебе верю.

Они рассмеялись — негромко, почти неуверенно. И всё же этот смех оказался настоящим.

Арка медленно растворилась, оставив после себя тонкую серебряную линию на воде.

Хранитель поднялся.

— Теперь сад принадлежит не времени, а тем, кто выбирает в нём остаться.

— А ты? — спросила Розария.

— Я буду приходить. Иногда проверять двери. Иногда пить чай. Иногда ворчать, если вы снова что-нибудь сломаете.

— Это ты сейчас на меня намекаешь?

— Разумеется.

— Я ничего не ломала!

Странник посмотрел на неё.

— Ты однажды сломала часы, потому что они показывали день, который ещё не наступил.

— Это были неправильные часы.

— Конечно.

— Они первые начали.

— Не сомневаюсь.

Розария толкнула его плечом. Он тихо рассмеялся и на мгновение прикрыл глаза.

А когда открыл их, в его взгляде появилось что-то новое.

Не воспоминание целиком. Не внезапное возвращение каждого потерянного дня.

Просто маленький, настоящий фрагмент.

— Я вспомнил, — сказал он.

Розария замерла.

— Что именно?

— Как ты однажды пообещала мне половину своего королевства. А потом решила, что я слишком много прошу, и оставила мне только старую беседку.

— Потому что ты хотел ещё и конюшню!

— Я был ребёнком.

— Очень жадным ребёнком.

Он улыбнулся.

— А ты всё-таки вернулась.

Розария посмотрела на него внимательно.

— Да. Но не потому, что обещала быть рядом любой ценой.

— Я знаю.

— И не потому, что должна спасать тебя.

— Я знаю.

— Я вернулась, потому что сама этого захотела.

Странник не стал шутить. Не попытался превратить её слова в обещание, которое невозможно нарушить.

Он просто протянул руку.

И Розария сама вложила в неё свою.

— Тогда я тоже останусь, — сказал он. — Пока мы оба этого хотим.

— А если однажды нам понадобится побыть порознь?

— Значит, побываем порознь.

— А если ты снова что-нибудь забудешь?

Он немного помолчал.

— Тогда я попытаюсь вспомнить. А если не получится, попрошу тебя рассказать. Но не стану обещать, что больше никогда ничего не забуду.

Розария улыбнулась.

— Это честный ответ.

— Я стараюсь.

Она сжала его руку.

И в этот момент из фонтана поднялась крошечная серебряная рыбка. Она описала круг над водой, блеснула чешуёй и исчезла среди отражённых звёзд.

Розария засмеялась.

— Ты видел?!

— Видел.

— Значит, она всё ещё здесь!

— Похоже на то.

— А ты говорил, что это невозможно.

— Я говорил, что это маловероятно.

— Ты сказал: «Розария, там нет рыбы».

— Я мог ошибаться.

— Запомню этот день.

— Пожалуйста. Мне нужно хотя бы одно доказательство, что ты иногда бываешь права.

— Я всегда права.

— Вот теперь всё вернулось на свои места.

---

К вечеру они покинули Элиар.

На этот раз никто не исчезал за спиной. Никто не закрывал дверь, не отдавал память и не оставался по ту сторону ради чужого спасения.

Хранитель вышел вместе с ними, хотя ненадолго: у ворот он остановился, коснулся старого камня и сказал, что вернётся утром. Не потому, что обязан. Просто хотел убедиться, что сад действительно научился отпускать.

Элена шла рядом с Альбианой. Они о чём-то тихо разговаривали, и впервые за долгое время между ними не было ни тайных знаков, ни недосказанных предупреждений.

Розария задержалась у ворот.

— Ты идёшь? — спросил Странник.

— Сейчас.

Она обернулась.

Элиар был тихим. Белые цветы снова раскрывались, один за другим. Ветер двигал ветви, вода в фонтане переливалась серебром. Где-то среди деревьев тикали часы, но теперь их стрелки не пытались увести время назад.

Сад больше не выглядел местом, которое ждёт, кого бы забрать.

Он выглядел местом, куда можно вернуться.

— Я думала, что, когда узнаю всю правду, мне станет легче, — сказала Розария.

Странник подошёл ближе.

— Стало?

Она подумала.

— Не совсем. Мне больно за то, что мы потеряли. Мне жаль, что мы столько лет жили с чужими решениями вместо собственных. И я не могу просто сделать вид, будто ничего не было.

— Не нужно.

— Но теперь я знаю, что было. И что будет дальше — решать нам.

Он посмотрел на неё с той тихой теплотой, которую она узнавала даже тогда, когда память молчала.

— Нам обоим?

— Нам обоим. Но не только нам. Альбиана тоже имеет право знать правду. Мама имеет право рассказать свою историю. Элена должна научиться не прятать от нас мир за закрытыми дверями. А Хранитель… — Розария улыбнулась. — Хранитель должен научиться приходить в гости без загадочных предупреждений.

— Это будет самая трудная часть, — серьёзно заметил Странник.

— Я знаю.

Они пошли к дому.

На пороге Розария вдруг остановилась и достала из кармана ключ с розой. Он был обычным на вид, тёплым от её ладони. Ни надписей, ни новых символов.

Только роза.

— Как думаешь, он ещё понадобится?

Странник посмотрел на ключ.

— Наверное. Но теперь он не обязан открывать дверь только потому, что кто-то постучал.

— А если я сама захочу её открыть?

— Тогда откроешь. Только сначала убедись, что знаешь, куда идёшь.

Розария спрятала ключ.

— Знаешь, это, пожалуй, самое разумное, что ты мне когда-либо говорил.

— Я польщён.

— Не привыкай.

Они вошли в дом.

За окном темнело небо. На столе уже горел свет, а в комнате пахло чаем и свежим хлебом. Альбиана позвала их ужинать, и Странник, к удивлению Розарии, сразу согласился.

— Ты даже не спросил, что на ужин, — заметила она.

— Я решил рискнуть.

— А если там овощи?

— Тогда мне понадобится твоя помощь.

— С чем?

— С тем, чтобы незаметно отдать их тебе.

Розария рассмеялась так громко, что Альбиана выглянула из кухни и потребовала объяснить, что опять случилось.

И впервые этот смех не заставил часы остановиться.

Время продолжило идти.

---

Поздно ночью Розария вернулась в свою комнату.

На столе лежали письмо Люстерии и стеклянная пластинка. Рядом — засохшая белая роза, которую она решила не выбрасывать. Не как напоминание о боли, а как доказательство того, что даже самое хрупкое воспоминание можно сохранить, если перестать использовать его как замок.

Она достала чистый лист и написала:

Сегодня я вернулась домой.

Не в тот дом, где все знают правду. Не в тот, где никто никогда не ошибается. И даже не в тот, где больше не будет больно.

Я вернулась туда, где можно задавать вопросы. Где можно сердиться и не переставать любить. Где можно уйти, если страшно, и вернуться, если захочется.

Я больше не хочу, чтобы меня спасали от моей собственной жизни.

Я хочу прожить её сама.

Она остановилась, подумала и добавила:

А если однажды я снова забуду что-то важное, пусть мне напомнят не только о том, что я потеряла, но и о том, что я выбрала.

Розария сложила письмо и убрала его в ящик.

Потом подошла к окну.

На подоконнике лежала маленькая бумажная звезда. Она не помнила, когда положила её туда. Возможно, это была одна из тех звёзд, которые Странник когда-то складывал для неё. Возможно, она пролежала здесь всё это время, ожидая, когда её заметят.

На одной стороне было написано:

«Я вернусь».

Розария перевернула звезду.

На другой стороне стояло всего два слова:

«Когда захочу».

Она улыбнулась.

Теперь это не было обещанием, данным из страха. Не было приказом времени или попыткой удержать кого-то рядом.

Это было право.

Право вернуться.

Право остаться.

Право однажды выбрать другой путь — и всё равно не стать чужим.

За окном ветер шевельнул ветви розового куста. На самой верхней ветке распустился новый цветок.

Розария погасила свет и легла спать.

В ту ночь ей ничего не снилось.

Ни дверей, ни ключей, ни голосов из-за стены. Ни сада, который пытался вспомнить её вместо неё самой.

Ей снился обычный день.

Солнце. Дорога. Смех. Чьи-то шаги рядом.

И чувство, что впереди ещё целая жизнь.

А далеко-далеко, в саду Элиар, часы пробили полночь.

Один раз.

Потом второй.

И третий.

Никто не постучал в дверь.

Потому что теперь дверь можно было открыть изнутри.

Конец.` 
    }
];


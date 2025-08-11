document.addEventListener("DOMContentLoaded", function () {
  initializeApp();
});

function setCookie(name, value, days = 30) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${JSON.stringify(value)};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) {
      try {
        return JSON.parse(c.substring(nameEQ.length, c.length));
      } catch (e) {
        return null;
      }
    }
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function initializeApp() {
  initializeTelegramButton();
  initializePashaPhoto();
  initializeCalculator();
  initializeModal();
  initializeAnimations();
  initializeSmoothScroll();
}

function initializeTelegramButton() {
  const mainTelegramButton = document.getElementById("telegram-main-button");
  if (mainTelegramButton) {
    mainTelegramButton.href = getTelegramUrl();
  }
}

function initializePashaPhoto() {
  const pashaPhoto = document.getElementById("pasha-photo");
  if (pashaPhoto) {
    const originalSrc = "assets/images/pasha-photo.jpg";
    const altText = "Павел Лебедик";
    pashaPhoto.src = originalSrc;
    pashaPhoto.onerror = function () {
      this.onerror = null;
      this.src = createPlaceholderDataURL(originalSrc, altText);
    };
  }
}

function renderProducts() {
  const productsGrid = document.getElementById("products-grid");
  if (!productsGrid || !window.teaProducts) {
    return;
  }

  productsGrid.innerHTML = "";

  window.teaProducts.forEach((product) => {
    const productCard = createProductCard(product);
    productsGrid.appendChild(productCard);
  });
}

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card fade-in-up";
  card.onclick = () => openProductModal(product);

  const imageElement = createImageWithPlaceholder(product.images.thumb, product.name, "product-image");

  card.innerHTML = `
        <div class="product-image-container">
            ${imageElement}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">${product.priceNumber} ₽ за ${product.weight}г</p>
            <p class="product-description">${product.shortDescription}</p>
        </div>
    `;

  return card;
}

function initializeCalculator() {
  const calculatorSection = document.getElementById("calculator");
  if (!calculatorSection) return;

  const quizState = getCookie("quizState");

  if (quizState && (quizState.status === "completed" || quizState.status === "skipped")) {
    showQuizCompletedState(quizState);
    return;
  } else if (quizState && quizState.status === "in_progress") {
    showQuizInProgressState(quizState);
    return;
  }

  calculatorSection.innerHTML = `
    <div class="container">
      <h2 class="section-title">Подберем чай под ваше настроение</h2>

      <div class="quiz-container">
        <div class="quiz-step active" id="step-mood">
          <h3 class="quiz-question">Какое у вас настроение?</h3>
          <div class="quiz-options">
            <button class="quiz-option" data-value="energy">Хочу взбодриться</button>
            <button class="quiz-option" data-value="relax">Нужно расслабиться</button>
            <button class="quiz-option" data-value="focus">Нужна концентрация</button>
          </div>
          <button class="quiz-skip" data-action="skip-all">Пропустить опрос</button>
        </div>

        <div class="quiz-step" id="step-time">
          <h3 class="quiz-question">В какое время дня будете пить?</h3>
          <div class="quiz-options">
            <button class="quiz-option" data-value="morning">Утро</button>
            <button class="quiz-option" data-value="day">День</button>
            <button class="quiz-option" data-value="evening">Вечер</button>
          </div>
          <div class="quiz-nav">
            <button class="quiz-prev">Назад</button>
            <button class="quiz-skip" data-action="skip-question">Пропустить вопрос</button>
          </div>
        </div>

        <div class="quiz-step" id="step-taste">
          <h3 class="quiz-question">Какой вкус предпочитаете?</h3>
          <div class="quiz-options">
            <button class="quiz-option" data-value="sweet">Сладкий</button>
            <button class="quiz-option" data-value="bitter">Терпкий</button>
            <button class="quiz-option" data-value="fruity">Фруктовый</button>
            <button class="quiz-option" data-value="herbal">Травяной</button>
          </div>
          <div class="quiz-nav">
            <button class="quiz-prev">Назад</button>
            <button class="quiz-skip" data-action="skip-question">Пропустить вопрос</button>
          </div>
        </div>
      </div>

      <div class="filter-panel">
        <h3>Фильтры</h3>
        <div class="filter-options">
          <div class="filter-group">
            <label>Эффект:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="effect" data-value="energy">Бодрость</button>
              <button class="filter-button" data-filter="effect" data-value="relax">Релакс</button>
              <button class="filter-button" data-filter="effect" data-value="focus">Концентрация</button>
            </div>
          </div>
          <div class="filter-group">
            <label>Время:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="time" data-value="morning">Утро</button>
              <button class="filter-button" data-filter="time" data-value="day">День</button>
              <button class="filter-button" data-filter="time" data-value="evening">Вечер</button>
            </div>
          </div>
          <div class="filter-group">
            <label>Вкус:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="taste" data-value="sweet">Сладкий</button>
              <button class="filter-button" data-filter="taste" data-value="bitter">Терпкий</button>
              <button class="filter-button" data-filter="taste" data-value="fruity">Фруктовый</button>
              <button class="filter-button" data-filter="taste" data-value="herbal">Травяной</button>
            </div>
          </div>
        </div>
      </div>

      <div id="recommendations" class="recommendations"></div>
    </div>
  `;

  initializeQuiz();
  initializeFilters();
}

function initializeQuiz() {
  const allQuizSteps = document.querySelectorAll(".quiz-step");
  allQuizSteps.forEach((step) => {
    const optionsContainer = step.querySelector(".quiz-options");

    if (optionsContainer) {
      const optionCount = optionsContainer.querySelectorAll(".quiz-option").length;

      if (optionCount > 0) {
        optionsContainer.classList.add("items-" + optionCount);
      }
    }
  });

  const quizOptions = document.querySelectorAll(".quiz-option");
  const prevButtons = document.querySelectorAll(".quiz-prev");
  const skipButtons = document.querySelectorAll(".quiz-skip");

  const userAnswers = {
    mood: null,
    time: null,
    taste: null,
  };

  quizOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const step = this.closest(".quiz-step");
      const value = this.getAttribute("data-value");
      const stepId = step.id;

      if (stepId === "step-mood") userAnswers.mood = value;
      if (stepId === "step-time") userAnswers.time = value;
      if (stepId === "step-taste") userAnswers.taste = value;

      step.querySelectorAll(".quiz-option").forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      let nextStep;
      if (stepId === "step-mood") {
        nextStep = "step-time";
        animateStepTransition("step-mood", "step-time");
      } else if (stepId === "step-time") {
        nextStep = "step-taste";
        animateStepTransition("step-time", "step-taste");
      } else if (stepId === "step-taste") {
        setCookie("quizState", {
          status: "completed",
          answers: userAnswers,
          currentStep: null,
          completedAt: new Date().toISOString(),
        });
        showQuizResults(userAnswers);
        return;
      }

      setCookie("quizState", {
        status: "in_progress",
        answers: userAnswers,
        currentStep: nextStep,
        updatedAt: new Date().toISOString(),
      });
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const step = this.closest(".quiz-step");
      const stepId = step.id;

      if (stepId === "step-time") {
        animateStepTransition("step-time", "step-mood", true);
      } else if (stepId === "step-taste") {
        animateStepTransition("step-taste", "step-time", true);
      }
    });
  });

  skipButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const action = this.getAttribute("data-action");

      if (action === "skip-all") {
        skipEntireQuiz();
      } else if (action === "skip-question") {
        const step = this.closest(".quiz-step");
        const stepId = step.id;

        if (stepId === "step-time") {
          setCookie("quizState", {
            status: "in_progress",
            answers: userAnswers,
            currentStep: "step-taste",
            updatedAt: new Date().toISOString(),
          });
          animateStepTransition("step-time", "step-taste");
        } else if (stepId === "step-taste") {
          setCookie("quizState", {
            status: "completed",
            answers: userAnswers,
            currentStep: null,
            completedAt: new Date().toISOString(),
          });
          showQuizResults(userAnswers);
        }
      }
    });
  });
}

function getEffectName(effectKey) {
  if (effectKey === "energy") return "Взбодриться";
  if (effectKey === "relax") return "Расслабиться";
  if (effectKey === "focus") return "Сконцентрироваться";
  return effectKey;
}

function skipEntireQuiz() {
  setCookie("quizState", {
    status: "skipped",
    answers: null,
    currentStep: null,
    skippedAt: new Date().toISOString(),
  });

  showQuizCompletedState({
    status: "skipped",
    answers: null,
  });
}

function dismissAndSkipQuiz() {
  setCookie("quizState", {
    status: "skipped",
    answers: null,
    currentStep: null,
    skippedAt: new Date().toISOString(),
  });

  const quizInProgressState = document.querySelector(".quiz-in-progress-state");
  animateDismissWithTitleChange(quizInProgressState, "Выберите свой идеальный чай");
}
function animateStepTransition(fromStepId, toStepId, reverse = false) {
  const fromStep = document.getElementById(fromStepId);
  const toStep = document.getElementById(toStepId);

  if (reverse) {
    fromStep.classList.add("slide-right");
    setTimeout(() => {
      fromStep.classList.remove("active");
      fromStep.classList.remove("slide-right");
      toStep.classList.add("active");
      toStep.classList.add("slide-from-left");
      setTimeout(() => {
        toStep.classList.remove("slide-from-left");
      }, 300);
    }, 300);
  } else {
    fromStep.classList.add("slide-left");
    setTimeout(() => {
      fromStep.classList.remove("active");
      fromStep.classList.remove("slide-left");
      toStep.classList.add("active");
      toStep.classList.add("slide-from-right");
      setTimeout(() => {
        toStep.classList.remove("slide-from-right");
      }, 300);
    }, 300);
  }
}

function initializeFilters() {
  const filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");
      const value = this.getAttribute("data-value");

      this.classList.toggle("active");

      applyFilters();
    });
  });
}

function applyFilters() {
  const activeFilters = {
    effect: [],
    time: [],
    taste: [],
  };

  document.querySelectorAll(".filter-button.active").forEach((button) => {
    const filter = button.getAttribute("data-filter");
    const value = button.getAttribute("data-value");

    if (activeFilters[filter]) {
      activeFilters[filter].push(value);
    }
  });

  showFilteredTeas(activeFilters);
}

function showQuizResults(answers) {
  const sectionTitle = document.querySelector("#calculator .section-title");
  if (sectionTitle) {
    sectionTitle.textContent = "Вот что мы подобрали для вас";
  }

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.classList.remove("active");
  });

  if (answers.mood) {
    document.querySelector(`.filter-button[data-filter="effect"][data-value="${answers.mood}"]`)?.classList.add("active");
  }

  if (answers.time) {
    document.querySelector(`.filter-button[data-filter="time"][data-value="${answers.time}"]`)?.classList.add("active");
  }

  if (answers.taste) {
    document.querySelector(`.filter-button[data-filter="taste"][data-value="${answers.taste}"]`)?.classList.add("active");
  }

  document.querySelectorAll(".quiz-step").forEach((step) => {
    step.classList.remove("active");
  });
  document.querySelector(".filter-panel").classList.add("active");

  initializeFilters();
  applyFilters();
}

function showFilteredTeas(filters) {
  const recommendationsContainer = document.getElementById("recommendations");
  recommendationsContainer.innerHTML = "";

  if (!window.teaProducts || window.teaProducts.length === 0) {
    recommendationsContainer.innerHTML = `
      <div class="no-results">
        <p>Скоро здесь появится каталог чая! А пока <a href="#" onclick="scrollToSection('#final-cta')">напишите Павлу</a> - он расскажет о своих чаях и поможет сделать заказ! 🍵</p>
      </div>
    `;
    return;
  }

  let filteredProducts = window.teaProducts;

  if (filters.effect.length > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.effects && product.effects.some((effect) => filters.effect.includes(effect))
    );
  }

  if (filters.time.length > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.timeOfDay && product.timeOfDay.some((time) => filters.time.includes(time))
    );
  }

  if (filters.taste.length > 0) {
    filteredProducts = filteredProducts.filter((product) => product.taste && product.taste.some((taste) => filters.taste.includes(taste)));
  }

  if (filteredProducts.length === 0) {
    recommendationsContainer.innerHTML = `
      <div class="no-results">
        <p>По выбранным критериям чай не найден. Попробуйте изменить фильтры или <a href="#" onclick="scrollToSection('#final-cta')">напишите Павлу</a> - он поможет подобрать что-то особенное!</p>
      </div>
    `;
    return;
  }

  filteredProducts.forEach((product) => {
    const recommendedCard = createRecommendedCard(product);
    recommendationsContainer.appendChild(recommendedCard);
  });

  const cards = recommendationsContainer.querySelectorAll(".product-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.5s ease";

    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
}
function initializeModal() {
  const modal = document.getElementById("product-modal");
  const closeBtn = document.querySelector(".modal-close");

  closeBtn.onclick = closeModal;
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function openProductModal(product) {
  const modal = document.getElementById("product-modal");
  if (!modal) return;

  const oldCalc = modal.querySelector(".modal-cost-calculator");
  if (oldCalc) {
    oldCalc.remove();
  }

  document.getElementById("modal-title").textContent = product.name;
  document.getElementById("modal-price").textContent = `${product.priceNumber} ₽ за ${product.weight}г`;
  document.getElementById("modal-description").innerHTML = product.description;

  const brewingTipsContainer = document.getElementById("modal-brewing-tips");
  brewingTipsContainer.innerHTML = "";
  if (product.brewingTips) {
    const brewingTipsTitle = document.createElement("h4");
    brewingTipsTitle.textContent = "Советы по завариванию";
    brewingTipsTitle.style.marginBottom = "6px";
    brewingTipsContainer.appendChild(brewingTipsTitle);
    const brewingTipsParagraph = document.createElement("p");
    brewingTipsParagraph.innerHTML = product.brewingTips;
    brewingTipsContainer.appendChild(brewingTipsParagraph);
  }

  const effectsContainer = document.getElementById("modal-effects");
  effectsContainer.innerHTML = "";
  if (product.effects && product.effects.length > 0) {
    product.effects.forEach((effect) => {
      const effectTag = document.createElement("span");
      effectTag.className = "effect-tag";
      effectTag.textContent = getEffectName(effect);
      effectsContainer.appendChild(effectTag);
    });
  }

  const storyContainer = document.getElementById("modal-story");
  storyContainer.innerHTML = "";
  if (product.story) {
    const storyTitle = document.createElement("h4");
    storyTitle.textContent = "История чая";
    storyTitle.style.marginTop = "20px";
    storyTitle.style.marginBottom = "10px";
    storyContainer.appendChild(storyTitle);
    const storyParagraph = document.createElement("p");
    storyParagraph.innerHTML = product.story;
    storyContainer.appendChild(storyParagraph);
  }

  const calcContainer = document.createElement("div");
  calcContainer.className = "cost-calculator modal-cost-calculator";

  const basePrice = product.priceNumber;
  const baseWeight = product.weight;
  const pricePerGram = basePrice / baseWeight;

  const weightOptions = [50, 100, 200, 500];
  const weightOptionsHtml = weightOptions
    .map((w) => `<div class="weight-option ${w === baseWeight ? "active" : ""}" data-weight="${w}">${w}г</div>`)
    .join("");

  calcContainer.innerHTML = `
    <p class="calculator-title">Рассчитать стоимость:</p>
    <div class="weight-selector" data-product-id="${product.id}">
        ${weightOptionsHtml}
        <div class="weight-custom">
            <div class="weight-input" data-placeholder="Свой вес, г">
                <span class="weight-display">Свой вес, г</span>
                <input type="number" class="weight-real-input" min="10" max="1000" step="10">
            </div>
        </div>
    </div>

    <div class="calculator-options">
        <div class="calc-option-group">
            <label>Упаковка:</label>
            <div class="calc-option-buttons">
                <button class="calc-option-btn active" data-type="packaging" data-value="standard" data-price="0">Стандартная</button>
                <button class="calc-option-btn" data-type="packaging" data-value="gift" data-price="150">Подарочная (+150 ₽)</button>
            </div>
        </div>
        <div class="calc-option-group">
            <label>Помол:</label>
            <div class="calc-option-buttons">
                <button class="calc-option-btn active" data-type="grinding" data-value="leaf" data-price="0">Цельный лист</button>
                <button class="calc-option-btn" data-type="grinding" data-value="ground" data-price="50">Помол (+50 ₽)</button>
            </div>
        </div>
        <div class="calc-option-group">
            <label>Добавки (можно выбрать несколько):</label>
            <div class="calc-option-buttons">
                <button class="calc-option-btn" data-type="addon" data-value="honey" data-price="80">Мёд (+80 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="ginger" data-price="40">Имбирь (+40 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="lemon" data-price="30">Лимон (+30 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="mint" data-price="50">Мята (+50 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="thyme" data-price="50">Чабрец (+50 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="cinnamon" data-price="40">Корица (+40 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="clove" data-price="40">Гвоздика (+40 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="cardamom" data-price="60">Кардамон (+60 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="star_anise" data-price="60">Бадьян (+60 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="goji" data-price="100">Ягоды Годжи (+100 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="rosehip" data-price="70">Шиповник (+70 ₽)</button>
                <button class="calc-option-btn" data-type="addon" data-value="chamomile" data-price="50">Ромашка (+50 ₽)</button>
            </div>
        </div>
        <div class="calc-option-group">
            <label for="custom-comment">Если не нашли нужную добавку, напишите нам:</label>
            <textarea id="custom-comment" class="custom-comment-input" placeholder="Например: хочу добавить в чай корень женьшеня..."></textarea>
        </div>
    </div>

    <div class="modal-price-breakdown">
        <p>Вес: <span id="price-breakdown-weight">${baseWeight}г</span> + <span id="price-breakdown-weight-cost">...</span></p>
        <p>Упаковка: <span id="price-breakdown-packaging">Стандартная</span> + <span id="price-breakdown-packaging-cost">0 ₽</span></p>
        <p>Помол: <span id="price-breakdown-grinding">Цельный лист</span> + <span id="price-breakdown-grinding-cost">0 ₽</span></p>
        <div id="price-breakdown-addons"></div>
    </div>

    <div class="modal-total-price">
        Итого: <span id="modal-final-price">${formatPrice(basePrice)}</span>
    </div>
  `;

  const orderButton = document.getElementById("modal-order-button");
  orderButton.parentElement.insertBefore(calcContainer, orderButton);

  initializeModalCalculator(calcContainer, product, pricePerGram);

  setupModalImages(product);

  orderButton.onclick = function () {
    const { selectedWeight, options, finalPrice } = getCalculatorData(product);

    const message = createRecommendationMessage(
      product.name,
      finalPrice,
      product.shortDescription,
      "Открыл карточку товара",
      selectedWeight,
      options
    );
    window.open(getTelegramUrl(message), "_blank");
    return false;
  };

  modal.style.display = "block";
  setTimeout(() => {
    modal.classList.add("visible");
  }, 10);
}

function setupModalImages(product) {
  const mainImage = document.getElementById("modal-main-image");
  const gallery = document.querySelector(".modal-gallery");
  const prevBtn = document.getElementById("modal-img-prev");
  const nextBtn = document.getElementById("modal-img-next");
  const imageWrapper = document.querySelector(".modal-main-image-wrapper");
  const imgCounter = document.getElementById("modal-img-counter");
  const imgCurrent = document.getElementById("modal-img-current");
  const imgTotal = document.getElementById("modal-img-total");

  const images = [product.images.main, ...(product.images.gallery || [])];
  let currentIndex = 0;

  const updateImage = (index) => {
    mainImage.classList.add("changing");

    setTimeout(() => {
      currentIndex = index;
      const newSrc = images[currentIndex];
      mainImage.src = newSrc;
      mainImage.onerror = function () {
        this.onerror = null;
        this.src = createPlaceholderDataURL(newSrc, product.name);
      };

      mainImage.onload = function () {
        mainImage.classList.remove("changing");
      };

      if (imgCurrent && imgTotal) {
        imgCurrent.textContent = currentIndex + 1;
      }

      gallery.querySelectorAll("img").forEach((img, i) => {
        if (i === currentIndex) {
          img.classList.add("active");
          img.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        } else {
          img.classList.remove("active");
        }
      });
    }, 150);
  };

  if (images.length <= 1) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.add("hidden");
    imgCounter.classList.add("hidden");
    imageWrapper.classList.remove("has-multiple-images");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
    imgCounter.classList.remove("hidden");
    imageWrapper.classList.add("has-multiple-images");

    if (imgTotal) {
      imgTotal.textContent = images.length;
    }
  }

  prevBtn.onclick = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(newIndex);
  };

  nextBtn.onclick = () => {
    const newIndex = (currentIndex + 1) % images.length;
    updateImage(newIndex);
  };

  const handleKeyNavigation = (e) => {
    if (images.length <= 1) return;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const newIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage(newIndex);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      const newIndex = (currentIndex + 1) % images.length;
      updateImage(newIndex);
    }
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (images.length <= 1) return;

    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage(newIndex);
      } else {
        const newIndex = (currentIndex + 1) % images.length;
        updateImage(newIndex);
      }
    }
  };

  document.addEventListener("keydown", handleKeyNavigation);
  mainImage.addEventListener("touchstart", handleTouchStart, { passive: true });
  mainImage.addEventListener("touchend", handleTouchEnd, { passive: true });

  imageWrapper.handleKeyNavigation = handleKeyNavigation;
  imageWrapper.handleTouchStart = handleTouchStart;
  imageWrapper.handleTouchEnd = handleTouchEnd;

  gallery.innerHTML = "";
  images.forEach((imageSrc, index) => {
    const thumb = document.createElement("img");
    thumb.src = imageSrc;
    thumb.alt = `${product.name} - фото ${index + 1}`;
    thumb.onerror = function () {
      this.onerror = null;
      this.src = createPlaceholderDataURL(imageSrc, `${product.name} - фото ${index + 1}`);
    };
    thumb.onclick = () => updateImage(index);
    gallery.appendChild(thumb);
  });

  updateImage(0);
}

function closeModal() {
  const modal = document.getElementById("product-modal");
  const imageWrapper = document.querySelector(".modal-main-image-wrapper");
  const mainImage = document.getElementById("modal-main-image");

  if (imageWrapper) {
    if (imageWrapper.handleKeyNavigation) {
      document.removeEventListener("keydown", imageWrapper.handleKeyNavigation);
      delete imageWrapper.handleKeyNavigation;
    }
    if (imageWrapper.handleTouchStart) {
      mainImage.removeEventListener("touchstart", imageWrapper.handleTouchStart);
      delete imageWrapper.handleTouchStart;
    }
    if (imageWrapper.handleTouchEnd) {
      mainImage.removeEventListener("touchend", imageWrapper.handleTouchEnd);
      delete imageWrapper.handleTouchEnd;
    }
  }

  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function initializeAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".fade-in-up").forEach((el) => {
    observer.observe(el);
  });
}

function getCalculatorData(product, specificContainer = null) {
  let calcContainer = specificContainer;

  if (!calcContainer) {
    const modalCalc = document.querySelector(".modal-cost-calculator");
    const cardCalc = document.querySelector(".cost-calculator");
    calcContainer = modalCalc || cardCalc;
  }

  let selectedWeight = null;
  let options = {};
  let finalPrice = product ? `${product.priceNumber} ₽ за ${product.weight}г` : null;

  if (calcContainer) {
    const weightSelector = calcContainer.querySelector(".weight-selector");
    if (weightSelector) {
      const customInput = weightSelector.querySelector(".weight-input");
      const realInput = customInput?.querySelector(".weight-real-input");
      const displaySpan = customInput?.querySelector(".weight-display");
      const activeWeightBtn = weightSelector.querySelector(".weight-option.active");

      if (customInput?.classList.contains("active")) {
        if (realInput && realInput.value.trim()) {
          selectedWeight = realInput.value.trim();
        } else if (displaySpan && displaySpan.textContent.trim()) {
          const weightFromDisplay = displaySpan.textContent.replace(/\D/g, "");
          if (weightFromDisplay) {
            selectedWeight = weightFromDisplay;
          }
        }
      } else if (activeWeightBtn && activeWeightBtn.dataset.weight) {
        selectedWeight = activeWeightBtn.dataset.weight;
      }

      if (!selectedWeight) {
        const defaultWeightBtn = weightSelector.querySelector(".weight-option[data-weight]");
        if (defaultWeightBtn) {
          selectedWeight = defaultWeightBtn.dataset.weight;
        } else {
          selectedWeight = "100";
        }
      }
    }

    const isModalCalculator = calcContainer.classList.contains("modal-cost-calculator");

    if (isModalCalculator) {
      const packagingElement = calcContainer.querySelector('.calc-option-btn[data-type="packaging"].active');
      const grindingElement = calcContainer.querySelector('.calc-option-btn[data-type="grinding"].active');
      const addonElements = calcContainer.querySelectorAll('.calc-option-btn[data-type="addon"].active');
      const customCommentElement = calcContainer.querySelector('#custom-comment');

      const packaging = packagingElement?.textContent.split("(")[0].trim();
      if (packaging) options.packaging = packaging;

      const grinding = grindingElement?.textContent.split("(")[0].trim();
      if (grinding) options.grinding = grinding;

      const addons = [...addonElements].map(el => el.textContent.split("(")[0].trim());
      if (addons.length > 0) options.addons = addons;

      const customComment = customCommentElement?.value.trim();
      if (customComment) options.customComment = customComment;

      const priceElement = document.getElementById("modal-final-price");
      if (priceElement && priceElement.textContent.trim()) {
        finalPrice = priceElement.textContent.trim();
      }
    } else {
      const priceElement = calcContainer.querySelector(".calculated-price");
      if (priceElement && priceElement.textContent.trim()) {
        finalPrice = priceElement.textContent.trim();
      } else if (selectedWeight && product) {
        const basePrice = product.priceNumber;
        const baseWeight = product.weight;
        const pricePerGram = basePrice / baseWeight;
        const calculatedPrice = parseInt(selectedWeight) * pricePerGram;
        finalPrice = formatPrice(calculatedPrice);
      }
    }
  }

  return { selectedWeight, options, finalPrice };
}

function contactAboutRecommendation(productId = null, selectedEffect = null, buttonElement = null) {
  let message;

  if (productId && window.teaProducts) {
    const product = window.teaProducts.find((p) => p.id === productId);
    if (product) {
      const effectName = getEffectName(selectedEffect);

      let specificContainer = null;

      if (buttonElement) {
        const parentCard = buttonElement.closest(".product-card");
        if (parentCard) {
          specificContainer = parentCard.querySelector(".cost-calculator");
        }
      }

      if (!specificContainer) {
        const productCards = document.querySelectorAll(".product-card");
        productCards.forEach((card) => {
          const cardCalculator = card.querySelector(".cost-calculator");
          const weightSelector = cardCalculator?.querySelector(".weight-selector");
          if (weightSelector && weightSelector.dataset.productId === productId) {
            specificContainer = cardCalculator;
          }
        });
      }

      const { selectedWeight, options, finalPrice } = getCalculatorData(product, specificContainer);

      message = createRecommendationMessage(product.name, finalPrice, product.shortDescription, effectName, selectedWeight, options);
    }
  }

  if (!message) {
    message = "Привет, Паша! 🍵\n\nХочу узнать больше о твоих чаях и сделать заказ. Расскажи, что у тебя есть? 😊";
  }

  const telegramUrl = getTelegramUrl(message);
  window.open(telegramUrl, "_blank");
}

function getTelegramUrl(message = null) {
  const msg = message || "Привет, Паша! 🍵\n\nХочу узнать больше о твоих чаях и сделать заказ. Расскажи, что у тебя есть? 😊";
  const encodedMessage = encodeURIComponent(msg);
  return `https://t.me/${window.CONFIG.TELEGRAM_USERNAME}?text=${encodedMessage}`;
}

function createRecommendationMessage(productName, productPrice, productDescription, effectName, selectedWeight = null, options = null) {
  const GREETING = "Привет, Паша! 🍵";
  const INTRO = "Я воспользовался твоим калькулятором подбора чая:";
  const PRODUCT_PREFIX = "✨ Я выбрал:";
  const PRICE_PREFIX = "💰 Итоговая цена:";
  const OPTIONS_PREFIX = "⚙️ Опции:";
  const QUESTION = "Расскажи подробнее про этот чай и как лучше его заказать? 😊";

  let message = `${GREETING}\n\n`;

  message += `${INTRO}\n`;

  const activeFilters = {
    effects: [],
    time: [],
    taste: [],
  };

  document.querySelectorAll(".filter-button.active").forEach((button) => {
    const filter = button.getAttribute("data-filter");
    const value = button.getAttribute("data-value");
    const text = button.textContent.trim();

    if (filter === "effect") {
      activeFilters.effects.push(text);
    } else if (filter === "time") {
      activeFilters.time.push(text);
    } else if (filter === "taste") {
      activeFilters.taste.push(text);
    }
  });

  if (activeFilters.effects.length > 0) {
    message += `🎯 Эффект: ${activeFilters.effects.join(", ")}\n`;
  }
  if (activeFilters.time.length > 0) {
    message += `🕐 Время: ${activeFilters.time.join(", ")}\n`;
  }
  if (activeFilters.taste.length > 0) {
    message += `👅 Вкус: ${activeFilters.taste.join(", ")}\n`;
  }

  message += `\n`;

  message += `${PRODUCT_PREFIX} "${productName}"\n`;

  if (selectedWeight || options) {
    message += `${OPTIONS_PREFIX}\n`;

    const optionsList = [];
    if (selectedWeight) {
      let weightText = selectedWeight.toString().trim();

      if (/^\d+$/.test(weightText)) {
        weightText += "г";
      }

      optionsList.push(`Вес: ${weightText}`);
    }
    if (options?.packaging) optionsList.push(`Упаковка: ${options.packaging}`);
    if (options?.grinding) optionsList.push(`Помол: ${options.grinding}`);
    if (options?.addons && options.addons.length > 0) {
        optionsList.push(`Добавки: ${options.addons.join(', ')}`);
    }

    if (optionsList.length > 0) {
      message += ` - ${optionsList.join("\n - ")}\n`;
    }

    if (options?.customComment) {
        message += `\n📝 Комментарий: ${options.customComment}\n`;
    }
  }

  message += `\n${PRICE_PREFIX} ${productPrice}\n\n`;
  message += `${QUESTION}`;
  return message;
}

function formatPrice(price) {
  if (typeof price === "number") {
    return `${price.toLocaleString("ru-RU")} ₽`;
  }
  return price;
}

function createImageWithPlaceholder(imageSrc, altText, className = "", isLazy = true) {
  const placeholder = createPlaceholderDataURL(imageSrc, altText);
  const lazyLoad = isLazy ? `loading="lazy"` : "";
  return `<img src="${imageSrc}" alt="${altText}" class="${className}" ${lazyLoad} onerror="this.onerror=null; this.src='${placeholder}';">`;
}

function createPlaceholderSVG(originalPath, altText) {
  const width = 400;
  const height = 300;
  const fontSize = 18;
  const pathFontSize = 12;

  const escapedAlt = altText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const escapedPath = originalPath
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f0f0f0"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="${fontSize}" fill="#B0B0B0">
      <tspan x="50%">${escapedAlt}</tspan>
      <tspan x="50%" dy="1.5em" font-size="${pathFontSize}" fill="#C0C0C0">${escapedPath}</tspan>
    </text>
  </svg>`;
}

function createPlaceholderDataURL(originalPath, altText) {
  const svgString = createPlaceholderSVG(originalPath, altText);
  const encodedSvg = btoa(String.fromCharCode.apply(null, new Uint8Array(new TextEncoder().encode(svgString))));
  return `data:image/svg+xml;base64,${encodedSvg}`;
}

function checkImageExists(imageSrc) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imageSrc;
  });
}

function initializeSmoothScroll() {
  const heroCtaButton = document.getElementById("hero-cta-button");
  if (heroCtaButton) {
    heroCtaButton.addEventListener("click", (e) => {
      e.preventDefault();
      setTimeout(() => {
        scrollToSection("#calculator", 1000);
      }, 100);
    });
  }
}

function scrollToSection(sectionId, duration = 1000) {
  const selector = sectionId.startsWith("#") ? sectionId : `#${sectionId}`;
  const section = document.querySelector(selector);
  if (!section) return;

  const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - 20;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

window.scrollToSection = scrollToSection;
window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.contactAboutRecommendation = contactAboutRecommendation;
window.createPlaceholderDataURL = createPlaceholderDataURL;
window.restartQuiz = restartQuiz;
window.continueQuiz = continueQuiz;
window.showFiltersOnly = showFiltersOnly;
window.dismissQuizNotification = dismissQuizNotification;
window.skipEntireQuiz = skipEntireQuiz;
window.dismissAndSkipQuiz = dismissAndSkipQuiz;

function createRecommendedCard(product, selectedEffect = null) {
  const card = document.createElement("div");
  card.className = "product-card fade-in-up recommended-card";

  const imageElement = createImageWithPlaceholder(product.images.thumb, product.name, "product-image");

  const basePrice = product.priceNumber;
  const baseWeight = product.weight;
  const pricePerGram = basePrice / baseWeight;

  const weightOptions = [50, 100, 200, 500];
  const weightOptionsHtml = weightOptions
    .map((w) => `<div class="weight-option ${w === baseWeight ? "active" : ""}" data-weight="${w}">${w}г</div>`)
    .join("");

  card.innerHTML = `
        <div class="product-image-container" onclick="openProductModal(teaProducts.find(p => p.id === '${product.id}'))">
            ${imageElement}
        </div>
        <div class="product-info">
            <h4 class="product-title">${product.name}</h4>
            <p class="product-price">${product.priceNumber} ₽ за ${product.weight}г</p>
            <p class="product-description">${product.shortDescription}</p>

            <div class="cost-calculator">
                <p class="calculator-title">Рассчитать стоимость:</p>
                <div class="weight-selector" data-product-id="${product.id}">
                    ${weightOptionsHtml}
                    <div class="weight-custom">
                        <div class="weight-input" data-placeholder="Свой вес, г">
                            <span class="weight-display">Свой вес, г</span>
                            <input type="number" class="weight-real-input" min="10" max="1000" step="10">
                        </div>
                    </div>
                </div>
                <div class="calculated-price" data-price-per-gram="${pricePerGram}">
                    ${formatPrice(basePrice)}
                </div>
            </div>

            <div class="recommended-actions">
                <button class="recommended-details-btn" onclick="openProductModal(teaProducts.find(p => p.id === '${product.id}'))">
                    Подробнее
                </button>
                <button class="recommended-contact-btn" onclick="contactAboutRecommendation('${product.id}', '${selectedEffect}', this)">
                    Заказать
                </button>
            </div>
        </div>
    `;
  setTimeout(() => {
    const weightSelector = card.querySelector(".weight-selector");
    if (weightSelector) {
      initializeWeightCalculator(weightSelector);
    }
  }, 10);

  return card;
}

function parsePrice(priceStr) {
  const matches = priceStr.match(/\d+/g);
  if (matches && matches.length > 0) {
    return parseInt(matches.join(""));
  }
  return 0;
}

function initializeWeightCalculator(weightSelector) {
  if (!weightSelector) {
    console.warn("Weight selector not found");
    return;
  }

  const initialActiveOption = weightSelector.querySelector(".weight-option.active");
  const defaultWeight = initialActiveOption ? parseInt(initialActiveOption.dataset.weight) : 50;
  const weightOptions = weightSelector.querySelectorAll(".weight-option");
  const priceElement = weightSelector.parentElement?.querySelector(".calculated-price");

  if (!priceElement) {
    console.warn("Price element not found");
    return;
  }

  const pricePerGram = parseFloat(priceElement.getAttribute("data-price-per-gram")) || 0;
  const customWeightButton = weightSelector.querySelector(".weight-input");
  const realInput = customWeightButton?.querySelector(".weight-real-input");
  const displaySpan = customWeightButton?.querySelector(".weight-display");

  if (!customWeightButton || !realInput || !displaySpan) {
    console.warn("Custom weight elements not found");
  }

  const updatePrice = (weight) => {
    if (!priceElement) return;
    if (weight > 0 && pricePerGram > 0) {
      const calculatedPrice = weight * pricePerGram;
      priceElement.textContent = formatPrice(calculatedPrice);
    } else {
      const baseWeightOption = weightSelector.querySelector(".weight-option.active") || weightSelector.querySelector(".weight-option");
      if (baseWeightOption) {
        const baseWeight = parseInt(baseWeightOption.getAttribute("data-weight"));
        priceElement.textContent = formatPrice(baseWeight * pricePerGram);
      }
    }
  };

  const updateDisplay = (value) => {
    if (displaySpan) {
      if (value && parseInt(value) > 0) {
        displaySpan.textContent = value + "г";
      } else {
        displaySpan.textContent = customWeightButton.getAttribute("data-placeholder") || "Свой вес, г";
      }
    }
  };

  const enterEditMode = () => {
    if (!customWeightButton || !realInput || !displaySpan) return;

    customWeightButton.classList.add("editable");

    const currentValue = displaySpan.textContent.replace(/\D/g, "");
    if (currentValue) {
      realInput.value = currentValue;
    }

    setTimeout(() => {
      try {
        realInput.focus();
        if (realInput.value && realInput.setSelectionRange) {
          realInput.setSelectionRange(realInput.value.length, realInput.value.length);
        }
      } catch (e) {
        console.warn("Could not set selection range:", e);
      }
    }, 50);
  };

  const exitEditMode = () => {
    if (!customWeightButton || !realInput) return;

    customWeightButton.classList.remove("editable");
    const value = parseInt(realInput.value) || 0;
    updateDisplay(value > 0 ? value.toString() : "");
    updatePrice(value);

    if (value === 0) {
      updateDisplay("");
      customWeightButton.classList.remove("active");
      const defaultOption = weightSelector.querySelector(`.weight-option[data-weight="${defaultWeight}"]`);
      if (defaultOption) {
        defaultOption.classList.add("active");
      }
      updatePrice(defaultWeight);
    }
  };

  weightOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      e.stopPropagation();
      weightOptions.forEach((opt) => opt.classList.remove("active"));
      this.classList.add("active");

      if (customWeightButton) {
        customWeightButton.classList.remove("active", "editable");
        if (realInput) realInput.value = "";
        updateDisplay("");
      }

      const weight = parseInt(this.getAttribute("data-weight")) || 0;
      updatePrice(weight);
    });
  });

  if (customWeightButton && realInput && displaySpan) {
    customWeightButton.addEventListener("click", (e) => {
      e.stopPropagation();
      weightOptions.forEach((opt) => opt.classList.remove("active"));
      customWeightButton.classList.add("active");
      enterEditMode();
    });

    realInput.addEventListener("input", function () {
      let value = this.value.replace(/\D/g, "");
      let numericValue = parseInt(value) || 0;

      if (numericValue > 1000) {
        numericValue = 1000;
        value = "1000";
        this.value = value;
      } else {
        this.value = value;
      }

      updatePrice(numericValue);
    });

    realInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === "Escape") {
        exitEditMode();
        return;
      }

      if (!/\d/.test(e.key) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        return;
      }

      if (["Backspace", "Delete"].includes(e.key)) {
        let value = this.value.replace(/\D/g, "");
        if (value.length <= 1 && e.key === "Backspace") {
          setTimeout(() => {
            updatePrice(0);
          }, 0);
        }
      }
    });

    realInput.addEventListener("blur", exitEditMode);

    realInput.addEventListener("keypress", function (e) {
      if (!/\d/.test(e.key) && !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)) {
        e.preventDefault();
      }
    });
  }
}

function initializeModalCalculator(container, product, pricePerGram) {
  const weightSelector = container.querySelector(".weight-selector");
  if (!weightSelector) {
    console.warn("Weight selector not found");
    return;
  }
  const initialActiveOption = weightSelector.querySelector(".weight-option.active");
  const defaultWeight = initialActiveOption ? parseInt(initialActiveOption.dataset.weight) : 50;
  const breakdownWeightEl = document.getElementById("price-breakdown-weight");
  const breakdownWeightCostEl = document.getElementById("price-breakdown-weight-cost");
  const breakdownPackagingEl = document.getElementById("price-breakdown-packaging");
  const breakdownPackagingCostEl = document.getElementById("price-breakdown-packaging-cost");
  const breakdownGrindingEl = document.getElementById("price-breakdown-grinding");
  const breakdownGrindingCostEl = document.getElementById("price-breakdown-grinding-cost");
  const finalPriceEl = document.getElementById("modal-final-price");
  const packagingButtons = container.querySelectorAll('.calc-option-btn[data-type="packaging"]');
  const grindingButtons = container.querySelectorAll('.calc-option-btn[data-type="grinding"]');

  const updateDetailedPrice = () => {
    let selectedWeight = 0;
    const activeWeightOption = weightSelector.querySelector(".weight-option.active");
    const customWeightInput = weightSelector.querySelector(".weight-input");
    const realInput = customWeightInput?.querySelector(".weight-real-input");

    if (customWeightInput && customWeightInput.classList.contains("active")) {
      selectedWeight = parseInt(realInput.value) || 0;
    } else if (activeWeightOption) {
      selectedWeight = parseInt(activeWeightOption.dataset.weight) || 0;
    }

    const activePackagingBtn = container.querySelector('.calc-option-btn[data-type="packaging"].active');
    const packagingCost = activePackagingBtn ? parseFloat(activePackagingBtn.dataset.price) : 0;
    const packagingName = activePackagingBtn ? activePackagingBtn.textContent.split("(")[0].trim() : "Стандартная";

    const activeGrindingBtn = container.querySelector('.calc-option-btn[data-type="grinding"].active');
    const grindingCost = activeGrindingBtn ? parseFloat(activeGrindingBtn.dataset.price) : 0;
    const grindingName = activeGrindingBtn ? activeGrindingBtn.textContent.split("(")[0].trim() : "Цельный лист";

    const activeAddonBtns = container.querySelectorAll('.calc-option-btn[data-type="addon"].active');
    let addonsCost = 0;
    const addonsBreakdownEl = document.getElementById("price-breakdown-addons");
    if (addonsBreakdownEl) addonsBreakdownEl.innerHTML = '';

    activeAddonBtns.forEach(btn => {
        const addonPrice = parseFloat(btn.dataset.price) || 0;
        addonsCost += addonPrice;
        const addonName = btn.textContent.split("(")[0].trim();
        if (addonsBreakdownEl) {
            const p = document.createElement('p');
            p.appendChild(document.createTextNode('Добавка:'));

            const nameSpan = document.createElement('span');
            nameSpan.textContent = addonName;
            p.appendChild(nameSpan);

            const plusSpan = document.createElement('span'); // This will be the hidden span for the '+'
            p.appendChild(plusSpan);

            const priceSpan = document.createElement('span');
            priceSpan.textContent = formatPrice(addonPrice);
            p.appendChild(priceSpan);

            addonsBreakdownEl.appendChild(p);
        }
    });

    const weightCost = selectedWeight * pricePerGram;
    const totalCost = weightCost + packagingCost + grindingCost + addonsCost;

    if (breakdownWeightEl) breakdownWeightEl.textContent = `${selectedWeight}г`;
    if (breakdownWeightCostEl) breakdownWeightCostEl.textContent = formatPrice(weightCost);

    if (breakdownPackagingEl) breakdownPackagingEl.textContent = packagingName;
    if (breakdownPackagingCostEl) breakdownPackagingCostEl.textContent = formatPrice(packagingCost);

    if (breakdownGrindingEl) breakdownGrindingEl.textContent = grindingName;
    if (breakdownGrindingCostEl) breakdownGrindingCostEl.textContent = formatPrice(grindingCost);

    if (finalPriceEl) finalPriceEl.textContent = formatPrice(totalCost);
  };

  [...packagingButtons, ...grindingButtons].forEach((button) => {
    button.addEventListener("click", function () {
      const type = this.dataset.type;
      container.querySelectorAll(`.calc-option-btn[data-type="${type}"]`).forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      updateDetailedPrice();
    });
  });

  const addonButtons = container.querySelectorAll('.calc-option-btn[data-type="addon"]');
  addonButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      updateDetailedPrice();
    });
  });

  const weightOptions = weightSelector.querySelectorAll(".weight-option");
  const customWeightButton = weightSelector.querySelector(".weight-input");
  const realInput = customWeightButton?.querySelector(".weight-real-input");
  const displaySpan = customWeightButton?.querySelector(".weight-display");

  const updateDisplay = (value) => {
    if (displaySpan) {
      if (value && parseInt(value) > 0) {
        displaySpan.textContent = value + "г";
      } else {
        displaySpan.textContent = customWeightButton.getAttribute("data-placeholder") || "Свой вес, г";
      }
    }
  };

  const exitEditMode = () => {
    if (!customWeightButton || !realInput) return;
    customWeightButton.classList.remove("editable");
    const value = parseInt(realInput.value) || 0;
    updateDisplay(value > 0 ? value.toString() : "");

    if (value === 0) {
      customWeightButton.classList.remove("active");
      const defaultOption = weightSelector.querySelector(`.weight-option[data-weight="${defaultWeight}"]`);
      if (defaultOption) {
        weightSelector.querySelectorAll(".weight-option").forEach((opt) => opt.classList.remove("active"));
        defaultOption.classList.add("active");
      }
    }
    updateDetailedPrice();
  };

  weightOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      e.stopPropagation();
      weightOptions.forEach((opt) => opt.classList.remove("active"));
      this.classList.add("active");
      if (customWeightButton) {
        customWeightButton.classList.remove("active", "editable");
        if (realInput) realInput.value = "";
        updateDisplay("");
      }
      updateDetailedPrice();
    });
  });

  if (customWeightButton && realInput && displaySpan) {
    customWeightButton.addEventListener("click", (e) => {
      e.stopPropagation();
      weightOptions.forEach((opt) => opt.classList.remove("active"));
      customWeightButton.classList.add("active");
      customWeightButton.classList.add("editable");
      const currentValue = displaySpan.textContent.replace(/\D/g, "");
      if (currentValue) realInput.value = currentValue;
      setTimeout(() => {
        try {
          realInput.focus();
          if (realInput.value && realInput.setSelectionRange) {
            realInput.setSelectionRange(realInput.value.length, realInput.value.length);
          }
        } catch (err) {
          console.warn("Could not focus or set selection on modal input:", err);
        }
      }, 50);
    });

    realInput.addEventListener("input", function () {
      let value = this.value.replace(/\D/g, "");
      let numericValue = parseInt(value) || 0;

      if (numericValue > 1000) {
        numericValue = 1000;
        value = "1000";
        this.value = value;
      } else {
        this.value = value;
      }

      updateDetailedPrice();
    });

    realInput.addEventListener("blur", exitEditMode);
    realInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === "Escape") {
        exitEditMode();
      }
    });
  }

  updateDetailedPrice();
}

function showQuizCompletedState(quizState) {
  const calculatorSection = document.getElementById("calculator");

  let titleText, descriptionText, showRecommendationActions;

  if (quizState.status === "completed") {
    titleText = "Вот что мы подобрали для вас";
    descriptionText =
      "На основе ваших ответов мы подобрали чай специально для вас! Вы также можете изменить фильтры или пройти опрос заново.";
    showRecommendationActions = true;
  } else {
    titleText = "Выбирайте сами";
    descriptionText =
      "Вы пропустили опрос, поэтому можете воспользоваться фильтрами или пройти опрос сейчас для персональных рекомендаций.";
    showRecommendationActions = false;
  }

  calculatorSection.innerHTML = `
    <div class="container">
      <h2 class="section-title">${titleText}</h2>
      <div class="quiz-completed-state">
        <p class="quiz-completed-description">${descriptionText}</p>
        <div class="quiz-completed-actions">
          <button class="quiz-restart-btn" onclick="restartQuiz()">Пройти опрос заново</button>
          <button class="quiz-dismiss-btn" onclick="dismissQuizNotification()">Спасибо, я сам!</button>
        </div>
      </div>

      <div class="filter-panel active">
        <h3>Фильтры</h3>
        <div class="filter-options">
          <div class="filter-group">
            <label>Эффект:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="effect" data-value="energy">Бодрость</button>
              <button class="filter-button" data-filter="effect" data-value="relax">Релакс</button>
              <button class="filter-button" data-filter="effect" data-value="focus">Концентрация</button>
            </div>
          </div>
          <div class="filter-group">
            <label>Время:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="time" data-value="morning">Утро</button>
              <button class="filter-button" data-filter="time" data-value="day">День</button>
              <button class="filter-button" data-filter="time" data-value="evening">Вечер</button>
            </div>
          </div>
          <div class="filter-group">
            <label>Вкус:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="taste" data-value="sweet">Сладкий</button>
              <button class="filter-button" data-filter="taste" data-value="bitter">Терпкий</button>
              <button class="filter-button" data-filter="taste" data-value="fruity">Фруктовый</button>
              <button class="filter-button" data-filter="taste" data-value="herbal">Травяной</button>
            </div>
          </div>
        </div>
      </div>

      <div id="recommendations" class="recommendations"></div>
    </div>
  `;

  if (quizState.status === "completed" && quizState.answers) {
    const { mood, time, taste } = quizState.answers;

    document.querySelectorAll(".filter-button").forEach((button) => {
      button.classList.remove("active");
      const filter = button.dataset.filter;
      const value = button.dataset.value;

      if ((filter === "effect" && value === mood) || (filter === "time" && value === time) || (filter === "taste" && value === taste)) {
        button.classList.add("active");
      }
    });
  }

  initializeFilters();
  applyFilters();
}

function showQuizInProgressState(quizState) {
  const calculatorSection = document.getElementById("calculator");

  calculatorSection.innerHTML = `
    <div class="container">
      <h2 class="section-title">Продолжить опрос? 🤔</h2>
      <div class="quiz-in-progress-state">
        <p class="quiz-progress-description">Вы начали проходить опрос, но не завершили его. Хотите продолжить с того места, где остановились?</p>
        <div class="quiz-progress-actions">
          <button class="quiz-continue-btn" onclick="continueQuiz()">Продолжить опрос</button>
          <button class="quiz-restart-btn" onclick="restartQuiz()">Начать заново</button>
          <button class="quiz-dismiss-btn" onclick="dismissAndSkipQuiz()">Спасибо, я сам!</button>
        </div>
      </div>

      <div class="filter-panel active">
        <h3>Фильтры</h3>
        <div class="filter-options">
          <div class="filter-group">
            <label>Эффект:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="effect" data-value="energy">Бодрость</button>
              <button class="filter-button" data-filter="effect" data-value="relax">Релакс</button>
              <button class="filter-button" data-filter="effect" data-value="focus">Концентрация</button>
            </div>
          </div>
          <div class="filter-group">
            <label>Время:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="time" data-value="morning">Утро</button>
              <button class="filter-button" data-filter="time" data-value="day">День</button>
              <button class="filter-button" data-filter="time" data-value="evening">Вечер</button>
            </div>
          </div>
          <div class="filter-group">
            <label>Вкус:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="taste" data-value="sweet">Сладкий</button>
              <button class="filter-button" data-filter="taste" data-value="bitter">Терпкий</button>
              <button class="filter-button" data-filter="taste" data-value="fruity">Фруктовый</button>
              <button class="filter-button" data-filter="taste" data-value="herbal">Травяной</button>
            </div>
          </div>
        </div>
      </div>

      <div id="recommendations" class="recommendations"></div>
    </div>
  `;

  initializeFilters();
  applyFilters();
}

function restartQuiz() {
  deleteCookie("quizState");
  initializeCalculator();
}

function continueQuiz() {
  const quizState = getCookie("quizState");
  if (!quizState || !quizState.currentStep) {
    restartQuiz();
    return;
  }

  createFullQuizStructure();

  if (quizState.answers) {
    Object.entries(quizState.answers).forEach(([key, value]) => {
      if (value) {
        const option = document.querySelector(`[data-value="${value}"]`);
        if (option) option.classList.add("selected");
      }
    });
  }

  const targetStep = document.getElementById(quizState.currentStep);
  if (targetStep) {
    document.querySelectorAll(".quiz-step").forEach((step) => step.classList.remove("active"));
    targetStep.classList.add("active");
  }

  initializeQuizWithState(quizState.answers || {});
}

function showFiltersOnly() {
  const sectionTitle = document.querySelector("#calculator .section-title");
  if (sectionTitle) {
    sectionTitle.textContent = "Выберите свой идеальный чай";
  }

  setTimeout(() => {
    scrollToSection("#calculator", 800);
  }, 100);
}

function createFullQuizStructure() {
  const calculatorSection = document.getElementById("calculator");

  calculatorSection.innerHTML = `
    <div class="container">
      <h2 class="section-title">Подберем чай под ваше настроение</h2>

      <div class="quiz-container">
        <div class="quiz-step active" id="step-mood">
          <h3 class="quiz-question">Какое у вас настроение?</h3>
          <div class="quiz-options">
            <button class="quiz-option" data-value="energy">Хочу взбодриться</button>
            <button class="quiz-option" data-value="relax">Нужно расслабиться</button>
            <button class="quiz-option" data-value="focus">Нужна концентрация</button>
          </div>
          <button class="quiz-skip" data-action="skip-all">Пропустить опрос</button>
        </div>

        <div class="quiz-step" id="step-time">
          <h3 class="quiz-question">В какое время дня будете пить?</h3>
          <div class="quiz-options">
            <button class="quiz-option" data-value="morning">Утро</button>
            <button class="quiz-option" data-value="day">День</button>
            <button class="quiz-option" data-value="evening">Вечер</button>
          </div>
          <div class="quiz-nav">
            <button class="quiz-prev">Назад</button>
            <button class="quiz-skip" data-action="skip-question">Пропустить вопрос</button>
          </div>
        </div>

        <div class="quiz-step" id="step-taste">
          <h3 class="quiz-question">Какой вкус предпочитаете?</h3>
          <div class="quiz-options">
            <button class="quiz-option" data-value="sweet">Сладкий</button>
            <button class="quiz-option" data-value="bitter">Терпкий</button>
            <button class="quiz-option" data-value="fruity">Фруктовый</button>
            <button class="quiz-option" data-value="herbal">Травяной</button>
          </div>
          <div class="quiz-nav">
            <button class="quiz-prev">Назад</button>
            <button class="quiz-skip" data-action="skip-question">Пропустить вопрос</button>
          </div>
        </div>
      </div>

      <div class="filter-panel">
        <h3>Фильтры</h3>
        <div class="filter-options">
          <div class="filter-group">
            <label>Эффект:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="effect" data-value="energy">Бодрость</button>
              <button class="filter-button" data-filter="effect" data-value="relax">Релакс</button>
              <button class="filter-button" data-filter="effect" data-value="focus">Концентрация</button>
            </div>
          </div>
          <div class="filter-group">
            <label>Время:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="time" data-value="morning">Утро</button>
              <button class="filter-button" data-filter="time" data-value="day">День</button>
              <button class="filter-button" data-filter="time" data-value="evening">Вечер</button>
            </div>
          </div>
          <div class="filter-group">
            <label>Вкус:</label>
            <div class="filter-buttons">
              <button class="filter-button" data-filter="taste" data-value="sweet">Сладкий</button>
              <button class="filter-button" data-filter="taste" data-value="bitter">Терпкий</button>
              <button class="filter-button" data-filter="taste" data-value="fruity">Фруктовый</button>
              <button class="filter-button" data-filter="taste" data-value="herbal">Травяной</button>
            </div>
          </div>
        </div>
      </div>

      <div id="recommendations" class="recommendations"></div>
    </div>
  `;
}

function initializeQuizWithState(savedAnswers = {}) {
  const allQuizSteps = document.querySelectorAll(".quiz-step");
  allQuizSteps.forEach((step) => {
    const optionsContainer = step.querySelector(".quiz-options");
    if (optionsContainer) {
      const optionCount = optionsContainer.querySelectorAll(".quiz-option").length;
      if (optionCount > 0) {
        optionsContainer.classList.add("items-" + optionCount);
      }
    }
  });

  const quizOptions = document.querySelectorAll(".quiz-option");
  const prevButtons = document.querySelectorAll(".quiz-prev");
  const skipButtons = document.querySelectorAll(".quiz-skip");

  const userAnswers = {
    mood: savedAnswers.mood || null,
    time: savedAnswers.time || null,
    taste: savedAnswers.taste || null,
  };

  quizOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const step = this.closest(".quiz-step");
      const value = this.getAttribute("data-value");
      const stepId = step.id;

      if (stepId === "step-mood") userAnswers.mood = value;
      if (stepId === "step-time") userAnswers.time = value;
      if (stepId === "step-taste") userAnswers.taste = value;

      step.querySelectorAll(".quiz-option").forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      let nextStep;
      if (stepId === "step-mood") {
        nextStep = "step-time";
        animateStepTransition("step-mood", "step-time");
      } else if (stepId === "step-time") {
        nextStep = "step-taste";
        animateStepTransition("step-time", "step-taste");
      } else if (stepId === "step-taste") {
        setCookie("quizState", {
          status: "completed",
          answers: userAnswers,
          currentStep: null,
          completedAt: new Date().toISOString(),
        });
        showQuizResults(userAnswers);
        return;
      }

      setCookie("quizState", {
        status: "in_progress",
        answers: userAnswers,
        currentStep: nextStep,
        updatedAt: new Date().toISOString(),
      });
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const step = this.closest(".quiz-step");
      const stepId = step.id;

      if (stepId === "step-time") {
        animateStepTransition("step-time", "step-mood", true);
      } else if (stepId === "step-taste") {
        animateStepTransition("step-taste", "step-time", true);
      }
    });
  });

  skipButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const action = this.getAttribute("data-action");

      if (action === "skip-all") {
        skipEntireQuiz();
      } else if (action === "skip-question") {
        const step = this.closest(".quiz-step");
        const stepId = step.id;

        if (stepId === "step-time") {
          setCookie("quizState", {
            status: "in_progress",
            answers: userAnswers,
            currentStep: "step-taste",
            updatedAt: new Date().toISOString(),
          });
          animateStepTransition("step-time", "step-taste");
        } else if (stepId === "step-taste") {
          setCookie("quizState", {
            status: "completed",
            answers: userAnswers,
            currentStep: null,
            completedAt: new Date().toISOString(),
          });
          showQuizResults(userAnswers);
        }
      }
    });
  });
}

function dismissQuizNotification() {
  const quizCompletedState = document.querySelector(".quiz-completed-state");
  const quizInProgressState = document.querySelector(".quiz-in-progress-state");
  const targetElement = quizCompletedState || quizInProgressState;

  animateDismissWithTitleChange(targetElement, "Выберите свой идеальный чай");
}

function animateDismissWithTitleChange(targetElement, newTitle) {
  const sectionTitle = document.querySelector("#calculator .section-title");

  if (targetElement) {
    targetElement.classList.add("fade-out");

    if (sectionTitle) {
      sectionTitle.style.transition = "opacity 0.4s ease, transform 0.4s ease";
      sectionTitle.style.opacity = "0";
      sectionTitle.style.transform = "translateY(-20px)";
    }

    setTimeout(() => {
      targetElement.style.display = "none";
      if (sectionTitle) {
        sectionTitle.style.display = "none";
        sectionTitle.textContent = newTitle;
        sectionTitle.style.display = "block";
        sectionTitle.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        sectionTitle.style.opacity = "1";
        sectionTitle.style.transform = "translateY(0)";
      }
    }, 400);
  }
}

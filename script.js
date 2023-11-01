// ПРОСТО ИМБА ФУНКЦИЯ КРУТИТ КАРТУ ТУДА СЮДА ТИПО В РУКЕ //
function handleMouseMove(event, card) {
  const rect = card.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const degreeX = (event.clientY - centerY) / 30;
  const degreeY = (centerX - event.clientX) / 30;
  card.style.transform = `perspective(500px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
}
// Функция закрытия окна при клике на крестик
function closeModal() {
  document.querySelector('.overlay').style.display = 'none';
}
function resetCard(card) {
  card.style.transform = 'none';
}

const plantData = [
  {
    name: "Филодендрон сканденс Бразил",
    description: "Филодендрон сканденс Бразил - компактное растение с зелеными и желтыми листьями, идеальное для подвесных горшков. Легкий уход и яркий акцент в интерьере.",
    price: `120`,
    image: "content/plantPhotos/plant1.jpg",
    characteristics: {
      height: "Ширина 12 см x Высота 15 см",
      care: "Легкий",
      wateringMore: `Поливайте его 2 раза в неделю. Всегда проверяйте свои растения перед поливом, верхний слой почвы должен быть сухим на ощупь. Для суккулентов дайте смеси для заливки полностью высохнуть, прежде чем снова поливать.`,
      beginnerMore:`Если вы начинающий садовод, это отличный выбор для вас. Растение будет процветать в вашем путешествии по изучению садоводства методом проб и ошибок.`,
      lightMore:`Нуждается в ярком непрямом солнечном свете. Разместите свои растения на подоконниках, где они могут получать как можно более яркий рассеянный свет. Яркий непрямой свет - это когда растение находится в пределах пары футов от естественного источника света.`,
    },

  },

  // Добавьте данные для других растений
];


// Функция открытия окна при клике на карточку
function openModal(card) {
  document.body.classList.add('modal-open');

  const modal = document.querySelector(".overlay");
  const modalContent = modal.querySelector(".modal");
  const leftSection = modalContent.querySelector(".left-section");
  const rightSection = modalContent.querySelector(".right-section");

  // Очищаем левую и правую части модального окна
  leftSection.innerHTML = "";
  rightSection.innerHTML = "";

  // Извлекаем название растения на русском
  const ruName = card.querySelector(".ru-name").textContent.trim();

  // Ищем в массиве объектов наше растение
  const selectedPlant = plantData.find(plant => plant.name === ruName);

  // Проверяем, что растение найдено
  if (selectedPlant) {
    const imgSrc = selectedPlant.image;
    const description = selectedPlant.description;
    const characteristics = selectedPlant.characteristics;

    // Создаем элемент изображения и добавляем его в левую часть модального окна
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = ruName;
    leftSection.appendChild(img);
    
   

    // Добавляем описание растения в правую часть модального окна
    rightSection.insertAdjacentHTML(
      "beforeend",
      `<h2>${ruName}</h2>
        <p>${description}</p>
        <div class="pricePlant"> ₽ ${selectedPlant.price}</div>
        <p> <b> Размер:</b> ${characteristics.height}</p>
        <div class="accordion"> 
          <details open onclick="closeAllOtherDetails(this)">
            <summary>
              <p>Как часто поливать?</p>
            </summary>
            <div class="accordioSummary">
              <p>${characteristics.wateringMore}</p>
            </div>
          </details>
          <details onclick="closeAllOtherDetails(this)">
            <summary>
              <p>Где разместить?</p>
            </summary>
            <div class="accordioSummary">
              <p>${characteristics.lightMore}</p>
            </div>
          </details>
          <details onclick="closeAllOtherDetails(this)">
            <summary>
              <p>Как ухаживать?</p>
            </summary>
            <div class="accordioSummary">
              <p>${characteristics.beginnerMore}</p>
            </div>
          </details>
          <details onclick="closeAllOtherDetails(this)">
            <summary>
              <p>Информация о доставке и размерах растений</p>
            </summary>
            <div class="accordioSummary">
              <p> <b> Доставка: </b> <br>
              Мы осуществляем доставку с использованием надежной службы СДЭК с отслеживанием заказа.<br>
              <b> Сроки доставки:</b> <br>
              Сроки доставки составляют 7-10 рабочих дней. Обычно доставка происходит быстрее, но учитывайте указанный интервал.<br>
              <b> Регионы доставки:</b> <br>
              Мы доставляем наши растения по всей России. Однако, пожалуйста, обратите внимание, что некоторые удаленные районы могут иметь более длительные сроки доставки.<br> </p>
            </div>
          </details>
        </div>
        <p><b> Как заказать?</b> <br>У нас заказать растения легко и удобно. Мы предоставляем несколько вариантов для вашего комфорта: </p>
        <div class ="icon-modal">  <img src="content/icon/telegram.svg" alt="телеграм"> <a href=”https://t.me/eg0by”>Написать</a> <img src="content/icon/phone.svg" alt="телефон"> <a class="telephone-a" href=”tel:+79277502378”>+7(927)750-23-78</a> </div>
       
        <p> Наши специалисты готовы принять ваш заказ и помочь с выбором растений. Мы делаем процесс заказа максимально простым и удобным для вас. </p>
        <p>Доставка рассчитывается при оформлении заказа.</p>`
    );

    // Открываем модальное окно
    modal.style.display = "flex";

    
    
  }
}

// Закрыие акордионов лишнее лишнее
function closeAllOtherDetails(currentDetail) {
  const allDetails = document.querySelectorAll('.accordion details');
  allDetails.forEach(detail => {
    if (detail !== currentDetail) {
      detail.removeAttribute('open');
    }
  });
}


// Функция закрытия окна при клике на крестик
function closeModal() {
  document.querySelector('.overlay').style.display = 'none';
  document.body.classList.remove('modal-open');
}









// Сохраните начальные координаты касания
let touchStartX = 0;
let touchStartY = 0;

// Функция начала касания
function handleTouchStart(event, card) {
  const touch = event.touches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}

function handleTouchEnd(event, card) {
  const touch = event.changedTouches[0];
  const touchEndX = touch.clientX;

  // Определите, что считать "достаточно долгим" свайпом (например, 50 пикселей)
  const swipeThreshold = 50;

  // Рассчитайте разницу между начальной и конечной позициями по горизонтали
  const deltaX = touchEndX - touchStartX;

  // Проверьте, прошел ли свайп достаточно далеко и был ли он горизонтальным
  if (deltaX > swipeThreshold) {
    // Горизонтальный свайп слева направо (свайп вправо)
    // Примените transform для переворота карточки вправо
    card.querySelector('.front').style.transform = 'rotateY(-180deg)';
    card.querySelector('.front').style.zIndex = '-1';
    card.querySelector('.back').style.transform = 'rotateY(0deg)';
    card.querySelector('.back').style.zIndex = '1';
  } else {
    // Вернуть карточку в исходное положение, если свайп не соответствует условиям
    card.querySelector('.front').style.transform = 'none';
    card.querySelector('.front').style.zIndex = '1'; // Вернуть z-index к исходному значению
    card.querySelector('.back').style.transform = 'rotateY(-180deg)';
    card.querySelector('.back').style.zIndex = '0';
  }
}



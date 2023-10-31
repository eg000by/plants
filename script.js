// ПРОСТО ИМБА ФУНКЦИЯ КРУТИТ КАРТУ ТУДА СЮДА ТИПО В РУКЕ //
function handleMouseMove(event, card) {
  const rect = card.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const degreeX = (event.clientY - centerY) / 30;
  const degreeY = (centerX - event.clientX) / 30;
  card.style.transform = `perspective(500px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
}

function resetCard(card) {
  card.style.transform = 'none';
}

const plantData = [
  {
    name: "Филодендрон сканденс Бразил",
    description: "Филодендрон сканденс Бразил - компактное растение с зелеными и желтыми листьями, идеальное для подвесных горшков. Легкий уход и яркий акцент в интерьере.",
    characteristics: {
      height: "30 см",
      leaves: "Зеленые и желтые",
      care: "Легкий"
    }
  },
  // Добавьте данные для других растений
];



  // Функция открытия окна при клике на карточку
function openModal(card) {
  const modal = document.querySelector(".overlay");
  const modalContent = modal.querySelector(".modal");
  const leftSection = modalContent.querySelector(".left-section");
  const rightSection = modalContent.querySelector(".right-section");

  // Очищаем левую и правую части модального окна
  leftSection.innerHTML = "";
  rightSection.innerHTML = "";

  // Извлекаем название растения на русском и его картинку
  const ruName = card.querySelector(".ru-name").textContent.trim();
  const imgContainer = card.querySelector(".img-container").cloneNode(true);

  // Добавляем название и картинку в левую часть модального окна
  leftSection.insertAdjacentHTML("beforeend", `<h2>${ruName}</h2>`);
  leftSection.appendChild(imgContainer);

  // Ищем в массиве объектов наше растение
  const selectedPlant = plantData.find(plant => plant.name === ruName);

  // Добавление заголовка
  rightSection.innerHTML = '<h2 class="plant-info-header">Информация о растении:</h2>';

  // Открываем модальное окно
  modal.style.display = "flex";
}
  // Функция закрытия окна при клике на крестик
function closeModal() {
  document.querySelector('.overlay').style.display = 'none';
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
    card.querySelector('.back').style.zIndex = '2';
  } else {
    // Вернуть карточку в исходное положение, если свайп не соответствует условиям
    card.querySelector('.front').style.transform = 'none';
    card.querySelector('.front').style.zIndex = '1'; // Вернуть z-index к исходному значению
    card.querySelector('.back').style.transform = 'rotateY(-180deg)';
    card.querySelector('.back').style.zIndex = '0';
  }
}

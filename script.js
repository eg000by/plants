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
    price:`10`,
    characteristics: {
      height: "30 см",

      care: "Легкий",
    },
    image: "content/plantPhotos/plant1.png"
  },
  {
    name: "Фикус Ирен",
    image: "content/plantPhotos/plant1.png",
    description: "Фикус Ирен - ыыыыыыы",
    characteristics: {
      height: "35 см",

      care: "Легкий"
    }
  },
  {
    name: "Монстера Манки",
    description: "Монстера Манки - ыыыыыыы",
    image: "content/plantPhotos/plant1.png",
    characteristics: {
      height: "35 см",
  
      care: "Легкий"
    }
  },
  {
    name: "Эпипремнум Хэппи Лиф",
    description: "Эпипремнум Хэппи Лиф - ыыыыыыы",
    image: "content/plantPhotos/plant1.png",
    characteristics: {
      height: "35 см",
   
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
        <div class="pricePlant"> Цена: ${selectedPlant.price}</div>
        <h3>Характеристики:</h3>
        <ul>
          <li>Высота: ${characteristics.height}</li>
          <li>Уход: ${characteristics.care}</li>
        </ul>`
      );
  
      // Открываем модальное окно
      modal.style.display = "flex";
    }
  }
  // Функция закрытия окна при клике на крестик
function closeModal() {
  document.querySelector('.overlay').style.display = 'none';
}

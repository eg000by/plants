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

  //
  function openModal() {
    document.querySelector('.overlay').style.display = 'flex';
  }
  
  function closeModal() {
    document.querySelector('.overlay').style.display = 'none';
  }
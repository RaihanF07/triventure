const cardsWrapper = document.getElementById('cardsWrapper');
let currentIndex = 0;
  const totalCards = document.querySelectorAll('.card').length;
  const slideCard = document.querySelector('.slide-card');

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateSlide();
  }

  function updateSlide() {
    const translateValue = -currentIndex * 100 + '%';
    slideCard.style.transform = 'translateX(' + translateValue + ')';
  }
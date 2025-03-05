const openRegistrationButton = document.getElementById('openRegistration');
    const closeRegistrationButton = document.getElementById('closeRegistration');
    const overlay = document.getElementById('overlay');
    const registrationForm = document.getElementById('registrationForm');
    const mainContent = document.getElementById('mainContent');

    // Открыть форму регистрации
    openRegistrationButton.addEventListener('click', () => {
      registrationForm.style.display = 'block';
      overlay.style.display = 'block';
      mainContent.classList.add('blurred'); // Добавляем эффект размытия
    });

    // Закрыть форму регистрации
    closeRegistrationButton.addEventListener('click', () => {
      registrationForm.style.display = 'none';
      overlay.style.display = 'none';
      mainContent.classList.remove('blurred'); // Убираем эффект размытия
    });

    // Закрыть форму при клике на оверлей
    overlay.addEventListener('click', () => {
      registrationForm.style.display = 'none';
      overlay.style.display = 'none';
      mainContent.classList.remove('blurred'); // Убираем эффект размытия
    });

    // Обработка отправки формы
    document.getElementById('registerForm').addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Спасибо за регистрацию!');
      this.reset();
      registrationForm.style.display = 'none';
      overlay.style.display = 'none';
      mainContent.classList.remove('blurred'); // Убираем эффект размытия
    });
  document.addEventListener('DOMContentLoaded', function () {
    console.log('Сайт загружен!');
    const services = document.querySelectorAll('.service');
    services.forEach((service, index) => {
      service.style.animationDelay = `${index * 0.2}s`;
    });
  });
  // Функция для создания звезд
function createStars(count) {
  const background = document.querySelector('.background');

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Генерация случайных позиций
    const x = Math.random() * window.innerWidth * 2.5;
    const y = Math.random() * window.innerHeight * 2.5;

    // Генерация случайной задержки для анимации
    const delay = Math.random() * 5; // От 0 до 5 секунд

    // Применяем стили
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${delay}s`;

    // Добавляем звезду в контейнер
    background.appendChild(star);
  }
}

// Создаем 200 звезд
createStars(600);
window.addEventListener('resize', () => {
  document.querySelector('.background').innerHTML = '';
  createStars(600);
});

function fallingStar(count) {
  const background = document.querySelector('.background');

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('falling-star');

    // Генерация случайных позиций
    const x = Math.random() * window.innerWidth * 2;
    const y = Math.random() * window.innerHeight * 2;

    // Генерация случайной задержки для анимации
    const delay = Math.random() * 5;

    // Применяем стили
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${delay}s`;

    // Добавляем звезду в контейнер
    background.appendChild(star);
  }
}
fallingStar(50)


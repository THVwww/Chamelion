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
  // Получаем все кружки
  const circles = document.querySelectorAll('.circle');

  let isDragging = false; // Флаг для отслеживания состояния перетаскивания
  let currentCircle = null; // Текущий выбранный кружок
  let offsetX = 0; // Смещение по X
  let offsetY = 0; // Смещение по Y

  // Добавляем обработчики событий для каждого кружка
  circles.forEach(circle => {
    circle.addEventListener('mousedown', (event) => {
      isDragging = true;
      currentCircle = circle;

      // Полностью отключаем анимацию
      currentCircle.style.animation = 'none';
      currentCircle.style.transition = 'none';

      // Вычисляем смещение относительно курсора
      const rect = circle.getBoundingClientRect();
      offsetX = event.clientX - rect.left;
      offsetY = event.clientY - rect.top;

      circle.style.cursor = 'grabbing';
    });
  });
  // Обработчик движения мыши
  document.addEventListener('mousemove', (event) => {
    if (isDragging && currentCircle) {
      // Перемещаем кружок
      currentCircle.style.left = `${event.clientX - offsetX}px`;
      currentCircle.style.top = `${event.clientY - offsetY}px`;
    }
  });

  // Обработчик отпускания кнопки мыши
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      currentCircle.style.cursor = 'grab';

      // Включаем анимацию через короткую задержку
      setTimeout(() => {
        currentCircle.style.animation = '';
      }, 10);

      currentCircle = null;
    }
  });
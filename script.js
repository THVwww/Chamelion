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
 
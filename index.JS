document.addEventListener('DOMContentLoaded', () => {
  // Плавный скроллинг при клике на якорные ссылки
  document.querySelectorAll('.navbar-menu a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Обработка отправки формы
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Спасибо за ваше сообщение!');
      form.reset();
  });
});

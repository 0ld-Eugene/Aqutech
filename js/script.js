// ==================== Бургер-меню с overlay ====================
document.addEventListener('DOMContentLoaded', function () {
   const burgerButton = document.querySelector('.burger');      // кнопка-бургер
   const menuBody = document.querySelector('.menu__body');      // меню
   const overlay = document.querySelector('.menu__overlay');    // затемнение

   // Проверяем, что все элементы существуют
   if (!burgerButton || !menuBody || !overlay) return;

   // Функция закрытия меню и overlay
   function closeMenu() {
      burgerButton.classList.remove('active');
      menuBody.classList.remove('active');
      overlay.classList.remove('active');
   }

   // Клик по бургеру — открытие/закрытие меню
   burgerButton.addEventListener('click', function (e) {
      e.stopPropagation();               // предотвращаем всплытие
      this.classList.toggle('active');   // активное состояние кнопки
      menuBody.classList.toggle('active');
      overlay.classList.toggle('active');
   });

   // Клик по overlay — закрываем меню
   overlay.addEventListener('click', closeMenu);

   // Клик вне меню и кнопки — закрываем меню
   document.addEventListener('click', function (e) {
      if (!menuBody.contains(e.target) && e.target !== burgerButton) {
         closeMenu();
      }
   });

   // Опционально: закрытие меню при нажатии Escape
   document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
   });

   const menuLink = menuBody.querySelector('.burger__discuss');
   console.log(menuLink)
   if (menuLink) {
      menuLink.addEventListener('click', () => {
         closeMenu();
      })
   }
});

// ==================== Отправка формы через fetch ===================

document.addEventListener('DOMContentLoaded', function () {

   // === Находим все формы с классом .callback__form ===
   const forms = document.querySelectorAll('.callback__form');

   // === Функции для показа и скрытия ошибок ===
   function showInputError(input, message) {
      const errorSpan = input.parentNode.querySelector('.input-error-message');
      if (errorSpan) {
         errorSpan.textContent = message;
         errorSpan.classList.add('show');
         input.classList.add('error-input');
      }
   }

   function hideInputError(input) {
      const errorSpan = input.parentNode.querySelector('.input-error-message');
      if (errorSpan) {
         errorSpan.textContent = '';
         errorSpan.classList.remove('show');
         input.classList.remove('error-input');
      }
   }

   // === Обход всех форм ===
   forms.forEach(form => {
      form.addEventListener('submit', async function (event) {
         event.preventDefault(); // отменяем стандартную отправку формы

         let isFormValid = true;

         // Берём поля именно из этой формы
         const nameInput = form.querySelector('[name="name"]');
         const phoneInput = form.querySelector('[name="phone"]');
         const emailInput = form.querySelector('[name="email"]');
         const policyInput = form.querySelector('[name="privacyPolicy"]');

         // === Валидация имени ===
         if (nameInput.validity.valueMissing) {
            isFormValid = false;
            showInputError(nameInput, 'Пожалуйста, введите ваше имя');
         } else {
            hideInputError(nameInput);
         }

         // === Валидация телефона ===
         if (phoneInput.validity.valueMissing) {
            isFormValid = false;
            showInputError(phoneInput, 'Это поле обязательно для заполнения');
         } else if (phoneInput.validity.patternMismatch) {
            isFormValid = false;
            showInputError(phoneInput, 'Пожалуйста введите корректный номер телефона');
         } else {
            hideInputError(phoneInput);
         }

         // === Валидация email ===
         if (emailInput.validity.valueMissing) {
            isFormValid = false;
            showInputError(emailInput, 'Это поле обязательно для заполнения');
         } else if (emailInput.validity.typeMismatch) {
            isFormValid = false;
            showInputError(emailInput, 'Пожалуйста, введите корректный E-mail');
         } else {
            hideInputError(emailInput);
         }

         // === Валидация чекбокса ===
         if (!policyInput.checked) {
            isFormValid = false;
            showInputError(policyInput, 'Для отправки формы необходимо согласие');
         } else {
            hideInputError(policyInput);
         }

         // === Если форма валидна — отправка через fetch ===
         if (isFormValid) {
            try {
               const formData = new FormData(form);
               const response = await fetch('callback-handler.php', {
                  method: 'POST',
                  body: formData
               });

               const result = await response.text();

               if (result === 'success') {
                  alert('Заявка успешно отправлена!');
                  form.reset();
               } else if (result === 'validation_error') {
                  alert('Заполните все поля формы');
               } else {
                  alert('Ошибка при отправке. Попробуйте позже');
               }
            } catch (error) {
               alert('Ошибка соединения с сервером');
               console.error(error);
            }
         } else {
            console.log('Форма заполнена неправильно');
         }
      });
   });

});


// ========== Инициализация слайдера Swiper ==========
if (document.querySelector('.swiper')) {
   const swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',       // Автоматическое определение количества слайдов
      spaceBetween: 'auto',        // Автоматическое расстояние между слайдами
      autoplay: {
         delay: 3000,              // Задержка между слайдами (3 секунды)
         disableOnInteraction: false // Не останавливать автопрокрутку при взаимодействии
      },
      navigation: {
         nextEl: '.swiper-button-next', // Кнопка "вперед"
         prevEl: '.swiper-button-prev'  // Кнопка "назад"
      },
      breakpoints: {               // Адаптивные настройки
         1441: { slidesPerView: 4, spaceBetween: 40 },
         1000: { slidesPerView: 3, spaceBetween: 33 },
         700: { slidesPerView: 2, spaceBetween: 23 },
         560: { slidesPerView: 1.5, spaceBetween: 15 },
         320: { slidesPerView: 1, spaceBetween: 10 }
      }
   });
}

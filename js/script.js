// ========== Открытие и закрытие бургер-меню ==========
const burgerButton = document.querySelector('.burger'); // Кнопка-бургер
const closeIcon = document.querySelector('.close-svg'); // Иконка закрытия (крестик)
const menuBody = document.querySelector('.menu__body'); // Меню, которое скрывается/открывается

// Проверяем, существуют ли все элементы
if (burgerButton && closeIcon && menuBody) {
   // Клик по бургеру — открывает/закрывает меню
   burgerButton.addEventListener('click', function (e) {
      e.stopPropagation(); // Останавливаем всплытие события
      this.classList.toggle('active');  // Добавляем/убираем класс активного состояния
      menuBody.classList.toggle('active');
   });

   // Клик по иконке "X" — закрывает меню
   closeIcon.addEventListener('click', () => {
      removeActiveClasses();
   });

   // Клик вне меню — закрывает меню
   document.addEventListener('click', function (event) {
      if (!menuBody.contains(event.target) && event.target !== burgerButton) {
         removeActiveClasses();
      }
   });

   // Функция: удаляет классы "active"
   function removeActiveClasses() {
      burgerButton.classList.remove('active');
      menuBody.classList.remove('active');
   }
}

// ==================== error-form ===================

document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('contact-form');
   const nameInput = document.querySelector('[name="name"]');
   const phoneInput = document.querySelector('[name="phone"]');
   const emailInput = document.querySelector('[name="email"]');
   const policyInput = document.querySelector('[name="privacyPolicy"]');

   // Функция, которая показывает сообщение об ошибке
   function showInputError(input, message) {
      const errorSpan = input.parentNode.querySelector('.input-error-message');
      if (errorSpan) {
         errorSpan.textContent = message;
         errorSpan.classList.add('show');
         input.classList.add('error-input')
      }
   }
   // Функция, которая скрывает сообщение об ошибке
   function hideInputError(input) {
      const errorSpan = input.parentNode.querySelector('.input-error-message');
      if (errorSpan) {
         errorSpan.textContent = '';
         errorSpan.classList.remove('show');
         input.classList.remove('error-input');
      }
   }

   form.addEventListener('submit', function (event) {
      event.preventDefault();
      let isFormValid = true;

      // Проверка поля имени
      if (nameInput.validity.valueMissing) {
         isFormValid = false;
         showInputError(nameInput, 'Пожалуйста, введите ваше имя');
      } else {
         hideInputError(nameInput)
      }

      // Проверка поля телефона
      if (phoneInput.validity.valueMissing) {
         isFormValid = false;
         showInputError(phoneInput, 'Это поле обязательно для заполнения');
      } else if (phoneInput.validity.patternMismatch) {
         isFormValid = false;
         showInputError(phoneInput, 'Пожалуйста введите корректный номер телефона')
      } else {
         hideInputError(phoneInput);
      }

      // Проверка поля Email
      if (emailInput.validity.valueMissing) {
         isFormValid = false;
         showInputError(emailInput, 'Это поле обязательно для заполнения');
      } else if (emailInput.validity.typeMismatch) {
         isFormValid = false;
         showInputError(emailInput, 'Пожалуйста, введите корректный E-mail');
      } else {
         hideInputError(emailInput)
      }

      // Проверка чекбокса
      if (!policyInput.checked) {
         isFormValid = false;
         showInputError(policyInput, 'Для отправки формы необходимо согласие')
      } else {
         hideInputError(policyInput)
      }

      if (isFormValid) {
         console.log("Форма успешно заполнена. Можно отправлять данные")
      } else {
         console.log("Форма заполнена неправильно");

      }
   })
})

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

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

// ========== Выпадающее меню "Оборудование" ==========
const equipmentItem = document.querySelector('.menu__item-equipment'); // Пункт меню "Оборудование"
const equipmentDropdown = document.querySelector('.dropdown-equipment'); // Выпадающий список

let hideTimer = null; // Таймер для задержки закрытия

// Проверяем, что оба элемента существуют
if (equipmentItem && equipmentDropdown) {
   // Открыть выпадающий список
   const openDropdown = () => equipmentDropdown.classList.add('is-open');

   // Закрыть выпадающий список
   const closeDropdown = () => equipmentDropdown.classList.remove('is-open');

   // Задержка перед закрытием (если уводим мышь)
   const hideDropdown = () => hideTimer = setTimeout(closeDropdown, 200);

   // Навели мышь на пункт — открываем список
   equipmentItem.addEventListener('mouseenter', () => {
      clearTimeout(hideTimer); // Отменяем таймер закрытия
      openDropdown();
   });

   // Увели мышь с пункта — проверяем, ушли ли в список
   equipmentItem.addEventListener('mouseleave', (e) => {
      const related = e.relatedTarget;
      const isMovingToDropdown = related?.closest('.dropdown-equipment');
      if (!isMovingToDropdown) hideDropdown(); // Если не в список — закрываем
   });

   // Увели мышь с выпадающего списка — проверяем, ушли ли обратно к пункту
   equipmentDropdown.addEventListener('mouseleave', (e) => {
      const related = e.relatedTarget;
      const isMovingToItem = related?.closest('.menu__item-equipment');
      if (!isMovingToItem) hideDropdown(); // Если не к пункту — закрываем
   });

   // Навели на выпадающий список — отменяем закрытие
   equipmentDropdown.addEventListener('mouseenter', () => {
      clearTimeout(hideTimer);
   });
}

// ========== Затемнение фона при наведении на "Оборудование" ==========
const overlay = document.getElementById('overlay'); // Элемент-подложка (затемнение)

if (equipmentItem && overlay) {
   // Наводим на пункт — показываем затемнение
   equipmentItem.addEventListener('mouseenter', () => {
      if (equipmentItem.querySelector('.dropdown-equipment')) {
         overlay.classList.add('active');
      }
   });

   // Уводим с пункта — скрываем затемнение
   equipmentItem.addEventListener('mouseleave', () => {
      if (equipmentItem.querySelector('.dropdown-equipment')) {
         overlay.classList.remove('active');
      }
   });
}

// ========== Переключение вкладок слева/справа ==========
const buttons = document.querySelectorAll('.left-side__button'); // Кнопки вкладок

// Если кнопки найдены
if (buttons.length > 0) {
   buttons.forEach(button => {
      button.addEventListener('click', () => {
         // Сначала убираем "active" у всех кнопок
         buttons.forEach(btn => btn.classList.remove('active'));

         // Добавляем "active" текущей кнопке
         button.classList.add('active');

         // Получаем имя целевой вкладки из data-атрибута
         const target = button.dataset.target;
         const activeTab = document.querySelector(`.${target}`);

         // Убираем активность у всех вкладок
         const tabs = document.querySelectorAll('.right-side__box');
         tabs.forEach(tab => tab.classList.remove('active'));

         // Активируем нужную вкладку
         if (activeTab) {
            activeTab.classList.add('active');
         }
      });
   });
}

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


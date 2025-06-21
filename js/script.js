// ========== Открытие и закрытие бургер-меню ==========
const burgerButton = document.querySelector('.burger'); // Кнопка-бургер
const closeIcon = document.querySelector('.close-svg'); // Иконка закрытия (крестик)
const menuBody = document.querySelector('.menu__body'); // Меню, которое скрывается/открывается

if (burgerButton && closeIcon && menuBody) {
   burgerButton.addEventListener('click', function (e) {
      e.stopPropagation();
      this.classList.toggle('active');
      menuBody.classList.toggle('active');

      // Показываем или скрываем overlay в зависимости от состояния меню и ширины экрана
      if (window.innerWidth <= 1100) {
         toggleOverlay(menuBody.classList.contains('active'));
      }
   });

   closeIcon.addEventListener('click', () => {
      removeActiveClasses();
      if (window.innerWidth <= 1100) {
         hideOverlay();
      }
   });

   document.addEventListener('click', function (event) {
      if (!menuBody.contains(event.target) && event.target !== burgerButton) {
         removeActiveClasses();
         if (window.innerWidth <= 1100) {
            hideOverlay();
         }
      }
   });

   function removeActiveClasses() {
      burgerButton.classList.remove('active');
      menuBody.classList.remove('active');
   }
}

// ========== Выпадающее меню "Оборудование" ==========
const equipmentItem = document.querySelector('.menu__item-equipment'); // Пункт меню "Оборудование"
const equipmentDropdown = document.querySelector('.dropdown-equipment'); // Выпадающий список
let hideTimer = null;

if (equipmentItem && equipmentDropdown) {
   const openDropdown = () => {
      equipmentDropdown.classList.add('is-open');
      if (window.innerWidth > 1100) showOverlay(); // Только на больших экранах
   };

   const closeDropdown = () => {
      equipmentDropdown.classList.remove('is-open');
      if (window.innerWidth > 1100) hideOverlay(); // Только на больших экранах
   };

   const hideDropdown = () => hideTimer = setTimeout(closeDropdown, 200);

   equipmentItem.addEventListener('mouseenter', () => {
      clearTimeout(hideTimer);
      openDropdown();
   });

   equipmentItem.addEventListener('mouseleave', (e) => {
      const related = e.relatedTarget;
      const isMovingToDropdown = related?.closest('.dropdown-equipment');
      if (!isMovingToDropdown) hideDropdown();
   });

   equipmentDropdown.addEventListener('mouseleave', (e) => {
      const related = e.relatedTarget;
      const isMovingToItem = related?.closest('.menu__item-equipment');
      if (!isMovingToItem) hideDropdown();
   });

   equipmentDropdown.addEventListener('mouseenter', () => {
      clearTimeout(hideTimer);
   });
}

// ========== Overlay (затемнение экрана) ==========
const overlay = document.getElementById('overlay'); // Подложка

// Показываем overlay
function showOverlay() {
   if (overlay) overlay.classList.add('active');
}

// Скрываем overlay
function hideOverlay() {
   if (overlay) overlay.classList.remove('active');
}

// Включение/выключение overlay по булевому значению
function toggleOverlay(show) {
   show ? showOverlay() : hideOverlay();
}

// ========== Переключение вкладок слева/справа ==========
const buttons = document.querySelectorAll('.left-side__button'); // Кнопки вкладок

if (buttons.length > 0) {
   buttons.forEach(button => {
      button.addEventListener('click', () => {
         buttons.forEach(btn => btn.classList.remove('active'));
         button.classList.add('active');

         const target = button.dataset.target;
         const activeTab = document.querySelector(`.${target}`);
         const tabs = document.querySelectorAll('.right-side__box');
         tabs.forEach(tab => tab.classList.remove('active'));
         if (activeTab) activeTab.classList.add('active');
      });
   });
}

// ========== Клонирование блока с обратной связью ==========
const callbackContainer = document.querySelector('.callback__container');
const repeatTarget = document.querySelector('.repeat-section');

if (callbackContainer && repeatTarget) {
   const cloneSection = callbackContainer.cloneNode(true);
   const uniqueId = 'privacyPolicy_' + Date.now();

   const clonedCheckbox = cloneSection.querySelector('input[name="privacyPolicy"]');
   const clonedLabel = cloneSection.querySelector('label[for="privacyPolicy"]');

   if (clonedCheckbox) clonedCheckbox.id = uniqueId;
   if (clonedLabel) clonedLabel.setAttribute('for', uniqueId);

   repeatTarget.appendChild(cloneSection);
}

// ========== Инициализация слайдера Swiper ==========
if (document.querySelector('.swiper')) {
   const swiper = new Swiper('.swiper', {
      slidesPerView: 'auto',
      spaceBetween: 'auto',
      autoplay: {
         delay: 3000,
         disableOnInteraction: false
      },
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
      },
      breakpoints: {
         1441: { slidesPerView: 4, spaceBetween: 40 },
         1000: { slidesPerView: 3, spaceBetween: 33 },
         700: { slidesPerView: 2, spaceBetween: 23 },
         560: { slidesPerView: 1.5, spaceBetween: 15 },
         320: { slidesPerView: 1, spaceBetween: 10 }
      }
   });
}


// const burgerButton = document.querySelector('.burger');
// const closeIcon = document.querySelector('.close-svg');
// const menuBody = document.querySelector('.menu__body');

// // Обработчик события для открытия меню
// burgerButton.addEventListener('click', function (e) {
//    e.stopPropagation();
//    this.classList.toggle('active');       // переключаем активный класс у кнопки бургера
//    menuBody.classList.toggle('active');   // переключаем активный класс у тела меню
// });

// // Обработчик события для закрытия меню по иконке 'x'
// closeIcon.addEventListener('click', function () {
//    removeActiveClasses();                // удаляем классы active у обоих элементов
// });

// // Функция удаления классов active
// function removeActiveClasses() {
//    burgerButton.classList.remove('active');
//    menuBody.classList.remove('active');
// }

// // Обработчик кликов вне меню
// document.addEventListener('click', function (event) {
//    // Проверяем, кликнули ли вне меню и вне самого бургера
//    if (!menuBody.contains(event.target) && event.target !== burgerButton) {
//       removeActiveClasses();              // если клик вне меню и бургера, удаляем классы active
//    }
// });

// const equipmentItem = document.querySelector('.menu__item-equipment');
// const equipmentDropdown = document.querySelector('.dropdown-equipment');
// let hideTimer = null;

// // Открытие выпадающего списка
// const openDropdown = () => {
//    equipmentDropdown.classList.add('is-open');
// };

// // Закрытие выпадающего списка
// const closeDropdown = () => {
//    equipmentDropdown.classList.remove('is-open');
// };

// // Таймер для отложенного закрытия
// const hideDropdown = () => {
//    hideTimer = setTimeout(closeDropdown, 200);
// };

// // События открытия и закрытия
// equipmentItem.addEventListener('mouseenter', () => {
//    clearTimeout(hideTimer);
//    openDropdown();
// });

// equipmentItem.addEventListener('mouseleave', (e) => {
//    const related = e.relatedTarget;
//    const isMovingToDropdown = related?.closest('.dropdown-equipment');

//    if (!isMovingToDropdown) {
//       hideDropdown();
//    }
// });

// // Логика удержания открытого состояния
// equipmentDropdown.addEventListener('mouseleave', (e) => {
//    const related = e.relatedTarget;
//    const isMovingToItem = related?.closest('.menu__item-equipment');

//    if (!isMovingToItem) {
//       hideDropdown();
//    }
// });

// // Повторное открытие при наведении
// equipmentDropdown.addEventListener('mouseenter', () => {
//    clearTimeout(hideTimer);
// });

// const buttons = document.querySelectorAll('.left-side__button');

// buttons.forEach(button => {
//    button.addEventListener('click', (e) => {
//       // Убираем активный класс у всех кнопок
//       buttons.forEach(btn => btn.classList.remove('active'));

//       // Добавляем активный класс текущей кнопке
//       button.classList.add('active');

//       // Переключаем вкладки
//       const target = button.dataset.target;
//       const activeTab = document.querySelector(`.${target}`);

//       // Убираем активность у всех вкладок
//       const tabs = document.querySelectorAll('.right-side__box');
//       tabs.forEach(tab => tab.classList.remove('active'));

//       // Активируем нужную вкладку
//       if (activeTab) {
//          activeTab.classList.add('active');
//       }
//    });
// });

// //? repeat section
// const callbackContainer = document.querySelector('.callback__container');
// const cloneSection = callbackContainer.cloneNode(true);

// //? Уникальный ID для клонированной секции
// const uniqueId = 'privacyPolicy_' + Date.now();
// const clonedCheckbox = cloneSection.querySelector('input[name="privacyPolicy"]');
// const clonedLabel = cloneSection.querySelector('label[for="privacyPolicy"]');

// //? Добавляем уникальные id и for для label и checkbox
// if (clonedCheckbox) {
//    clonedCheckbox.id = uniqueId;
// }
// if (clonedLabel) {
//    clonedLabel.setAttribute('for', uniqueId);
// }

// document.querySelector('.repeat-section').appendChild(cloneSection);

// //? Затемнение страницы

// let menuItem = document.querySelector('.menu__item-equipment');
// menuItem.addEventListener('mouseenter', () => {
//    if (menuItem.querySelector('.dropdown-equipment')) {
//       const overlay = document.getElementById('overlay');
//       overlay.classList.add('active');
//    }
//    menuItem.addEventListener('mouseleave', () => {
//       if (menuItem.querySelector('.dropdown-equipment')) {
//          const overlay = document.getElementById('overlay');
//          overlay.classList.remove('active');
//       }
//    })
// });

// const swiper = new Swiper('.swiper', {
//    slidesPerView: 'auto',
//    spaceBetween: 'auto',
//    // loop: true,
//    autoplay: {
//       delay: 3000,
//       disableOnInteraction: false,
//    },
//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//    },
//    breakpoints: {
//       1441: {
//          slidesPerView: 4,
//          spaceBetween: 40,
//       },
//       1000: {
//          slidesPerView: 3,
//          spaceBetween: 33,
//       },
//       700: {
//          slidesPerView: 2,
//          spaceBetween: 23,
//       },
//       560: {
//          slidesPerView: 1.5,
//          spaceBetween: 15,
//       },
//       320: {
//          slidesPerView: 1,
//          spaceBetween: 10,
//       },

//    }
// })
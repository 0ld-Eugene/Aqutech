
const burgerButton = document.querySelector('.burger');
const closeIcon = document.querySelector('.close-svg');
const menuBody = document.querySelector('.menu__body');

// Обработчик события для открытия меню
burgerButton.addEventListener('click', function (e) {
   e.stopPropagation();
   this.classList.toggle('active');       // переключаем активный класс у кнопки бургера
   menuBody.classList.toggle('active');   // переключаем активный класс у тела меню
});

// Обработчик события для закрытия меню по иконке 'x'
closeIcon.addEventListener('click', function () {
   removeActiveClasses();                // удаляем классы active у обоих элементов
});

// Функция удаления классов active
function removeActiveClasses() {
   burgerButton.classList.remove('active');
   menuBody.classList.remove('active');
}

// Обработчик кликов вне меню
document.addEventListener('click', function (event) {
   // Проверяем, кликнули ли вне меню и вне самого бургера
   if (!menuBody.contains(event.target) && event.target !== burgerButton) {
      removeActiveClasses();              // если клик вне меню и бургера, удаляем классы active
   }
});

const equipmentItem = document.querySelector('.menu__item-equipment');
const equipmentDropdown = document.querySelector('.dropdown-equipment');
let hideTimer = null;

// Открытие выпадающего списка
const openDropdown = () => {
   equipmentDropdown.classList.add('is-open');
};

// Закрытие выпадающего списка
const closeDropdown = () => {
   equipmentDropdown.classList.remove('is-open');
};

// Таймер для отложенного закрытия
const hideDropdown = () => {
   hideTimer = setTimeout(closeDropdown, 200);
};

// События открытия и закрытия
equipmentItem.addEventListener('mouseenter', () => {
   clearTimeout(hideTimer);
   openDropdown();
});

equipmentItem.addEventListener('mouseleave', (e) => {
   const related = e.relatedTarget;
   const isMovingToDropdown = related?.closest('.dropdown-equipment');

   if (!isMovingToDropdown) {
      hideDropdown();
   }
});

// Логика удержания открытого состояния
equipmentDropdown.addEventListener('mouseleave', (e) => {
   const related = e.relatedTarget;
   const isMovingToItem = related?.closest('.menu__item-equipment');

   if (!isMovingToItem) {
      hideDropdown();
   }
});

// Повторное открытие при наведении
equipmentDropdown.addEventListener('mouseenter', () => {
   clearTimeout(hideTimer);
});

const buttons = document.querySelectorAll('.left-side__button');

buttons.forEach(button => {
   button.addEventListener('click', (e) => {
      // Убираем активный класс у всех кнопок
      buttons.forEach(btn => btn.classList.remove('active'));

      // Добавляем активный класс текущей кнопке
      button.classList.add('active');

      // Переключаем вкладки
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

//? repeat section

const callbackContainer = document.querySelector('.callback__container');

const cloneSection = callbackContainer.cloneNode(true);

//? Уникальный ID для клонированной секции
const uniqueId = 'privacyPolicy_' + Date.now();
const clonedCheckbox = cloneSection.querySelector('input[name="privacyPolicy"]');
const clonedLabel = cloneSection.querySelector('label[for="privacyPolicy"]');

//? Добавляем уникальные id и for для label и checkbox
if (clonedCheckbox) {
   clonedCheckbox.id = uniqueId;
}
if (clonedLabel) {
   clonedLabel.setAttribute('for', uniqueId);
}

document.querySelector('.repeat-section').appendChild(cloneSection);

//? Затемнение страницы

let menuItem = document.querySelector('.menu__item-equipment');
menuItem.addEventListener('mouseenter', () => {
   if (menuItem.querySelector('.dropdown-equipment')) {
      const overlay = document.getElementById('overlay');
      overlay.classList.add('active');
   }
   menuItem.addEventListener('mouseleave', () => {
      if (menuItem.querySelector('.dropdown-equipment')) {
         const overlay = document.getElementById('overlay');
         overlay.classList.remove('active');
      }
   })
});

const swiper = new Swiper('.swiper', {
   slidesPerView: 'auto',
   spaceBetween: 'auto',
   // loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      1441: {
         slidesPerView: 4,
         spaceBetween: 40,
      },
      1000: {
         slidesPerView: 3,
         spaceBetween: 33,
      },
      700: {
         slidesPerView: 2,
         spaceBetween: 23,
      },
      560: {
         slidesPerView: 1.5,
         spaceBetween: 15,
      },
      320: {
         slidesPerView: 1,
         spaceBetween: 10,
      },

   }
})

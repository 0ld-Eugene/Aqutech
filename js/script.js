
// document.addEventListener('DOMContentLoaded', function () {
//    const searchButton = document.getElementById("searchButton");
//    const searchInput = document.getElementById("searchInput");

//    searchButton.addEventListener('click', () => {
//       if (!searchInput.classList.contains("show-search-input")) {
//          searchInput.classList.add("show-search-input");
//          searchButton.classList.add("hide-search-button")
//       } else {
//          searchInput.classList.remove("show-search-input");
//          searchButton.classList.remove("hide-search-button")
//       }
//       searchInput.focus()
//    })
// })

// document.addEventListener('DOMContentLoaded', function () {
//    const searchButton = document.getElementById("searchButton");
//    const searchInput = document.getElementById("searchInput");

//    // Нажатие на кнопку поиска
//    searchButton.addEventListener("click", () => {
//       toggleSearch();
//    });

//    // Потеря фокуса на input
//    searchInput.addEventListener("blur", () => {
//       setTimeout(() => {
//          if (!searchInput.value.trim()) {
//             toggleSearch();
//          }
//       }, 100);
//    });

//    // Функция переключения состояния
//    function toggleSearch() {
//       if (searchInput.classList.contains("active")) {
//          searchInput.classList.remove("active");
//          searchButton.classList.remove("hidden");
//       } else {
//          searchInput.classList.add("active");
//          searchButton.classList.add("hidden");
//          searchInput.focus(); // Фокусируем поле
//       }
//    }
// });

// Кнопка бургера
document.querySelector('.burger').addEventListener('click', function () {
   this.classList.toggle('active');
   // document.querySelector('.menu__body').classList.toggle('active');
});

const equipmentItem = document.querySelector('.menu__item-equipment');
const equipmentDropdown = document.querySelector('.dropdown-equipment');
let hideTimer = null;

// Функция для скрытия dropdown с задержкой
const hideDropdown = () => {
   hideTimer = setTimeout(() => {
      equipmentDropdown.style.display = 'none';
   }, 150);
};

// Показываем dropdown без задержки
equipmentItem.addEventListener('mouseenter', () => {
   clearTimeout(hideTimer);
   equipmentDropdown.style.display = 'flex';
});

// При уходе с пункта меню
equipmentItem.addEventListener('mouseleave', (e) => {
   const related = e.relatedTarget;
   const isMovingToDropdown = related?.closest('.dropdown-equipment');

   if (!isMovingToDropdown) {
      hideDropdown();
   }
});

// При уходе с dropdown
equipmentDropdown.addEventListener('mouseleave', (e) => {
   const related = e.relatedTarget;
   const isMovingToItem = related?.closest('.menu__item-equipment');

   if (!isMovingToItem) {
      hideDropdown();
   }
});

// Отменяем скрытие при новом наведении
equipmentDropdown.addEventListener('mouseenter', () => {
   clearTimeout(hideTimer);
});

// Обработчики для содержимого dropdown
const equipmentButtons = document.querySelectorAll('.left-side__button');
equipmentButtons.forEach(button => {
   button.addEventListener('click', (e) => {
      // Снимаем активный класс со всех кнопок
      equipmentButtons.forEach(btn => {
         btn.classList.remove('active');
      });

      // Добавляем активный класс текущей кнопке
      button.classList.add('active');

      // Переключаем табы
      const target = button.dataset.target;
      const tabs = document.querySelectorAll('.right-side__box');
      tabs.forEach(tab => {
         tab.classList.remove('active');
      });

      // Активируем нужный таб
      if (target) {
         const activeTab = document.querySelector(`.${target}`);
         if (activeTab) {
            activeTab.classList.add('active');
         }
      }
   });
});

//? dropdown-equipment
// const equipmentButtons = document.querySelectorAll('.left-side__button');

// equipmentButtons.forEach(button => {
//    button.addEventListener('click', e => {
//       // Снимаю активный класс с со всех equipmentButtons
//       equipmentButtons.forEach(btn => {
//          btn.classList.remove('active');
//       });

//       button.classList.add('active');

//       const target = button.dataset.target;
//       const tabs = document.querySelectorAll('.right-side__box');

//       tabs.forEach(tab => {
//          tab.classList.remove('active');
//       });

//       document.querySelector(`.${target}`).classList.add('active');
//    });
// });

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


//? Вычисления что бы понять значение font-size
// const parentElement = document.querySelector('.active');
// const fontSize = window.getComputedStyle(parentElement).getPropertyValue('font-size')
// console.log(fontSize)




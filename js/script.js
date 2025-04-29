// // Тест бургера
// document.getElementById('burger-btn').addEventListener('click', function(){
//    this.classList.toggle('active');
//    document.getElementById('menu-navigation').classList.toggle('active');
// })

//Замена текста в элементе
function truncateText() {
   const components = document.getElementById('components');

   if (window.innerWidth <= 540) {
      components.textContent = 'Комплектующие';
   } else {
      components.textContent = 'Комлектующие и расходные материалы';
   };
}
window.addEventListener('resize', truncateText);
window.addEventListener('load', truncateText);

// Кнопка бургера
document.querySelector('.burger').addEventListener('click', function () {
   this.classList.toggle('active');
   // document.querySelector('.menu__body').classList.toggle('active');
});

//? Вычисления что бы понять значение font-size
// const parentElement = document.querySelector('.active');
// const fontSize = window.getComputedStyle(parentElement).getPropertyValue('font-size')
// console.log(fontSize)

//? dropdown-equipment
const equipmentButtons = document.querySelectorAll('.left-side__button');
equipmentButtons.forEach(button => {
   button.addEventListener('click', e => {
      // Снимаю активный класс с со всех equipmentButtons
      equipmentButtons.forEach(btn => {
         btn.classList.remove('active');
      });

      button.classList.add('active');

      const target = button.dataset.target;
      const tabs = document.querySelectorAll('.right-side__box');

      tabs.forEach(tab => {
         tab.classList.remove('active');
      });

      document.querySelector(`.${target}`).classList.add('active');
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

// document.addEventListener('DOMContentLoaded', function () {
//    const customersList = document.querySelector('.customers__list');

//    if (customersList && window.innerWidth <= 1440) {
//       new Swiper(customersList, {
//          slidePerView: 'auto',
//          spaceBetween: 40,
//          breakpoints: {
//             1440: {
//                slidesPerView: 3,
//             },
//          },
//          navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev'
//          },
//       });
//    }
// });






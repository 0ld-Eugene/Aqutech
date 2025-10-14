<?php 
   $uniqueId = 'privacyPolicy_' . uniqid();
?>

<section class="callback bg-gray" id="anchor-callback-form">
   <div class="callback__container">
      <div class="callback__left-side">
         <p>Оставьте заявку и мы свяжемся с вами</p>
         <div class="callback__content">
            <div class="callback__title">
               Ваша компания нуждается в надёжной системе водоподготовки?
            </div>
            <p class="callback__text text">
               Мы предлагаем полный спектр услуг и оборудования — от анализа воды и подбора оптимальных решений
               до профессиональной установки и сервисного обслуживания. Ориентируемся на потребности бизнеса
               и гарантируем высокое качество на каждом этапе.
            </p>
         </div>
      </div>
      <div class="callback__right-side">
         <form class="callback__form" id="contact-form" action="./callback-handler.php" method="post" novalidate>
            <div class="callback__name">
               <input type="text" name="name" id="name" placeholder="Ваше имя" aria-label="Ваше имя" required>
               <span class="input-error-message" aria-live="polite"></span>
            </div>
            <div class="callback__group">
               <div class="callback__input-wrapper">
                  <input type="text" name="phone" id="phone" placeholder="Телефон" aria-label="Телефон"
                     pattern="^\+?[0-9]{7,15}$" required>
                  <span class="input-error-message" aria-live="polite"></span>
               </div>
               <div class="callback__input-wrapper">
                  <input type="email" name="email" id="email" placeholder="E-mail" aria-label="email" required>
                  <span class="input-error-message" aria-live="polite"></span>
               </div>
            </div>
            <div class="callback__policy">
               <label for="<?php echo $uniqueId; ?>">
                  <input type="checkbox" id="<?php echo $uniqueId;?>" name="privacyPolicy" required>
                  <span class="text">Я согласен (-на) с политикой конфиденциальности и обработки
                     персональных данных.</span>
                  <span class="input-error-message" aria-live="polite"></span>
               </label>
            </div>
            <div class="callback__button">
               <button class="button" type="submit">
                  <span>Отправить</span>
               </button>
            </div>
         </form>
      </div>
   </div>
</section>
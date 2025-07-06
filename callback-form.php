<?php 
   $uniqueId = 'privacyPolicy_' . uniqid();
?>

<section class="callback bg-color">
   <div class="callback__container">
      <div class="callback__left-side">
         <p>Оставьте заявку и мы свяжемся с вами</p>
         <div class="callback__content">
            <h4 class="callback__title title-small">
               Ваша компания нуждается в надёжной системе водоподготовки?
            </h4>
            <p class="callback__text text">
               Мы предлагаем полный спектр услуг и оборудования — от анализа воды и подбора оптимальных решений
               до профессиональной установки и сервисного обслуживания. Ориентируемся на потребности бизнеса
               и гарантируем высокое качество на каждом этапе.
            </p>
         </div>
      </div>
      <div class="callback__right-side">
         <form class="callback__form" id="contact-form" action="#" method="post">
            <div class="callback__name">
               <input type="text" name="name" id="name" placeholder="Ваше имя" aria-label="Ваше имя" required>
            </div>
            <div class="callback__group">
               <input type="tel" name="phone" id="phone" placeholder="Телефон" aria-label="Телефон"
                  pattern="^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$" required>
               <input type="email" name="email" id="email" placeholder="E-mail" aria-label="email" required>
            </div>
            <div class="callback__policy">
               <label for="<?php echo $uniqueId; ?>">
                  <input type="checkbox" id="<?php echo $uniqueId;?>" name="privacyPolicy" required>
                  <span class="text">Я согласен (-на) с политикой конфиденциальности и обработки
                     персональных данных.</span>
               </label>
            </div>
            <div class="callback__button">
               <button class="button" type="submit" disabled>
                  <span>Отправить</span>
               </button>
            </div>
         </form>
      </div>
   </div>
</section>
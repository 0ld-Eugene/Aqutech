// gulpfile.mjs
import gulp from 'gulp';
import sharpResponsive from 'gulp-sharp-responsive';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
// import cleanCSS from 'gulp-clean-css'; // Минификация CSS

const { src, dest } = gulp;

// ЗАДАЧА: обработка изображений
// ======================
export const images = () => {
   return src('sources/**/*.{jpg,jpeg,png}', { encoding: false })
      .pipe(
         sharpResponsive({
            formats: [
               { format: 'webp', quality: 80 }
            ],
            includeOriginalFile: false
         })
      )
      .pipe(dest('images'));
};
// ЗАДАЧА: обработка CSS
// ======================
export const styles = () => {
   return src('styles/main.css')               // берём исходный CSS-файл
      .pipe(postcss([autoprefixer()]))      // прогоняем через autoprefixer (добавит префиксы)
      // .pipe(cleanCSS())                     // минифицируем CSS (опционально)
      .pipe(dest('css'));                   // сохраняем в ту же папку, перезаписывая main.css
};

export default images;

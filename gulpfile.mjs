// gulpfile.mjs
import gulp from 'gulp';
import sharpResponsive from 'gulp-sharp-responsive';

const { src, dest } = gulp;

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

export default images;

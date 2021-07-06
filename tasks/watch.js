const {
  watch,
  parallel,
  series
} = require('gulp');

module.exports = function watching() {
  watch('src/**/*.pug', parallel('pug2html'));
  watch('src/**/*.scss', parallel('style'));
  watch('src/**/*.js', parallel('dev2js'));
  watch('src/img/**/*.+(svg|ico)', parallel('rastr'));
  watch('src/img/**/*.+(png|jpg|jpeg|gif)', series('rastr', 'webp'));
  watch('src/svg/css/**/*.svg', series('svg2css', 'style'));
  watch('src/svg/**/*.svg', series('svg2sprite', 'rastr'));
  watch('src/fonts/**/*.ttf', series('ttf', 'ttf2', 'fonts'));
}

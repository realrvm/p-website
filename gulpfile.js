const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.libs2style = tasks.libs2style;
exports.svg2css = tasks.svg2css;
exports.fonts = tasks.fonts;
exports.style = tasks.style;
exports.build2js = tasks.build2js;
exports.libs2js = tasks.libs2js;
exports.dev2js = tasks.dev2js;
exports.pug2html = tasks.pug2html;
exports.php = tasks.php;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.svg2sprite = tasks.svg2sprite;
exports.ttf = tasks.ttf;
exports.ttf2 = tasks.ttf2;
exports.bs2html = tasks.bs2html;
exports.bs2php = tasks.bs2php;
exports.watch = tasks.watch;
exports.deploy = tasks.deploy;

exports.default = gulp.parallel(
  exports.libs2style,
  exports.svg2css,
  exports.ttf,
  exports.ttf2,
  exports.fonts,
  exports.style,
  exports.libs2js,
  exports.dev2js,
  exports.rastr,
  exports.webp,
  exports.svg2sprite,
  exports.pug2html,
  exports.bs2html,
  exports.watch
)
exports.dev2php = gulp.parallel(
  exports.libs2style,
  exports.svg2css,
  exports.ttf,
  exports.ttf2,
  exports.fonts,
  exports.style,
  exports.libs2js,
  exports.dev2js,
  exports.rastr,
  exports.webp,
  exports.svg2sprite,
  exports.php,
  exports.bs2php,
  exports.watch
)

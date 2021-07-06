const gulp = require("gulp");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const pugLinter = require("gulp-pug-linter");
const bs = require("browser-sync");

module.exports = function pug2html() {
    return gulp
        .src("src/pages/*.pug")
        .pipe(plumber())
        .pipe(pugLinter({ reporter: "default" }))
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest("build"))
        .pipe(bs.stream());
};

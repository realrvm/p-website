const gulp = require("gulp");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const pugLinter = require("gulp-pug-linter");
const rename = require("gulp-rename");
const bs = require("browser-sync");

module.exports = function php() {
    return gulp
        .src("src/pages/*.pug")
        .pipe(plumber())
        .pipe(pugLinter({ reporter: "default" }))
        .pipe(pug({ pretty: true }))
        .pipe(rename({ extname: ".php" }))
        .pipe(gulp.dest("build"))
        .pipe(bs.stream());
};

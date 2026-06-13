const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles() {
  return gulp
    .src("C:/Users/kombo/OneDrive/Desktop/Новая папка (2)/stepproject2.2/src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("C:/Users/kombo/OneDrive/Desktop/Новая папка (2)/stepproject2.2/css"));
}

exports.default = styles;
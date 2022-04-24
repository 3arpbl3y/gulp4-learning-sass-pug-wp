const { src, dest } = require("gulp");

const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries");

//cfg

const path = require("../config/path.js");

const css = () => {
  return (
    src(path.css.src, { sourcemaps: true })
      .pipe(plumber())
      .pipe(concat("style.css")) //объеденяет файлы стилей в один
      .pipe(cssimport()) //для работы @import, заменяет импорт на содержимое
      .pipe(autoprefixer()) //для совместимости старых стилей со старыми браузерами.
      // как далеко заходить указывается в ЖСОНе
      .pipe(shorthand())
      .pipe(groupCssMediaQueries())
      .pipe(size({ title: "style.css" }))
      .pipe(dest(path.css.dest, { sourcemaps: true })) //свойство сорсмэпс
      // добавляет комментарий по кторому можно отследить настоящее место куска кода/стиля
      .pipe(rename({ suffix: ".min" })) //два файла, для работы и для размещения
      .pipe(csso()) //сжимает файлы, удаляя пробелы
      .pipe(size({ title: "style.min.css" })) //показывает размер сжатия
      .pipe(dest(path.css.dest, { sourcemaps: true }))
  );
};

module.exports = css;

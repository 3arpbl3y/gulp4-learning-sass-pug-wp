const { src, dest } = require("gulp");

const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
//cfg

const path = require("../config/path.js");

const css = () => {
  return src(path.css.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(concat("style.css"))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(dest(path.css.dest, { sourcemaps: true }));
};

module.exports = css;

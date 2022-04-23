const { src, dest } = require("gulp");

const plumber = require("gulp-plumber");
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
//cfg

const path = require("../config/path.js");

const css = () => {
  return src(path.css.src)
    .pipe(plumber())
    .pipe(concat("style.css"))
    .pipe(cssimport())
    .pipe(dest(path.css.dest));
};

module.exports = css;

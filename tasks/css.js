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
  return src(path.css.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(concat("style.css"))
    .pipe(cssimport())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "style.css" }))
    .pipe(dest(path.css.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "style.min.css" }))
    .pipe(dest(path.css.dest, { sourcemaps: true }));
};

module.exports = css;

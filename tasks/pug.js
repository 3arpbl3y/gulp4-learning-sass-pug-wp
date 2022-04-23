const { src, dest } = require("gulp");

const plumber = require("gulp-plumber");
const pugs = require("gulp-pug");

//файл конфиг для задач
const path = require("./config/path.js");

const pug = () => {
  return src(path.pug.src)
    .pipe(plumber())
    .pipe(pugs())
    .pipe(dest(path.pug.dest));
};

module.exports = pug;

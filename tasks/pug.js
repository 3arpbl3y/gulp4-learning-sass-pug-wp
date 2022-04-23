const { src, dest } = require("gulp");

const plumber = require("gulp-plumber");
const pugs = require("gulp-pug");

const pug = () => {
  return src("./src/pug/*.pug")
    .pipe(plumber())
    .pipe(pugs())
    .pipe(dest("./public"));
};

module.exports = pug;

const { src, dest } = require("gulp");

//cfg

const path = require("../config/path.js");
const app = require("../config/app.js");

//plugins
const fileInclude = require("gulp-file-include");
const htmlMin = require("gulp-htmlmin");
const size = require("gulp-size");
const plumber = require("gulp-plumber");

const html = () => {
  return src(path.html.src)
    .pipe(plumber())
    .pipe(fileInclude())
    .pipe(size())
    .pipe(htmlMin(app.htmlMin))
    .pipe(size({ title: "after" }))
    .pipe(dest(path.html.dest));
};

module.exports = html;

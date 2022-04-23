const { src, dest } = require("gulp");

//plugins
const fileInclude = require("gulp-file-include");
const htmlMin = require("gulp-htmlmin");
const size = require("gulp-size");
const plumber = require("gulp-plumber");

const html = () => {
  return src("./src/html/*.html")
    .pipe(plumber())
    .pipe(fileInclude())
    .pipe(size())
    .pipe(
      htmlMin({
        collapseWhitespace: true,
      })
    )
    .pipe(size({ title: "after" }))
    .pipe(dest("./public"));
};

module.exports = html;

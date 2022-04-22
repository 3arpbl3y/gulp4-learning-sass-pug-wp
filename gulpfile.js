const { src, dest, watch, series, parallel } = require("gulp");
const del = require("del");
const browserSync = require("browser-sync").create();

//plugins
const fileInclude = require("gulp-file-include");
const htmlMin = require("gulp-htmlmin");
const size = require("gulp-size");
const plumber = require("gulp-plumber");
const pugs = require("gulp-pug");

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
    .pipe(dest("./public"))
    .pipe(browserSync.stream());
};

// const pug = () => {
//   return src("./src/pug/*.pug")
//     .pipe(plumber())
//     .pipe(pugs())
//     .pipe(dest("./public"))
//     .pipe(browserSync.stream());
// };

// const pug = () => {
//   return src("./src/pug/*.pug")
//     .pipe(plumber())
//     .pipe(pugs())
//     .pipe(dest("./public"));
// };

//server

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
  });
};

//удаление временных файлов и директории
const clear = () => {
  return del("./public");
};

const watcher = () => {
  watch("./src/html/**/*.html", html);
};

exports.pug = html;
exports.clear = clear;
// exports.html = html;
exports.dev = series(clear, html, parallel(watcher, server));

const { watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

//cfg

const path = require("./config/path.js");

//tasks

const clear = require("./tasks/clear.js");
const pug = require("./tasks/pug.js");
const scss = require("./tasks/scss.js");
//server

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

//удаление временных файлов и директории

const watcher = () => {
  watch(path.pug.watch, pug).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
};

exports.pug = pug;
exports.clear = clear;
exports.scss = scss;

//build
exports.dev = series(clear, parallel(pug, scss), parallel(watcher, server));

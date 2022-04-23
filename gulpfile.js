const { watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

//cfg

const path = require("./config/path.js");

//tasks

const clear = require("./tasks/clear.js");
const pug = require("./tasks/pug.js");

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
};

exports.pug = pug;
exports.clear = clear;
// exports.html = html;
exports.dev = series(clear, pug, parallel(watcher, server));

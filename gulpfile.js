const { watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

//tasks

const clear = require("./tasks/clear.js");
const pug = require("./tasks/pug.js");

//server

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
  });
};

//удаление временных файлов и директории

const watcher = () => {
  watch("./src/pug/**/*.pug", pug).on("all", browserSync.reload);
};

exports.pug = pug;
exports.clear = clear;
// exports.html = html;
exports.dev = series(clear, pug, parallel(watcher, server));

const { watch, series, parallel } = require("gulp");

const browserSync = require("browser-sync").create();

//config
const path = require("./config/path.js");

// const packageName = require("./config/path.js");

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

//наблюдатель, следит за изменениями файлов и обновляет их
const watcher = () => {
  watch(path.pug.watch, pug).on("all", browserSync.reload);
};

exports.pug = pug;
exports.clear = clear;
// exports.html = html;
// команда gulp dev при запуске будет очищать ненужны файлы,
// ПАГ для шаблонизатор и потом параллельно будет работать наблюдатель
// и обновления сервера browserSync
exports.dev = series(clear, pug, parallel(watcher, server));

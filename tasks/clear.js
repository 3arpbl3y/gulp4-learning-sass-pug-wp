const del = require("del");

//файл конфиг для задач
const path = require("../config/path.js");

const clear = () => {
  return del(path.root);
};

module.exports = clear;

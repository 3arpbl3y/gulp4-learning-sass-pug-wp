const del = require("del");

//cfg

const path = require("../config/path.js");

const clear = () => {
  return del(path.root);
};

module.exports = clear;

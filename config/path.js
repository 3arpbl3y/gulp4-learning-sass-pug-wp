const pathSrc = "../src";
const pathDest = "./dest";

//экспортируем два объекта переменных со свойствами, которые
//потом будем вписывать в функции html, clear, pug
module.exports = {
  root: pathDest,
  html: {
    src: {
      src: pathSrc + "/html/*.html",
      watch: pathSrc + "/html/**/*.html",
      dest: pathDest,
    },
  },
  pug: {
    src: {
      src: pathSrc + "/pug/*.pug",
      watch: pathSrc + "/pug/**/*.pug",
      dest: pathDest,
    },
  },
};

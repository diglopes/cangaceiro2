import { handleStatus, log } from "./utils/promise-helpers.js";
import "./utils/array-helpers.js";

const sumItems = (code) => (items) => {
  return items
    .$flatMap((nota) => nota.itens)
    .filter((item) => item.codigo === code)
    .reduce((total, atual) => total + atual.valor, 0);
};

document.getElementById("myButton").onclick = () =>
  fetch("/notas")
    .then(handleStatus)
    .then(sumItems("2143"))
    .then(log)
    .catch(log);

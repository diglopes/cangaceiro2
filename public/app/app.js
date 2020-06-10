import { handleStatus, log } from "./utils/promise-helpers.js";
import "./utils/array-helpers.js";

const sumItems = (items) => {
  return items
    .$flatMap((nota) => nota.itens)
    .filter((item) => item.codigo === "2143")
    .reduce((total, atual) => total + atual.valor, 0);
};

document.getElementById("myButton").onclick = () =>
  fetch("/notas").then(handleStatus).then(sumItems).then(log).catch(log);

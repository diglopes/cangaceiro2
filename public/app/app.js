import { handleStatus, log } from "./utils/promise-helpers.js";

document.getElementById("myButton").onclick = () =>
  fetch("/notas")
    .then(handleStatus)
    .then((notas) => notas.reduce((arr, nota) => arr.concat(nota.itens), []))
    .then((itens) => itens.filter((item) => item.codigo === "2143"))
    .then((itens) => itens.reduce((total, atual) => total + atual.valor, 0))
    .then(log)
    .catch(log);

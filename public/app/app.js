import "./utils/array-helpers.js";
import config from "./config/index.js";
import { createNotasService } from "./nota/service.js";
import { log } from "./utils/promise-helpers.js";

const sumItems = (code) => (items) => {
  return items
    .$flatMap((nota) => nota.itens)
    .filter((item) => item.codigo === code)
    .reduce((total, atual) => total + atual.valor, 0);
};

const notasService = createNotasService(config.notasEndpoint);

document.getElementById("myButton").onclick = () =>
  notasService.listAll().then(sumItems("2143")).then(log).catch(log);

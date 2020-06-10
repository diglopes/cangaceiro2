import { handleStatus } from "./utils/promise-helpers.js";

document.getElementById("myButton").onclick = () =>
  fetch("/notasx")
    .then(handleStatus)
    .then((notas) => console.log(notas))
    .catch((err) => console.log(err));

import { handleStatus } from "../utils/promise-helpers.js";

export const createNotasService = (endpoint) => {
  function listAll() {
    return fetch(endpoint)
      .then(handleStatus)
      .catch((err) => {
        console.log(err);
        return Promise.reject("Não foi possivel obter as notas fiscais");
      });
  }

  return {
    listAll,
  };
};

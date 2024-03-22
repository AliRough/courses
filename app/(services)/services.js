import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export const getHeader= () => {
  const url = `${SERVER_URL}/header`;
  return axios.get(url);
};

export const getAllServing = () => {
  const url = `${SERVER_URL}/serving`;
  return axios.get(url);
};

export const getServing = (id) => {
  const url = `${SERVER_URL}/serving/${id}`;
  return axios.get(url);
};

export const getAllCards = () => {
  const url = `${SERVER_URL}/cards`;
  return axios.get(url);
};

export const updateCard = (card) => {
  const url = `${SERVER_URL}/cards/${card.id}`;
  return axios.put(url, card);
};

// export const deleteCard = (id) => {
//   const url = `${SERVER_URL}/cards/${id}`;
//   return axios.delete(url);
// };

export const createCard = (card) => {
  const url = `${SERVER_URL}/cards`;
  return axios.post(url, card);
};
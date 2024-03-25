// 'use client';

import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

axios.defaults.baseURL = baseUrl;

export const getHeader = async () => {
  try {
    const data = await axios.get('/header');
    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};

// export const CourseByIdApi = async (id: number) => {
//   try {
//     const data = await axios.get('/course/' + id);
//     return data.data;
//   } catch (error: any) {
//     throw error.response.data;
//   }
// };

// export const getHeader = () => {
//   const url = `${SERVER_URL}/header`;
//   return axios.get(url);
// };

// export const getAllServing = () => {
//   const url = `${SERVER_URL}/serving`;
//   return axios.get(url);
// };

// export const getServing = (id: any) => {
//   const url = `${SERVER_URL}/serving/${id}`;
//   return axios.get(url);
// };

// export const getAllCards = () => {
//   const url = `${SERVER_URL}/cards`;
//   return axios.get(url);
// };

// export const updateCard = (card: any) => {
//   const url = `${SERVER_URL}/cards/${card.id}`;
//   return axios.put(url, card);
// };

// // export const deleteCard = (id) => {
// //   const url = `${SERVER_URL}/cards/${id}`;
// //   return axios.delete(url);
// // };

// export const createCard = (card: any) => {
//   const url = `${SERVER_URL}/cards`;
//   return axios.post(url, card);
// };

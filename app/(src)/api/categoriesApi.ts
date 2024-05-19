import axios from 'axios';

const baseUrl = '';
export const getAllCategories = async () => {
  try {
    const data = await axios.get('https://eduapi.liara.run/api/packages ');

    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

'use client';

import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

axios.defaults.baseURL = baseUrl;

export const InstructorAllApi = async () => {
  try {
    const data = await axios.get('/instructors');
    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const InstructorByIdApi = async (id: number) => {
  try {
    const data = await axios.get('/instructor/' + id);
    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const InstructorRelatedApi = async () => {
  try {
    const data = await axios.get('/instructor_related/');
    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

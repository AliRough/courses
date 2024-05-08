'use client';

import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

axios.defaults.baseURL = baseUrl;

export const CourseAllApi = async () => {
  try {
    const data = await axios.get('/courses');
    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const CourseByIdApi = async (id: number) => {
  try {
    const data = await axios.get('/course/' + id);
    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const CourseByTagApi = async (tag: string) => {
  try {
    const data = await axios.get('/courses');

    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

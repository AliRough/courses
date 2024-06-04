'use client';

import axios from 'axios';


const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

// axios.defaults.baseURL = baseUrl;

export const CourseAllApi = async () => {
  try {
    const data = await axios.get('https://eduapi.liara.run/api/courses');
    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const CourseByIdApi = async (id: number) => {
  try {
    const data = await axios.get('https://eduapi.liara.run/api/courses/' + id);
    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const CourseByTagApi = async (tag: string) => {
  try {
    const data = await axios.get('http://localhost:9000/courses');

    return data.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

export const getAllPackages = async () => {
  try {
    const data = await axios.get('https://eduapi.liara.run/api/packages ');

    return data.data;
  } catch (error: any) {
    throw error;
  }
};

export const getAllCategories = async (perPage?: any) => {
  let url = `https://eduapi.liara.run/api/categories${perPage ? '?perPage=' + perPage : ''}`;

  try {
    const data = await axios.get(url);

    return data.data;
  } catch (error: any) {
    throw error;
  }
};

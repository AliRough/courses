'use client';

import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

axios.defaults.baseURL = baseUrl;

export const CourseAllApi = async (
  page?: any,
  perPage?: any,
  param?: any,
  Cid?: any,
) => {
  try {
    const data = await axios.get(
      `/api/courses?perPage=${perPage ? perPage : ''}${page ? '&page=' + page : ''}&title[lk]=%${param ? param : ''}%&categoryId[eq]=${Cid ? Cid : ''}`,
    );

    return { data: data.data, perPage };
  } catch (error: any) {
    throw error.response.data;
  }
};

export const CourseByIdApi = async (id: number) => {
  try {
    const data = await axios.get('/api/courses/' + id);
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

export const getAllPackages = async (perPage?: any) => {
  try {
    const data = await axios.get(
      `/api/packages?perPage=${perPage ? perPage : ''}`,
    );

    return data.data;
  } catch (error: any) {
    throw error;
  }
};

export const getAllCategories = async (perPage?: any) => {
  let url = `/api/categories${perPage ? '?perPage=' + perPage : ''}`;

  try {
    const data = await axios.get(url);

    return data.data;
  } catch (error: any) {
    throw error;
  }
};
export const getFillteredCourses = async (param?: any) => {
  let url = `/api/courses?title[lk]=%${param}%`;
  try {
    const data = await axios.get(url);

    return data.data;
  } catch (error: any) {
    throw error;
  }
};

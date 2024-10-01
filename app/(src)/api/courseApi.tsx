'use client';

import axios from 'axios';
import { toast } from 'react-toastify';
import { boolean } from 'zod';

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

axios.defaults.baseURL = baseUrl;

export const CourseAllApi = async (
  page?: any,
  perPage?: any,
  param?: any,
  Cslug?: any,
) => {
  try {
    const data = await axios.get(
      `/api/courses?perPage=${perPage ? perPage : ''}${page ? '&page=' + page : ''}&title[lk]=%${param ? param : ''}%&category[eq]=${Cslug ? Cslug : ''}`,
    );

    return { data: data.data, perPage };
  } catch (error: any) {
    throw error.response.data;
  }
};

export const CourseByIdApi = async (id: number) => {
  try {
    const { data } = await axios.get('/api/courses/' + id + '?includeEpisodes');
    return data;
  } catch (error: any) {
    throw error.response.data;
  }
};
export const episodeCommentsApi = async (
  courseId: number,
  episodeId: number,
) => {
  try {
    const data = await axios.get(
      `/api/courses/${courseId}/episodes/${episodeId}/comments`,
    );
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

export const getPackage = async (id: any) => {
  try {
    if (id) {
      const data = await axios.get(`/api/packages/${id}?includeCourses`);
      return data.data;
    }
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

export const postComments = async (formData: any, token: any) => {
  if (!token) {
    toast.error('برای ارسال دیدگاه خود ابتدا وارد شوید');
    throw new Error('برای ارسال دیدگاه خود ابتدا وارد شوید');
  }
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `api/comments`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',

      Authorization: `Bearer ${token}`,
    },
    data: formData,
  };

  const data: any = await axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.response.data.message);
      throw new Error(error.response.data);
    });
  console.log(data);
};

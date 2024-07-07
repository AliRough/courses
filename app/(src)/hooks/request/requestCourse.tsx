'use client';

import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';

import * as api from '@/app/(src)/api/courseApi';

import { TCourse } from '@/app/(src)/model/course.d';
import { useCookies } from 'react-cookie';

export const useGetAllCourses = (
  page?: number,
  perPage?: number,
  params?: string,
  Cslug?: any,
) => {
  return useQuery({
    queryKey: ['course_all', 'categoryId ' + Cslug, 'pageNumber ' + page],
    queryFn: () => api.CourseAllApi(page, perPage, params, Cslug),
  });
};

export const useGetAllCategories = (perPage?: any) => {
  return useQuery({
    queryKey: ['categories_all'],
    queryFn: () => api.getAllCategories(perPage),
  });
};

export const useGetAllPackages = (perPage?: any) => {
  return useQuery({
    queryKey: ['Packages_all'],
    queryFn: () => api.getAllPackages(perPage),
  });
};

export const useGetPackage = (id: any) => {
  return useQuery({
    queryKey: ['Package', id],
    queryFn: () => api.getPackage(id),
  });
};

export const useCourseById = (id: number): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ['course', id],
    queryFn: () => api.CourseByIdApi(id),
  });
};

export const useGetCart = () => {
  return useQuery({
    queryKey: ['ach'],
    queryFn: () => {
      const [cookies] = useCookies(['cart']);

      console.log('hhss', cookies);
      return cookies;
    },
  });
};
const addto = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['cart']);
  setCookie('cart', 'hdbscv');
  console.log('hhss', cookies);
  return cookies;
};


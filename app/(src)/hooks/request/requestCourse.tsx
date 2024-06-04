'use client';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

import * as api from '@/app/(src)/api/courseApi';

import { TCourse } from '@/app/(src)/model/course.d';

export const useGetAllCourses = () => {
  return useQuery({
    queryKey: ['course_all'],
    queryFn: api.CourseAllApi,
  });
};

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ['categories_all'],
    queryFn: () => api.getAllCategories(),
  });
};

export const useGetAllPackages = () => {
  return useQuery({
    queryKey: ['Packages_all'],
    queryFn: () => api.getAllPackages(),
  });
};

export const useCourseById = (id: number): UseQueryResult<any, Error> => {
  return useQuery({
    queryKey: ['course', id],
    queryFn: () => api.CourseByIdApi(id),
  });
};

export const useCourseByTag = (tag: string): UseQueryResult<TCourse, Error> => {
  return useQuery({
    queryKey: ['course', tag],
    queryFn: () => api.CourseByTagApi(tag),
  });
};

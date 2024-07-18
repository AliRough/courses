'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query';

import * as api from '@/app/(src)/api/courseApi';

import { TCourse } from '@/app/(src)/model/course.d';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';

export const useGetAllCourses = (
  page?: number,
  perPage?: number,
  params?: string,
  Cslug?: any,
) => {
  return useQuery({
    refetchOnWindowFocus: false,
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
    refetchOnWindowFocus: false,
    queryKey: ['course', id],
    queryFn: () => api.CourseByIdApi(id),
  });
};

export const useGetCommentsEpisode = (
  courseId: number,
  episodeId: number,
): UseQueryResult<any, Error> => {
  return useQuery({
    refetchOnWindowFocus: false,
    queryKey: ['comments of', 'course', courseId, 'episode', episodeId],
    queryFn: () => api.episodeCommentsApi(courseId, episodeId),
  });
};

export const usePostComments = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
 
  return useMutation({
    mutationFn: (formData: any) =>
      api.postComments(formData, cookies.Authorization),
    onSuccess: (data) => {
      toast.info(' دیدگاه شما پس از بررسی انتشار داده می شود');
    },
    onError: (error: any) => {
      console.log(error);

      toast.error(error.code);
    },
  });
};

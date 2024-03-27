'use client';

import { useQuery, UseQueryResult } from '@tanstack/react-query';

import * as api from '@/app/(src)/api/courseApi';

import { TCourse } from '@/app/(src)/model/course.d';

export const useCourseAll = () => {
    return useQuery({ queryKey: ['course_all'], queryFn: api.CourseAllApi })
}

export const useCourseById = (id: number): UseQueryResult<TCourse, Error> => {
    return useQuery({ queryKey: ['course', id], queryFn: () => api.CourseByIdApi(id) })
}

export const useCourseByTag = (tag: string): UseQueryResult<TCourse, Error> => {
    return useQuery({ queryKey: ['course', tag], queryFn: () => api.CourseByTagApi(tag) })
}

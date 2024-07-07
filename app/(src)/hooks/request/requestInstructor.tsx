'use client';

import { useQuery } from '@tanstack/react-query';
import * as api from '@/app/(src)/api/instructorApi';

export const useInstructorAll = () => {
  return useQuery({
    queryKey: ['instructor_all'],
    queryFn: api.InstructorAllApi,
  });
};

export const useTeacherById = (id: number) => {
  return useQuery({
    queryKey: ['teachers', id],
    queryFn: () => api.TeacherByIdApi(id),
  });
};

export const useInstructorRelated = () => {
  return useQuery({
    queryKey: ['instructor_related'],
    queryFn: api.InstructorRelatedApi,
  });
};

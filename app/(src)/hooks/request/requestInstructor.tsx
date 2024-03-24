'use client';

import { useQuery } from '@tanstack/react-query';
import * as api from '@/app/(src)/api/instructorApi';

export const useInstructorAll = () => {
  return useQuery({ queryKey: ['instructor_all'], queryFn: api.InstructorAllApi })
}

export const useInstructorById = (id: number) => {
  return useQuery({ queryKey: ['instructor', id], queryFn: () => api.InstructorByIdApi(id) })
}

export const useInstructorRelated = () => {
  return useQuery({ queryKey: ['instructor_related'], queryFn: api.InstructorRelatedApi })
}

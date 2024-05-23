'use client';

import { TInstructor } from '@/app/(src)/model/instructor.d';
import { TFaq, TTag } from '@/app/(src)/model/other.d';

export type TCourses = {
  id: number;
  title: string;
  level: string;
  cover: string;
  description: string;
  liked: boolean;
  rating: number;
  videos: number;
  time: string;
  category: string;
};
export type TCurriculum = {
  title: string;
  count: number;
  detail: TCurriculumDetail[];
};

export type TCurriculumDetail = {
  title: string;
  time: string;
  video: string;
  src: string;
  money: boolean;
};

export type TCourse = {
  id: number;
  title: string;
  level: string;
  image: string;
  short_description: string;
  description: string;
  rating: number;
  last_updated: string;
  language: string;
  enrolled: number;
  lectures: number;
  duration: string;
  category: string;
  price: number;
  discoun: number;
  discount_percent: number;
  time_left_discount: string;
  certificate: boolean;
  tags: TTag[];
  curriculum: TCurriculum[];
  instructor: TInstructor;
  faq: TFaq[];
  reviews: string;
  comments: string;
};

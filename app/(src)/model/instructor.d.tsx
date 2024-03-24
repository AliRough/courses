'use client'

import { TCourses } from '@/app/(src)/model/course.d';
import { TEducation, TSkill, TSocial_media } from '@/app/(src)/model/other.d';

export type TInstructorRelated = {
    id: string;
    name: string;
    rating: number;
    image: string;
    categrory: string;
    courses: number;
    students: number;
}

export type TInstructorListItem = {
    id: string;
    name: string;
    rating: number;
    image: string;
    categrory: string;
    university: string;
    description: string;
    social_media: TSocial_media;
}

export type TInstructor = {
    id: string;
    name: string;
    university: string;
    description: string;
    rating: number;
    image: string;
    categrory: string;
    address: string;
    email: string;
    phone: string;
    website: string;
    number_of_courses: number;
    number_of_students: number;
    years_of_teaching_experience: number;
    skill: TSkill[];
    education: TEducation[];
    social_media: TSocial_media;
    comments:number;
}

export type TInstructorDetail = {
    courses: TCourses[];
} & TInstructor
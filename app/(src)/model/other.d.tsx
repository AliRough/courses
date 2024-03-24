'use client'

export type TSocial_media = {
    telegram: string;
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    youtube: string;
};

export type TSkill = {
    name: string;
    percent: number;
};


export type TEducation = {
    university: string;
    level_of_education: string;
}

export type TTag = {
    name: string;
    link: string;
}

export type TFaq = {
    question: string;
    answer: string;
};
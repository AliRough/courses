'use client';

import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';
import { CreateCourseValidate } from '../../validations/createCourseValidate';

export type TCreateCourseValidate = z.infer<typeof CreateCourseValidate>;

export type TCreateCourseInputsOne = {
  category: UseFormRegisterReturn<string>;
  level: UseFormRegisterReturn<string>;
  // image: UseFormRegisterReturn<string>;
  description: UseFormRegisterReturn<string>;
  duration: UseFormRegisterReturn<string>;
  price: UseFormRegisterReturn<string>;
  discount_percent: UseFormRegisterReturn<string>;
  // certificate: UseFormRegisterReturn<string>;
  videos: UseFormRegisterReturn<string>;
  short_description: UseFormRegisterReturn<string>;
  title: UseFormRegisterReturn<string>;
};
export type TCreateCourseInputsTow = {
  image: UseFormRegisterReturn<string>;
  // certificate: UseFormRegisterReturn<string>;
};

export type TCreateCourseProps = {
  input: TCreateCourseInputs;
  handleSubmit: TCreateCourseValidate;
  errors: FieldErrors<TCreateCourseValidate>;
  submit: TCreateCourseValidate;
  price: number;
  plus: () => void;
  setSteper: any;
};
level;
image;
description;
duration;
price;
discount_percent;
certificate;
videos;
short_description;
title;
input2;

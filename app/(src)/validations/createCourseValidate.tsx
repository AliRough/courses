'use client';

import * as z from 'zod';

export const CreateCourseValidateOne = z.object({
  short_description: z
    .string()
    .min(1, { message: 'وارد کردن توضیحات کوتاه الزامیست' }),
  title: z.string().min(1, { message: 'وارد کردن عنوان الزامیست' }),
  category: z.string().min(1, { message: 'وارد کردن دسته بندی الزامیست' }),
  level: z.string().min(1, { message: 'وارد کردن سطح دوره الزامیست' }),
  duration: z.string().min(1, { message: 'وارد کردن مدت زمان دوره الزامیست' }),
  videos: z.string().min(1, { message: 'وارد کردن تعداد ویدیوها الزامیست' }),
  price: z.string().min(1, { message: 'وارد کردن قیمت الزامیست' }),
  discount_percent: z.string(),
  description: z.string().min(1, { message: 'وارد کردن توضیحات الزامیست' }),
  // image: z.string().min(1, { message: 'وارد کردن عنوان الزامیست' }),
  // certificate: z.string().min(1, { message: 'وارد کردن عنوان الزامیست' }),
});
export const CreateCourseValidateTow = z.object({
  image: z.any().refine((val) => val.length > 0, 'وارد کردن عکس الزامیست'),
  // certificate: z.string().min(1, { message: 'وارد کردن عنوان الزامیست' }),
});

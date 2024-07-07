'use client';

import * as z from 'zod';

const phoneValidation = new RegExp(
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
);

export const EditProfileValidata = z.object({
  aliasName: z.string(),
  name: z.string().min(1, { message: 'لطفا نام خود را وارد کنید' }),
});
export const changePassValidate = z
  .object({
    oldPassword: z
      .string()
      .regex(phoneValidation, {
        message: 'رمز عبور فعلی حود را وارد کنید',
      })
      .min(8),
    password: z
      .string()
      .regex(phoneValidation, {
        message: 'رمز عبور باید بین ۸ تا ۱۶ کاراکتر حروف کوچک بزرگ و اعداد باشد',
      })
      .min(8),
    passwordConfirmation: z
      .string()
      .min(8, { message: 'لطفا رمز عبور خود را تایید کنید' }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'رمز عبور با تکرار رمز عبور برابر نیست',
    path: ['passwordConfirmation'],
  });

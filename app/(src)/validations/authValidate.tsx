'use client';

import * as z from 'zod';

const phoneValidation = new RegExp(
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
);

export const signUpValidate = z
  .object({
    name: z.string().min(1, { message: 'لطفا نام خود را وارد کنید' }),
    email: z.string().min(1, { message: 'لطفا ایمیل خود را وارد کنید ' }),
    password: z
      .string()
      .regex(phoneValidation, {
        message: 'رمز عبور باید حداقل ۸ کاراکتر حروف کوچک بزرگ و اعداد باشد',
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

export const signInValidate = z.object({
  email: z.string().min(1, { message: 'لطفا ایمیل خود را وارد کنید ' }),
  password: z.string().min(1, { message: 'لطفا رمز عبور خود را وارد کنید ' }),
});

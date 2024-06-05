'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signInValidate } from '../../validations/authValidate';

import SignIn from '../SingIn';
import { useLogInUser } from '../../hooks/request/authUser';

export default function SignInController() {
  const { mutate: mutateLogInUser, isPending } = useLogInUser();

  const signInFormHandler =  (data: any) => {
    mutateLogInUser(data);
  };

  const {
    // ساختار پارامتر
    register,
    // کنترل دکمه سابمت به صورت اتوماتیک حالت رفرش رو غیر فعال میکنه.
    handleSubmit,
    // اگه اروری تولید کرد انتقال بده
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(signInValidate),
  });

  const input: any = {
    email: register('email'),
    password: register('password'),
  };

  const signInParams = {
    signInHandler: handleSubmit(signInFormHandler),
    input,
    errors,
    isPending,
  };
  return <SignIn {...signInParams} />;
}

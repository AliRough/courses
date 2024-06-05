'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { signUpValidate } from '../../validations/authValidate';
import { useRegisterUser } from '../../hooks/request/authUser';
import SignUp from '../signUp';

export default function SingUpController() {
  const { mutate: mutateRegisterUser, isPending } = useRegisterUser();

  const signUpFormHandler = (data: any) => {
    mutateRegisterUser(data);
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
    resolver: zodResolver(signUpValidate),
  });

  const input: any = {
    name: register('name'),
    email: register('email'),
    password: register('password'),
    passwordConfirmation: register('passwordConfirmation'),
  };

  const signUpParams = {
    signUpHandler: handleSubmit(signUpFormHandler),
    input,
    errors,
    isPending,
  };

  return <SignUp {...signUpParams} />;
}

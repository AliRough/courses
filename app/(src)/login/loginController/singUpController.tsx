'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signUpValidate } from '../../validations/authValidate';
import { redirect, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { authUserState } from '../../state/atoms';
// import { RMutation } from '../hooks/request/authUser';
import { useMutation } from '@tanstack/react-query';
import * as api from '@/app/(src)/api/authApi';
import { useAuthUser } from '../../hooks/request/authUser';
import Image from 'next/image';
import { useCookies } from 'react-cookie';
import SignUp from '../signUp';

export default function SingUpController() {
  const router = useRouter();

  const [authUserdata, setAuthUser]: any = useRecoilState(authUserState);

  // const R: any = RMutation();
  // const { mutate, isPending, data, isError, isSuccess, error } = useAuthUser();
  // console.log(isPending);
  // console.log('sucses', isSuccess);

  const [isPending, setIsPending] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);

  // onSuccess: () => {
  //   // Invalidate and refetch
  //   QueryClient.invalidateQueries({ queryKey: ['R'] });
  // },
  // });
  const signUpFormHandler: any = async (data: any) => {
    setIsPending(true);
    console.log(data);
    // await R(data);
    let response: any = await api.registerUser(data);
    console.log('response', response);

    if (response?.status === 201) {
      // setAuthUser(data);
      setCookie('Authorization',response.data.accessToken , { path: '/' });
      // localStorage.setItem('userData', JSON.stringify(data));

      router.push('/profile/s/dashboard');
    }
    setIsPending(false);
    // data.password !== data.passwordConfirmation && console.log('error');
  };

  console.log(authUserdata);

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

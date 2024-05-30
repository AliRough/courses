'use client';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInValidate } from '../../validations/authValidate';
import { registerUser } from '@/app/(src)/api/authApi';
import { redirect, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { authUserState } from '../../state/atoms';
// import { RMutation } from '../hooks/request/authUser';
import { useMutation } from '@tanstack/react-query';
import * as api from '@/app/(src)/api/authApi';
import { useAuthUser, useGetUser } from '../../hooks/request/authUser';
import Image from 'next/image';
import { useCookies } from 'react-cookie';
import Loading from '@/app/loading';

import { toast } from 'react-toastify';
import SignIn from '../SingIn';

export default function SignInController() {

  const router = useRouter();

  const [authUserdata, setAuthUser]: any = useRecoilState(authUserState);

  // const R: any = RMutation();
  // const { mutate, isPending, data, isError, isSuccess, error } = useAuthUser();
  // console.log(isPending);
  // console.log('sucses', isSuccess);

  const [isPending, setIsPending] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
  console.log('cookeis', cookies.Authorization);

  // onSuccess: () => {
  //   // Invalidate and refetch
  //   QueryClient.invalidateQueries({ queryKey: ['R'] });
  // },
  // });
  const signInFormHandler: any = async (data: any) => {
    setIsPending(true);
    console.log(data);
    // await R(data);
    let response: any = await api.logInUser(data);
    console.log('response', response);

    if (response?.status === 200) {
      // const userData = await api.getUserByToken(response.data.accessToken);

      // setAuthUser(userData);
      setCookie('Authorization', response.data.accessToken, { path: '/' });

      // localStorage.setItem('userData', JSON.stringify(data));

      router.push('/profile/s/edit-profile');
      toast.success('با موفقیت وارد شدید');
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

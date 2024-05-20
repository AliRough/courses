'use client';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signInValidate } from '../validations/authValidate';
import { registerUser } from '@/app/(src)/api/authApi';
import { redirect, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { authUserState } from '../state/atoms';
// import { RMutation } from '../hooks/request/authUser';
import { useMutation } from '@tanstack/react-query';
  import * as api from '@/app/(src)/api/authApi';
import { useAuthUser } from '../hooks/request/authUser';
import Image from 'next/image';
import { useCookies } from 'react-cookie';

export default function SignIn() {
  const router = useRouter();

  const [authUserdata, setAuthUser]:any = useRecoilState(authUserState);

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
      const userData = await api.getUserByToken(response.data.accessToken);
      // console.log(userData);

      setAuthUser(userData);
      setCookie('Authorization', response.data.accessToken, { path: '/' });

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
    resolver: zodResolver(signInValidate),
  });

  const input: any = {
    email: register('email'),
    password: register('password'),
  };

  return (
    <>
      {/* **************** MAIN CONTENT START **************** */}
      <main>
        <section className='p-0 d-flex align-items-center position-relative overflow-hidden'>
          <div className='container-fluid'>
            <div className='row'>
              {/* left */}
              <div className='col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100'>
                <div className='p-3 p-lg-5'>
                  {/* Title */}
                  <div className='text-center'>
                    <h2 className='fw-bold fs-3'>
                      به بزرگترین انجمن ما خوش آمدید
                    </h2>
                    <p className='mb-0 h6 fw-light'>
                      بیایید امروز چیز جدیدی یاد بگیریم!
                    </p>
                  </div>
                  {/* SVG Image */}
                  <Image
                    width={100}
                    height={100}
                    src='/images/element/02.svg'
                    className='mt-5 w-100 '
                    alt=''
                  />
                  {/* Info */}
                  <div className='d-sm-flex mt-5 align-items-center justify-content-center'>
                    {/* Avatar group */}
                    <ul className='avatar-group mb-2 mb-sm-0'>
                      <li className='avatar avatar-sm'>
                        <Image
                          width={100}
                          height={100}
                          className='avatar-img rounded-circle'
                          src='/images/avatar/01.jpg'
                          alt='avatar'
                        />
                      </li>
                      <li className='avatar avatar-sm'>
                        <Image
                          width={100}
                          height={100}
                          className='avatar-img rounded-circle'
                          src='/images/avatar/02.jpg'
                          alt='avatar'
                        />
                      </li>
                      <li className='avatar avatar-sm'>
                        <Image
                          width={100}
                          height={100}
                          className='avatar-img rounded-circle'
                          src='/images/avatar/03.jpg'
                          alt='avatar'
                        />
                      </li>
                      <li className='avatar avatar-sm'>
                        <Image
                          width={100}
                          height={100}
                          className='avatar-img rounded-circle'
                          src='/images/avatar/04.jpg'
                          alt='avatar'
                        />
                      </li>
                    </ul>
                    {/* Content */}
                    <p className='mb-0 h6 fw-light ms-0 ms-sm-3'>
                      {' '}
                      بیش از 100 دانشجو به ما پیوستند، حالا نوبت شماست.
                    </p>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className='col-12 col-lg-6 m-auto'>
                <div className='row my-5'>
                  <div className='col-sm-10 col-xl-8 m-auto'>
                    {/* Title */}
                    <span className='mb-0 fs-1'>👋</span>
                    <h1 className='fs-4'>ورود به حساب کاربری</h1>
                    <p className='mb-4'>
                      از دیدن شما خوشحالم! لطفا با حساب کاربری خود وارد شوید.
                    </p>
                    {/* Form START */}
                    <form onSubmit={handleSubmit(signInFormHandler)}>
                      {/* Email */}
                      <div className='mb-4'>
                        <label className='form-label'>ایمیل</label>
                        <div className='input-group input-group-lg'>
                          <span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
                            <i className='bi bi-envelope-fill' />
                          </span>
                          <input
                            type='email'
                            className='form-control border-0 bg-light rounded-end ps-1'
                            placeholder='***@gmail.com'
                            {...input.email}
                          />
                        </div>
                        <ErrorMessage
                          errors={errors}
                          name='email'
                          render={({ message }) => (
                            <p className='text-danger'>{message}</p>
                          )}
                        />
                      </div>
                      {/* Password */}
                      <div className='mb-4'>
                        <label className='form-label'>رمز عبور *</label>
                        <div className='input-group input-group-lg'>
                          <span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
                            <i className='fas fa-lock' />
                          </span>
                          <input
                            type='password'
                            className='form-control border-0 bg-light rounded-end ps-1'
                            placeholder='*********'
                            {...input.password}
                          />
                        </div>
                        <ErrorMessage
                          errors={errors}
                          name='password'
                          render={({ message }) => (
                            <p className='text-danger'>{message}</p>
                          )}
                        />
                      </div>
                      {/* Check box */}
                      <div className='mb-4 d-flex justify-content-between mb-4'>
                        <div className='form-check'>
                          <input
                            type='checkbox'
                            className='form-check-input'
                            id='exampleCheck1'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='exampleCheck1'
                          >
                            مرا به خاطر بسپار
                          </label>
                        </div>
                        <div className='text-primary-hover'>
                          <a
                            href='forgot-password.html'
                            className='text-secondary'
                          >
                            <u>رمز خود را فراموش کرده اید؟</u>
                          </a>
                        </div>
                      </div>
                      {/* Button */}
                      <div className='align-items-center mt-0'>
                        <div className='d-grid'>
                          <button
                            className='btn btn-primary mb-0'
                            type='submit'
                          >
                            ورود
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* Form END */}

                    {/* Sign up link */}
                    <div className='mt-4 text-center'>
                      <span>
                        حساب کاربری ندارید؟ <Link href='signUp'>ثبت نام</Link>
                      </span>
                    </div>
                  </div>
                </div>{' '}
                {/* Row END */}
              </div>
            </div>{' '}
            {/* Row END */}
          </div>
        </section>
      </main>
      {/* **************** MAIN CONTENT END **************** */}
    </>
  );
}

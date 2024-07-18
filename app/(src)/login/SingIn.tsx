'use client';
import { ErrorMessage } from '@hookform/error-message';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function SignIn({
  signInHandler,
  input,
  errors,
  isPending,
}: any) {
  const [showPass, setSowPass] = useState(false);
  const search = useSearchParams();

  return (
    <>
      {isPending && (
        <div className='preloader opacity-50 '>
          <div className='preloader-item'>
            <div className='spinner-grow text-primary' />
          </div>
        </div>
      )}
      {/* **************** MAIN CONTENT START **************** */}
      <main>
        <section className='p-0 d-flex align-items-center position-relative overflow-hidden'>
          <div className='container-fluid'>
            <div className='row'>
              {/* left */}
              <div className='d-none col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100'>
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
                    <form onSubmit={signInHandler}>
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
                          <div className='form-control tw-flex p-0'>
                            <input
                              type={showPass ? 'text' : 'password'}
                              className='form-control border-0 bg-light rounded-end ps-1  tw-py-3'
                              placeholder='*********'
                              {...input.password}
                            />
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setSowPass(!showPass);
                              }}
                              className='input-group-text p-0 !bg-transparent border-0'
                            >
                              <i className='far fa-eye cursor-pointer p-2 w-40px'></i>
                            </button>
                          </div>
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
                          <Link
                            href='/auth/forgotPassword'
                            className='text-secondary'
                          >
                            <u>رمز خود را فراموش کرده اید؟</u>
                          </Link>
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
                        حساب کاربری ندارید؟{' '}
                        <Link
                          href={`signUp${search.get('redirect') ? '?redirect=' + search.get('redirect') : ''}`}
                        >
                          ثبت نام
                        </Link>
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

'use client';
import React, { useState } from 'react';
import { resetPassValidate } from '../validations/authValidate';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { useResetPassword } from '../hooks/request/authUser';
import Loading from '@/app/loading';

export default function ResetPassword({ searchParams }: any) {
  const [showPass, setSowPass] = useState(false);

  const { mutate: mutateResetPassword, isPending } = useResetPassword();

  const resetPasswordFormHandler = (data: any) => {
    console.log({
      token: searchParams.token,
      email: searchParams.email,
      ...data,
    });

    mutateResetPassword({
      token: searchParams.token,
      email: searchParams.email,
      ...data,
    });
  };

  const {
    // ساختار پارامتر`
    register,
    // کنترل دکمه سابمت به صورت اتوماتیک حالت رفرش رو غیر فعال میکنه.
    handleSubmit,
    // اگه اروری تولید کرد انتقال بده
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(resetPassValidate),
  });

  const input: any = {
    password: register('password'),
    password_confirmation: register('password_confirmation'),
  };

  return (
    <main>
      {isPending && <Loading />}
      <section className='p-0 d-flex align-items-center position-relative overflow-hidden'>
        <div className='container-fluid'>
          <div className='row'>
            {/* left */}
            <div className='d-none col-12 col-lg-6 d-none d-lg-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100'>
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
                <img src='/images/element/02.svg' className='mt-5' alt='' />
                {/* Info */}
                <div className='d-sm-flex mt-5 align-items-center justify-content-center '>
                  <ul className='avatar-group mb-2 mb-sm-0'>
                    <li className='avatar avatar-sm'>
                      <img
                        className='avatar-img rounded-circle'
                        src='/images/avatar/01.jpg'
                        alt='avatar'
                      />
                    </li>
                    <li className='avatar avatar-sm'>
                      <img
                        className='avatar-img rounded-circle'
                        src='/images/avatar/02.jpg'
                        alt='avatar'
                      />
                    </li>
                    <li className='avatar avatar-sm'>
                      <img
                        className='avatar-img rounded-circle'
                        src='/images/avatar/03.jpg'
                        alt='avatar'
                      />
                    </li>
                    <li className='avatar avatar-sm'>
                      <img
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
            <div className='col-12 col-lg-6 d-flex justify-content-center tw-h-screen'>
              <div className='row my-5'>
                <div className='col-sm-10 col-xl-12 m-auto'>
                  {/* Title */}
                  <span className='mb-0 fs-1'>🤔</span>
                  <h1 className='fs-4'>تغییر رمز عبور</h1>
                  <h5 className='fw-light mb-4'>
                    {' '}
                    برای تغییر رمز عبور خود را وارد کنید
                  </h5>
                  {/* Form START */}
                  <form onSubmit={handleSubmit(resetPasswordFormHandler)}>
                    {/* Email */}
                    <div className='mb-4'>
                      <label
                        htmlFor='exampleInputEmail1'
                        className='form-label'
                      >
                        رمز جدید *
                      </label>
                      <div className='input-group input-group-lg'>
                        <span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='tw-w-5'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z'
                              clip-rule='evenodd'
                            />
                          </svg>{' '}
                        </span>
                        <input
                          type={showPass ? 'text' : 'password'}
                          className='form-control border-0 bg-light rounded-end ps-1'
                          placeholder='********'
                          {...input.password}
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setSowPass(!showPass);
                          }}
                          className='input-group-text p-0 bg-light border-0'
                        >
                          <i className='far fa-eye cursor-pointer p-2 w-40px'></i>
                        </button>
                      </div>
                      <ErrorMessage
                        errors={errors}
                        name='password'
                        render={({ message }) => (
                          <p className='text-danger'>{message}</p>
                        )}
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        htmlFor='exampleInputEmail1'
                        className='form-label'
                      >
                        تایید رمز جدید *
                      </label>
                      <div className='input-group input-group-lg'>
                        <span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='tw-w-5'
                          >
                            <path
                              fill-rule='evenodd'
                              d='M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z'
                              clip-rule='evenodd'
                            />
                          </svg>
                        </span>
                        <input
                          type='password'
                          className='form-control border-0 bg-light rounded-end ps-1'
                          placeholder='********'
                          {...input.password_confirmation}
                        />
                      </div>
                      <ErrorMessage
                        errors={errors}
                        name='password_confirmation'
                        render={({ message }) => (
                          <p className='text-danger'>{message}</p>
                        )}
                      />
                    </div>
                    {/* Button */}
                    <div className='align-items-center'>
                      <div className='d-grid'>
                        <button className='btn btn-primary mb-0' type='submit'>
                          تغییر رمز
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* Form END */}
                </div>
              </div>{' '}
              {/* Row END */}
            </div>
          </div>{' '}
          {/* Row END */}
        </div>
      </section>
    </main>
  );
}

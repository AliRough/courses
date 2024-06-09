'use client';
import React from 'react';
import { forgotPasswordValidate } from '../validations/authValidate';
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { useForgotPassword } from '../hooks/request/authUser';
import Loading from '@/app/loading';

export default function ForgotPassword() {
  const { mutate: mutateForgotPassword, isPending } = useForgotPassword();

  const forgotPasswordFormHandler = (data: any) => {
    console.log(data);

    mutateForgotPassword(data);
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
    resolver: zodResolver(forgotPasswordValidate),
  });

  const input: any = {
    email: register('email'),
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
                  <h1 className='fs-4'>فراموشی رمز عبور</h1>
                  <h5 className='fw-light mb-4'>
                    برای دریافت رمز عبور جدید، آدرس ایمیل خود را وارد کنید.
                  </h5>
                  {/* Form START */}
                  <form onSubmit={handleSubmit(forgotPasswordFormHandler)}>
                    {/* Email */}
                    <div className='mb-4'>
                      <label
                        htmlFor='exampleInputEmail1'
                        className='form-label'
                      >
                        ایمیل *
                      </label>
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
                    {/* Button */}
                    <div className='align-items-center'>
                      <div className='d-grid'>
                        <button className='btn btn-primary mb-0' type='submit'>
                          ارسال رمز
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

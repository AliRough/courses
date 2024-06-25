'use client';
import React, { useEffect, useState } from 'react';
import { verifyEmail } from '../api/authApi';
import Link from 'next/link';

export default function VerifyEmail({ params, searchParams }: any) {
  const [verified, setVerified]: any = useState();
  useEffect(() => {
    const verifyEmailHandler = async () => {
      try {
        const data: any = await verifyEmail(searchParams.id, searchParams.hash);

        console.log(data);

        setVerified(true);
      } catch (error: any) {
        setVerified(false);
      }
    };
    verifyEmailHandler();
  }, []);
  if (verified === false) {
    return (
      <div className='container tw-h-screen d-flex justify-content-center tw-items-center flex-column '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='tw-h-32 md:tw-h-52 text-danger'
        >
          <path
            strokeLinecap='round'
            stroke-linejoin='round'
            d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>

        <div className='text-center tw-font-[Kalameh] tw-font-bold tw-text-4xl'>
          <h3 className='mt-2 tw-text-4xl text-danger md:tw-text-6xl'>
            تایید نشد
          </h3>
          <p className='tw-text-xl tw-font-[vazir-bold] text-danger opacity-75  md:tw-text-2xl my-3'>
            مشکل در اتصال لینک منقضی شد{' '}
          </p>
          <Link className='tw-font-[vazir-bold] tw-text-2xl' href={'/'}>
            صفحه اصلی
          </Link>
        </div>
      </div>
    );
  }
  if (verified) {
    return (
      <div className='container tw-h-screen d-flex justify-content-center tw-items-center flex-column '>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='tw-h-32 md:tw-h-52 text-success'
        >
          <path
            strokeLinecap='round'
            stroke-linejoin='round'
            d='M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'
          />
        </svg>
        <div className='text-center tw-font-[Kalameh] tw-font-bold tw-text-4xl'>
          <h3 className='mt-2 tw-text-4xl text-success md:tw-text-6xl'>
            تایید شد
          </h3>
          <p className='tw-text-xl  md:tw-text-3xl my-3'>
            ایمیل شما با موفقیت تایید شد
          </p>
          <Link className='tw-font-[vazir-bold] tw-text-2xl' href={'/'}>
            صفحه اصلی
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='preloader'>
      <div className='preloader-item'>
        <div className='spinner-grow text-primary' />
      </div>
    </div>
  );
}

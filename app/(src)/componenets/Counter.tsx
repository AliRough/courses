'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getAllPackages } from '../api/courseApi';
import { useGetAllPackages } from '../hooks/request/requestCourse';
import { routes } from '../routes';
import { useRecoilState } from 'recoil';
import { packageIdState } from '../state/atoms';
import Image from 'next/image';

export default function Counter() {
  const [packageId, setPackageId] = useRecoilState(packageIdState);

  const { data: packages } = useGetAllPackages();

  const dataicon: any = [
    {
      divStyle: 'icon-lg bg-purple bg-opacity-10 rounded-circle text-purple',
      iconStyle: 'fas fa-tools',
    },

    {
      divStyle: 'icon-lg bg-danger bg-opacity-10 rounded-circle text-danger',
      iconStyle: 'fas fa-heartbeat',
    },

    {
      divStyle: 'icon-lg bg-blue bg-opacity-10 rounded-circle text-blue',
      iconStyle: 'fas fa-photo-video',
    },

    {
      divStyle: 'icon-lg bg-success bg-opacity-10 rounded-circle text-success',
      iconStyle: 'fas fa-laptop-code',
    },

    {
      divStyle: 'icon-lg bg-orange bg-opacity-10 rounded-circle text-orange',
      iconStyle: 'fas fa-crop-alt',
    },

    {
      divStyle: 'icon-lg bg-primary bg-opacity-10 rounded-circle text-primary',
      iconStyle: 'fas fa-business-time',
    },

    {
      divStyle: 'icon-lg bg-info bg-opacity-10 rounded-circle text-info',
      iconStyle: 'fas fa-music',
    },

    {
      divStyle: 'icon-lg bg-warning bg-opacity-15 rounded-circle text-warning',
      iconStyle: 'fas fa-palette',
    },
  ];
  return (
    <>
      {/* =======================
Main Banner END */}
      {/* =======================
Counter START */}
      {packages?.data[0] && (
        <section className=' tw-mb-5'>
          <div className='container '>
            <div className='row g-sm-4 g-2'>
              {packages?.data?.map((pack: any, index: any) => (
                <div
                  className='col-3 col-sm-3 col-lg-2 col-xl-2 px-1   '
                  key={index}
                >
                  <div
                    onClick={() => {
                      setPackageId(pack.id);
                    }}
                    className='card card-body rounded-3 px-0  md:tw-border tw-border-gray-200 tw-bg-transparent md:tw-bg-white'
                  >
                    <div className='d-flex flex-column   align-items-center justify-content-center   '>
                      {/* Icon */}
                      <div className='sm:tw-w-1/4 tw-w-1/2'>
                        <Image
                          width={100}
                          height={100}
                          className=' tw-rounded-full tw-aspect-square tw-bg-cover'
                          src={pack.cover}
                          alt=''
                        />
                      </div>

                      <div className='mt-2'>
                        <h5 className='mb-0 fw-normal h6 text-center fw-normal  '>
                          <Link
                            href={`${routes.packages}/${pack.slug}`}
                            className='stretched-link !tw-text-xs sm:!tw-text-sm '
                          >
                            {pack.title}
                          </Link>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =======================
Counter END */}
    </>
  );
}

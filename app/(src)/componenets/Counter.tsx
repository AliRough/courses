'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getAllPackages } from '../api/courseApi';
import { useGetAllPackages } from '../hooks/request/requestCourse';

export default function Counter() {
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

      <section className=''>
        <div className='container '>
          <div className='row g-sm-4 g-2'>
            {packages?.data?.map((c: any, index: any) => (
              <div
                className='col-3 col-sm-3 col-lg-2 col-xl-2 px-1   '
                key={index}
              >
                <div className='card card-body rounded-3 px-0  md:tw-border tw-border-gray-200 tw-bg-transparent md:tw-bg-white'>
                  <div className='d-flex flex-column   align-items-center justify-content-center   '>
                    {/* Icon */}
                    <div
                      className={
                        dataicon.length > index
                          ? dataicon[index]?.divStyle
                          : dataicon[
                              Math.floor(Math.random() * dataicon.length)
                            ]?.divStyle
                      }
                    >
                      <i
                        className={
                          dataicon.length > index
                            ? dataicon[index]?.iconStyle
                            : dataicon[
                                Math.floor(Math.random() * dataicon.length)
                              ]?.iconStyle
                        }
                      />
                    </div>
                    <div className='mt-2'>
                      <h5 className='mb-0 fw-normal h6 text-center fw-normal  '>
                        <Link href='course/all' className='stretched-link'>
                          {c.title}
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

      {/* =======================
Counter END */}
    </>
  );
}

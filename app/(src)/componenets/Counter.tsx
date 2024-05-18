'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../api/categoriesApi';

export default function Counter() {
  const [categories, setCategories]: any = useState();
  useEffect(() => {
    const fetchData = async () => {
      let { data } = await getAllCategories();
      console.log(data);

      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* =======================
Main Banner END */}
      {/* =======================
Counter START */}

      <section className=''>
        <div className='container'>
          <div className='row g-4'>
            {categories?.map((c: any, index: any) => (
              <div className='col-sm-6 col-lg-4 col-xl-3' key={index}>
                <div className='card card-body shadow rounded-3'>
                  <div className='d-flex align-items-center'>
                    {/* Icon */}
                    <div className='icon-lg bg-purple bg-opacity-10 rounded-circle text-purple'>
                      <i className='fas fa-tools' />
                    </div>
                    <div className='ms-3'>
                      <h5 className='mb-0 fw-normal'>
                        <Link href='course/all' className='stretched-link'>
                          {c.title}
                        </Link>
                      </h5>
                      <span>89 دوره</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Category item */}
            <div className='col-sm-6 col-lg-4 col-xl-3'>
              <div className='card card-body shadow rounded-3'>
                <div className='d-flex align-items-center'>
                  {/* Icon */}
                  <div className='icon-lg bg-purple bg-opacity-10 rounded-circle text-purple'>
                    <i className='fas fa-tools' />
                  </div>
                  <div className='ms-3'>
                    <h5 className='mb-0 fw-normal'>
                      <Link href='course/all' className='stretched-link'>
                        مهندسی عمران
                      </Link>
                    </h5>
                    <span>89 دوره</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Category item */}
            <div className='col-sm-6 col-lg-4 col-xl-3'>
              <div className='card card-body shadow rounded-3'>
                <div className='d-flex align-items-center'>
                  {/* Icon */}
                  <div className='icon-lg bg-danger bg-opacity-10 rounded-circle text-danger'>
                    <i className='fas fa-heartbeat' />
                  </div>
                  <div className='ms-3'>
                    <h5 className='mb-0 fw-normal'>
                      <Link href='course/all' className='stretched-link'>
                        پزشکی و سلامت
                      </Link>
                    </h5>
                    <span>95 دوره</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Category item */}
            <div className='col-sm-6 col-lg-4 col-xl-3'>
              <div className='card card-body shadow rounded-3'>
                <div className='d-flex align-items-center'>
                  {/* Icon */}
                  <div className='icon-lg bg-blue bg-opacity-10 rounded-circle text-blue'>
                    <i className='fas fa-photo-video' />
                  </div>
                  <div className='ms-3'>
                    <h5 className='mb-0 fw-normal'>
                      <Link href='course/all' className='stretched-link'>
                        طراحی گرافیک
                      </Link>
                    </h5>
                    <span>38 دوره</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Category item */}
            <div className='col-sm-6 col-lg-4 col-xl-3'>
              <div className='card card-body shadow rounded-3'>
                <div className='d-flex align-items-center'>
                  {/* Icon */}
                  <div className='icon-lg bg-success bg-opacity-10 rounded-circle text-success'>
                    <i className='fas fa-laptop-code' />
                  </div>
                  <div className='ms-3'>
                    <h5 className='mb-0 fw-normal'>
                      <Link href='course/all' className='stretched-link'>
                        برنامه نویسی
                      </Link>
                    </h5>
                    <span>105 دوره</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Category item */}
            <div className='col-sm-6 col-lg-4 col-xl-3'>
              <div className='card card-body shadow rounded-3'>
                <div className='d-flex align-items-center'>
                  {/* Icon */}
                  <div className='icon-lg bg-orange bg-opacity-10 rounded-circle text-orange'>
                    <i className='fas fa-crop-alt' />
                  </div>
                  <div className='ms-3'>
                    <h5 className='mb-0 fw-normal'>
                      <Link href='course/all' className='stretched-link'>
                        طراحی سایت
                      </Link>
                    </h5>
                    <span>72 دوره</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Category item */}
            <div className='col-sm-6 col-lg-4 col-xl-3'>
              <div className='card card-body shadow rounded-3'>
                <div className='d-flex align-items-center'>
                  {/* Icon */}
                  <div className='icon-lg bg-primary bg-opacity-10 rounded-circle text-primary'>
                    <i className='fas fa-business-time' />
                  </div>
                  <div className='ms-3'>
                    <h5 className='mb-0 fw-normal'>
                      <Link href='course/all' className='stretched-link'>
                        استارت آپ
                      </Link>
                    </h5>
                    <span>68 دوره</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Category item */}
            <div className='col-sm-6 col-lg-4 col-xl-3'>
              <div className='card card-body shadow rounded-3'>
                <div className='d-flex align-items-center'>
                  {/* Icon */}
                  <div className='icon-lg bg-info bg-opacity-10 rounded-circle text-info'>
                    <i className='fas fa-music' />
                  </div>
                  <div className='ms-3'>
                    <h5 className='mb-0 fw-normal'>
                      <Link href='course/all' className='stretched-link'>
                        موزیک
                      </Link>
                    </h5>
                    <span>51 دوره</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Category item */}
            <div className='col-sm-6 col-lg-4 col-xl-3'>
              <div className='card card-body shadow rounded-3'>
                <div className='d-flex align-items-center'>
                  {/* Icon */}
                  <div className='icon-lg bg-warning bg-opacity-15 rounded-circle text-warning'>
                    <i className='fas fa-palette' />
                  </div>
                  <div className='ms-3'>
                    <h5 className='mb-0 fw-normal'>
                      <Link href='course/all' className='stretched-link'>
                        هنر
                      </Link>
                    </h5>
                    <span>69 دوره</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
Counter END */}
    </>
  );
}

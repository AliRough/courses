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
          <div className='row g-sm-4 g-2'>
            {categories?.map((c: any, index: any) => (
              <div
                className='col-3 col-sm-3 col-lg-2 col-xl-2 px-1 '
                key={index}
              >
                <div className='card card-body rounded-3 px-0  '>
                  <div className='d-flex flex-column   align-items-center justify-content-center   '>
                    {/* Icon */}
                    <div className='icon-lg bg-purple bg-opacity-10 rounded-circle text-purple '>
                      <i className='fas fa-tools' />
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

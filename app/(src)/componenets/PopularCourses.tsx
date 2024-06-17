'use client';
import React, { useEffect, useState } from 'react';
import {
  useGetAllCategories,
  useGetAllCourses,
} from '../hooks/request/requestCourse';
import CourseTile from '../course/courseTile';
import LoadingCourse from './other/loading/course';

export default function PopularCourses() {
  const [tag, setTag]: any = useState(1);
  const { data: categories, isPending }: any = useGetAllCategories();
  const { data: courses, refetch }: any = useGetAllCourses(
    undefined,
    12,
    undefined,
    tag,
  );
  useEffect(() => {
    refetch();
  }, [tag]);
  console.log('dat===============>', courses);

  return (
    <>
      {/* =======================
Popular course START */}
      <section>
        <div className='container'>
          {/* Title */}
          <div className='row mb-4'>
            <div className='col-lg-8 mx-auto text-center'>
              <h2 className='fs-3'>محبوب ترین دوره ها</h2>
              <p className='mb-0'>
                هر موضوعی را در هر زمان مطالعه کنید. هزاران دوره آموزشی را با
                کمترین قیمت جستجو کنید!
              </p>
            </div>
          </div>
          {/* Tabs START */}
          <ul
            className='nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3'
            id='course-pills-tab'
            role='tablist'
          >
            {categories?.data?.map((category: any) => (
              <li key={category} className='nav-item me-2 me-sm-5'>
                <button
                  className={`nav-link mb-2 mb-md-0 ${tag === category.id && 'active'}`}
                  onClick={() => {
                    setTag(category.id);
                  }}
                >
                  {category.title}{' '}
                </button>
              </li>
            ))}
          </ul>
          {/* Tabs END */}
          {/* Tabs content START */}
          <div className='tab-content'>
            <div className=' '>
              <div className='row g-4'>
                {isPending && <LoadingCourse number={6} />}

                {courses?.data?.data?.map((e: any) => (
                  <div key={e?.id} className='col-sm-6   col-md-4 col-xl-3'>
                    <CourseTile data={e} />
                  </div>
                ))}
              </div>
              {/* Row END */}
            </div>
          </div>
          {/* Tabs content END */}
        </div>
      </section>
      {/* =======================
Popular course END */}
    </>
  );
}

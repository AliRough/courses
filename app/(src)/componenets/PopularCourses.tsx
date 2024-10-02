'use client';
import React, { useEffect, useState } from 'react';
import {
  useGetAllCategories,
  useGetAllCourses,
} from '../hooks/request/requestCourse';
import CourseTile from '../course/courseTile';
import LoadingCourse from './other/loading/course';

export default function PopularCourses() {
  const { data: categories }: any = useGetAllCategories();
  const [tag, setTag]: any = useState(categories?.data[3].id);
  const {
    data: courses,
    refetch,
    isPending,
    isFetching,
  }: any = useGetAllCourses(undefined, 12, undefined, tag);
  useEffect(() => {
    refetch();
  }, [tag]);

  if (categories?.data && !Object.values(categories?.data).length) {
    console.log(categories.data.length);

    return;
  }

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
            <>{console.log(categories)}</>
            {categories?.data &&
              Object.values(categories?.data)
                .splice(0, 4)
                ?.map((category: any) => (
                  <li key={category.id} className='nav-item me-2 me-sm-5'>
                    <>{console.log(category)}</>
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
                {Boolean(isPending || isFetching) ? (
                  <LoadingCourse number={6} />
                ) : (
                  courses?.data.data &&
                  Object.values(courses?.data.data)?.map((e: any) => {
                    return (
                      <div key={e?.id} className='col-sm-6   col-md-4 col-xl-3'>
                        <CourseTile data={e} />
                      </div>
                    );
                  })
                )}
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

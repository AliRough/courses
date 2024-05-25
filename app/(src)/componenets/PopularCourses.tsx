'use client';
import React, { useState } from 'react';
import { useCourseByTag } from '../hooks/request/requestCourse';
import { TCourses } from '../model/course.d';
import CourseTile from '../course/courseTile';

export default function PopularCourses() {
  // const { data }: any = useCourseByTag('طراحی وب');
  const [tag, setTag]: any = useState();

  let data = [
    {
      id: 1,
      title: 'آموزش Photoshop',
      level: 'مبتدی',
      image: 'images/courses/4by3/01.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4.5,
      videos: 65,
      time: '9 ساعت',
      category: 'طراحی وب',
    },
    {
      id: 2,
      title: 'آموزش Sketch',
      level: 'همه سطح',
      image: 'images/courses/4by3/02.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی وب',
    },
    {
      id: 3,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/03.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی گرافیکی',
    },
    {
      id: 4,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/04.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی گرافیکی',
    },

    {
      id: 5,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/05.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی وب',
    },
    {
      id: 6,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/06.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'دیجیتال مارکتنیگ',
    },
    {
      id: 7,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/07.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'دیجیتال مارکتنیگ',
    },
    {
      id: 8,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/08.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی وب',
    },
    {
      id: 9,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/09.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی وب',
    },
    {
      id: 10,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/10.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی وب',
    },
    {
      id: 11,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/04.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی گرافیکی',
    },
    {
      id: 12,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/04.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی گرافیکی',
    },
    {
      id: 13,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/04.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی گرافیکی',
    },
    {
      id: 14,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/04.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی گرافیکی',
    },
    {
      id: 15,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/04.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی گرافیکی',
    },
    {
      id: 16,
      title: 'آموزش Sketch',
      level: 'مقدماتی',
      image: 'images/courses/4by3/04.jpg',
      description:
        'با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک',
      liked: true,
      rating: 4,
      videos: 20,
      time: '12 دقیقه',
      category: 'طراحی گرافیکی',
    },
  ];
  let filterdData = data?.filter((course: any) => course.category === tag);
  const showCoursHandler = (e: any) => {
    setTag(e.target.dataset.tag);
  };

  !tag && setTag('طراحی گرافیکی');

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
            {/* Tab item */}
            <li className='nav-item me-2 me-sm-5'>
              <button
                className={`nav-link mb-2 mb-md-0 ${tag === 'طراحی وب' && 'active'}`}
                data-tag='طراحی وب'
                onClick={showCoursHandler}
              >
                طراحی وب
              </button>
            </li>
            {/* Tab item */}
            <li className='nav-item me-2 me-sm-5'>
              <button
                className={`nav-link mb-2 mb-md-0 ${tag === 'برنامه نویسی' && 'active'}`}
                data-tag='برنامه نویسی'
                onClick={showCoursHandler}
              >
                برنامه نویسی
              </button>
            </li>
            {/* Tab item */}
            <li className='nav-item me-2 me-sm-5'>
              <button
                className={`nav-link mb-2 mb-md-0 ${tag === 'طراحی گرافیکی' && 'active'}`}
                data-tag='طراحی گرافیکی'
                onClick={showCoursHandler}
              >
                طراحی گرافیکی
              </button>
            </li>
            {/* Tab item */}
            <li className='nav-item me-2 me-sm-5'>
              <button
                className={`nav-link mb-2 mb-md-0 ${tag === 'دیجیتال مارکتنیگ' && 'active'}`}
                data-tag='دیجیتال مارکتنیگ'
                onClick={showCoursHandler}
              >
                دیجیتال مارکتنیگ
              </button>
            </li>
            {/* Tab item */}
            <li className='nav-item me-2 me-sm-5'>
              <button
                className={`nav-link mb-2 mb-md-0 ${tag === 'بازار مالی' && 'active'}`}
                data-tag='بازار مالی'
                onClick={showCoursHandler}
              >
                بازار مالی
              </button>
            </li>
          </ul>
          {/* Tabs END */}
          {/* Tabs content START */}
          <div className='tab-content'>
            <div className=' '>
              <div className='row g-4'>
                {filterdData?.map((e: any) => (
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

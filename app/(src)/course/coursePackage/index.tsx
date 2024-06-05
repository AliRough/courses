'use client';

import HeaderBody from '@/app/(src)/componenets/headerBody';
import PaginationCenter from '@/app/(src)/componenets/pagination';
import CourseTile from '@/app/(src)/course/courseTile';
import { useGetAllCourses } from '@/app/(src)/hooks/request/requestCourse';
import CourseListFillter from '@/app/(src)/course/courseList/courseListFillter';
import CourseAdvancedSearch from '@/app/(src)/course/courseList/courseAdvancedSearch';
import Newsletter from '@/app/(src)/componenets/other/newsletter';

import { TCourses } from '@/app/(src)/model/course.d';

const CourseList = () => {
  const { data } = useGetAllCourses();

  console.log('Not completed');

  return (
    <>
      <HeaderBody name={'لیست دوره ها'} />
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-xl-12'>
              <CourseListFillter />
              <div className='row g-4 justify-content-center'>
                {data?.data?.map((e: TCourses, index: number) => (
                  <>
                    <div key={e.id} className={`col-lg-10 col-xxl-6`}>
                      {' '}
                      <div className='card rounded overflow-hidden shadow'>
                        <div className='row g-0'>
                          {/* Image */}
                          <div className='col-md-4'>
                            <img
                              className='tw-h-full'
                              src={`https://fanavaran.liara.run/${e.cover}`}
                              alt='card image'
                            />
                          </div>
                          {/* Card body */}
                          <div className='col-md-8'>
                            <div className='card-body'>
                              {/* Title */}
                              <div className='d-flex justify-content-between mb-2'>
                                <h5 className='card-title mb-0 fw-normal'>
                                  <a href='#'>آموزش ساخت سایت خبری با لاراول</a>
                                </h5>
                                {/* Wishlist icon */}
                                <a href='#'>
                                  <i className='fas fa-heart text-danger' />
                                </a>
                              </div>
                              {/* Content */}
                              {/* Info */}
                              <ul className='list-inline mb-1'>
                                <li className='list-inline-item h6 fw-light mb-1 mb-sm-0'>
                                  <i className='far fa-clock text-danger me-2' />
                                  6ساعت
                                </li>
                                <li className='list-inline-item h6 fw-light mb-1 mb-sm-0'>
                                  <i className='fas fa-table text-orange me-2' />
                                  82 ویدیو
                                </li>
                              </ul>
                              {/* Rating */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
                <div className={`col-lg-10 col-xxl-6`}>
                  {' '}
                  <div className='card rounded overflow-hidden shadow'>
                    <div className='row g-0'>
                      {/* Image */}
                      <div className='col-md-4'>
                        <img
                          className='tw-h-full'
                          src={`https://fanavaran.liara.run/`}
                          alt='card image'
                        />
                      </div>
                      {/* Card body */}
                      <div className='col-md-8'>
                        <div className='card-body'>
                          {/* Title */}
                          <div className='d-flex justify-content-between mb-2'>
                            <h5 className='card-title mb-0 fw-normal'>
                              <a href='#'>آموزش ساخت سایت خبری با لاراول</a>
                            </h5>
                            {/* Wishlist icon */}
                            <a href='#'>
                              <i className='fas fa-heart text-danger' />
                            </a>
                          </div>
                          {/* Content */}
                          {/* Info */}
                          <ul className='list-inline mb-1'>
                            <li className='list-inline-item h6 fw-light mb-1 mb-sm-0'>
                              <i className='far fa-clock text-danger me-2' />
                              6ساعت
                            </li>
                            <li className='list-inline-item h6 fw-light mb-1 mb-sm-0'>
                              <i className='fas fa-table text-orange me-2' />
                              82 ویدیو
                            </li>
                          </ul>
                          {/* Rating */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <PaginationCenter />
              </div>
            </div>
            {/* <CourseAdvancedSearch /> */}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default CourseList;

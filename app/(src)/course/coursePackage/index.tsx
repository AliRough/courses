'use client';

import HeaderBody from '@/app/(src)/componenets/headerBody';
import PaginationCenter from '@/app/(src)/componenets/pagination';
import CourseTile from '@/app/(src)/course/courseTile';
import { useGetAllCourses } from '@/app/(src)/hooks/request/requestCourse';
import CoursePakageFillter from '@/app/(src)/course/coursePackage/coursePakageFillter';
import CourseAdvancedSearch from '@/app/(src)/course/coursePackage/courseAdvancedSearch';
import Newsletter from '@/app/(src)/componenets/other/newsletter';

import { TCourses } from '@/app/(src)/model/course.d';
import Link from 'next/link';

const CoursePakage = () => {
  const { data } = useGetAllCourses();

  console.log('Not completed');

  return (
    <>
      <HeaderBody name={'طراحی وب دوره ها'} />
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='tw-w-full  tw-flex  tw-bg-white tw-rounded-md shadow p-2 tw-font-bold mb-3'>
              <div className='md:tw-w-3/4 tw-w-full tw-flex'>
                <div className='sm:tw-block tw-hidden tw-text-sm p-1 pe-3 tw-border-e-2  tw-w-max   '>
                  ترتیب{' '}
                </div>
                <div className=' tw-flex  md:tw-w-3/4 tw-w-full'>
                  <form
                    action=''
                    className='tw-flex tw-justify-between tw-rounded-lg shadow-sm tw-border overflow-hidden p-1 px-2 ms-3 tw-w-1/2 tw-bg-gray-100'
                  >
                    <input
                      type='text'
                      className='tw-outline-none w-100 bg-transparent tw-text-xs '
                      placeholder='جستجو در پکیج ...'
                    />
                    <button className='text-primary'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        className='tw-w-6'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
              <div className='tw-w-1/4 tw-hidden md:tw-flex tw-items-center tw-border-s-2 ps-3  '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='tw-h-6 text-primary'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z'
                  />
                </svg>

                <span className='tw-text-sm ms-2 '>سایر پکیج ها</span>
              </div>
            </div>
            <div className='tw-flex px-0'>
              <div className=' md:tw-w-3/4 tw-w-full justify-content-center ps-3'>
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

                <Link href={'#'} className='tw-text-gray-600 tw-flex pe-3'>
                  <div className='sm:tw-block tw-hidden tw-border-s-2 tw-border-dashed mx-2'>
                    <span className='tw-flex tw-justify-center tw-items-center tw-bg-white tw-w-8 tw-aspect-square tw-rounded-b-full  tw-shadow-sm border tw-translate-x-1/2 '>
                      1
                    </span>
                  </div>
                  <div className='tw-bg-white  tw-rounded-xl tw-w-full tw-shadow-lg  overflow-hidden mb-3'>
                    <div className='tw-flex tw-w-full tw-p-4 '>
                      <div className='sm:tw-w-1/5 tw-w-2/5 tw-flex '>
                        <img
                          className='tw-w-full tw-rounded-xl overflow-hidden xl:tw-aspect-[4/3] tw-aspect-square tw-shadow-md tw-object-cover '
                          src={`/images/courses/4by3/01.jpg`}
                          alt=''
                        />
                      </div>
                      <div className='tw-w-4/5 tw-flex tw-flex-col  tw-ps-6'>
                        {/* Info */}
                        <ul className='tw-flex tw-justify-between mb-1 text-end ps-0 '>
                          <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                            <i className='fas fa-table tw-text-orange-300 me-2' />
                            82 ویدیو
                          </li>
                          <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                            <i className='far fa-clock tw-text-red-500 me-2' />
                            6ساعت
                          </li>
                        </ul>
                        <div className='tw-font-bold tw-text-base sm:tw-text-lg tw-py-1 pb-2'>
                          <span>آموزش ساخت سایت خبری با لاراول</span>
                        </div>
                        <div className='tw-h-full tw-w-full'></div>
                        {/* Rating */}
                        <div className=' tw-flex tw-justify-between tw-items-end'>
                          <div className='tw-flex tw-items-center'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='1.5'
                              stroke='currentColor'
                              className='tw-h-4  me-1'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                              />
                            </svg>

                            <span className='tw-w-max sm:text-base tw-text-xs'>
                              نیما علیپور{' '}
                            </span>
                          </div>

                          <button className='tw-text-xs sm:tw-text-base max-sm:tw-px-2 btn btn-primary mb-0'>
                            مشاهده دوره
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={'#'} className='tw-text-gray-600 tw-flex pe-3'>
                  <div className='sm:tw-block tw-hidden tw-border-s-2 tw-border-dashed mx-2'>
                    <span className='tw-flex tw-justify-center tw-items-center tw-bg-white tw-w-8 tw-aspect-square tw-rounded-b-full  tw-shadow-sm border tw-translate-x-1/2 '>
                      1
                    </span>
                  </div>
                  <div className='tw-bg-white  tw-rounded-xl tw-w-full tw-shadow-lg  overflow-hidden mb-3'>
                    <div className='tw-flex tw-w-full tw-p-4 '>
                      <div className='sm:tw-w-1/5 tw-w-2/5 tw-flex '>
                        <img
                          className='tw-w-full tw-rounded-xl overflow-hidden xl:tw-aspect-[4/3] tw-aspect-square tw-shadow-md tw-object-cover '
                          src={`/images/courses/4by3/01.jpg`}
                          alt=''
                        />
                      </div>
                      <div className='tw-w-4/5 tw-flex tw-flex-col  tw-ps-6'>
                        {/* Info */}
                        <ul className='tw-flex tw-justify-between mb-1 text-end ps-0 '>
                          <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                            <i className='fas fa-table tw-text-orange-300 me-2' />
                            82 ویدیو
                          </li>
                          <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                            <i className='far fa-clock tw-text-red-500 me-2' />
                            6ساعت
                          </li>
                        </ul>
                        <div className='tw-font-bold tw-text-base sm:tw-text-lg tw-py-1 pb-2'>
                          <span>آموزش ساخت سایت خبری با لاراول</span>
                        </div>
                        <div className='tw-h-full tw-w-full'></div>
                        {/* Rating */}
                        <div className=' tw-flex tw-justify-between tw-items-end'>
                          <div className='tw-flex tw-items-center'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='1.5'
                              stroke='currentColor'
                              className='tw-h-4  me-1'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                              />
                            </svg>

                            <span className='tw-w-max sm:text-base tw-text-xs'>
                              نیما علیپور{' '}
                            </span>
                          </div>

                          <button className='tw-text-xs sm:tw-text-base max-sm:tw-px-2 btn btn-primary mb-0'>
                            مشاهده دوره
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={'#'} className='tw-text-gray-600 tw-flex pe-3'>
                  <div className='sm:tw-block tw-hidden tw-border-s-2 tw-border-dashed mx-2'>
                    <span className='tw-flex tw-justify-center tw-items-center tw-bg-white tw-w-8 tw-aspect-square tw-rounded-b-full  tw-shadow-sm border tw-translate-x-1/2 '>
                      1
                    </span>
                  </div>
                  <div className='tw-bg-white  tw-rounded-xl tw-w-full tw-shadow-lg  overflow-hidden mb-3'>
                    <div className='tw-flex tw-w-full tw-p-4 '>
                      <div className='sm:tw-w-1/5 tw-w-2/5 tw-flex '>
                        <img
                          className='tw-w-full tw-rounded-xl overflow-hidden xl:tw-aspect-[4/3] tw-aspect-square tw-shadow-md tw-object-cover '
                          src={`/images/courses/4by3/01.jpg`}
                          alt=''
                        />
                      </div>
                      <div className='tw-w-4/5 tw-flex tw-flex-col  tw-ps-6'>
                        {/* Info */}
                        <ul className='tw-flex tw-justify-between mb-1 text-end ps-0 '>
                          <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                            <i className='fas fa-table tw-text-orange-300 me-2' />
                            82 ویدیو
                          </li>
                          <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                            <i className='far fa-clock tw-text-red-500 me-2' />
                            6ساعت
                          </li>
                        </ul>
                        <div className='tw-font-bold tw-text-base sm:tw-text-lg tw-py-1 pb-2'>
                          <span>آموزش ساخت سایت خبری با لاراول</span>
                        </div>
                        <div className='tw-h-full tw-w-full'></div>
                        {/* Rating */}
                        <div className=' tw-flex tw-justify-between tw-items-end'>
                          <div className='tw-flex tw-items-center'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='1.5'
                              stroke='currentColor'
                              className='tw-h-4  me-1'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                              />
                            </svg>

                            <span className='tw-w-max sm:text-base tw-text-xs'>
                              نیما علیپور{' '}
                            </span>
                          </div>

                          <button className='tw-text-xs sm:tw-text-base max-sm:tw-px-2 btn btn-primary mb-0'>
                            مشاهده دوره
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={'#'} className='tw-text-gray-600 tw-flex pe-3'>
                  <div className='sm:tw-block tw-hidden tw-border-s-2 tw-border-dashed mx-2'>
                    <span className='tw-flex tw-justify-center tw-items-center tw-bg-white tw-w-8 tw-aspect-square tw-rounded-b-full  tw-shadow-sm border tw-translate-x-1/2 '>
                      1
                    </span>
                  </div>
                  <div className='tw-bg-white  tw-rounded-xl tw-w-full tw-shadow-lg  overflow-hidden mb-3'>
                    <div className='tw-flex tw-w-full tw-p-4 '>
                      <div className='sm:tw-w-1/5 tw-w-2/5 tw-flex '>
                        <img
                          className='tw-w-full tw-rounded-xl overflow-hidden xl:tw-aspect-[4/3] tw-aspect-square tw-shadow-md tw-object-cover '
                          src={`/images/courses/4by3/01.jpg`}
                          alt=''
                        />
                      </div>
                      <div className='tw-w-4/5 tw-flex tw-flex-col  tw-ps-6'>
                        {/* Info */}
                        <ul className='tw-flex tw-justify-between mb-1 text-end ps-0 '>
                          <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                            <i className='fas fa-table tw-text-orange-300 me-2' />
                            82 ویدیو
                          </li>
                          <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                            <i className='far fa-clock tw-text-red-500 me-2' />
                            6ساعت
                          </li>
                        </ul>
                        <div className='tw-font-bold tw-text-base sm:tw-text-lg tw-py-1 pb-2'>
                          <span>آموزش ساخت سایت خبری با لاراول</span>
                        </div>
                        <div className='tw-h-full tw-w-full'></div>
                        {/* Rating */}
                        <div className=' tw-flex tw-justify-between tw-items-end'>
                          <div className='tw-flex tw-items-center'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='1.5'
                              stroke='currentColor'
                              className='tw-h-4  me-1'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                              />
                            </svg>

                            <span className='tw-w-max sm:text-base tw-text-xs'>
                              نیما علیپور{' '}
                            </span>
                          </div>

                          <button className='tw-text-xs sm:tw-text-base max-sm:tw-px-2 btn btn-primary mb-0'>
                            مشاهده دوره
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={'#'} className='tw-text-gray-600 tw-flex pe-3'>
                  <div className='sm:tw-block tw-hidden tw-border-s-2 tw-border-dashed mx-2'>
                    <span className='tw-flex tw-justify-center tw-items-center tw-bg-white tw-w-8 tw-aspect-square tw-rounded-b-full  tw-shadow-sm border tw-translate-x-1/2 '>
                      1
                    </span>
                  </div>
                  <div className='tw-bg-white  tw-rounded-xl tw-w-full tw-shadow-lg  overflow-hidden mb-3'>
                    <div className='tw-flex tw-w-full tw-p-4 '>
                      <div className='sm:tw-w-1/5 tw-w-2/5 tw-flex '>
                        <img
                          className='tw-w-full tw-rounded-xl overflow-hidden xl:tw-aspect-[4/3] tw-aspect-square tw-shadow-md tw-object-cover '
                          src={`/images/courses/4by3/01.jpg`}
                          alt=''
                        />
                      </div>
                      <div className='tw-w-4/5 tw-flex tw-flex-col  tw-ps-6'>
                        {/* Info */}
                        <ul className='tw-flex tw-justify-between mb-1 text-end ps-0 '>
                          <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                            <i className='fas fa-table tw-text-orange-300 me-2' />
                            82 ویدیو
                          </li>
                          <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                            <i className='far fa-clock tw-text-red-500 me-2' />
                            6ساعت
                          </li>
                        </ul>
                        <div className='tw-font-bold tw-text-base sm:tw-text-lg tw-py-1 pb-2'>
                          <span>آموزش ساخت سایت خبری با لاراول</span>
                        </div>
                        <div className='tw-h-full tw-w-full'></div>
                        {/* Rating */}
                        <div className=' tw-flex tw-justify-between tw-items-end'>
                          <div className='tw-flex tw-items-center'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='1.5'
                              stroke='currentColor'
                              className='tw-h-4  me-1'
                            >
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                              />
                            </svg>

                            <span className='tw-w-max sm:text-base tw-text-xs'>
                              نیما علیپور{' '}
                            </span>
                          </div>

                          <button className='tw-text-xs sm:tw-text-base max-sm:tw-px-2 btn btn-primary mb-0'>
                            مشاهده دوره
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className='col-12'>
                  <PaginationCenter />
                </div>
              </div>
              <CourseAdvancedSearch />
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default CoursePakage;

'use client';

import HeaderBody from '@/app/(src)/componenets/headerBody';
import PaginationCenter from '@/app/(src)/componenets/pagination';
import CourseTile from '@/app/(src)/course/courseTile';
import {
  useGetAllCourses,
  useGetPackage,
} from '@/app/(src)/hooks/request/requestCourse';
import CoursePakageFillter from '@/app/(src)/course/coursePackage/coursePakageFillter';
import CourseAdvancedSearch from '@/app/(src)/course/coursePackage/courseAdvancedSearch';
import Newsletter from '@/app/(src)/componenets/other/newsletter';

import { TCourses } from '@/app/(src)/model/course.d';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import LoadingPackage from '../../componenets/other/loading/package';
import { routes } from '../../routes';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { packageIdState, showfirstState } from '../../state/atoms';

const CoursePakage = ({ params }: any) => {
  const router = useRouter();

  const [packageId, setPackageId] = useRecoilState(packageIdState);

  const [param, setParam] = useState();

  const {
    data: Package,
    refetch,
    isPending,
    isFetching,
  } = useGetPackage(packageId);

  console.log(Package, packageId);

  const changePackageHandler = (e: any, pack: any) => {
    e.preventDefault();
    console.log(e, pack);
    setPackageId(pack.id);
  };

  useEffect(() => {
    router.push(routes.packages + '/' + Package?.data.title);
  }, [packageId]);

  useEffect(() => {
    refetch();
  }, [param]);

  console.log('Not completed');

  return (
    <>
      <HeaderBody name={Package?.data.title} />
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
                      value={param}
                      onChange={(e: any) => {
                        setParam(e.target.value);
                      }}
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
                {Boolean(isPending || isFetching) ? (
                  <LoadingPackage number={4} />
                ) : Package?.data.courses.length ? (
                  Package?.data.courses.map((e: any, index: number) => (
                    <>
                      <Link
                        key={e.id}
                        href={routes.courses + '/' + e.id}
                        className='tw-text-gray-600 tw-flex pe-3'
                      >
                        <div className='sm:tw-block tw-hidden tw-border-s-2 tw-border-dashed mx-2'>
                          <span className='tw-flex tw-justify-center tw-items-center tw-bg-white tw-w-8 tw-aspect-square tw-rounded-b-full  tw-shadow-sm border tw-translate-x-1/2 '>
                            {index + 1}
                          </span>
                        </div>
                        <div className='tw-bg-white  tw-rounded-xl tw-w-full tw-shadow-lg  overflow-hidden mb-3'>
                          <div className='tw-flex tw-w-full tw-p-4 '>
                            <div className='sm:tw-w-1/5 tw-w-2/5 tw-flex '>
                              <Image
                                blurDataURL={`/images/courses/4by3/artist.svg`}
                                placeholder='blur'
                                width={100}
                                height={100}
                                className='tw-w-full tw-rounded-xl overflow-hidden xl:tw-aspect-[4/3] tw-aspect-square tw-shadow-md tw-object-cover '
                                // src={ process.env.NEXT_PUBLIC_ASSETS_URL + e.cover}
                                src={`/images/courses/4by3/${Math.floor(Math.random() * 16) + 1}.jpg`}
                                alt={e.cover}
                              />
                            </div>
                            <div className='tw-w-4/5 tw-flex tw-flex-col  tw-ps-6'>
                              {/* Info */}
                              <ul className='tw-flex tw-justify-between mb-1 text-end ps-0 '>
                                <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                                  <i className='fas fa-table tw-text-orange-300 me-2' />
                                  {e.episodeCount} ویدیو
                                </li>
                                <li className='list-inline-item tw-text-sm fw-light mb-1 mb-sm-0'>
                                  <i className='far fa-clock tw-text-red-500 me-2' />
                                  {e.durationMinutes}دقیقه
                                </li>
                              </ul>
                              <div className='tw-font-bold tw-text-base sm:tw-text-lg tw-py-1 pb-2'>
                                <span>{e.title}</span>
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
                                    {e.teacherName}
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
                    </>
                  ))
                ) : (
                  <div className='tw-rounded-md p-2 !tw-border tw-border-gray-400 text-center'>
                    دوره ی مورد نظر شما یافت نشد !
                  </div>
                )}
              </div>
              <CourseAdvancedSearch
                changePackageHandler={changePackageHandler}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePakage;

'use client';

import LoadingMiniPackage from '@/app/(src)/componenets/other/loading/miniPackage';
import CourseFillterCategory from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterCategory';
import CourseFillterLang from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterLang';
import CourseFillterLavel from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterLavel';
import CoursefillterPrice from '@/app/(src)/course/courseList/courseAdvancedSearch/coursefillterPrice';
import { useGetAllPackages } from '@/app/(src)/hooks/request/requestCourse';
import { routes } from '@/app/(src)/routes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CourseAdvancedSearch = ({ changePackageHandler }: any) => {
  const [perPage, setPerPage] = useState(5);
  const { data: packages, refetch, isPending } = useGetAllPackages(perPage);
  useEffect(() => {
    refetch();
  }, [perPage]);

  console.log('Not completed');

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
    <div className='tw-w-1/4 ps-2 md:tw-block tw-hidden '>
      <div className='tw-bg-white tw-rounded-xl tw-shadow-lg p-2  '>
        {isPending ? (
          <LoadingMiniPackage number={4} />
        ) : packages?.data.length ? (
          <>
            {packages?.data.map((pack: any, index: any) => (
              <Link
                href={routes.packages + '/' + pack.title}
                onClick={(e) => changePackageHandler(e, pack)}
                key={pack.id}
              >
                <div className='tw-flex tw-items-center tw-border tw-rounded-md tw-bg-gray-50 shadow-sm p-2 mb-2 hover:tw-bg-gray-100'>
                  <div
                    className={
                      'tw-flex tw-justify-center tw-items-center icon-md bg-orange bg-opacity-10 rounded-circle text-orange' +
                      dataicon[index].divStyle
                    }
                  >
                    <i
                      className={'fas fa-crop-alt ' + dataicon[index].iconStyle}
                    />
                  </div>
                  <span className='ps-2 tw-text-gray-600'>{pack.title}</span>
                </div>
              </Link>
            ))}

            <button
              className=' tw-text-sm text-end btn btn-primary w-100 text-center'
              onClick={() => {
                setPerPage(perPage + 5);
              }}
            >
              <span>مشاهده بیشتر </span>
            </button>
          </>
        ) : (
          <div className='tw-rounded-md p-1 !tw-border tw-border-gray-400 text-center '>
            هیچ پکیجی یافت نشد !{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseAdvancedSearch;

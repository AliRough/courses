'use client';

import LoadingMiniPackage from '@/app/(src)/componenets/other/loading/miniPackage';
import CourseFillterCategory from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterCategory';
import CourseFillterLang from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterLang';
import CourseFillterLavel from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterLavel';
import CoursefillterPrice from '@/app/(src)/course/courseList/courseAdvancedSearch/coursefillterPrice';
import { useGetAllPackages } from '@/app/(src)/hooks/request/requestCourse';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CourseAdvancedSearch = () => {
  const [perPage, setPerPage] = useState(5);
  const { data: packages, refetch, isPending } = useGetAllPackages(perPage);
  useEffect(() => {
    refetch();
  }, [perPage]);

  console.log('Not completed');

  return (
    <div className='tw-w-1/4 ps-2 md:tw-block tw-hidden '>
      <div className='tw-bg-white tw-rounded-xl tw-shadow-lg p-2  '>
        {isPending ? (
          <LoadingMiniPackage number={4} />
        ) : packages?.data.length ? (
          <>
            {packages?.data.map((pack: any) => (
              <div
                key={pack.id}
                className='tw-flex tw-items-center tw-border tw-rounded-md tw-bg-gray-50 shadow-sm p-2 mb-2'
              >
                <div className='tw-flex tw-justify-center tw-items-center icon-md bg-orange bg-opacity-10 rounded-circle text-orange'>
                  <i className='fas fa-crop-alt tw-text-xl ' />
                </div>
                <span className='ps-2'>{pack.title}</span>
              </div>
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

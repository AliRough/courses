'use client';

import CourseFillterCategory from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterCategory';
import CourseFillterLang from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterLang';
import CourseFillterLavel from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterLavel';
import CoursefillterPrice from '@/app/(src)/course/courseList/courseAdvancedSearch/coursefillterPrice';
import Link from 'next/link';

const CourseAdvancedSearch = () => {
  console.log('Not completed');

  return (
    <div className='tw-w-1/4 ps-2 md:tw-block tw-hidden '>
      <div className='tw-bg-white tw-rounded-xl tw-shadow-lg p-2  '>
        <div className='tw-flex tw-items-center tw-border tw-rounded-md tw-bg-gray-50 shadow-sm p-2 mb-2'>
          <div className='tw-flex tw-justify-center tw-items-center icon-md bg-orange bg-opacity-10 rounded-circle text-orange'>
            <i className='fas fa-crop-alt tw-text-xl ' />
          </div>
          <span className='ps-2'>طراحی وب</span>
        </div>
        <div className='tw-flex tw-items-center tw-border tw-rounded-md tw-bg-gray-50 shadow-sm p-2 mb-2'>
          <div className='tw-flex tw-justify-center tw-items-center icon-md bg-orange bg-opacity-10 rounded-circle text-orange'>
            <i className='fas fa-crop-alt tw-text-xl ' />
          </div>
          <span className='ps-2'>طراحی وب</span>
        </div>
        <div className='tw-flex tw-items-center tw-border tw-rounded-md tw-bg-gray-50 shadow-sm p-2 mb-2'>
          <div className='tw-flex tw-justify-center tw-items-center icon-md bg-orange bg-opacity-10 rounded-circle text-orange'>
            <i className='fas fa-crop-alt tw-text-xl ' />
          </div>
          <span className='ps-2'>طراحی وب</span>
        </div>
        <div className='tw-flex tw-items-center tw-border tw-rounded-md tw-bg-gray-50 shadow-sm p-2 mb-2'>
          <div className='tw-flex tw-justify-center tw-items-center icon-md bg-orange bg-opacity-10 rounded-circle text-orange'>
            <i className='fas fa-crop-alt tw-text-xl ' />
          </div>
          <span className='ps-2'>طراحی وب</span>
        </div>
        <Link
          href={'#'}
          className=' tw-text-sm text-end btn btn-primary w-100 text-center'
        >
          <span>مشاهده همه </span>
        </Link>
      </div>
    </div>
  );
};

export default CourseAdvancedSearch;

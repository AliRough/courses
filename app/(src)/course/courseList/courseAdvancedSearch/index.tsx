'use client';

import CourseFillterCategory from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterCategory';
import CourseFillterLang from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterLang';
import CourseFillterLavel from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterLavel';
import CoursefillterPrice from '@/app/(src)/course/courseList/courseAdvancedSearch/coursefillterPrice';

const CourseAdvancedSearch = () => {
  console.log('Not completed');

  return (
    <div className='col-lg-4 col-xl-3'>
      <div
        className='offcanvas-lg offcanvas-end'
        tabIndex={-1}
        id='offcanvasSidebar'
      >
        <div className='offcanvas-header bg-light'>
          <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
            جستجوی پیشرفته
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            data-bs-target='#offcanvasSidebar'
            aria-label='Close'
          ></button>
        </div>
        <div className=' p-3 p-lg-0 '>
          <form>
            <CourseFillterCategory />
            <CoursefillterPrice />
            
          </form>
        </div>
        <div className='d-grid p-2 p-lg-0 text-center'>
          <button className='btn btn-primary mb-0'>نتیجه فیلتر</button>
        </div>
      </div>
    </div>
  );
};

export default CourseAdvancedSearch;

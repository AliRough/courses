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
            <div className='col-lg-8 col-xl-9'>
              <CourseListFillter />
              <div className='row g-4'>
                {data?.data?.map((e: TCourses) => (
                  <div key={e?.id} className='col-sm-6 col-xl-4 '>
                    <CourseTile data={e} />
                  </div>
                ))}
              </div>
              <div className='col-12'>
                <PaginationCenter />
              </div>
            </div>
            <CourseAdvancedSearch />
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default CourseList;

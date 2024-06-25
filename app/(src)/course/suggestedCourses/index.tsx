'use client';

import { useGetAllCourses } from '@/app/(src)/hooks/request/requestCourse';
import CourseTile from '@/app/(src)/course/courseTile';

import { TCourses } from '@/app/(src)/model/course.d';

const SuggestedCourses = () => {
  const { data } = useGetAllCourses();

  return (
    <section className='pt-0'>
      <div className='container'>
        <div className='row mb-4'>
          <h2 className='mb-0 fs-4'>دوره های پیشنهادی</h2>
        </div>
        <div className='row'>
          <div className='tiny-slider arrow-round arrow-blur arrow-hover'>
            <div
              className='tiny-slider-inner'
              data-autoplay='false'
              data-arrow='true'
              data-edge='2'
              data-dots='false'
              data-items='3'
              data-items-lg='2'
              data-items-sm='1'
            >
              {data?.data.map((e: TCourses) => (
                <div key={e?.id} className='pb-4'>
                  <CourseTile data={e} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestedCourses;

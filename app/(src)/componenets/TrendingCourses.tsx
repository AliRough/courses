'use client';
import { useGetAllCourses } from '../hooks/request/requestCourse';

import CoursesSlider from './other/CoursesSlider';

export default function TrendingCourses() {
  const { data: courses } = useGetAllCourses();

  return (
    <>
      {/* =======================
Trending courses START */}
      {courses?.data.data[0] && (
        <section className='pb-5 pt-0 pt-lg-5'>
          <div className='container'>
            {/* Title */}
            <div className='row mb-4'>
              <div className='col-lg-8 mx-auto text-center'>
                <h2 className='fs-3'>دوره های پیشنهادی جشنواره</h2>
                <p className='mb-0'>مشاهده دوره های جدید و 🔥 در جشنواره</p>
              </div>
            </div>
            <div className='row justify-content-center tw-bg-gray-50 p-3 p-md-0 '>
              {/* Slider START */}
              <CoursesSlider allCourses={courses?.data.data} />

              {/* Slider END */}
            </div>
          </div>
        </section>
      )}
      {/* =======================
Trending courses END */}
    </>
  );
}

'use client';
import { useCourseAll } from '../hooks/request/requestCourse';

import CoursesSlider from './other/CoursesSlider';

export default function TrendingCourses() {
  const { data } = useCourseAll();
  
  return (
    <>
      {/* =======================
Trending courses START */}
      <section className='pb-5 pt-0 pt-lg-5'>
        <div className='container'>
          {/* Title */}
          <div className='row mb-4'>
            <div className='col-lg-8 mx-auto text-center'>
              <h2 className='fs-3'>دوره های پیشنهادی جشنواره</h2>
              <p className='mb-0'>مشاهده دوره های جدید و 🔥 در جشنواره</p>
            </div>
          </div>
          <div className='row'>
            {/* Slider START */}
            <CoursesSlider datas={data} />

            {/* Slider END */}
          </div>
        </div>
      </section>
      {/* =======================
Trending courses END */}
    </>
  );
}

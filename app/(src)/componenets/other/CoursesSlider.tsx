import Image from 'next/image';
import React from 'react';
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import NextBtn from './slider/NextBtn';
import PervBtn from './slider/PervBtn';
import { routes } from '../../routes';
import CourseTile from '../../course/courseTile';

export default function CoursesSlider({ allCourses }: any) {
  let slider = useSwiper();

  return (
    <>
      {allCourses && (
        <Swiper
          className='arrow-round arrow-blur arrow-hover recentSlider  '
          modules={[Autoplay]}
          loop={true}
          autoplay={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          initialSlide={allCourses.length}
          onSwiper={() => {}}
        >
          {allCourses?.map((course: any) => (
            <SwiperSlide
              key={course.id}
              className=' d-flex justify-content-center bg-white  '
            >
              <CourseTile data={course} />
            </SwiperSlide>
          ))}
          <NextBtn className='nextBtn d-none d-sm-flex'>
            <i className='fas fa-chevron-right'></i>
          </NextBtn>
          <PervBtn className='pervBtn d-none d-sm-flex '>
            <i className='fas fa-chevron-left'></i>
          </PervBtn>
        </Swiper>
      )}
    </>
  );
}

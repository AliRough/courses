'use client';

import { useInstructorRelated } from '@/app/(src)/hooks/request/requestInstructor';
import InstructorTile from '@/app/(src)/instructor/instructorTile';

import { TInstructorRelated } from '@/app/(src)/model/instructor.d';
import NextBtn from '../../componenets/other/slider/NextBtn';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import PervBtn from '../../componenets/other/slider/PervBtn';

const InstructorRelated = () => {
  const { data } = useInstructorRelated();

  return (
    <>
      <section>
        <div className='container'>
          <div className='row mb-4'>
            <h2 className='mb-0 fs-4'>مدرسین پیشنهادی</h2>
          </div>
          <Swiper
            className='arrow-round arrow-blur arrow-hover recentSlider'
            modules={[Navigation, Autoplay]}
            loop={true}
            // autoplay={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {data?.map((data: any) => (
              <SwiperSlide key={data.id}>
                <InstructorTile key={data?.id} data={data} />
              </SwiperSlide>
            ))}
            <NextBtn className='nextBtn'>
              <i className='fas fa-chevron-right'></i>
            </NextBtn>
            <PervBtn className='pervBtn '>
              <i className='fas fa-chevron-left'></i>
            </PervBtn>
          </Swiper>
          {/* <div className='tiny-slider arrow-round arrow-creative arrow-blur arrow-hover'>
            <div
              className='tiny-slider-inner'
              data-autoplay='false'
              data-arrow='true'
              data-dots='false'
              data-items='4'
              data-items-lg='3'
              data-items-md='2'
              data-items-xs='1'
            >
              {data?.map((e: TInstructorRelated) => (
                <InstructorTile key={e?.id} data={e} />
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default InstructorRelated;

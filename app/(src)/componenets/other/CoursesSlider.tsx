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

export default function CoursesSlider({ datas }: any) {
  let slider = useSwiper();
  return (
    <>
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
        {datas?.map((data: any) => (
          <SwiperSlide key={data.id}>
            <div className='card action-trigger-hover border bg-transparent m-1 m-md-0 '>
              {/* Image */}
              <Image
                unoptimized={true}
                width={100}
                height={100}
                src={'/' + data.image}
                className='card-img-top'
                alt='course image'
              />
              {/* Ribbon */}
              <div className='ribbon mt-3'>
                <span>رایگان</span>
              </div>
              {/* Card body */}
              <div className='card-body pb-0'>
                {/* Badge and favorite */}
                <div className='d-flex justify-content-between mb-3'>
                  <span className='hstack gap-2'>
                    <a
                      href='#'
                      className='badge bg-primary bg-opacity-10 text-primary'
                    >
                      {data.category}
                    </a>
                    <a href='#' className='badge text-bg-dark'>
                      {data.level}
                    </a>
                  </span>
                  <a href='#' className='h6 fw-light mb-0'>
                    <i className='far fa-bookmark' />
                  </a>
                </div>
                {/* Title */}
                <h5 className='card-title fw-normal'>
                  <a href='#'>{data.title}</a>
                </h5>
                {/* Rating */}
                <div className='d-flex justify-content-between mb-2'>
                  <div className='hstack gap-2'>
                    <p className='text-warning m-0'>
                      {data.rating}
                      <i className='fas fa-star text-warning ms-1' />
                    </p>
                    <span className='small'>(6500)</span>
                  </div>
                  <div className='hstack gap-2'>
                    <p className='h6 fw-light mb-0 m-0'>6500</p>
                    <span className='small'>(دانشجو)</span>
                  </div>
                </div>
                {/* Time */}
                <div className='hstack gap-3'>
                  <span className='h6 fw-light mb-0'>
                    <i className='far fa-clock text-danger me-2' />
                    {data.time}
                  </span>
                  <span className='h6 fw-light mb-0'>
                    <i className='fas fa-table text-orange me-2' />
                    {data.videos} ویدیو
                  </span>
                </div>
              </div>
              {/* Card footer */}
              <div className='card-footer pt-0 bg-transparent'>
                <hr />
                {/* Avatar and Price */}
                <div className='d-flex justify-content-between align-items-center'>
                  {/* Avatar */}
                  <div className='d-flex align-items-center'>
                    <div className='avatar avatar-sm'>
                      <Image
                        unoptimized={true}
                        width={100}
                        height={100}
                        className='avatar-img rounded-1'
                        src='/images/avatar/10.jpg'
                        alt='avatar'
                      />
                    </div>
                    <p className='mb-0 ms-2'>
                      <a href='#' className='h6 fw-light mb-0'>
                        مهرداد نوروزی
                      </a>
                    </p>
                  </div>
                  {/* Price */}
                  <div>
                    <h5 className='text-success mb-0 item-show'>رایگـان</h5>
                    <a
                      href='#'
                      className='btn btn-sm btn-success-soft item-show-hover'
                    >
                      <i className='fas fa-shopping-cart me-2' />
                      افزودن به سبد
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <NextBtn className='nextBtn'>
          <i className='fas fa-chevron-right'></i>
        </NextBtn>
        <PervBtn className='pervBtn '>
          <i className='fas fa-chevron-left'></i>
        </PervBtn>
      </Swiper>
    </>
  );
}

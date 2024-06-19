'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import RatingStar from '../componenets/other/raiting';

const Testimonials = () => {
  console.log('Not completed');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    console.log(rate);

    setRating(rate);

    // other logic
  };
  const handaleCommentForm = (e: any) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <section className='pt-4'>
      <div className='container'>
        {/* Content START */}
        <div
          className='tab-pane '
          id='course-pills-4'
          role='tabpanel'
          aria-labelledby='course-pills-tab-4'
        >
          {' '}
          {/* Review START */}
          <div className='row mb-4 '>
            {/* Rating info */}
            <div className='col-md-4 mb-3 mb-md-0'>
              <div className='text-center tw-text-xs'>
                {/* Info */}
                <h2 className='mb-0'>4.5</h2>
                {/* Star */}
                <RatingStar readonly value={4.5} className='tw-text-2xl' />

                <p className='mb-0'>(بر اساس بررسی امروز)</p>
              </div>
            </div>
            {/* Progress-bar and star */}
            <div className='col-md-8'>
              <div className='row align-items-center'>
                {/* Progress bar and Rating */}
                <div className='col-6 col-sm-8'>
                  {/* Progress item */}
                  <div className='progress progress-sm bg-warning bg-opacity-15'>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: '100%' }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className='col-6 col-sm-4'>
                  {/* Star item */}
                  <RatingStar readonly value={5} />
                </div>
                {/* Progress bar and Rating */}
                <div className='col-6 col-sm-8'>
                  {/* Progress item */}
                  <div className='progress progress-sm bg-warning bg-opacity-15'>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: '80%' }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className='col-6 col-sm-4'>
                  {/* Star item */}
                  <RatingStar readonly value={4} />
                </div>
                {/* Progress bar and Rating */}
                <div className='col-6 col-sm-8'>
                  {/* Progress item */}
                  <div className='progress progress-sm bg-warning bg-opacity-15'>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: '60%' }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className='col-6 col-sm-4'>
                  {/* Star item */}
                  <RatingStar readonly value={3} />
                </div>
                {/* Progress bar and Rating */}
                <div className='col-6 col-sm-8'>
                  {/* Progress item */}
                  <div className='progress progress-sm bg-warning bg-opacity-15'>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: '40%' }}
                      aria-valuenow={40}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className='col-6 col-sm-4'>
                  {/* Star item */}
                  <RatingStar readonly value={2} />
                </div>
                {/* Progress bar and Rating */}
                <div className='col-6 col-sm-8'>
                  {/* Progress item */}
                  <div className='progress progress-sm bg-warning bg-opacity-15'>
                    <div
                      className='progress-bar bg-warning'
                      role='progressbar'
                      style={{ width: '20%' }}
                      aria-valuenow={20}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className='col-6 col-sm-4'>
                  {/* Star item */}
                  <RatingStar readonly value={1} />
                </div>
              </div>
            </div>
          </div>
          {/* Review END */}
          {/* Leave Review START */}
          <div className=''>
            <h5 className='mb-4'>ثبت دیدگاه</h5>
            <form className='row g-3' onSubmit={handaleCommentForm}>
              {/* Rating */}

              <div className=' '>
                <RatingStar onClick={handleRating} className='tw-text-2xl' />
              </div>
              {/* Name */}
              {/* <div className='col-md-6 bg-light-input '>
                <input
                  type='text'
                  className='form-control'
                  id='inputtext'
                  placeholder='نام'
                  aria-label='First name'
                />
              </div> */}
              {/* Email */}
              {/* <div className='col-md-6 bg-light-input'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='ایمیل'
                  id='inputEmail4'
                />
              </div> */}

              {/* Message */}
              <div className='col-12 bg-light-input'>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  placeholder='دیدگاه خود را بنویسید'
                  rows={3}
                  defaultValue={''}
                />
              </div>
              {/* Button */}
              <div className='col-12 text-end'>
                <button type='submit' className='btn btn-primary mb-0 '>
                  ثبت دیدگاه
                </button>
              </div>
            </form>
          </div>
          {/* Leave Review END */}
          {/* Student review START */}
          <div className='row'>
            {/* Review item START */}
            <div className='d-md-flex my-4'>
              {/* Avatar */}
              <div className='avatar avatar-xl me-4 flex-shrink-0'>
                <img
                  className='avatar-img rounded-circle'
                  src='assets/images/avatar/09.jpg'
                  alt='avatar'
                />
              </div>
              {/* Text */}
              <div>
                <div className='d-sm-flex mt-1 mt-md-0 align-items-center'>
                  <h5 className='me-3 mb-0 fw-normal'>نیلوفر سجادی</h5>
                  {/* Review star */}
                  <RatingStar readonly value={4} />
                </div>
                {/* Info */}
                <p className='small mb-2'>2 روز قبل</p>
                <p className='mb-2'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                {/* Like and dislike button */}
                <div
                  className='btn-group'
                  role='group'
                  aria-label='Basic radio toggle button group'
                >
                  {/* Like button */}
                  <input
                    type='radio'
                    className='btn-check'
                    name='btnradio'
                    id='btnradio1'
                  />
                  <label
                    className='btn btn-outline-light btn-sm mb-0'
                    htmlFor='btnradio1'
                  >
                    <i className='far fa-thumbs-up me-1' />
                    25
                  </label>
                  {/* Dislike button */}
                  <input
                    type='radio'
                    className='btn-check'
                    name='btnradio'
                    id='btnradio2'
                  />
                  <label
                    className='btn btn-outline-light btn-sm mb-0'
                    htmlFor='btnradio2'
                  >
                    {' '}
                    <i className='far fa-thumbs-down me-1' />2
                  </label>
                </div>
              </div>
            </div>
            {/* Comment children level 1 */}
            <div className='d-md-flex mb-4 ps-4 ps-md-5'>
              {/* Avatar */}
              <div className='avatar avatar-lg me-4 flex-shrink-0'>
                <img
                  className='avatar-img rounded-circle'
                  src='assets/images/avatar/02.jpg'
                  alt='avatar'
                />
              </div>
              {/* Text */}
              <div>
                <div className='d-sm-flex mt-1 mt-md-0 align-items-center'>
                  <h5 className='me-3 mb-0 fw-normal'>مهرداد علیزاده</h5>
                </div>
                {/* Info */}
                <p className='small mb-2'>1 روز قبل</p>
                <p className='mb-2'>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
              </div>
            </div>
            {/* Divider */}
            <hr />
            {/* Review item END */}
            {/* Review item START */}
            <div className='d-md-flex my-4'>
              {/* Avatar */}
              <div className='avatar avatar-xl me-4 flex-shrink-0'>
                <img
                  className='avatar-img rounded-circle'
                  src='assets/images/avatar/07.jpg'
                  alt='avatar'
                />
              </div>
              {/* Text */}
              <div>
                <div className='d-sm-flex mt-1 mt-md-0 align-items-center'>
                  <h5 className='me-3 mb-0 fw-normal'>علی مرادی</h5>
                  {/* Review star */}
                  <RatingStar readonly value={4} />
                </div>
                {/* Info */}
                <p className='small mb-2'>2 روز قبل</p>
                <p className='mb-2'>
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                  هدف بهبود ابزارهای کاربردی می باشد.
                </p>
                {/* Like and dislike button */}
                <div
                  className='btn-group'
                  role='group'
                  aria-label='Basic radio toggle button group'
                >
                  {/* Like button */}
                  <input
                    type='radio'
                    className='btn-check'
                    name='btnradio'
                    id='btnradio3'
                  />
                  <label
                    className='btn btn-outline-light btn-sm mb-0'
                    htmlFor='btnradio3'
                  >
                    <i className='far fa-thumbs-up me-1' />
                    25
                  </label>
                  {/* Dislike button */}
                  <input
                    type='radio'
                    className='btn-check'
                    name='btnradio'
                    id='btnradio4'
                  />
                  <label
                    className='btn btn-outline-light btn-sm mb-0'
                    htmlFor='btnradio4'
                  >
                    {' '}
                    <i className='far fa-thumbs-down me-1' />2
                  </label>
                </div>
              </div>
            </div>
            {/* Review item END */}
            {/* Divider */}
            <hr />
          </div>
          {/* Student review END */}
        </div>
        {/* Content END */}
      </div>
    </section>
  );
};

export default Testimonials;

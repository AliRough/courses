'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useCourseById } from '@/app/(src)/hooks/request/requestCourse';
import Testimonials from '@/app/(src)/testimonials';

import { TCurriculum, TCurriculumDetail } from '@/app/(src)/model/course.d';
import { TFaq, TTag } from '@/app/(src)/model/other.d';
import TrendingCourses from '@/app/(src)/componenets/TrendingCourses';
import Script from 'next/script';
import RatingStar from '../../componenets/other/raiting';
import { postComments } from '../../api/courseApi';
import { useCookies } from 'react-cookie';

const CourseDetail = ({ params }: { params: { id: number } }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);

  const { id } = params;

  const { data: course } = useCourseById(id);

  console.log('Not completed');

  let getDateFormat = (uDate: any) => {
    let date = new Intl.DateTimeFormat('fa-IR').format(uDate);
    return date;
  };
  let test = "<h2 className='fs-3'>آموزش رایگان Blazor WebAssembly</h2>";
  const handler = async () => {
    let formData = {
      episode_id: 1,
      description: 'این یک کامنت تست است.',
    };
    let { course }: any = await postComments(formData, cookies.Authorization);
    console.log(course);
  };
  return (
    <>
      <section className='pt-3 pt-xl-5'>
        <button onClick={handler}>click</button>
        <div className='container ' course-stickyContainer>
          <div className='row g-4  '>
            {/* Main content START */}
            <div className='col-xl-8'>
              <div className='row g-4'>
                {/* Title START */}
                <div className='col-12'>
                  {/* Title */}
                  <h2 className='fs-3'>{course?.data.title}</h2>

                  {/* Content */}
                  <ul className='list-inline mb-0'>
                    <li className='list-inline-item fw-light h6 me-3 mb-1 mb-sm-0'>
                      <i className='fas fa-star me-2' />
                      4.5/5.0
                    </li>

                    <li className='list-inline-item fw-light h6 me-3 mb-1 mb-sm-0'>
                      <i className='bi bi-patch-exclamation-fill me-2' />
                      آخرین بروزرسانی {getDateFormat(course?.data.updetedAt)}
                    </li>
                  </ul>
                </div>
                {/* Title END */}
                {/* Image and video */}
                <div className='col-12 position-relative'>
                  <div className='video-player rounded-3'>
                    <video
                      controls
                      playsInline
                      poster='/images/videos/poster.jpg'
                    >
                      <source
                        src='/images/videos/360p.mp4'
                        type='video/mp4'
                        // size={360}
                      />
                      <source
                        src='/images/videos/720p.mp4'
                        type='video/mp4'
                        // size={720}
                      />
                      <source
                        src='/images/videos/1080p.mp4'
                        type='video/mp4'
                        // size={1080}
                      />
                      {/* Caption files */}
                      <track
                        kind='captions'
                        label='English'
                        srcLang='en'
                        src='/images/videos/en.vtt'
                        default
                      />
                      <track
                        kind='captions'
                        label='French'
                        srcLang='fr'
                        src='/images/videos/fr.vtt'
                      />
                    </video>
                  </div>
                </div>
                {/* About course START */}
                <div className='col-12'>
                  <div className='card border'>
                    {/* Card header START */}
                    <div className='card-header border-bottom'>
                      <h3 className='mb-0 fs-5'>توضیحات دوره</h3>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className='card-body'>
                      <div id='collapseContent' className=''>
                        {course?.data.description}
                      </div>
                    </div>
                    {/* Card body START */}
                  </div>
                </div>
                {/* About course END */}
                {/* Curriculum START */}
                <div className='col-12'>
                  <div className='card border rounded-3'>
                    {/* Card header START */}
                    <div className='card-header border-bottom'>
                      <h3 className='mb-0 fs-5'>جلسات دوره</h3>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className='card-body'>
                      <div className='row g-5'>
                        {/* Lecture item START */}
                        <div className='col-12'>
                          {course?.data?.episodes?.map(
                            (episod: any, index: number) => (
                              <>
                                <div className='d-sm-flex justify-content-sm-between align-items-center'>
                                  <div className='d-flex'>
                                    <a
                                      href='#'
                                      className='btn btn-danger-soft btn-round mb-0'
                                    >
                                      <i className='fas fa-play' />
                                    </a>
                                    <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                      <h6 className='mb-0 fw-normal'>
                                        {episod.title}
                                      </h6>
                                      <p className='mb-2 mb-sm-0 small'>
                                        ۱۵ دقیقه
                                      </p>
                                    </div>
                                  </div>
                                  {/* Button */}
                                  <a
                                    href='#'
                                    className='btn btn-sm btn-success mb-0'
                                  >
                                    پخش
                                  </a>
                                </div>
                                {/* Divider */}
                                {index + 1 !==
                                  course?.data?.episodes.length && <hr />}
                              </>
                            ),
                          )}
                        </div>
                        {/* Lecture item END */}
                      </div>
                    </div>
                    {/* Card body START */}
                  </div>
                </div>
                {/* Curriculum END */}
                {/* comment START */}
                <div className='col-12'>
                  <div className='card border rounded-3'>
                    {/* Card header START */}
                    <div className='card-header border-bottom'>
                      <h3 className='mb-0 fs-5'>دیدگاه کاربران</h3>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <Testimonials />

                    {/* Card body START */}
                  </div>
                </div>
                {/* comment END */}
              </div>
            </div>
            {/* Main content END */}
            {/* Right sidebar START */}
            <div className='col-xl-4  '>
              <div className='position-sticky top-0  '>
                <div className='row g-4'>
                  <div className='col-md-6 col-xl-12'>
                    {/* Course info START */}
                    <div className='card card-body border p-4'>
                      {course && (
                        <img
                          className='rounded-3 mb-3 '
                          // src={`/images/courses/4by3/${Math.floor(Math.random() * 16) + 1}.jpg`}
                          src={course?.data?.cover}
                          alt=''
                        />
                      )}
                      {/* Price and share button */}
                      <div className='d-flex justify-content-between align-items-center'>
                        {/* Price */}
                        <h3 className='fw-bold mb-0 me-2 fs-5'>
                          {course?.data?.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                          تومان
                        </h3>
                        {/* Share button with dropdown */}
                        <div className='dropdown'>
                          <a
                            href='#'
                            className='btn btn-sm btn-light rounded mb-0 small'
                            role='button'
                            id='dropdownShare'
                            course-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <i className='fas fa-fw fa-share-alt' />
                          </a>
                          {/* dropdown button */}
                          <ul
                            className='dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded'
                            aria-labelledby='dropdownShare'
                          >
                            <li>
                              <a className='dropdown-item' href='#'>
                                <i className='fab fa-twitter-square me-2' />
                                Twitter
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='#'>
                                <i className='fab fa-facebook-square me-2' />
                                Facebook
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='#'>
                                <i className='fab fa-linkedin me-2' />
                                LinkedIn
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='#'>
                                <i className='fas fa-copy me-2' />
                                کپی لینک
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className='mt-3 d-grid'>
                        <a href='#' className='btn btn-outline-primary'>
                          افزودن به سبد
                        </a>
                        <a href='#' className='btn btn-success'>
                          خرید آنلاین
                        </a>
                      </div>
                      {/* Divider */}
                      <hr />
                      {/* Title */}
                      <h5 className='mb-3 fs-5'>مشخصات دوره</h5>
                      <ul className='list-group list-group-borderless border-bottom-0 rounded-0'>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <span className='h6 fw-light mb-0'>
                            <i className='fas fa-fw fa-book-open text-primary' />
                            تعداد ویدیو ها
                          </span>
                          <span>{course?.data.episodeCount}</span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <span className='h6 fw-light mb-0'>
                            <i className='fas fa-fw fa-clock text-primary' />
                            مدت زمان دوره
                          </span>
                          <span>4ساعت</span>
                        </li>

                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <span className='h6 fw-light mb-0'>
                            <i className='fas fa-fw fa-user-clock text-primary' />
                            تاریخ بروزرسانی
                          </span>
                          <span>{getDateFormat(course?.data.updetedAt)}</span>
                        </li>
                      </ul>
                      {/* Divider */}
                      <hr />
                      {/* Instructor info */}
                      <div className='d-sm-flex align-items-center'>
                        {/* Avatar image */}
                        <div className='avatar avatar'>
                          <img
                            className='avatar-img rounded-circle'
                            src={
                              (course?.data?.avatar &&
                                process.env.NEXT_PUBLIC_APP_URL +
                                  course?.data?.teacher.avatar) ||
                              '/images/avatar/User.png'
                            }
                            alt='avatar'
                          />
                        </div>
                        <div className='ms-sm-3 mt-2 mt-sm-0'>
                          <h5 className='mb-0'>
                            <a href='#'>{course?.data.teacher.name}</a>
                          </h5>
                          <p className='mb-0 small'>
                            {course?.data?.teacher.field}
                          </p>
                        </div>
                      </div>
                      {/* Rating and follow */}
                      <div className='d-sm-flex justify-content-sm-between align-items-center mt-0 mt-sm-2'>
                        {/* Rating star */}
                        <RatingStar readonly value={4.5} />

                        {/* button */}
                        <button className='btn btn-sm btn-primary mb-0 mt-2 mt-sm-0'>
                          دنبال کردن
                        </button>
                      </div>
                    </div>
                    {/* Course info END */}
                  </div>
                </div>
                {/* Row End */}
              </div>
            </div>
            {/* Right sidebar END */}
          </div>
          {/* Row END */}
        </div>
      </section>

      {/* -------------------------- */}

      <TrendingCourses />
    </>
  );
};

export default CourseDetail;

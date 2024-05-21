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

const CourseDetail = ({ params }: { params: { id: number } }) => {
  const { id } = params;

  const { data } = useCourseById(id);
  console.log('----------------------------------->', data);

  console.log('Not completed');

  return (
    <>
      <section className='pt-3 pt-xl-5'>
        <div className='container' data-stickyContainer>
          <div className='row g-4  '>
            {/* Main content START */}
            <div className='col-xl-8'>
              <div className='row g-4'>
                {/* Title START */}
                <div className='col-12'>
                  {/* Title */}
                  <h2 className='fs-3'>آموزش رایگان Blazor WebAssembly</h2>
                  <p>
                    در این صورت می توان امید داشت که تمام و دشواری موجود در
                    ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                  {/* Content */}
                  <ul className='list-inline mb-0'>
                    <li className='list-inline-item fw-light h6 me-3 mb-1 mb-sm-0'>
                      <i className='fas fa-star me-2' />
                      4.5/5.0
                    </li>
                    <li className='list-inline-item fw-light h6 me-3 mb-1 mb-sm-0'>
                      <i className='fas fa-user-graduate me-2' />
                      12 شرکت کننده
                    </li>
                    <li className='list-inline-item fw-light h6 me-3 mb-1 mb-sm-0'>
                      <i className='fas fa-signal me-2' />
                      متوسطه
                    </li>
                    <li className='list-inline-item fw-light h6 me-3 mb-1 mb-sm-0'>
                      <i className='bi bi-patch-exclamation-fill me-2' />
                      آخرین بروزرسانی 1401/02
                    </li>
                    <li className='list-inline-item fw-light h6'>
                      <i className='fas fa-globe me-2' />
                      انگلیسی
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
                      poster='assets/images/videos/poster.jpg'
                    >
                      <source
                        src='assets/images/videos/360p.mp4'
                        type='video/mp4'
                        // size={360}
                      />
                      <source
                        src='assets/images/videos/720p.mp4'
                        type='video/mp4'
                        // size={720}
                      />
                      <source
                        src='assets/images/videos/1080p.mp4'
                        type='video/mp4'
                        // size={1080}
                      />
                      {/* Caption files */}
                      <track
                        kind='captions'
                        label='English'
                        srcLang='en'
                        src='assets/images/videos/en.vtt'
                        default
                      />
                      <track
                        kind='captions'
                        label='French'
                        srcLang='fr'
                        src='assets/images/videos/fr.vtt'
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
                      <p className='mb-3'>
                        به مجموعه ی آموزشی{' '}
                        <strong>آموزش رایگان Blazor WebAssembly</strong> خوش
                        آمدید.
                      </p>
                      <p className='mb-3'>
                        در این آموزش عملی، شما یاد خواهید گرفت که با این بسته
                        دوره آموزشی نهایی که شامل{' '}
                        <strong> 12 دوره بازاریابی دیجیتال در یک پکیج</strong>{' '}
                        است، یک متخصص بازاریابی دیجیتال شوید!{' '}
                      </p>
                      <p className='mb-0'>
                        اگر می‌خواهید مهارت‌هایی را که باید در برنامه درسی دوره
                        بازاریابی دیجیتال در هند یا هر جای دیگر جهان پوشش داده
                        شود، بیابید، خواندن این وبلاگ به شما کمک خواهد کرد. قبل
                        از اینکه به موارد پیشرفته بپردازیم{' '}
                        <strong>
                          <a
                            href='#'
                            className='text-reset text-decoration-underline'
                          >
                            دوره دیجیتال مارکتینگ
                          </a>
                        </strong>{' '}
                        برنامه درسی، بیایید به حوزه بازاریابی دیجیتال و آینده
                        نگاه کنیم.
                      </p>
                      {/* Collapse body */}
                      <div className='collapse' id='collapseContent'>
                        <p className='my-3'>
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                          و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                          برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                          پیشرو در زبان فارسی ایجاد کرد.
                        </p>
                        <p className='mb-0'>
                          کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
                          شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                          افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                          الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
                          کرد. در این صورت می توان امید داشت که تمام و دشواری
                          موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                          وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و
                          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                          استفاده قرار گیرد.
                        </p>
                      </div>
                      {/* Collapse button */}
                      <a
                        className='p-0 mb-0 mt-2 btn-more d-flex align-items-center'
                        data-bs-toggle='collapse'
                        href='#collapseContent'
                        role='button'
                        aria-expanded='false'
                        aria-controls='collapseContent'
                      >
                        مشاهده <span className='see-more ms-1'>بیشتر</span>
                        <span className='see-less ms-1'>کمتر</span>
                        <i className='fas fa-angle-down ms-2' />
                      </a>
                      {/* List content */}
                      <h5 className='mt-4'>بعد از یادگیری:</h5>
                      <div className='row mb-3'>
                        <div className='col-md-6'>
                          <ul className='list-group list-group-borderless'>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              معرفی دوره دیجیتال مارکتینگ
                            </li>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              آموزش طراحی رابط کاربری وب و اپلیکشن
                            </li>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              Facebook ADS
                            </li>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              ابزارهای بهینه سازی موتور جستجو
                            </li>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              توان کار با فتوشاپ
                            </li>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              ابزارهای بهینه سازی موتور جستجو
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-6'>
                          <ul className='list-group list-group-borderless'>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              سئو چیست؟
                            </li>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              آموزش اجرای لوگو
                            </li>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              ساختار URL
                            </li>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              طراحی بنر های دیجیتالی
                            </li>
                            <li className='list-group-item h6 fw-light d-flex mb-0'>
                              <i className='fas fa-check-circle text-success me-2' />
                              نکات و ترفندهای سئو
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className='mb-0'>
                        در این صورت می توان امید داشت که تمام و دشواری موجود در
                        ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
                        نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                        پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                        گیرد.
                      </p>
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
                          {/* Curriculum item */}
                          <h5 className='mb-4 font-base'>
                            معرفی دوره فتوشاپ (3 ویدیو)
                          </h5>
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-danger-soft btn-round mb-0'
                              >
                                <i className='fas fa-play' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>معرفی دوره</h6>
                                <p className='mb-2 mb-sm-0 small'>10ساعت</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-success mb-0'>
                              پخش
                            </a>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Curriculum item */}
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-danger-soft btn-round mb-0 flex-shrink-0'
                              >
                                <i className='fas fa-play' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>
                                  دیجیتال مارکتینگ چیست؟
                                </h6>
                                <p className='mb-2 mb-sm-0 small'>18دقیقه</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-success mb-0'>
                              پخش
                            </a>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Curriculum item */}
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-light btn-round mb-0 flex-shrink-0'
                              >
                                <i className='bi bi-lock-fill' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>
                                  انواع دیجیتال مارکتینگ
                                </h6>
                                <p className='mb-2 mb-sm-0 small'>22ساعت</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-orange mb-0'>
                              پولی
                            </a>
                          </div>
                        </div>
                        {/* Lecture item END */}
                        {/* Lecture item START */}
                        <div className='col-12'>
                          {/* Curriculum item */}
                          <h5 className='mb-4 font-base'>
                            آموزش کار به صورت متوسطه (4 ویدیو)
                          </h5>
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-danger-soft btn-round mb-0 flex-shrink-0'
                              >
                                <i className='fas fa-play' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>
                                  دیجیتال مارکتینگ چیست؟
                                </h6>
                                <p className='mb-2 mb-sm-0 small'>10ساعت</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-success mb-0'>
                              پخش
                            </a>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Curriculum item */}
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-danger-soft btn-round mb-0 flex-shrink-0'
                              >
                                <i className='fas fa-play' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>
                                  توضیح تخصصی ابزار ها(قسمت اول)
                                </h6>
                                <p className='mb-2 mb-sm-0 small'>18دقیقه</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-success mb-0'>
                              پخش
                            </a>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Curriculum item */}
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-light btn-round mb-0 flex-shrink-0'
                              >
                                <i className='bi bi-lock-fill' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>
                                  توضیح تخصصی ابزار ها(قسمت دوم)
                                </h6>
                                <p className='mb-2 mb-sm-0 small'>22ساعت</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-orange mb-0'>
                              پولی
                            </a>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Curriculum item */}
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-light btn-round mb-0 flex-shrink-0'
                              >
                                <i className='bi bi-lock-fill' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>
                                  توضیح صفحات مختلف فتوشاپ
                                </h6>
                                <p className='mb-2 mb-sm-0 small'>18دقیقه</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-orange mb-0'>
                              پولی
                            </a>
                          </div>
                        </div>
                        {/* Lecture item END */}
                        {/* Lecture item START */}
                        <div className='col-12'>
                          {/* Curriculum item */}
                          <h5 className='mb-4 font-base'>
                            بهینه سازی موتور جستجو (SEO) چیست؟ (5 ویدیو)
                          </h5>
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-danger-soft btn-round mb-0 flex-shrink-0'
                              >
                                <i className='fas fa-play' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>مروری بر سئو</h6>
                                <p className='mb-2 mb-sm-0 small'>18دقیقه</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-success mb-0'>
                              پخش
                            </a>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Curriculum item */}
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-danger-soft btn-round mb-0 flex-shrink-0'
                              >
                                <i className='fas fa-play' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>
                                  ادیت تصویر مخصوص آتلیه
                                </h6>
                                <p className='mb-2 mb-sm-0 small'>7ساعت</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-success mb-0'>
                              پخش
                            </a>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Curriculum item */}
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-danger-soft btn-round mb-0 flex-shrink-0'
                              >
                                <i className='fas fa-play' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>
                                  شروع طراحی سایت دیجی کالا
                                </h6>
                                <p className='mb-2 mb-sm-0 small'>15دقیقه</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-success mb-0'>
                              پخش
                            </a>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Curriculum item */}
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-danger-soft btn-round mb-0 flex-shrink-0'
                              >
                                <i className='fas fa-play' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>
                                  ساخت کارت ویزیت
                                </h6>
                                <p className='mb-2 mb-sm-0 small'>17ساعت</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-success mb-0'>
                              پخش
                            </a>
                          </div>
                          {/* Divider */}
                          <hr />
                          {/* Curriculum item */}
                          <div className='d-sm-flex justify-content-sm-between align-items-center'>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-danger-soft btn-round mb-0 flex-shrink-0'
                              >
                                <i className='fas fa-play' />
                              </a>
                              <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                <h6 className='mb-0 fw-normal'>
                                  برنامه ریزی کلمات کلیدی SEO
                                </h6>
                                <p className='mb-2 mb-sm-0 small'>25دقیقه</p>
                              </div>
                            </div>
                            {/* Button */}
                            <a href='#' className='btn btn-sm btn-success mb-0'>
                              پخش
                            </a>
                          </div>
                        </div>
                        {/* Lecture item END */}
                        {/* Collapse body START */}
                        <div className='collapse mt-0' id='collapseCourse'>
                          {/* Lecture item START */}
                          <div className='col-12 mt-5'>
                            {/* Curriculum item */}
                            <h5 className='mb-4 font-base'>
                              بازاریابی YouTube (5 ویدیو)
                            </h5>
                            <div className='d-sm-flex justify-content-sm-between align-items-center'>
                              <div className='d-flex'>
                                <a
                                  href='#'
                                  className='btn btn-danger-soft btn-round mb-0 flex-shrink-0'
                                >
                                  <i className='fas fa-play' />
                                </a>
                                <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                  <h6 className='mb-0 fw-normal'>
                                    Paint Eyedropper
                                  </h6>
                                  <p className='mb-2 mb-sm-0 small'>25دقیقه</p>
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
                            <hr />
                            {/* Curriculum item */}
                            <div className='d-sm-flex justify-content-sm-between align-items-center'>
                              <div className='d-flex'>
                                <a
                                  href='#'
                                  className='btn btn-danger-soft btn-round mb-0 flex-shrink-0'
                                >
                                  <i className='fas fa-play' />
                                </a>
                                <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                  <h6 className='mb-0 fw-normal'>
                                    ابزار Webmaster
                                  </h6>
                                  <p className='mb-2 mb-sm-0 small'>15دقیقه</p>
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
                            <hr />
                            {/* Curriculum item */}
                            <div className='d-sm-flex justify-content-sm-between align-items-center'>
                              <div className='d-flex'>
                                <a
                                  href='#'
                                  className='btn btn-light btn-round mb-0 flex-shrink-0'
                                >
                                  <i className='bi bi-lock-fill' />
                                </a>
                                <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                  <h6 className='mb-0 fw-normal'>
                                    انتشار مطالب ویژه در YouTube
                                  </h6>
                                  <p className='mb-2 mb-sm-0 small'>32دقیقه</p>
                                </div>
                              </div>
                              {/* Button */}
                              <a
                                href='#'
                                className='btn btn-sm btn-orange mb-0'
                              >
                                پولی
                              </a>
                            </div>
                            {/* Divider */}
                            <hr />
                            {/* Curriculum item */}
                            <div className='d-sm-flex justify-content-sm-between align-items-center'>
                              <div className='d-flex'>
                                <a
                                  href='#'
                                  className='btn btn-light btn-round mb-0 flex-shrink-0'
                                >
                                  <i className='bi bi-lock-fill' />
                                </a>
                                <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                  <h6 className='mb-0 fw-normal'>
                                    توضیح تخصصی ابزار ها(قسمت دوم)
                                  </h6>
                                  <p className='mb-2 mb-sm-0 small'>18دقیقه</p>
                                </div>
                              </div>
                              {/* Button */}
                              <a
                                href='#'
                                className='btn btn-sm btn-orange mb-0'
                              >
                                پولی
                              </a>
                            </div>
                            {/* Divider */}
                            <hr />
                            {/* Curriculum item */}
                            <div className='d-sm-flex justify-content-sm-between align-items-center'>
                              <div className='d-flex'>
                                <a
                                  href='#'
                                  className='btn btn-light btn-round mb-0 flex-shrink-0'
                                >
                                  <i className='bi bi-lock-fill' />
                                </a>
                                <div className='ms-2 ms-sm-3 mt-1 mt-sm-0'>
                                  <h6 className='mb-0 fw-normal'>
                                    توضیح تخصصی ابزار ها(قسمت اول)
                                  </h6>
                                  <p className='mb-2 mb-sm-0 small'>20دقیقه</p>
                                </div>
                              </div>
                              {/* Button */}
                              <a
                                href='#'
                                className='btn btn-sm btn-orange mb-0'
                              >
                                پولی
                              </a>
                            </div>
                          </div>
                          {/* Lecture item END */}
                        </div>
                        {/* Collapse body END */}
                        {/* Collapse button */}
                        <a
                          className='mb-0 mt-4 btn-more d-flex align-items-center justify-content-center'
                          data-bs-toggle='collapse'
                          href='#collapseCourse'
                          role='button'
                          aria-expanded='false'
                          aria-controls='collapseCourse'
                        >
                          مشاهده <span className='see-more mx-1'>بیشتر</span>
                          <span className='see-less mx-1'>کمتر</span> ویدیو
                          <i className='fas fa-angle-down ms-2' />
                        </a>
                      </div>
                    </div>
                    {/* Card body START */}
                  </div>
                </div>
                {/* Curriculum END */}
                {/* FAQs START */}
                <div className='col-12'>
                  <div className='card border rounded-3'>
                    {/* Card header START */}
                    <div className='card-header border-bottom'>
                      <h3 className='mb-0 fs-5'>سوالات متداول</h3>
                    </div>
                    {/* Card header END */}
                    {/* Card body START */}
                    <div className='card-body'>
                      {/* FAQ item */}
                      <div>
                        <h6>بازاریابی دیجیتال چگونه کار می کند؟</h6>
                        <p className='mb-0'>
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                          و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                          برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                          پیشرو در زبان فارسی ایجاد کرد.
                        </p>
                      </div>
                      {/* FAQ item */}
                      <div className='mt-4'>
                        <h6>SEO چیست؟</h6>
                        <p className='mb-0'>
                          در این صورت می توان امید داشت که تمام و دشواری موجود
                          در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
                          مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                          قرار گیرد.
                        </p>
                        <p className='mt-2 mb-0'>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>
                      </div>
                      {/* FAQ item */}
                      <div className='mt-4'>
                        <h6>چه کسانی باید در این دوره شرکت کنند؟</h6>
                        <p className='mb-0'>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                          و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                          برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                          پیشرو در زبان فارسی ایجاد کرد.
                        </p>
                      </div>
                      {/* FAQ item */}
                      <div className='mt-4'>
                        <h6>T&amp;C برای این برنامه چیست؟</h6>
                        <p className='mb-0'>
                          کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
                          شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                          افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                          الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
                          کرد.
                        </p>
                      </div>
                      {/* FAQ item */}
                      <div className='mt-4'>
                        <h6>چه گواهی هایی برای این برنامه دریافت خواهم کرد؟</h6>
                        <p className='mb-0'>
                          با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                          علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                          ایجاد کرد. در این صورت می توان امید داشت که تمام و
                          دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
                          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
                          اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                          اساسا مورد استفاده قرار گیرد.
                        </p>
                      </div>
                      {/* FAQ item */}
                      <div className='mt-4'>
                        <h6>مدت زمان تخفیف دوره چقدر است؟</h6>
                        <p className='mb-0'>
                          روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                          شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                          بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و
                          سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                          متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                          برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                          پیشرو در زبان فارسی ایجاد کرد.
                        </p>
                      </div>
                    </div>
                    {/* Card body START */}
                  </div>
                </div>
                {/* FAQs END */}
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
                      {data && (
                        <img
                          className='rounded-3 mb-3'
                          src={
                            'https://fanavaran.liara.run/' + data?.data?.cover
                          }
                          alt=''
                        />
                      )}
                      {/* Price and share button */}
                      <div className='d-flex justify-content-between align-items-center'>
                        {/* Price */}
                        <h3 className='fw-bold mb-0 me-2 fs-5'>70,000 تومان</h3>
                        {/* Share button with dropdown */}
                        <div className='dropdown'>
                          <a
                            href='#'
                            className='btn btn-sm btn-light rounded mb-0 small'
                            role='button'
                            id='dropdownShare'
                            data-bs-toggle='dropdown'
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
                      <ul className='list-group list-group-borderless'>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <span className='h6 fw-light mb-0'>
                            <i className='fas fa-fw fa-book-open text-primary' />
                            تعداد ویدیو ها
                          </span>
                          <span>30</span>
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
                            <i className='fas fa-fw fa-signal text-primary' />
                            سطح دوره
                          </span>
                          <span>متوسطه</span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <span className='h6 fw-light mb-0'>
                            <i className='fas fa-fw fa-globe text-primary' />
                            زبان
                          </span>
                          <span>انگلیسی</span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <span className='h6 fw-light mb-0'>
                            <i className='fas fa-fw fa-user-clock text-primary' />
                            تاریخ بروزرسانی
                          </span>
                          <span>30 تیر 1400</span>
                        </li>
                        <li className='list-group-item d-flex justify-content-between align-items-center'>
                          <span className='h6 fw-light mb-0'>
                            <i className='fas fa-fw fa-medal text-primary' />
                            مدرک
                          </span>
                          <span>دارد</span>
                        </li>
                      </ul>
                      {/* Divider */}
                      <hr />
                      {/* Instructor info */}
                      <div className='d-sm-flex align-items-center'>
                        {/* Avatar image */}
                        <div className='avatar avatar-xl'>
                          <img
                            className='avatar-img rounded-circle'
                            src='assets/images/avatar/05.jpg'
                            alt='avatar'
                          />
                        </div>
                        <div className='ms-sm-3 mt-2 mt-sm-0'>
                          <h5 className='mb-0'>
                            <a href='#'>لیندا محمدی</a>
                          </h5>
                          <p className='mb-0 small'>مدرس طراحی وب</p>
                        </div>
                      </div>
                      {/* Rating and follow */}
                      <div className='d-sm-flex justify-content-sm-between align-items-center mt-0 mt-sm-2'>
                        {/* Rating star */}
                        <ul className='list-inline mb-0'>
                          <li className='list-inline-item me-0 small'>
                            <i className='fas fa-star text-warning' />
                          </li>
                          <li className='list-inline-item me-0 small'>
                            <i className='fas fa-star text-warning' />
                          </li>
                          <li className='list-inline-item me-0 small'>
                            <i className='fas fa-star text-warning' />
                          </li>
                          <li className='list-inline-item me-0 small'>
                            <i className='fas fa-star text-warning' />
                          </li>
                          <li className='list-inline-item me-0 small'>
                            <i className='fas fa-star-half-alt text-warning' />
                          </li>
                          <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                            4.5/5.0
                          </li>
                        </ul>
                        {/* button */}
                        <button className='btn btn-sm btn-primary mb-0 mt-2 mt-sm-0'>
                          دنبال کردن
                        </button>
                      </div>
                    </div>
                    {/* Course info END */}
                  </div>
                  {/* Tags START */}
                  <div className='col-md-6 col-xl-12'>
                    <div className='card card-body border p-4'>
                      <h4 className='mb-3 fs-5'>برچسب ها</h4>
                      <ul className='list-inline mb-0'>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn btn-outline-light btn-sm' href='#'>
                            PHP
                          </a>{' '}
                        </li>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn btn-outline-light btn-sm' href='#'>
                            استارت آپ
                          </a>{' '}
                        </li>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn btn-outline-light btn-sm' href='#'>
                            HTML
                          </a>{' '}
                        </li>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn btn-outline-light btn-sm' href='#'>
                            bootstrap
                          </a>{' '}
                        </li>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn btn-outline-light btn-sm' href='#'>
                            بانک اطلاعات
                          </a>{' '}
                        </li>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn btn-outline-light btn-sm' href='#'>
                            طراحی وب
                          </a>{' '}
                        </li>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn btn-outline-light btn-sm' href='#'>
                            برنامه نویسی
                          </a>{' '}
                        </li>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn btn-outline-light btn-sm' href='#'>
                            داده کاوی
                          </a>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Tags END */}
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

      <Testimonials />
      <TrendingCourses />
    </>
  );
};

export default CourseDetail;

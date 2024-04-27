'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useCourseById } from '@/app/(src)/hooks/request/requestCourse';
import Testimonials from '@/app/(src)/testimonials';

import { TCurriculum, TCurriculumDetail } from '@/app/(src)/model/course.d';
import { TFaq, TTag } from '@/app/(src)/model/other.d';
import TrendingCourses from '@/app/(src)/componenets/TrendingCourses';

const CourseDetail = ({ params }: { params: { id: number } }) => {
  const { id } = params;

  const { data } = useCourseById(id);

  console.log('Not completed');

  return (
    <>
      <section className='bg-light py-0 py-sm-5'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-lg-8'>
              <h6 className='mb-3 font-base bg-primary text-white py-2 px-4 rounded-2 d-inline-block'>
                {data?.category}
              </h6>
              <h1 className='fs-3'>{data?.title}</h1>
              <p>{data?.short_description}</p>
              <ul className='list-inline mb-0'>
                <li className='list-inline-item me-3 mb-1 mb-sm-0'>
                  <i className='fas fa-star text-warning me-2'></i>
                  {data?.rating}/5.0
                </li>
                <li className='list-inline-item me-3 mb-1 mb-sm-0'>
                  <i className='fas fa-user-graduate text-orange me-2'></i>
                  {data?.enrolled} شرکت کننده
                </li>
                <li className='list-inline-item me-3 mb-1 mb-sm-0'>
                  <i className='fas fa-signal text-success me-2'></i>
                  {data?.level}
                </li>
                <li className='list-inline-item me-3 mb-1 mb-sm-0'>
                  <i className='bi bi-patch-exclamation-fill text-danger me-2'></i>
                  آخرین بروزرسانی {data?.last_updated}
                </li>
                <li className='list-inline-item mb-0'>
                  <i className='fas fa-globe text-info me-2'></i>
                  {data?.language}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-0 py-lg-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='card shadow rounded-2 p-0'>
                <div className='card-header border-bottom px-4 py-3'>
                  <ul
                    className='nav nav-pills nav-tabs-line py-0'
                    id='course-pills-tab'
                    role='tablist'
                  >
                    <li className='nav-item me-2 me-sm-4' role='presentation'>
                      <button
                        className='nav-link mb-2 mb-md-0 active'
                        id='course-pills-tab-1'
                        data-bs-toggle='pill'
                        data-bs-target='#course-pills-1'
                        type='button'
                        role='tab'
                        aria-controls='course-pills-1'
                        aria-selected='true'
                      >
                        توضیحات
                      </button>
                    </li>
                    <li className='nav-item me-2 me-sm-4' role='presentation'>
                      <button
                        className='nav-link mb-2 mb-md-0'
                        id='course-pills-tab-2'
                        data-bs-toggle='pill'
                        data-bs-target='#course-pills-2'
                        type='button'
                        role='tab'
                        aria-controls='course-pills-2'
                        aria-selected='false'
                      >
                        جلسات دوره
                      </button>
                    </li>
                    <li className='nav-item me-2 me-sm-4' role='presentation'>
                      <button
                        className='nav-link mb-2 mb-md-0'
                        id='course-pills-tab-3'
                        data-bs-toggle='pill'
                        data-bs-target='#course-pills-3'
                        type='button'
                        role='tab'
                        aria-controls='course-pills-3'
                        aria-selected='false'
                      >
                        مدرس
                      </button>
                    </li>
                    <li className='nav-item me-2 me-sm-4' role='presentation'>
                      <button
                        className='nav-link mb-2 mb-md-0'
                        id='course-pills-tab-4'
                        data-bs-toggle='pill'
                        data-bs-target='#course-pills-4'
                        type='button'
                        role='tab'
                        aria-controls='course-pills-4'
                        aria-selected='false'
                      >
                        دیدگاه
                      </button>
                    </li>
                    <li className='nav-item me-2 me-sm-4' role='presentation'>
                      <button
                        className='nav-link mb-2 mb-md-0'
                        id='course-pills-tab-5'
                        data-bs-toggle='pill'
                        data-bs-target='#course-pills-5'
                        type='button'
                        role='tab'
                        aria-controls='course-pills-5'
                        aria-selected='false'
                      >
                        سوالات متداول
                      </button>
                    </li>
                    <li className='nav-item me-2 me-sm-4' role='presentation'>
                      <button
                        className='nav-link mb-2 mb-md-0'
                        id='course-pills-tab-6'
                        data-bs-toggle='pill'
                        data-bs-target='#course-pills-6'
                        type='button'
                        role='tab'
                        aria-controls='course-pills-6'
                        aria-selected='false'
                      >
                        پرسش و پاسخ
                      </button>
                    </li>
                  </ul>
                </div>
                <div className='card-body p-4'>
                  <div
                    className='tab-content pt-2'
                    id='course-pills-tabContent'
                  >
                    <div
                      className='tab-pane fade show active'
                      id='course-pills-1'
                      role='tabpanel'
                      aria-labelledby='course-pills-tab-1'
                    >
                      <h5 className='mb-3'>توضیحات این دوره</h5>
                      <p className='mb-0'>{data?.description}</p>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='course-pills-2'
                      role='tabpanel'
                      aria-labelledby='course-pills-tab-2'
                    >
                      <div
                        className='accordion accordion-icon accordion-bg-light'
                        id='accordionExample2'
                      >
                        <>
                          {data?.curriculum?.map(
                            (e: TCurriculum, k: number) => (
                              <div
                                key={Math.random()}
                                className='accordion-item mb-3'
                              >
                                <h6
                                  className='accordion-header font-base'
                                  id={'heading-' + k}
                                >
                                  <button
                                    className='accordion-button fw-bold collapsed rounded d-sm-flex d-inline-block'
                                    type='button'
                                    data-bs-toggle='collapse'
                                    data-bs-target={'#collapse-' + k}
                                    aria-expanded='false'
                                    aria-controls={'collapse-' + k}
                                  >
                                    {e?.title}
                                    <span className='small ms-0 ms-sm-2'>
                                      ({e?.count} ویدیو)
                                    </span>
                                  </button>
                                </h6>
                                <div
                                  id={'collapse-' + k}
                                  className='accordion-collapse collapse'
                                  aria-labelledby={'heading-' + k}
                                  data-bs-parent={'#accordionExample-' + k}
                                >
                                  <div className='accordion-body mt-3'>
                                    <>
                                      {Object.values(e?.detail).map(
                                        (ee: TCurriculumDetail, kk: number) => (
                                          <Fragment key={Math.random()}>
                                            {!!kk && <hr />}

                                            <div className='d-flex justify-content-between align-items-center'>
                                              <div className='position-relative d-flex align-items-center'>
                                                <div>
                                                  <a
                                                    href={ee?.video}
                                                    className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                                                    data-bs-toggle='modal'
                                                    data-bs-target='#exampleModal'
                                                  >
                                                    <i className='fas fa-play me-0'></i>
                                                  </a>
                                                </div>
                                                <div className='row g-sm-0 align-items-center'>
                                                  <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-md-400px'>
                                                    {ee?.title}
                                                  </span>
                                                </div>
                                              </div>
                                              <div className='d-flex justify-content-center gap-3'>
                                                {ee?.src && (
                                                  <span className='badge text-bg-success ms-2 ms-md-0'>
                                                    <i className='fas fa-file fa-fw me-1'></i>
                                                    فایل
                                                  </span>
                                                )}
                                                {ee?.money && (
                                                  <span className='badge text-bg-orange ms-2 ms-md-0'>
                                                    <i className='fas fa-lock fa-fw me-1'></i>
                                                    پولی
                                                  </span>
                                                )}
                                                <p className='mb-0 d-inline-block text-truncate w-70px w-sm-60px'>
                                                  {ee?.time}
                                                </p>
                                              </div>
                                            </div>
                                          </Fragment>
                                        ),
                                      )}
                                    </>
                                  </div>
                                </div>
                              </div>
                            ),
                          )}
                        </>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='course-pills-3'
                      role='tabpanel'
                      aria-labelledby='course-pills-tab-3'
                    >
                      <div className='card mb-0 mb-md-4'>
                        <div className='row g-0 align-items-center'>
                          <div className='col-md-5'>
                            <Image
                              unoptimized={true}
                              width='500'
                              height='500'
                              src={data?.instructor?.image!}
                              className='img-fluid rounded-3'
                              alt='instructor-image'
                            />
                          </div>
                          <div className='col-md-7'>
                            <div className='card-body'>
                              <h3 className='card-title mb-0 fs-5'>
                                {data?.instructor?.name}
                              </h3>
                              <p className='mb-2'></p>
                              {data &&
                                Object?.keys(data?.instructor?.social_media!)
                                  ?.length && (
                                  <ul className='list-inline mb-3'>
                                    {data?.instructor?.social_media
                                      ?.twitter && (
                                      <li className='list-inline-item me-3'>
                                        <a
                                          href={
                                            data?.instructor?.social_media
                                              ?.twitter
                                          }
                                          className='fs-5 text-twitter'
                                        >
                                          <i className='fab fa-twitter-square'></i>
                                        </a>
                                      </li>
                                    )}
                                    {data?.instructor?.social_media
                                      ?.instagram && (
                                      <li className='list-inline-item me-3'>
                                        <a
                                          href={
                                            data?.instructor?.social_media
                                              ?.instagram
                                          }
                                          className='fs-5 text-instagram'
                                        >
                                          <i className='fab fa-instagram-square'></i>
                                        </a>
                                      </li>
                                    )}
                                    {data?.instructor?.social_media
                                      ?.facebook && (
                                      <li className='list-inline-item me-3'>
                                        <a
                                          href={
                                            data?.instructor?.social_media
                                              ?.facebook
                                          }
                                          className='fs-5 text-facebook'
                                        >
                                          <i className='fab fa-facebook-square'></i>
                                        </a>
                                      </li>
                                    )}
                                    {data?.instructor?.social_media
                                      ?.linkedin && (
                                      <li className='list-inline-item me-3'>
                                        <a
                                          href={
                                            data?.instructor?.social_media
                                              ?.linkedin
                                          }
                                          className='fs-5 text-linkedin'
                                        >
                                          <i className='fab fa-linkedin'></i>
                                        </a>
                                      </li>
                                    )}
                                    {data?.instructor?.social_media
                                      ?.youtube && (
                                      <li className='list-inline-item'>
                                        <a
                                          href={
                                            data?.instructor?.social_media
                                              ?.youtube
                                          }
                                          className='fs-5 text-youtube'
                                        >
                                          <i className='fab fa-youtube-square'></i>
                                        </a>
                                      </li>
                                    )}
                                    {data?.instructor?.social_media
                                      ?.twitter && (
                                      <li className='list-inline-item'>
                                        <a
                                          href={
                                            data?.instructor?.social_media
                                              ?.telegram
                                          }
                                          className='fs-5 text-telegram'
                                        >
                                          <i className='fab fa-telegram'></i>
                                        </a>
                                      </li>
                                    )}
                                  </ul>
                                )}

                              <ul className='list-inline'>
                                <li className='list-inline-item'>
                                  <div className='d-flex align-items-center me-3 mb-2'>
                                    <span className='icon-md bg-orange bg-opacity-10 text-orange rounded-circle'>
                                      <i className='fas fa-user-graduate'></i>
                                    </span>
                                    <span className='h6 fw-light mb-0 ms-2'>
                                      {data?.instructor?.number_of_students}
                                    </span>
                                  </div>
                                </li>
                                <li className='list-inline-item'>
                                  <div className='d-flex align-items-center me-3 mb-2'>
                                    <span className='icon-md bg-warning bg-opacity-15 text-warning rounded-circle'>
                                      <i className='fas fa-star'></i>
                                    </span>
                                    <span className='h6 fw-light mb-0 ms-2'>
                                      {data?.instructor?.rating}
                                    </span>
                                  </div>
                                </li>
                                <li className='list-inline-item'>
                                  <div className='d-flex align-items-center me-3 mb-2'>
                                    <span className='icon-md bg-danger bg-opacity-10 text-danger rounded-circle'>
                                      <i className='fas fa-play'></i>
                                    </span>
                                    <span className='h6 fw-light mb-0 ms-2'>
                                      {data?.instructor?.number_of_courses} دوره
                                      آموزشی
                                    </span>
                                  </div>
                                </li>
                                <li className='list-inline-item'>
                                  <div className='d-flex align-items-center me-3 mb-2'>
                                    <span className='icon-md bg-info bg-opacity-10 text-info rounded-circle'>
                                      <i className='fas fa-comment-dots'></i>
                                    </span>
                                    <span className='h6 fw-light mb-0 ms-2'>
                                      {data?.instructor?.comments}
                                    </span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className='mb-3'>درباره مدرس</h5>
                      <p className='mb-3'>{data?.instructor?.description}</p>
                      <div className='col-12'>
                        <ul className='list-group list-group-borderless mb-0'>
                          <li className='list-group-item pb-0'>
                            ایمیل:
                            <a href='#' className='ms-2'>
                              {data?.instructor?.email}
                            </a>
                          </li>
                          <li className='list-group-item pb-0'>
                            وب سایت:
                            <a href='#' className='ms-2'>
                              {data?.instructor?.website}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='course-pills-4'
                      role='tabpanel'
                      aria-labelledby='course-pills-tab-4'
                    >
                      <div className='row mb-4'>
                        <h5 className='mb-4'>دیدگاه کاربران</h5>
                        <div className='col-md-4 mb-3 mb-md-0'>
                          <div className='text-center'>
                            <h2 className='mb-0'>4.5</h2>
                            <ul className='list-inline mb-0'>
                              <li className='list-inline-item me-0'>
                                <i className='fas fa-star text-warning'></i>
                              </li>
                              <li className='list-inline-item me-0'>
                                <i className='fas fa-star text-warning'></i>
                              </li>
                              <li className='list-inline-item me-0'>
                                <i className='fas fa-star text-warning'></i>
                              </li>
                              <li className='list-inline-item me-0'>
                                <i className='fas fa-star text-warning'></i>
                              </li>
                              <li className='list-inline-item me-0'>
                                <i className='fas fa-star-half-alt text-warning'></i>
                              </li>
                            </ul>
                            <p className='mb-0'>(بر اساس بررسی امروز)</p>
                          </div>
                        </div>
                        <div className='col-md-8'>
                          <div className='row align-items-center'>
                            <div className='col-6 col-sm-8'>
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
                              <ul className='list-inline mb-0'>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                              </ul>
                            </div>
                            <div className='col-6 col-sm-8'>
                              <div className='progress progress-sm bg-warning bg-opacity-15'>
                                <div
                                  className='progress-bar bg-warning'
                                  role='progressbar'
                                  style={{ width: '80%' }}
                                  aria-valuenow={80}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                            <div className='col-6 col-sm-4'>
                              <ul className='list-inline mb-0'>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                              </ul>
                            </div>
                            <div className='col-6 col-sm-8'>
                              <div className='progress progress-sm bg-warning bg-opacity-15'>
                                <div
                                  className='progress-bar bg-warning'
                                  role='progressbar'
                                  style={{ width: '60%' }}
                                  aria-valuenow={60}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                            <div className='col-6 col-sm-4'>
                              <ul className='list-inline mb-0'>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                              </ul>
                            </div>
                            <div className='col-6 col-sm-8'>
                              <div className='progress progress-sm bg-warning bg-opacity-15'>
                                <div
                                  className='progress-bar bg-warning'
                                  role='progressbar'
                                  style={{ width: '40%' }}
                                  aria-valuenow={40}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                            <div className='col-6 col-sm-4'>
                              <ul className='list-inline mb-0'>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                              </ul>
                            </div>
                            <div className='col-6 col-sm-8'>
                              <div className='progress progress-sm bg-warning bg-opacity-15'>
                                <div
                                  className='progress-bar bg-warning'
                                  role='progressbar'
                                  style={{ width: '20%' }}
                                  aria-valuenow={20}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                            <div className='col-6 col-sm-4'>
                              <ul className='list-inline mb-0'>
                                <li className='list-inline-item me-0 small'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0 small'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='d-md-flex my-4'>
                          <div className='avatar avatar-xl me-4 flex-shrink-0'>
                            <Image
                              unoptimized={true}
                              width='500'
                              height='500'
                              className='avatar-img rounded-circle'
                              src='/images/avatar/09.jpg'
                              alt='avatar'
                            />
                          </div>
                          <div>
                            <div className='d-sm-flex mt-1 mt-md-0 align-items-center'>
                              <h5 className='me-3 mb-0 fw-normal'>
                                نیلوفر سجادی
                              </h5>
                              <ul className='list-inline mb-0'>
                                <li className='list-inline-item me-0'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                              </ul>
                            </div>
                            <p className='small mb-2'>2 روز قبل</p>
                            <p className='mb-2'>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ و با استفاده از طراحان گرافیک است.
                              چاپگرها و متون بلکه روزنامه و مجله در ستون و
                              سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                              مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                              کاربردی می باشد.
                            </p>
                            <div
                              className='btn-group'
                              role='group'
                              aria-label='Basic radio toggle button group'
                            >
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
                                <i className='far fa-thumbs-up me-1'></i>25
                              </label>
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
                                <i className='far fa-thumbs-down me-1'></i>2
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className='d-md-flex mb-4 ps-4 ps-md-5'>
                          <div className='avatar avatar-lg me-4 flex-shrink-0'>
                            <Image
                              unoptimized={true}
                              width='500'
                              height='500'
                              className='avatar-img rounded-circle'
                              src='/images/avatar/02.jpg'
                              alt='avatar'
                            />
                          </div>
                          <div>
                            <div className='d-sm-flex mt-1 mt-md-0 align-items-center'>
                              <h5 className='me-3 mb-0 fw-normal'>
                                مهرداد علیزاده
                              </h5>
                            </div>
                            <p className='small mb-2'>1 روز قبل</p>
                            <p className='mb-2'>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                              صنعت چاپ و با استفاده از طراحان گرافیک است.
                              چاپگرها و متون بلکه روزنامه و مجله در ستون و
                              سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                              مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                              کاربردی می باشد.
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className='d-md-flex my-4'>
                          <div className='avatar avatar-xl me-4 flex-shrink-0'>
                            <Image
                              unoptimized={true}
                              width='500'
                              height='500'
                              className='avatar-img rounded-circle'
                              src='/images/avatar/07.jpg'
                              alt='avatar'
                            />
                          </div>
                          <div>
                            <div className='d-sm-flex mt-1 mt-md-0 align-items-center'>
                              <h5 className='me-3 mb-0 fw-normal'>علی مرادی</h5>
                              <ul className='list-inline mb-0'>
                                <li className='list-inline-item me-0'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0'>
                                  <i className='fas fa-star text-warning'></i>
                                </li>
                                <li className='list-inline-item me-0'>
                                  <i className='far fa-star text-warning'></i>
                                </li>
                              </ul>
                            </div>
                            <p className='small mb-2'>2 روز قبل</p>
                            <p className='mb-2'>
                              چاپگرها و متون بلکه روزنامه و مجله در ستون و
                              سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                              مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                              کاربردی می باشد.
                            </p>
                            <div
                              className='btn-group'
                              role='group'
                              aria-label='Basic radio toggle button group'
                            >
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
                                <i className='far fa-thumbs-up me-1'></i>25
                              </label>
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
                                <i className='far fa-thumbs-down me-1'></i>2
                              </label>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                      <div className='mt-2'>
                        <h5 className='mb-4'>ثبت دیدگاه</h5>
                        <form className='row g-3'>
                          <div className='col-md-6 bg-light-input'>
                            <input
                              type='text'
                              className='form-control'
                              id='inputtext'
                              placeholder='نام'
                              aria-label='First name'
                            />
                          </div>
                          <div className='col-md-6 bg-light-input'>
                            <input
                              type='email'
                              className='form-control'
                              placeholder='ایمیل'
                              id='inputEmail4'
                            />
                          </div>
                          <div className='col-12 bg-light-input'>
                            <select
                              id='inputState2'
                              className='form-select js-choice'
                            >
                              <option selected>★★★★★ (5/5)</option>
                              <option>★★★★☆ (4/5)</option>
                              <option>★★★☆☆ (3/5)</option>
                              <option>★★☆☆☆ (2/5)</option>
                              <option>★☆☆☆☆ (1/5)</option>
                            </select>
                          </div>
                          <div className='col-12 bg-light-input'>
                            <textarea
                              className='form-control'
                              id='exampleFormControlTextarea1'
                              placeholder='دیدگاه خود را بنویسید'
                              rows={3}
                            ></textarea>
                          </div>
                          <div className='col-12'>
                            <button
                              type='submit'
                              className='btn btn-primary mb-0'
                            >
                              ثبت دیدگاه
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='course-pills-5'
                      role='tabpanel'
                      aria-labelledby='course-pills-tab-5'
                    >
                      <h5 className='mb-3'>سوالات متداول</h5>
                      <div
                        className='accordion accordion-flush'
                        id='accordionExample'
                      >
                        {data?.faq?.map((e: TFaq, k) => (
                          <div key={Math.random()} className='accordion-item'>
                            <h2
                              className='accordion-header'
                              id={'heading-' + k}
                            >
                              <button
                                className='accordion-button collapsed'
                                type='button'
                                data-bs-toggle='collapse'
                                data-bs-target={'#collapse-' + k}
                                aria-expanded='false'
                                aria-controls={'collapse-' + k}
                              >
                                <span className='text-secondary fw-bold me-3'>
                                  {k + 1}
                                </span>
                                <span className='h6 mb-0'>{e?.question}</span>
                              </button>
                            </h2>
                            <div
                              id={'collapse-' + k}
                              className='accordion-collapse collapse'
                              aria-labelledby={'heading-' + k}
                              data-bs-parent='#accordionExample'
                            >
                              <div className='accordion-body pt-0'>
                                {e?.answer}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='course-pills-6'
                      role='tabpanel'
                      aria-labelledby='course-pills-tab-6'
                    >
                      <div className='row'>
                        <div className='col-12'>
                          <h5 className='mb-4'>پرسش و پاسخ</h5>
                          <div className='d-flex mb-4'>
                            <div className='avatar avatar-sm flex-shrink-0 me-2'>
                              <a href='#'>
                                <Image
                                  unoptimized={true}
                                  width='500'
                                  height='500'
                                  className='avatar-img rounded-circle'
                                  src='/images/avatar/09.jpg'
                                  alt=''
                                />
                              </a>
                            </div>
                            <form className='w-100 d-flex'>
                              <textarea
                                className='one form-control pe-4 bg-light'
                                id='autoheighttextarea'
                                rows={1}
                                placeholder='افزودن پرسش ...'
                              ></textarea>
                              <button
                                className='btn btn-primary ms-2 mb-0'
                                type='button'
                              >
                                ارسال
                              </button>
                            </form>
                          </div>
                          <div className='border p-2 p-sm-4 rounded-3 mb-4'>
                            <ul className='list-unstyled mb-0'>
                              <li className='comment-item'>
                                <div className='d-flex mb-3'>
                                  <div className='avatar avatar-sm flex-shrink-0'>
                                    <a href='#'>
                                      <Image
                                        unoptimized={true}
                                        width='500'
                                        height='500'
                                        className='avatar-img rounded-circle'
                                        src='/images/avatar/05.jpg'
                                        alt=''
                                      />
                                    </a>
                                  </div>
                                  <div className='ms-2'>
                                    <div className='bg-light p-3 rounded'>
                                      <div className='d-flex justify-content-center'>
                                        <div className='me-2'>
                                          <h6 className='mb-1 fw-normal'>
                                            <a href='#!'> مهناز احمدی </a>
                                          </h6>
                                          <p className='mb-0'>
                                            آیا این آموزش جامع است و می شود با
                                            آن سایت مدیریت یا فروشگاهی زد؟
                                            (موارپلود تصویر و...)
                                          </p>
                                        </div>
                                        <small>5دقیقه</small>
                                      </div>
                                    </div>
                                    <ul className='nav nav-divider py-2 small'>
                                      <li className='nav-item'>
                                        <a
                                          className='text-primary-hover'
                                          href='#'
                                        >
                                          لایک (3)
                                        </a>
                                      </li>
                                      <li className='nav-item'>
                                        <a
                                          className='text-primary-hover'
                                          href='#'
                                        >
                                          پاسخ
                                        </a>
                                      </li>
                                      <li className='nav-item'>
                                        <a
                                          className='text-primary-hover'
                                          href='#'
                                        >
                                          مشاهده 5 پاسخ
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <ul className='list-unstyled ms-4'>
                                  <li className='comment-item'>
                                    <div className='d-flex'>
                                      <div className='avatar avatar-xs flex-shrink-0'>
                                        <a href='#'>
                                          <Image
                                            unoptimized={true}
                                            width='500'
                                            height='500'
                                            className='avatar-img rounded-circle'
                                            src='/images/avatar/06.jpg'
                                            alt=''
                                          />
                                        </a>
                                      </div>
                                      <div className='ms-2'>
                                        <div className='bg-light p-3 rounded'>
                                          <div className='d-flex justify-content-center'>
                                            <div className='me-2'>
                                              <h6 className='mb-1 fw-normal'>
                                                <a href='#'>زهرا مختاری</a>
                                              </h6>
                                              <p className=' mb-0'>
                                                چاپگرها و متون بلکه روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم
                                                است و برای شرایط فعلی تکنولوژی
                                                مورد نیاز و کاربردهای متنوع با
                                                هدف بهبود ابزارهای کاربردی می
                                                باشد.
                                              </p>
                                            </div>
                                            <small>2دقیقه</small>
                                          </div>
                                        </div>
                                        <ul className='nav nav-divider py-2 small'>
                                          <li className='nav-item'>
                                            <a
                                              className='text-primary-hover'
                                              href='#!'
                                            >
                                              لایک (5)
                                            </a>
                                          </li>
                                          <li className='nav-item'>
                                            <a
                                              className='text-primary-hover'
                                              href='#!'
                                            >
                                              پاسخ
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className='border p-2 p-sm-4 rounded-3'>
                            <ul className='list-unstyled mb-0'>
                              <li className='comment-item'>
                                <div className='d-flex'>
                                  <div className='avatar avatar-sm flex-shrink-0'>
                                    <a href='#'>
                                      <Image
                                        unoptimized={true}
                                        width='500'
                                        height='500'
                                        className='avatar-img rounded-circle'
                                        src='/images/avatar/02.jpg'
                                        alt=''
                                      />
                                    </a>
                                  </div>
                                  <div className='ms-2'>
                                    <div className='bg-light p-3 rounded'>
                                      <div className='d-flex justify-content-center'>
                                        <div className='me-2'>
                                          <h6 className='mb-1 fw-normal'>
                                            <a href='#!'> محمد علیزاده </a>
                                          </h6>
                                          <p className='mb-0'>
                                            در vuejs این فایل ها در حالت عادی
                                            اجرا می شوند یا احتیاج به تنظیمات
                                            خاص دارد، اگر دارد در دوره آموزش
                                            دادید؟
                                          </p>
                                        </div>
                                        <small>5دقیقه</small>
                                      </div>
                                    </div>
                                    <ul className='nav nav-divider py-2 small'>
                                      <li className='nav-item'>
                                        <a
                                          className='text-primary-hover'
                                          href='#'
                                        >
                                          لایک
                                        </a>
                                      </li>
                                      <li className='nav-item'>
                                        <a
                                          className='text-primary-hover'
                                          href='#'
                                        >
                                          پاسخ
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 pt-5 pt-lg-0'>
              <div className='row mb-5 mb-lg-0'>
                <div className='col-md-6 col-lg-12'>
                  <div className='card shadow p-2 mb-4 z-index-9'>
                    <div className='overflow-hidden rounded-3'>
                      <Image
                        unoptimized={true}
                        src={data?.image!}
                        width='500'
                        height='500'
                        className='card-img'
                        alt='course image'
                      />
                      <div className='bg-overlay bg-dark opacity-6'></div>
                      <div className='card-img-overlay d-flex align-items-start flex-column p-3'>
                        <div className='m-auto'>
                          <Link
                            href='https://www.aparat.com/video/video/embed/videohash/31hor/vt/frame'
                            className='btn btn-lg text-danger btn-round btn-white-shadow mb-0'
                            data-glightbox=''
                            data-gallery='course-video'
                          >
                            <i className='fas fa-play'></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='card-body px-3'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div>
                          <div className='d-flex align-items-center'>
                            <h3 className='fw-bold mb-0 fs-5 me-2'>
                              {data?.price.toLocaleString()} تومان
                            </h3>
                            {data?.price && (
                              <span className='text-decoration-line-through mb-0 me-2'>
                                {(data?.price - data?.discoun).toLocaleString()}
                              </span>
                            )}
                            <span className='badge text-bg-orange mb-0'>
                              {data?.discount_percent}% تخفیف
                            </span>
                          </div>
                          <p className='mb-0 text-danger'>
                            <i className='fas fa-stopwatch me-2'></i>
                            {data?.time_left_discount} روز باقی مانده
                          </p>
                        </div>
                        <div className='dropdown'>
                          <a
                            href='#'
                            className='btn btn-sm btn-light rounded small'
                            role='button'
                            id='dropdownShare'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <i className='fas fa-fw fa-share-alt'></i>
                          </a>
                          <ul
                            className='dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded'
                            aria-labelledby='dropdownShare'
                          >
                            <li>
                              <a className='dropdown-item' href='#'>
                                <i className='fab fa-twitter-square me-2'></i>
                                Twitter
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='#'>
                                <i className='fab fa-facebook-square me-2'></i>
                                Facebook
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='#'>
                                <i className='fab fa-linkedin me-2'></i>LinkedIn
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item' href='#'>
                                <i className='fas fa-copy me-2'></i>کپی لینک
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className='mt-3 d-sm-flex justify-content-sm-between'>
                        <a href='#' className='btn btn-outline-primary mb-0'>
                          پیش نمایش
                        </a>
                        <a href='#' className='btn btn-success mb-0'>
                          خرید دوره
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='card card-body shadow p-4 mb-4'>
                    <h4 className='mb-3 fs-5'>مشخصات دوره</h4>
                    <ul className='list-group list-group-borderless'>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <span className='h6 fw-light mb-0'>
                          <i className='fas fa-fw fa-book-open text-primary'></i>
                          تعداد ویدیو ها
                        </span>
                        <span>{data?.lectures}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <span className='h6 fw-light mb-0'>
                          <i className='fas fa-fw fa-clock text-primary'></i>مدت
                          زمان دوره
                        </span>
                        <span>{data?.duration}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <span className='h6 fw-light mb-0'>
                          <i className='fas fa-fw fa-signal text-primary'></i>
                          سطح دوره
                        </span>
                        <span>{data?.level}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <span className='h6 fw-light mb-0'>
                          <i className='fas fa-fw fa-globe text-primary'></i>
                          زبان
                        </span>
                        <span>{data?.language}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <span className='h6 fw-light mb-0'>
                          <i className='fas fa-fw fa-user-clock text-primary'></i>
                          تاریخ بروزرسانی
                        </span>
                        <span>{data?.last_updated}</span>
                      </li>
                      <li className='list-group-item d-flex justify-content-between align-items-center'>
                        <span className='h6 fw-light mb-0'>
                          <i className='fas fa-fw fa-medal text-primary'></i>
                          مدرک
                        </span>
                        <span>{data?.certificate ? 'دارد' : 'ندارد'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-6 col-lg-12'>
                  <div className='card card-body shadow p-4 mb-4'>
                    <h4 className='mb-3 fs-5'>آخرین دوره ها</h4>
                    <div className='row gx-3 mb-3'>
                      <div className='col-4'>
                        <Image
                          unoptimized={true}
                          width='500'
                          height='500'
                          className='rounded'
                          src='/images/courses/4by3/21.jpg'
                          alt=''
                        />
                      </div>
                      <div className='col-8'>
                        <h6 className='mb-0 fw-normal'>
                          <a href='#'>آموزش مقدماتی کتابخانه Pygame</a>
                        </h6>
                        <ul className='list-group list-group-borderless mt-1 d-flex justify-content-between'>
                          <li className='list-group-item px-0 d-flex justify-content-between'>
                            <span className='text-success'>100,000 تومان</span>
                            <span className='h6 fw-light'>
                              4.5
                              <i className='fas fa-star text-warning ms-1'></i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='row gx-3'>
                      <div className='col-4'>
                        <Image
                          unoptimized={true}
                          width='500'
                          height='500'
                          className='rounded'
                          src='/images/courses/4by3/18.jpg'
                          alt=''
                        />
                      </div>
                      <div className='col-8'>
                        <h6 className='mb-0 fw-normal'>
                          <a href='#'>دوره آموزش جامع Vue Js</a>
                        </h6>
                        <ul className='list-group list-group-borderless mt-1 d-flex justify-content-between'>
                          <li className='list-group-item px-0 d-flex justify-content-between'>
                            <span className='text-success'>70,000 تومان</span>
                            <span className='h6 fw-light'>
                              4.0
                              <i className='fas fa-star text-warning ms-1'></i>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {data?.tags.length && (
                    <div className='card card-body shadow p-4'>
                      <h4 className='mb-3 fs-5'>برچسب ها</h4>
                      <ul className='list-inline mb-0'>
                        {data?.tags?.map((e: TTag) => (
                          <li key={e?.name} className='list-inline-item'>
                            <Link
                              className='btn btn-outline-light btn-sm'
                              href={e?.link}
                            >
                              {e?.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <TrendingCourses />
    </>
  );
};

export default CourseDetail;

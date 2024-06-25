'use client';

import Image from 'next/image';

import { useInstructorById } from '@/app/(src)/hooks/request/requestInstructor';
import CourseTile from '@/app/(src)/course/courseTile';
import Rating from '@/app/(src)/componenets/rating';
import InstructorRelated from '@/app/(src)/instructor/instructorDetail/instructorRelated';
import Testimonials from '@/app/(src)/testimonials';

import { TCourses } from '@/app/(src)/model/course.d';
import Header from '../../componenets/Header';

const InstructorDetail = ({ params }: { params: { id: number } }) => {
  const id = params?.id;

  const { data } = useInstructorById(id);
  console.log(data);

  return (
    <>
      <section className='pt-5 pb-8'>
        <div className='container'>
          <div className='row g-0 g-lg-5'>
            <div className='col-lg-4'>
              <div className='row'>
                <div className='col-md-6 col-lg-12'>
                  <div className='card shadow p-2 mb-4 text-center'>
                    <div className='rounded-3'>
                      <Image
                        unoptimized={true}
                        src={data?.image}
                        width='500'
                        height='500'
                        className='card-img'
                        alt='course image'
                      />
                    </div>
                    <div className='card-body px-3'>
                      <ul className='list-inline'>
                        {data?.rating && <Rating data={data?.rating} />}
                      </ul>
                      <ul className='list-inline mb-0'>
                        {data?.social_media?.facebook && (
                          <li className='list-inline-item'>
                            <a
                              className='btn px-2 btn-sm bg-facebook'
                              href={data?.social_media?.facebook}
                            >
                              <i className='fab fa-fw fa-facebook-f'></i>
                            </a>
                          </li>
                        )}
                        {data?.social_media?.instagram && (
                          <li className='list-inline-item'>
                            <a
                              className='btn px-2 btn-sm bg-instagram-gradient'
                              href={data?.social_media?.instagram}
                            >
                              <i className='fab fa-fw fa-instagram'></i>
                            </a>
                          </li>
                        )}
                        {data?.social_media?.twitter && (
                          <li className='list-inline-item'>
                            <a
                              className='btn px-2 btn-sm bg-twitter'
                              href={data?.social_media?.twitter}
                            >
                              <i className='fab fa-fw fa-twitter'></i>
                            </a>
                          </li>
                        )}
                        {data?.social_media?.linkedin && (
                          <li className='list-inline-item'>
                            <a
                              className='btn px-2 btn-sm bg-linkedin'
                              href={data?.social_media?.linkedin}
                            >
                              <i className='fab fa-fw fa-linkedin-in'></i>
                            </a>
                          </li>
                        )}
                        {data?.social_media?.twitter && (
                          <li className='list-inline-item'>
                            <a
                              className='btn px-2 btn-sm bg-twitter'
                              href={data?.social_media?.twitter}
                            >
                              <i className='fab fa-fw fa-telegram'></i>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                {(data?.skill.length || data?.education.length) && (
                  <div className='col-md-6 col-lg-12'>
                    <div className='card card-body shadow p-4 mb-4'>
                      {data?.education.length && (
                        <>
                          <h4 className='mb-3 fs-5'>تحصیلات</h4>
                          {data?.education.map(
                            (e: {
                              university: string;
                              level_of_education: string;
                            }) => (
                              <div
                                key={Math.random()}
                                className='d-flex align-items-center mb-4'
                              >
                                <span className='icon-md mb-0 bg-light rounded-3'>
                                  <i className='fas fa-graduation-cap'></i>
                                </span>
                                <div className='ms-3'>
                                  <h6 className='mb-0 fw-normal'>
                                    {e?.university}
                                  </h6>
                                  <p className='mb-0 small'>
                                    {e?.level_of_education}
                                  </p>
                                </div>
                              </div>
                            ),
                          )}
                        </>
                      )}
                      {data?.education.length && data?.skill.length && <hr />}
                      {data?.skill.length && (
                        <>
                          <h4 className='mb-3 fs-5'>مهارت ها</h4>
                          {data?.skill.map(
                            (e: { name: string; percent: string }) => (
                              <div
                                key={Math.random()}
                                className='overflow-hidden mb-4'
                              >
                                <h6 className='uppercase fw-normal'>
                                  {e?.name}
                                </h6>
                                <div className='progress progress-sm bg-primary bg-opacity-10'>
                                  <div
                                    className='progress-bar bg-primary aos'
                                    style={{ width: e?.percent + '%' }}
                                  >
                                    <span className='progress-percent-simple h6 mb-0'>
                                      {e?.percent}%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ),
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className='col-lg-8'>
              <h5 className='mb-0'>سلام، من</h5>
              <h1 className='mb-0 fs-3'>{data?.name}</h1>
              <p>هستم، {data?.categrory}</p>
              <p className='mt-4'>{data?.description}</p>
              <ul className='list-group list-group-borderless'>
                {data?.address && (
                  <li className='list-group-item px-0'>
                    <span className='h6 fw-light'>
                      <i className='fas fa-fw fa-map-marker-alt text-primary me-1 me-sm-3'></i>
                      آدرس:
                    </span>
                    <span>{data?.address}</span>
                  </li>
                )}
                {data?.email && (
                  <li className='list-group-item px-0'>
                    <span className='h6 fw-light'>
                      <i className='fas fa-fw fa-envelope text-primary me-1 me-sm-3'></i>
                      ایمیل:
                    </span>
                    <span>{data?.email}</span>
                  </li>
                )}
                {data?.phone && (
                  <li className='list-group-item px-0'>
                    <span className='h6 fw-light'>
                      <i className='fas fa-fw fa-headphones text-primary me-1 me-sm-3'></i>
                      شماره تماس:
                    </span>
                    <span>{data?.phone}</span>
                  </li>
                )}
                {data?.website && (
                  <li className='list-group-item px-0'>
                    <span className='h6 fw-light'>
                      <i className='fas fa-fw fa-globe text-primary me-1 me-sm-3'></i>
                      وب سایت:
                    </span>
                    <span>{data?.website}</span>
                  </li>
                )}
              </ul>
              <div className='row mt-4 g-3'>
                <div className='col-sm-6 col-lg-4'>
                  <div className='d-flex align-items-center'>
                    <span className='icon-lg text-success mb-0 bg-success bg-opacity-10 rounded-3'>
                      <i className='fas fa-play'></i>
                    </span>
                    <div className='ms-3'>
                      <div className='d-flex'>
                        <h5 className='mb-0 fw-bold'>
                          {data?.number_of_courses}
                        </h5>
                        <span className='mb-0 h5'>+</span>
                      </div>
                      <p className='mb-0 h6 fw-light'>تعداد دوره ها</p>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                  <div className='d-flex align-items-center'>
                    <span className='icon-lg text-purple bg-purple bg-opacity-10 rounded-3 mb-0'>
                      <i className='fas fa-users'></i>
                    </span>
                    <div className='ms-3'>
                      <div className='d-flex'>
                        <h5 className='mb-0 fw-bold'>
                          {data?.number_of_students}
                        </h5>
                        <span className='mb-0 h5'>+</span>
                      </div>
                      <p className='mb-0 h6 fw-light'>تعداد دانشجویان</p>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-lg-4'>
                  <div className='d-flex align-items-center'>
                    <span className='icon-lg text-orange bg-orange bg-opacity-10 rounded-3 mb-0'>
                      <i className='fas fa-trophy'></i>
                    </span>
                    <div className='ms-3'>
                      <div className='d-flex'>
                        <h5 className='mb-0 fw-bold'>
                          {data?.years_of_teaching_experience}
                        </h5>
                        <span className='mb-0 h5'>+</span>
                      </div>
                      <p className='mb-0 h6 fw-light'>سال تجربه تدریس</p>
                    </div>
                  </div>
                </div>
              </div>
              {data?.courses?.length && (
                <div className='row g-4 mt-4'>
                  <h2 className='fs-4'>لیست دوره ها</h2>
                  {data?.courses?.map((e: TCourses) => (
                    <div key={e?.id} className='col-sm-6'>
                      <CourseTile data={e} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <InstructorRelated />
    </>
  );
};
export default InstructorDetail;

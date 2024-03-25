'use client';

import Image from 'next/image';

const ProfileStudentCourseResume = () => {
  console.log('Not completed');

  return (
    <>
      <div className='card border'>
        <div className='card-header border-bottom'>
          <div className='card'>
            <div className='row g-0'>
              <div className='col-md-3'>
                <Image
                  unoptimized={true}
                  width='500'
                  height='500'
                  src='/images/courses/4by3/01.jpg'
                  className='rounded-2'
                  alt='Card image'
                />
              </div>
              <div className='col-md-9'>
                <div className='card-body'>
                  <h3 className='card-title fs-5'>
                    <a href='#'>آموزش رایگان Blazor WebAssembly</a>
                  </h3>
                  <ul className='list-inline mb-2'>
                    <li className='list-inline-item h6 fw-light mb-1 mb-sm-0'>
                      <i className='far fa-clock text-danger me-2'></i>6 ساعت
                    </li>
                    <li className='list-inline-item h6 fw-light mb-1 mb-sm-0'>
                      <i className='fas fa-table text-orange me-2'></i>82 ویدیو
                    </li>
                    <li className='list-inline-item h6 fw-light'>
                      <i className='fas fa-signal text-success me-2'></i>مقدماتی
                    </li>
                  </ul>
                  <a href='#' className='btn btn-primary-soft btn-sm mb-0'>
                    توضیحات دوره
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <h5>جلسات دوره</h5>
          <div
            className='accordion accordion-icon accordion-bg-light'
            id='accordionExample2'
          >
            <div className='accordion-item mb-3'>
              <h6 className='accordion-header font-base' id='heading-1'>
                <a
                  className='accordion-button fw-bold rounded collapsed d-block pe-4'
                  href='#collapse-1'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapse-1'
                  aria-expanded='true'
                  aria-controls='collapse-1'
                >
                  <span className='mb-0'>معرفی دوره فتوشاپ</span>
                  <span className='small d-block mt-1'>(3 ویدیو)</span>
                </a>
              </h6>
              <div
                id='collapse-1'
                className='accordion-collapse collapse show'
                aria-labelledby='heading-1'
                data-bs-parent='#accordionExample2'
              >
                <div className='accordion-body mt-3'>
                  <div className='vstack gap-3'>
                    <div className='overflow-hidden'>
                      <div className='d-flex justify-content-between'>
                        <p className='mb-1 h6'>1/2 تکمیل</p>
                        <h6 className='mb-1 text-end'>80%</h6>
                      </div>
                      <div className='progress progress-sm bg-primary bg-opacity-10'>
                        <div
                          className='progress-bar bg-primary aos'
                          role='progressbar'
                          data-aos='slide-left'
                          data-aos-delay='200'
                          data-aos-duration='1000'
                          data-aos-easing='ease-in-out'
                          style={{ width: '80%' }}
                          aria-valuenow='80'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div className='position-relative d-flex align-items-center'>
                          <a
                            href='#'
                            className='btn btn-success btn-round btn-sm mb-0 stretched-link position-static'
                          >
                            <i className='fas fa-play me-0'></i>
                          </a>
                          <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-200px'>
                            معرفی دوره
                          </span>
                        </div>
                        <p className='mb-0 text-truncate'>2دقیقه</p>
                      </div>
                      <a
                        className='btn btn-xs btn-warning mb-0'
                        data-bs-toggle='collapse'
                        href='#addnote-1'
                        role='button'
                        aria-expanded='false'
                        aria-controls='addnote-1'
                      >
                        <i className='bi fa-fw bi-pencil-square me-2'></i>نکته
                      </a>
                      <a href='#' className='btn btn-xs btn-dark mb-0'>
                        پخش دوباره
                      </a>
                      <div className='collapse' id='addnote-1'>
                        <div className='card card-body p-0 mt-2'>
                          <div className='d-flex justify-content-between bg-light rounded-2 p-2 mb-2'>
                            <div className='d-flex align-items-center'>
                              <span className='badge bg-dark me-2'>5:20</span>
                              <h6 className='d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light'>
                                سئو چیست؟
                              </h6>
                            </div>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round me-2 mb-0'
                              >
                                <i className='bi fa-fw bi-play-fill'></i>
                              </a>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round mb-0'
                              >
                                <i className='bi fa-fw bi-trash-fill'></i>
                              </a>
                            </div>
                          </div>
                          <div className='d-flex justify-content-between bg-light rounded-2 p-2 mb-2'>
                            <div className='d-flex align-items-center'>
                              <span className='badge bg-dark me-2'>10:20</span>
                              <h6 className='d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light'>
                                بررسی ابزار ها و ایجاد پروژه
                              </h6>
                            </div>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round me-2 mb-0'
                              >
                                <i className='bi fa-fw bi-play-fill'></i>
                              </a>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round mb-0'
                              >
                                <i className='bi fa-fw bi-trash-fill'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className='mb-0' />
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div className='position-relative d-flex align-items-center'>
                          <a
                            href='#'
                            className='btn btn-success btn-round btn-sm mb-0 stretched-link position-static'
                          >
                            <i className='fas fa-play me-0'></i>
                          </a>
                          <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                            دیجیتال مارکتینگ چیست؟
                          </span>
                        </div>
                        <p className='mb-0 text-truncate'>15دقیقه</p>
                      </div>
                      <a
                        className='btn btn-xs btn-warning mb-0'
                        data-bs-toggle='collapse'
                        href='#addnote-2'
                        role='button'
                        aria-expanded='false'
                        aria-controls='addnote-2'
                      >
                        <i className='bi fa-fw bi-pencil-square me-2'></i>نکته
                      </a>
                      <a href='#' className='btn btn-xs btn-dark mb-0'>
                        بخش
                      </a>
                      <div className='collapse' id='addnote-2'>
                        <div className='card card-body p-0 mt-2'>
                          <div className='d-flex justify-content-between bg-light rounded-2 p-2 mb-2'>
                            <div className='d-flex align-items-center'>
                              <span className='badge bg-dark me-2'>5:20</span>
                              <h6 className='d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light'>
                                سئو چیست؟
                              </h6>
                            </div>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round me-2 mb-0'
                              >
                                <i className='bi fa-fw bi-play-fill'></i>
                              </a>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round mb-0'
                              >
                                <i className='bi fa-fw bi-trash-fill'></i>
                              </a>
                            </div>
                          </div>
                          <div className='d-flex justify-content-between bg-light rounded-2 p-2 mb-2'>
                            <div className='d-flex align-items-center'>
                              <span className='badge bg-dark me-2'>10:20</span>
                              <h6 className='d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light'>
                                دیجیتال مارکتینگ چیست؟
                              </h6>
                            </div>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round me-2 mb-0'
                              >
                                <i className='bi fa-fw bi-play-fill'></i>
                              </a>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round mb-0'
                              >
                                <i className='bi fa-fw bi-trash-fill'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className='mb-0' />
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='position-relative d-flex align-items-center'>
                        <a
                          href='#'
                          className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                        >
                          <i className='fas fa-play me-0'></i>
                        </a>
                        <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                          انواع دیجیتال مارکتینگ
                        </span>
                      </div>
                      <p className='mb-0 text-truncate'>18دقیقه</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='accordion-item mb-3'>
              <h6 className='accordion-header font-base' id='heading-2'>
                <a
                  className='accordion-button fw-bold collapsed rounded d-block pe-4'
                  href='#collapse-2'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapse-2'
                  aria-expanded='false'
                  aria-controls='collapse-2'
                >
                  <span className='mb-0'>آموزش کار به صورت متوسطه</span>
                  <span className='small d-block mt-1'>(3 ویدیو)</span>
                </a>
              </h6>
              <div
                id='collapse-2'
                className='accordion-collapse collapse'
                aria-labelledby='heading-2'
                data-bs-parent='#accordionExample2'
              >
                <div className='accordion-body mt-3'>
                  <div className='vstack gap-3'>
                    <div className='overflow-hidden'>
                      <div className='d-flex justify-content-between'>
                        <p className='mb-1 h6'>0/3 تکمیل</p>
                        <h6 className='mb-1 text-end'>0%</h6>
                      </div>
                      <div className='progress progress-sm bg-primary bg-opacity-10'>
                        <div
                          className='progress-bar bg-primary aos'
                          role='progressbar'
                          data-aos='slide-left'
                          data-aos-delay='200'
                          data-aos-duration='1000'
                          data-aos-easing='ease-in-out'
                          style={{ width: '0%' }}
                          aria-valuenow='0'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='position-relative d-flex align-items-center'>
                          <a
                            href='#'
                            className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                          >
                            <i className='fas fa-play me-0'></i>
                          </a>
                          <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-sm-400px'>
                            معرفی دوره
                          </span>
                        </div>
                        <p className='mb-0 text-truncate'>2دقیقه</p>
                      </div>
                      <hr className='mb-0' />
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='position-relative d-flex align-items-center'>
                          <a
                            href='#'
                            className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                          >
                            <i className='fas fa-play me-0'></i>
                          </a>
                          <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                            دیجیتال مارکتینگ چیست؟
                          </span>
                        </div>
                        <p className='mb-0 text-truncate'>15دقیقه</p>
                      </div>
                      <hr className='mb-0' />
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='position-relative d-flex align-items-center'>
                        <a
                          href='#'
                          className='btn btn-light btn-round btn-sm mb-0 stretched-link position-static'
                          data-bs-toggle='modal'
                          data-bs-target='#coursePremium'
                        >
                          <i className='bi bi-lock-fill'></i>
                        </a>
                        <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                          انواع دیجیتال مارکتینگ
                        </span>
                      </div>
                      <p className='mb-0 text-truncate'>18دقیقه</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card border mt-4'>
        <div className='card-header border-bottom'>
          <div className='card'>
            <div className='row g-0'>
              <div className='col-md-3'>
                <Image
                  unoptimized={true}
                  width='500'
                  height='500'
                  src='/images/courses/4by3/08.jpg'
                  className='rounded-2'
                  alt='Card image'
                />
              </div>
              <div className='col-md-9'>
                <div className='card-body'>
                  <h3 className='card-title fs-5'>
                    <a href='#'>دوره جامع آموزش Sketch</a>
                  </h3>
                  <ul className='list-inline mb-2'>
                    <li className='list-inline-item h6 fw-light mb-1 mb-sm-0'>
                      <i className='far fa-clock text-danger me-2'></i>8ساعت
                    </li>
                    <li className='list-inline-item h6 fw-light mb-1 mb-sm-0'>
                      <i className='fas fa-table text-orange me-2'></i>65 دوره
                    </li>
                    <li className='list-inline-item h6 fw-light'>
                      <i className='fas fa-signal text-success me-2'></i>همه سطح
                    </li>
                  </ul>
                  <a href='#' className='btn btn-primary-soft btn-sm mb-0'>
                    توضیحات دوره
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card-body'>
          <h5>جلسات دوره</h5>
          <div
            className='accordion accordion-icon accordion-bg-light'
            id='accordionExample4'
          >
            <div className='accordion-item mb-3'>
              <h6 className='accordion-header font-base' id='heading-1-1'>
                <a
                  className='accordion-button fw-bold rounded collapsed d-block pe-4'
                  href='#collapse-1-1'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapse-1-1'
                  aria-expanded='false'
                  aria-controls='collapse-1-1'
                >
                  <span className='mb-0'>معرفی دوره Sketch</span>
                  <span className='small d-block mt-1'>(3 ویدیو)</span>
                </a>
              </h6>
              <div
                id='collapse-1-1'
                className='accordion-collapse collapse'
                aria-labelledby='heading-1-1'
                data-bs-parent='#accordionExample4'
              >
                <div className='accordion-body mt-3'>
                  <div className='vstack gap-3'>
                    <div className='overflow-hidden'>
                      <div className='d-flex justify-content-between'>
                        <p className='mb-1 h6'>1/3 تکمیل</p>
                        <h6 className='mb-1 text-end'>35%</h6>
                      </div>
                      <div className='progress progress-sm bg-primary bg-opacity-10'>
                        <div
                          className='progress-bar bg-primary aos'
                          role='progressbar'
                          data-aos='slide-left'
                          data-aos-delay='200'
                          data-aos-duration='1000'
                          data-aos-easing='ease-in-out'
                          style={{ width: '35%' }}
                          aria-valuenow='35'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div className='position-relative d-flex align-items-center'>
                          <a
                            href='#'
                            className='btn btn-success btn-round btn-sm mb-0 stretched-link position-static'
                          >
                            <i className='fas fa-play me-0'></i>
                          </a>
                          <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                            معرفی دوره
                          </span>
                        </div>
                        <p className='mb-0 text-truncate'>2دقیقه</p>
                      </div>
                      <a
                        className='btn btn-xs btn-warning mb-0'
                        data-bs-toggle='collapse'
                        href='#addnote-3'
                        role='button'
                        aria-expanded='false'
                        aria-controls='addnote-3'
                      >
                        <i className='bi fa-fw bi-pencil-square me-2'></i>نکته
                      </a>
                      <a href='#' className='btn btn-xs btn-dark mb-0'>
                        بخش
                      </a>
                      <div className='collapse' id='addnote-3'>
                        <div className='card card-body p-0 mt-2'>
                          <div className='d-flex justify-content-between bg-light rounded-2 p-2 mb-2'>
                            <div className='d-flex align-items-center'>
                              <span className='badge bg-dark me-2'>5:20</span>
                              <h6 className='d-inline-block text-truncate w-100px w-sm-400px mb-0 fw-light'>
                                سئو چیست؟
                              </h6>
                            </div>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round me-2 mb-0'
                              >
                                <i className='bi fa-fw bi-play-fill'></i>
                              </a>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round mb-0'
                              >
                                <i className='bi fa-fw bi-trash-fill'></i>
                              </a>
                            </div>
                          </div>
                          <div className='d-flex justify-content-between bg-light rounded-2 p-2 mb-2'>
                            <div className='d-flex align-items-center'>
                              <span className='badge bg-dark me-2'>10:20</span>
                              <h6 className='d-inline-block text-truncate w-100px w-sm-400px mb-0 fw-light'>
                                طراحی رابط کاربری اپلیکیشن
                              </h6>
                            </div>
                            <div className='d-flex'>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round me-2 mb-0'
                              >
                                <i className='bi fa-fw bi-play-fill'></i>
                              </a>
                              <a
                                href='#'
                                className='btn btn-sm btn-light btn-round mb-0'
                              >
                                <i className='bi fa-fw bi-trash-fill'></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className='mb-0' />
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center mb-2'>
                        <div className='position-relative d-flex align-items-center'>
                          <a
                            href='#'
                            className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                          >
                            <i className='fas fa-play me-0'></i>
                          </a>
                          <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                            دیجیتال مارکتینگ چیست؟
                          </span>
                        </div>
                        <p className='mb-0 text-truncate'>15قیقه</p>
                      </div>
                      <hr className='mb-0' />
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='position-relative d-flex align-items-center'>
                        <a
                          href='#'
                          className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                        >
                          <i className='fas fa-play me-0'></i>
                        </a>
                        <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                          انواع دیجیتال مارکتینگ
                        </span>
                      </div>
                      <p className='mb-0 text-truncate'>18دقیقه</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='accordion-item mb-3'>
              <h6 className='accordion-header font-base' id='heading-1-4'>
                <a
                  className='accordion-button fw-bold collapsed rounded d-block pe-4'
                  href='#collapse-1-4'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapse-1-4'
                  aria-expanded='false'
                  aria-controls='collapse-1-4'
                >
                  <span className='mb-0'>بازاریابی YouTube</span>
                  <span className='small d-block mt-1'>(5 ویدیو)</span>
                </a>
              </h6>
              <div
                id='collapse-1-4'
                className='accordion-collapse collapse'
                aria-labelledby='heading-1-4'
                data-bs-parent='#accordionExample4'
              >
                <div className='accordion-body mt-3'>
                  <div className='vstack gap-3'>
                    <div className='overflow-hidden'>
                      <div className='d-flex justify-content-between'>
                        <p className='mb-1 h6'>0/5 تکمیل</p>
                        <h6 className='mb-1 text-end'>0%</h6>
                      </div>
                      <div className='progress progress-sm bg-primary bg-opacity-10'>
                        <div
                          className='progress-bar bg-primary aos'
                          role='progressbar'
                          data-aos='slide-left'
                          data-aos-delay='200'
                          data-aos-duration='1000'
                          data-aos-easing='ease-in-out'
                          style={{ width: '0%' }}
                          aria-valuenow='0'
                          aria-valuemin='0'
                          aria-valuemax='100'
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='position-relative d-flex align-items-center'>
                          <a
                            href='#'
                            className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                          >
                            <i className='fas fa-play me-0'></i>
                          </a>
                          <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                            Paint Eyedropper
                          </span>
                        </div>
                        <p className='mb-0 text-truncate'>25دقیقه</p>
                      </div>
                      <hr className='mb-0' />
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='position-relative d-flex align-items-center'>
                          <a
                            href='#'
                            className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                          >
                            <i className='fas fa-play me-0'></i>
                          </a>
                          <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                            ابزار Webmaster
                          </span>
                        </div>
                        <p className='mb-0 text-truncate'>15دقیقه</p>
                      </div>
                      <hr className='mb-0' />
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='position-relative d-flex align-items-center'>
                          <a
                            href='#'
                            className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                          >
                            <i className='fas fa-play me-0'></i>
                          </a>
                          <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                            انتشار مطالب ویژه در YouTube
                          </span>
                        </div>
                        <p className='mb-0 text-truncate'>32دقیقه</p>
                      </div>
                      <hr className='mb-0' />
                    </div>
                    <div>
                      <div className='d-flex justify-content-between align-items-center'>
                        <div className='position-relative d-flex align-items-center'>
                          <a
                            href='#'
                            className='btn btn-light btn-round btn-sm mb-0 stretched-link position-static'
                            data-bs-toggle='modal'
                            data-bs-target='#coursePremium'
                          >
                            <i className='bi bi-lock-fill'></i>
                          </a>
                          <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                            توضیح تخصصی ابزار ها(قسمت اول)
                          </span>
                        </div>
                        <p className='mb-0 text-truncate'>20دقیقه</p>
                      </div>
                      <hr className='mb-0' />
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='position-relative d-flex align-items-center'>
                        <a
                          href='#'
                          className='btn btn-light btn-round btn-sm mb-0 stretched-link position-static'
                          data-bs-toggle='modal'
                          data-bs-target='#coursePremium'
                        >
                          <i className='bi bi-lock-fill'></i>
                        </a>
                        <span className='d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px'>
                          توضیح تخصصی ابزار ها(قسمت دوم)
                        </span>
                      </div>
                      <p className='mb-0 text-truncate'>18دقیقه</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileStudentCourseResume;

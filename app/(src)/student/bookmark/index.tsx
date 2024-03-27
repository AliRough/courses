'use client';

import Image from 'next/image';

const ProfileStudentBookmark = () => {
  console.log('Not completed');

  return (
    <div className='card bg-transparent border rounded-3'>
      <div className='card-header bg-transparent border-bottom'>
        <h3 className='mb-0 fs-5 ff-vb'>موردعلاقه ها</h3>
      </div>
      <div className='card-body p-3 p-md-4'>
        <div className='row g-4'>
          <div className='col-sm-6 col-lg-4'>
            <div className='card shadow h-100'>
              <Image
                unoptimized={true}
                width='500'
                height='500'
                src='/images/courses/4by3/02.jpg'
                className='card-img-top'
                alt='course image'
              />
              <div className='card-body pb-0'>
                <div className='d-flex justify-content-between mb-2'>
                  <a
                    href='#'
                    className='badge bg-success bg-opacity-10 text-success'
                  >
                    مقدماتی
                  </a>
                  <a href='#' className='text-danger'>
                    <i className='fas fa-heart'></i>
                  </a>
                </div>
                <h5 className='card-title fw-normal'>
                  <a href='#'>دوره جامع آموزش Photoshop</a>
                </h5>
                <p className='mb-2 text-truncate-2'>
                  با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                  گرافیک
                </p>
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
                    <i className='fas fa-star-half-alt text-warning'></i>
                  </li>
                  <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                    4.5/5.0
                  </li>
                </ul>
              </div>
              <div className='card-footer pt-0 pb-3'>
                <hr />
                <div className='d-flex justify-content-between'>
                  <span className='h6 fw-light mb-0'>
                    <i className='far fa-clock text-danger me-2'></i>9ساعت
                  </span>
                  <span className='h6 fw-light mb-0'>
                    <i className='fas fa-table text-orange me-2'></i>65 ویدیو
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='card shadow h-100'>
              <Image
                unoptimized={true}
                width='500'
                height='500'
                src='/images/courses/4by3/07.jpg'
                className='card-img-top'
                alt='course image'
              />
              <div className='card-body pb-0'>
                <div className='d-flex justify-content-between mb-2'>
                  <a
                    href='#'
                    className='badge bg-success bg-opacity-10 text-success'
                  >
                    مقدماتی
                  </a>
                  <a href='#' className='text-danger'>
                    <i className='fas fa-heart'></i>
                  </a>
                </div>
                <h5 className='card-title fw-normal'>
                  <a href='#'>دوره جامع آموزش React-Native</a>
                </h5>
                <p className='mb-2 text-truncate-2'>
                  با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                  گرافیک
                </p>
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
                  <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                    4.0/5.0
                  </li>
                </ul>
              </div>
              <div className='card-footer pt-0 pb-3'>
                <hr />
                <div className='d-flex justify-content-between'>
                  <span className='h6 fw-light mb-0'>
                    <i className='far fa-clock text-danger me-2'></i>18ساعت
                  </span>
                  <span className='h6 fw-light mb-0'>
                    <i className='fas fa-table text-orange me-2'></i>99 ویدیو
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='card shadow h-100'>
              <Image
                unoptimized={true}
                width='500'
                height='500'
                src='/images/courses/4by3/11.jpg'
                className='card-img-top'
                alt='course image'
              />
              <div className='card-body pb-0'>
                <div className='d-flex justify-content-between mb-2'>
                  <a
                    href='#'
                    className='badge bg-purple bg-opacity-10 text-purple'
                  >
                    همه سطح
                  </a>
                  <a href='#' className='text-danger'>
                    <i className='fas fa-heart'></i>
                  </a>
                </div>
                <h5 className='card-title fw-normal'>
                  <a href='#'>دوره جامع آموزش HTML</a>
                </h5>
                <p className='mb-2 text-truncate-2'>
                  با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                  گرافیک
                </p>
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
                  <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                    4.0/5.0
                  </li>
                </ul>
              </div>
              <div className='card-footer pt-0 pb-3'>
                <hr />
                <div className='d-flex justify-content-between'>
                  <span className='h6 fw-light mb-0'>
                    <i className='far fa-clock text-danger me-2'></i>15ساعت
                  </span>
                  <span className='h6 fw-light mb-0'>
                    <i className='fas fa-table text-orange me-2'></i>68 ویدیو
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='card shadow h-100'>
              <Image
                unoptimized={true}
                width='500'
                height='500'
                src='/images/courses/4by3/10.jpg'
                className='card-img-top'
                alt='course image'
              />
              <div className='card-body pb-0'>
                <div className='d-flex justify-content-between mb-2'>
                  <a href='#' className='badge bg-info bg-opacity-10 text-info'>
                    متوسطه
                  </a>
                  <a href='#' className='text-danger'>
                    <i className='fas fa-heart'></i>
                  </a>
                </div>
                <h5 className='card-title fw-normal'>
                  <a href='#'>دوره جامع آموزش Bootstrap</a>
                </h5>
                <p className='text-truncate-2 mb-2'>
                  با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                  گرافیک
                </p>
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
                    <i className='fas fa-star-half-alt text-warning'></i>
                  </li>
                  <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                    4.5/5.0
                  </li>
                </ul>
              </div>
              <div className='card-footer pt-0 pb-3'>
                <hr />
                <div className='d-flex justify-content-between'>
                  <span className='h6 fw-light mb-0'>
                    <i className='far fa-clock text-danger me-2'></i>25ساعت
                  </span>
                  <span className='h6 fw-light mb-0'>
                    <i className='fas fa-table text-orange me-2'></i>38 ویدیو
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='card shadow h-100'>
              <Image
                unoptimized={true}
                width='500'
                height='500'
                src='/images/courses/4by3/04.jpg'
                className='card-img-top'
                alt='course image'
              />
              <div className='card-body pb-0'>
                <div className='d-flex justify-content-between mb-2'>
                  <a
                    href='#'
                    className='badge bg-purple bg-opacity-10 text-purple'
                  >
                    همه سطح
                  </a>
                  <a href='#' className='text-danger'>
                    <i className='fas fa-heart'></i>
                  </a>
                </div>
                <h5 className='card-title fw-normal'>
                  <a href='#'>دوره جامع آموزش Invision</a>
                </h5>
                <p className='mb-2'>
                  با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                  گرافیک
                </p>
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
                    <i className='fas fa-star-half-alt text-warning'></i>
                  </li>
                  <li className='list-inline-item me-0 small'>
                    <i className='far fa-star text-warning'></i>
                  </li>
                  <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                    3.5/5.0
                  </li>
                </ul>
              </div>
              <div className='card-footer pt-0 pb-3'>
                <hr />
                <div className='d-flex justify-content-between mt-2'>
                  <span className='h6 fw-light mb-0'>
                    <i className='far fa-clock text-danger me-2'></i>6ساعت
                  </span>
                  <span className='h6 fw-light mb-0'>
                    <i className='fas fa-table text-orange me-2'></i>82 ویدیو
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-lg-4'>
            <div className='card shadow h-100'>
              <Image
                unoptimized={true}
                width='500'
                height='500'
                src='/images/courses/4by3/01.jpg'
                className='card-img-top'
                alt='course image'
              />
              <div className='card-body pb-0'>
                <div className='d-flex justify-content-between mb-2'>
                  <a
                    href='#'
                    className='badge bg-success bg-opacity-10 text-success'
                  >
                    مقدماتی
                  </a>
                  <a href='#' className='text-danger'>
                    <i className='fas fa-heart'></i>
                  </a>
                </div>
                <h5 className='card-title fw-normal'>
                  <a href='#'>دوره جامع آموزش Laravel</a>
                </h5>
                <p className='text-truncate-2 mb-2'>
                  با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                  گرافیک
                </p>
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
                    <i className='fas fa-star-half-alt text-warning'></i>
                  </li>
                  <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                    4.5/5.0
                  </li>
                </ul>
              </div>
              <div className='card-footer pt-0 pb-3'>
                <hr />
                <div className='d-flex justify-content-between'>
                  <span className='h6 fw-light mb-0'>
                    <i className='far fa-clock text-danger me-2'></i>6ساعت
                  </span>
                  <span className='h6 fw-light mb-0'>
                    <i className='fas fa-table text-orange me-2'></i>82 ویدیو
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStudentBookmark;

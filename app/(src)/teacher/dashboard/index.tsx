'use client';

import Image from 'next/image';

const ProfileTeacherDashboardT = () => {
  console.log('Not completed');

  return (
    <>
      <div className='row g-4'>
        <div className='col-sm-6 col-lg-4'>
          <div className='d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3'>
            <span className='display-6 text-warning mb-0'>
              <i className='fas fa-tv fa-fw'></i>
            </span>
            <div className='ms-4'>
              <div className='d-flex'>
                <h5
                  className='purecounter mb-0 fw-bold'
                  data-purecounter-start='0'
                  data-purecounter-end='25'
                  data-purecounter-delay='200'
                >
                  0
                </h5>
              </div>
              <span className='mb-0 h6 fw-light'>دوره ها</span>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-lg-4'>
          <div className='d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3'>
            <span className='display-6 text-purple mb-0'>
              <i className='fas fa-user-graduate fa-fw'></i>
            </span>
            <div className='ms-4'>
              <div className='d-flex'>
                <span className='mb-0 h5'>K</span>
                <h5
                  className='purecounter mb-0 fw-bold'
                  data-purecounter-start='0'
                  data-purecounter-end='25'
                  data-purecounter-delay='200'
                >
                  0
                </h5>
              </div>
              <span className='mb-0 h6 fw-light'>دانشجویان</span>
            </div>
          </div>
        </div>
        <div className='col-sm-6 col-lg-4'>
          <div className='d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3'>
            <span className='display-6 text-info mb-0'>
              <i className='fas fa-gem fa-fw'></i>
            </span>
            <div className='ms-4'>
              <div className='d-flex'>
                <span className='mb-0 h5'>K</span>
                <h5
                  className='purecounter mb-0 fw-bold'
                  data-purecounter-start='0'
                  data-purecounter-end='12'
                  data-purecounter-delay='300'
                >
                  0
                </h5>
              </div>
              <span className='mb-0 h6 fw-light'>شرکت کننده ها</span>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-12'>
          <div className='card card-body bg-transparent border p-4 h-100'>
            <div className='row g-4'>
              <div className='col-sm-6 col-md-4'>
                <span className='badge text-bg-dark'>ماه جاری</span>
                <h4 className='text-primary my-2 fs-5'>270,000 تومان</h4>
                <p className='mb-0'>
                  <span className='text-success me-1'>
                    0.20%<i className='bi bi-arrow-up'></i>
                  </span>
                  نسبت به ماه قبل
                </p>
              </div>
              <div className='col-sm-6 col-md-4'>
                <span className='badge text-bg-dark'>ماه گذشته</span>
                <h4 className='my-2 fs-5'>75,000 تومان</h4>
                <p className='mb-0'>
                  <span className='text-danger me-1'>
                    0.10%<i className='bi bi-arrow-down'></i>
                  </span>
                  نسبت به ماه قبل
                </p>
              </div>
            </div>
            <div id='ChartPayout'></div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <div className='card border bg-transparent rounded-3 mt-5'>
            <div className='card-header bg-transparent border-bottom'>
              <div className='d-sm-flex justify-content-sm-between align-items-center'>
                <h3 className='mb-2 mb-sm-0 fs-5 ff-vb'>پرفروش ترین دوره ها</h3>
                <a href='#' className='btn btn-sm btn-primary-soft mb-0'>
                  مشاهده
                </a>
              </div>
            </div>
            <div className='card-body'>
              <div className='table-responsive border-0 rounded-3'>
                <table className='table table-dark-gray align-middle p-4 mb-0'>
                  <thead>
                    <tr>
                      <th scope='col' className='border-0 rounded-start'>
                        دوره
                      </th>
                      <th scope='col' className='border-0'>
                        فروش
                      </th>
                      <th scope='col' className='border-0'>
                        قیمت
                      </th>
                      <th scope='col' className='border-0'>
                        تاریخ
                      </th>
                      <th scope='col' className='border-0 rounded-end'>
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='w-60px'>
                            <Image
                              unoptimized={true}
                              width='500'
                              height='500'
                              src='/images/courses/4by3/08.jpg'
                              className='rounded'
                              alt=''
                            />
                          </div>
                          <h6 className='mb-0 ms-2 table-responsive-title fw-normal'>
                            <a href='#'>دوره جامع آموزش Sketch</a>
                          </h6>
                        </div>
                      </td>
                      <td>34</td> <td>180,000 تومان</td>
                      <td>
                        <span className='badge bg-primary bg-opacity-10 text-primary'>
                          9 ماه
                        </span>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='btn btn-sm btn-success-soft btn-round me-1 mb-0'
                        >
                          <i className='far fa-fw fa-edit'></i>
                        </a>
                        <button className='btn btn-sm btn-danger-soft btn-round mb-0'>
                          <i className='fas fa-fw fa-times'></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='w-60px'>
                            <Image
                              unoptimized={true}
                              width='500'
                              height='500'
                              src='/images/courses/4by3/10.jpg'
                              className='rounded'
                              alt=''
                            />
                          </div>
                          <h6 className='mb-0 ms-2 table-responsive-title fw-normal'>
                            <a href='#'>دوره جامع آموزش Bootstrap</a>
                          </h6>
                        </div>
                      </td>
                      <td>45</td> <td>490,000 تومان</td>
                      <td>
                        <span className='badge bg-primary bg-opacity-10 text-primary'>
                          6 ماه
                        </span>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='btn btn-sm btn-success-soft btn-round me-1 mb-0'
                        >
                          <i className='far fa-fw fa-edit'></i>
                        </a>
                        <button className='btn btn-sm btn-danger-soft btn-round mb-0'>
                          <i className='fas fa-fw fa-times'></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='w-60px'>
                            <Image
                              unoptimized={true}
                              width='500'
                              height='500'
                              src='/images/courses/4by3/02.jpg'
                              className='rounded'
                              alt=''
                            />
                          </div>
                          <h6 className='mb-0 ms-2 table-responsive-title fw-normal'>
                            <a href='#'>دوره جامع آموزش Photoshop</a>
                          </h6>
                        </div>
                      </td>
                      <td>21</td> <td>350,000 تومان</td>
                      <td>
                        <span className='badge bg-primary bg-opacity-10 text-primary'>
                          4 ماه
                        </span>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='btn btn-sm btn-success-soft btn-round me-1 mb-0'
                        >
                          <i className='far fa-fw fa-edit'></i>
                        </a>
                        <button className='btn btn-sm btn-danger-soft btn-round mb-0'>
                          <i className='fas fa-fw fa-times'></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='w-60px'>
                            <Image
                              unoptimized={true}
                              width='500'
                              height='500'
                              src='/images/courses/4by3/04.jpg'
                              className='rounded'
                              alt=''
                            />
                          </div>
                          <h6 className='mb-0 ms-2 table-responsive-title fw-normal'>
                            <a href='#'>دوره جامع آموزش Invision</a>
                          </h6>
                        </div>
                      </td>
                      <td>28</td> <td>120,000 تومان</td>
                      <td>
                        <span className='badge bg-primary bg-opacity-10 text-primary'>
                          8 ماه
                        </span>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='btn btn-sm btn-success-soft btn-round me-1 mb-0'
                        >
                          <i className='far fa-fw fa-edit'></i>
                        </a>
                        <button className='btn btn-sm btn-danger-soft btn-round mb-0'>
                          <i className='fas fa-fw fa-times'></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='w-60px'>
                            <Image
                              unoptimized={true}
                              width='500'
                              height='500'
                              src='/images/courses/4by3/06.jpg'
                              className='rounded'
                              alt=''
                            />
                          </div>
                          <h6 className='mb-0 ms-2 table-responsive-title fw-normal'>
                            <a href='#'>دوره جامع آموزش Angular</a>
                          </h6>
                        </div>
                      </td>
                      <td>38</td> <td>270,000 تومان</td>
                      <td>
                        <span className='badge bg-primary bg-opacity-10 text-primary'>
                          1 سال
                        </span>
                      </td>
                      <td>
                        <a
                          href='#'
                          className='btn btn-sm btn-success-soft btn-round me-1 mb-0'
                        >
                          <i className='far fa-fw fa-edit'></i>
                        </a>
                        <button className='btn btn-sm btn-danger-soft btn-round mb-0'>
                          <i className='fas fa-fw fa-times'></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='d-sm-flex justify-content-sm-between align-items-sm-center mt-3'>
                <p className='mb-0 text-center text-sm-start'>
                  نمایش 1 تا 8 از 20
                </p>
                <nav
                  className='d-flex justify-content-center mb-0'
                  aria-label='navigation'
                >
                  <ul className='pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0'>
                    <li className='page-item mb-0'>
                      <a className='page-link' href='#' tabIndex={-1}>
                        <i className='fas fa-angle-right'></i>
                      </a>
                    </li>
                    <li className='page-item mb-0'>
                      <a className='page-link' href='#'>
                        1
                      </a>
                    </li>
                    <li className='page-item mb-0 active'>
                      <a className='page-link' href='#'>
                        2
                      </a>
                    </li>
                    <li className='page-item mb-0'>
                      <a className='page-link' href='#'>
                        3
                      </a>
                    </li>
                    <li className='page-item mb-0'>
                      <a className='page-link' href='#'>
                        <i className='fas fa-angle-left'></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTeacherDashboardT;

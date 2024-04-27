'use client';

import Image from 'next/image';

const ProfileTeacherStudentList = () => {
  console.log('Not completed');

  return (
    <div className='card border bg-transparent rounded-3'>
      <div className='card-header bg-transparent border-bottom'>
        <h3 className='mb-0 fs-5 ff-vb'>لیست دانشجویان</h3>
      </div>

      <div className='card-body'>
        <div className='row g-3 align-items-center justify-content-between mb-4'>
          <div className='col-md-8'>
            <form className='rounded position-relative'>
              <input
                className='form-control pe-5 bg-transparent'
                type='search'
                placeholder='جستجوی دانشجو'
                aria-label='Search'
              />
              <button
                className='bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset'
                type='submit'
              >
                <i className='fas fa-search fs-6 '></i>
              </button>
            </form>
          </div>

          <div className='col-md-3'>
            <form>
              <select
                className='form-select js-choice border-0 z-index-9 bg-transparent'
                aria-label='.form-select-sm'
              >
                <option value=''>مرتب سازی</option>
                <option>رایگان</option>
                <option>جدیدترین</option>
                <option>قدیمی ترین</option>
              </select>
            </form>
          </div>
        </div>

        <div className='table-responsive border-0'>
          <table className='table table-dark-gray align-middle p-4 mb-0 table-hover'>
            <thead>
              <tr>
                <th scope='col' className='border-0 rounded-start'>
                  نام
                </th>
                <th scope='col' className='border-0'>
                  پیشرفت
                </th>
                <th scope='col' className='border-0'>
                  دوره
                </th>
                <th scope='col' className='border-0'>
                  تاریخ ثبت نام
                </th>
                <th scope='col' className='border-0 rounded-end'>
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='d-flex align-items-center position-relative'>
                    <div className='avatar avatar-md mb-2 mb-md-0'>
                      <Image
                        unoptimized={true}
                        width='500'
                        height='500'
                        src='/images/avatar/01.jpg'
                        className='rounded'
                        alt=''
                      />
                    </div>
                    <div className='mb-0 ms-2'>
                      <h6 className='mb-0 fw-normal'>
                        <a href='#' className='stretched-link'>
                          الهام حسینی
                        </a>
                      </h6>

                      <span className='text-body small'>
                        <i className='fas fa-fw fa-map-marker-alt me-1 mt-1'></i>
                        تهران
                      </span>
                    </div>
                  </div>
                </td>

                <td className='text-center text-sm-start'>
                  <div className=' overflow-hidden'>
                    <h6 className='mb-0'>85%</h6>
                    <div className='progress progress-sm bg-primary bg-opacity-10'>
                      <div
                        className='progress-bar bg-primary aos'
                        role='progressbar'
                        data-aos='slide-left'
                        data-aos-delay='200'
                        data-aos-duration='1000'
                        data-aos-easing='ease-in-out'
                        style={{ width: '85%' }}
                        aria-valuenow={85}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </td>

                <td>10</td>

                <td>1400/6/14</td>

                <td>
                  <a
                    href='#'
                    className='btn btn-success-soft btn-round me-1 mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Message'
                  >
                    <i className='far fa-envelope'></i>
                  </a>
                  <button
                    className='btn btn-danger-soft btn-round mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Block'
                  >
                    <i className='fas fa-ban'></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='d-flex align-items-center position-relative'>
                    <div className='avatar avatar-md mb-2 mb-md-0'>
                      <Image
                        unoptimized={true}
                        width='500'
                        height='500'
                        src='/images/avatar/03.jpg'
                        className='rounded'
                        alt=''
                      />
                    </div>
                    <div className='mb-0 ms-2'>
                      <h6 className='mb-0 fw-normal'>
                        <a href='#' className='stretched-link'>
                          پوریا احمدی
                        </a>
                      </h6>

                      <span className='text-body small'>
                        <i className='fas fa-fw fa-map-marker-alt me-1 mt-1'></i>
                        کرج
                      </span>
                    </div>
                  </div>
                </td>

                <td className='text-center text-sm-start'>
                  <div className=' overflow-hidden'>
                    <h6 className='mb-0'>40%</h6>
                    <div className='progress progress-sm bg-primary bg-opacity-10'>
                      <div
                        className='progress-bar bg-primary aos'
                        role='progressbar'
                        data-aos='slide-left'
                        data-aos-delay='200'
                        data-aos-duration='1000'
                        data-aos-easing='ease-in-out'
                        style={{ width: '40%' }}
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                </td>

                <td>12</td>

                <td>1400/7/20</td>

                <td>
                  <a
                    href='#'
                    className='btn btn-success-soft btn-round me-1 mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Message'
                  >
                    <i className='far fa-envelope'></i>
                  </a>
                  <button
                    className='btn btn-danger btn-round mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Unblock'
                  >
                    <i className='fas fa-ban'></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='d-flex align-items-center position-relative'>
                    <div className='avatar avatar-md mb-2 mb-md-0'>
                      <Image
                        unoptimized={true}
                        width='500'
                        height='500'
                        src='/images/avatar/04.jpg'
                        className='rounded'
                        alt=''
                      />
                    </div>
                    <div className='mb-0 ms-2'>
                      <h6 className='mb-0 fw-normal'>
                        <a href='#' className='stretched-link'>
                          مهدی علیزاده
                        </a>
                      </h6>

                      <span className='text-body small'>
                        <i className='fas fa-fw fa-map-marker-alt me-1 mt-1'></i>
                        تهران
                      </span>
                    </div>
                  </div>
                </td>

                <td className='text-center text-sm-start'>
                  <div className=' overflow-hidden'>
                    <h6 className='mb-0'>62%</h6>
                    <div className='progress progress-sm bg-primary bg-opacity-10'>
                      <div
                        className='progress-bar bg-primary aos'
                        role='progressbar'
                        data-aos='slide-left'
                        data-aos-delay='200'
                        data-aos-duration='1000'
                        data-aos-easing='ease-in-out'
                        style={{ width: '62%' }}
                        aria-valuenow={62}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </td>

                <td>08</td>

                <td>1400/3/21</td>

                <td>
                  <a
                    href='#'
                    className='btn btn-success-soft btn-round me-1 mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Message'
                  >
                    <i className='far fa-envelope'></i>
                  </a>
                  <button
                    className='btn btn-danger-soft btn-round mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Block'
                  >
                    <i className='fas fa-ban'></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='d-flex align-items-center position-relative'>
                    <div className='avatar avatar-md mb-2 mb-md-0'>
                      <Image
                        unoptimized={true}
                        width='500'
                        height='500'
                        src='/images/avatar/09.jpg'
                        className='rounded'
                        alt=''
                      />
                    </div>
                    <div className='mb-0 ms-2'>
                      <h6 className='mb-0 fw-normal'>
                        <a href='#' className='stretched-link'>
                          نیلوفر جلیلی
                        </a>
                      </h6>

                      <span className='text-body small'>
                        <i className='fas fa-fw fa-map-marker-alt me-1 mt-1'></i>
                        دماوند
                      </span>
                    </div>
                  </div>
                </td>

                <td className='text-center text-sm-start'>
                  <div className=' overflow-hidden'>
                    <h6 className='mb-0'>60%</h6>
                    <div className='progress progress-sm bg-primary bg-opacity-10'>
                      <div
                        className='progress-bar bg-primary aos'
                        role='progressbar'
                        data-aos='slide-left'
                        data-aos-delay='200'
                        data-aos-duration='1000'
                        data-aos-easing='ease-in-out'
                        style={{ width: '60%' }}
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </td>

                <td>06</td>

                <td>1400/2/18</td>

                <td>
                  <a
                    href='#'
                    className='btn btn-success-soft btn-round me-1 mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Message'
                  >
                    <i className='far fa-envelope'></i>
                  </a>
                  <button
                    className='btn btn-danger-soft btn-round mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Block'
                  >
                    <i className='fas fa-ban'></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='d-flex align-items-center position-relative'>
                    <div className='avatar avatar-md mb-2 mb-md-0'>
                      <Image
                        unoptimized={true}
                        width='500'
                        height='500'
                        src='/images/avatar/07.jpg'
                        className='rounded'
                        alt=''
                      />
                    </div>
                    <div className='mb-0 ms-2'>
                      <h6 className='mb-0 fw-normal'>
                        <a href='#' className='stretched-link'>
                          علی محمدی
                        </a>
                      </h6>

                      <span className='text-body small'>
                        <i className='fas fa-fw fa-map-marker-alt me-1 mt-1'></i>
                        پردیس
                      </span>
                    </div>
                  </div>
                </td>

                <td className='text-center text-sm-start'>
                  <div className=' overflow-hidden'>
                    <h6 className='mb-0'>35%</h6>
                    <div className='progress progress-sm bg-primary bg-opacity-10'>
                      <div
                        className='progress-bar bg-primary aos'
                        role='progressbar'
                        data-aos='slide-left'
                        data-aos-delay='200'
                        data-aos-duration='1000'
                        data-aos-easing='ease-in-out'
                        style={{ width: '35%' }}
                        aria-valuenow={35}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </td>

                <td>04</td>

                <td>1399/12/20</td>

                <td>
                  <a
                    href='#'
                    className='btn btn-success-soft btn-round me-1 mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Message'
                  >
                    <i className='far fa-envelope'></i>
                  </a>
                  <button
                    className='btn btn-danger-soft btn-round mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Block'
                  >
                    <i className='fas fa-ban'></i>
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className='d-flex align-items-center position-relative'>
                    <div className='avatar avatar-md mb-2 mb-md-0'>
                      <Image
                        unoptimized={true}
                        width='500'
                        height='500'
                        src='/images/avatar/06.jpg'
                        className='rounded'
                        alt=''
                      />
                    </div>
                    <div className='mb-0 ms-2'>
                      <h6 className='mb-0 fw-normal'>
                        <a href='#' className='stretched-link'>
                          لیلا حاتمی
                        </a>
                      </h6>

                      <span className='text-body small'>
                        <i className='fas fa-fw fa-map-marker-alt me-1 mt-1'></i>
                        شیراز
                      </span>
                    </div>
                  </div>
                </td>

                <td className='text-center text-sm-start'>
                  <div className=' overflow-hidden'>
                    <h6 className='mb-0'>42%</h6>
                    <div className='progress progress-sm bg-primary bg-opacity-10'>
                      <div
                        className='progress-bar bg-primary aos'
                        role='progressbar'
                        data-aos='slide-left'
                        data-aos-delay='200'
                        data-aos-duration='1000'
                        data-aos-easing='ease-in-out'
                        style={{ width: '42%' }}
                        aria-valuenow={42}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </td>

                <td>14</td>

                <td>1399/11/12</td>

                <td>
                  <a
                    href='#'
                    className='btn btn-success-soft btn-round me-1 mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Message'
                  >
                    <i className='far fa-envelope'></i>
                  </a>
                  <button
                    className='btn btn-danger-soft btn-round mb-0'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    title='Block'
                  >
                    <i className='fas fa-ban'></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3'>
          <p className='mb-0 text-center text-sm-start'>نمایش 1 تا 8 از 20</p>

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
  );
};

export default ProfileTeacherStudentList;

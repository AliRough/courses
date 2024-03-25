'use client';

const ProfileTeacherPayout = () => {
  console.log('Not completed');

  return (
    <>
      <div className='row g-4 mb-4'>
        <div className='col-sm-6 col-md-4'>
          <div className='border p-3 rounded-3 h-100'>
            <div className='d-flex mb-1 justify-content-between align-items-center'>
              <h6 className='mb-0'>پرداخت ماه گذشته</h6>
              <span className='badge bg-success bg-opacity-10 text-success ms-2 mb-0'>
                پرداخت شده
              </span>
            </div>
            <h2 className='mb-2 mt-2'>250,000</h2>
            <a href='#'>مشاهده تراکنش ها</a>
          </div>
        </div>
        <div className='col-sm-6 col-md-4'>
          <div className='border p-3 rounded-3 h-100'>
            <h6 className='mb-0'>درآمد این ماه</h6>
            <h2 className='mb-2 mt-2'>120,000 تومان</h2>
            <p className='mb-0'>پرداخت موردانتظار در 1400/11/4</p>
          </div>
        </div>
        <div className='col-sm-6 col-md-4'>
          <div className='bg-primary bg-opacity-10 h-100 p-3 rounded-3'>
            <h6 className='mb-0'>میانگین</h6>
            <h2 className='mb-2 mt-2'>90,000 تومان</h2>
            <a href='#' className='btn btn-sm btn-primary mb-0'>
              برداشت سود
            </a>
          </div>
        </div>
      </div>
      <div className='card bg-transparent border rounded-3'>
        <div className='card-header bg-transparent border-bottom'>
          <h3 className='mb-0 fs-5 ff-vb'>پرداخت ها</h3>
        </div>
        <div className='card-body'>
          <div className='row g-3 align-items-center justify-content-between mb-4'>
            <div className='col-md-8'>
              <form className='rounded position-relative'>
                <input
                  className='form-control pe-5 bg-transparent'
                  type='search'
                  placeholder='جستجو...'
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
                    پرداختی
                  </th>
                  <th scope='col' className='border-0'>
                    مبلغ
                  </th>
                  <th scope='col' className='border-0'>
                    وضعیت
                  </th>
                  <th scope='col' className='border-0 rounded-end'>
                    تاریخ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6 className='mt-2 mt-lg-0 mb-0 fw-normal'>
                      <a href='#'>پرداخت موفق #102356</a>
                    </h6>
                  </td>
                  <td>
                    148,000 تومان
                    <a
                      href='#'
                      className='h6 mb-0'
                      role='button'
                      id='dropdownShare'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <i className='bi bi-info-circle-fill'></i>
                    </a>
                    <ul
                      className='dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded'
                      aria-labelledby='dropdownShare'
                    >
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='small'>سود</span>
                          <span className='h6 mb-0 small'>8%</span>
                        </div>
                        <hr className='my-1' />
                      </li>
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='me-4 small'>مالیات</span>
                          <span className='text-danger small'>-0.00</span>
                        </div>
                        <hr className='my-1' />
                      </li>
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='small'>درآمد</span>
                          <span className='h6 mb-0 small'>250,000</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td className='text-center text-sm-start'>
                    <span className='badge bg-success bg-opacity-10 text-success'>
                      پرداخت شده
                    </span>
                  </td>
                  <td>1400/11/4</td>
                </tr>
                <tr>
                  <td>
                    <h6 className='mt-2 mt-lg-0 mb-0 fw-normal'>
                      <a href='#'>پرداخت موفق #102589</a>
                    </h6>
                  </td>
                  <td>
                    425,000 تومان
                    <a
                      href='#'
                      className='h6 mb-0'
                      role='button'
                      id='dropdownShare1'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <i className='bi bi-info-circle-fill'></i>
                    </a>
                    <ul
                      className='dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded'
                      aria-labelledby='dropdownShare1'
                    >
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='small'>سود</span>
                          <span className='h6 mb-0 small'>250,000</span>
                        </div>
                        <hr className='my-1' />
                      </li>
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='me-4 small'>مالیات</span>
                          <span className='text-danger small'>-0.00</span>
                        </div>
                        <hr className='my-1' />
                      </li>
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='small'>درآمد</span>
                          <span className='h6 mb-0 small'>250,000</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td className='text-center text-sm-start'>
                    <span className='badge bg-success bg-opacity-10 text-success'>
                      پرداخت شده
                    </span>
                  </td>
                  <td>1400/6/12</td>
                </tr>
                <tr>
                  <td>
                    <h6 className='mt-2 mt-lg-0 mb-0 fw-normal'>
                      <a href='#'>پرداخت موفق #108645</a>
                    </h6>
                  </td>
                  <td>
                    148,000 تومان
                    <a
                      href='#'
                      className='h6 mb-0'
                      role='button'
                      id='dropdownShare2'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <i className='bi bi-info-circle-fill'></i>
                    </a>
                    <ul
                      className='dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded'
                      aria-labelledby='dropdownShare2'
                    >
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='small'>سود</span>
                          <span className='h6 mb-0 small'>250,000</span>
                        </div>
                        <hr className='my-1' />
                      </li>
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='me-4 small'>مالیات</span>
                          <span className='text-danger small'>-0.00</span>
                        </div>
                        <hr className='my-1' />
                      </li>
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='small'>درآمد</span>
                          <span className='h6 mb-0 small'>250,000</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td className='text-center text-sm-start'>
                    <span className='badge bg-danger bg-opacity-10 text-danger'>
                      کنسل شده
                    </span>
                  </td>
                  <td>1400/3/25</td>
                </tr>
                <tr>
                  <td>
                    <h6 className='mt-2 mt-lg-0 mb-0 fw-normal'>
                      <a href='#'>پرداخت موفق #108645</a>
                    </h6>
                  </td>
                  <td>
                    425,000 تومان
                    <a
                      href='#'
                      className='h6 mb-0'
                      role='button'
                      id='dropdownShare3'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <i className='bi bi-info-circle-fill'></i>
                    </a>
                    <ul
                      className='dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded'
                      aria-labelledby='dropdownShare3'
                    >
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='small'>سود</span>
                          <span className='h6 mb-0 small'>250,000</span>
                        </div>
                        <hr className='my-1' />
                      </li>
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='me-4 small'>مالیات</span>
                          <span className='text-danger small'>-0.00</span>
                        </div>
                        <hr className='my-1' />
                      </li>
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='small'>درآمد</span>
                          <span className='h6 mb-0 small'>250,000</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td className='text-center text-sm-start'>
                    <span className='badge bg-success bg-opacity-10 text-success'>
                      پرداخت شده
                    </span>
                  </td>
                  <td>1400/2/28</td>
                </tr>
                <tr>
                  <td>
                    <h6 className='mt-2 mt-lg-0 mb-0 fw-normal'>
                      <a href='#'>پرداخت موفق #108645</a>
                    </h6>
                  </td>
                  <td>
                    148,000 تومان
                    <a
                      href='#'
                      className='h6 mb-0'
                      role='button'
                      id='dropdownShare4'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <i className='bi bi-info-circle-fill'></i>
                    </a>
                    <ul
                      className='dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded'
                      aria-labelledby='dropdownShare4'
                    >
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='small'>سود</span>
                          <span className='h6 mb-0 small'>250,000</span>
                        </div>
                        <hr className='my-1' />
                      </li>
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='me-4 small'>مالیات</span>
                          <span className='text-danger small'>-0.00</span>
                        </div>
                        <hr className='my-1' />
                      </li>
                      <li>
                        <div className='d-flex justify-content-between'>
                          <span className='small'>درآمد</span>
                          <span className='h6 mb-0 small'>250,000</span>
                        </div>
                      </li>
                    </ul>
                  </td>
                  <td className='text-center text-sm-start'>
                    <span className='badge bg-orange bg-opacity-10 text-orange'>
                      در انتظار پرداخت
                    </span>
                  </td>
                  <td>1400/1/13</td>
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
    </>
  );
};

export default ProfileTeacherPayout;

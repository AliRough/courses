'use client';

const ProfileTeacherOrder = () => {
  console.log('Not completed');

  return (
    <div className='card border bg-transparent rounded-3'>
      <div className='card-header bg-transparent border-bottom'>
        <h3 className='mb-0 fs-5 ff-vb'>لیست سفارشات</h3>
      </div>
      <div className='card-body'>
        <div className='row g-3 align-items-center justify-content-between mb-4'>
          <div className='col-md-8'>
            <form className='rounded position-relative'>
              <input
                className='form-control pe-5 bg-transparent'
                type='search'
                placeholder='جستجو'
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
                  دوره
                </th>
                <th scope='col' className='border-0'>
                  کد پیگیری
                </th>
                <th scope='col' className='border-0'>
                  تاریخ
                </th>
                <th scope='col' className='border-0'>
                  قیمت
                </th>
                <th scope='col' className='border-0 rounded-end'>
                  روش پرداخت
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h6 className='table-responsive-title mt-2 mt-lg-0 mb-0 fw-normal'>
                    <a href='#'>دوره کامل دیجیتال مارکتینگ - دوره 8 در 1</a>
                  </h6>
                </td>
                <td className='text-center text-sm-start text-primary-hover'>
                  <a href='#' className='text-body'>
                    <u>#125489</u>
                  </a>
                </td>
                <td>1400/12/10</td> <td>490,000 تومان</td> <td>کارت</td>
              </tr>
              <tr>
                <td>
                  <h6 className='table-responsive-title mt-2 mt-lg-0 mb-0 fw-normal'>
                    <a href='#'>آموزش مقدماتی فتوشاپ Photoshop</a>
                  </h6>
                </td>
                <td className='text-center text-sm-start text-primary-hover'>
                  <a href='#' className='text-body'>
                    <u>#235486</u>
                  </a>
                </td>
                <td>1400/12/24</td> <td>60,000 تومان</td> <td>کارت</td>
              </tr>
              <tr>
                <td>
                  <h6 className='table-responsive-title mt-2 mt-lg-0 mb-0 fw-normal'>
                    <a href='#'>دوره جامع آموزش Sketch</a>
                  </h6>
                </td>
                <td className='text-center text-sm-start text-primary-hover'>
                  <a href='#' className='text-body'>
                    <u>#0215789</u>
                  </a>
                </td>
                <td>1400/11/7</td> <td>280,000 تومان</td> <td>آنلاین</td>
              </tr>
              <tr>
                <td>
                  <h6 className='table-responsive-title mt-2 mt-lg-0 mb-0 fw-normal'>
                    <a href='#'>دوره جامع آموزش Figma</a>
                  </h6>
                </td>
                <td className='text-center text-sm-start text-primary-hover'>
                  <a href='#' className='text-body'>
                    <u>#0135689</u>
                  </a>
                </td>
                <td>1400/10/18</td> <td>0</td> <td>رایگان</td>
              </tr>
              <tr>
                <td>
                  <h6 className='table-responsive-title mt-2 mt-lg-0 mb-0 fw-normal'>
                    <a href='#'>دوره جامع آموزش HTML</a>
                  </h6>
                </td>
                <td className='text-center text-sm-start text-primary-hover'>
                  <a href='#' className='text-body'>
                    <u>#0587623</u>
                  </a>
                </td>
                <td>1399/11/8</td> <td>270,000 تومان</td> <td>آنلاین</td>
              </tr>
              <tr>
                <td>
                  <h6 className='table-responsive-title mt-2 mt-lg-0 mb-0 fw-normal'>
                    <a href='#'>دوره جامع آموزش JavaScript</a>
                  </h6>
                </td>
                <td className='text-center text-sm-start text-primary-hover'>
                  <a href='#' className='text-body'>
                    <u>#0215789</u>
                  </a>
                </td>
                <td>1399/8/12</td> <td>250,000 تومان</td> <td>کارت</td>
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

export default ProfileTeacherOrder;

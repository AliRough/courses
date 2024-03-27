'use client';

import Image from 'next/image';

const ProfileStudentPaymentInfo = () => {
  console.log('Not completed');

  return (
    <>
      <div className='card bg-transparent border rounded-3 mb-4 z-index-9'>
        <div className='card-header bg-transparent d-sm-flex justify-content-sm-between align-items-center border-bottom'>
          <h3 className='mb-2 mb-sm-0 fs-5 ff-vb'>روش های پرداخت</h3>
          <a
            href='#'
            className='btn btn-sm btn-primary-soft mb-0'
            data-bs-toggle='modal'
            data-bs-target='#addNewcard'
          >
            افزودن کارت
          </a>
        </div>
        <div className='card-body'>
          <div className='accordion accordion-circle' id='accordioncircle'>
            <div className='accordion-item mb-3'>
              <h6 className='accordion-header font-base' id='heading-1'>
                <button
                  className='accordion-button bg-white rounded collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapse-1'
                  aria-expanded='true'
                  aria-controls='collapse-1'
                >
                  آنلاین
                </button>
              </h6>
              <div
                id='collapse-1'
                className='accordion-collapse collapse show'
                aria-labelledby='heading-1'
                data-bs-parent='#accordioncircle'
              >
                <div className='accordion-body'>
                  <form className='row text-start g-3'>
                    <div className='col-12'>
                      <label className='form-label'>
                        شماره کارت <span className='text-danger'>*</span>
                      </label>
                      <div className='position-relative'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='xxxx xxxx xxxx xxxx'
                        />
                        <Image
                          unoptimized={true}
                          width='500'
                          height='500'
                          src='/images/client/visa.svg'
                          className='w-40px position-absolute top-50 end-0 translate-middle-y me-2 d-none d-sm-block'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <label className='form-label'>
                        تاریخ انقضا <span className='text-danger'>*</span>
                      </label>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control'
                          maxLength={2}
                          placeholder='ماه'
                        />
                        <input
                          type='text'
                          className='form-control'
                          maxLength={4}
                          placeholder='سال'
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <label className='form-label'>
                        CVV / CVC <span className='text-danger'>*</span>
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        maxLength={3}
                        placeholder='xxx'
                      />
                    </div>
                    <div className='col-12'>
                      <label className='form-label'>
                        نام صاحب کارت <span className='text-danger'>*</span>
                      </label>
                      <input
                        type='text'
                        className='form-control'
                        aria-label='name of card holder'
                        placeholder='دارنده کارت'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className='accordion-item mb-3'>
              <h6 className='accordion-header font-base' id='heading-2'>
                <button
                  className='accordion-button collapsed bg-white rounded'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapse-2'
                  aria-expanded='false'
                  aria-controls='collapse-2'
                >
                  غیرحضوری
                </button>
              </h6>
              <div
                id='collapse-2'
                className='accordion-collapse collapse'
                aria-labelledby='heading-2'
                data-bs-parent='#accordioncircle'
              >
                <div className='accordion-body'>
                  <form className='row text-start g-3'>
                    <p className='mb-1'>
                      برای تکمیل تراکنش شما، شما را به سرورهای امن Eduport منتقل
                      می کنیم.
                    </p>
                    <p className='my-0'>
                      بانک خود را از لیست زیر انتخاب کنید و برای ادامه پرداخت،
                      روی ادامه کلیک کنید.
                    </p>
                    <div className='col-md-6'>
                      <select
                        className='form-select form-select-sm js-choice border-0'
                        aria-label='.form-select-sm'
                      >
                        <option value=''>انتخاب یک بانک</option>
                        <option>پارسیان</option>
                        <option>پاسارگارد</option>
                        <option>ملت</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card bg-transparent border rounded-3 mb-4'>
        <div className='card-header bg-transparent d-sm-flex justify-content-sm-between align-items-center border-bottom'>
          <h3 className='mb-2 mb-sm-0 fs-5 ff-vb'>ارسال فاکتور</h3>
          <a href='#' className='btn btn-sm btn-primary-soft mb-0'>
            افزودن آدرس جدید
          </a>
        </div>
        <div className='card-body'>
          <div className='bg-body border border-1 p-3 rounded-3 d-sm-flex justify-content-sm-between align-items-center mb-4'>
            <div className='form-check'>
              <input
                className='form-check-input mb-1'
                type='radio'
                name='address'
                id='address1'
                checked
              />
              <label className='form-check-label mb-0 h5' htmlFor='address1'>
                آدرس 1
              </label>
              <p className='mb-0'>تهران، میدان آزادی، جنب مجتمع فرهنگیان</p>
            </div>
            <div>
              <a href='#' className='btn btn-sm btn-success mb-0'>
                ویرایش
              </a>
              <button className='btn btn-sm btn-danger mb-0'>حذف</button>
            </div>
          </div>
          <div className='bg-body border border-1 p-3 rounded-3 d-sm-flex justify-content-sm-between align-items-center mb-4'>
            <div className='form-check'>
              <input
                className='form-check-input mb-1'
                type='radio'
                name='address'
                id='address2'
              />
              <label className='form-check-label mb-0 h5' htmlFor='address2'>
                آدرس 2
              </label>
              <p className='mb-0'>
                شیراز، میدان پاسارگارد، جنب مجتمع تجاری صدف
              </p>
            </div>
            <div>
              <a href='#' className='btn btn-sm btn-success mb-0'>
                ویرایش
              </a>
              <button className='btn btn-sm btn-danger mb-0'>حذف</button>
            </div>
          </div>
        </div>
      </div>
      <div className='card bg-transparent border rounded-3'>
        <div className='card-header bg-transparent border-bottom'>
          <h3 className='mb-0 fs-5 ff-vb'>تاریخچه فاکتور</h3>
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
                  <i className='fas fa-search fs-6'></i>
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
                    تاریخ
                  </th>
                  <th scope='col' className='border-0'>
                    نام دوره
                  </th>
                  <th scope='col' className='border-0'>
                    روش پرداخت
                  </th>
                  <th scope='col' className='border-0'>
                    وضعیت
                  </th>
                  <th scope='col' className='border-0'>
                    مبلغ
                  </th>
                  <th scope='col' className='border-0 rounded-end'>
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1400/12/10</td>
                  <td>
                    <h6 className='mt-2 mt-lg-0 mb-0 fw-normal'>
                      <a href='#'>آموزش رایگان Blazor WebAssembly</a>
                    </h6>
                  </td>
                  <td>
                    <Image
                      unoptimized={true}
                      width='500'
                      height='500'
                      src='/images/client/mastercard.svg'
                      className='h-40px'
                      alt=''
                    />
                    <span className='ms-2'>****4568</span>
                  </td>
                  <td>
                    <span className='badge bg-success bg-opacity-10 text-success'>
                      پرداخت
                    </span>
                  </td>
                  <td>120,000 تومان</td>
                  <td>
                    <a
                      href='#'
                      className='btn btn-primary-soft btn-round me-1 mb-1 mb-md-0'
                      data-bs-toggle='tooltip'
                      data-bs-placement='top'
                      title='Download'
                    >
                      <i className='bi bi-download'></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>1400/7/20</td>
                  <td>
                    <h6 className='mt-2 mt-lg-0 mb-0 fw-normal'>
                      <a href='#'>دوره جامع آموزش Figma</a>
                    </h6>
                  </td>
                  <td>
                    <Image
                      unoptimized={true}
                      width='500'
                      height='500'
                      src='/images/client/mastercard.svg'
                      className='h-40px'
                      alt=''
                    />
                    <span className='ms-2'>****2588</span>
                  </td>
                  <td>
                    <span className='badge bg-success bg-opacity-10 text-success'>
                      پرداخت
                    </span>
                  </td>
                  <td>60,000 تومان</td>
                  <td>
                    <a
                      href='#'
                      className='btn btn-primary-soft btn-round me-1 mb-1 mb-md-0'
                      data-bs-toggle='tooltip'
                      data-bs-placement='top'
                      title='Download'
                    >
                      <i className='bi bi-download'></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>1400/10/18</td>
                  <td>
                    <h6 className='mt-2 mt-lg-0 mb-0 fw-normal'>
                      <a href='#'>دوره جامع آموزش Python</a>
                    </h6>
                  </td>
                  <td>
                    <Image
                      unoptimized={true}
                      width='500'
                      height='500'
                      src='/images/client/paypal.svg'
                      className='w-80px'
                      alt=''
                    />
                  </td>
                  <td>
                    <span className='badge bg-orange bg-opacity-10 text-orange'>
                      در انتظار
                    </span>
                  </td>
                  <td>30,000 تومان</td>
                  <td>
                    <a
                      href='#'
                      className='btn btn-primary-soft btn-round me-1 mb-1 mb-md-0'
                      data-bs-toggle='tooltip'
                      data-bs-placement='top'
                      title='Download'
                    >
                      <i className='bi bi-download'></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>1400/6/11</td>
                  <td>
                    <h6 className='mt-2 mt-lg-0 mb-0 fw-normal'>
                      <a href='#'>دوره جامع آموزش React-Native</a>
                    </h6>
                  </td>
                  <td>
                    <Image
                      unoptimized={true}
                      width='500'
                      height='500'
                      src='/images/client/mastercard.svg'
                      className='h-40px'
                      alt=''
                    />
                    <span className='ms-2'>****2588</span>
                  </td>
                  <td>
                    <span className='badge bg-danger bg-opacity-10 text-danger'>
                      لغو
                    </span>
                  </td>
                  <td>148,000 تومان</td>
                  <td>
                    <a
                      href='#'
                      className='btn btn-primary-soft btn-round me-1 mb-1 mb-md-0'
                      data-bs-toggle='tooltip'
                      data-bs-placement='top'
                      title='Download'
                    >
                      <i className='bi bi-download'></i>
                    </a>
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
    </>
  );
};

export default ProfileStudentPaymentInfo;

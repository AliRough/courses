import React from 'react';

export default function Four() {
  return (
    <div>
      <h4 className='fs-5 ff-vb'>اطلاعات تکمیلی</h4> <hr />
      <div className='row g-4'>
        <div className='col-12'>
          <div className='bg-light border rounded p-2 p-sm-4'>
            <div className='d-sm-flex justify-content-sm-between align-items-center mb-3'>
              <h5 className='mb-2 mb-sm-0'>آپلود سوالات متداول</h5>
              <a
                href='#'
                className='btn btn-sm btn-primary-soft mb-0'
                data-bs-toggle='modal'
                data-bs-target='#addQuestion'
              >
                <i className='bi bi-plus-circle me-2'></i>
                افزودن پرسش
              </a>
            </div>
            <div className='row g-4'>
              <div className='col-12'>
                <div className='bg-body p-3 p-sm-4 border rounded'>
                  <div className='d-sm-flex justify-content-sm-between align-items-center mb-2'>
                    <h6 className='mb-0'>
                      بازاریابی دیجیتال چگونه کار می کند؟
                    </h6>
                    <div className='align-middle'>
                      <a
                        href='#'
                        className='btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0'
                      >
                        <i className='far fa-fw fa-edit'></i>
                      </a>
                      <button className='btn btn-sm btn-danger-soft btn-round mb-0'>
                        <i className='fas fa-fw fa-times'></i>
                      </button>
                    </div>
                  </div>
                  <p>
                    کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
                    فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
                    بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
                    فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان
                    امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                    سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                    طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
              </div>
              <div className='col-12'>
                <div className='bg-body p-4 border rounded'>
                  <div className='d-sm-flex justify-content-sm-between align-items-center mb-2'>
                    <h6 className='mb-0'>
                      بازاریابی دیجیتال چگونه کار می کند؟
                    </h6>
                    <div className='align-middle'>
                      <a
                        href='#'
                        className='btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0'
                      >
                        <i className='far fa-fw fa-edit'></i>
                      </a>
                      <button className='btn btn-sm btn-danger-soft btn-round mb-0'>
                        <i className='fas fa-fw fa-times'></i>
                      </button>
                    </div>
                  </div>
                  <p>
                    کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
                    فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
                    بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
                    فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان
                    امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                    سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                    دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                    طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='bg-light border rounded p-4'>
            <h5 className='mb-0'>برچسب ها</h5>
            <div className='mt-3'>
              <input
                type='text'
                className='form-control js-choice mb-0'
                data-placeholder='true'
                data-placeholder-Val=''
                data-max-item-count='14'
                data-remove-item-button='true'
              />
              <span className='small'>
                حداکثر 14 کلمه کلیدی کلمات کلیدی همگی باید با حروف کوچک و با
                کاما از هم جدا شوند. به عنوان مثال، javascript، react
              </span>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <div className='bg-light border rounded p-4'>
            <h5 className='mb-0'>ثبت دیدگاه</h5>
            <div className='mt-3'>
              <textarea
                className='form-control'
                rows={4}
                placeholder='دیدگاه خود را ثبت کنید'
                spellCheck='false'
              ></textarea>
              <div className='form-check mb-0 mt-2'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                />
                <label className='form-check-label' htmlFor='exampleCheck1'>
                  هر تصویر، صدا، یا سایر دارایی‌هایی که کار من نیستند، مجوز
                  مناسبی برای استفاده در پیش‌نمایش فایل یا دوره اصلی دریافت
                  کرده‌اند. به غیر از این موارد، این اثر کاملاً متعلق به من است
                  و من حق کامل فروش آن را در اینجا دارم.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='d-md-flex justify-content-between align-items-start mt-4'>
          <button className='btn btn-secondary prev-btn mb-2 mb-md-0'>
            مرحله قبل
          </button>
          <button className='btn btn-light me-auto ms-md-2 mb-2 mb-md-0'>
            پیشنمایش دوره
          </button>
          <div className='text-md-end'>
            <a
              href='course-added.html'
              className='btn btn-success mb-2 mb-sm-0'
            >
              ثبت دوره
            </a>
            <p className='mb-0 small mt-1'>
              پس از کلیک بر روی ارسال یک دوره، دوره شما آپلود می شود و به عنوان
              در انتظار بررسی علامت گذاری می شود.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';

const ProfileTeacherEditProfileT = () => {
  console.log('Not completed');

  return (
    <>
      <div className='card bg-transparent border rounded-3'>
        <div className='card-header bg-transparent border-bottom'>
          <h3 className='card-header-title mb-0 ff-vb fs-5'>ویرایش پروفایل</h3>
        </div>
        <div className='card-body'>
          <form className='row g-4'>
            <div className='col-12 justify-content-center align-items-center'>
              <label className='form-label'>تصویر</label>
              <div className='d-flex align-items-center'>
                <label
                  className='position-relative me-4'
                  htmlFor='uploadfile-1'
                  title='Replace this pic'
                >
                  <span className='avatar avatar-xl'>
                    <Image
                      unoptimized={true}
                      width='500'
                      height='500'
                      id='uploadfile-1-preview'
                      className='avatar-img rounded-circle border border-white border-3 shadow'
                      src='/images/avatar/07.jpg'
                      alt=''
                    />
                  </span>
                  <button type='button' className='uploadremove'>
                    <i className='bi bi-x text-white'></i>
                  </button>
                </label>
                <label
                  className='btn btn-primary-soft mb-0'
                  htmlFor='uploadfile-1'
                >
                  تغییر
                </label>
                <input
                  id='uploadfile-1'
                  className='form-control d-none'
                  type='file'
                />
              </div>
            </div>
            <div className='col-12'>
              <label className='form-label'>نام</label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  value='علی'
                  placeholder='نام'
                />
                <input
                  type='text'
                  className='form-control'
                  value='محمدی'
                  placeholder='نام خانوادگی'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>نام کاربری</label>
              <div className='input-group'>
                <span className='input-group-text'>rtl-theme.com</span>
                <input type='text' className='form-control' value='rtltheme' />
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>ایمیل</label>
              <input
                className='form-control'
                type='email'
                value='example@gmail.com'
                placeholder='ایمیل'
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>شماره تماس</label>
              <input
                type='text'
                className='form-control'
                value='1234567890'
                placeholder='شماره تماس'
              />
            </div>
            <div className='col-md-6'>
              <label className='form-label'>آدرس</label>
              <input className='form-control' type='text' value='تهران' />
            </div>
            <div className='col-12'>
              <label className='form-label'>درباره من</label>
              <textarea className='form-control' rows={3}>
                من راهی برای دریافت پول برای سرگرمی مورد علاقه‌ام پیدا کرده‌ام و
                این کار را در حالی انجام می‌دهم که رویای سفر به دور دنیا را
                دنبال می‌کنم.
              </textarea>
              <div className='form-text'>توضیحات مختصری برای پروفایل شما</div>
            </div>
            <div className='col-12'>
              <label className='form-label'>تحصیلات</label>
              <input
                className='form-control mb-2'
                type='text'
                value='لیسانس گرافیک کامپیوتری'
              />
              <input
                className='form-control mb-2'
                type='text'
                value='کارشناسی ارشد گرافیک کامپیوتری'
              />
              <button className='btn btn-sm btn-light mb-0'>
                <i className='bi bi-plus me-1'></i>افزودن
              </button>
            </div>
            <div className='d-sm-flex justify-content-end'>
              <button type='button' className='btn btn-primary mb-0'>
                ذخیره
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='row g-4 mt-3'>
        <div className='col-lg-6'>
          <div className='card bg-transparent border rounded-3'>
            <div className='card-header bg-transparent border-bottom'>
              <h5 className='card-header-title mb-0'>اکانت های فعال</h5>
            </div>
            <div className='card-body pb-0'>
              <div className='position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded'>
                <h2 className='fs-1 mb-0 me-3'>
                  <i className='fab fa-google text-google-icon'></i>
                </h2>
                <div>
                  <div className='position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px'>
                    <i className='bi bi-check-circle-fill text-success fs-5'></i>
                  </div>
                  <h6 className='mb-1'>Google</h6>
                  <p className='mb-1 small'>
                    شما با موفقیت به حساب Google خود متصل شده اید
                  </p>
                  <button type='button' className='btn btn-sm btn-danger mb-0'>
                    خروج
                  </button>
                  <a href='#' className='btn btn-sm btn-link text-body mb-0'>
                    بیشتر
                  </a>
                </div>
              </div>
              <div className='mb-4 d-sm-flex border p-3 rounded'>
                <h2 className='fs-1 mb-0 me-3'>
                  <i className='fab fa-linkedin-in text-linkedin'></i>
                </h2>
                <div>
                  <h6 className='mb-1'>Linkedin</h6>
                  <p className='mb-1 small'>ورود به حساب Linkedin</p>
                  <button type='button' className='btn btn-sm btn-primary mb-0'>
                    ورود
                  </button>
                  <a href='#' className='btn btn-sm btn-link text-body mb-0'>
                    بیشتر بدانید
                  </a>
                </div>
              </div>
              <div className='mb-4 d-sm-flex border p-3 rounded'>
                <h2 className='fs-1 mb-0 me-3'>
                  <i className='fab fa-facebook text-facebook'></i>
                </h2>
                <div>
                  <h6 className='mb-1'>Facebook</h6>
                  <p className='mb-1 small'>ورود به حساب Facebook</p>
                  <button type='button' className='btn btn-sm btn-primary mb-0'>
                    ورود
                  </button>
                  <a href='#' className='btn btn-sm btn-link text-body mb-0'>
                    بیشتر بدانید
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card bg-transparent border rounded-3'>
            <div className='card-header bg-transparent border-bottom'>
              <h5 className='card-header-title mb-0'>شبکه های اجتماعی</h5>
            </div>
            <div className='card-body'>
              <div className='mb-3'>
                <label className='form-label'>
                  <i className='fab fa-facebook text-facebook me-2'></i>نام
                  کاربری facebook
                </label>
                <input
                  className='form-control'
                  type='text'
                  value='rtltheme'
                  placeholder='نام کاربری'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>
                  <i className='bi bi-twitter text-twitter me-2'></i>نام کاربری
                  twitter
                </label>
                <input
                  className='form-control'
                  type='text'
                  value='rtltheme'
                  placeholder='نام کاربری'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>
                  <i className='fab fa-instagram text-instagram-gradient me-2'></i>
                  نام کاربری instagram
                </label>
                <input
                  className='form-control'
                  type='text'
                  value='rtltheme'
                  placeholder='نام کاربری'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'>
                  <i className='fab fa-youtube text-youtube me-2'></i>آدرس
                  youtube
                </label>
                <input
                  className='form-control'
                  type='text'
                  value='https://www.aparat.com/video/video/embed/videohash/TyGZt/vt/frame'
                  placeholder='نام کاربری'
                />
              </div>
              <div className='d-flex justify-content-end mt-4'>
                <button type='button' className='btn btn-primary mb-0'>
                  ذخیره
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card bg-transparent border rounded-3'>
            <div className='card-header bg-transparent border-bottom'>
              <h5 className='card-header-title mb-0'>تغییر ایمیل</h5>
            </div>
            <div className='card-body'>
              <p>
                آدرس ایمیل فعلی شما
                <span className='text-primary'>example@gmail.com</span> است
              </p>
              <form>
                <label className='form-label'>
                  ایمیل جدید خود را وارد کنید
                </label>
                <input
                  className='form-control'
                  type='email'
                  placeholder='ایمیل جدید'
                />
                <div className='d-flex justify-content-end mt-4'>
                  <button type='button' className='btn btn-primary mb-0'>
                    تغییر ایمیل
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='card border bg-transparent rounded-3'>
            <div className='card-header bg-transparent border-bottom'>
              <h5 className='card-header-title mb-0'>تغییر رمز عبور</h5>
            </div>
            <div className='card-body'>
              <div className='mb-3'>
                <label className='form-label'>رمز فعلی</label>
                <input
                  className='form-control'
                  type='password'
                  placeholder='********'
                />
              </div>
              <div className='mb-3'>
                <label className='form-label'> رمز جدید</label>
                <div className='input-group'>
                  <input
                    className='form-control'
                    type='password'
                    placeholder='********'
                  />
                  <span className='input-group-text p-0 bg-transparent'>
                    <i className='far fa-eye cursor-pointer p-2 w-40px'></i>
                  </span>
                </div>
                <div className='rounded mt-1' id='psw-strength'></div>
              </div>
              <div>
                <label className='form-label'>تایید رمز جدید</label>
                <input
                  className='form-control'
                  type='password'
                  placeholder='********'
                />
              </div>
              <div className='d-flex justify-content-end mt-4'>
                <button type='button' className='btn btn-primary mb-0'>
                  تغییر رمز
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTeacherEditProfileT;

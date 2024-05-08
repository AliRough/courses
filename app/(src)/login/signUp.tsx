import Link from 'next/link';
import React from 'react';

export default function signUp() {
  return (
    <main>
      <section className='p-0 d-flex align-items-center position-relative overflow-hidden'>
        <div className='container-fluid'>
          <div className='row'>
            {/* left */}
            <div className='col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100'>
              <div className='p-3 p-lg-5'>
                {/* Title */}
                <div className='text-center'>
                  <h2 className='fw-bold fs-3'>
                    به بزرگترین انجمن ما خوش آمدید
                  </h2>
                  <p className='mb-0 h6 fw-light'>
                    بیایید امروز چیز جدیدی یاد بگیریم!
                  </p>
                </div>
                {/* SVG Image */}
                <img
                  src='assets/images/element/02.svg'
                  className='mt-5'
                  alt=''
                />
                {/* Info */}
                <div className='d-sm-flex mt-5 align-items-center justify-content-center'>
                  <ul className='avatar-group mb-2 mb-sm-0'>
                    <li className='avatar avatar-sm'>
                      <img
                        className='avatar-img rounded-circle'
                        src='assets/images/avatar/01.jpg'
                        alt='avatar'
                      />
                    </li>
                    <li className='avatar avatar-sm'>
                      <img
                        className='avatar-img rounded-circle'
                        src='assets/images/avatar/02.jpg'
                        alt='avatar'
                      />
                    </li>
                    <li className='avatar avatar-sm'>
                      <img
                        className='avatar-img rounded-circle'
                        src='assets/images/avatar/03.jpg'
                        alt='avatar'
                      />
                    </li>
                    <li className='avatar avatar-sm'>
                      <img
                        className='avatar-img rounded-circle'
                        src='assets/images/avatar/04.jpg'
                        alt='avatar'
                      />
                    </li>
                  </ul>
                  {/* Content */}
                  <p className='mb-0 h6 fw-light ms-0 ms-sm-3'>
                    {' '}
                    بیش از 100 دانشجو به ما پیوستند، حالا نوبت شماست.
                  </p>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className='col-12 col-lg-6 m-auto'>
              <div className='row my-5'>
                <div className='col-sm-10 col-xl-8 m-auto'>
                  {/* Title */}
                  <img
                    src='assets/images/element/03.svg'
                    className='h-40px mb-2'
                    alt=''
                  />
                  <h2 className=''>ثبت نام</h2>
                  <p className='mb-4'>
                    از دیدن شما خوشحالم! لطفا با حساب کاربری خود ثبت نام کنید.
                  </p>
                  {/* Form START */}
                  <form>
                    {/* Email */}
                    <div className='mb-4'>
                      <label
                        htmlFor='exampleInputEmail1'
                        className='form-label'
                      >
                        ایمیل
                      </label>
                      <div className='input-group input-group-lg'>
                        <span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
                          <i className='bi bi-envelope-fill' />
                        </span>
                        <input
                          type='email'
                          className='form-control border-0 bg-light rounded-end ps-1'
                          placeholder='***@gmail.com'
                          id='exampleInputEmail1'
                        />
                      </div>
                    </div>
                    {/* Password */}
                    <div className='mb-4'>
                      <label htmlFor='inputPassword5' className='form-label'>
                        رمز عبور *
                      </label>
                      <div className='input-group input-group-lg'>
                        <span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
                          <i className='fas fa-lock' />
                        </span>
                        <input
                          type='password'
                          className='form-control border-0 bg-light rounded-end ps-1'
                          placeholder='*********'
                          id='inputPassword5'
                        />
                      </div>
                    </div>
                    {/* Confirm Password */}
                    <div className='mb-4'>
                      <label htmlFor='inputPassword6' className='form-label'>
                        تایید رمز عبور *
                      </label>
                      <div className='input-group input-group-lg'>
                        <span className='input-group-text bg-light rounded-start border-0 text-secondary px-3'>
                          <i className='fas fa-lock' />
                        </span>
                        <input
                          type='password'
                          className='form-control border-0 bg-light rounded-end ps-1'
                          placeholder='*********'
                          id='inputPassword6'
                        />
                      </div>
                    </div>
                    {/* Check box */}
                    <div className='mb-4'>
                      <div className='form-check'>
                        <input
                          type='checkbox'
                          className='form-check-input'
                          id='checkbox-1'
                        />
                        <label
                          className='form-check-label'
                          htmlFor='checkbox-1'
                        >
                          با ثبت نام <a href='#'>شرایط و قوانین سایت</a> را
                          خواهید پذیرفت.
                        </label>
                      </div>
                    </div>
                    {/* Button */}
                    <div className='align-items-center mt-0'>
                      <div className='d-grid'>
                        <button className='btn btn-primary mb-0' type='button'>
                          ثبت نام
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* Form END */}
                  {/* Social buttons */}
                  <div className='row'>
                    {/* Divider with text */}
                    <div className='position-relative my-4'>
                      <hr />
                      <p className='small position-absolute top-50 start-50 translate-middle bg-body px-5'>
                        یا
                      </p>
                    </div>
                    {/* Social btn */}
                    <div className='col-xxl-6 d-grid'>
                      <a href='#' className='btn bg-google mb-2 mb-xxl-0'>
                        <i className='fab fa-fw fa-google text-white me-2' />
                        با Google
                      </a>
                    </div>
                    {/* Social btn */}
                    <div className='col-xxl-6 d-grid'>
                      <a href='#' className='btn bg-facebook mb-0'>
                        <i className='fab fa-fw fa-facebook-f me-2' />
                        با Facebook
                      </a>
                    </div>
                  </div>
                  {/* Sign up link */}
                  <div className='mt-4 text-center'>
                    <span>
                      آیا قبلا ثبت نام کرده اید؟<Link href='login'> ورود</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

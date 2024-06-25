'use client';

import Image from 'next/image';

const ProfileStudentQuiz = () => {
  return (
    <div className='card border'>
      <div className='card-header border-bottom'>
        <div className='row'>
          <div className='col-12'>
            <div className='card'>
              <div className='row g-0'>
                <div className='col-md-2'>
                  <Image
                    unoptimized={true}
                    width='500'
                    height='500'
                    src='/images/courses/4by3/01.jpg'
                    className='rounded-2'
                    alt='Card image'
                  />
                </div>
                <div className='col-md-10'>
                  <div className='card-body'>
                    <h3 className='card-title fs-5'>
                      <a href='#'>آموزش رایگان Blazor WebAssembly</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card-body'>
        <div className='card bg-transparent border rounded-3 mb-1'>
          <div id='stepper' className='bs-stepper stepper-outline'>
            <div className='card-header bg-light border-bottom px-lg-5'>
              <div className='bs-stepper-header' role='tablist'>
                <div className='step' data-target='#step-1'>
                  <div className='d-grid text-center align-items-center'>
                    <button
                      type='button'
                      className='btn btn-link step-trigger mb-0'
                      role='tab'
                      id='steppertrigger1'
                      aria-controls='step-1'
                    >
                      <span className='bs-stepper-circle'>1</span>
                    </button>
                  </div>
                </div>
                <div className='line'></div>
                <div className='step' data-target='#step-2'>
                  <div className='d-grid text-center align-items-center'>
                    <button
                      type='button'
                      className='btn btn-link step-trigger mb-0'
                      role='tab'
                      id='steppertrigger2'
                      aria-controls='step-2'
                    >
                      <span className='bs-stepper-circle'>2</span>
                    </button>
                  </div>
                </div>
                <div className='line'></div>
                <div className='step' data-target='#step-3'>
                  <div className='d-grid text-center align-items-center'>
                    <button
                      type='button'
                      className='btn btn-link step-trigger mb-0'
                      role='tab'
                      id='steppertrigger3'
                      aria-controls='step-3'
                    >
                      <span className='bs-stepper-circle'>3</span>
                    </button>
                  </div>
                </div>
                <div className='line'></div>
                <div className='step' data-target='#step-4'>
                  <div className='d-grid text-center align-items-center'>
                    <button
                      type='button'
                      className='btn btn-link step-trigger mb-0'
                      role='tab'
                      id='steppertrigger4'
                      aria-controls='step-4'
                    >
                      <span className='bs-stepper-circle'>4</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <h6 className='text-danger text-end mb-0'>
                <i className='bi bi-clock-history me-2'></i>مدت دوره: 00:01:30
              </h6>
              <div className='bs-stepper-content'>
                <form>
                  <div
                    id='step-1'
                    role='tabpanel'
                    className='content fade'
                    aria-labelledby='steppertrigger1'
                  >
                    <h4 className='fs-5 ff-vb'>
                      فریم ورک‌ها و کتابخانه‌های CSS
                    </h4>
                    <hr />
                    <div className='vstack gap-2'>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option1'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option1'
                        >
                          ساخت رابط کاربری و بررسی پروژه عملی دوره
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option2'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option2'
                        >
                          بررسی ابزار ها و ایجاد پروژه
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option3'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option3'
                        >
                          پیش نیاز های دوره و نصب پیش نیاز ها
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option4'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option4'
                        >
                          طراحی رابط کاربری اپلیکیشن
                        </label>
                      </div>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                      <button
                        type='button'
                        className='btn btn-primary next-btn mb-0'
                      >
                        پرسش بعدی
                      </button>
                    </div>
                  </div>
                  <div
                    id='step-2'
                    role='tabpanel'
                    className='content fade'
                    aria-labelledby='steppertrigger2'
                  >
                    <h4 className='fs-5 ff-vb'>بهینه سازی وب سایت چیست؟</h4>
                    <hr />
                    <div className='vstack gap-2'>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option11'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option11'
                        >
                          ساخت رابط کاربری و بررسی پروژه عملی دوره
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option22'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option22'
                        >
                          بررسی ابزار ها و ایجاد پروژه
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option33'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option33'
                        >
                          پیش نیاز های دوره و نصب پیش نیاز ها
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option44'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option44'
                        >
                          انجام پروژه عملی با دسترسی به API
                        </label>
                      </div>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                      <button
                        type='button'
                        className='btn btn-primary next-btn mb-0'
                      >
                        سوال بعدی
                      </button>
                    </div>
                  </div>
                  <div
                    id='step-3'
                    role='tabpanel'
                    className='content fade'
                    aria-labelledby='steppertrigger3'
                  >
                    <h4 className='fs-5 ff-vb'>
                      چه کسانی باید در این دوره شرکت کنند؟
                    </h4>
                    <hr />
                    <div className='vstack gap-2'>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option111'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option111'
                        >
                          ساخت رابط کاربری و بررسی پروژه عملی دوره
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option222'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option222'
                        >
                          بررسی ابزار ها و ایجاد پروژه
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option333'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option333'
                        >
                          پیش نیاز های دوره و نصب پیش نیاز ها
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option444'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option444'
                        >
                          انجام پروژه عملی با دسترسی به API
                        </label>
                      </div>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                      <button
                        type='button'
                        className='btn btn-primary next-btn mb-0'
                      >
                        پرسش بعدی
                      </button>
                    </div>
                  </div>
                  <div
                    id='step-4'
                    role='tabpanel'
                    className='content fade'
                    aria-labelledby='steppertrigger4'
                  >
                    <h4 className='fs-5 ff-vb'>
                      12 مهارت لازم برای توسعه دهندگان
                    </h4>
                    <hr />
                    <div className='vstack gap-2'>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option1111'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option1111'
                        >
                          ساخت رابط کاربری و بررسی پروژه عملی دوره
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option2222'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option2222'
                        >
                          بررسی ابزار ها و ایجاد پروژه
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option3333'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option3333'
                        >
                          پیش نیاز های دوره و نصب پیش نیاز ها
                        </label>
                      </div>
                      <div>
                        <input
                          type='radio'
                          className='btn-check'
                          name='ques'
                          id='option4444'
                        />
                        <label
                          className='btn btn-outline-primary w-100'
                          htmlFor='option4444'
                        >
                          انجام پروژه عملی با دسترسی به API
                        </label>
                      </div>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                      <button
                        type='button'
                        className='btn btn-success next-btn mb-0'
                      >
                        نتیجه آزمون
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStudentQuiz;

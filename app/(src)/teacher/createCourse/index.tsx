'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import ProfileTeacherCreateCourseUi from './createCourseUi';
import { CreateCourseValidateOne } from '../../validations/createCourseValidate';
import {
  TCreateCourseValidate,
  TCreateCourseInputsOne,
  TCreateCourseInputsTow,
} from './createCourse';
import Image from 'next/image';

import '@/public/vendor/stepper/css/bs-stepper.min.css';
import One from './steps/One';
import Two from './steps/Two';
import Three from './steps/Three';
import Four from './steps/Four';
import { useState } from 'react';
import Header from '../../componenets/Header';

const ProfileTeacherCreateCourse = () => {
  console.log('Not completed');
  const [steper, setSteper] = useState(1);

  // // ساحتار اولیه برای شکل گیری فرم
  // const {
  //   // ساختار پارامتر
  //   register,
  //   // کنترل دکمه سابمت به صورت اتوماتیک حالت رفرش رو غیر فعال میکنه.
  //   handleSubmit,
  //   // اگه اروری تولید کرد انتقال بده
  //   formState: { errors },
  //   watch,
  //   setValue,
  // } = useForm<TCreateCourseValidate>({
  //   resolver: zodResolver(CreateCourseValidateOne),
  // });

  // // ساحتار اولیه برای شکل گیری فرم
  // const {
  //   // ساختار پارامتر
  //   register,
  //   // کنترل دکمه سابمت به صورت اتوماتیک حالت رفرش رو غیر فعال میکنه.
  //   handleSubmit,
  //   // اگه اروری تولید کرد انتقال بده
  //   formState: { errors },
  //   watch,
  //   setValue,
  // } = useForm<TCreateCourseValidate>({
  //   resolver: zodResolver(CreateCourseValidateOne),
  // });

  // const price = watch('price');
  // const image = watch('image');

  const submit = (data: TCreateCourseValidate) => {
    setSteper((step) => step + 1);
    // ارسال دیتا
    // درصورت نیاز قبل از ارسال تغییرات نهایی لحاظ بشه
  };

  // برای راحتی کار پارامتر ها اینجا قرار میگیرن.بعد فقط اینپوتس ارسال میشه سمت یو آی
  // const stepOneData: TCreateCourseInputsOne = {
  //   category: register('category'),
  //   level: register('level'),
  //   // image: register('image'),
  //   description: register('description'),
  //   duration: register('duration'),
  //   price: register('price'),
  //   discount_percent: register('discount_percent'),
  //   // certificate: register('certificate'),
  //   videos: register('videos'),
  //   short_description: register('short_description'),
  //   title: register('title'),
  // };
  // const stepTowData: TCreateCourseInputsTow = {
  //   image: register('image'),
  //   certificate: register('certificate'),
  // };

  // const plus = () => {
  //   setValue('price', parseInt(price) + 1);
  // };

  return (
    <>
      <section
        className='py-0 bg-blue h-100px align-items-center d-flex h-200px rounded-0'
        style={{
          background: 'url(/images/pattern/04.png) no-repeat center center',
          backgroundSize: 'cover',
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1 className='text-white'>افزودن دوره</h1>
              <p className='text-white mb-0'>
                لطفا
                <a href='#' className='text-white'>
                  <u>قبل از افزودن دوره</u>
                </a>
                مقاله ما را بخوانید.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 mx-auto text-center'>
              <p className='text-center'>
                از این رابط برای اضافه کردن یک دوره جدید به پورتال استفاده کنید.
                پس از اتمام افزودن مورد، از نظر کیفیت بررسی می شود. در صورت
                تایید، دوره شما برای فروش ظاهر می شود و از طریق ایمیل به شما
                اطلاع داده می شود که دوره شما پذیرفته شده است.
              </p>
            </div>
          </div>
          <div className='card bg-transparent border rounded-3 mb-5'>
            <div className='bs-stepper stepper-outline'>
              <div className='card-header bg-light border-bottom px-lg-5'>
                <div className='bs-stepper-header'>
                  <div className={`step ${steper === 1 && 'active'}`}>
                    <div className='d-grid text-center align-items-center'>
                      <button
                        type='button'
                        className='btn btn-link step-trigger mb-0'
                        onClick={() => {
                          setSteper(1);
                        }}
                      >
                        <span className='bs-stepper-circle'>1</span>
                      </button>
                      <h6 className='bs-stepper-label d-none d-md-block'>
                        جزئیات دوره
                      </h6>
                    </div>
                  </div>
                  <div className='line'></div>
                  <div className={`step ${steper === 2 && 'active'}`}>
                    <div className='d-grid text-center align-items-center '>
                      <button
                        type='button'
                        className='btn btn-link step-trigger mb-0 '
                        onClick={() => {
                          setSteper(2);
                        }}
                      >
                        <span className='bs-stepper-circle'>2</span>
                      </button>
                      <h6 className='bs-stepper-label d-none d-md-block'>
                        رسانه
                      </h6>
                    </div>
                  </div>
                  <div className='line'></div>
                  <div className={`step ${steper === 3 && 'active'}`}>
                    <div className='d-grid text-center align-items-center'>
                      <button
                        type='button'
                        className='btn btn-link step-trigger mb-0'
                        onClick={() => {
                          setSteper(3);
                        }}
                      >
                        <span className='bs-stepper-circle'>3</span>
                      </button>
                      <h6 className='bs-stepper-label d-none d-md-block'>
                        جلسات دوره
                      </h6>
                    </div>
                  </div>
                  <div className='line'></div>
                  <div className={`step ${steper === 4 && 'active '}`}>
                    <div className='d-grid text-center align-items-center'>
                      <button
                        type='button'
                        className='btn btn-link step-trigger mb-0'
                        onClick={() => {
                          setSteper(4);
                        }}
                      >
                        <span className='bs-stepper-circle'>4</span>
                      </button>
                      <h6 className='bs-stepper-label d-none d-md-block'>
                        اطلاعات تکمیلی
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <div className='bs-stepper-content'>
                  <div>
                    {steper === 1 && (
                      <One
                        // input={stepOneData}
                        // handleSubmit={handleSubmit}
                        // errors={errors}
                        submit={submit}
                        // price={price}
                      />
                    )}
                    {steper === 2 && <Two submit={submit} />}
                    {steper === 3 && <Three submit={submit} />}
                    {/* {steper === 4 && <Four submit={submit} />} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className='modal fade'
        id='addLecture'
        tabIndex={-1}
        aria-labelledby='addLectureLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header bg-dark'>
              <h5 className='modal-title text-white' id='addLectureLabel'>
                افزودن ویدیو
              </h5>
              <button
                type='button'
                className='btn btn-sm btn-light mb-0'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <i className='bi bi-x-lg'></i>
              </button>
            </div>
            <div className='modal-body'>
              <form className='row text-start g-3'>
                <div className='col-12'>
                  <label className='form-label'>
                    نام ویدیو <span className='text-danger'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='نام ویدیو را وارد کنید'
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger-soft my-0'
                data-bs-dismiss='modal'
              >
                بستن
              </button>
              <button type='button' className='btn btn-success my-0'>
                ذخیره
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal fade '
        id='addTopic'
        tabIndex={-1}
        aria-labelledby='addTopicLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header bg-dark'>
              <h5 className='modal-title text-white' id='addTopicLabel'>
                افزودن دوره
              </h5>
              <button
                type='button'
                className='btn btn-sm btn-light mb-0'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <i className='bi bi-x-lg'></i>
              </button>
            </div>
            <div className='modal-body'>
              <form className='row text-start g-3'>
                <div className='col-md-6'>
                  <label className='form-label'>نام دوره</label>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='نام دوره'
                  />
                </div>
                <div className='col-md-6'>
                  <label className='form-label'>لینک ویدیو</label>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='لینک ویدیو'
                  />
                </div>
                <div className='col-12 mt-3'>
                  <label className='form-label'>توضیحات</label>
                  <textarea
                    className='form-control'
                    rows={4}
                    placeholder=''
                    spellCheck='false'
                  ></textarea>
                </div>
                <div className='col-6 mt-3'>
                  <div
                    className='btn-group'
                    role='group'
                    aria-label='Basic radio toggle button group'
                  >
                    <input
                      type='radio'
                      className='btn-check'
                      name='options'
                      id='option1'
                    />
                    <label
                      className='btn btn-sm btn-light btn-primary-soft-check border-0 m-0'
                      htmlFor='option1'
                    >
                      رایگان
                    </label>
                    <input
                      type='radio'
                      className='btn-check'
                      name='options'
                      id='option2'
                    />
                    <label
                      className='btn btn-sm btn-light btn-primary-soft-check border-0 m-0'
                      htmlFor='option2'
                    >
                      پولی
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger-soft my-0'
                data-bs-dismiss='modal'
              >
                بستن
              </button>
              <button type='button' className='btn btn-success my-0'>
                ذخیره
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className='modal fade'
        id='addQuestion'
        tabIndex={-1}
        aria-labelledby='addQuestionLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header bg-dark'>
              <h5 className='modal-title text-white' id='addQuestionLabel'>
                افزودن سوال
              </h5>
              <button
                type='button'
                className='btn btn-sm btn-light mb-0'
                data-bs-dismiss='modal'
                aria-label='Close'
              >
                <i className='bi bi-x-lg'></i>
              </button>
            </div>
            <div className='modal-body'>
              <form className='row text-start g-3'>
                <div className='col-12'>
                  <label className='form-label'>پرسش</label>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='پرسش خود را ثبت کنید'
                  />
                </div>
                <div className='col-12 mt-3'>
                  <label className='form-label'>پاسخ</label>
                  <textarea
                    className='form-control'
                    rows={4}
                    placeholder='پاسخ خود را ثبت کنید'
                    spellCheck='false'
                  ></textarea>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger-soft my-0'
                data-bs-dismiss='modal'
              >
                بستن
              </button>
              <button type='button' className='btn btn-success my-0'>
                ذخیره
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='back-top'>
        <i className='bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle'></i>
      </div>
    </>
  );
};

export default ProfileTeacherCreateCourse;

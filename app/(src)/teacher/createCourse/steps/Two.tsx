import React from 'react';
import { TCreateCourseInputsTow, TCreateCourseValidate } from '../createCourse';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateCourseValidateTow } from '../../../validations/createCourseValidate';
import Image from 'next/image';

export default function Tow({ submit }: any) {
  // ساحتار اولیه برای شکل گیری فرم
  const {
    // ساختار پارامتر
    register,
    // کنترل دکمه سابمت به صورت اتوماتیک حالت رفرش رو غیر فعال میکنه.
    handleSubmit,
    // اگه اروری تولید کرد انتقال بده
    formState: { errors },
    watch,
    setValue,
  } = useForm<TCreateCourseValidate>({
    resolver: zodResolver(CreateCourseValidateTow),
  });

  const image = watch('image');

  const input: TCreateCourseInputsTow = {
    image: register('image'),
  };

  image && console.log(image[0]?.name);

  const course = [
    {
      name: 'آموزش کار به صورت متوسطه1',
      child: [{ name: 'دوره ۱' }, { name: 'دوره ۳' }, { name: 'دوره ۲' }],
    },
    {
      name: 'آموزش کار به صورت متوسطه2',
      child: [{ name: 'دوره ۱' }, { name: 'دوره ۳' }, { name: 'دوره ۲' }],
    },
    {
      name: 'آموزش کار به صورت متوسطه3',
    },
  ];

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(submit)}>
      <h4 className='fs-5 ff-vb'>جلسات دوره</h4> <hr />
      {/* register your input into the hook by invoking the "register" function */}
      <div className='row g-4'>
        <div className='col-12'>
          <label className='form-label'>عکس پیش نمایش دوره</label>
          <div className='position-relative '>
            <div className='text-center justify-content-center align-items-center p-4 p-sm-5 border border-2 border-dashed position-relative rounded-3'>
              <Image
                unoptimized={true}
                width='500'
                height='500'
                src='/images/element/gallery.svg'
                className='h-50px'
                alt=''
              />
              <div>
                <h6 className='my-2'>آپلود عکس پیش نمایش دوره</h6>
                <label>
                  <span>
                    <div className='input-group'>
                      <div className='form-control stretched-link upload-name border-end-0 w-150px overflow-hidden '>
                        {/* value= */}
                        <div dir='ltr' className='text-truncate'>
                          {image && image[0]?.name}
                        </div>
                      </div>
                      <span className='btn btn btn-secondary-soft cursor-pointer upload-button border-start-0'>
                        آپلود فایل
                      </span>
                    </div>
                  </span>
                </label>
                <p className='small mb-0 mt-2'>
                  <b>توجه: </b> فقط JPG، JPEG و PNG. ابعاد پیشنهادی ما 600px *
                  450px است. تصویر بزرگتر به اندازه 4:3 برش داده می شود تا با
                  تصاویر کوچک/پیش نمایش ما مطابقت داشته باشد.
                </p>
              </div>
            </div>
            <input
              className='position-absolute top-0 start-0 w-100 h-100 opacity-0 z-3 '
              type='file'
              {...input.image}
              placeholder='آموزش ساخت وب سایت خبری'
            />
          </div>

          <ErrorMessage
            errors={errors}
            name='image'
            render={({ message }) => <p className='text-danger'>{message}</p>}
          />
        </div>
      </div>
      <div>
        <div className='row'>
          <div className='d-sm-flex justify-content-sm-between align-items-center my-3'>
            <h5 className='mb-2 mb-sm-0'>آپلود دوره</h5>
            <a
              href='#'
              className='btn btn-sm btn-primary-soft mb-0'
              data-bs-toggle='modal'
              data-bs-target='#addLecture'
            >
              <i className='bi bi-plus-circle me-2'></i>افزودن دوره
            </a>
          </div>
          <div
            className='accordion accordion-icon accordion-bg-light'
            id='accordionExample2'
          >
            {course.map((season, index) => (
              <div key={index} className='accordion-item mb-3'>
                <h6
                  className='accordion-header font-base'
                  id={`heading-${index + 1}`}
                >
                  <button
                    className='accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#collapse-${index + 1}`}
                    aria-expanded='false'
                    aria-controls={`collapse-${index + 1}`}
                  >
                    {season.name}
                  </button>
                </h6>
                <div
                  id={`collapse-${index + 1}`}
                  className='accordion-collapse collapse'
                  aria-labelledby={`heading-${index + 1}`}
                  data-bs-parent='#accordionExample2'
                >
                  <div className='accordion-body mt-3'>
                    {season.child?.map((course, index) => (
                      <>
                        <div
                          key={index}
                          className='d-flex justify-content-between align-items-center'
                        >
                          <div className='position-relative'>
                            <a
                              href='#'
                              className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                            >
                              <i className='fas fa-play'></i>
                            </a>
                            <span className='ms-2 mb-0 h6 fw-light'>
                              {course.name}{' '}
                            </span>
                          </div>
                          <div>
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
                        <hr />
                      </>
                    ))}
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='position-relative'>
                        <a
                          href='#'
                          className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                        >
                          <i className='fas fa-play'></i>
                        </a>
                        <span className='ms-2 mb-0 h6 fw-light'>
                          معرفی دوره
                        </span>
                      </div>
                      <div>
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
                    <hr />
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='position-relative'>
                        <a
                          href='#'
                          className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                        >
                          <i className='fas fa-play'></i>
                        </a>
                        <span className='ms-2 mb-0 h6 fw-light'>
                          دیجیتال مارکتنیگ چیست؟
                        </span>
                      </div>
                      <div>
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
                    <hr />
                    <a
                      href='#'
                      className='btn btn-sm btn-dark mb-0'
                      data-bs-toggle='modal'
                      data-bs-target='#addTopic'
                    >
                      <i className='bi bi-plus-circle me-2'></i>
                      افزودن {index + 1}
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className='accordion-item mb-3'>
              <h6 className='accordion-header font-base' id='heading-1'>
                <button
                  className='accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapse-1'
                  aria-expanded='false'
                  aria-controls='collapse-1'
                >
                  معرفی دوره فتوشاپ
                </button>
              </h6>
              <div
                id='collapse-1'
                className='accordion-collapse collapse show'
                aria-labelledby='heading-1'
                data-bs-parent='#accordionExample2'
              >
                <div className='accordion-body mt-3'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='position-relative'>
                      <a
                        href='#'
                        className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                      >
                        <i className='fas fa-play'></i>
                      </a>
                      <span className='ms-2 mb-0 h6 fw-light'>معرفی دوره</span>
                    </div>
                    <div>
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
                  <hr />
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='position-relative'>
                      <a
                        href='#'
                        className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                      >
                        <i className='fas fa-play'></i>
                      </a>
                      <span className='ms-2 mb-0 h6 fw-light'>
                        دیجیتال مارکتنیگ چیست؟
                      </span>
                    </div>
                    <div>
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
                  <hr />
                  <a
                    href='#'
                    className='btn btn-sm btn-dark mb-0'
                    data-bs-toggle='modal'
                    data-bs-target='#addTopic'
                  >
                    <i className='bi bi-plus-circle me-2'></i>
                    افزودن
                  </a>
                </div>
              </div>
            </div>
            <div className='accordion-item mb-3'>
              <h6 className='accordion-header font-base' id='heading-2'>
                <button
                  className='accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapse-2'
                  aria-expanded='false'
                  aria-controls='collapse-2'
                >
                  آموزش کار به صورت متوسطه
                </button>
              </h6>
              <div
                id={`collapse-${2}`}
                className='accordion-collapse collapse'
                aria-labelledby='heading-2'
                data-bs-parent='#accordionExample2'
              >
                <div className='accordion-body mt-3'>
                  <a
                    href='#'
                    className='btn btn-sm btn-dark mb-0'
                    data-bs-toggle='modal'
                    data-bs-target='#addTopic'
                  >
                    <i className='bi bi-plus-circle me-2'></i>
                    افزودن
                  </a>
                </div>
              </div>
            </div>
            <div className='accordion-item mb-3'>
              <h6 className='accordion-header font-base' id='heading-3'>
                <button
                  className='accordion-button fw-bold collapsed rounded d-block pe-5'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapse-3'
                  aria-expanded='false'
                  aria-controls='collapse-3'
                >
                  چقدر باید به فروشندگان پیشنهاد بدهم؟
                </button>
              </h6>
              <div
                id='collapse-3'
                className='accordion-collapse collapse'
                aria-labelledby='heading-3'
                data-bs-parent='#accordionExample2'
              >
                <div className='accordion-body mt-3'>
                  <a
                    href='#'
                    className='btn btn-sm btn-dark mb-0'
                    data-bs-toggle='modal'
                    data-bs-target='#addTopic'
                  >
                    <i className='bi bi-plus-circle me-2'></i>
                    افزودن
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <div className='d-flex justify-content-between'>
            <button className='btn btn-secondary prev-btn mb-0'>
              مرحله قبل
            </button>
            <button className='btn btn-primary next-btn mb-0'>مرحله بعد</button>
          </div>
        </div>
      </div>
    </form>
  );
}

import React from 'react';
import {
  TCreateCourseInputsOne,
  TCreateCourseProps,
  TCreateCourseValidate,
} from '../createCourse';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateCourseValidateOne } from '../../../validations/createCourseValidate';

export default function One({
  // input,
  // handleSubmit,
  // errors,
  submit,
  // price,
}: any) {
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
    resolver: zodResolver(CreateCourseValidateOne),
  });

  const price = watch('price');

  const input: TCreateCourseInputsOne = {
    category: register('category'),
    level: register('level'),
    // image: register('image'),
    description: register('description'),
    duration: register('duration'),
    price: register('price'),
    discount_percent: register('discount_percent'),
    // certificate: register('certificate'),
    videos: register('videos'),
    short_description: register('short_description'),
    title: register('title'),
  };

  console.log(price);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(submit)}>
      <h4 className='fs-5 ff-vb'>جزئیات دوره</h4> <hr />
      {/* register your input into the hook by invoking the "register" function */}
      <div className='row g-4'>
        <div className='col-12'>
          <label className='form-label'>عنوان</label>
          <input
            className='form-control'
            type='text'
            {...input.title}
            placeholder='آموزش ساخت وب سایت خبری'
          />

          <ErrorMessage
            errors={errors}
            name='title'
            render={({ message }) => <p className='text-danger'>{message}</p>}
          />
        </div>
        <div className='col-12'>
          <label className='form-label'>توضیحات کوتاه</label>
          <textarea
            {...input.short_description}
            className='form-control'
            rows={2}
            placeholder='کلمات کلیدی'
          ></textarea>
          <ErrorMessage
            errors={errors}
            name='short_description'
            render={({ message }) => <p className='text-danger'>{message}</p>}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>دسته بندی</label>

          <select
            className='form-select  z-index-9 bg-transparent'
            {...input.category}
          >
            <option value=''>انتخاب</option>
            <option value='aa'>مهندسی</option>
            <option value='aa1'>پزشکی</option>
            <option value='aa2'>طراحی وب</option>
            <option value='aa3'>حسابداری</option>
            <option value='aa4'>برنامه نویسی</option>
          </select>
          <ErrorMessage
            errors={errors}
            name='category'
            render={({ message }) => <p className='text-danger'>{message}</p>}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>سطح دوره</label>
          <select
            className='form-select  z-index-9 bg-transparent'
            {...input.level}
          >
            <option value=''>انتخاب سطح</option>
            <option>همه</option>
            <option>مقدماتی</option>
            <option>متوسطه</option>
            <option>پیشرفته</option>
          </select>
          <ErrorMessage
            errors={errors}
            name='level'
            render={({ message }) => <p className='text-danger'>{message}</p>}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>مدت زمان دوره</label>
          <input
            className='form-control'
            {...input.duration}
            type='text'
            placeholder='4:33:00'
          />
          <ErrorMessage
            errors={errors}
            name='duration'
            render={({ message }) => <p className='text-danger'>{message}</p>}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>تعداد ویدیوها</label>
          <input
            className='form-control'
            {...input.videos}
            type='text'
            placeholder='19 ویدیو'
          />
          <ErrorMessage
            errors={errors}
            name='videos'
            render={({ message }) => <p className='text-danger'>{message}</p>}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>قیمت</label>
          <input
            type='text'
            className='form-control'
            placeholder='90,000 تومان'
            {...input.price}
          />
          {price && <p>{(price * 1000).toLocaleString()} تومان</p>}

          <ErrorMessage
            errors={errors}
            name='price'
            render={({ message }) => <p className='text-danger'>{message}</p>}
          />
        </div>
        <div className='col-md-6'>
          <label className='form-label'>تخفیف</label>
          <input
            className='form-control'
            type='text'
            placeholder='50%'
            {...input.discount_percent}
          />
          <div className='col-12 mt-1 mb-0'>
            <div className='form-check small mb-0'>
              <input
                className='form-check-input'
                type='checkbox'
                id='checkBox1'
              />
              <ErrorMessage
                errors={errors}
                name='discount_percent'
                render={({ message }) => (
                  <p className='text-danger'>{message}</p>
                )}
              />
              <label className='form-check-label' htmlFor='checkBox1'>
                فعالسازی تخفیف
              </label>
            </div>
          </div>
        </div>
        <div className='col-12'>
          <label className='form-label'>توضیحات </label>
          <textarea
            {...input.description}
            className='form-control'
            rows={2}
            placeholder='کلمات کلیدی'
          ></textarea>
          <ErrorMessage
            errors={errors}
            name='description'
            render={({ message }) => <p className='text-danger'>{message}</p>}
          />
        </div>
        <div className='d-flex justify-content-end mt-3'>
          <input
            type='submit'
            className='btn btn-primary next-btn mb-0 '
            value=' مرحله بعد'
          />
        </div>
      </div>
    </form>
  );
}

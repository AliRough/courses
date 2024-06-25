'use client';

import { ErrorMessage } from '@hookform/error-message';
import { TCreateCourseProps } from './createCourse';

const ProfileTeacherCreateCourseUi = ({
  input,
  handleSubmit,
  errors,
  submit,
  price,
  plus,
}: TCreateCourseProps) => {
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type='text' {...input.price} placeholder='price' />
      {price && <p>{(price * 1000).toLocaleString()} تومان</p>}
      {price && <div onClick={plus}>+</div>}

      {/* فقط ارور رو نمایش میده .دقت نام ها باید یکی باشن */}
      <ErrorMessage
        errors={errors}
        name='price'
        render={({ message }) => <p className='text-danger'>{message}</p>}
      />

      <button>کلیک</button>
    </form>
  );
};

export default ProfileTeacherCreateCourseUi;

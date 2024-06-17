'use client';

import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { authUserState } from '../../state/atoms';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { changePassValidate } from '../../validations/editProfileValidate';
import { ErrorMessage } from '@hookform/error-message';
import { useState } from 'react';
import { changeUserPass } from '../../api/authApi';
import { useCookies } from 'react-cookie';
import { useChangeUserPass } from '../../hooks/request/authUser';

const ProfileStudentChangePassword = () => {
  const [showPass, setSowPass] = useState(false);
  const { mutate: mutateChangeUserPass } = useChangeUserPass();

  const changePassHandler = async (data: any) => {
    mutateChangeUserPass(data);
  };
  const {
    // ساختار پارامتر
    register,
    // کنترل دکمه سابمت به صورت اتوماتیک حالت رفرش رو غیر فعال میکنه.
    handleSubmit,
    // اگه اروری تولید کرد انتقال بده
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(changePassValidate),
  });

  const input: any = {
    oldPassword: register('oldPassword'),
    password: register('password'),
    passwordConfirmation: register('passwordConfirmation'),
  };

  return (
    <>
      <div className='row g-4 justify-content-center'>
        <form onSubmit={handleSubmit(changePassHandler)} className=''>
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
                  {...input.oldPassword}
                />
              </div>
              <ErrorMessage
                errors={errors}
                name='oldPassword'
                render={({ message }) => (
                  <p className='text-danger'>{message}</p>
                )}
              />
              <div className='mb-3'>
                <label className='form-label'> رمز جدید</label>
                <div className='input-group'>
                  <input
                    className='form-control'
                    type={showPass ? 'text' : 'password'}
                    placeholder='********'
                    {...input.password}
                  />

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSowPass(!showPass);
                    }}
                    className='input-group-text p-0 bg-transparent'
                  >
                    <i className='far fa-eye cursor-pointer p-2 w-40px'></i>
                  </button>
                </div>
                <ErrorMessage
                  errors={errors}
                  name='password'
                  render={({ message }) => (
                    <p className='text-danger'>{message}</p>
                  )}
                />
                <div className='rounded mt-1' id='psw-strength'></div>
              </div>
              <div>
                <label className='form-label'>تایید رمز جدید</label>
                <input
                  className='form-control'
                  type='password'
                  placeholder='********'
                  {...input.passwordConfirmation}
                />
              </div>
              <ErrorMessage
                errors={errors}
                name='passwordConfirmation'
                render={({ message }) => (
                  <p className='text-danger'>{message}</p>
                )}
              />
              <div className='d-flex justify-content-end mt-4'>
                <button type='submit' className='btn btn-primary mb-0'>
                  تغییر رمز
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileStudentChangePassword;

'use client';

import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { authUserState } from '../../state/atoms';

const ProfileStudentChangePassword = () => {
  console.log('Not completed');
  const [authUserdata, setAuthUser]: any = useRecoilState(authUserState);

  return (
    <>
      <div className='row g-4 justify-content-center'>
        <div className=''>
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

export default ProfileStudentChangePassword;

'use client';

import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { authUserState } from '../../state/atoms';
import { useCookies } from 'react-cookie';
import { sendVerificationEmail } from '../../api/authApi';

const ProfileStudentEditProfile = () => {
  console.log('Not completed');
  const [authUserdata, setAuthUser]: any = useRecoilState(authUserState);
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);

  const sendVerification = async (e: any) => {
    e.preventDefault();
    console.log(cookies.Authorization);

    const data = await sendVerificationEmail(cookies.Authorization);
  };
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
                      src='/images/avatar/User.png'
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
            <div className='col-md-6'>
              <label className='form-label'>نام</label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  value={authUserdata.name}
                  placeholder='نام'
                />
              </div>
            </div>

            <div className='col-md-6'>
              <label className='form-label'>ایمیل</label>
              <div className='tw-relative'>
                <input
                  className='form-control'
                  type='email'
                  value={authUserdata.email}
                  placeholder='ایمیل'
                />
                {!authUserdata.emailVerifiedAt ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='tw-h-8 tw-absolute end-0 top-0 text-danger m-1'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    className='tw-h-8 tw-absolute end-0 top-0 text-success m-1'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                    />
                  </svg>
                )}
              </div>
              <div
                className={`${authUserdata.emailVerifiedAt ? 'd-none' : 'd-flex'} mt-2 tw-text-sm gap-1`}
              >
                <p className='text-danger m-0 py-1 '>
                  ایمیل خود را تایید کنید{' '}
                </p>
                <button
                  className=' btn btn-outline-primary tw-text-sm p-0 px-2 py-1 '
                  onClick={sendVerification}
                >
                  ارسال دوباره{' '}
                </button>
              </div>
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

export default ProfileStudentEditProfile;

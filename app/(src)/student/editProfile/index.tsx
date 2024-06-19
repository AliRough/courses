'use client';

import Image from 'next/image';
import { useCookies } from 'react-cookie';
import { sendVerificationEmail } from '../../api/authApi';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditProfileValidata } from '../../validations/editProfileValidate';
import { useEffect } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import {
  useChangeAvatar,
  useDeleteAvatar,
  useEditUserData,
  useGetUser,
} from '../../hooks/request/authUser';
import Loading from '@/app/loading';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const ProfileStudentEditProfile = () => {
  const { mutate: mutateDeleteAvatar, isPending: isDeleteAvatarPending } =
    useDeleteAvatar();
  const { mutate: mutateChangeAvatar, isPending: isChangeAvatarPending } =
    useChangeAvatar();
  const { mutate: mutateEditUserData, isPending: isEditUserDataPending } =
    useEditUserData();

  const deleteAvatarHandler = async (e: any) => {
    e.preventDefault();

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='tw-w-96 tw-max-w-[100vw] tw-p-5 tw-bg-gray-100 tw-rounded-xl'>
            <h1 className='tw-text-xl'>حذف پروفایل</h1>
            <p className='tw-my-8'>آیا مطمئن هستید ؟؟</p>
            <div className='tw-w-full tw-flex tw-justify-between'>
              <button
                className='btn btn-secondary w-5 tw-py-1 m-0'
                onClick={onClose}
              >
                خیر
              </button>
              <button
                className='btn btn-danger m-0 tw-py-1'
                onClick={() => {
                  mutateDeleteAvatar();
                  onClose();
                }}
              >
                بله
              </button>
            </div>
          </div>
        );
      },
    });
  };
  console.log('Not completed');
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
  const { data: userData } = useGetUser();

  const sendVerification = async (e: any) => {
    e.preventDefault();
    console.log(cookies.Authorization);
    const data = await sendVerificationEmail(cookies.Authorization);
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
    resolver: zodResolver(EditProfileValidata),
  });

  const input: any = {
    aliasName: register('aliasName'),
    name: register('name'),
  };

  const editeProfileHandler = (data: any) => {
    mutateEditUserData(data);
  };

  useEffect(() => {
    console.log('useEffect', userData);

    setValue('name', userData?.name);
    setValue('aliasName', userData?.aliasName);
  }, [userData]);

  const changeUserAvatarHandler = async (e: any) => {
    mutateChangeAvatar({ avatar: e.target.files[0] });
  };

  return (
    <>
      {Boolean(
        isDeleteAvatarPending || isChangeAvatarPending || isEditUserDataPending,
      ) && <Loading />}
      <div className='card bg-transparent border rounded-3'>
        <div className='card-header bg-transparent border-bottom'>
          <h3 className='card-header-title mb-0 ff-vb fs-5'>ویرایش پروفایل</h3>
        </div>
        <div className='card-body'>
          <form
            className='row g-4'
            onSubmit={handleSubmit(editeProfileHandler)}
          >
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
                      src={
                        (userData?.avatar &&
                          process.env.NEXT_PUBLIC_APP_URL + userData?.avatar) ||
                        '/images/avatar/User.png'
                      }
                      alt=''
                    />
                  </span>
                  {userData?.avatar && (
                    <button
                      type='button'
                      className='uploadremove'
                      onClick={deleteAvatarHandler}
                    >
                      <i className='bi bi-x text-white tw-text-xl'></i>
                    </button>
                  )}
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
                  onChange={changeUserAvatarHandler}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>نام</label>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='نام'
                  {...input.name}
                />
              </div>
              <ErrorMessage
                errors={errors}
                name='name'
                render={({ message }) => (
                  <p className='text-danger'>{message}</p>
                )}
              />
            </div>

            <div className='col-md-6'>
              <label className='form-label'>نام مستعار</label>
              <div className='tw-relative'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='aliko'
                  {...input.aliasName}
                />
                <ErrorMessage
                  errors={errors}
                  name='aliasName'
                  render={({ message }) => (
                    <p className='text-danger'>{message}</p>
                  )}
                />
              </div>
            </div>
            <div className='col-md-6'>
              <label className='form-label'>ایمیل</label>
              <div className='tw-relative'>
                <input
                  className='form-control'
                  type='email'
                  placeholder='ایمیل'
                  value={userData?.email}
                />

                {!userData?.emailVerifiedAt ? (
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
                className={`${userData?.emailVerifiedAt ? 'd-none' : 'd-flex'} mt-2 tw-text-sm gap-1`}
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
              <button type='submit' className='btn btn-primary mb-0'>
                ذخیره
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileStudentEditProfile;

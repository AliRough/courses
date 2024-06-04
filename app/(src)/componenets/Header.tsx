// import { LayoutProps } from '@/.next/types/app/layout';
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import Link from 'next/link';
import { getHeader } from '@/app/(src)/api/layoutApi';
import { useRecoilState } from 'recoil';
import { authUserState } from '../state/atoms';
import { useCookies } from 'react-cookie';
import * as api from '@/app/(src)/api/authApi';
import { useGetUser, useLogOutUser } from '../hooks/request/authUser';
import { boolean } from 'zod';
import { getAllCategories } from '../api/courseApi';
import { useGetAllCategories } from '../hooks/request/requestCourse';

export default function Header({ children }: any) {
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
  const { data: userData } = useGetUser(cookies.Authorization);
  const { data: allCategoriesData } = useGetAllCategories();

  console.log('allCategoriesData is', allCategoriesData);

  // const [authUserdata, setAuthUser]: any = useRecoilState(authUserState);

  // if (!authUserdata.name && userData) {
  //   setAuthUser(userData.data);
  // }
  let authUserdata = userData;

  console.log('hooooooooooook', userData);

  return (
    <>
      {/* Header START */}
      <header className='navbar-light bg-transparent container max-sm:tw-px-0   sm:tw-mt-4  px-0  '>
        {/* Nav START */}
        <nav className='navbar navbar-expand-lg z-index-9 tw-bg-white sm:tw-rounded-3xl tw-shadow-md tw-shadow-gray-500/25'>
          <div className='container'>
            {/* Logo START */}
            <Link className='navbar-brand py-3' href='/'>
              <img
                className='light-mode-item navbar-brand-item md:!tw-h-16 !tw-h-12'
                src='/images/OIG4.png'
                alt='logo'
              />
            </Link>
            {/* Logo END */}
            {/* Responsive navbar toggler */}
            <button
              className='navbar-toggler ms-auto'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarCollapse2'
              aria-controls='navbarCollapse2'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-animation'>
                <span />
                <span />
                <span />
              </span>
            </button>
            {/* Main navbar START */}
            <div className='navbar-collapse collapse' id='navbarCollapse'>
              {/* Nav Search START */}
              <div className='col-xxl-6'>
                <div className='nav my-3 my-xl-0 px-4 flex-nowrap align-items-center'>
                  <div className='nav-item w-100'>
                    <form className='rounded position-relative tw-border tw-border-gray-100 tw-shadow-sm tw-bg-[#f3f4f6] rounded-3'>
                      <input
                        className='form-control pe-5   bg-opacity-10 border-0 bg-transparent'
                        type='search'
                        placeholder='جستجو...'
                        aria-label='Search'
                      />
                      <button
                        className='btn btn-link bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y'
                        type='submit'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='size-5 tw-w-5 text-primary '
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z'
                          />
                        </svg>{' '}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Nav Search END */}
              {/* Nav Main menu START */}
              <ul className='navbar-nav navbar-nav-scroll ms-auto '>
                {/* Nav item 1 Demos */}
                <li className='nav-item dropdown'>
                  <a className='nav-link' href='#'>
                    بزرگسالان
                  </a>
                </li>
                {/* Nav item 2 Eduport Business */}
                <li className='nav-item dropdown'>
                  <a className='nav-link' href='#'>
                    نوجوانان
                  </a>
                </li>
                {/* Nav item 3 My learning */}
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    کودکان
                  </a>
                </li>
              </ul>
              {/* Nav Main menu END */}
            </div>
            {/* Main navbar END */}
            {userData?.name ? (
              <ul className='nav flex-row align-items-center list-unstyled ms-xl-auto '>
                {/* Wishlist START */}
                <li className='nav-item ms-0 ms-sm-2 d-none d-sm-block'>
                  <a className='btn btn-light btn-round mb-0' href='#'>
                    {' '}
                    <i className='bi bi-heart fa-fw' />
                  </a>
                </li>
                {/* Wishlist END */}
                {/* Notification dropdown START */}
                <li className='nav-item ms-2 ms-sm-3 dropdown  d-none d-sm-block'>
                  {/* Notification button */}
                  <a
                    className='btn btn-light btn-round mb-0'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                    data-bs-auto-close='outside'
                  >
                    <i className='bi bi-bell fa-fw' />
                  </a>
                  {/* Notification dote */}
                  <span className='notif-badge animation-blink' />
                  {/* Notification dropdown menu START */}
                  <div className='dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg border-0'>
                    <div className='card bg-transparent'>
                      <div className='card-header bg-transparent border-bottom py-4 d-flex justify-content-between align-items-center'>
                        <h6 className='m-0'>
                          پیام ها{' '}
                          <span className='badge bg-danger bg-opacity-10 text-danger ms-2'>
                            2 خبر جدید
                          </span>
                        </h6>
                        <a className='small' href='#'>
                          حذف همه
                        </a>
                      </div>
                      <div className='card-body p-0'>
                        <ul className='list-group list-unstyled list-group-flush'>
                          {/* Notif item */}
                          <li>
                            <a
                              href='#'
                              className='list-group-item-action border-0 border-bottom d-flex p-3'
                            >
                              <div className='me-3'>
                                <div className='avatar avatar-md'>
                                  <img
                                    className='avatar-img rounded-circle'
                                    src='/images/avatar/03.jpg'
                                    alt='avatar'
                                  />
                                </div>
                              </div>
                              <div>
                                <h6 className='mb-1'>
                                  به روز رسانی نسخه 2.3 با موفقیت انجام شد
                                </h6>
                                <p className='small text-body m-0'>
                                  چه خبر! با ویژگی های جدید آشنا شوید
                                </p>
                                <small className='text-body'>5 دقیقه قبل</small>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* Button */}
                      <div className='card-footer bg-transparent border-0 py-3 text-center position-relative'>
                        <a href='#' className='stretched-link'>
                          مشاهده تمام فعالیت های ورودی
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Notification dropdown menu END */}
                </li>
                {/* Notification dropdown END */}
                {/* Profile dropdown START */}
                <Profile {...userData} />
              </ul>
            ) : (
              <Link href={'/auth/login'}>
                <div className='navbar-nav  d-inline-block lg:tw-ms-3  '>
                  <button className='btn btn-primary-soft text-primary hover:!tw-bg-[#5c6bc0] max-lg:!tw-text-gray-500 max-lg:tw-bg-transparent  mb-0  lg:tw-px-4 lg:tw-py-2 tw-p-1 tw-py-0'>
                    <i className='fas fa-sign-in-alt lg:tw-text-sm tw-text-xl lg:tw-me-2 ' />
                    <span className='d-none d-lg-inline-block   '>
                      وارد شوید
                    </span>
                  </button>
                </div>
              </Link>
            )}
          </div>
        </nav>
        {/* Nav END */}
        {/* Category Nav link START */}
        <nav className='navbar navbar-expand-lg nav-category border-0 '>
          <div className='container px-0'>
            {/* Responsive navbar toggler */}

            {/* Main navbar START */}
            <div
              className='navbar-collapse w-100 collapse max-sm:tw-rounded-b-xl '
              id='navbarCollapse2'
            >
              {/* Nav Main menu START */}
              <ul
                className={`navbar-nav navbar-nav-scroll mx-auto tw-bg-gray-200 rounded-bottom-4 ${allCategoriesData ? 'xl:tw-h-12' : 'tw-h-0 overflow-hidden'} tw-transition-all `}
              >
                {allCategoriesData?.data.map((item: any) => {
                  return (
                    <li className='nav-item dropdown ' key={item.id}>
                      <Link
                        className={`nav-link tw-text-gray-600  ${item.children ? ' dropdown-toggle ' : ''}`}
                        href={item?.src || `/course/all?category=${item?.id}`}
                        id={item.children && 'demoMenu'}
                        data-bs-toggle={item.children && 'dropdown'}
                        aria-haspopup={item.children && 'true'}
                        aria-expanded={item.children && 'false'}
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <ul
                          className='dropdown-menu '
                          aria-labelledby='demoMenu'
                        >
                          {item.children.map((subItem: any) => {
                            return (
                              <li
                                className='dropdown-submenu dropend'
                                key={subItem.id}
                              >
                                <Link
                                  className={`dropdown-item  ${subItem.children && ' dropdown-toggle '}`}
                                  href={subItem?.src || '#'}
                                >
                                  {subItem.title}
                                </Link>
                                {subItem.children && (
                                  <ul
                                    className='dropdown-menu dropdown-menu-start bg-light'
                                    data-bs-popper='none'
                                  >
                                    {subItem.children.map((subSubItem: any) => (
                                      <li key={subSubItem.id}>
                                        <Link
                                          className='dropdown-item'
                                          href={subSubItem?.src || '#'}
                                        >
                                          {subSubItem.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
              {/* Nav Main menu END */}
            </div>
            {/* Main navbar END */}
          </div>
        </nav>
        {/* Category Nav link END */}
      </header>
      {/* Header END */}
    </>
  );
}

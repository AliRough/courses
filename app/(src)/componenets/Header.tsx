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

export default function Header({ children }: any) {
  const [headerRes, setHeaderRes]: any = useState({
    data: {
      menu: [
        {
          id: 1,
          title: 'فرانت اند',
          children: [
            {
              id: 1,
              title: 'آموزش 1',
            },
            {
              id: 2,
              title: 'آموزش 2',
            },
            {
              id: 3,
              title: 'آموزش 3',
            },
            {
              id: 4,
              title: 'آموزش 4',
            },
            {
              id: 5,
              title: 'آموزش 5',
            },
            {
              id: 6,
              title: 'آموزش 6',
            },
            {
              id: 7,
              title: 'آموزش 7',
            },
            {
              id: 8,
              title: 'آموزش 8',
            },
            {
              id: 9,
              title: 'آموزش 9',
            },
            {
              id: 10,
              title: 'آموزش 10',
            },
            {
              id: 11,
              title: 'آموزش 11',
            },
          ],
        },
        {
          id: 2,
          title: 'امنیت',
          children: [
            {
              id: 1,
              title: 'نقشه راه',
              children: [
                {
                  id: 1,
                  title: 'دسته بندی',
                },
                {
                  id: 2,
                  title: 'نقشه راه 1',
                },
                {
                  id: 3,
                  title: 'نقشه راه 2',
                },
                {
                  id: 4,
                  title: 'نقشه راه 3',
                },
                {
                  id: 5,
                  title: 'نقشه راه 4',
                },
              ],
            },
            {
              id: 2,
              title: ' شبکه با گرایش امنیت',
            },
            {
              id: 3,
              title: ' لینوکس با گرایش امنیت',
            },
            {
              id: 4,
              title: ' آموزش هکر قانونمند ',
            },
            {
              id: 5,
              title: ' آموزش کالی لینوکس',
            },
            {
              id: 6,
              title: ' آموزش پایتون سیاه',
            },
            {
              id: 7,
              title: ' آموزش Burp Suite',
            },
            {
              id: 8,
              title: ' آموزش جاوااسکریپت سیاه',
            },
          ],
        },
        {
          id: 3,
          title: 'پایتون',
        },
        {
          id: 4,
          title: 'پی اچ پی',
        },
        {
          id: 5,
          title: 'ارتقای مهارت ها',
        },
        {
          id: 6,
          title: 'مقالات',
        },
        {
          id: 1,
          title: 'سایت',
          children: [
            {
              id: 1,
              title: ' صفحه دوره',
              src: '/course',
            },
            {
              id: 1,
              title: ' صفحه همه دوره',
              src: '/course/all',
            },
            {
              id: 1,
              title: ' صفحه مدرس',
              src: '/profile/t/dashboard',
            },
          ],
        },
      ],
      megamenu: [],
    },
  });
  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);

  const [authUserdata, setAuthUser]: any = useRecoilState(authUserState);

  // console.log(localStorage.getItem('userData'));
  // let item = localStorage.getItem('userData');
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let data: any = await getHeader();

  //     setHeaderRes(data);
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    if (cookies.Authorization && !authUserdata.email) {
      const fetchData = async () => {
        const { data } = await api.getUserByToken(cookies.Authorization);

        setAuthUser(data);
      };
      fetchData();

      // setAuthUser(cookies.Authorization);
    }
  }, []);
  // await get
  return (
    <>
      <>
        <>
          {/* Header START */}
          <header className='navbar-light bg-transparent  '>
            {/* Nav START */}
            <nav className='navbar navbar-expand-xl z-index-9'>
              <div className='container'>
                {/* Logo START */}
                <Link className='navbar-brand' href='/'>
                  <img
                    className='light-mode-item navbar-brand-item'
                    src='/images/logo.svg'
                    alt='logo'
                  />
                  <img
                    className='dark-mode-item navbar-brand-item'
                    src='/images/logo-light.svg'
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
                        <form className='rounded position-relative tw-border tw-border-gray-100 tw-shadow-sm '>
                          <input
                            className='form-control pe-5   bg-opacity-10 border-0'
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
                              className='size-5 tw-w-5  '
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
                  <ul className='navbar-nav navbar-nav-scroll ms-auto'>
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
                {authUserdata.name ? (
                  <ul className='nav flex-row align-items-center list-unstyled ms-xl-auto'>
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
                                    <small className='text-body'>
                                      5 دقیقه قبل
                                    </small>
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
                    <Profile {...authUserdata} />
                  </ul>
                ) : (
                  <Link href={'/auth/login'}>
                    <div className='navbar-nav  d-inline-block lg:tw-ms-3 '>
                      <button className='btn btn-primary-soft text-primary max-lg:!tw-text-gray-500 max-lg:tw-bg-transparent  mb-0  lg:tw-px-4 lg:tw-py-2 tw-p-1 tw-py-0'>
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
            <hr className='my-0' />
            {/* Category Nav link START */}
            <nav className='navbar navbar-expand-xl nav-category'>
              <div className='container px-0'>
                {/* Responsive navbar toggler */}

                {/* Main navbar START */}
                <div
                  className='navbar-collapse w-100 collapse'
                  id='navbarCollapse2'
                >
                  {/* Nav Main menu START */}
                  <ul className='navbar-nav navbar-nav-scroll mx-auto  '>
                    {headerRes?.data?.menu?.map((item: any) => {
                      return (
                        <li className='nav-item dropdown ' key={item.id}>
                          <Link
                            className={`nav-link   ${item.children && ' dropdown-toggle '}`}
                            href={item?.src || '#'}
                            id='demoMenu'
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            {item.title}
                          </Link>
                          {item.children && (
                            <ul
                              className='dropdown-menu bg-light'
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
                                        {subItem.children.map(
                                          (subSubItem: any) => (
                                            <li key={subSubItem.id}>
                                              <Link
                                                className='dropdown-item'
                                                href={subSubItem?.src || '#'}
                                              >
                                                {subSubItem.title}
                                              </Link>
                                            </li>
                                          ),
                                        )}
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
      </>
    </>
  );
  <>
    {/* Header START */}
    <header className='navbar-light navbar-sticky header-static bg-light'>
      {/* Nav START */}
      <nav className='navbar navbar-expand-xl'>
        <div className='container-fluid px-3 px-xl-5'>
          {/* Logo START */}
          <Link className='navbar-brand' href='/'>
            <Image
              unoptimized={true}
              width={100}
              height={100}
              className='light-mode-item navbar-brand-item'
              src='/images/logo.svg'
              alt='logo'
            />
            <Image
              unoptimized={true}
              width={100}
              height={100}
              className='dark-mode-item navbar-brand-item'
              src='/images/logo-light.svg'
              alt='logo'
            />
          </Link>
          {/* Logo END */}
          {/* Responsive navbar toggler */}
          <button
            className='navbar-toggler ms-auto'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
            aria-controls='navbarCollapse'
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
          <div className='navbar-collapse w-100 collapse' id='navbarCollapse'>
            {/* Nav Main menu START */}
            <ul className='navbar-nav navbar-nav-scroll mx-auto  '>
              {headerRes?.data?.menu?.map((item: any) => {
                return (
                  <li className='nav-item dropdown ' key={item.id}>
                    <Link
                      className={`nav-link   ${item.children && ' dropdown-toggle '}`}
                      href={item?.src || '#'}
                      id='demoMenu'
                      data-bs-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      {item.title}
                    </Link>
                    {item.children && (
                      <ul
                        className='dropdown-menu bg-light'
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
            {/* Nav Search START */}
            <div className='nav my-3 my-xl-0 px-4 flex-nowrap align-items-center'>
              <div className='nav-item w-100'>
                <form className='position-relative'>
                  <input
                    className='form-control pe-5 bg-transparent'
                    type='search'
                    placeholder='جستجو...'
                    aria-label='Search'
                  />
                  <button
                    className='bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset'
                    type='submit'
                  >
                    <i className='fas fa-search fs-6 ' />
                  </button>
                </form>
              </div>
            </div>
            {/* Nav Search END */}
          </div>
          {/* Main navbar END */}
          {/* Profile START */}
          {/* Profile START */}
          {authUserdata.name ? (
            <Profile {...authUserdata} />
          ) : (
            <Link href={'/auth/login'}>
              <div className='navbar-nav d-none d-lg-inline-block'>
                <button className='btn btn-primary-soft mb-0'>
                  <i className='fas fa-sign-in-alt me-2' />
                  وارد شوید
                </button>
              </div>
            </Link>
          )}
        </div>
      </nav>
      {/* Nav END */}
    </header>
    {/* Header END */}
  </>;
}

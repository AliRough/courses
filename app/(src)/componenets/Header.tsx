// import { LayoutProps } from '@/.next/types/app/layout';
'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import Link from 'next/link';
import { getHeader } from '@/app/(src)/api/layoutApi';
import { useRecoilState } from 'recoil';
import { authUserState } from '../state/atoms';

export default function Header({ children }: any) {
  const [headerRes, setHeaderRes]:any = useState();

  const [authUserdata, setAuthUser] = useRecoilState(authUserState);
  console.log('auth', authUserdata.email);

  console.log(localStorage.getItem('userData'));
  let item = localStorage.getItem('userData');
  useEffect(() => {
    const fetchData = async () => {
      let data: any = await getHeader();
      setHeaderRes(data);
      if (item) {
        setAuthUser(JSON.parse(item));
      }
    };
    fetchData();
  }, []);
  // await get
  return (
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
              <ul className='navbar-nav navbar-nav-scroll mx-auto'>
                {headerRes?.data?.menu?.map((item: any) => {
                  console.log(item?.src);

                  return (
                    <li className='nav-item dropdown ' key={item.id}>
                      <Link
                        className={`nav-link   ${item.children && 'dropdown-toggle'}`}
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
              <Link href={'/auth/signUp'}>
                <div className='navbar-nav d-none d-lg-inline-block'>
                  <button className='btn btn-danger-soft mb-0'>
                    <i className='fas fa-sign-in-alt me-2' />
                    ثبت نام
                  </button>
                </div>
              </Link>
            )}
          </div>
        </nav>
        {/* Nav END */}
      </header>
      {/* Header END */}
    </>
  );
}

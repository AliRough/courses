import { LayoutProps } from '@/.next/types/app/layout';
import Image from 'next/image';
import React from 'react';
import Profile from './Profile';
import Link from 'next/link';
import { getHeader } from '@/app/(src)/api/layoutApi';

export default async function Header({ children }: LayoutProps) {
  const { data } = await getHeader();

  // await get
  return (
    <>
      {/* Header START */}
      <header className='navbar-light navbar-sticky header-static'>
        {/* Nav START */}
        <nav className='navbar navbar-expand-xl'>
          <div className='container-fluid px-3 px-xl-5'>
            {/* Logo START */}
            <Link className='navbar-brand' href='/'>
              <Image
                width={100}
                height={100}
                className='light-mode-item navbar-brand-item'
                src='/images/logo.svg'
                alt='logo'
              />
              <Image
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
                {data?.menu.map((item: any) => {
                  return (
                    <li className='nav-item dropdown' key={item.id}>
                      <Link
                        className={`nav-link   ${item.children && 'dropdown-toggle'}`}
                        href='#'
                        id='demoMenu'
                        data-bs-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        {item.title}
                      </Link>
                      {item.children && (
                        <ul
                          className='dropdown-menu'
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
                                  href='#'
                                >
                                  {subItem.title}
                                </Link>
                                {subItem.children && (
                                  <ul
                                    className='dropdown-menu dropdown-menu-start'
                                    data-bs-popper='none'
                                  >
                                    {subItem.children.map((subSubItem: any) => (
                                      <li key={subItem.id}>
                                        {' '}
                                        <Link
                                          className='dropdown-item'
                                          href='course-categories.html'
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

            <Profile />
            {/* Profile START */}
          </div>
        </nav>
        {/* Nav END */}
      </header>
      {/* Header END */}
    </>
  );
}

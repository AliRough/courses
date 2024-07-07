// import { LayoutProps } from '@/.next/types/app/layout';
'use client';
import React, { useState } from 'react';
import Profile from './Profile';
import Link from 'next/link';
import { useGetUser } from '../hooks/request/authUser';
import { useGetAllCategories } from '../hooks/request/requestCourse';
import Loading from '@/app/loading';
import { routes } from '../routes';
import { useRecoilState } from 'recoil';
import { cartState } from '../state/atoms';

export default function Header({ children }: any) {
  const { data: userData, isPending: isUserPending } = useGetUser();
  const { data: allCategoriesData, isPending: isCategoryPending } =
    useGetAllCategories();
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useRecoilState<any>(cartState);

  console.log(cart);
  let removeFromCart = (e: any, cId: any) => {
    e.preventDefault();
    console.log(
      e.target.parentElement.parentElement.parentElement.parentElement,
    );

    e.target.parentElement.parentElement.parentElement.parentElement.classList.remove(
      '-tw-translate-x-full',
    );
    setTimeout(() => {
      setCart((cart: any) => {
        let newCart = cart?.filter((cartCourse: any) => {
          console.log(cartCourse?.id !== cId);
          return cartCourse?.id !== cId;
        });
        console.log(newCart);

        if (newCart) {
          return [...newCart];
        }
      });
    }, 500);
  };
  return (
    <>
      {Boolean(isUserPending) && <Loading />}
      {/* Header START */}
      <header className='navbar-light bg-transparent container max-sm:tw-px-0   sm:tw-mt-4  px-0 tw-mb-5 '>
        {/* Nav START */}
        <nav className='navbar navbar-expand-lg z-index-9 tw-bg-white sm:tw-rounded-3xl tw-shadow-md tw-shadow-gray-500/25 px-3'>
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
            </div>
            {/* Main navbar END */}

            {/* Wishlist START */}

            <div
              className='tw-relative tw-flex tw-justify-center tw-items-center  overflow-visible mb-0  '
              tabIndex={0}
              onBlur={(e) => {
                console.log(e);
                setShowCart(false);
              }}
            >
              {' '}
              <div
                className='tw-flex tw-justify-center tw-items-center  btn btn-light btn-round mb-0 '
                onClick={() => setShowCart(!showCart)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='tw-w-5 '
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                  />
                </svg>
              </div>
              <div
                className={`tw-absolute  tw-top-full tw-flex tw-flex-col tw-bg-white p-1 mt-2 tw-rounded-lg  tw-shadow-md tw-border ${showCart ? '' : 'tw-hidden'}`}
              >
                <ul className='tw-relative !tw-pr-0 tw-flex tw-flex-col tw-min-w-72  tw-max-h-96 tw-w-max  overflow-y-auto tw-min-h-56 mb-0 tw-divide-y tw-transition-all tw-duration-300'>
                  {cart[0] ? (
                    cart?.map((cartCourse: any) => (
                      <li
                        key={cartCourse.id}
                        className='tw-relative hover:tw-bg-gray-100 tw-transition-all tw-duration-300 tw-left-full -tw-translate-x-full '
                      >
                        <div className=' tw-flex   gap-2 p-2 px-2 '>
                          <div className='tw-relative tw-w-max tw-top-0 tw-left-0 tw-flex tw-items-center tw-justify-end'>
                            <div className='tw-rounded-lg tw-transition-all tw-duration-300  hover:tw-bg-red-500 hover:tw-text-white'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                className='tw-w-6 '
                              >
                                <path d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z' />
                              </svg>
                              <button
                                className='tw-absolute tw-w-full tw-h-full tw-top-0 tw-left-0 '
                                onClick={(e) =>
                                  removeFromCart(e, cartCourse?.id)
                                }
                              ></button>
                            </div>
                          </div>
                          <img
                            className='tw-aspect-square tw-object-cover tw-w-14 tw-rounded-lg'
                            src={cartCourse?.cover}
                            alt=''
                          />
                          <div className='tw-w-full '>
                            <h5 className='tw-text-sm tw-font-normal tw-w-max'>
                              {cartCourse?.title}{' '}
                            </h5>
                            <span className='tw-block tw-w-full tw-text-left tw-text-sm '>
                              {cartCourse?.price === 0
                                ? 'رایگان'
                                : cartCourse?.price}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li className='p-2 tw-border tw-border-red-400 tw-text-red-600 tw-rounded lg !tw-font-normal tw-text-sm m-2 tw-w-max mx-auto'>
                      سبد خرید شما در حال حاضر خالی است!
                    </li>
                  )}
                </ul>

                <button
                  disabled={!cart[0]}
                  className=' btn btn-primary bottom-0 tw-w-full tw-m-0 disabled:tw-opacity-50'
                >
                  نهایی کردن خرید
                </button>
              </div>
            </div>
            {/* Wishlist END */}

            {userData?.name ? (
              <ul className='nav flex-row align-items-center list-unstyled ms-xl-auto '>
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
                        href={
                          `${routes.courses}/all?category=${item?.slug}` || `#`
                        }
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

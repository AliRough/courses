import { LayoutProps } from '@/.next/types/app/layout'
import Image from 'next/image'
import Script from 'next/script'
import React from 'react'
import Profile from './Profile'
import Link from 'next/link'

export default function Header({children}:LayoutProps) {

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
              {/* Nav category menu START */}
              <ul className='navbar-nav navbar-nav-scroll me-auto'>
                {/* Nav item 1 Demos */}
                <li className='nav-item dropdown dropdown-menu-shadow-stacked'>
                  <a
                    className='nav-link bg-primary bg-opacity-10 rounded-3 text-primary px-3 py-3 py-xl-0'
                    href='#'
                    id='categoryMenu'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='bi bi-ui-radios-grid me-2' />
                    <span>دسته بندی</span>
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='categoryMenu'>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        برنامه نویسی
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        {/* dropdown submenu open right */}
                        <li className='dropdown-submenu dropend'>
                          <a className='dropdown-item dropdown-toggle' href='#'>
                            طراحی وب
                          </a>
                          <ul className='dropdown-menu' data-bs-popper='none'>
                            <li>
                              {" "}
                              <a className='dropdown-item' href='#'>
                                CSS
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className='dropdown-item' href='#'>
                                JavaScript
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className='dropdown-item' href='#'>
                                Angular
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className='dropdown-item' href='#'>
                                PHP
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className='dropdown-item' href='#'>
                                HTML
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className='dropdown-item' href='#'>
                                React
                              </a>{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='#'>
                            بانک های اطلاعاتی
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='#'>
                            برنامه نویسی موبایل
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='#'>
                            برنامه نویسی وب
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='#'>
                            سیستم عامل
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='#'>
                            مهندسی نرم افزار
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='#'>
                            مدیریت پروژه
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='#'>
                        طراحی وب
                      </a>
                    </li>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        دیجیتال مارکتینگ
                      </a>
                      <div
                        className='dropdown-menu dropdown-menu-start dropdown-width-lg'
                        data-bs-popper='none'
                      >
                        <div className='row p-4'>
                          {/* Dropdown column item */}
                          <div className='col-xl-6 col-xxl-4 mb-4 mb-xl-0'>
                            <h6 className='mb-0'>دسته بندی ها</h6>
                            <hr /> {/* Divider */}
                            <ul className='list-unstyled'>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  اینستاگرام مارکتینگ
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  تبلیغ نویسی
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  سرچ کنسول
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  جذب ترافیک موثر
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  افزایش فروش
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  ویدیو مارکتینگ
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  آموزش GTmetrix
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  آموزش Alex
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  استراتژی تولید محتوا
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  سئو و بهینه سازی
                                </a>{" "}
                              </li>
                              <li>
                                {" "}
                                <a className='dropdown-item' href='#'>
                                  اصول قرارداد نویسی
                                </a>{" "}
                              </li>
                            </ul>
                          </div>
                          {/* Dropdown column item */}
                          <div className='col-xl-6 col-xxl-4 mb-4 mb-xl-0'>
                            <h6 className='mb-0'>درجه بندی مدرک</h6>
                            <hr /> {/* Divider */}
                            {/* Dropdown item */}
                            <div className='d-flex mb-4 position-relative'>
                              <Image
                                width={100}
                                height={100}
                                src='/images/client/uni-logo-01.svg'
                                className='icon-md'
                                alt=''
                              />
                              <div className='ms-3'>
                                <a
                                  className='stretched-link h6 mb-0 fw-normal'
                                  href='#'
                                >
                                  مدرک بین المللی سطح مبتدی
                                </a>
                                <p className='mb-0 small'>لیسانس کامپیوتر</p>
                              </div>
                            </div>
                            {/* Dropdown item */}
                            <div className='d-flex mb-4 position-relative'>
                              <Image
                                width={100}
                                height={100}
                                src='/images/client/uni-logo-02.svg'
                                className='icon-md'
                                alt=''
                              />
                              <div className='ms-3'>
                                <a
                                  className='stretched-link h6 mb-0 fw-normal'
                                  href='#'
                                >
                                  مدرک بین المللی سطح متوسط
                                </a>
                                <p className='mb-0 small'>
                                  کارشناسی ارشد علوم کامپیوتر
                                </p>
                              </div>
                            </div>
                            {/* Dropdown item */}
                            <div className='d-flex mb-4 position-relative'>
                              <Image
                                width={100}
                                height={100}
                                src='/images/client/uni-logo-03.svg'
                                className='icon-md'
                                alt=''
                              />
                              <div className='ms-3'>
                                <a
                                  className='stretched-link h6 mb-0 fw-normal'
                                  href='#'
                                >
                                  مدرک بین المللی زبـان
                                </a>
                                <p className='mb-0 small'>دانشکده علوم پزشکی</p>
                              </div>
                            </div>
                            {/* Dropdown item */}
                            <div className='d-flex mb-4 position-relative'>
                              <Image
                                width={100}
                                height={100}
                                src='/images/client/uni-logo-01.svg'
                                className='icon-md'
                                alt=''
                              />
                              <div className='ms-3'>
                                <a
                                  className='stretched-link h6 mb-0 fw-normal'
                                  href='#'
                                >
                                  مدرک بین المللی زبـان
                                </a>
                                <p className='mb-0 small'>لیسانس کامپیوتر</p>
                              </div>
                            </div>
                            {/* Dropdown item */}
                            <div className='d-flex position-relative'>
                              <Image
                                width={100}
                                height={100}
                                src='/images/client/uni-logo-04.svg'
                                className='icon-md'
                                alt=''
                              />
                              <div className='ms-3'>
                                <a
                                  className='stretched-link h6 mb-0 fw-normal'
                                  href='#'
                                >
                                  مدرک بین المللی سطح پیشرفته
                                </a>
                                <p className='mb-0 small'>
                                  کارشناسی ارشد توسعه کسب و کار دیجیتالی
                                </p>
                              </div>
                            </div>
                          </div>
                          {/* Dropdown column item */}
                          <div className='col-xl-6 col-xxl-4'>
                            <h6 className='mb-0'>در حـال ثبت نام</h6>
                            <hr /> {/* Divider */}
                            {/* Dropdown item */}
                            <div className='d-flex mb-4 position-relative'>
                              <h2 className='mb-0'>
                                <i className='fab fa-fw fa-google text-google-icon' />
                              </h2>
                              <div className='ms-2'>
                                <a
                                  className='stretched-link h6 mb-0 fw-normal'
                                  href='#'
                                >
                                  گواهی سئو گوگل
                                </a>
                                <p className='mb-0 small'>بدون پیش نیاز</p>
                              </div>
                            </div>
                            {/* Dropdown item */}
                            <div className='d-flex mb-4 position-relative'>
                              <h2 className='mb-0'>
                                <i className='fab fa-fw fa-linkedin-in text-linkedin' />
                              </h2>
                              <div className='ms-2'>
                                <a
                                  className='stretched-link h6 mb-0 fw-normal'
                                  href='#'
                                >
                                  مدیر توسعه کسب و کار (BDE)
                                </a>
                                <p className='mb-0 small'>بدون پیش نیاز</p>
                              </div>
                            </div>
                            {/* Dropdown item */}
                            <div className='d-flex mb-4 position-relative'>
                              <h2 className='mb-0'>
                                <i className='fab fa-fw fa-facebook text-facebook' />
                              </h2>
                              <div className='ms-2'>
                                <a
                                  className='stretched-link h6 mb-0 fw-normal'
                                  href='#'
                                >
                                  بازاریابی شبکه های اجتماعی فیس بوک
                                </a>
                                <p className='mb-0 small'>مشاوره تخصصی</p>
                              </div>
                            </div>
                            {/* Dropdown item */}
                            <div className='d-flex mb-4 position-relative'>
                              <h2 className='mb-0'>
                                <i className='fas fa-fw fa-basketball-ball text-dribbble' />
                              </h2>
                              <div className='ms-2'>
                                <a
                                  className='stretched-link h6 mb-0 fw-normal'
                                  href='#'
                                >
                                  طراحی گرافیکی خلاقانه
                                </a>
                                <p className='mb-0 small'>بدون پیش نیاز</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Advertisement */}
                        <div className='row'>
                          <div className='col-12'>
                            <div
                              className='card bg-blue rounded-0 rounded-bottom p-3 position-relative overflow-hidden'
                              style={{
                                background:
                                  "url(images/pattern/05.png) no-repeat center center",
                                backgroundSize: "cover",
                              }}
                            >
                              {/* SVG decoration */}
                              <figure className='position-absolute bottom-0 end-0 mb-n4 d-none d-md-block'>
                                <svg width='92.6px' height='135.2px'>
                                  <path
                                    className='fill-white'
                                    d='M71.5,131.4c0.2,0.1,0.4,0.1,0.6-0.1c0,0,0.6-0.7,1.6-1.9c0.2-0.2,0.1-0.5-0.1-0.7c-0.2-0.2-0.5-0.1-0.7,0.1 c-1,1.2-1.6,1.8-1.6,1.8c-0.2,0.2-0.2,0.5,0,0.7C71.4,131.3,71.4,131.4,71.5,131.4z'
                                  />
                                  <path
                                    className='fill-white'
                                    d='M76,125.5c-0.2-0.2-0.3-0.5-0.1-0.7c1-1.4,1.9-2.8,2.8-4.2c0.1-0.2,0.4-0.3,0.7-0.2c0.2,0.1,0.3,0.4,0.2,0.7 c-0.9,1.4-1.8,2.9-2.8,4.2C76.6,125.6,76.3,125.6,76,125.5C76.1,125.5,76.1,125.5,76,125.5z M81.4,116.9 c-0.2-0.1-0.3-0.4-0.2-0.7c0.2-0.5,0.5-0.9,0.7-1.4c0.5-1.1,1-2.1,1.5-3.2c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6 c-0.5,1.1-1,2.1-1.5,3.2c-0.2,0.5-0.5,0.9-0.7,1.4C81.9,117,81.6,117,81.4,116.9C81.4,116.9,81.4,116.9,81.4,116.9z M85.1,107.1 c0.5-1.6,1-3.2,1.3-4.8c0.1-0.3,0.3-0.4,0.6-0.4c0.3,0.1,0.4,0.3,0.4,0.6c-0.4,1.6-0.8,3.3-1.3,4.9c-0.1,0.3-0.4,0.4-0.6,0.3 c0,0,0,0-0.1,0C85.1,107.6,85,107.3,85.1,107.1z M47.3,83c-1.5-1.1-2.5-2.5-3.1-4.2c-0.1-0.3,0-0.5,0.3-0.6 c0.3-0.1,0.5,0,0.6,0.3c0.5,1.5,1.5,2.7,2.8,3.7c0.2,0.2,0.3,0.5,0.1,0.7C47.9,83.1,47.6,83.1,47.3,83C47.4,83,47.4,83,47.3,83z  M51.7,84.6c0-0.3,0.3-0.5,0.5-0.4c1.4,0.2,2.9-0.3,4.3-1.4c0.2-0.2,0.5-0.1,0.7,0.1c0.2,0.2,0.1,0.5-0.1,0.7 c-1.6,1.2-3.4,1.8-5,1.6c-0.1,0-0.1,0-0.2,0C51.8,85,51.7,84.8,51.7,84.6z M87.2,97.4c0.2-1.7,0.2-3.3,0.2-5 c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0.1,1.7,0,3.4-0.2,5.1c0,0.3-0.3,0.5-0.5,0.4c-0.1,0-0.1,0-0.2,0 C87.3,97.8,87.1,97.6,87.2,97.4z M43.7,73.6c0.2-1.6,0.7-3.2,1.5-4.8l0.1-0.1c0.1-0.2,0.4-0.3,0.7-0.2c0,0,0,0,0,0 c0.2,0.1,0.3,0.4,0.2,0.7l-0.1,0.1c-0.7,1.5-1.2,3-1.4,4.5c0,0.3-0.3,0.5-0.6,0.4c-0.1,0-0.1,0-0.2,0 C43.8,74,43.7,73.8,43.7,73.6z M60,79.8c-0.2-0.1-0.3-0.5-0.1-0.7c0.4-0.6,0.8-1.3,1.1-2c0.4-0.8,0.7-1.6,1-2.4 c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6c-0.3,0.9-0.7,1.7-1.1,2.5c-0.4,0.7-0.8,1.4-1.2,2.1C60.5,79.9,60.2,80,60,79.8 C60,79.9,60,79.8,60,79.8z M86.8,87.5c-0.3-1.6-0.7-3.2-1.2-4.8c-0.1-0.3,0.1-0.5,0.3-0.6c0.3-0.1,0.5,0.1,0.6,0.3 c0.5,1.6,1,3.3,1.2,4.9c0,0.3-0.1,0.5-0.4,0.6c-0.1,0-0.2,0-0.3,0C87,87.7,86.9,87.6,86.8,87.5z M48.2,65.1 c-0.2-0.2-0.2-0.5,0-0.7c1.2-1.3,2.5-2.4,3.9-3.4c0.2-0.1,0.5-0.1,0.7,0.1c0.1,0.2,0.1,0.5-0.1,0.7c-1.4,0.9-2.6,2-3.7,3.2 c-0.2,0.2-0.4,0.2-0.6,0.1C48.3,65.2,48.3,65.1,48.2,65.1z M63.3,70c0.3-1.6,0.5-3.3,0.5-4.9c0-0.3,0.2-0.5,0.5-0.5 c0.3,0,0.5,0.2,0.5,0.5c-0.1,1.7-0.2,3.4-0.5,5.1c0,0.3-0.3,0.4-0.6,0.4c0,0-0.1,0-0.1,0C63.3,70.4,63.2,70.2,63.3,70z M83.8,78 c-0.7-1.5-1.5-3-2.4-4.3c-0.1-0.2-0.1-0.5,0.1-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.4,1.7,2.9,2.5,4.4c0.1,0.2,0,0.5-0.2,0.7 c-0.1,0.1-0.3,0.1-0.4,0C83.9,78.2,83.8,78.1,83.8,78z M56.5,59.6c-0.1-0.3,0.1-0.5,0.4-0.6c1.7-0.4,3.4-0.5,5.2-0.3 c0.3,0,0.5,0.3,0.4,0.5c0,0.3-0.3,0.5-0.5,0.4c-1.7-0.2-3.3-0.1-4.8,0.3c-0.1,0-0.2,0-0.3,0C56.6,59.8,56.5,59.7,56.5,59.6z  M78.4,69.7c-1.1-1.3-2.2-2.5-3.4-3.6c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0c1.2,1.1,2.4,2.4,3.5,3.7 c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0.1C78.5,69.8,78.4,69.7,78.4,69.7z M63.6,60.1c-0.2-1.6-0.4-3.3-0.8-4.9 c-0.1-0.3,0.1-0.5,0.4-0.6c0.3-0.1,0.5,0.1,0.6,0.4c0.4,1.7,0.7,3.4,0.8,5c0,0.3-0.2,0.5-0.4,0.5c-0.1,0-0.2,0-0.3,0 C63.7,60.4,63.6,60.2,63.6,60.1z M71,63.1c-1.4-0.9-2.9-1.7-4.4-2.3c-0.3-0.1-0.4-0.4-0.3-0.6c0.1-0.3,0.4-0.4,0.6-0.3 c1.5,0.6,3.1,1.4,4.6,2.3c0.2,0.1,0.3,0.5,0.1,0.7C71.6,63.1,71.3,63.2,71,63.1C71.1,63.1,71.1,63.1,71,63.1z M61.3,50.4 c-0.6-1.5-1.3-3-2.1-4.5c-0.1-0.2-0.1-0.5,0.2-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.5,1.6,3.1,2.2,4.6c0.1,0.3,0,0.5-0.3,0.6 c-0.1,0.1-0.3,0-0.4,0C61.5,50.6,61.4,50.5,61.3,50.4z M56.5,41.8c-1-1.3-2.1-2.6-3.2-3.8c-0.2-0.2-0.2-0.5,0-0.7 c0.2-0.2,0.5-0.2,0.7,0c1.2,1.3,2.3,2.6,3.3,3.9c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0C56.6,41.9,56.5,41.8,56.5,41.8z  M49.7,34.5c-1.2-1.1-2.5-2.1-3.9-3.2c-0.2-0.2-0.3-0.5-0.1-0.7c0.2-0.2,0.5-0.3,0.7-0.1c1.4,1,2.7,2.1,3.9,3.2 c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.4,0.2-0.6,0.1C49.7,34.6,49.7,34.5,49.7,34.5z M41.7,28.5c-1.4-0.9-2.8-1.8-4.3-2.6 c-0.2-0.1-0.3-0.4-0.2-0.7c0.1-0.2,0.4-0.3,0.7-0.2c1.5,0.8,2.9,1.7,4.3,2.6c0.2,0.1,0.3,0.5,0.1,0.7 C42.2,28.6,42,28.6,41.7,28.5C41.7,28.5,41.7,28.5,41.7,28.5z'
                                  />
                                  <path
                                    className='fill-white'
                                    d='M30.7,22.6C30.7,22.6,30.7,22.6,30.7,22.6c0,0,0.9,0.4,2.3,1c0.2,0.1,0.5,0,0.7-0.2c0.1-0.2,0-0.5-0.2-0.7 c0,0,0,0,0,0c-1.4-0.7-2.2-1-2.3-1c-0.3-0.1-0.5,0-0.6,0.3C30.3,22.2,30.4,22.5,30.7,22.6z'
                                  />
                                  <path
                                    className='fill-warning'
                                    d='M22.6,23.6l-1.1-4.1c0,0-11.7-7.5-11.9-7.6c-0.1-0.2-4.9-6.5-4.9-6.5l8.2,3.5l12.2,8.4L22.6,23.6z'
                                  />
                                  <polygon
                                    className='fill-warning opacity-6'
                                    points='31.2,12.3 4.7,5.4 25.1,17.2'
                                  />
                                  <polygon
                                    className='fill-warning opacity-6'
                                    points='21.5,19.5 15,24.8 4.7,5.4 '
                                  />
                                </svg>
                              </figure>
                              {/* Body */}
                              <div className='card-body'>
                                {/* Title */}
                                <h5 className='card-title text-white mb-2'>
                                  دسترسی به 25 هزار دوره آنلاین از 120 موسسه، از
                                  امروز شروع کنید!
                                </h5>
                                <p className='text-white text-opacity-75'>
                                  در اینجا توضیحاتی در مورد ویژگی های برتر ارائه
                                  شده است که به کاربران امکان می دهد از مزایایی
                                  برخوردار شوند و در هزینه های زیادی صرفه جویی
                                  کنند
                                </p>
                                {/* Button */}
                                <a
                                  href='#'
                                  className='btn btn-sm btn-dark mb-0'
                                >
                                  خرید حرفه ای
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='#'>
                        هوش مصنوعی
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='#'>
                        زبان انگلیسی
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='#'>
                        فناوری و اطلاعات
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='#'>
                        مهندسی نرم افزار
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='#'>
                        رباتیک
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='#'>
                        نگارش آکادمیک
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='#'>
                        علوم انسانی
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='#'>
                        ریاضیات
                      </a>
                    </li>
                    <li>
                      {" "}
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      {" "}
                      <a
                        className='dropdown-item bg-primary text-primary bg-opacity-10 rounded-2 mb-0'
                        href='#'
                      >
                        مشاهده همه
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* Nav category menu END */}
              {/* Nav Main menu START */}
              <ul className='navbar-nav navbar-nav-scroll me-auto'>
                {/* Nav item 1 Demos */}
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle active'
                    href='#'
                    id='demoMenu'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    صفحه اصلی
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='demoMenu'>
                    <li>
                      {" "}
                      <a className='dropdown-item active' href='index.html'>
                        نسخه 1
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='index-2.html'>
                        نسخه 2
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='index-3.html'>
                        نسخه 3
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='index-4.html'>
                        نسخه 4
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='index-5.html'>
                        نسخه 5
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='index-6.html'>
                        نسخه 6
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='index-7.html'>
                        نسخه 7
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='index-8.html'>
                        نسخه 8
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='index-9.html'>
                        نسخه 9
                      </a>
                    </li>
                    <li></li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='index-10.html'>
                        نسخه 10
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='index-11.html'>
                        نسخه 11
                      </a>
                    </li>
                  </ul>
                </li>
                {/* Nav item 2 Pages */}
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='pagesMenu'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    صفحات
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='pagesMenu'>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        دوره ها
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='course-categories.html'
                          >
                            دسته بندی
                          </a>
                        </li>
                        <li>
                          {" "}
                          <hr className='dropdown-divider' />
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='course-grid.html'>
                            لیست نسخه 1
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='course-grid-2.html'
                          >
                            لیست نسخه 2
                          </a>
                        </li>
                        <li>
                          {" "}
                          <hr className='dropdown-divider' />
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='course-list.html'>
                            لیست نسخه 3
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='course-list-2.html'
                          >
                            لیست نسخه 4
                          </a>
                        </li>
                        <li>
                          {" "}
                          <hr className='dropdown-divider' />
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='course-detail.html'
                          >
                            جزئیات نسخه 1
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='course-detail-min.html'
                          >
                            جزئیات نسخه 2
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='course-detail-adv.html'
                          >
                            جزئیات نسخه 3
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='course-detail-module.html'
                          >
                            جزئیات نسخه 4
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='course-video-player.html'
                          >
                            جزئیات نسخه 5
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        سایر
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        <li>
                          {" "}
                          <a className='dropdown-item' href='about.html'>
                            درباره ما
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='contact-us.html'>
                            تماس با ما
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='blog-grid.html'>
                            لیست وبلاگ 1
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='blog-masonry.html'>
                            لیست وبلاگ 2
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='blog-detail.html'>
                            جزئیات وبلاگ
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='pricing.html'>
                            قیمت گذاری
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        بنرها
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        <li>
                          {" "}
                          <a className='dropdown-item' href='#'>
                            نسخه 1
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='#'>
                            نسخه 2
                          </a>
                        </li>
                        <li>
                          {" "}
                          <p className='dropdown-item mb-0'>به زودی</p>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='instructor-list.html'>
                        لیست مدرس
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className='dropdown-item'
                        href='instructor-single.html'
                      >
                        جزئیات مدرس
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className='dropdown-item'
                        href='become-instructor.html'
                      >
                        مدرس شوید
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='abroad-single.html'>
                        مهاجرت مدرس
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='workshop-detail.html'>
                        خرید دوره
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='event-detail.html'>
                        رویدادها{" "}
                        <span className='badge bg-success ms-2 smaller'>
                          جدید
                        </span>
                      </a>
                    </li>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        فروشگاه
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        <li>
                          {" "}
                          <a className='dropdown-item' href='shop.html'>
                            لیست دوره
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='shop-product-detail.html'
                          >
                            جزئیات دوره
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='cart.html'>
                            سبد خرید
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='checkout.html'>
                            تسویه حساب
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='empty-cart.html'>
                            سبد خرید خالی
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='wishlist.html'>
                            مورد علاقه ها
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        پشتیبانی
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        <li>
                          {" "}
                          <a className='dropdown-item' href='help-center.html'>
                            مرکز پشتیبانی
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='help-center-detail.html'
                          >
                            جزئیات
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='faq.html'>
                            سوالات متداول
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        احراز هویت
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        <li>
                          {" "}
                          <a className='dropdown-item' href='sign-in.html'>
                            ورود
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='sign-up.html'>
                            ثبت نام
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='forgot-password.html'
                          >
                            فراموشی رمز عبور
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        فرم
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        <li>
                          {" "}
                          <a className='dropdown-item' href='request-demo.html'>
                            درخواست دوره
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='book-class.html'>
                            رزرو آنلاین
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='request-access.html'
                          >
                            دسترسی رایگان
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='university-admission-form.html'
                          >
                            پذیرش
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        سایر
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        <li>
                          {" "}
                          <a className='dropdown-item' href='error-404.html'>
                            صفحه 404
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='coming-soon.html'>
                            به زودی
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* Nav item 3 Account */}
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='accounntMenu'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    داشبورد
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='accounntMenu'>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        <i className='fas fa-user-tie fa-fw me-1' />
                        مدرس
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='instructor-dashboard.html'
                          >
                            <i className='bi bi-grid-fill fa-fw me-1' />
                            داشبورد
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='instructor-manage-course.html'
                          >
                            <i className='bi bi-basket-fill fa-fw me-1' />
                            لیست دوره ها
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='instructor-create-course.html'
                          >
                            <i className='bi bi-file-earmark-plus-fill fa-fw me-1' />
                            ثبت دوره جدید
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='course-added.html'>
                            <i className='bi bi-file-check-fill fa-fw me-1' />
                            دوره اضافه شد!
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='instructor-quiz.html'
                          >
                            <i className='bi bi-question-diamond fa-fw me-1' />
                            امتحانات
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='instructor-earning.html'
                          >
                            <i className='fas fa-chart-line fa-fw me-1' />
                            آنالیز و تحلیل درآمد
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='instructor-studentlist.html'
                          >
                            <i className='fas fa-user-graduate fa-fw me-1' />
                            لیست دانشجویان
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='instructor-order.html'
                          >
                            <i className='bi bi-cart-check-fill fa-fw me-1' />
                            لیست سفارشات
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='instructor-review.html'
                          >
                            <i className='bi bi-star-fill fa-fw me-1' />
                            دیدگاه ها
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='instructor-payout.html'
                          >
                            <i className='fas fa-wallet fa-fw me-1' />
                            درآمدها
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    {/* Dropdown submenu */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        <i className='fas fa-user-graduate fa-fw me-1' />
                        دانشجو
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='student-dashboard.html'
                          >
                            <i className='bi bi-grid-fill fa-fw me-1' />
                            داشبورد
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='student-subscription.html'
                          >
                            <i className='bi bi-card-checklist fa-fw me-1' />
                            خریدهای من
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='student-course-list.html'
                          >
                            <i className='bi bi-basket-fill fa-fw me-1' />
                            لیست دوره ها
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='student-course-resume.html'
                          >
                            <i className='far fa-fw fa-file-alt me-1' />
                            رزومه دوره
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='student-quiz.html'>
                            <i className='bi bi-question-diamond fa-fw me-1' />
                            امتحانات{" "}
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='student-payment-info.html'
                          >
                            <i className='bi bi-credit-card-2-front-fill fa-fw me-1' />
                            اطلاعات کارت
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a
                            className='dropdown-item'
                            href='student-bookmark.html'
                          >
                            <i className='fas bi-cart-check-fill fa-fw me-1' />
                            مورد علاقه ها
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a className='dropdown-item' href='admin-dashboard.html'>
                        <i className='fas fa-user-cog fa-fw me-1' />
                        مدیریت
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      {" "}
                      <a
                        className='dropdown-item'
                        href='instructor-edit-profile.html'
                      >
                        <i className='fas fa-fw fa-edit me-1' />
                        ویرایش پروفایل
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className='dropdown-item'
                        href='instructor-setting.html'
                      >
                        <i className='fas fa-fw fa-cog me-1' />
                        تنظیمات
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className='dropdown-item'
                        href='instructor-delete-account.html'
                      >
                        <i className='fas fa-fw fa-trash-alt me-1' />
                        حذف پروفایل
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <hr className='dropdown-divider' />
                    </li>
                    {/* Dropdown Level */}
                    <li className='dropdown-submenu dropend'>
                      <a className='dropdown-item dropdown-toggle' href='#'>
                        زیر منو
                      </a>
                      <ul
                        className='dropdown-menu dropdown-menu-start'
                        data-bs-popper='none'
                      >
                        {/* dropdown submenu open right */}
                        <li className='dropdown-submenu dropend'>
                          <a className='dropdown-item dropdown-toggle' href='#'>
                            نسخه 1
                          </a>
                          <ul className='dropdown-menu' data-bs-popper='none'>
                            <li>
                              {" "}
                              <a className='dropdown-item' href='#'>
                                عنوان 1
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className='dropdown-item' href='#'>
                                عنوان 2
                              </a>{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='#'>
                            عنوان 3
                          </a>{" "}
                        </li>
                        {/* dropdown submenu open left */}
                        <li className='dropdown-submenu dropstart'>
                          <a className='dropdown-item dropdown-toggle' href='#'>
                            نسخه 2
                          </a>
                          <ul
                            className='dropdown-menu dropdown-menu-end'
                            data-bs-popper='none'
                          >
                            <li>
                              {" "}
                              <a className='dropdown-item' href='#'>
                                عنوان 1
                              </a>{" "}
                            </li>
                            <li>
                              {" "}
                              <a className='dropdown-item' href='#'>
                                عنوان 2
                              </a>{" "}
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <a className='dropdown-item' href='#'>
                            عنوان 3
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                {/* Nav item 4 Megamenu*/}
                <li className='nav-item dropdown dropdown-fullwidth'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    مگامنو
                  </a>
                  <div
                    className='dropdown-menu dropdown-menu-end'
                    data-bs-popper='none'
                  >
                    <div className='row p-4 g-4'>
                      {/* Dropdown column item */}
                      <div className='col-xl-6 col-xxl-3'>
                        <h6 className='mb-0'>شروع کن</h6>
                        <hr />
                        <ul className='list-unstyled'>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              اینستاگرام مارکتینگ
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              تیبلغ نویسی
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              سرچ کنسول
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              جذب ترافیک موثر
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              افزایش فروش
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              ویدیو مارکتینگ
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              استراتژی تولید محتوا
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              آموزش GTmetrix
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              آموزش َAlex
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              سئو و بهینه سازی
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              اصول قرارداد نویسی
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      {/* Dropdown column item */}
                      <div className='col-xl-6 col-xxl-3'>
                        <h6 className='mb-0'>میزان رتبه</h6>
                        <hr />
                        {/* Dropdown item */}
                        <div className='mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3'>
                          <a className='stretched-link h6 mb-0' href='#'>
                            تماس با مدیریت
                          </a>
                          <p className='mb-0 small text-truncate-2'>
                            با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                            طراحان گرافیک است.
                          </p>
                        </div>
                        {/* Dropdown item */}
                        <div className='mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3'>
                          <a className='stretched-link h6 mb-0' href='#'>
                            مسیر فروش
                          </a>
                          <p className='mb-0 small text-truncate-2'>
                            با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                            طراحان گرافیک است.
                          </p>
                        </div>
                        {/* Dropdown item */}
                        <div className='mb-2 position-relative bg-primary-soft-hover rounded-2 transition-base p-3'>
                          <a className='stretched-link h6 mb-0' href='#'>
                            امنیت و مجوز
                          </a>
                          <p className='mb-0 small text-truncate-2'>
                            با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                            طراحان گرافیک است.
                          </p>
                        </div>
                      </div>
                      {/* Dropdown column item */}
                      <div className='col-xl-6 col-xxl-3'>
                        <h6 className='mb-0'>مدرک</h6>
                        <hr />
                        {/* Dropdown item */}
                        <div className='d-flex mb-4 position-relative'>
                          <h2 className='mb-0'>
                            <i className='fab fa-fw fa-google text-google-icon' />
                          </h2>
                          <div className='ms-2'>
                            <a className='stretched-link h6 mb-0' href='#'>
                              گواهی سئو گوگل
                            </a>
                            <p className='mb-0 small'>بدون پیش نیاز</p>
                          </div>
                        </div>
                        {/* Dropdown item */}
                        <div className='d-flex mb-4 position-relative'>
                          <h2 className='mb-0'>
                            <i className='fab fa-fw fa-linkedin-in text-linkedin' />
                          </h2>
                          <div className='ms-2'>
                            <a className='stretched-link h6 mb-0' href='#'>
                              مدیر توسعه کسب و کار (BDE)
                            </a>
                            <p className='mb-0 small'>بدون پیش نیاز</p>
                          </div>
                        </div>
                        {/* Dropdown item */}
                        <div className='d-flex mb-4 position-relative'>
                          <h2 className='mb-0'>
                            <i className='fab fa-fw fa-facebook text-facebook' />
                          </h2>
                          <div className='ms-2'>
                            <a className='stretched-link h6 mb-0' href='#'>
                              بازاریابی شبکه های اجتماعی فیس بوک
                            </a>
                            <p className='mb-0 small'>مشاوره تخصصی</p>
                          </div>
                        </div>
                        {/* Dropdown item */}
                        <div className='d-flex mb-4 position-relative'>
                          <h2 className='mb-0'>
                            <i className='fas fa-fw fa-basketball-ball text-dribbble' />
                          </h2>
                          <div className='ms-2'>
                            <a className='stretched-link h6 mb-0' href='#'>
                              طراحی گرافیکی خلاقانه
                            </a>
                            <p className='mb-0 small'>بدون پیش نیاز</p>
                          </div>
                        </div>
                      </div>
                      {/* Dropdown column item */}
                      <div className='col-xl-6 col-xxl-3'>
                        <h6 className='mb-0'>دانلود نرم افزار کاربردی</h6>
                        <hr />
                        {/* Image */}
                        <Image
                          width={100}
                          src='/images/element/14.svg'
                          alt=''
                          height={100}
                        />
                        {/* Download button */}
                        <div className='row g-2 justify-content-center mt-3'>
                          {/* Google play store button */}
                          <div className='col-6 col-sm-4 col-xxl-6'>
                            <a href='#'>
                              {" "}
                              <Image
                                width={100}
                                height={100}
                                src='/images/client/google-play.svg'
                                className='btn-transition'
                                alt='google-store'
                              />{" "}
                            </a>
                          </div>
                          {/* App store button */}
                          <div className='col-6 col-sm-4 col-xxl-6'>
                            <a href='#'>
                              {" "}
                              <Image
                                width={100}
                                height={100}
                                src='/images/client/app-store.svg'
                                className='btn-transition'
                                alt='app-store'
                              />{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* Action box */}
                      <div className='col-12'>
                        <div
                          className='alert alert-success alert-dismissible fade show mt-2 mb-0 rounded-3'
                          role='alert'
                        >
                          {/* Avatar */}
                          <div className='avatar avatar-xs me-2'>
                            <Image
                              width={100}
                              height={100}
                              className='avatar-img rounded-circle'
                              src='/images/avatar/09.jpg'
                              alt='avatar'
                            />
                          </div>
                          {/* Info */}
                          کلاس رشد شخصیت از دقیقه 14 شروع می شود، همین حالا{" "}
                          <a href='#' className='alert-link'>
                            ثبت نام
                          </a>{" "}
                          کنید
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* Nav item 5 link*/}
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link'
                    href='#'
                    id='advanceMenu'
                    data-bs-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fas fa-ellipsis-h' />
                  </a>
                  <ul
                    className='dropdown-menu dropdown-menu-end min-w-auto'
                    data-bs-popper='none'
                  >
                    <li>
                      <a className='dropdown-item' href='#' target='_blank'>
                        <i className='text-warning fa-fw bi bi-life-preserver me-2' />
                        پشتیبانی
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='docs/index.html'
                        target='_blank'
                      >
                        <i className='text-danger fa-fw bi bi-card-text me-2' />
                        داکیومنت
                      </a>
                    </li>
                    <li>
                      {" "}
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='../ltr/index.html'
                        target='_blank'
                      >
                        <i className='text-info fa-fw bi bi-toggle-off me-2' />
                        نسخه LTR
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://www.rtl-theme.com/'
                        target='_blank'
                      >
                        <i className='text-success fa-fw bi bi-cloud-download-fill me-2' />
                        خرید قالب
                      </a>
                    </li>
                    <li>
                      {" "}
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='docs/alerts.html'
                        target='_blank'
                      >
                        <i className='text-orange fa-fw bi bi-puzzle-fill me-2' />
                        کدهای کاربردی
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <i className='text-purple fa-fw bi bi-stickies-fill me-2' />
                        اسنیپت ها(Snippets)
                      </a>
                    </li>
                  </ul>
                </li>
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
            
            <Profile/>      
            {/* Profile START */}
          </div>
        </nav>
        {/* Nav END */}
      </header>
      {/* Header END */}
    </>
  )
}

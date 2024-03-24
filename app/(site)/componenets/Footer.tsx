import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="pt-5">
      <div className="container">
        {/* Row START */}
        <div className="row g-4">
          {/* Widget 1 START */}
          <div className="col-lg-3">
            {/* logo */}
            <a className="me-0" href="index.html">
              <Image
                width={100}
                height={100}
                className="light-mode-item h-40px"
                src="images/logo.svg"
                alt="logo"
              />
              <Image
                width={100}
                height={100}
                className="dark-mode-item h-40px"
                src="images/logo-light.svg"
                alt="logo"
              />
            </a>
            <p className="my-3">
              شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
              موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            {/* Social media icon */}
            <ul className="list-inline mb-0 mt-3">
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-facebook"
                  href="#"
                >
                  <i className="fab fa-fw fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-instagram"
                  href="#"
                >
                  <i className="fab fa-fw fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-twitter"
                  href="#"
                >
                  <i className="fab fa-fw fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  className="btn btn-white btn-sm shadow px-2 text-linkedin"
                  href="#"
                >
                  <i className="fab fa-fw fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
          {/* Widget 1 END */}
          {/* Widget 2 START */}
          <div className="col-lg-6">
            <div className="row g-4">
              {/* Link block */}
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">لینک های مفید</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      درباره ما
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      تماس با ما
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      وبلاگ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      تسویه حساب
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      سوالات متداول
                    </a>
                  </li>
                </ul>
              </div>
              {/* Link block */}
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">راهنما و پشتیبانی</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      داکیومنت
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      ارسال تیکت
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      خرید دوره
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      نقشه سایت
                    </a>
                  </li>
                </ul>
              </div>
              {/* Link block */}
              <div className="col-6 col-md-4">
                <h5 className="mb-2 mb-md-4">لینک های سریع</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      جذب مدرس
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      مشاوره رایگان
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      شرایط و قوانین
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Widget 2 END */}
          {/* Widget 3 START */}
          <div className="col-lg-3">
            <h5 className="mb-2 mb-md-4">تماس با ما</h5>
            {/* Time */}
            <p className="mb-2">
              تلفن: <span className="h6 fw-light ms-2">093200000000</span>
              <span className="d-block small">(9:00 تا 17:00 بعداز ظهر)</span>
            </p>
            <p className="mb-0">
              ایمیل:<span className="h6 fw-light ms-2">example@gmail.com</span>
            </p>
            <div className="row g-2 mt-2">
              {/* Google play store button */}
              <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                <a href="#">
                  <Image
                    width={100}
                    height={100}
                    src="images/client/google-play.svg"
                    alt=""
                  />
                </a>
              </div>
              {/* App store button */}
              <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                <a href="#">
                  <Image
                    width={100}
                    height={100}
                    src="images/client/app-store.svg"
                    alt="app-store"
                  />
                </a>
              </div>
            </div>
            {/* Row END */}
          </div>
          {/* Widget 3 END */}
        </div>
        {/* Row END */}
        {/* Divider */}
        <hr className="mt-4 mb-0" />
        {/* Bottom footer */}
        <div className="py-3">
          <div className="container px-0">
            <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
              {/* copyright text */}
              <div className="text-primary-hover">
                ارائه شده در سایت
                <a
                  href="https://www.rtl-theme.com/"
                  target="_blank"
                  className="text-body"
                >
                  راست چین
                </a>
              </div>
              {/* copyright links*/}
              <div className="justify-content-center mt-3 mt-lg-0">
                <ul className="nav list-inline justify-content-center mb-0">
                  <li className="list-inline-item">
                    {/* Language selector */}
                    <div className="dropup mt-0 text-center text-sm-end">
                      <a
                        className="dropdown-toggle nav-link"
                        href="#"
                        role="button"
                        id="languageSwitcher"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fas fa-globe me-2" />
                        زبان ها
                      </a>
                      <ul
                        className="dropdown-menu min-w-auto"
                        aria-labelledby="languageSwitcher"
                      >
                        <li>
                          <a className="dropdown-item me-4" href="#">
                            <Image
                              width={100}
                              height={100}
                              className="fa-fw me-2"
                              src="images/flags/uk.svg"
                              alt=""
                            />
                            فارسی
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item me-4" href="#">
                            <Image
                              width={100}
                              height={100}
                              className="fa-fw me-2"
                              src="images/flags/gr.svg"
                              alt=""
                            />
                            انگلیسی
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item me-4" href="#">
                            <Image
                              width={100}
                              height={100}
                              className="fa-fw me-2"
                              src="images/flags/sp.svg"
                              alt=""
                            />
                            فرانسوی
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <a className="nav-link" href="#">
                      شرایط استفاده
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="nav-link pe-0" href="#">
                      قوانین سایت
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

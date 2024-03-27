import React from "react";
import Hero from "./(src)/componenets/ Hero";
import Header from "./(src)/componenets/Header";
import Footer from "./(src)/componenets/Footer";
import Counter from "./(src)/componenets/Counter";
import PopularCourses from "./(src)/componenets/PopularCourses";
import TrendingCourses from "./(src)/componenets/TrendingCourses";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <PopularCourses />
      <TrendingCourses />
      <>
        {/* =======================
        Trending courses START */}
        <section className="pb-5 pt-0 pt-lg-5">
          <div className="container">
            {/* Title */}
            <div className="row mb-4">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="fs-3">دوره های پیشنهادی جشنواره</h2>
                <p className="mb-0">مشاهده دوره های جدید و 🔥 در جشنواره</p>
              </div>
            </div>
            <div className="row">
              {/* Slider START */}
              <div className="tiny-slider arrow-round arrow-blur arrow-hover">
                <div
                  className="tiny-slider-inner pb-1"
                  data-autoplay="true"
                  data-arrow="true"
                  data-edge={2}
                  data-dots="false"
                  data-items={3}
                  data-items-lg={2}
                  data-items-sm={1}
                >
                  {/* Card item START */}
                  <div>
                    <div className="card action-trigger-hover border bg-transparent">
                      {/* Image */}
                      <Image
                        width={100}
                        height={100}
                        src="/images/courses/4by3/14.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      {/* Ribbon */}
                      <div className="ribbon mt-3">
                        <span>رایگان</span>
                      </div>
                      {/* Card body */}
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-3">
                          <span className="hstack gap-2">
                            <a
                              href="#"
                              className="badge bg-primary bg-opacity-10 text-primary"
                            >
                              طراحی وب
                            </a>
                            <a href="#" className="badge text-bg-dark">
                              مقدماتی
                            </a>
                          </span>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-bookmark" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">آموزش ساخت شبکه اجتماعی با MERN</a>
                        </h5>
                        {/* Rating */}
                        <div className="d-flex justify-content-between mb-2">
                          <div className="hstack gap-2">
                            <p className="text-warning m-0">
                              4.5
                              <i className="fas fa-star text-warning ms-1" />
                            </p>
                            <span className="small">(6500)</span>
                          </div>
                          <div className="hstack gap-2">
                            <p className="h6 fw-light mb-0 m-0">6500</p>
                            <span className="small">(دانشجو)</span>
                          </div>
                        </div>
                        {/* Time */}
                        <div className="hstack gap-3">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            6ساعت
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            82 ویدیو
                          </span>
                        </div>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 bg-transparent">
                        <hr />
                        {/* Avatar and Price */}
                        <div className="d-flex justify-content-between align-items-center">
                          {/* Avatar */}
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm">
                              <Image
                                width={100}
                                height={100}
                                className="avatar-img rounded-1"
                                src="/images/avatar/10.jpg"
                                alt="avatar"
                              />
                            </div>
                            <p className="mb-0 ms-2">
                              <a href="#" className="h6 fw-light mb-0">
                                مهرداد نوروزی
                              </a>
                            </p>
                          </div>
                          {/* Price */}
                          <div>
                            <h5 className="text-success mb-0 item-show">
                              رایگـان
                            </h5>
                            <a
                              href="#"
                              className="btn btn-sm btn-success-soft item-show-hover"
                            >
                              <i className="fas fa-shopping-cart me-2" />
                              افزودن به سبد
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div>
                    <div className="card action-trigger-hover border bg-transparent">
                      {/* Image */}
                      <Image
                        width={100}
                        height={100}
                        src="/images/courses/4by3/15.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      {/* Card body */}
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-3">
                          <span className="hstack gap-2">
                            <a
                              href="#"
                              className="badge bg-primary bg-opacity-10 text-primary"
                            >
                              طراحی وب
                            </a>
                            <a href="#" className="badge text-bg-dark">
                              همه سطح
                            </a>
                          </span>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-bookmark" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">دوره بازاریابی دیجیتال برای مبتدیان</a>
                        </h5>
                        {/* Rating */}
                        <div className="d-flex justify-content-between mb-2">
                          <div className="hstack gap-2">
                            <p className="text-warning m-0">
                              4.0
                              <i className="fas fa-star text-warning ms-1" />
                            </p>
                            <span className="small">(3500)</span>
                          </div>
                          <div className="hstack gap-2">
                            <p className="h6 fw-light mb-0 m-0">4500</p>
                            <span className="small">(دانشجو)</span>
                          </div>
                        </div>
                        {/* Time */}
                        <div className="hstack gap-3">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            12دقیقه
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            65 ویدیو
                          </span>
                        </div>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 bg-transparent">
                        <hr />
                        {/* Avatar and Price */}
                        <div className="d-flex justify-content-between align-items-center">
                          {/* Avatar */}
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm">
                              <Image
                                width={100}
                                height={100}
                                className="avatar-img rounded-1"
                                src="/images/avatar/04.jpg"
                                alt="avatar"
                              />
                            </div>
                            <p className="mb-0 ms-2">
                              <a href="#" className="h6 fw-light mb-0">
                                علی صالحی
                              </a>
                            </p>
                          </div>
                          {/* Price */}
                          <div>
                            <h5 className="text-success mb-0 item-show">
                              30,000 تومان
                            </h5>
                            <a
                              href="#"
                              className="btn btn-sm btn-success-soft item-show-hover"
                            >
                              <i className="fas fa-shopping-cart me-2" />
                              افزودن به سبد
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div>
                    <div className="card action-trigger-hover border bg-transparent">
                      {/* Image */}
                      <Image
                        width={100}
                        height={100}
                        src="/images/courses/4by3/17.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      {/* Card body */}
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-3">
                          <span className="hstack gap-2">
                            <a
                              href="#"
                              className="badge bg-primary bg-opacity-10 text-primary"
                            >
                              برنامه نویسی
                            </a>
                            <a href="#" className="badge text-bg-dark">
                              مقدماتی
                            </a>
                          </span>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-bookmark" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">آموزش ساخت سایت خبری با لاراول</a>
                        </h5>
                        {/* Rating */}
                        <div className="d-flex justify-content-between mb-2">
                          <div className="hstack gap-2">
                            <p className="text-warning m-0">
                              4.5
                              <i className="fas fa-star text-warning ms-1" />
                            </p>
                            <span className="small">(2000)</span>
                          </div>
                          <div className="hstack gap-2">
                            <p className="h6 fw-light mb-0 m-0">8000</p>
                            <span className="small">(دانشجو)</span>
                          </div>
                        </div>
                        {/* Time */}
                        <div className="hstack gap-3">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            24ساعت
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            55 ویدیو
                          </span>
                        </div>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 bg-transparent">
                        <hr />
                        {/* Avatar and Price */}
                        <div className="d-flex justify-content-between align-items-center">
                          {/* Avatar */}
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm">
                              <Image
                                width={100}
                                height={100}
                                className="avatar-img rounded-1"
                                src="/images/avatar/09.jpg"
                                alt="avatar"
                              />
                            </div>
                            <p className="mb-0 ms-2">
                              <a href="#" className="h6 fw-light mb-0">
                                الهام نصرتی
                              </a>
                            </p>
                          </div>
                          {/* Price */}
                          <div>
                            <h5 className="text-success mb-0 item-show">
                              135,000 تومان
                            </h5>
                            <a
                              href="#"
                              className="btn btn-sm btn-success-soft item-show-hover"
                            >
                              <i className="fas fa-shopping-cart me-2" />
                              افزودن به سبد
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                  {/* Card item START */}
                  <div>
                    <div className="card action-trigger-hover border bg-transparent">
                      {/* Image */}
                      <Image
                        width={100}
                        height={100}
                        src="/images/courses/4by3/16.jpg"
                        className="card-img-top"
                        alt="course image"
                      />
                      {/* Card body */}
                      <div className="card-body pb-0">
                        {/* Badge and favorite */}
                        <div className="d-flex justify-content-between mb-3">
                          <span className="hstack gap-2">
                            <a
                              href="#"
                              className="badge bg-primary bg-opacity-10 text-primary"
                            >
                              طراحی وب
                            </a>
                            <a href="#" className="badge text-bg-dark">
                              مقدماتی
                            </a>
                          </span>
                          <a href="#" className="h6 fw-light mb-0">
                            <i className="far fa-bookmark" />
                          </a>
                        </div>
                        {/* Title */}
                        <h5 className="card-title fw-normal">
                          <a href="#">آموزش مقدماتی کتابخانه Pygame</a>
                        </h5>
                        {/* Rating */}
                        <div className="d-flex justify-content-between mb-2">
                          <div className="hstack gap-2">
                            <p className="text-warning m-0">
                              4.0
                              <i className="fas fa-star text-warning ms-1" />
                            </p>
                            <span className="small">(2000)</span>
                          </div>
                          <div className="hstack gap-2">
                            <p className="h6 fw-light mb-0 m-0">1200</p>
                            <span className="small">(دانشجو)</span>
                          </div>
                        </div>
                        {/* Time */}
                        <div className="hstack gap-3">
                          <span className="h6 fw-light mb-0">
                            <i className="far fa-clock text-danger me-2" />
                            9ساعت
                          </span>
                          <span className="h6 fw-light mb-0">
                            <i className="fas fa-table text-orange me-2" />
                            21 ویدیو
                          </span>
                        </div>
                      </div>
                      {/* Card footer */}
                      <div className="card-footer pt-0 bg-transparent">
                        <hr />
                        {/* Avatar and Price */}
                        <div className="d-flex justify-content-between align-items-center">
                          {/* Avatar */}
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-sm">
                              <Image
                                width={100}
                                height={100}
                                className="avatar-img rounded-1"
                                src="/images/avatar/01.jpg"
                                alt="avatar"
                              />
                            </div>
                            <p className="mb-0 ms-2">
                              <a href="#" className="h6 fw-light mb-0">
                                زهرا حیدری
                              </a>
                            </p>
                          </div>
                          {/* Price */}
                          <div>
                            <h5 className="text-success mb-0 item-show">
                              69,000 تومان
                            </h5>
                            <a
                              href="#"
                              className="btn btn-sm btn-success-soft item-show-hover"
                            >
                              <i className="fas fa-shopping-cart me-2" />
                              افزودن به سبد
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Card item END */}
                </div>
              </div>
              {/* Slider END */}
            </div>
          </div>
        </section>
        {/* =======================
        Trending courses END */}
      </>
      <Footer />
    </>
  );
}

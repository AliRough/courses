"use client";
import Image from "next/image";
import React from "react";
import { TCourses } from "../../model/course.d";

export default function CourseCard(data: TCourses) {
  return (
    <>
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
                <h5 className="text-success mb-0 item-show">رایگـان</h5>
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
    </>
  );
}

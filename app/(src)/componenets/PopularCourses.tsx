"use client";
import React, { useState } from "react";
import { useCourseByTag } from "../hooks/request/requestCourse";
import { TCourses } from "../model/course.d";
import CourseTile from "../course/courseTile";

export default function PopularCourses() {
  const { data } = useCourseByTag("طراحی وب");
  const [tag, setTag] = useState();
  
  let filterdData = data?.filter((course: any) => course.category === tag);

  const showCoursHandler = (e: any) => {

    setTag(e.target.dataset.tag);
  };


  !tag && setTag("طراحی گرافیکی");

  return (
    <>
      {/* =======================
Popular course START */}
      <section>
        <div className="container">
          {/* Title */}
          <div className="row mb-4">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="fs-3">محبوب ترین دوره ها</h2>
              <p className="mb-0">
                هر موضوعی را در هر زمان مطالعه کنید. هزاران دوره آموزشی را با
                کمترین قیمت جستجو کنید!
              </p>
            </div>
          </div>
          {/* Tabs START */}
          <ul
            className="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3"
            id="course-pills-tab"
            role="tablist"
          >
            {/* Tab item */}
            <li className="nav-item me-2 me-sm-5">
              <button
                className={`nav-link mb-2 mb-md-0 ${tag==="طراحی وب"&&'active'}`}
                data-tag="طراحی وب"
                onClick={showCoursHandler}
              >
                طراحی وب
              </button>
            </li>
            {/* Tab item */}
            <li className="nav-item me-2 me-sm-5">
              <button
                className={`nav-link mb-2 mb-md-0 ${tag==="برنامه نویسی"&&'active'}`}
                data-tag="برنامه نویسی"
                onClick={showCoursHandler}
              >
                برنامه نویسی
              </button>
            </li>
            {/* Tab item */}
            <li className="nav-item me-2 me-sm-5">
              <button
                className={`nav-link mb-2 mb-md-0 ${tag==="طراحی گرافیکی"&&'active'}`}
                data-tag="طراحی گرافیکی"
                onClick={showCoursHandler}
              >
                طراحی گرافیکی
              </button>
            </li>
            {/* Tab item */}
            <li className="nav-item me-2 me-sm-5">
              <button
                className={`nav-link mb-2 mb-md-0 ${tag==="دیجیتال مارکتنیگ"&&'active'}`}
                data-tag="دیجیتال مارکتنیگ"
                onClick={showCoursHandler}
              >
                دیجیتال مارکتنیگ
              </button>
            </li>
            {/* Tab item */}
            <li className="nav-item me-2 me-sm-5">
              <button
                className={`nav-link mb-2 mb-md-0 ${tag==="بازار مالی"&&'active'}`}
                data-tag="بازار مالی"
                onClick={showCoursHandler}
              >
                بازار مالی
              </button>
            </li>
          </ul>
          {/* Tabs END */}
          {/* Tabs content START */}
          <div className="tab-content">
            <div className=" ">
              <div className="row g-4">
                {filterdData?.map((e: TCourses) => (
                  <div key={e?.id} className="col-sm-6 col-xl-4">
                    <CourseTile data={e} />
                  </div>
                ))}
              </div>
              {/* Row END */}
            </div>
          </div>
          {/* Tabs content END */}
        </div>
      </section>
      {/* =======================
Popular course END */}
    </>
  );
}

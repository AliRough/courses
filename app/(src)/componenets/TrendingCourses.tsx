"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useCourseAll, useCourseByTag } from "../hooks/request/requestCourse";
import { TCourses } from "../model/course.d";
import CourseCard from "./other/CourseCard";

export default function TrendingCourses() {
  const { data } = useCourseAll();
  console.log(data);

  return (
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
                className="tiny-slider-inner tns-outer pb-1 "
                id="tns-ow"
                data-autoplay="true"
                data-arrow="true"
                data-edge={2}
                data-dots="false"
                data-items={3}
                data-items-lg={2}
                data-items-sm={1}
              >
                {data?.map((e: any) => (
                  <CourseCard {...e} key={e.id} />
                ))}
              </div>
            </div>
            {/* Slider END */}
          </div>
        </div>
      </section>
      {/* =======================
Trending courses END */}
    </>
  );
}

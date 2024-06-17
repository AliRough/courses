'use client';

import HeaderBody from '@/app/(src)/componenets/headerBody';
import PaginationCenter from '@/app/(src)/componenets/pagination';
import CourseTile from '@/app/(src)/course/courseTile';
import { useGetAllCourses } from '@/app/(src)/hooks/request/requestCourse';
import CourseListFillter from '@/app/(src)/course/courseList/courseListFillter';
import CourseAdvancedSearch from '@/app/(src)/course/courseList/courseAdvancedSearch';
import Newsletter from '@/app/(src)/componenets/other/newsletter';

import { TCourses } from '@/app/(src)/model/course.d';
import { useEffect, useState } from 'react';
import LoadingCourse from '../../componenets/other/loading/course';

const CourseList = ({ searchParams }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useState('');
  const [Cid, setCid] = useState();

  const { data, refetch, isPending } = useGetAllCourses(
    currentPage,
    9,
    params,
    Cid,
  );
  console.log('data is -------------->', data);
  useEffect(() => {
    refetch();
  }, [currentPage]);
  useEffect(() => {
    let timer: any;
    clearTimeout(timer);
    let fetchData = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        refetch();
      }, 1000);
    };
    fetchData();
  }, [params]);

  console.log('Not completed');

  return (
    <>
      <HeaderBody name={'لیست دوره ها'} />
      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-xl-9'>
              <CourseListFillter
                data={data}
                params={params}
                setParams={setParams}
                Cid={Cid}
                seCid={setCid}
              />
              <div className='row g-4'>
                {isPending ? (
                  <LoadingCourse number={5} />
                ) : data?.data.data.length ? (
                  data?.data.data?.map((e: TCourses) => (
                    <div key={e?.id} className='col-sm-6 col-xl-4 '>
                      <CourseTile data={e} />
                    </div>
                  ))
                ) : (
                  <div className='tw-rounded-md p-2 !tw-border tw-border-gray-400 text-center'>
                    دوره ی مورد نظر شما یافت نشد !
                  </div>
                )}
              </div>
              <div className='col-12'>
                <PaginationCenter
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  data={data}
                />
              </div>
            </div>
            <CourseAdvancedSearch />
          </div>
        </div>
      </section>
      {/* <Newsletter /> */}
    </>
  );
};

export default CourseList;

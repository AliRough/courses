'use client';

import HeaderBody from '@/app/(src)/componenets/headerBody';
import PaginationCenter from '@/app/(src)/componenets/pagination';
import CourseTile from '@/app/(src)/course/courseTile';
import { useGetAllCourses } from '@/app/(src)/hooks/request/requestCourse';
import CourseListFillter from '@/app/(src)/course/courseList/courseListFillter';
import CourseAdvancedSearch from '@/app/(src)/course/courseList/courseAdvancedSearch';

import { TCourses } from '@/app/(src)/model/course.d';
import { useEffect, useState } from 'react';
import LoadingCourse from '../../componenets/other/loading/course';
import { useRouter } from 'next/navigation';
import { routes } from '../../routes';

const CourseList = ({ searchParams }: any) => {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useState('');

  const { data, refetch, isPending, isFetching } = useGetAllCourses(
    currentPage,
    9,
    params,
    searchParams.category,
  );

  useEffect(() => {
    refetch();
  }, [params]);

  const categoryFormHandler = (data: any) => {
    console.log(data);

    router.push(`${routes.courses}/all?category=${data.category}`);
  };

  return (
    <>
      <HeaderBody name={searchParams.category.replaceAll('-', ' ')} />

      <section className='py-5'>
        <div className='container'>
          <CourseListFillter
            data={data}
            params={params}
            setParams={setParams}
          />
          <div className='row'>
            <div className='col-lg-8 col-xl-9'>
              <div className='row g-4'>
                {Boolean(isPending || isFetching) ? (
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
            <CourseAdvancedSearch
              searchParams={searchParams}
              categoryFormHandler={categoryFormHandler}
            />
          </div>
        </div>
      </section>
      {/* <Newsletter /> */}
    </>
  );
};

export default CourseList;

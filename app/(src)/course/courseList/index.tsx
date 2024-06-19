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
import { useRouter } from 'next/navigation';
import { routes } from '../../routes';
import { useRecoilState } from 'recoil';
import { showfirstState } from '../../state/atoms';

const CourseList = ({ searchParams }: any) => {
  const router = useRouter();
  const [showFirst, setShowFirst]: any = useRecoilState(showfirstState);

  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useState('');
  const [Cid, setCid] = useState(showFirst?.category?.id);

  const { data, refetch, isPending, isFetching } = useGetAllCourses(
    currentPage,
    9,
    params,
    Cid,
  );
  console.log('data is -------------->', data);
  useEffect(() => {
    setCid(showFirst?.category?.id);
  }, [showFirst]);
  useEffect(() => {
    refetch();
  }, [currentPage, Cid]);
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

  const categoryFormHandler = (data: any) => {
    console.log(data);
    console.log(data);

    let category = JSON.parse(data.category);

    setCid(category.id);
    router.push(routes.courses + '/all?category=' + category.title);
  };

  console.log('Not completed');

  return (
    <>
      <HeaderBody name={searchParams.category} />
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

'use client';

import LoadingMiniPackage from '@/app/(src)/componenets/other/loading/miniPackage';
import CourseFillterCategory from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterCategory';
import CourseFillterLang from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterLang';
import CourseFillterLavel from '@/app/(src)/course/courseList/courseAdvancedSearch/courseFillterLavel';
import CoursefillterPrice from '@/app/(src)/course/courseList/courseAdvancedSearch/coursefillterPrice';
import { useGetAllPackages } from '@/app/(src)/hooks/request/requestCourse';
import { routes } from '@/app/(src)/routes';
import { packageIdState } from '@/app/(src)/state/atoms';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const CourseAdvancedSearch = ({ changePackageHandler, params }: any) => {
  const [perPage, setPerPage] = useState(5);
  const [packageId, setPackageId] = useRecoilState(packageIdState);

  const { data: packages, refetch, isPending } = useGetAllPackages(perPage);
  console.log('------>', packages);

  useEffect(() => {
    refetch();
  }, [perPage]);

  console.log('Not completed');

  return (
    <div className='tw-w-1/4 ps-2 md:tw-block tw-hidden '>
      <div className='tw-bg-white tw-rounded-xl tw-shadow-lg p-2  '>
        {isPending ? (
          <LoadingMiniPackage number={4} />
        ) : packages?.data.length ? (
          <>
            {packages?.data.map((pack: any, index: any) => {
              if (decodeURI(pack.slug) === decodeURI(params.Pslug)) {
                setPackageId(pack.id);
              }
              return (
                <Link href={routes.packages + '/' + pack?.slug} key={pack.id}>
                  <div className='tw-flex tw-items-center tw-border tw-rounded-md tw-bg-gray-50 shadow-sm p-2 mb-2 hover:tw-bg-gray-100'>
                    <>{params.Cslug}</>
                    <Image
                      className='tw-w-1/5 tw-rounded-full tw-aspect-square tw-bg-cover'
                      alt={pack.title}
                      width={100}
                      height={100}
                      src={pack.cover}
                    />
                    <span className='ps-2 tw-text-gray-600'>{pack.title}</span>
                  </div>
                </Link>
              );
            })}

            <button
              className=' tw-text-sm text-end btn btn-primary w-100 text-center'
              onClick={() => {
                setPerPage(perPage + 5);
              }}
            >
              <span>مشاهده بیشتر </span>
            </button>
          </>
        ) : (
          <div className='tw-rounded-md p-1 !tw-border tw-border-gray-400 text-center '>
            هیچ پکیجی یافت نشد !{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseAdvancedSearch;

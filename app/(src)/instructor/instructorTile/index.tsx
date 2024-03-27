'use client';

import Link from 'next/link';
import Image from 'next/image';

import Rating from '@/app/(src)/componenets/rating';

import { TInstructorRelated } from '@/app/(src)/model/instructor.d';

const InstructorTile = ({ data }: { data: TInstructorRelated }) => {
  console.log('Not completed');

  return (
    <div className='card bg-transparent'>
      <div className='position-relative'>
        <Image
          unoptimized={true}
          width='500'
          height='500'
          src={data?.image}
          className='card-img'
          alt='course image'
        />
        <div className='card-img-overlay d-flex flex-column p-3'>
          <div className='w-100 mt-auto text-end'>
            <Link href='#' className='badge text-bg-info rounded-1'>
              <i className='fas fa-user-graduate me-2'></i>
              {data?.courses}
            </Link>
            <Link href='#' className='badge text-bg-orange rounded-1'>
              <i className='fas fa-clipboard-list me-2'></i>
              {data?.students}
            </Link>
          </div>
        </div>
      </div>
      <div className='card-body text-center'>
        <h5 className='card-title'>
          <a href='#'>{data?.name}</a>
        </h5>
        <p className='mb-2'>{data?.categrory}</p>
        <ul className='list-inline hstack justify-content-center'>
          <Rating data={data?.rating} />
        </ul>
      </div>
    </div>
  );
};

export default InstructorTile;

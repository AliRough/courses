'use client';

import Image from 'next/image';
import Link from 'next/link';

import Rating from '@/app/(src)/componenets/rating';

import { TCourses } from '@/app/(src)/model/course.d';

const CourseTile = ({ data }: { data: TCourses }) => {
  console.log('Not completed');

  return (
    <div className='card shadow h-100'>
      <Image
        unoptimized={true}
        src={'https://fanavaran.liara.run/' + data?.cover}
        width='500'
        height='500'
        className='card-img-top'
        alt='course image'
      />
      <div className='card-body pb-0'>
        <div className='d-flex justify-content-between mb-2'>
          <>{console.log('Link')}</>
          <Link href='#' className='badge bg-purple bg-opacity-10 text-purple'>
            {data?.level}
          </Link>
          <a href='#' className='h6 fw-light mb-0'>
            <i className='far fa-heart'></i>
          </a>
        </div>
        <>{console.log('Link')}</>
        <h5 className='card-title fw-normal'>
          <Link href={'/course/' + data?.id}>{data?.title}</Link>
        </h5>
        <p className='mb-2 text-truncate-2'>{data?.description}</p>
        <ul className='list-inline mb-0'>
          {data?.rating && <Rating data={data?.rating} />}
        </ul>
      </div>
      <div className='card-footer pt-0 pb-3'>
        <hr />
        <div className='d-flex justify-content-between'>
          <span className='h6 fw-light mb-0'>
            <i className='far fa-clock text-danger me-2'></i>
            {data?.time}
          </span>
          <span className='h6 fw-light mb-0'>
            <i className='fas fa-table text-orange me-2'></i>
            {data?.videos} ویدیو
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseTile;

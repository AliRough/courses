'use client';

import Image from 'next/image';
import Link from 'next/link';

import Rating from '@/app/(src)/componenets/rating';

import { TCourses } from '@/app/(src)/model/course.d';
import { routes } from '../../routes';

const CourseTile = ({ data }: { data: any }) => {
  console.log('Not completed');

  return (
    <div className='card shadow h-100 tw-max-w-96 rounded-4 overflow-hidden tw-w-full '>
      {/* <Image
        unoptimized={true}
        src={
          (data?.image && '/' + data?.image) ||
          process.env.NEXT_PUBLIC_ASSETS_URL  + data?.cover
        }
        width='500'
        height='500'
        className='card-img-top'
        alt='course image'
      /> */}
      <Image
        unoptimized={true}
        blurDataURL={`/images/courses/4by3/artist.svg`}
        placeholder='blur'
        src={data?.cover}
        // src={`/images/courses/4by3/${Math.floor(Math.random() * 16) + 1}.jpg`}
        width='500'
        height='500'
        className='card-img-top !tw-w-full tw-aspect-[4/3] overflow-hidden '
        alt='course image'
      />
      <div className='card-body pb-0'>
        <div className='d-flex justify-content-between mb-2'>
          <Link href='#' className='badge bg-purple bg-opacity-10 text-purple'>
            {data?.packageName}
          </Link>
          <a href='#' className='h6 fw-light mb-0'>
            <i className='far fa-heart'></i>
          </a>
        </div>
        <h5 className='card-title fw-normal'>
          <Link href={routes.courses + '/' + data?.id}>{data?.title}</Link>
        </h5>
        <p className='mb-2 text-truncate-2'>{data?.description}</p>
        <ul className='list-inline mb-0'>
          {data?.rating && <Rating data={data?.rating} />}
        </ul>
      </div>
      <div className='card-footer pt-0 pb-3 '>
        <hr />
        <div className='d-flex justify-content-between'>
          <span className='h6 fw-light mb-0'>
            <i className='far fa-clock text-danger me-2'></i>
            {data?.durationMinutes}
          </span>
          <span className='h6 fw-light mb-0'>
            <i className='fas fa-table text-orange me-2'></i>
            {data?.episodeCount} ویدیو
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseTile;

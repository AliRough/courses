'use client';

import Image from 'next/image';
import Link from 'next/link';

import { TInstructorListItem } from '@/app/(src)/model/instructor.d';

const InstructorListItem = ({ data }: { data: TInstructorListItem }) => {
  const {
    id,
    name,
    university,
    description,
    rating,
    image,
    categrory,
    social_media,
  } = data;

  console.log('link نام مدرس');

  return (
    <div className='col-lg-10 col-xl-6'>
      <div className='card shadow p-2'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <Image
              unoptimized={true}
              src={image}
              className='rounded-3'
              alt='...'
              width='500'
              height='500'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <div className='d-sm-flex justify-content-sm-between mb-2 mb-sm-3'>
                <div>
                  {name && (
                    <h5 className='card-title mb-0'>
                      <Link href={'/instructor/' + id}>{name}</Link>
                    </h5>
                  )}
                  {university && (
                    <p className='small mb-2 mb-sm-0'>مدرس {university}</p>
                  )}
                </div>
                <span className='h6 fw-light'>
                  {rating}
                  <i className='fas fa-star text-warning ms-1'></i>
                </span>
              </div>
              {description && (
                <p className='text-truncate-2 mb-3'>{description}</p>
              )}
              <div className='d-sm-flex justify-content-sm-between align-items-center'>
                {categrory && (
                  <h6 className='text-orange mb-0 fw-normal'>{categrory}</h6>
                )}
                <ul className='list-inline mb-0 mt-3 mt-sm-0'>
                  {social_media?.facebook && (
                    <li className='list-inline-item'>
                      <Link
                        className='mb-0 me-1 text-facebook'
                        href={social_media?.facebook}
                      >
                        <i className='fab fa-fw fa-facebook-f'></i>
                      </Link>
                    </li>
                  )}
                  {social_media?.instagram && (
                    <li className='list-inline-item'>
                      <Link
                        className='mb-0 me-1 text-instagram-gradient'
                        href={social_media?.instagram}
                      >
                        <i className='fab fa-fw fa-instagram'></i>
                      </Link>
                    </li>
                  )}
                  {social_media?.twitter && (
                    <li className='list-inline-item'>
                      <Link
                        className='mb-0 me-1 text-twitter'
                        href={social_media?.twitter}
                      >
                        <i className='fab fa-fw fa-twitter'></i>
                      </Link>
                    </li>
                  )}
                  {social_media?.facebook && (
                    <li className='list-inline-item'>
                      <Link
                        className='mb-0 text-linkedin'
                        href={social_media?.facebook}
                      >
                        <i className='fab fa-fw fa-linkedin-in'></i>
                      </Link>
                    </li>
                  )}
                  {social_media?.telegram && (
                    <li className='list-inline-item'>
                      <Link
                        className='mb-0 text-linkedin'
                        href={social_media?.telegram}
                      >
                        <i className='fab fa-fw fa-telegram'></i>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorListItem;

'use client';

import clsx from 'clsx';

const Rating = ({ data }: { data: number }) => {
  return (
    <>
      <li className='list-inline-item me-0 small'>
        <i
          className={clsx(
            data > 4 ? 'fas' : 'far',
            data == 4.5 ? 'fa-star-half-alt' : 'fa-star',
            'text-warning',
          )}
        ></i>
      </li>
      <li className='list-inline-item me-0 small'>
        <i
          className={clsx(
            data > 3 ? 'fas' : 'far',
            data == 3.5 ? 'fa-star-half-alt' : 'fa-star',
            'text-warning',
          )}
        ></i>
      </li>
      <li className='list-inline-item me-0 small'>
        <i
          className={clsx(
            data > 2 ? 'fas' : 'far',
            data == 2.5 ? 'fa-star-half-alt' : 'fa-star',
            'text-warning',
          )}
        ></i>
      </li>
      <li className='list-inline-item me-0 small'>
        <i
          className={clsx(
            data > 1 ? 'fas' : 'far',
            data == 1.5 ? 'fa-star-half-alt' : 'fa-star',
            'text-warning',
          )}
        ></i>
      </li>
      <li className='list-inline-item me-0 small'>
        <i
          className={clsx(
            data > 0 ? 'fas' : 'far',
            data == 0.5 ? 'fa-star-half-alt' : 'fa-star',
            'text-warning',
          )}
        ></i>
      </li>
      <li className='list-inline-item ms-2 h6 fw-light mb-0'>{data}/5.0</li>
    </>
  );
};

export default Rating;

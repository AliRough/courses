'use client';

import Link from 'next/link';

const PaginationCenter = () => {
  console.log('Pagination change location');
  return (
    <nav className='mt-4 d-flex justify-content-center' aria-label='navigation'>
      <ul className='pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0'>
        <li className='page-item mb-0'>
          <Link className='page-link' href='#' tabIndex={-1}>
            <i className='fas fa-angle-double-right'></i>
          </Link>
        </li>
        <li className='page-item mb-0'>
          <Link className='page-link' href='#'>
            1
          </Link>
        </li>
        <li className='page-item mb-0 active'>
          <Link className='page-link' href='#'>
            2
          </Link>
        </li>
        <li className='page-item mb-0'>
          <Link className='page-link' href='#'>
            ..
          </Link>
        </li>
        <li className='page-item mb-0'>
          <Link className='page-link' href='#'>
            6
          </Link>
        </li>
        <li className='page-item mb-0'>
          <Link className='page-link' href='#'>
            <i className='fas fa-angle-double-left'></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationCenter;

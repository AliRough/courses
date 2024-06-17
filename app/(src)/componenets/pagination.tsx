'use client';

import Link from 'next/link';

const PaginationCenter = ({ data, setCurrentPage, currentPage }: any) => {
  const lastPage = Math.ceil(data?.data.total / data?.perPage);
  if (lastPage === 1 || !data?.data.data[0]) {
    return;
  }

  console.log('Pagination change location');

  return (
    data && (
      <nav
        className='mt-4 d-flex justify-content-center'
        aria-label='navigation'
      >
        <ul className='pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0'>
          {currentPage !== 1 && (
            <>
              <li className='page-item mb-0'>
                <button
                  className={`page-link  `}
                  onClick={() => {
                    setCurrentPage((page: any) => page - 1);
                  }}
                >
                  <i className='fas fa-angle-double-right'></i>
                </button>
              </li>
              <li className={`page-item mb-0 `}>
                <button
                  className='page-link'
                  onClick={() => {
                    setCurrentPage(1);
                  }}
                >
                  1
                </button>
              </li>
            </>
          )}

          <li className='page-item mb-0 active '>
            <span className='page-link'>{currentPage}</span>
          </li>

          {currentPage !== lastPage && (
            <>
              <li className='page-item mb-0'>
                <button
                  className='page-link'
                  onClick={() => {
                    setCurrentPage(lastPage);
                  }}
                >
                  {lastPage}
                </button>
              </li>

              <li className='page-item mb-0'>
                <button
                  className='page-link'
                  onClick={() => {
                    setCurrentPage((page: any) => page + 1);
                  }}
                >
                  <i className='fas fa-angle-double-left'></i>
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    )
  );
};

export default PaginationCenter;

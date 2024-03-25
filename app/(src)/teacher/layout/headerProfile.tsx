'use client';

import Image from 'next/image';
import Link from 'next/link';

const LayoutProfileHeaderT = () => {
  console.log('Not completed');

  return (
    <section className='pt-0'>
      <div className='container-fluid px-0'>
        <div
          className='bg-blue h-100px h-md-200px rounded-0'
          style={{
            background: 'url(/images/pattern/04.png) no-repeat center center',
            backgroundSize: 'cover',
          }}
        ></div>
      </div>
      <div className='container mt-n4'>
        <div className='row'>
          <div className='col-12'>
            <div className='card bg-transparent card-body p-0'>
              <div className='row d-flex justify-content-between'>
                <div className='col-auto mt-4 mt-md-0'>
                  <div className='avatar avatar-xxl mt-n3'>
                    <Image
                      unoptimized={true}
                      width='500'
                      height='500'
                      className='avatar-img rounded-circle border border-white border-3 shadow'
                      src='/images/avatar/01.jpg'
                      alt=''
                    />
                  </div>
                </div>
                <div className='col d-md-flex justify-content-between align-items-center mt-4'>
                  <div>
                    <h1 className='my-1 fs-5'>
                      الهام حسینی{' '}
                      <i className='bi bi-patch-check-fill text-info small'></i>
                    </h1>
                    <ul className='list-inline mb-0'>
                      <li className='list-inline-item h6 fw-light me-3 mb-1 mb-sm-0'>
                        <i className='fas fa-star text-warning me-2'></i>4.5/5.0
                      </li>
                      <li className='list-inline-item h6 fw-light me-3 mb-1 mb-sm-0'>
                        <i className='fas fa-user-graduate text-orange me-2'></i>
                        12k شرکت کننده
                      </li>
                      <li className='list-inline-item h6 fw-light me-3 mb-1 mb-sm-0'>
                        <i className='fas fa-book text-purple me-2'></i>25 دوره
                      </li>
                    </ul>
                  </div>
                  <div className='d-flex align-items-center mt-2 mt-md-0'>
                    <Link
                      href='/profile/t/create-course'
                      className='btn btn-success mb-0'
                    >
                      افزودن دوره
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <hr className='d-xl-none' />
            <div className='col-12 col-xl-3 d-flex justify-content-between align-items-center'>
              <a className='h6 mb-0 fw-bold d-xl-none' href='#'>
                منوی کاربری
              </a>
              <button
                className='btn btn-primary d-xl-none'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasSidebar'
                aria-controls='offcanvasSidebar'
              >
                <i className='fas fa-sliders-h'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutProfileHeaderT;

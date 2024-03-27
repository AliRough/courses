'use client';

import Link from 'next/link';

const InstructorListFilter = () => {
  return (
    <div className='row mb-4 align-items-center'>
      <div className='col-sm-6 col-xl-4'>
        <form className='border rounded p-2'>
          <div className='input-group input-borderless'>
            <input
              className='form-control me-1'
              type='search'
              placeholder='جستجوی مدرس'
            />
            <button type='button' className='btn btn-primary mb-0 rounded'>
              <i className='fas fa-search'></i>
            </button>
          </div>
        </form>
      </div>
      <div className='col-sm-6 col-xl-3 mt-3 mt-lg-0'>
        <form className='border rounded p-2 input-borderless'>
          <select
            className='form-select form-select-sm js-choice'
            aria-label='.form-select-sm'
          >
            <option value=''>دسته بندی</option>
            <option>همه</option>
            <option>برنامه نویسی</option>
            <option>طراحی وب</option>
            <option>حسابداری</option>
            <option>داده کاوی</option>
            <option>مالی</option>
            <option>گرافیک</option>
            <option>عکاسی</option>
            <option>نوشتاری</option>
            <option>SEO</option>
          </select>
        </form>
      </div>
      <div className='col-sm-6 col-xl-3 mt-3 mt-xl-0'>
        <form className='border rounded p-2 input-borderless'>
          <select
            className='form-select form-select-sm js-choice'
            aria-label='.form-select-sm'
          >
            <option value=''>مرتب سازی</option>
            <option>پربازدیدترین</option>
            <option>پرفروش ترین</option>
            <option>امتیاز بالا</option>
          </select>
        </form>
      </div>
      <div className='col-sm-6 col-xl-2 mt-3 mt-xl-0 d-grid'>
        <Link href='#' className='btn btn-lg btn-primary mb-0'>
          فیلتر
        </Link>
      </div>
    </div>
  );
};

export default InstructorListFilter;

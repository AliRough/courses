'use client';

import { useGetAllCategories } from '@/app/(src)/hooks/request/requestCourse';

const CourseFillterCategory = () => {
  const { data } = useGetAllCategories();
  console.log(data);

  return (
    <div className='card card-body shadow p-4 mb-4'>
      <h4 className='mb-3 fs-6'>فیلتر دسته بندی</h4>
      <div className='col-12'>
        {data?.data.length ? (
          data?.data.map((category: any, index: any) => (
            <div
              key={category.id}
              className='d-flex justify-content-between align-items-center'
              id={index === 2 ? 'multiCollapseExample1' : ''}
            >
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id={'flexCheckDefault9'}
                />
                <label className='form-check-label' htmlFor='flexCheckDefault9'>
                  {category.title}
                </label>
              </div>
              <span className='small'>({category.videoCount})</span>
            </div>
          ))
        ) : (
          <div className='tw-rounded-md p-1 !tw-border tw-border-gray-400 text-center'>
            هیچ دسته بندی یافت نشد !{' '}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseFillterCategory;

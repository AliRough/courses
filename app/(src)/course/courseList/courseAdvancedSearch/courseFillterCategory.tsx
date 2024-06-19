'use client';

import { useGetAllCategories } from '@/app/(src)/hooks/request/requestCourse';

const CourseFillterCategory = ({ input }: any) => {
  const { data: allCategories } = useGetAllCategories();

  return (
    <div className='card card-body shadow p-4 mb-4'>
      <h4 className='mb-3 fs-6'>فیلتر دسته بندی</h4>
      <div className='col-12'>
        {allCategories?.data.length ? (
          allCategories?.data.map((category: any, index: any) => (
            <div
              key={category.id}
              className='d-flex justify-content-between align-items-center'
              id={index === 2 ? 'multiCollapseExample1' : ''}
            >
              <div className='form-check'>
                <input
                  name='category'
                  className='form-check-input'
                  type='radio'
                  value={JSON.stringify(category)}
                  id={'flexCheckDefault9'}
                  {...input.category}
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

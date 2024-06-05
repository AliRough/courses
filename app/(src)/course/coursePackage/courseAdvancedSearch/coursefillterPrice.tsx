'use client';

const CoursefillterPrice = () => {
  return (
    <div className='card card-body shadow p-4 mb-4'>
      <h4 className='mb-3 fs-6'>فیلتر قیمت</h4>
      <ul className='list-inline mb-0'>
        <li className='list-inline-item'>
          <input
            type='radio'
            className='btn-check'
            name='options'
            id='option1'
          />
          <label
            className='btn btn-light btn-primary-soft-check'
            htmlFor='option1'
          >
            همه
          </label>
        </li>
        <li className='list-inline-item'>
          <input
            type='radio'
            className='btn-check'
            name='options'
            id='option2'
          />
          <label
            className='btn btn-light btn-primary-soft-check'
            htmlFor='option2'
          >
            رایگان
          </label>
        </li>
        <li className='list-inline-item'>
          <input
            type='radio'
            className='btn-check'
            name='options'
            id='option3'
          />
          <label
            className='btn btn-light btn-primary-soft-check'
            htmlFor='option3'
          >
            خریدنی
          </label>
        </li>
      </ul>
    </div>
  );
};

export default CoursefillterPrice;

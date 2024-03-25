'use client';

const CourseFillterCategory = () => {
  return (
    <div className='card card-body shadow p-4 mb-4'>
      <h4 className='mb-3 fs-6'>فیلتر دسته بندی</h4>
      <div className='col-12'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckDefault9'
            />
            <label className='form-check-label' htmlFor='flexCheckDefault9'>
              همه
            </label>
          </div>
          <span className='small'>(1256)</span>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckDefault10'
            />
            <label className='form-check-label' htmlFor='flexCheckDefault10'>
              طراحی وب
            </label>
          </div>
          <span className='small'>(365)</span>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckDefault11'
            />
            <label className='form-check-label' htmlFor='flexCheckDefault11'>
              برنامه نویسی
            </label>
          </div>
          <span className='small'>(156)</span>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckDefault12'
            />
            <label className='form-check-label' htmlFor='flexCheckDefault12'>
              حسابداری
            </label>
          </div>
          <span className='small'>(65)</span>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckDefault17'
            />
            <label className='form-check-label' htmlFor='flexCheckDefault17'>
              بانک اطلاعات
            </label>
          </div>
          <span className='small'>(245)</span>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckDefault13'
            />
            <label className='form-check-label' htmlFor='flexCheckDefault13'>
              داده کاوی
            </label>
          </div>
          <span className='small'>(184)</span>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckDefault14'
            />
            <label className='form-check-label' htmlFor='flexCheckDefault14'>
              شبکه
            </label>
          </div>
          <span className='small'>(65)</span>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='flexCheckDefault15'
            />
            <label className='form-check-label' htmlFor='flexCheckDefault15'>
              عکاسی
            </label>
          </div>
          <span className='small'>(99)</span>
        </div>
        <div className='collapse multi-collapse' id='multiCollapseExample1'>
          <div className='card card-body p-0'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault16'
                />
                <label
                  className='form-check-label'
                  htmlFor='flexCheckDefault16'
                >
                  طراحی سایت
                </label>
              </div>
              <span className='small'>(178)</span>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault18'
                />
                <label
                  className='form-check-label'
                  htmlFor='flexCheckDefault18'
                >
                  سئو
                </label>
              </div>
              <span className='small'>(104)</span>
            </div>
          </div>
        </div>
        <a
          className=' p-0 mb-0 mt-2 btn-more d-flex align-items-center'
          data-bs-toggle='collapse'
          href='#multiCollapseExample1'
          role='button'
          aria-expanded='false'
          aria-controls='multiCollapseExample1'
        >
          مشاهده <span className='see-more ms-1'>بیشتر</span>
          <span className='see-less ms-1'>کمتر</span>
          <i className='fas fa-angle-down ms-2'></i>
        </a>
      </div>
    </div>
  );
};

export default CourseFillterCategory;

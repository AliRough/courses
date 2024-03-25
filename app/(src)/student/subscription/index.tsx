'use client';

const ProfileStudentSubscription = () => {
  console.log('Not completed');

  return (
    <div className='card card-body bg-transparent border rounded-3'>
      <div className='row g-4'>
        <div className='col-6 col-lg-3'>
          <span>پکیج فعال</span>
          <h4 className='fs-5'>پایه</h4>
        </div>
        <div className='col-6 col-lg-3'>
          <span>محدودیت ماهانه</span>
          <h4 className='fs-5'>نامحدود</h4>
        </div>
        <div className='col-6 col-lg-3'>
          <span>هزینه</span>
          <h4 className='fs-5'>75 تومان/ماهانه</h4>
        </div>
        <div className='col-6 col-lg-3'>
          <span>تاریخ تمدید</span>
          <h4 className='fs-5'>17 آبان، 1400</h4>
        </div>
      </div>
      <div className='overflow-hidden my-4'>
        <h6 className='mb-0'>85%</h6>
        <div className='progress progress-sm bg-primary bg-opacity-10'>
          <div
            className='progress-bar bg-primary aos'
            role='progressbar'
            data-aos='slide-left'
            data-aos-delay='200'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            style={{ width: '85%' }}
            aria-valuenow='85'
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
      </div>
      <div className='d-sm-flex justify-content-sm-between align-items-center'>
        <div>
          <div className='d-sm-flex'>
            <div className='form-check form-switch form-check-md'>
              <input
                className='form-check-input'
                type='checkbox'
                id='checkPrivacy1'
                checked
              />
              <label className='form-check-label' htmlFor='checkPrivacy1'>
                تمدید خودکار
              </label>
            </div>
          </div>
          <p className='mb-0 small'>
            پکیج شما به طور خودکار در تاریخ: 1400/12/18 تمدید می شود. مبلغ
            پرداخت: 250 تومان
          </p>
        </div>
        <div className='mt-2 mt-sm-0'>
          <button
            type='button'
            className='btn btn-sm btn-danger-soft me-2 mb-0'
          >
            لغو پکیج
          </button>
          <a href='#' className='btn btn-sm btn-success mb-0'>
            ارتقای پکیج
          </a>
        </div>
      </div>
      <hr />
      <div className='row'>
        <h6 className='mb-3'>امکانات پکیج</h6>
        <div className='col-md-6'>
          <ul className='list-unstyled'>
            <li className='mb-3 h6 fw-light'>
              <i className='bi bi-patch-check-fill text-success me-2'></i>حداکثر
              5 کاربر در ماه
            </li>
            <li className='mb-3 h6 fw-light'>
              <i className='bi bi-patch-check-fill text-success me-2'></i>ارائه
              5 هاست و دامنه رایگان
            </li>
            <li className='mb-3 h6 fw-light'>
              <i className='bi bi-patch-check-fill text-success me-2'></i>سفارشی
              سازی رایگان
            </li>
            <li className='mb-3 h6 fw-light'>
              <i className='bi bi-patch-check-fill text-success me-2'></i>الویت
              نمایش و بازدید بالا
            </li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='list-unstyled'>
            <li className='mb-3 h6 fw-light'>
              <i className='bi bi-patch-check-fill text-success me-2'></i>
              پشتیبانی 24/7 اختصاصی
            </li>
            <li className='mb-3 h6 fw-light'>
              <i className='bi bi-patch-check-fill text-success me-2'></i>به روز
              رسانی نامحدود
            </li>
            <li className='h6 fw-light'>
              <i className='bi bi-patch-check-fill text-success me-2'></i>ارتباط
              مستقیم با واتساپ استاد
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileStudentSubscription;

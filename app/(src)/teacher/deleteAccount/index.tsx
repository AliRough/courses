'use client';

const ProfileTeacherDeleteAccount = () => {
  console.log('Not completed');

  return (
    <div className='card border bg-transparent rounded-3 mb-0'>
      <div className='card-header bg-transparent border-bottom'>
        <h3 className='card-header-title mb-0 ff-vb fs-5'>
          غیرفعال کردن اکانت
        </h3>
      </div>
      <div className='card-body'>
        <h6>قبل از حذف</h6>
        <ul>
          <li>
            از اطلاعات خود یک نسخه پشتیبان <a href='#'> پشتیبان</a> تهیه کنید
          </li>
          <li>
            اگر حساب خود را حذف کنید، تمام اطلاعات خود را از دست خواهید داد.
          </li>
        </ul>
        <div className='form-check form-check-md my-4'>
          <input
            className='form-check-input'
            type='checkbox'
            value=''
            id='deleteaccountCheck'
          />
          <label className='form-check-label' htmlFor='deleteaccountCheck'>
            بله، من می خواهم حساب خود را حذف کنم.
          </label>
        </div>
        <a href='#' className='btn btn-success-soft mb-2 mb-sm-0'>
          منصرف شدم
        </a>
        <a href='#' className='btn btn-danger mb-0'>
          حذف اکانت
        </a>
      </div>
    </div>
  );
};

export default ProfileTeacherDeleteAccount;

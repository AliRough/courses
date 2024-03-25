'use client';

const ProfileTeacherEarningT = () => {
  console.log('Not completed');

  return (
    <>
      <div className='row g-4'>
        <div className='col-sm-6 col-lg-4'>
          <div className='text-center p-4 bg-light rounded-3'>
            <h6 className='text-body'>فروش این ماه</h6>
            <h2 className='mb-0 fs-4'>337,500 تومان</h2>
          </div>
        </div>
        <div className='col-sm-6 col-lg-4'>
          <div className='text-center p-4 bg-light rounded-3'>
            <h6 className='text-body'>
              پرداخت شده
              <a
                tabIndex={0}
                className='h6 mb-0'
                role='button'
                data-bs-toggle='popover'
                data-bs-trigger='focus'
                data-bs-placement='top'
                data-bs-content='با احتساب مالیات'
              >
                <i className='bi bi-info-circle-fill small'></i>
              </a>
            </h6>
            <h2 className='mb-0 fs-4'>250,000 تومان</h2>
          </div>
        </div>
        <div className='col-sm-6 col-lg-4'>
          <div className='text-center p-4 bg-light rounded-3'>
            <h6 className='text-body'>میانگین درآمد</h6>
            <h2 className='mb-0 fs-4'>500,000 تومان</h2>
          </div>
        </div>
      </div>
      <div className='card card-body bg-transparent rounded-top border overflow-hidden p-0 mt-5'>
        <div className='row g-4 p-4'>
          <div className='col-sm-6 col-md-4'>
            <span className='badge text-bg-dark'>ماه جاری</span>
            <h4 className='text-primary my-2 fs-5'>270,000 تومان</h4>
            <p className='mb-0'>
              <span className='text-success me-1'>
                0.20%<i className='bi bi-arrow-up'></i>
              </span>
              نسبت به ماه قبل
            </p>
          </div>
          <div className='col-sm-6 col-md-4'>
            <span className='badge text-bg-dark'>ماه گذشته</span>
            <h4 className='my-2 fs-5'>75,000 تومان</h4>
            <p className='mb-0'>
              <span className='text-danger me-1'>
                0.10%<i className='bi bi-arrow-down'></i>
              </span>
              نسبت به ماه قبل
            </p>
          </div>
        </div>
        <div id='ChartPayoutEarning'></div>
      </div>
      <div className='card bg-transparent border rounded-3 mt-5'>
        <div className='card-header bg-transparent'>
          <h5 className='mb-0'>پنج منبع برتر درآمد</h5>
        </div>
        <div className='card-body'>
          <div className='row g-4 g-md-5 align-items-center'>
            <div className='col-md-6'>
              <div id='ChartPageViews'></div>
            </div>
            <div className='col-md-6'>
              <ul className='list-group list-group-borderless mb-3'>
                <li className='list-group-item'>
                  <h6 className='mb-0'>دوره</h6>
                </li>
                <li className='list-group-item'>
                  <i className='text-success fas fa-circle me-2'></i>آموزش
                  Laravel
                </li>
                <li className='list-group-item'>
                  <i className='text-warning fas fa-circle me-2'></i>آموزش HTML
                </li>
                <li className='list-group-item'>
                  <i className='text-danger fas fa-circle me-2'></i>آموزش
                  JavaScript
                </li>
                <li className='list-group-item'>
                  <i className='text-primary fas fa-circle me-2'></i>آموزش Figma
                </li>
                <li className='list-group-item'>
                  <i className='text-secondary fas fa-circle me-2'></i>آموزش
                  React-Native
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTeacherEarningT;

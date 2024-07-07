import React from 'react';

export default function teacherSingleProfile() {
  return (
    <>
      {/* =======================
Page content START */}
      <section className='pt-5 pb-0'>
        <div className='container'>
          <div className='row g-0 g-lg-5'>
            {/* Left sidebar START */}
            <div className='col-lg-4'>
              <div className='row'>
                <div className='col-md-6 col-lg-12'>
                  {/* Instructor image START */}
                  <div className='card shadow p-2 mb-4 text-center'>
                    <div className='rounded-3'>
                      {/* Image */}
                      <img
                        src='assets/images/instructor/07.jpg'
                        className='card-img'
                        alt='course image'
                      />
                    </div>
                    {/* Card body */}
                    <div className='card-body px-3'>
                      {/* Rating */}
                      <ul className='list-inline'>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star-half-alt text-warning' />
                        </li>
                        <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                          4.5/5.0
                        </li>
                      </ul>
                      {/* Social media button */}
                      <ul className='list-inline mb-0'>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn px-2 btn-sm bg-facebook' href='#'>
                            <i className='fab fa-fw fa-facebook-f' />
                          </a>{' '}
                        </li>
                        <li className='list-inline-item'>
                          {' '}
                          <a
                            className='btn px-2 btn-sm bg-instagram-gradient'
                            href='#'
                          >
                            <i className='fab fa-fw fa-instagram' />
                          </a>{' '}
                        </li>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn px-2 btn-sm bg-twitter' href='#'>
                            <i className='fab fa-fw fa-twitter' />
                          </a>{' '}
                        </li>
                        <li className='list-inline-item'>
                          {' '}
                          <a className='btn px-2 btn-sm bg-linkedin' href='#'>
                            <i className='fab fa-fw fa-linkedin-in' />
                          </a>{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Instructor image END */}
                </div>
                <div className='col-md-6 col-lg-12'>
                  <div className='card card-body shadow p-4 mb-4'>
                    {/* Education START */}
                    {/* Title */}
                    <h4 className='mb-3 fs-5'>تحصیلات</h4>
                    {/* Education item */}
                    <div className='d-flex align-items-center mb-4'>
                      <span className='icon-md mb-0 bg-light rounded-3'>
                        <i className='fas fa-graduation-cap' />
                      </span>
                      <div className='ms-3'>
                        <h6 className='mb-0 fw-normal'>دانشگاه امیرکبیر</h6>
                        <p className='mb-0 small'>لیسانس گرافیک کامپیوتری</p>
                      </div>
                    </div>
                    {/* Education item */}
                    <div className='d-flex align-items-center mb-4'>
                      <span className='icon-md mb-0 bg-light rounded-3'>
                        <i className='fas fa-graduation-cap' />
                      </span>
                      <div className='ms-3'>
                        <h6 className='mb-0 fw-normal'>دانشگاه شریف</h6>
                        <p className='mb-0 small'>
                          کارشناسی ارشد گرافیک کامپیوتری
                        </p>
                      </div>
                    </div>
                    {/* Education item */}
                    <div className='d-flex align-items-center mb-4'>
                      <span className='icon-md mb-0 bg-light rounded-3'>
                        <i className='fas fa-graduation-cap' />
                      </span>
                      <div className='ms-3'>
                        <h6 className='mb-0 fw-normal'>دانشگاه آزاد تهران</h6>
                        <p className='mb-0 small'>لیسانس گرافیک کامپیوتری</p>
                      </div>
                    </div>
                    {/* Education END */}
                    <hr /> {/* Divider */}
                    {/* Skills START */}
                    <h4 className='mb-3 fs-5'>مهارت ها</h4>
                    {/* Progress item */}
                    <div className='overflow-hidden mb-4'>
                      <h6 className='uppercase fw-normal'>طراحی گرافیک</h6>
                      <div className='progress progress-sm bg-primary bg-opacity-10'>
                        <div
                          className='progress-bar bg-primary aos'
                          role='progressbar'
                          data-aos='slide-left'
                          data-aos-delay={200}
                          data-aos-duration={1000}
                          data-aos-easing='ease-in-out'
                          style={{ width: '90%' }}
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className='progress-percent-simple h6 mb-0'>
                            90%
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Progress item */}
                    <div className='overflow-hidden mb-4'>
                      <h6 className='uppercase fw-normal'>طراحی وب</h6>
                      <div className='progress progress-sm bg-success bg-opacity-10'>
                        <div
                          className='progress-bar bg-success aos'
                          role='progressbar'
                          data-aos='slide-left'
                          data-aos-delay={200}
                          data-aos-duration={1000}
                          data-aos-easing='ease-in-out'
                          style={{ width: '80%' }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className='progress-percent-simple h6 mb-0'>
                            80%
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Progress item */}
                    <div className='overflow-hidden mb-4'>
                      <h6 className='uppercase fw-normal'>HTML/CSS</h6>
                      <div className='progress progress-sm bg-warning bg-opacity-15'>
                        <div
                          className='progress-bar bg-warning aos'
                          role='progressbar'
                          data-aos='slide-left'
                          data-aos-delay={200}
                          data-aos-duration={1000}
                          data-aos-easing='ease-in-out'
                          style={{ width: '60%' }}
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className='progress-percent-simple h6 mb-0'>
                            60%
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Progress item */}
                    <div className='overflow-hidden mb-4'>
                      <h6 className='uppercase fw-normal'>UI/UX</h6>
                      <div className='progress progress-sm bg-danger bg-opacity-10'>
                        <div
                          className='progress-bar bg-danger aos'
                          role='progressbar'
                          data-aos='slide-left'
                          data-aos-delay={200}
                          data-aos-duration={1000}
                          data-aos-easing='ease-in-out'
                          style={{ width: '50%' }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className='progress-percent-simple h6 mb-0'>
                            50%
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Skills END */}
                  </div>
                </div>
              </div>{' '}
              {/* Row End */}
            </div>
            {/* Left sidebar END */}
            {/* Main content START */}
            <div className='col-lg-8'>
              {/* Title */}
              <h5 className='mb-0'>سلام، من</h5>
              <h1 className='mb-0 fs-3'>شیما حسینی</h1>
              <p>هستم، طراح گرافیک کامپیوتری</p>
              {/* Content */}
              <p className='mt-4'>
                از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                کاربردی می باشد.
              </p>
              <p>
                شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
                بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
                تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان
                رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
                گیرد.
              </p>
              {/* Personal info */}
              <ul className='list-group list-group-borderless'>
                <li className='list-group-item px-0'>
                  <span className='h6 fw-light'>
                    <i className='fas fa-fw fa-map-marker-alt text-primary me-1 me-sm-3' />
                    آدرس:
                  </span>
                  <span>تهران، میدان آزادی، نرسیده به خیابان ولیعصر</span>
                </li>
                <li className='list-group-item px-0'>
                  <span className='h6 fw-light'>
                    <i className='fas fa-fw fa-envelope text-primary me-1 me-sm-3' />
                    ایمیل:
                  </span>
                  <span>example@gmail.com</span>
                </li>
                <li className='list-group-item px-0'>
                  <span className='h6 fw-light'>
                    <i className='fas fa-fw fa-headphones text-primary me-1 me-sm-3' />
                    شماره تماس:
                  </span>
                  <span>09380147520</span>
                </li>
                <li className='list-group-item px-0'>
                  <span className='h6 fw-light'>
                    <i className='fas fa-fw fa-globe text-primary me-1 me-sm-3' />
                    وب سایت:
                  </span>
                  <span>https://example.com</span>
                </li>
              </ul>
              {/* Counter START */}
              <div className='row mt-4 g-3'>
                {/* Counter item */}
                <div className='col-sm-6 col-lg-4'>
                  <div className='d-flex align-items-center'>
                    <span className='icon-lg text-success mb-0 bg-success bg-opacity-10 rounded-3'>
                      <i className='fas fa-play' />
                    </span>
                    <div className='ms-3'>
                      <div className='d-flex'>
                        <h5
                          className='purecounter mb-0 fw-bold'
                          data-purecounter-start={0}
                          data-purecounter-end={10}
                          data-purecounter-delay={200}
                        >
                          0
                        </h5>
                        <span className='mb-0 h5'>+</span>
                      </div>
                      <p className='mb-0 h6 fw-light'>تعداد دوره ها</p>
                    </div>
                  </div>
                </div>
                {/* Counter item */}
                <div className='col-sm-6 col-lg-4'>
                  <div className='d-flex align-items-center'>
                    <span className='icon-lg text-purple bg-purple bg-opacity-10 rounded-3 mb-0'>
                      <i className='fas fa-users' />
                    </span>
                    <div className='ms-3'>
                      <div className='d-flex'>
                        <h5
                          className='purecounter mb-0 fw-bold'
                          data-purecounter-start={0}
                          data-purecounter-end={36}
                          data-purecounter-delay={200}
                        >
                          0
                        </h5>
                        <span className='mb-0 h5'>+</span>
                      </div>
                      <p className='mb-0 h6 fw-light'>تعداد دانشجویان</p>
                    </div>
                  </div>
                </div>
                {/* Counter item */}
                <div className='col-sm-6 col-lg-4'>
                  <div className='d-flex align-items-center'>
                    <span className='icon-lg text-orange bg-orange bg-opacity-10 rounded-3 mb-0'>
                      <i className='fas fa-trophy' />
                    </span>
                    <div className='ms-3'>
                      <div className='d-flex'>
                        <h5
                          className='purecounter mb-0 fw-bold'
                          data-purecounter-start={0}
                          data-purecounter-end={11}
                          data-purecounter-delay={200}
                        >
                          0
                        </h5>
                        <span className='mb-0 h5'>+</span>
                      </div>
                      <p className='mb-0 h6 fw-light'>سال تجربه تدریس</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Counter END */}
              {/* Course START */}
              <div className='row g-4 mt-4'>
                {/* Title */}
                <h2 className='fs-4'>لیست دوره ها</h2>
                {/* Card item START */}
                <div className='col-sm-6'>
                  <div className='card shadow h-100'>
                    {/* Image */}
                    <img
                      src='assets/images/courses/4by3/08.jpg'
                      className='card-img-top'
                      alt='course image'
                    />
                    {/* Card body */}
                    <div className='card-body pb-0'>
                      {/* Badge and favorite */}
                      <div className='d-flex justify-content-between mb-2'>
                        <a
                          href='#'
                          className='badge bg-purple bg-opacity-10 text-purple'
                        >
                          همه سطح
                        </a>
                        <a href='#' className='h6 fw-light mb-0'>
                          <i className='far fa-heart' />
                        </a>
                      </div>
                      {/* Title */}
                      <h5 className='card-title fw-normal'>
                        <a href='#'>دوره جامع آموزش Sketch</a>
                      </h5>
                      <p className='mb-2 text-truncate-2'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                      </p>
                      {/* Rating star */}
                      <ul className='list-inline mb-0'>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='far fa-star text-warning' />
                        </li>
                        <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                          4.0/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div className='card-footer pt-0 pb-3'>
                      <hr />
                      <div className='d-flex justify-content-between'>
                        <span className='h6 fw-light mb-0'>
                          <i className='far fa-clock text-danger me-2' />
                          12ساعت
                        </span>
                        <span className='h6 fw-light mb-0'>
                          <i className='fas fa-table text-orange me-2' />
                          15 ویدیو
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className='col-sm-6'>
                  <div className='card shadow h-100'>
                    {/* Image */}
                    <img
                      src='assets/images/courses/4by3/02.jpg'
                      className='card-img-top'
                      alt='course image'
                    />
                    <div className='card-body pb-0'>
                      {/* Badge and favorite */}
                      <div className='d-flex justify-content-between mb-2'>
                        <a
                          href='#'
                          className='badge bg-info bg-opacity-10 text-info'
                        >
                          متوسطه
                        </a>
                        <a href='#' className='text-danger'>
                          <i className='fas fa-heart' />
                        </a>
                      </div>
                      {/* Title */}
                      <h5 className='card-title fw-normal'>
                        <a href='#'>دوره جامع آموزش Photoshop</a>
                      </h5>
                      <p className='mb-2 text-truncate-2'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                      </p>
                      {/* Rating star */}
                      <ul className='list-inline mb-0'>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star-half-alt text-warning' />
                        </li>
                        <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                          4.5/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div className='card-footer pt-0 pb-3'>
                      <hr />
                      <div className='d-flex justify-content-between '>
                        <span className='h6 fw-light mb-0'>
                          <i className='far fa-clock text-danger me-2' />
                          9ساعت
                        </span>
                        <span className='h6 fw-light mb-0'>
                          <i className='fas fa-table text-orange me-2' />
                          65 ویدیو
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className='col-sm-6'>
                  <div className='card shadow h-100'>
                    {/* Image */}
                    <img
                      src='assets/images/courses/4by3/03.jpg'
                      className='card-img-top'
                      alt='course image'
                    />
                    <div className='card-body pb-0'>
                      {/* Badge and favorite */}
                      <div className='d-flex justify-content-between mb-2'>
                        <a
                          href='#'
                          className='badge bg-success bg-opacity-10 text-success'
                        >
                          مقدماتی
                        </a>
                        <a href='#' className='h6 fw-light mb-0'>
                          <i className='far fa-heart' />
                        </a>
                      </div>
                      {/* Title */}
                      <h5 className='card-title fw-normal'>
                        <a href='#'>دوره جامع آموزش Figma</a>
                      </h5>
                      <p className='mb-2 text-truncate-2'>
                        کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
                        فراوان جامعه و متخصصان را می طلبد تا با نرم
                      </p>
                      {/* Rating star */}
                      <ul className='list-inline mb-0'>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star-half-alt text-warning' />
                        </li>
                        <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                          4.5/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div className='card-footer pt-0 pb-3'>
                      <hr />
                      <div className='d-flex justify-content-between'>
                        <span className='h6 fw-light mb-0'>
                          <i className='far fa-clock text-danger me-2' />
                          5ساعت
                        </span>
                        <span className='h6 fw-light mb-0'>
                          <i className='fas fa-table text-orange me-2' />
                          32 ویدیو
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className='col-sm-6'>
                  <div className='card shadow h-100'>
                    {/* Image */}
                    <img
                      src='assets/images/courses/4by3/07.jpg'
                      className='card-img-top'
                      alt='course image'
                    />
                    <div className='card-body pb-0'>
                      {/* Badge and favorite */}
                      <div className='d-flex justify-content-between mb-2'>
                        <a
                          href='#'
                          className='badge bg-success bg-opacity-10 text-success'
                        >
                          مقدماتی
                        </a>
                        <a href='#' className='text-danger'>
                          <i className='fas fa-heart' />
                        </a>
                      </div>
                      {/* Title */}
                      <h5 className='card-title fw-normal'>
                        <a href='#'>دوره جامع آموزش React-Native</a>
                      </h5>
                      <p className='mb-2 text-truncate-2'>
                        چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                        که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                        کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                      </p>
                      {/* Rating star */}
                      <ul className='list-inline mb-0'>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='fas fa-star text-warning' />
                        </li>
                        <li className='list-inline-item me-0 small'>
                          <i className='far fa-star text-warning' />
                        </li>
                        <li className='list-inline-item ms-2 h6 fw-light mb-0'>
                          4.0/5.0
                        </li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div className='card-footer pt-0 pb-3'>
                      <hr />
                      <div className='d-flex justify-content-between'>
                        <span className='h6 fw-light mb-0'>
                          <i className='far fa-clock text-danger me-2' />
                          18ساعت
                        </span>
                        <span className='h6 fw-light mb-0'>
                          <i className='fas fa-table text-orange me-2' />
                          99 ویدیو
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
              </div>
              {/* Course END */}
            </div>
            {/* Main content END */}
          </div>
          {/* Row END */}
        </div>
      </section>
      {/* =======================
Page content END */}
    </>
  );
}

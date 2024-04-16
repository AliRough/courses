import React from 'react';

export default function Three({ submit }: any) {
  return (
    <div>
      <h4 className='ff-vb fs-5'>جلسات دوره</h4> <hr />
      <div className='row'>
        <div className='d-sm-flex justify-content-sm-between align-items-center mb-3'>
          <h5 className='mb-2 mb-sm-0'>آپلود دوره</h5>
          <a
            href='#'
            className='btn btn-sm btn-primary-soft mb-0'
            data-bs-toggle='modal'
            data-bs-target='#addLecture'
          >
            <i className='bi bi-plus-circle me-2'></i>افزودن دوره
          </a>
        </div>
        <div
          className='accordion accordion-icon accordion-bg-light'
          id='accordionExample2'
        >
          <div className='accordion-item mb-3'>
            <h6 className='accordion-header font-base' id='heading-1'>
              <button
                className='accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse-1'
                aria-expanded='false'
                aria-controls='collapse-1'
              >
                معرفی دوره فتوشاپ
              </button>
            </h6>
            <div
              id='collapse-1'
              className='accordion-collapse collapse show'
              aria-labelledby='heading-1'
              data-bs-parent='#accordionExample2'
            >
              <div className='accordion-body mt-3'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='position-relative'>
                    <a
                      href='#'
                      className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                    >
                      <i className='fas fa-play'></i>
                    </a>
                    <span className='ms-2 mb-0 h6 fw-light'>معرفی دوره</span>
                  </div>
                  <div>
                    <a
                      href='#'
                      className='btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0'
                    >
                      <i className='far fa-fw fa-edit'></i>
                    </a>
                    <button className='btn btn-sm btn-danger-soft btn-round mb-0'>
                      <i className='fas fa-fw fa-times'></i>
                    </button>
                  </div>
                </div>
                <hr />
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='position-relative'>
                    <a
                      href='#'
                      className='btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static'
                    >
                      <i className='fas fa-play'></i>
                    </a>
                    <span className='ms-2 mb-0 h6 fw-light'>
                      دیجیتال مارکتنیگ چیست؟
                    </span>
                  </div>
                  <div>
                    <a
                      href='#'
                      className='btn btn-sm btn-success-soft btn-round me-1 mb-1 mb-md-0'
                    >
                      <i className='far fa-fw fa-edit'></i>
                    </a>
                    <button className='btn btn-sm btn-danger-soft btn-round mb-0'>
                      <i className='fas fa-fw fa-times'></i>
                    </button>
                  </div>
                </div>
                <hr />
                <a
                  href='#'
                  className='btn btn-sm btn-dark mb-0'
                  data-bs-toggle='modal'
                  data-bs-target='#addTopic'
                >
                  <i className='bi bi-plus-circle me-2'></i>
                  افزودن
                </a>
              </div>
            </div>
          </div>
          <div className='accordion-item mb-3'>
            <h6 className='accordion-header font-base' id='heading-2'>
              <button
                className='accordion-button fw-bold rounded d-inline-block collapsed d-block pe-5'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse-2'
                aria-expanded='false'
                aria-controls='collapse-2'
              >
                آموزش کار به صورت متوسطه
              </button>
            </h6>
            <div
              id='collapse-2'
              className='accordion-collapse collapse'
              aria-labelledby='heading-2'
              data-bs-parent='#accordionExample2'
            >
              <div className='accordion-body mt-3'>
                <a
                  href='#'
                  className='btn btn-sm btn-dark mb-0'
                  data-bs-toggle='modal'
                  data-bs-target='#addTopic'
                >
                  <i className='bi bi-plus-circle me-2'></i>
                  افزودن
                </a>
              </div>
            </div>
          </div>
          <div className='accordion-item mb-3'>
            <h6 className='accordion-header font-base' id='heading-3'>
              <button
                className='accordion-button fw-bold collapsed rounded d-block pe-5'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapse-3'
                aria-expanded='false'
                aria-controls='collapse-3'
              >
                چقدر باید به فروشندگان پیشنهاد بدهم؟
              </button>
            </h6>
            <div
              id='collapse-3'
              className='accordion-collapse collapse'
              aria-labelledby='heading-3'
              data-bs-parent='#accordionExample2'
            >
              <div className='accordion-body mt-3'>
                <a
                  href='#'
                  className='btn btn-sm btn-dark mb-0'
                  data-bs-toggle='modal'
                  data-bs-target='#addTopic'
                >
                  <i className='bi bi-plus-circle me-2'></i>
                  افزودن
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <button className='btn btn-secondary prev-btn mb-0'>مرحله قبل</button>
          <button className='btn btn-primary next-btn mb-0'>مرحله بعد</button>
        </div>
      </div>
    </div>
  );
}

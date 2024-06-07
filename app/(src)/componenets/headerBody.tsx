'use client';

const HeaderBody = ({ name }: { name: string }) => {
  console.log('باید مسیر ها ساماندهی شود');

  return (
    <>
      <section
        className='container mt-3 sm:tw-rounded-3xl bg-blue align-items-center d-flex tw-py-6'
        style={{
          background: 'url(images/pattern/04.png) no-repeat center center',
          backgroundSize: 'cover',
        }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h1 className='text-white fs-2'>{name}</h1>
              <div className='d-flex justify-content-center'>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb breadcrumb-dark breadcrumb-dots mb-0'>
                    <li className='breadcrumb-item'>
                      <a href='/'>صفحه اصلی</a>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      لیست نسخه 1
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderBody;

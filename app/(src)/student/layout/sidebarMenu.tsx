'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

type TMenu = {
  name: string;
  link: string;
  icon: string;
};

const LayoutProfileStudentSidebarMenu = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  console.log('Not completed');

  const menu: TMenu[] = [
    { name: 'داشبورد', link: 'dashboard', icon: 'bi-ui-checks-grid' },
    { name: 'مدیریت پکیج', link: 'subscription', icon: 'bi-card-checklist' },
    { name: 'لیست دوره ها', link: 'course-list', icon: 'bi-basket' },
    {
      name: 'توضیحات دوره',
      link: 'course-resume',
      icon: 'far fa-fw fa-file-alt',
    },
    { name: 'امتحانات', link: 'quiz', icon: 'bi-question-diamond' },
    {
      name: 'اطلاعات کارت',
      link: 'payment-info',
      icon: 'bi-credit-card-2-front',
    },
    { name: 'موردعلاقه ها', link: 'bookmark', icon: 'bi-cart-check' },
    { name: 'ویرایش پروفایل', link: 'edit-profile', icon: 'bi-pencil-square' },
    { name: 'تنظیمات', link: 'setting', icon: 'bi-gear' },
    { name: 'حذف پروفایل', link: 'delete-account', icon: 'bi-trash' },
  ];

  const path = usePathname();

  return (
    <section className='pt-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-3'>
            <div
              className='offcanvas-xl offcanvas-end'
              tabIndex={-1}
              id='offcanvasSidebar'
            >
              <div className='offcanvas-header bg-light'>
                <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                  پروفایل من
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='offcanvas'
                  data-bs-target='#offcanvasSidebar'
                  aria-label='Close'
                ></button>
              </div>
              <div className='offcanvas-body p-3 p-xl-0'>
                <div className='bg-dark border rounded-3 p-3 w-100'>
                  <div className='list-group list-group-dark list-group-borderless collapse-list'>
                    {menu.map((e: TMenu) => (
                      <Link
                        key={e.name}
                        className={clsx(
                          'list-group-item',
                          '/profile/s/' + e.link === path && 'active',
                        )}
                        href={'/profile/s/' + e.link}
                      >
                        <i className={clsx(e.icon, 'bi fa-fw me-2')}></i>
                        {e.name}
                      </Link>
                    ))}
                    <Link
                      className='list-group-item text-danger bg-danger-soft-hover'
                      href='#'
                    >
                      <i className='fas fa-sign-out-alt fa-fw me-2'></i>خروج
                    </Link>
                    <a
                      className='list-group-item'
                      data-bs-toggle='collapse'
                      href='#collapseauthentication'
                      role='button'
                      aria-expanded='false'
                      aria-controls='collapseauthentication'
                    >
                      <i className='bi bi-lock fa-fw me-2'></i>زیر منو
                    </a>
                    <ul
                      className='nav collapse flex-column'
                      id='collapseauthentication'
                      data-bs-parent='#navbar-sidebar'
                    >
                      <li className='nav-item'>
                        <a className='nav-link' href='#'>
                          عنوان 1
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' href='#'>
                          عنوان 2
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-9'>{children}</div>
        </div>
      </div>
    </section>
  );
};

export default LayoutProfileStudentSidebarMenu;

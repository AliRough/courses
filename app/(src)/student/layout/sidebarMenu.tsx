'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import clsx from 'clsx';
import { useRecoilState } from 'recoil';
import { authUserState } from '../../state/atoms';
import { useCookies } from 'react-cookie';
import * as api from '@/app/(src)/api/authApi';

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
    { name: 'ویرایش پروفایل', link: 'edit-profile', icon: 'bi-pencil-square' },
    {
      name: 'تغییر رمزعبور',
      link: 'change-password',
      icon: 'bi-pencil-square',
    },
    { name: 'لیست دوره ها', link: 'course-list', icon: 'bi-basket' },
  ];

  {
    /*
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
*/
  }
  const [authUserdata, setAuthUser]: any = useRecoilState(authUserState);

  const [cookies, setCookie, removeCookie] = useCookies(['Authorization']);
  const router = useRouter();

  const path = usePathname();
  const logOutHamdler = async (e: any) => {
    const data = await api.logOutUser(cookies.Authorization);
    removeCookie('Authorization', { path: '/' });

    setAuthUser({
      name: null,
      aliasName: null,
      email: null,
      mobile: null,
      emailVerifiedAt: null,
      mobileVerifiedAt: null,
      createdAt: null,
    });
    router.push('/');
  };

  return (
    <section className='pt-0 '>
      <div className='container bg-white pt-4 tw-shadow-lg tw-rounded-b-3xl pb-4'>
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
                    <button
                      className='list-group-item text-danger bg-danger-soft-hover d-flex justify-content-start align-items-center  '
                      onClick={logOutHamdler}
                    >
                      <i className='fas fa-sign-out-alt fa-fw me-2'></i>خروج
                    </button>
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

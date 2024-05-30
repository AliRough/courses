'use client';

import { notFound, usePathname } from 'next/navigation';

import LayoutProfileStudentHeader from '@/app/(src)/student/layout/headerProfile';
import LayoutProfileStudentSidebarMenu from '@/app/(src)/student/layout/sidebarMenu';
import { authUserState } from '../../state/atoms';
import { useRecoilState } from 'recoil';
import Loading from '@/app/loading';
import { useCookies } from 'react-cookie';

const LayoutProfileStudent = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  console.log('Not completed');

  const notSidbarAndMenu = [''];
  const path = usePathname();
  const pathNow = path.split('/profile/s/')[1]?.split('/')[0];
  3;
  console.log('path', path);
  console.log(pathNow);

  const [authUserdata, setAuthUser]: any = useRecoilState(authUserState);

  if (notSidbarAndMenu.includes(pathNow)) return <>{children}</>;

  return (
    <>
      <LayoutProfileStudentHeader />
      <LayoutProfileStudentSidebarMenu>
        {children}
      </LayoutProfileStudentSidebarMenu>
    </>
  );
};

export default LayoutProfileStudent;

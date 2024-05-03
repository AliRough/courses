'use client';

import { usePathname } from 'next/navigation';

import LayoutProfileTeacherHeader from '@/app/(src)/teacher/layout/headerProfile';
import LayoutProfileTeacherSidebarMenu from '@/app/(src)/teacher/layout/sidebarMenu';
import Header from '../../componenets/Header';

const LayoutProfileTeacher = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  console.log('Not completed');

  const notSidbarAndMenu = ['create-course'];
  const path = usePathname();
  const pathNow = path.split('/profile/t/')[1].split('/')[0];

  if (notSidbarAndMenu.includes(pathNow)) return <>{children}</>;

  return (
    <>
      <LayoutProfileTeacherHeader />
      <LayoutProfileTeacherSidebarMenu>
        {children}
      </LayoutProfileTeacherSidebarMenu>
    </>
  );
};

export default LayoutProfileTeacher;

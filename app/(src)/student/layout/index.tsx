'use client';

import { usePathname } from 'next/navigation';

import LayoutProfileStudentHeader from '@/app/(src)/student/layout/headerProfile';
import LayoutProfileStudentSidebarMenu from '@/app/(src)/student/layout/sidebarMenu';

const LayoutProfileStudent = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  console.log('Not completed');

  const notSidbarAndMenu = [''];
  const path = usePathname();
  const pathNow = path.split('/profile/s/')[1].split('/')[0];

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

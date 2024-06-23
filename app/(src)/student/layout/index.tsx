'use client';

import { usePathname } from 'next/navigation';

import LayoutProfileStudentHeader from '@/app/(src)/student/layout/headerProfile';
import LayoutProfileStudentSidebarMenu from '@/app/(src)/student/layout/sidebarMenu';
import Header from '../../componenets/Header';
import Footer from '../../componenets/Footer';

const LayoutProfileStudent = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  console.log('Not completed');

  const notSidbarAndMenu = [''];
  const path = usePathname();
  const pathNow = path.split('/profile/')[1]?.split('/')[0];
  3;

  if (notSidbarAndMenu.includes(pathNow)) return <>{children}</>;

  return (
    <>
      <Header />

      <LayoutProfileStudentHeader />
      <LayoutProfileStudentSidebarMenu>
        {children}
      </LayoutProfileStudentSidebarMenu>
      <Footer />
    </>
  );
};

export default LayoutProfileStudent;

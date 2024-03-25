'use client';

import LayoutProfileSidebarMenuT from './sidebarMenu';
import LayoutProfileHeaderT from './headerProfile';

const LayoutProfileT = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  console.log('Not completed');

  return (
    <>
      <LayoutProfileHeaderT />
      <LayoutProfileSidebarMenuT>{children}</LayoutProfileSidebarMenuT>
    </>
  );
};

export default LayoutProfileT;

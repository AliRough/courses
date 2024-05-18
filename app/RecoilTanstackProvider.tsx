'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

// Create a client
const queryClient = new QueryClient();

const RecoilTanstackProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <RecoilRoot>
      {
        // Provide the client to your App
      }{' '}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );
};
export default RecoilTanstackProvider;

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
      <QueryClientProvider client={queryClient}>
        {children}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </RecoilRoot>
  );
};
export default RecoilTanstackProvider;

import { Suspense } from 'react';

interface PageProps {
  children: React.ReactNode;
}

const Page = ({children}: PageProps) => {
  return (
    <Suspense fallback={null}>
      <main>{children}</main>
    </Suspense>
  );
};

export default Page;

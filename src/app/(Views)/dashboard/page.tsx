import React from 'react';
import { DashboardLayout } from '@/app/(Layouts)';

export const metadata = {
  title: 'Dashboard',
  description: 'tidak ada'
};

function Page() {
  return (
    <DashboardLayout>
      <div>Dashboard</div>
    </DashboardLayout>
  );
}

export default Page;

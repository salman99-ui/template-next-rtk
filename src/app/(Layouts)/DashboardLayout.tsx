'use client';

import React from 'react';
import { Layout } from 'antd';
import { HeaderDashboard } from './(Headers)';
import { SidebarDashboard } from './(Sidebars)';
import LayoutProvider from './(Context)';

const { Content } = Layout;

function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <HeaderDashboard />
      <Content>{children}</Content>
    </Layout>
  );
}

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <SidebarDashboard />
      <InnerLayout>{children}</InnerLayout>
    </LayoutProvider>
  );
}

export default DashboardLayout;

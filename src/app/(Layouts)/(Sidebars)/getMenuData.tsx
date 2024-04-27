'use client';

import { Menu } from 'antd';
import Link from 'next/link';

const GetMenuData = () => {
  const path = [
    {
      key: '/dashboard-label',
      label: <small className="text-sm">Dashboard</small>,
      icon: null,
      hidden: false,
      disabled: true
    },
    {
      key: 'manajemen-agent',
      label: (
        <Link
          className="text-sm text-netral_43 !hover:text-netral_43"
          href="/manajemen-agent"
         />
      ),
      icon: null,
      hidden: false,
      disabled: false
    }
  ];
  return (
    <Menu
      className="h-full max-h-screen overflow-x-hidden hide-scrollbar"
      mode="inline"
      selectedKeys={[location.pathname.split('/')[1]]}
      items={path.filter((item) => !item.hidden)}
    />
  );
};

export default GetMenuData;

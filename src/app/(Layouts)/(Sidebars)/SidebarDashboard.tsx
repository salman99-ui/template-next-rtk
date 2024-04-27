'use client';

import React from 'react';
import { Avatar, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSidebarCollapse } from '../(Context)';
import getMenuData from './getMenuData';

const { Sider } = Layout;

function SidebarDashboard() {
  const { isSidebarCollapsed, setIsSidebarCollapsed } = useSidebarCollapse();

  return (
    <Sider
      breakpoint="md"
      onBreakpoint={(isBroken) =>
        isBroken ? setIsSidebarCollapsed(true) : setIsSidebarCollapsed(false)
      }
      collapsed={isSidebarCollapsed}
      collapsible
      trigger={null}
      className={`fixed min-h-full pt-16 xl:relative xl:z-10 xl:pt-0 ${
        isSidebarCollapsed ? '-left-28' : ''
      }`}
      style={{
        background: 'white',
        zIndex: 75
      }}
    >
      <div className="sticky top-0">
        <div className="px-5 py-4">
          <div className="flex gap-2 items-center">
            <Avatar size={35} icon={<UserOutlined style={{ color: '#fff' }} />} />
            <span className="">x</span>
          </div>
        </div>
        {getMenuData()}
      </div>
    </Sider>
  );
}

export default SidebarDashboard;

'use client';

import React from 'react';
import clsx from 'clsx';
import { Layout } from 'antd';
import { BarsOutlined, PoweroffOutlined } from '@ant-design/icons';
import { useSidebarCollapse } from '../(Context)';

const { Header } = Layout;

function HeaderDashboard() {
  const { isSidebarCollapsed, toggleSidebar } = useSidebarCollapse();

  const style = {
    wrapper: clsx(
      'p-3',
      'w-full sticky top-0 z-50',
      'flex justify-between items-center',
      'bg-header-light dark:bg-header-dark shadow'
    )
  };

  return (
    <Header
      className={style.wrapper}
      style={{ background: 'linear-gradient(to right, #00c171, #009480)', zIndex: 90 }}
    >
      <div className="flex justify-between w-full">
        <div className="xl:hidden">
          <button
            type="button"
            className="bg-transparent border-none outline-none"
            onClick={toggleSidebar}
          >
            <BarsOutlined style={{ color: '#fff' }} />
          </button>
        </div>
        <div className="flex items-center">
          <img
            className="w-10"
            src="https://internal.haratoken.app/static/images/component/hara-logo-xs.png"
            alt=""
          />
          <span className="text-lg text-white ml-2">HARA</span>
        </div>

        <div>
          <button
            type="button"
            className="bg-transparent border-none outline-none cursor-pointer"
            onClick={() => {
              localStorage.removeItem('accessToken');
              window.location.replace('/login');
            }}
          >
            <PoweroffOutlined style={{ color: '#fff', fontSize: 12 }} />
          </button>
        </div>
      </div>
    </Header>
  );
}

export default HeaderDashboard;

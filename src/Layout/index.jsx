import Header from '../components/Header/Header';
import { Outlet } from 'react-router';
import React from 'react';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;

import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, profileSelector } from '../store/auth/authSelectors';
import { useEffect } from 'react';
import { refreshThunk } from '../store/auth/thunks';

const Layout = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(authSelector);
  const profile = useSelector(profileSelector);
  useEffect(() => {
    // if (!isAuth && !profile) return;
    if (!isAuth || !profile) dispatch(refreshThunk());
  }, [dispatch, isAuth, profile]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;

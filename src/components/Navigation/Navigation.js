import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/skip-first-render"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Пропуск первого рендера
    </NavLink>

    <NavLink
      to="/pokemon"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Покемоны с хуками
    </NavLink>

    <NavLink
      to="/counter"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      useReducer
    </NavLink>

    <NavLink
      to="/notes"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      useMemo
    </NavLink>
  </nav>
);

export default memo(Navigation);

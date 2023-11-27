import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/signup"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Форма
    </NavLink>

    <NavLink
      to="/colorpicker"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Колорпикер
    </NavLink>

    <NavLink
      to="/counter"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Счётчик
    </NavLink>

    <NavLink
      to="/clock"
      className={({ isActive }) => (isActive ? styles.active : styles.link)}
    >
      Часы
    </NavLink>
  </nav>
);

export default Navigation;

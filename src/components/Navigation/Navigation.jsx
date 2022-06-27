import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Navigation/Navigation.module.css';

export default function Navigation() {
  return (
    <div>
      <nav className={s.mainNavigation}>
        <NavLink
          className={s.link}
          style={({ isActive }) => {
            return {
              color: isActive ? 'white' : '',
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={s.link}
          style={({ isActive }) => {
            return {
              color: isActive ? 'white' : '',
            };
          }}
          to="/movies"
        >
          Movies
        </NavLink>
      </nav>
    </div>
  );
}

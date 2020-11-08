import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './leftMenu.module.scss';

export default function LeftMenu() {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <div className={styles.container}>
      <NavLink activeClassName={styles.active} to="/main/5fa69d80ffdd8589ae52c498">
        Profile
      </NavLink>
      <NavLink activeClassName={styles.active} to="/activity">
       Activity
      </NavLink>
      <NavLink activeClassName={styles.active} to="/rating">
     Rating
      </NavLink>
      <NavLink activeClassName={styles.active} to="/dialogspsycho">
        Psychological help
      </NavLink>
      <NavLink activeClassName={styles.active} to="/testing">
        Testing (beta)
      </NavLink>
    </div>
  );
}

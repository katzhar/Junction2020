import React from 'react';
import { Link } from 'react-router-dom';
import styles from './leftMenu.module.scss';

export default function LeftMenu() {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <div className={styles.container}>
      <Link to="/main/5fa69d80ffdd8589ae52c498">
        Profile
      </Link>
      <Link to="/activity">
       Activity
      </Link>
      <Link to="/rating">
        Rating
      </Link>
      <Link to="/dialogspsycho">
        Psychological help
      </Link>
      <Link  to="/testing">
        Testing (beta)
      </Link>
    </div>
  );
}

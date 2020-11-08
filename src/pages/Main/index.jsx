import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileSkills from './ProfileSkills';
import styles from './main.module.scss';

export default function Main() {
  return (
    <div className={styles.Content}>
      <ProfileInfo />
      <hr/>
      <ProfileSkills />
    </div>
  );
}
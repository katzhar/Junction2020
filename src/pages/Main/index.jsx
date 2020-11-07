import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileSkills from './ProfileSkills';
import classes from './main.module.scss';

export default function Main() {
  return (
    <div className={classes.fullWidth}>
      <ProfileInfo />
      <hr className={classes.line}/>
      <ProfileSkills />
    </div>
  );
}
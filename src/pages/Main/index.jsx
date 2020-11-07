import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileSkills from './ProfileSkills';
import classes from './Main.module.scss';

export default function Main() {
  return (
    <div className={classes.fullWidth}>
      <ProfileInfo />
      <hr className={classes.line}/>
      <ProfileSkills />
    </div>
  );
}
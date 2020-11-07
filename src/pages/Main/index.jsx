import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileSkills from './ProfileSkills';

export default function Main() {
  return (
    <div>
      <ProfileInfo />
      <hr/>
      <ProfileSkills />
    </div>
  );
}
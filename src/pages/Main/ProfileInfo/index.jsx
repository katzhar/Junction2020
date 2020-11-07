import React from "react";
import styles from './ProfileInfo.module.scss';
import ProfilePhoto from '../../../img/ubartemi-ava.jpg';

const ProfileInfo = () => {
    return (
        <div className={styles.profileInfo}>
            <div className={styles.photo}>
                <img src={ProfilePhoto} alt="avatar"/>
            </div>
            <div className={styles.info}>
                <h3>Sergei Ushakov</h3>
                <p>Money: 100</p>
                <p>Rating: 1234</p>
                <p>Course: 3</p>
                <p>Education area: Web Development</p>
            </div>
            <div className={styles.nextEvent}>
                <h3>The next event</h3>
                <p>Learning English</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
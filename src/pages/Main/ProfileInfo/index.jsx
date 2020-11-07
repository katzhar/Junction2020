import React from "react";
import styles from './ProfileInfo.module.scss';

import { data } from '../../../data';
import { useParams } from 'react-router-dom';

const ProfileInfo = () => {
    const location = useParams();
    let index;
    data.users.forEach((user, i) => {
        if (user.id === location.id) {
            index = i;
        }
    });
    const user = data.users[index];
    const consultation = data.scienceEvents.Consultations[index];

    return (
        <div className={styles.profileInfo}>
            <div className={styles.photo}>
            </div>
            <div className={styles.info}>
                <h3>{user.name.first}</h3>
                <p>Money: {user.balance}</p>
                <p>Rating: {user.rating}</p>
                <p>Course: {user.educationYear}</p>
                <p>Email: {user.email}</p>
            </div>
            <div className={styles.nextEvent}>
                <h3>The next event</h3>
                <p>{consultation.title}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
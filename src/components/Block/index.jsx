import React from 'react';
import styles from './block.module.scss';
import iconFilm from '../../assets/film.png';


export default function Block({ data }) {
 const {title, body, price, creator, participants } = data;
  return (
    <div className={styles.container}>
      <div className={styles.middle}>
      <div className={styles.left}><b>{title}</b>
        <p>{body}</p>
        <div>
          <span>Participants: </span>
          {participants}
        </div>
      </div>
        <div className={styles.right}>
          <div className={styles.containerIcon}>
          <img src={iconFilm} alt="" />
          </div>
        <p>{creator.fname} {creator.lname}</p>
          <p>
            <span>Price:</span>{price}</p>
        </div>
      </div>
    </div>
  );
}

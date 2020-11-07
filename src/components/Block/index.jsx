import React from 'react';
import styles from './block.module.scss';
import iconPtP from '../../assets/ptp.png';
import iconBooks from '../../assets/book.png';
import iconFilm from '../../assets/film.png';
import iconEvent from '../../assets/events.png';

export default function Block({ data }) {
  const zoom = 'https://us04web.zoom.us/j/78292546724?pwd=a25Yc1F1YnJJL3RoVnVoejBrcmdlUT09';
 const {title, body, price, creator, participants, type = 'event' } = data;

 const iconType = {
   event: iconEvent,
   book: iconBooks,
  film: iconFilm,
   ptp: iconPtP,
 }

  return (
    <div className={styles.container}>
      <div className={styles.middle}>
      <div className={styles.left}><b>{title}</b>
        <p>{body}</p>
        <div>
          <div>link: <a href={zoom}>Zoom</a></div>
          <span>Participants: </span>
          {participants}
        </div>
      </div>
        <div className={styles.right}>
          <div className={styles.containerIcon}>
          <img src={iconType[type]} alt="" />
          </div>
        <p>{creator.fname} {creator.lname}</p>
          <p>
            <span>Price:</span>{price}</p>
        </div>
      </div>
    </div>
  );
}

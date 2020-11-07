import React from 'react';
import styles from './block.module.scss';
import iconPtP from '../../assets/ptp.png';
import iconBooks from '../../assets/book.png';
import iconFilm from '../../assets/film.png';
import iconEvent from '../../assets/events.png';
import { Link } from 'react-router-dom';


export default function Block({ data }) {
  const zoom = 'https://us04web.zoom.us/j/78292546724?pwd=a25Yc1F1YnJJL3RoVnVoejBrcmdlUT09';
 const {title, body, price, creator, participants } = data;
  return (
    <div className={styles.container}>
      <div className={styles.middle}>
      <div className={styles.left}><b>{title}</b>
        <p>{body}</p>
        <div>
         <div>link: <Link to={zoom}>Zoom</Link></div>
          <span>Participants: </span>
          {participants}
        </div>
      </div>
        <div className={styles.right}>
          <div className={styles.containerIcon}>
          <img src={iconPtP} alt="" />
          </div>
        <p>{creator.fname} {creator.lname}</p>
          <p>
            <span>Price:</span>{price}</p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import styles from './block.module.scss';
import iconPtP from '../../assets/ptp.png';
import iconBooks from '../../assets/book.png';
import iconFilm from '../../assets/film.png';
import iconEvent from '../../assets/events.png';
import iconLessons from '../../assets/lessons.png';
import iconWebinar from '../../assets/webinar.png';

export default function Block({ data }) {
  const zoom = 'https://us04web.zoom.us/j/78292546724?pwd=a25Yc1F1YnJJL3RoVnVoejBrcmdlUT09';
 const {title ='', body='', price='', name = {first:'',last:''}, participants='', type = 'event' } = data;

 const iconType = {
   event: iconEvent,
   book: iconBooks,
  film: iconFilm,
   ptp: iconPtP,
   lessons: iconLessons,
   webinar: iconWebinar,
 }

  return (
    <div className={styles.container}>
      <div className={styles.middle}>
      <div className={styles.left}><b>{title}</b>
        <p>{body}</p>
        <div>
          <div>link: <a href={zoom}>Zoom</a></div>
          {participants && <span>Participants: </span>}
          {participants}
        </div>
      </div>
        <div className={styles.right}>
          <div className={styles.containerIcon}>
          <img src={iconType[type]} alt="" />
          </div>
        <p>{name.first} {name.last}</p>
          <p>
            <span>Price:</span>{price}</p>
        </div>
      </div>
    </div>
  );
}

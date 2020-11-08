import React, { useState } from 'react';
import styles from './block.module.scss';
import iconPtP from '../../assets/ptp.png';
import iconBooks from '../../assets/book.png';
import iconFilm from '../../assets/film.png';
import iconEvent from '../../assets/events.png';
import iconLessons from '../../assets/lessons.png';
import iconWebinar from '../../assets/webinar.png';
import iconCoin from '../../assets/coin.png';
import { Button } from 'antd';

export default function Block({ data }) {
  const [subscribe, setSubscribe] = useState(false);
  const zoom = 'https://us04web.zoom.us/j/78292546724?pwd=a25Yc1F1YnJJL3RoVnVoejBrcmdlUT09';
 const {title ='', body='', price='', user, participants=[], type = 'event' } = data;
console.log(data);
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
      <div className={styles.left}>
        <div className={styles.preSub}>
        <b>{title}</b>
        <p>{body}</p>
        {(type === 'ptp'||type ==='lessons') &&
        <p><span>Price: </span> {price}<img className={styles.coin} src={iconCoin}/></p>}
        <div>
          <div>link: <a href={zoom}>Zoom</a></div>
          {participants && <b> Participants: </b>}
          {participants &&
          participants.map(i => <span>{i.name} </span>)}
        </div>
      </div>
        <div className={styles.sub}>
        {!subscribe ? <Button onClick={()=>{setSubscribe(!subscribe)}}>subscribe</Button> : <span>You are signed in</span>}
        </div>
      </div>
        <div className={styles.right}>
          <div className={styles.containerIcon}>
          <img src={iconType[type]} alt="" />
          </div>
        <p>{user[0].name}</p>
        </div>
      </div>
    </div>
  );
}

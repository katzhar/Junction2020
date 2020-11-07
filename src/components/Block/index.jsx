import React from 'react';
import styles from './block.module.scss';
import { Tabs } from 'antd';

export default function Block({ data }) {
 const {title, body, price, creator, participants } = data;

  return (
    <div className={styles.container}>
      <div className={styles.middle}>
      <div className={styles.left}><p>{title}</p>
        <p>{body}</p></div>
        <div className={styles.right}>
        <p>{creator.fname} {creator.lname}</p>
          <p>
            <span>Price:</span>{price}</p>
        </div>
      </div>
        <div>
          <span>Participants: </span>
          {participants}
        </div>
    </div>
  );
}

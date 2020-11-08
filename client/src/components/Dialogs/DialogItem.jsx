import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Dialogs.module.scss";

export const DialogItem = ({ name, dialog }) => {
  return (
    <Link to={`/chat/${dialog.chatID}`} className={styles.DialogItem}>
      <div className={styles.DialogImage}>
        <picture>
          <source srcSet={dialog.avatar}/>
          <img className="user__picture" src={dialog.avatar} alt="user" />
        </picture>
      </div>
      <div className={styles.DialogContent}>
        <div className={styles.CompanionName}>{name}</div>
        <div className={styles.LastMessage}>{dialog.lastMessage || 'Начните диалог'}</div>
      </div>
    </Link>
  );
}
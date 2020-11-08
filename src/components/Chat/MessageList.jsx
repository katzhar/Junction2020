import React from 'react';
import { Message } from './Message';
import styles from './Chat.module.scss';
import { data } from '../../data';

export const MessageList = ({messages, chat}) => {
  return (
    <>
    {messages && Array.isArray(messages) && messages.map((item, index) => {
      let name;
      let myMessage = item.uidSender === "5fa69d80ffdd8589ae52c498";
      data.users.map(user => {
        if (user.id === item.uidSender)
          name = user.name;
        return null;
      });
      return (
        <Message
          id={index}
          chat={chat}
          myMessage={myMessage}
          key={index}
        >
          {!myMessage && 
            <div className={styles.senderName}>
              {name}
            </div>
          }
          {item.message}
        </Message>
      )}
    )}
    </>
  );
}
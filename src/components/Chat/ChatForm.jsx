import React from "react";
import {useDispatch} from "react-redux";
import { fetchAddMessage } from '../../store/actions';
import { Button } from '../index';
import styles from "./Chat.module.scss";

export const ChatForm = ({ chat }) => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const handleSendMessage = React.useCallback(() => {
    if (value !== '') {
      let message = {};
      message.type = "message";
      message.uidReceiver = chat;
      message.uidSender = "5fa69d80ffdd8589ae52c498";
      message.body = value;
      dispatch(fetchAddMessage({
        receiver: chat,
        sender: "5fa69d80ffdd8589ae52c498",
        message: message.body,
      }));
      setValue('');
    }
  }, [dispatch, value, chat])

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={styles.ChatForm}>
        <div className={styles.inputContainer}>
          <input className={styles.messageInput} placeholder="Введите сообщение" type='text' value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit" onClick={handleSendMessage} text="Отправить" subClass="submit" />
        </div>
      </div>
    </form>
  );
}
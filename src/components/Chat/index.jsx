import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { ChatForm } from './ChatForm';
import { MessageList } from './MessageList';
import { fetchInitMessages } from '../../store/actions';
import styles from './Chat.module.scss';

const Chat = () => {
  const history = useHistory();
  const [chatID, setChatID] = React.useState(parseInt(history.location.pathname.split('/')[2]));
  const messages = useSelector((store) => store.messages);
  const dispatch = useDispatch();

  const getMessages = React.useCallback((uid) => {
    dispatch(fetchInitMessages(uid));
  }, [dispatch]);

  React.useEffect(() => {
    setChatID(parseInt(history.location.pathname.split('/')[2]));
  }, [history]);

  React.useEffect(() => {
    getMessages(chatID);
  }, [chatID, getMessages]);

  React.useEffect(() => {
    document.querySelector('.contentRef').scrollTop = 999999;
  });

  return (
    <div className={styles.Chat}>
      <div className={styles.ChatContainer}>
        <div className={`contentRef ${styles.ChatContent}`}>
          <div className={styles.Messages}>
            <MessageList messages={messages} chat={chatID} />
          </div>
        </div>
        <ChatForm chat={chatID} />
      </div>
    </div>
  )
}

export default Chat;
import React from "react";
import styled from 'styled-components';

export const Message = ({ id, myMessage, children }) => {
  return (
    <MessageItem myMessage={myMessage}>
      {/* {!myMessage && (
        <MessageImage key={id}>
          <picture>
            <source srcSet={item.avatar}/>
            <img className="user__picture" src={item.avatar} alt="user" />
          </picture>
        </MessageImage>
      )} */}
      <MessageContent myMessage={myMessage}>
        {children}
      </MessageContent>
    </MessageItem>
  )
}

const MessageItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: ${({ myMessage }) => myMessage ? 'flex-end' : 'flex-start'};
  padding-bottom: 10px;
`;

const MessageContent = styled.div`
  color: #fff;
  border-radius: 10px;
  background-color: ${({ myMessage }) => myMessage ? "rgba(23, 146, 255, 0.9)" : "rgba(84, 84, 84, .8)"};
  padding: 8px 12px;
`;

const MessageImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  border: 1px solid #f62354;

  img {
    width: 100%;
  }
`;
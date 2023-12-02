import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

export default function Dialogs (props) {
      let dialogsElements = props.messagesPage.dialogs.map(d => (
        <NavLink 
          to={`/dialogs/${d.id}`} 
          key={d.id} 
          className={({ isActive }) => isActive ? s.active : ''}
        >
          <DialogItem name={d.name} id={d.id} />
        </NavLink>
      ));

  let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message} />);

  let onSendMessageClick = () => {
    props.state.sendMessage();
  };

  let onNewMessageChange = (e) => {
    props.state.updateNewMessageText(e.target.value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div>
            <textarea
               value={props.newMessageText}
               onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}
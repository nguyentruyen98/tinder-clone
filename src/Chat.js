import React from 'react'
import './css/chat.css'
import Avatar from '@material-ui/core/Avatar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Chat({ name, mess, pic, time }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={pic}></Avatar>
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{mess}</p>
        </div>
        <p className="chat__time">{time}</p>
      </div>
    </Link>
  );
}

export default Chat

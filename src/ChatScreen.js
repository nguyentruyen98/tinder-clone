import React, { useState,useEffect } from 'react'
import './css/chatScreen.css';
import Avatar from '@material-ui/core/Avatar';

function ChatScreen() {
  const [input, setInput] = useState([''])
  const [messages, setMess] = useState([
    {
      name: 'Truyen',
      pic: 'http://2.bp.blogspot.com/-S6CWsorpmd8/TuSyt5ZQTkI/AAAAAAAAAGw/2SX-vCcmFX0/s1600/24+%2528www.cute-pictures.blogspot.com%2529.jpg',
      mess: 'Truyen qua pro hahaha !!!!!'
    },
    {
      name: 'Truyen',
      mess: 'Truyen qua pro heeeeee !!!!',
      pic: 'http://2.bp.blogspot.com/-S6CWsorpmd8/TuSyt5ZQTkI/AAAAAAAAAGw/2SX-vCcmFX0/s1600/24+%2528www.cute-pictures.blogspot.com%2529.jpg'
    },
    {
      mess: 'Truyen qua pro kakakaak !!!!'
    }
  ])
  const handleSend = e => {
    e.preventDefault();
    if (input !=''){
      setMess([...messages,{mess:input}]);
    }
    setInput('');
  }
  return (
    <div className="chatScreen">
      <p className="chatScreen__time">You Matched with Ellen on 10/10/2020</p>
      {messages.map(message => {
        if (message.name != null) {
          return (
            <div className="chatScreen__mess">
              <Avatar className="chatScreen__image" alt={message.name} src={message.pic}></Avatar>
              <p className="chatScreen__text">{message.mess}</p>
            </div>
          )
        }
        return (
          <div className="chatScreen__mess">
            <p className="chatScreen__Usertext">{message.mess}</p>
          </div>
        )

      })}
      <form className="chatScreen__input">
        <input type="text" placeholder="Text here....!!!!" className="chatScreen__inputFlield" value={input} onChange={e => setInput(e.target.value)} />
        <button className="chatScreen__inputButton" type="submit" onClick={handleSend}>SEND</button>
      </form>
    </div>
  )
}

export default ChatScreen

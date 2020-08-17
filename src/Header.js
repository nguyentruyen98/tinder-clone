import React from 'react'
import './css/header.css'
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => (
          history.replace(backButton)
        )}>
          <ArrowBackIosIcon fontSize="large" className="header__icon"></ArrowBackIosIcon>
        </IconButton>
      ) : (
          <IconButton>
            <PersonIcon fontSize="large" className="header__icon"></PersonIcon>
          </IconButton>)}

      <Link to="/">
        <img className="header__logo"
          src="https://www.lowi.es/blog/wp-content/uploads/2018/02/tinder-png-download-png-484.png"
          alt="Tinder Logo"></img>
      </Link>
      <Link to="chat">
        <IconButton>
          <QuestionAnswerIcon fontSize="large" className="header__icon"></QuestionAnswerIcon>
        </IconButton>
      </Link>
      <div></div>
      <div></div>
    </div>
  )
}

export default Header

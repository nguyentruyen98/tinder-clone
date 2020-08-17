import React from 'react';
import Header from './Header'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton='/chat' />
            <ChatScreen></ChatScreen>
          </Route>
          <Route path="/chat">
            <Header backButton='/' />
            <Chats></Chats>
          </Route>
          <Route path="/">
            <Header></Header>
            <TinderCards></TinderCards>
            <SwipeButtons></SwipeButtons>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

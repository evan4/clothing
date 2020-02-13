import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/HomePage'

function App() {
  return (
    <div className="">
      <Switch>
        <Route exact oath="/" component={HomePage}/>
        <Route exact oath="/topics" component={TopicsPage}/>
        <Route oath="/topics/:topicId" component={TopicDetail}/>
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Header from './components/header/Header';

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Sing from './pages/sign/Sing'

function App() {
  return (
    <div className="">
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/singin" component={Sing}/>
      </Switch>
    </div>
  );
}

export default App;

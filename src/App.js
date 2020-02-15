import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import './App.css';

import Header from './components/header/Header';

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Sing from './pages/sign/Sing'
import {auth} from './firebase/firebase.utils';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user);
    })
  }

 componentWillUnmount(){
  this.unsubscribeFromAuth()
 }

  render() {
    return (
      <div className="">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/singin" component={Sing}/>
        </Switch>
      </div>
    )
  }
}

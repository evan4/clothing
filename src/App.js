import React, { Component } from 'react'
import {Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/Header';

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Checkout from './pages/checkout/Checkout'

import Sing from './pages/sign/Sing'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import {selectCurrentuser} from './redux/user/user.selectors';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount(){
    const { setCurrentUser } = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userref = await createUserProfileDocument(userAuth);
        userref.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }else{
        setCurrentUser(userAuth)
      }

    })
  }

 componentWillUnmount(){
  this.unsubscribeFromAuth()
 }

  render() {
    return (
      <div className="">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/singin" 
          render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<Sing/>) }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

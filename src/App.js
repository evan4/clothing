import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux';

import './App.css';

import Header from './components/header/Header';

import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import Sing from './pages/sign/Sing'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser } from './redux/user/user.actions';

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
          <Route path="/singin" component={Sing}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);

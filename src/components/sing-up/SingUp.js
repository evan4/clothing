import React, { Component } from 'react'

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import "./singup.scss";

export default class SingUp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       displayName: '',
       email: '',
       password: '',
       confirmPassword: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
    const {name, value} = e.target;

    this.setState({
      [name]: value
    })
  }

  async handleSubmit(e){
    e.preventDefault();
    const {displayName, email, password, confirmPassword } = this.state;

    if (displayName === '') {
      console.log('display Name is mandatory');
      return;
    }

    if (email === '') {
      console.log('email is mandatory');
      return;
    }

    if (password === '') {
      console.log('password is mandatory');
      return;
    }

    if ( password !== confirmPassword) {
      console.log('Password do not match');
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, {displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error)
    }

  
  }

  render() {
    const {displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sing-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sing up woth your email and password</span>
        <form className="sing-up-form" onSubmit={this.handleSubmit}>
          <FormInput type="text" name="displayName" value={displayName}
          label="display Name"
          handleChange={this.handleChange} />

          <FormInput type="email" name="email" value={email}
          label="Email"
          handleChange={this.handleChange} />

          <FormInput type="password" name="password" 
          value={password} label="Password"
          handleChange={this.handleChange} />

          <FormInput type="password" name="confirmPassword" 
          value={confirmPassword} label="confirm Password"
          handleChange={this.handleChange} />

          <CustomButton type="submit">Sing up</CustomButton>
        </form>
      </div>
    )
  }
}

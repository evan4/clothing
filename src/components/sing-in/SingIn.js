import React, { Component } from 'react'
import "./singin.scss";
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import {singInWithGoogle } from '../../firebase/firebase.utils';

export default class SingIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
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

  handleSubmit(e){
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const {email, password } = this.state;

    return (
      <div className="sing-in">
        <h2>I already have an account</h2>
        <span>Sing in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" name="email" value={email}
          label="Email"
          handleChange={this.handleChange} />
          <FormInput type="password" name="password" 
          value={password} label="Password"
          handleChange={this.handleChange} />
          <div className="buttons">
            <CustomButton type="submit">Sing in</CustomButton>
            <CustomButton onClick={singInWithGoogle} isGoogleSingIn>Sing in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

import React from 'react';
import UserForm from './UserForm';
import { browserHistory } from 'react-router';
import {
   getFirebase
 } from 'react-redux-firebase';

class LoginEmail extends React.Component {
    constructor(props){
     super(props);
      this.state = {error:''};
       this.login = this.login.bind(this);

    }
  login(values) {
      const firebase = getFirebase();
      firebase.login(values)
      .then(() => {
        browserHistory.push('/')
      })
      .catch(() => {
            this.setState({ error: 'Authentication failed' });
            });
  }


  render() {
    return (
    <div>
      <UserForm onSubmit={this.login} label="login" />
      <h5 className="text-center">Do not have an account? <button onClick={()=>{browserHistory.push('/singup')}}>Sing Up&Login</button></h5>
      <h1>{this.state.error}</h1>
    </div>
  );
  }
}

export default LoginEmail;

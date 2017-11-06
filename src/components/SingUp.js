import React from 'react';
import UserForm from './UserForm';
// import { browserHistory } from 'react-router';
import {
   getFirebase
 } from 'react-redux-firebase';



class SingUp extends React.Component {
    constructor(props){
     super(props);
     this.state = {error:''};
     this.createNewUser = this.createNewUser.bind(this);
    }

  createNewUser(values) {
      const email = values.email;
      const password = values.password;
      const username = values.username;
      const firebase = getFirebase();
      firebase.createUser(
          { email, password },
          { username, email },
          { password, username },
      )
    //   .then(() => {
    //     browserHistory.push('/');
    //   })
      .catch(() => {
            this.setState({ error: 'Authentication failed' });
        });
  }


  render() {
    return (
    <div>
      <UserForm onSubmit={(this.createNewUser)} label="Sing Up" />
      <h1>{this.state.error}</h1>
    </div>
  );
  }
}

export default SingUp;

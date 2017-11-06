import React from 'react';
import { browserHistory } from 'react-router';
import {
   getFirebase,
   firebaseConnect,
   pathToJS,
 } from 'react-redux-firebase';
 import { compose } from 'redux';
 import { connect } from 'react-redux';
 import UserForm from '../components/UserForm';


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
          { username, email }
      )
    //   .then(() => {
    //     browserHistory.push('/');
    //   })
      .catch(() => {
            this.setState({ error: 'Authentication failed' });
        });
  }


  render() {
    const { authError } = this.props;
    return (
    <div>
      <UserForm onSubmit={(this.createNewUser)} label="Sing Up" />
      <h1 className="text-center">{this.state.error}</h1>
      <h3 className="text-center">{authError&&authError.message}</h3>
    </div>
  );
  }
}

export default compose(
  firebaseConnect(),
  connect(
    (state) => ({
        authError: pathToJS(state.firebase, 'authError'),
    })
  )
)(SingUp)

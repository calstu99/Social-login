import React from 'react';
import { RaisedButton } from 'material-ui';
import { getFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GoogleButton from 'react-google-button'
import {
   firebaseConnect,
   isLoaded,
   isEmpty,
   pathToJS
 } from 'react-redux-firebase';

 class GoogleLog extends React.Component {
     constructor(props){
      super(props);
      this.state = { isLoading: false}
       this.login = this.login.bind(this);
    }


    login() {
        const firebase = getFirebase();
        firebase.login({
           provider: 'google',
           type: 'redirect'
         })

    }


    logout(){
         const firebase = getFirebase();
         firebase.logout()
    }

    render () {
      const { authError, auth } = this.props;
      const { snackCanOpen } = this.state;
    console.log('auth GOOGLE', auth)

      if (!isLoaded(auth)) {
        return (
          <div>
            <span>Loading</span>
          </div>
        )
      }

      if (isEmpty(auth)) {
        return (
          <div>
             <GoogleButton onClick={this.login} />
          </div>
        )
      }

      return (
        <div>
            <p>Welcome, {auth.displayName}</p>
            <GoogleButton label="Logout" onClick={this.logout} />
        </div>
      )

    }
}


 export default compose(
   firebaseConnect(),
   connect(
     (state) => ({
         authError: pathToJS(state.firebase, 'authError'),
         auth: pathToJS(state.firebase, 'auth'),
         firebase: PropTypes.shape({
             login: PropTypes.func.isRequired
         }),
     })
   )
 )(GoogleLog)

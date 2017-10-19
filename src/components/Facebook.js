import React from 'react';
import { RaisedButton } from 'material-ui';
import { getFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';

import {
   firebaseConnect,
   isLoaded,
   isEmpty,
   dataToJS,
   pathToJS
 } from 'react-redux-firebase';

 class FacebookLog extends React.Component {
     constructor(props){
      super(props);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
    }

   login() {
       const firebase = getFirebase();
       firebase.login({
          provider: 'facebook',
          type: 'redirect'
        })

   }

   logout(){
        const firebase = getFirebase();
        firebase.logout()
   }

   render() {
     const { auth, profile } = this.props;
     console.log( 'FACEBOOK auth', auth, "facebook profile",  profile )
     return (
         <div className="fb">

         {      (!isLoaded(profile))?(<div className = "load"><CircularProgress size={80} thickness={5} /></div>):(

             (!profile)?(<RaisedButton primary={true} label="Login with Facebook" onClick={this.login} />):(
                 <div>
                 <h4>hi, {profile.displayName}</h4>
                     <img className="avatar-main" src={profile &&profile.avatarUrl}  />
                     <RaisedButton primary={true} label="Logout" onClick={this.logout} />
                 </div>
             )

         )


        }
       </div>
     )
   }
 }

 export default compose(
   firebaseConnect(),
   connect(
     (state) => ({
         auth: pathToJS(state.firebase, 'auth'), // in v2 todos: state.firebase.auth
         authError: pathToJS(state.firebase, 'authError'),
         profile: pathToJS(state.firebase, 'profile')
     })
   )
 )(FacebookLog)

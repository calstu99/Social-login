import React from 'react';
import { RaisedButton } from 'material-ui';
import { getFirebase } from 'react-redux-firebase';

 export default class LoginButton extends React.Component {

    render () {
      const { provider } = this.props;
      console.log("provider", provider)
        return (
          <div>
            <RaisedButton primary={true} label={provider}/>
          </div>
      )

    }
}

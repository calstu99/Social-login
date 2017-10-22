import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import asyncValidate from './asyncValidate';





const validate = values => {
  const errors = {}
  const requiredFields = [
    'email',
    'password',

  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />




class loginEmail extends React.Component {
    constructor(props){
         super(props);
            this.state = { index: 0}
       }



render() {

  const { handleSubmit, pristine, reset, submitting, actions, formprops, post } = this.props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="email"
          component={renderTextField}
          label="Email"
        />
      </div>
      <div>
        <Field name="password" component={renderTextField} label="Password" />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Login
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Sing Up
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}
}
export default reduxForm({
  form: 'AddPost', // a unique identifier for this form
  validate,
  asyncValidate
})(loginEmail)

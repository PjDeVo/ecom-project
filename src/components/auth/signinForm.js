import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput } from "../formFields";

class SignInForm extends Component {
  render() {
    const { className } = this.props;
    return (
      <form className={`${className} sign-in-form`}>
        <Field
          className="sign-in-form__email"
          name="email"
          component={FormInput}
          title="Email"
          type="email"
          placeholder="Email"
        />
        <Field
          className="sign-in-form__password"
          name="password"
          component={FormInput}
          title="Password"
          type="password"
          placeholder="Password"
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm"
})(SignInForm);

export default SignInForm;

import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
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

        <div className="sign-in-form__line"> </div>

        <Field
          onClick={() => console.log("tryna submit")}
          className="sign-in-form__login"
          name="login"
          component={FormButton}
          title="Login"
          type="submit"
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm"
})(SignInForm);

export default SignInForm;

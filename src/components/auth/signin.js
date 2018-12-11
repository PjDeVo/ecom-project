import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

class SignIn extends Component {
  render() {
    return (
      <div className="sign-in">
        <h1> this is the sign in section</h1>
      </div>
    );
  }
}

SignIn = reduxForm({
  form: "SignIn"
})(SignIn);

export default SignIn;

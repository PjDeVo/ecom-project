import React, { Component } from "react";
import PageTitle from "../pageTitle";

import { connect } from "react-redux";
import * as actions from "../../actions";

class Review extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  render() {
    return (
      <div className="review">
        <PageTitle className="review__page-title" title="Order Review" />
      </div>
    );
  }
}

Review = connect(
  null,
  actions
)(Review);

export default Review;

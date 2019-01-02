import React, { Component } from "react";
import PageTitle from "../pageTitle";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ReviewForm from "./reviewForm";

class Review extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }

  onSubmit = fields => {
    console.log("fields");
  };
  render() {
    return (
      <div className="review">
        <PageTitle className="review__page-title" title="Order Review" />
        <ReviewForm onSubmit={this.onSubmit} className="review__form" />
      </div>
    );
  }
}

Review = connect(
  null,
  actions
)(Review);

export default Review;

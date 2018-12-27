import React, { Component } from "react";

class Purchases extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={`${className} purchases`}>Purchases go right Hungh</div>
    );
  }
}

export default Purchases;

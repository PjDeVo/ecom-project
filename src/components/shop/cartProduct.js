import React, { Component } from "react";
import Quantity from "../quantity";
import GreenPriceTag from "../greenPriceTag";

class CartProduct extends Component {
  render() {
    const { className, product, quantity } = this.props;
    const { title, price } = product;
    return (
      <div className={`${className} cart-product`}>
        <img
          src="http://via.placeholder.com/130x130"
          className="cart-product__image"
        />
        <div className="cart-product__title"> {title} </div>
        <Quantity className="cart-product__quantity" quantity={quantity} />
        <div className="cart-product__remove"> Remove </div>
        <GreenPriceTag className="cart-product__price" title={price} />
      </div>
    );
  }
}

export default CartProduct;

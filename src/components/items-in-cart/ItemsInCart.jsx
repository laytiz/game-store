import React from "react";
import s from "./ItemsInCart.module.css";

const ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className={s.itemsInCart}>{quantity}</div> : null;
};

export default ItemsInCart;

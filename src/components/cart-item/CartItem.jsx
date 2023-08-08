import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/cart/reducer";
import { AiOutlineCloseCircle } from "react-icons/ai";
import s from "./CartItem.module.css";

const CartItem = ({ title, price, id }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className={s.cartItem}>
      <span>{title} </span>
      <div className={s.cartItem__price}>
        <span>{price} руб.</span>
        <AiOutlineCloseCircle
          size={15}
          className={s.cartItem__delete_icon}
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};
export default CartItem;

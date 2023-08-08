import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import GameCover from "../game-cover/GameCover";
import s from "./OrderItem.module.css";
import { deleteItemFromCart } from "../../store/cart/reducer";

const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };
  return (
    <div className={s.orderItem}>
      <div className={s.orderItem__cover}>
        <GameCover image={game.image} />
      </div>
      <div className={s.orderItem__title}>
        <span> {game.title} </span>
      </div>
      <div className={s.orderItem__price}>
        <span>{game.price} руб.</span>
        <AiOutlineCloseCircle
          size={25}
          className={s.cartItem__delete_icon}
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default OrderItem;

import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import  CartMenu  from "../cart-menu/CartMenu";
import  ItemsInCart  from "../items-in-cart/ItemsInCart";
import { calcTotalPrice } from "../utils";
import s from "./CartBlock.module.css";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();
  const totalPrice = calcTotalPrice(items);
  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div className={s.cart_block}>
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        color="white"
        size={25}
        className={s.cart_icon}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className={s.total_price}>{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu onClick={handleGoToOrderClick} />}
    </div>
  );
};
export default CartBlock;

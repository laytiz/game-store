import React from "react";
import { useSelector } from "react-redux";
import  Button  from "../button/Button";
import  CartItem  from "../cart-item/CartItem";
import { calcTotalPrice } from "../utils";
import s from './CartMenu.module.css'

const CartMenu = ({ onClick }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div className={s.cartMenu}>
      <div className={s.cartMenu__games_list}>
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.image}
                image={game.image}
                price={game.price}
                title={game.title}
                id={game.id}
              />
            ))
          : "Корзина пуста"}
      </div>
      {items.length > 0 ? (
        <div className={s.cartMenu__arrange}>
          <div className={s.cartMenu__total_price}>
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;

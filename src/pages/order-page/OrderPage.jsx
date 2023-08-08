import React from "react";
import { useSelector } from "react-redux";
import OrderItem from "../../components/order-item/OrderItem";
import { calcTotalPrice, enumerate } from "../../components/utils";
import s from "./OrderPage.module.css";

const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Ваша корзина пуста!</h1>;
  }

  return (
    <div className={s.orderPage}>
      <div className={s.orderPage__left}>
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className={s.orderPage__right}>
        <div className={s.orderPage__total_price}>
          <span>
            {items.length}{" "}
            {enumerate(items.length, ["товар", "товара", "товаров"])} на сумму{" "}
            {calcTotalPrice(items)} руб.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;

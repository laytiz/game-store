import React from "react";
import { Link } from "react-router-dom";
import CartBlock from "../cart-block/CartBlock";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <Link to="/" className={s.header__store_title}>
          Game Store
        </Link>
      </div>
      <div className={`${s.wrapper} ${s.header__cart_btn_wrapper}`}>
        <CartBlock />
      </div>
    </div>
  );
};

export default Header;

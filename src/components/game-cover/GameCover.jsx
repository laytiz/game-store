import React from "react";
import s from "./GameCover.module.css";

const GameCover = ({ image = "" }) => {
  return (
    <div className={s.gameCover} style={{ backgroundImage: `url(${image})` }} />
  );
};

export default GameCover;

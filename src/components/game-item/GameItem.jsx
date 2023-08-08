import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GameGenre from "../game-genre/GameGenre";
import GameBuy from "../game-buy/GameBuy";
import GameCover from "../game-cover/GameCover";
import { setCurrentGame } from "../../store/games/reducer";
import s from "./GameItem.module.css";

const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };

  return (
    <div className={s.gameItem} onClick={handleClick}>
      <GameCover image={game.image} />
      <div className={s.gameItem__details}>
        <span className={s.gameItem__title}>{game.title}</span>
        <div className={s.gameItem__genre}>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className={s.gameItem__buy}>
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};

export default GameItem;

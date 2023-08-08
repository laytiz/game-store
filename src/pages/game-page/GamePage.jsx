import React from "react";
import { useSelector } from "react-redux";
import GameBuy from "../../components/game-buy/GameBuy";
import GameCover from "../../components/game-cover/GameCover";
import GameGenre from "../../components/game-genre/GameGenre";
import s from "./GamePage.module.css";

const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame);

  if (!game) return null;

  return (
    <div className={s.gamePage}>
      <h1 className={s.gamePage__title}>{game.title}</h1>
      <div className={s.gamePage__content}>
        <div className={s.gamePage__left}>
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className={s.gamePage__right}>
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className={s.secondaryText}>
            Популярные метки для этого продукта:
          </p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className={s.gamePage__buy_game}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;

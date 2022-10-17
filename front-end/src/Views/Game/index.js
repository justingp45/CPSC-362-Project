import { useState } from "react";
import { GAME_OVER_VIEW, HOME_VIEW } from "../../constants";
import GameCanvas from "./GameCanvas";

const INITIAL_LIVES_COUNT       = 4;

function GameView({ setView }) {
  const [lives, setLives] = useState(INITIAL_LIVES_COUNT);
  const [points, setPoints] = useState(0);

  const goToHome = () => setView(HOME_VIEW);
  function reduceLives() {
    console.log('reduce')
    const newLives = lives - 1;

    if (newLives < 0) {
      // ask user for email
      setView(GAME_OVER_VIEW, {score: points});
    }

    setLives(newLives);
  }

  function addPoint(multiplier = 1) {
    setPoints(points + (1 * multiplier));
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }}>
      <h1>Game View</h1>
      <button onClick={goToHome}>Home</button>
      <h2>Lives: {lives} Points: {points}</h2>
      <div>
        <GameCanvas reduceLives={reduceLives} addPoint={addPoint} lives={lives} />
      </div>
    </div>
  );
}

export default GameView;
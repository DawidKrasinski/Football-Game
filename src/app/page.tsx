"use client";

import { useEffect, useRef, useState } from "react";
import { Game } from "./utils/game";

export default function Home() {
  const [game] = useState(() => new Game());
  const [lastTime, setLastTime] = useState(performance.now());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const requestRef = useRef(0);

  function animate(currentTime: number) {
    setLastTime(currentTime);

    game.updateGame();
    setScore(game.score);
    setBestScore(game.bestScore);

    requestRef.current = requestAnimationFrame(animate);
  }

  function radiusChange(e: React.ChangeEvent<HTMLInputElement>) {
    game.football.radius = parseFloat(e.target.value);
  }

  function gravityChange(e: React.ChangeEvent<HTMLInputElement>) {
    game.physicsEngine.gravity = parseFloat(e.target.value);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="flex gap-16 mt-8">
      <div>
        <h1>Football game</h1>
        <p>
          score: {score}, best score: {bestScore}
        </p>
        <svg width={1000} height={800} className="border">
          <circle
            onMouseDown={() => game.kickFootball()}
            cx={game.football.positionX}
            cy={game.football.positionY}
            r={game.football.radius}
            fill="black"
          />
        </svg>
      </div>
      <div className="mt-8 flex flex-col gap-8">
        <div className="flex gap-8">
          <h2>Radius: </h2>
          <input
            className="border pl-2"
            type="number"
            placeholder="50"
            onChange={(e) => radiusChange(e)}
          />
        </div>
        <div className="flex gap-8">
          <h2>Gravity: </h2>
          <input
            className="border pl-2"
            type="number"
            placeholder="1"
            onChange={(e) => gravityChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { GameContext } from "@/context/game-context";
import React, { useContext } from "react";
import styles from "@/styles/score.module.css";

const Score = () => {
  const { score } = useContext(GameContext);

  return (
    <div className={styles.score}>
      Score
      <div>{score}</div>
    </div>
  );
};

export default Score;

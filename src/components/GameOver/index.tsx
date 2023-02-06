import { useContext, useEffect, useState } from "react";
import BoardContext from "../../assets/BoardContext";
import ReactModal from "react-modal";
import styles from "./GameOver.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinStars } from "@fortawesome/free-solid-svg-icons";

type GameOverType = {
  isOpen: boolean;
};

export function GameOver() {
  const {
    numberOfAttempts,
    setNumberOfAttempts,
    setMatchingCards,
    matchingCards,
    size,
    sortedCards,
    category,
    isPlaying,
    setIsPlaying,
  } = useContext(BoardContext);

  return (
    // <ReactModal
    //   isOpen={isOpen}
    //   onRequestClose={() => handleRestart()}
    //   overlayClassName={styles.overlay}
    //   className={styles.modal}
    // >
    //   <div>
    //     GGs! You finished the game with {numberOfAttempts} failed attempts.
    //   </div>
    //   <button onClick={handleRestart}>Restart</button>
    // </ReactModal>
    <>
      <div
        className={`${styles.container} ${
          !isPlaying && matchingCards.length > 0 && styles.show
        }`}
      >
        <FontAwesomeIcon icon={faGrinStars} className={styles.icon} />
        <span>
          <span className={styles.gg}>GGs</span>! You finished the game after{" "}
          <span>{numberOfAttempts}</span> failed{" "}
          {numberOfAttempts == 1 ? `attempt` : `attempts`}.
        </span>
      </div>
    </>
  );
}

export default GameOver;

import { useContext, useEffect, useState } from "react";
import BoardContext from "../../assets/BoardContext";
import ReactModal from "react-modal";
import styles from "./GameOver.module.css";

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
  } = useContext(BoardContext);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (size > 0 && matchingCards.length == size) {
      setTimeout(() => {
        setIsOpen(!isOpen);
      }, 1500);
    }
  }, [matchingCards]);

  const handleRestart = () => {
    setNumberOfAttempts(0);
    setMatchingCards([]);
    sortedCards(size, category);
    setIsOpen(!isOpen);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => handleRestart()}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <div>
        GGs! You finished the game with {numberOfAttempts} failed attempts.
      </div>
      <button onClick={handleRestart}>Restart</button>
    </ReactModal>
  );
}

export default GameOver;

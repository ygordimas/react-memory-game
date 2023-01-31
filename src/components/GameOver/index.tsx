import { useContext } from "react";
import BoardContext from "../../assets/BoardContext";
import ReactModal from "react-modal";
import styles from "./GameOver.module.css";

type GameOverType = {
  isOpen: boolean;
};

export function GameOver({ isOpen }: GameOverType) {
  const { numberOfAttempts, setNumberOfAttempts, setMatchingCards } =
    useContext(BoardContext);

  const handleRestart = () => {
    setNumberOfAttempts(0);
    setMatchingCards([]);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => handleRestart()}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      <div>
        GGs! You finished the game after {Math.floor(numberOfAttempts / 2)}{" "}
        attempts
      </div>
      <button onClick={handleRestart}>Restart</button>
    </ReactModal>
  );
}

export default GameOver;

import { useContext } from "react";
import BoardContext from "../../assets/BoardContext";
import ReactModal from "react-modal";

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
    <ReactModal isOpen={isOpen} onRequestClose={() => handleRestart()}>
      <div>
        GGs! You finished the game after {numberOfAttempts / 2} attempts
      </div>
      <button onClick={handleRestart}>Restart</button>
    </ReactModal>
  );
}

export default GameOver;

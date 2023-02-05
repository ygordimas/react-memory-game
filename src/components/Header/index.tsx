import { useContext } from "react";
import BoardContext from "../../assets/BoardContext";
import styles from "./Header.module.css";

export function Header() {
  const {
    size,
    setSize,
    category,
    sortedCards,
    setCategory,
    cards,
    setCards,
    setMatchingCards,
    isPlaying,
    setIsPlaying,
    setFlippedCards,
  } = useContext(BoardContext);
  return (
    <header className={styles.header}>
      {/* <div className={styles.title}>Memory Game</div> */}
      <form action="submit" className={styles.form}>
        <div className={styles.pickers}>
          <div className={styles.picker}>
            <div className={styles["picker-title"]}>Theme</div>
            <div className={styles["picker-objects"]}>
              <label>
                <input
                  className={`${
                    category === "frogs" && styles["picker-active"]
                  }`}
                  type="radio"
                  name="frogs"
                  id="frogs"
                  onChange={() => setCategory("frogs")}
                  checked={category === "frogs"}
                />
                <span>Frogs</span>
              </label>
              <label>
                <input
                  className={`${
                    category === "bugs" && styles["picker-active"]
                  }`}
                  type="radio"
                  name="bugs"
                  id="bugs"
                  onChange={() => setCategory("bugs")}
                  checked={category === "bugs"}
                />
                <span>Bugs</span>
              </label>
              <label>
                <input
                  className={`${
                    category === "mountains" && styles["picker-active"]
                  }`}
                  type="radio"
                  name="mountains"
                  id="mountains"
                  onChange={() => setCategory("mountains")}
                  checked={category === "mountains"}
                />
                <span>Mountains</span>
              </label>
            </div>
          </div>
          <div className={styles.picker}>
            <div className={styles["picker-title"]}>Cards</div>
            <div className={styles["picker-objects"]}>
              <label>
                <input
                  className={`${size === 4 && styles["picker-active"]}`}
                  type="radio"
                  name="four"
                  id="four"
                  onChange={() => setSize(4)}
                  checked={size === 4}
                />
                <span>8</span>
              </label>
              <label>
                <input
                  className={`${size === 8 && styles["picker-active"]}`}
                  type="radio"
                  name="eight"
                  id="eight"
                  onChange={() => setSize(8)}
                  checked={size === 8}
                />
                <span>16</span>
              </label>
              <label>
                <input
                  className={`${size === 12 && styles["picker-active"]}`}
                  type="radio"
                  name="twelve"
                  id="twelve"
                  onChange={() => setSize(12)}
                  checked={size === 12}
                />
                <span>24</span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            className={`${!isPlaying && styles.buttonIsActive}`}
            onClick={(e) => {
              e.preventDefault();
              sortedCards(size, category);
              setMatchingCards([]);
              setIsPlaying(true);
            }}
          >
            Play
          </button>
          <button
            className={`${isPlaying && styles.buttonIsActive}`}
            onClick={(e) => {
              e.preventDefault();
              setCards([]);
              setFlippedCards([]);
              setMatchingCards([]);
            }}
          >
            Restart
          </button>
        </div>
      </form>
    </header>
  );
}

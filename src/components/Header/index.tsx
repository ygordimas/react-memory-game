import { useContext, useState } from "react";
import BoardContext from "../../assets/BoardContext";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
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

  const [error, setError] = useState(false);

  const handleThemeAndSize = (
    input: string | number
  ): string | number | void => {
    if (isPlaying == true) {
      return;
    }
    if (typeof input == "string") {
      setCategory(input);
    } else if (typeof input == "number") {
      setSize(input);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <header>
          <FontAwesomeIcon icon={faBrain} className={styles.brain} />
          <span>Memory Game</span>
        </header>
        {isPlaying && !error && <span>Have fun!</span>}
        {!isPlaying && !error && (
          <span>Set a theme and board size to start playing.</span>
        )}
        {!isPlaying && error && (
          <span className={styles.error}>
            You MUST set a theme and board size to start playing.
          </span>
        )}
      </div>
      <form action="submit" className={styles.form}>
        <div className={styles.pickers}>
          <div className={styles.picker}>
            <div
              className={`${styles.pickerTitle} ${
                isPlaying && styles.pickerTitleDisabled
              }`}
            >
              Theme
            </div>
            <div className={styles["picker-objects"]}>
              <label>
                <input
                  className={`${
                    category === "frogs" && styles["picker-active"]
                  }`}
                  type="radio"
                  name="frogs"
                  id="frogs"
                  onChange={() => handleThemeAndSize("frogs")}
                  checked={category === "frogs"}
                />
                <span
                  className={`${styles.pickerLabel} ${
                    isPlaying && styles.pickerLabelDisabled
                  }`}
                >
                  Frogs
                </span>
              </label>
              <label>
                <input
                  className={`${
                    category === "bugs" && styles["picker-active"]
                  }`}
                  type="radio"
                  name="bugs"
                  id="bugs"
                  onChange={() => handleThemeAndSize("bugs")}
                  checked={category === "bugs"}
                />
                <span
                  className={`${styles.pickerLabel} ${
                    isPlaying && styles.pickerLabelDisabled
                  }`}
                >
                  Bugs
                </span>
              </label>
              <label>
                <input
                  className={`${
                    category === "mountains" && styles["picker-active"]
                  }`}
                  type="radio"
                  name="mountains"
                  id="mountains"
                  onChange={() => handleThemeAndSize("mountains")}
                  checked={category === "mountains"}
                />
                <span
                  className={`${styles.pickerLabel} ${
                    isPlaying && styles.pickerLabelDisabled
                  }`}
                >
                  Mountains
                </span>
              </label>
            </div>
          </div>
          <div className={styles.picker}>
            <div
              className={`${styles.pickerTitle} ${
                isPlaying && styles.pickerTitleDisabled
              }`}
            >
              Cards
            </div>
            <div className={styles["picker-objects"]}>
              <label>
                <input
                  className={`${size === 4 && styles["picker-active"]}`}
                  type="radio"
                  name="four"
                  id="four"
                  onChange={() => handleThemeAndSize(4)}
                  checked={size === 4}
                />
                <span
                  className={`${styles.pickerLabel} ${
                    isPlaying && styles.pickerLabelDisabled
                  }`}
                >
                  8
                </span>
              </label>
              <label>
                <input
                  className={`${size === 8 && styles["picker-active"]}`}
                  type="radio"
                  name="eight"
                  id="eight"
                  onChange={() => handleThemeAndSize(8)}
                  checked={size === 8}
                />
                <span
                  className={`${styles.pickerLabel} ${
                    isPlaying && styles.pickerLabelDisabled
                  }`}
                >
                  16
                </span>
              </label>
              <label>
                <input
                  className={`${size === 12 && styles["picker-active"]}`}
                  type="radio"
                  name="twelve"
                  id="twelve"
                  onChange={() => handleThemeAndSize(12)}
                  checked={size === 12}
                />
                <span
                  className={`${styles.pickerLabel} ${
                    isPlaying && styles.pickerLabelDisabled
                  }`}
                >
                  24
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <button
            className={`${!isPlaying && styles.buttonIsActive}`}
            disabled={isPlaying}
            onClick={(e) => {
              e.preventDefault();
              if (size == 0 || category == "") {
                setError(true);
                return;
              }
              sortedCards(size, category);
              setMatchingCards([]);
              setIsPlaying(true);
              setError(false);
            }}
          >
            Play
          </button>
          <button
            className={`${isPlaying && styles.buttonIsActive}`}
            disabled={!isPlaying}
            onClick={(e) => {
              e.preventDefault();
              setCards([]);
              setFlippedCards([]);
              setMatchingCards([]);
              setIsPlaying(false);
            }}
          >
            Restart
          </button>
        </div>
      </form>
    </header>
  );
}

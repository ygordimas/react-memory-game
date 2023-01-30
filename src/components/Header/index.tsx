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
    setMatchingCards,
  } = useContext(BoardContext);
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        Memory Game<hr></hr>
      </div>
      <form action="submit" className={styles.form}>
        <div className={styles.radios}>
          <div className={styles.radioHeading}>Category</div>
          <label htmlFor="frogs">
            <input
              type="radio"
              id="frogs"
              name="categories"
              value="frogs"
              onChange={() => setCategory("frogs")}
              checked={category === "frogs"}
            />
            Frogs
          </label>
          <label htmlFor="bugs">
            <input
              type="radio"
              id="bugs"
              name="categories"
              value="bugs"
              onChange={() => setCategory("bugs")}
              checked={category === "bugs"}
            />
            Bugs
          </label>
          <label htmlFor="mushrooms">
            <input
              type="radio"
              id="mushrooms"
              name="categories"
              value="mushrooms"
              onChange={() => setCategory("mushrooms")}
              checked={category === "mushrooms"}
            />
            Mushrooms
          </label>
        </div>
        <div className={styles.radios}>
          <div className={styles.radioHeading}>Amount of Cards</div>
          <label htmlFor="four">
            <input
              type="radio"
              id="four"
              name="boardSize"
              value="four"
              onChange={() => setSize(4)}
              checked={size === 4}
            />
            8
          </label>
          <label htmlFor="eight">
            <input
              type="radio"
              id="eight"
              name="boardSize"
              value="eight"
              onChange={() => setSize(8)}
              checked={size === 8}
            />
            16
          </label>
          <label htmlFor="twelve">
            <input
              type="radio"
              id="twelve"
              name="boardSize"
              value="twelve"
              onChange={() => setSize(12)}
              checked={size === 12}
            />
            24
          </label>
          {/* <label htmlFor="sixteen">
            <input
              type="radio"
              id="sixteen"
              name="boardSize"
              value="sixteen"
              onChange={() => setSize(16)}
              checked={size === 16}
            />
            16
          </label> */}
        </div>
        <button
          className={styles.formButton}
          onClick={(e) => {
            e.preventDefault();
            sortedCards(size, category);
            setMatchingCards([]);
          }}
        >
          {cards.length === 0 ? "Play!" : "Restart"}
        </button>
      </form>
    </header>
  );
}

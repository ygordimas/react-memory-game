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
      <div className={styles.title}>Memory Game</div>
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
        {/* <div className={styles.selects}> */}
        {/* <div className={styles.selectsHeading}>Category</div> */}
        {/* <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option id="frogs" value="frogs">
              Frogs
            </option>
            <option id="bugs" value="bugs">
              Bugs
            </option>
            <option id="mushrooms" value="mushrooms">
              Mushrooms
            </option>
          </select> */}
        {/* <div className={styles.radioHeading}>Category</div>
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
          </label> */}
        {/* </div> */}
        {/* <div className={styles.selects}>
          <div className={styles.selectsHeading}>Amount of Cards</div>
          <select
            name="size"
            id="size"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          >
            <option value="4">8</option>
            <option value="8">16</option>
            <option value="12">24</option>
          </select> */}
        {/* <div className={styles.radioHeading}>Amount of Cards</div>
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
          </label> */}
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
        {/* </div> */}
        <button
          className={`${styles.playButton} ${
            cards.length > 0 && styles.playButtonActive
          }`}
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

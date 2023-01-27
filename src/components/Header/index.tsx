import { useContext } from "react";
import BoardContext from "../../assets/BoardContext";
import { categories } from "../../assets/categories";

export function Header() {
  const board = useContext(BoardContext);
  const { size, setSize, category, sortedCards, setCategory, cards } =
    useContext(BoardContext);
  return (
    <form action="submit">
      <div className="categoryInputs">
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
      <div className="boardSizeInputs">
        <label htmlFor="four">
          <input
            type="radio"
            id="four"
            name="boardSize"
            value="four"
            onChange={() => setSize(4)}
            checked={size === 4}
          />
          4
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
          8
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
          12
        </label>
        <label htmlFor="sixteen">
          <input
            type="radio"
            id="sixteen"
            name="boardSize"
            value="sixteen"
            onChange={() => setSize(16)}
            checked={size === 16}
          />
          16
        </label>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          sortedCards(size, category);
        }}
      >
        Test!
      </button>
    </form>
  );
}

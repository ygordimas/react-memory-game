import { useContext } from "react";
import BoardContext from "../../assets/BoardContext";

export function Header() {
  const board = useContext(BoardContext);
  return (
    <form action="submit">
      <div className="categoryInputs">
        <label htmlFor="frogs">
          <input
            type="radio"
            id="frogs"
            name="categories"
            value="frogs"
            onChange={() => board?.setCategory("frogs")}
            checked={board?.category === "frogs"}
          />
          Frogs
        </label>
        <label htmlFor="bugs">
          <input
            type="radio"
            id="bugs"
            name="categories"
            value="bugs"
            onChange={() => board?.setCategory("bugs")}
            checked={board?.category === "bugs"}
          />
          Bugs
        </label>
        <label htmlFor="mushrooms">
          <input
            type="radio"
            id="mushrooms"
            name="categories"
            value="mushrooms"
            onChange={() => board?.setCategory("mushrooms")}
            checked={board?.category === "mushrooms"}
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
            onChange={() => board?.setSize(4)}
            checked={board?.size === 4}
          />
          4
        </label>
        <label htmlFor="eight">
          <input
            type="radio"
            id="eight"
            name="boardSize"
            value="eight"
            onChange={() => board?.setSize(8)}
            checked={board?.size === 8}
          />
          8
        </label>
        <label htmlFor="twelve">
          <input
            type="radio"
            id="twelve"
            name="boardSize"
            value="twelve"
            onChange={() => board?.setSize(12)}
            checked={board?.size === 12}
          />
          12
        </label>
        <label htmlFor="sixteen">
          <input
            type="radio"
            id="sixteen"
            name="boardSize"
            value="sixteen"
            onChange={() => board?.setSize(16)}
            checked={board?.size === 16}
          />
          16
        </label>
      </div>
    </form>
  );
}

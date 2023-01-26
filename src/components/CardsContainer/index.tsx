import { Card } from "../Card";
import { useContext } from "react";
import BoardContext from "../../assets/BoardContext";
import { categories } from "../../assets/categories";

export function CardsContainer() {
  const { size, category, sortedCards } = useContext(BoardContext);

  return (
    <>
      <div>
        <button>Test!</button>
      </div>
    </>
  );
}

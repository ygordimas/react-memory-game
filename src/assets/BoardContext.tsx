import { createContext, useState } from "react";
import { categories } from "./categories";

type BoardContextType = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  sortedCards: (amountOfCards: number, category: string) => string[];
};

type BoardContextProviderProps = {
  children: React.ReactNode;
};

const BoardContext = createContext<BoardContextType>(null);

export function BoardContextProvider({ children }: BoardContextProviderProps) {
  const [category, setCategory] = useState<string>("frogs");
  const [size, setSize] = useState<number>(4);

  const sortedArrayOfIndexes = (amountOfCards: number) => {
    const arr = [];
    for (let i = 0; i < 16; i++) {
      arr[i] = i;
    }
    const sortedArray = arr.sort(() => Math.random() - 0.5);
    return [
      ...sortedArray.slice(0, amountOfCards),
      ...sortedArray.slice(0, amountOfCards),
    ].sort(() => Math.random() - 0.5);
  };

  const pickCardsFromCategory = (indexes: [], category: string) => {
    const arrayOfCards = [];
    for (let i = 0; i < indexes.length; i++) {
      arrayOfCards.push(category[indexes[i]]);
    }
    return arrayOfCards;
  };

  const sortedCards = (amountOfCards: number, category: string) => {
    const indexes = sortedArrayOfIndexes(amountOfCards);
    const sortedCards = pickCardsFromCategory(indexes, category);

    return sortedCards;
  };

  return (
    <BoardContext.Provider
      value={{ category, setCategory, size, setSize, sortedCards }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export default BoardContext;

import { createContext, useEffect, useState } from "react";
import { categories } from "./categories";
import { v4 as uuidv4 } from "uuid";

type CardType = {
  url: string;
  id: string;
};

type BoardContextType = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  sortedCards: (amountOfCards: number, category: string) => void;
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  flippedCards: CardType[];
  setFlippedCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  matchingCards: string[];
  setMatchingCards: React.Dispatch<React.SetStateAction<string[]>>;
  numberOfAttempts: number;
  setNumberOfAttempts: React.Dispatch<React.SetStateAction<number>>;
  activeCard: CardType | null;
  setActiveCard: React.Dispatch<React.SetStateAction<CardType | null>>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

type BoardContextProviderProps = {
  children: React.ReactNode;
};

const BoardContext = createContext<BoardContextType>(null);

export function BoardContextProvider({ children }: BoardContextProviderProps) {
  const [category, setCategory] = useState<string>("");
  const [size, setSize] = useState<number>(0);
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
  const [matchingCards, setMatchingCards] = useState<string[]>([]);
  const [numberOfAttempts, setNumberOfAttempts] = useState(0);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const sortedArrayOfIndexes = (amountOfCards: number) => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      arr[i] = i;
    }
    const sortedArray = arr.sort(() => Math.random() - 0.5);
    return [
      ...sortedArray.slice(0, amountOfCards),
      ...sortedArray.slice(0, amountOfCards),
    ].sort(() => Math.random() - 0.5);
  };

  const pickCardsFromCategory = (indexes: number[], category: string) => {
    const arrayOfCards = [];
    for (let i = 0; i < indexes.length; i++) {
      arrayOfCards.push({
        url: categories[category][indexes[i]],
        id: uuidv4(),
      });
    }
    return arrayOfCards;
  };

  const sortedCards = (amountOfCards: number, category: string) => {
    const indexes = sortedArrayOfIndexes(amountOfCards);
    const sortedCards = pickCardsFromCategory(indexes, category);
    // console.log(sortedCards);
    setCards(sortedCards);
  };

  return (
    <BoardContext.Provider
      value={{
        category,
        setCategory,
        size,
        setSize,
        sortedCards,
        cards,
        setCards,
        flippedCards,
        setFlippedCards,
        matchingCards,
        setMatchingCards,
        numberOfAttempts,
        setNumberOfAttempts,
        activeCard,
        setActiveCard,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export default BoardContext;

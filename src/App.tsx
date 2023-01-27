import { useState } from "react";
import { categories } from "./assets/categories";
import { useContext } from "react";
import BoardContext from "./assets/BoardContext";
import { Header } from "./components/Header";
import { CardsContainer } from "./components/CardsContainer";
import GameOver from "./components/GameOver";

function App() {
  const { matchingCards, size } = useContext(BoardContext);
  return (
    <div className="App">
      <Header />
      <CardsContainer />
      <GameOver isOpen={matchingCards.length === size} />
    </div>
  );
}

export default App;

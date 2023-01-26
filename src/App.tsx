import { useState } from "react";
import { categories } from "./assets/categories";
import { useContext } from "react";
import BoardContext from "./assets/BoardContext";
import { Header } from "./components/Header";
import { CardsContainer } from "./components/CardsContainer";

function App() {
  const board = useContext(BoardContext);
  console.log(board?.size, board?.category);
  return (
    <div className="App">
      <span>{board?.category}</span>
      <Header />
      <CardsContainer />
    </div>
  );
}

export default App;

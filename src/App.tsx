import { useState } from "react";
import { categories } from "./assets/categories";
import { useContext } from "react";
import BoardContext from "./assets/BoardContext";
import { Header } from "./components/Header";
import { CardsContainer } from "./components/CardsContainer";
import GameOver from "./components/GameOver";
import styles from "./App.module.css";

function App() {
  const { matchingCards, size } = useContext(BoardContext);

  return (
    <div className={styles.app}>
      <Header />
      <CardsContainer />
      <GameOver />
    </div>
  );
}

export default App;

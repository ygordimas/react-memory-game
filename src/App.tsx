import { useEffect, useState } from "react";
import { categories } from "./assets/categories";
import { useContext } from "react";
import BoardContext from "./assets/BoardContext";
import { Header } from "./components/Header";
import { CardsContainer } from "./components/CardsContainer";
import GameOver from "./components/GameOver";
import styles from "./App.module.css";

function App() {
  const { matchingCards, size, category } = useContext(BoardContext);

  useEffect(() => {
    if (category == "frogs") {
      document.title = "Ribbit!";
    } else if (category == "bugs") {
      document.title = "Bzzzzz!";
    } else if (category == "mountains") {
      document.title = "In places deep, where dark things sleep...";
    } else {
      document.title = "Memory Game";
    }
  }, [category]);

  return (
    <div className={styles.app}>
      <Header />
      <CardsContainer />
    </div>
  );
}

export default App;

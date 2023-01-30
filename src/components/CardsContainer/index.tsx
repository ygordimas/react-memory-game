import { Card } from "../Card";
import { useContext, useState } from "react";
import BoardContext from "../../assets/BoardContext";
import { categories } from "../../assets/categories";

import styles from "./CardsContainer.module.css";

export function CardsContainer() {
  const { size, category, sortedCards, cards, numberOfAttempts } =
    useContext(BoardContext);

  return (
    <>
      <div className={styles.cardsContainer}>
        {cards &&
          cards.map((card) => (
            <Card key={card.id} url={card.url} id={card.id} />
          ))}
      </div>
    </>
  );
}

import { Card } from "../Card";
import { useContext, useEffect, useState } from "react";
import BoardContext from "../../assets/BoardContext";
import { categories } from "../../assets/categories";

import styles from "./CardsContainer.module.css";
import GameOver from "../GameOver";

type CardType = {
  url: string;
  id: string;
};

export function CardsContainer() {
  const {
    size,
    category,
    sortedCards,
    cards,
    setActiveCard,
    flippedCards,
    setFlippedCards,
    matchingCards,
    setMatchingCards,
    setNumberOfAttempts,
    numberOfAttempts,
    isPlaying,
    setIsPlaying,
  } = useContext(BoardContext);

  useEffect(() => {
    if (
      flippedCards.length == 2 &&
      flippedCards[0].url == flippedCards[1].url
    ) {
      setMatchingCards([...matchingCards, flippedCards[0].url]);
      setTimeout(() => {
        setFlippedCards([]);
        setActiveCard(null);
      }, 1000);
    } else if (
      flippedCards.length == 2 &&
      flippedCards[0].url != flippedCards[1].url
    ) {
      setNumberOfAttempts(numberOfAttempts + 1);
      //settimeout to prevent cards from being reclicked and added again before flipping animation is done
      setTimeout(() => {
        setFlippedCards([]);
        setActiveCard(null);
      }, 1500);
    }
  }, [flippedCards]);
  console.log(flippedCards);

  useEffect(() => {
    if (size > 0 && matchingCards.length == size) {
      setTimeout(() => {
        setIsPlaying(false);
      }, 1500);
    }
  }, [matchingCards]);
  return (
    <>
      <div
        className={`${styles.cardsContainer} ${size == 4 && styles.smallGrid} ${
          size == 8 && styles.mediumGrid
        } ${size == 12 && styles.largeGrid}`}
      >
        {!isPlaying && <GameOver />}

        {isPlaying &&
          cards &&
          cards.map((card) => (
            <Card key={card.id} url={card.url} id={card.id} />
          ))}
      </div>
    </>
  );
}

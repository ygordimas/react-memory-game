import { useContext, useEffect, useState } from "react";
import BoardContext from "../../assets/BoardContext";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMosquito,
  faFrog,
  faMountainSun,
} from "@fortawesome/free-solid-svg-icons";

type CardType = {
  url: string;
  id: string;
};

export function Card({ url, id }: CardType) {
  const {
    flippedCards,
    setFlippedCards,
    matchingCards,
    category,
    activeCard,
    setActiveCard,
  } = useContext(BoardContext);

  const [displayedFlipped, setDisplayedFlipped] = useState<CardType[]>([]);

  //clicking on a card sets it to be displayed
  useEffect(() => {
    if (activeCard) {
      setDisplayedFlipped([...displayedFlipped, { ...activeCard }]);
    }
    if (flippedCards.length == 2 && flippedCards[0].id != flippedCards[1].url) {
      setTimeout(() => {
        setDisplayedFlipped([]);
      }, 1000);
    }
  }, [activeCard]);

  function handleClick(url: string, id: string) {
    //prevents flipped card from being handled again
    if (
      (activeCard && activeCard.id == id) ||
      matchingCards.some((card) => card == url) ||
      flippedCards.some((card) => card.id == id) ||
      flippedCards.length == 2
    ) {
      return;
    }

    setActiveCard({ url, id });
    setFlippedCards([...flippedCards, { url, id }]);
  }

  function displayIcon(category: string) {
    if (category == "frogs") {
      return faFrog;
    } else if (category == "bugs") {
      return faMosquito;
    } else {
      return faMountainSun;
    }
  }

  return (
    <>
      <div className={styles.card} onClick={() => handleClick(url, id)}>
        <div
          className={`${styles.cardContainer} ${
            matchingCards.some((card) => card == url) &&
            styles.cardContainerFlip
          } ${
            displayedFlipped.some((card) => card.id == id) &&
            styles.cardContainerFlip
          }
           `}
        >
          <div className={styles.cardFront}>
            <FontAwesomeIcon
              icon={displayIcon(category)}
              className={styles.cardFrontIcon}
            />
          </div>

          <div className={styles.cardBack}>
            <img
              className={`${styles.cardImg} ${
                matchingCards.some((card) => card == url) && styles.cardMatch
              }`}
              src={url}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

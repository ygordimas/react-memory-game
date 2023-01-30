import { useContext, useState } from "react";
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
    setMatchingCards,
    cards,
    setNumberOfAttempts,
    category,
  } = useContext(BoardContext);
  const [isFlipped, setIsFlipped] = useState(false);

  function handleFlip(url: string, id: string) {
    let flipped: CardType[] = [...flippedCards, { url, id }];
    setFlippedCards([...flipped]);
    if (!matchingCards.some((cardURL) => cardURL == url)) {
      setNumberOfAttempts((attempts) => attempts + 1);
    }
    if (flipped.length == 2 && flipped[0].url == flipped[1].url) {
      console.log("match");

      setTimeout(() => {
        setMatchingCards([...matchingCards, url]);
        setFlippedCards([]);
      }, 1000);
    } else if (flipped.length == 2 && flipped[0].url != flipped[1].url) {
      console.log("no mtach");
      setTimeout(() => {
        setFlippedCards([]);
      }, 1000);
    }
  }

  function handleIcon(category: string) {
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
      <div className={styles.card} onClick={() => handleFlip(url, id)}>
        <div
          className={`${styles.cardContainer} ${
            matchingCards.some((card) => card == url) &&
            styles.cardContainerFlip
          }
           ${
             flippedCards.some((card) => card.id == id) &&
             styles.cardContainerFlip
           }`}
        >
          <div className={styles.cardFront}>
            <FontAwesomeIcon
              icon={handleIcon(category)}
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

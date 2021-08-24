import React from "react";
import styles from "./Card.module.scss";

const Card = ({ beer }) => {
    
  return (
    <article className={styles.card}>
      <p className={styles.heading}>{beer.name}</p>
      <img src={beer.image_url} />
      <p className={styles.abv}>{beer.abv} ABV</p>
      <p>{beer.description}</p>
    </article>
  );
};

export default Card;
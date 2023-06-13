import React from 'react';
import styles from "./_Section5Card.module.scss";

const Section5Card = ({ title, subtitle, imageUrl, buttonText, onButtonClick }) => {
    return (
      <div className={styles.main}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div className={styles.imgcontainer}>
        <img src={imageUrl} alt="Component Image" />
        </div>
        <button onClick={onButtonClick}>{buttonText}</button>
      </div>
    );
  };
  
  export default Section5Card;
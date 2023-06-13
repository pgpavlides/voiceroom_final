import React from "react";

import styles from "./_Section3.module.scss";

import LanguageContext from '../../../LanguageContext';
import { useContext } from 'react';


const translations = {
  en: {
    welcome: '‘Everyone has a beautiful voice you just have to know how to use it’',
  },
  gr: {
    welcome: '‘Ο καθένας έχει μια όμορφη φωνή, απλώς πρέπει να ξέρουμε πως να τη χρησιμοποιεί’ ',
  },
};


function Section3() {

  const { language } = useContext(LanguageContext);

  return (
    <section className={styles.section3}>
     <img
        
        src="/imgs/wave_quote_pano.svg"
        alt="Example SVG"
        style={{ width: "100%"}}
      ></img>

      <div className={styles.section3__container} id="about">
        
          <h1>
          {translations[language].welcome}
          </h1>
          <h3>– Jo Estill </h3>
        
      </div>

      <img
        
        src="/imgs/wave_quote_kato.svg"
        alt="Example SVG"
        style={{ width: "100%"}}
      ></img>
    </section>
  );
}

export default Section3;

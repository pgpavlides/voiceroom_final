import React from "react";

import styles from "./_Section1.module.scss";

import LanguageContext from "../../../LanguageContext";
import { useContext } from "react";

const translations = {
  en: {
    welcome: "Explore your voice",
  },
  gr: {
    welcome: "Ένας χώρος φωνητικής εξερεύνησης ",
  },
};

function Section1() {
  const { language } = useContext(LanguageContext);

  return (
    <section className={styles.section1}>
      <div className={styles.section1__maincontainer}>
        <h1>My Voice Room</h1>
        <img src="imgs/logo.png" alt="" />
        <h2>{translations[language].welcome}</h2>
      </div>
    </section>
  );
}

export default Section1;

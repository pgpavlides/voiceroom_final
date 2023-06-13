import React from "react";

import styles from "./_Section5.module.scss";

import LanguageContext from "../../../LanguageContext";
import { useContext } from "react";

import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
  AiFillCloud,
} from "react-icons/ai";
import Section5Card from "./Section5Card";

import { useNavigate } from "react-router-dom";

const translations = {
  en: {
    name1: "Dimitris Panagiotou",
    title1: "International Contemporary Singing Teacher and Voice Coach",
    name2: "Valentini Pavlidou ",
    title2:
      "International Voice Teacher and Contemporary Singing Voice Specialist (non- clinical) ",
    discover: "Discover the full potential of your voice!",
  },
  gr: {
    name1: "Δημήτρης Παναγιώτου",
    title1: "Διεθνής δάσκαλος σύγχρονου τραγουδιού και Vocal Coach",
    name2: "Βαλεντίνη Παυλίδου",
    title2:
      "Διεθνής καθηγήτρια φωνητικής, θεατρικού λόγου και σύγχρονου τραγουδιού",
    discover: "Ανακαλύψτε όλες τις δυνατότητες της φωνή σου!",
  },
};

function Section5(props) {
  const { language } = useContext(LanguageContext);

  const handleButtonClickDim = () => {
    navigate("/about-us"); 
    window.scrollTo(0, 0);
  };
  const handleButtonClickVal = () => {
    navigate("/about-us"); 
    window.scrollTo(0, 1000);

  };

  

  const navigate = useNavigate();

  

  return (
    <>
      <img
        className={styles.wavepano}
        src="/imgs/wave_quote_pano.svg"
        alt="Example SVG"
        style={{ width: "100%", display: "block" }}
      ></img>
      <section className={styles.section5}>
        <Section5Card
          title={translations[language].name1}
          subtitle={translations[language].title1}
          imageUrl="imgs/dim.jpg"
          buttonText="Click me"
          onButtonClick={handleButtonClickDim}
        />
        <div className={styles.middlesection}>
          <div className={styles.socials}>
            <div className={styles.socials__s1}>
              <AiFillLinkedin />
            </div>
            <div className={styles.socials__s2}>
              <AiFillInstagram />
            </div>
            <div className={styles.socials__s3}>
              <AiFillYoutube />
            </div>
            <div className={styles.socials__s4}>
              <AiFillCloud />
            </div>
          </div>
          <img className={styles.logomesi} src="/imgs/logo.png"></img>
          <h1>{translations[language].discover}</h1>
        </div>

        <Section5Card
          title={translations[language].name2}
          subtitle={translations[language].title2}
          imageUrl="imgs/val.jpg"
          buttonText="Click me"
          onButtonClick={handleButtonClickVal}
        />
        
      </section>
      <img
        className={styles.wavepano}
        src="/imgs/wave_quote_kato.svg"
        alt="Example SVG"
        style={{ width: "100%" }}
      ></img>
      
    </>
  );
}
export default Section5;

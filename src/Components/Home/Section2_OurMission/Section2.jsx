import React from "react";

import styles from "./_Section2.module.scss";

import LanguageContext from '../../../LanguageContext';
import FontContext from '../../../FontContext';
import { useContext } from 'react';

import { useNavigate } from "react-router-dom";

const translations = {
  en: {
    title: 'Our Mission',
    text: 'We want you to be able to find everything about your voice in one place and access new possibilities for your singing and speaking voice. That is why we founded the Voice Room...',
    button: 'Read More'
  },
  gr: {
    title: 'Η φιλοσοφία μας',
    text: 'Θέλαμε να δημιουργήσουμε ένα μέρος όπου να μπορείς να βρεις τα πάντα γύρω από τη φωνή και να ανακαλύψεις νέες δυνατότητες για το τραγούδι και την ομιλία σου. Για αυτό το λόγο ιδρύσαμε το My Voice Room... ',
    button: 'Διάβασε Περισσότερα'
  },
};



function Section2() {

  const { language } = useContext(LanguageContext);
  const { font } = useContext(FontContext);

  const navigate = useNavigate();
  

  const handleClick = () => {
    navigate("/our-mission"); 
  };
  


  return (
    <section className={styles.section2}>
      <div className={styles.section2__container1}>
        <div className={styles.section2__container1__imgcontainer}>
          <img
            className={styles.section2__container1__imgcontainer__img}
            src="imgs/section2img.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.section2__container2}>
        <h1>{translations[language].title}</h1>
        <p>
        {translations[language].text}
        </p>
        <button onClick={handleClick}>{translations[language].button}</button>
      </div>
    </section>
  );
}

export default Section2;

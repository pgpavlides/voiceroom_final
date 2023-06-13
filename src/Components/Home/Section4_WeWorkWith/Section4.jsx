import React from "react";
import { useContext } from 'react';

import Section4Card from "./Section4Card";

import { IoMdMicrophone } from "react-icons/io";
import { FaTheaterMasks } from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { MdPerson, MdPersonAdd } from "react-icons/md";

import styles from "./_Section4.module.scss";

import LanguageContext from '../../../LanguageContext';
import translations from "./Section4Data";

function Section6(props, ref) {

  const { language } = useContext(LanguageContext);

  
  return (
    <section className={styles.section4}>
      <div>
      <h1 id="weworkwith">{translations[language].sectiontitle}</h1>
      </div>
      <div className={styles.section4__cardcontainer}>
        <Section4Card
          name={translations[language].name1}
          text={translations[language].text1}
          iconComponent={IoMdMicrophone}
        />
        <Section4Card
          name={translations[language].name2}
          text={translations[language].text2}
          iconComponent={FaTheaterMasks}
        />
        <Section4Card
          name={translations[language].name3}
          text={translations[language].text3}
          iconComponent={RiUserVoiceFill}
        />
        <Section4Card
          name={translations[language].name4}
          text={translations[language].text4}
          iconComponent={MdPersonAdd}
        />
      </div>
    </section>
  );
}
export default Section6;

{
  /* <lottie-player
          autoplay
          loop
          mode="normal"
          src="/imgs/mouth.json"
          // style="width: 320px"
        ></lottie-player> */
}

import React from "react";


import { IoMdMicrophone } from "react-icons/io";
import { FaTheaterMasks } from "react-icons/fa";
import { RiUserVoiceFill } from "react-icons/ri";
import { MdPerson, MdPersonAdd } from "react-icons/md";

import styles from "./_Section4Card.module.scss";


function Section6Card(props) {

  const IconComponent = props.iconComponent || IoMdMicrophone;

  return (
    <div className={styles.flipcard}>
      <div className={styles.flipcardinner}>
        <div className={styles.flipcardfront}>
          <h3 className={styles.flipcardfronttitle}>{props.name}</h3>
          <IconComponent className={styles.icon} />
        </div>
        <div className={styles.flipcardback}>
          
          <p className={styles.para}>{props.text}</p>
          
        </div>
      </div>
    </div>
  );
}
export default Section6Card;

{
  /* <lottie-player
          autoplay
          loop
          mode="normal"
          src="/imgs/mouth.json"
          // style="width: 320px"
        ></lottie-player> */
}

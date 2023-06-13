import React from "react";
import styles from "./_Section7.module.scss";

function Section7() {
 

  return (
    <section className={styles.section7}>
      <div className={styles['video-row']}>
      <iframe  src="https://www.youtube.com/embed/SZEgEARzwTQ" title="15 minute Vocal Warm Up for Singers and Actors" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe src="https://www.youtube.com/embed/K0MNnjzHw7s?list=RDGMEMP-96bLtob-xyvCobnxVfyw" title="Stone Fruit - Fly Blind" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className={styles['video-row']}>
      <iframe src="https://www.youtube.com/embed/9gg9TSNeGTY" title="What&#39;s Inside x Opening Up | Waitress the Musical | Cover by The Valleys" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe src="https://www.youtube.com/embed/tTBv1RvTfXk" title="Dimitris Panagiotou Painted on canvas (Gregory Porter cover) Studio" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </section>
  );
}

export default Section7;

import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import styles from "./_WeWorkWith.module.scss";
import LanguageContext from "../../LanguageContext";

const translations = {
  en: {
    title: 'We work with',
    p1: 'Singers - who want to learn to sing with efficient technique and appropriate stylistic choices, refine their repertoire, get career advice or heal through singing.',
    p2: 'Actors - who want to work on new text and deliver with vocal freedom, connection and convincing storytelling and prepare for upcoming auditions',
    p3: 'Professional Voice users - (such as public speakers, teachers, journalists, presenters, leaders) who want to become confident and develop engaging and efficient communication skills. ',
    p4: 'Adult students,  who take lessons ‘just for fun’, for theraupeutic self-care or on-going learning and discovery.',

    
  },
  gr: {
    title: 'Δουλεύουμε με…',
    p1: 'Τραγουδιστές που θέλουν να τραγουδούν με αποτελεσματική τεχνική και κατάλληλες στυλιστικές επιλογές, να βελτιώσουν ή να φτιάξουν το ρεπερτόριο τους, να πάρουν συμβουλές σχετικά με την καριέρα τους, ή απλά να τονώσουν την αυτοπεποίθηση τους να νιώσουν καλύτερα τραγουδώντας.',
    p2: 'Ηθοποιούς που θέλουν να δουλέψουν επάνω σε καινούργιο κείμενο και να ερμηνεύσουν με φωνητική ελευθερία, συνοχή και πειστική αφήγηση, ή να ετοιμαστούν για επερχόμενες οντισιόν. ',
    p3: 'Επαγγελματίες χρήστες της φωνής (όπως δημόσιοι ομιλητές, δάσκαλοι, δημοσιογράφοι, παρουσιαστές, ηγέτες) που θέλουν να μιλούν με αυτοπεποίθηση και να αναπτύξουν αποτελεσματικές επικοινωνιακές δεξιότητες.',
    p4: 'Ενήλικοι μαθητές που θέλουν να κάνουν μαθήματα για διασκέδαση, για θεραπεία και αυτοβελτίωση, ή για τη περεταίρω γνώση και ανακάλυψη της φωνής τους. ',
  },
};

const WeWorkWith = () => {
  const { language } = useContext(LanguageContext);
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const windowWidth = window.innerWidth;
  const shouldAnimate = windowWidth > 768;

  if (shouldAnimate) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className={styles.maincontainer}>
          

        
          
          <div className={styles.text}>
          <h1>{translations[language].title}</h1>
            <p>{translations[language].p1}</p>
            <p>{translations[language].p2}</p>
            <p>{translations[language].p3}</p>
            <p>{translations[language].p4}</p>
          </div>
          <img src="imgs/pic7.jpg" alt="" className={styles.image} />
          
        </div>
      </motion.div>
    );
  } else {
    return (
      <div>
        <div className={styles.maincontainer}>
          

        
         
          <div className={styles.text}>
          <h1>{translations[language].title}</h1>
            <p>{translations[language].p1}</p>
            <p>{translations[language].p2}</p>
            <p>{translations[language].p3}</p>
            <p>{translations[language].p4}</p>
          </div>
          <img src="imgs/pic7.jpg" alt="" className={styles.image} />
          
        </div>
      </div>
    );
  }
};

export default WeWorkWith;

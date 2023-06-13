import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import styles from "./_OurMission.module.scss";
import LanguageContext from "../../LanguageContext";

const translations = {
  en: {
    title: 'Our mission',
    p1: 'We want you to be able to find everything about your voice in one place and access new possibilities for your singing and speaking voice.',
    p2: 'That is why we founded the Voice Room.',
    p3: 'In the Voice Room we are looking to develop informed voice users, with efficient and healthy habits. ',
    p4: 'We are advocates of the body, mind and voice connection and we teach evidence based vocal technique. ',
    p5: 'That means that we bring science together with performance (and enjoyment)'
    
  },
  gr: {
    title: 'Η φιλοσοφία μας',
    p1: 'Θέλαμε να δημιουργήσουμε ένα μέρος όπου να μπορείς να βρεις τα πάντα γύρω από τη φωνή και να ανακαλύψεις νέες δυνατότητες για το τραγούδι και την ομιλία σου.',
    p2: 'Για αυτό το λόγο ιδρύσαμε το My Voice Room.',
    p3: 'Στο My Voice Room. επιδιώκουμε να αναπτύξουμε ενημερωμένους χρήστες της φωνής, με αποτελεσματικές και υγιείς συνήθειες.',
    p4: 'Είμαστε υπέρμαχοι της σύνδεσης μεταξύ μυαλού, σώματος και φωνής και διδάσκουμε φωνητική τεχνική βασισμένη σε μελέτες και γεγονότα.',
    p5: 'Αυτό σημαίνει ότι συνδυάζουμε την επιστήμη μαζί με τη χαρά του performing.'
  },
};

const OurMission = () => {
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
          

        
          <img src="imgs/pic4.jpg" alt="" className={styles.image} />
          <div className={styles.text}>
          <h1>{translations[language].title}</h1>
            <p>{translations[language].p1}</p>
            <p>{translations[language].p2}</p>
            <p>{translations[language].p3}</p>
            <p>{translations[language].p4}</p>
            <p>{translations[language].p5}</p>
          </div>
          
        </div>
      </motion.div>
    );
  } else {
    return (
      <div>
        <div className={styles.maincontainer}>
          

        
          <img src="imgs/pic4.jpg" alt="" className={styles.image} />
          <div className={styles.text}>
          <h1>{translations[language].title}</h1>
            <p>{translations[language].p1}</p>
            <p>{translations[language].p2}</p>
            <p>{translations[language].p3}</p>
            <p>{translations[language].p4}</p>
            <p>{translations[language].p5}</p>
          </div>
          
        </div>
      </div>
    );
  }
};

export default OurMission;

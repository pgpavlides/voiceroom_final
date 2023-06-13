import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

import styles from "./_BookASession.module.scss";
import LanguageContext from "../../LanguageContext";

const translations = {
  en: {
    title: 'Book a Session',
    p1: 'We offer in person and remote sessions. Our Voice Studio facilities are located in Thessaloniki, Greece.',
    p2: 'Can’t make it into the studio? No worries- we have got you covered with online sessions.',
    p3: 'Contact us for more information or book your first session here ',
    
    
  },
  gr: {
    title: 'Kλείσε μια συνεδρία/ μάθημα',
    p1: 'Προσφέρουμε τις υπηρεσίες μας δια ζώσης και διαδυκτιακά. Η βάση του My Voice Room βρίσκεται στην Θεσσαλονίκη. ',
    p2: 'Δεν έχεις τη δυνατότητα να έρθεις σε εμάς; Μπες και εσύ στην ομάδα ανθρώπων από όλο το κόσμο, με τους οποίους δουλεύουμε online. ',
    p3: 'Επικοινώνησε μαζί μας για περισσότερες πληροφορίες ή κλείσε τη πρώτη σου συνεδρία πατώντας εδώ. ',

  },
};

const BookASession = () => {
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
          

        
          <img src="imgs/students.png" alt="" className={styles.image} />
          <div className={styles.text}>
          <h1>{translations[language].title}</h1>
            <p>{translations[language].p1}</p>
            <p>{translations[language].p2}</p>
            <p>{translations[language].p3}</p>
         
          </div>
          
        </div>
      </motion.div>
    );
  } else {
    return (
      <div>
        <div className={styles.maincontainer}>
          

        
          <img src="imgs/students.png" alt="" className={styles.image} />
          <div className={styles.text}>
          <h1>{translations[language].title}</h1>
            <p>{translations[language].p1}</p>
            <p>{translations[language].p2}</p>
            <p>{translations[language].p3}</p>
            
          </div>
          
        </div>
      </div>
    );
  }
};

export default BookASession;

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import LanguageContext from '../../LanguageContext';
import FontContext from '../../FontContext';

import styles from "./_Faq.module.scss";


import FaqDataNew from "./FaqDataNew";

import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';


const translations = {
  en: {
    q1: 'Why do I need a coach?',
    a1: 'A coach can guide you through a customised and skill-based approach that is ultimately much more enjoyable and sustainable for the music learner. They can also help you develop your voice to achieve consistent, healthy, and sustainable vocal habits. A coach can hold you accountable and encourage you to celebrate the achievement of goals, help you deal with vocal issues, and fill the missing pieces in your vocal knowledge. Essentially, the right voice coach will help you shine bright without burning out your voice.',
    q2: 'Why choose us?',
    a2: 'We have 15 years of professional singing experience and 10 years of teaching experience at prestigious organizations in the UK. We understand the needs of our learners and use a combination of learn physiological, kinaesthetic, and visual approaches. We are committed to incorporating the latest research in voice science within our professional practice. We can help you find answers and get results through tools and strategies that actually work without wasting time, effort, and money.',
    q3: 'I would like to give it a try, but aren’t singing lessons expensive?',
    a3: 'Do you want to have a trial lesson without the high costs? It is important to feel safe and comfortable with the singing teacher you choose and that you feel that your money and time goes in good use. Therefore, offer the option of a trial lesson where we can get to know each other, discuss your goals and access your needs. Book your first 45-minute trial lesson for only £30 (offer valid until 1st September 2023)',
    q4: 'Do you have any group workshops available?',
    a4: 'Along with our one-to-one sessions, we are regularly running practical workshops- in person and online- with the following subjects: Vocal Health for Actors and Singers, Storytelling for Singers and Actors, Performance anxiety. What is it and how we can tackle it?, Use and Care of Voice for Teacher (preschool, primary and secondary educators), Anatomy for Voice Teachers, Anatomy’s Greatest Hits for Singers, Contemporary Singing Technique for Classical Singers, The Magic and Versatility of Musical Theatre, Voice Pedagogy Considerations - Ζητήματα διδακτικής της φωνής, Voice of a Leader (Vocal Communication and Presence for Leaders), Public Speaking Skills, and Mindfulness for Vocal Performers. All sessions are available for groups of all sizes. They give access to the essential toolkit needed to realize your vocal potential and presence, increase health, power, and range of your voice and transform your skills.',
    q5: 'Are you organising this for your colleagues?',
    a5: 'Contact us with your needs and we will make sure we will design the most efficient session for you and your company.',
    q6: 'What type of sessions do you offer?',
    a6: 'We offer in-person and remote sessions. Our Voice Studio facilities are located in Thessaloniki, Greece. Can’t make it into the studio? No worries- we have got you covered with online sessions.',

   
  },
  gr: {
    q1: 'Γιατί χρειάζομαι έναν coach',
    a1: 'Ένας coach μπορεί να: ·Σε καθοδηγήσει σύμφωνα με τις ανάγκες σου, ώστε να αναπτύξεις τις δεξιότητες που θα σε βοηθήσουν να επιτύχεις τους στόχους σου. ·Σε βοηθήσει να χτίσεις σωστά την φωνή σου, για να έχεις σταθερές, υγιείς και βιώσιμες συνήθειες. Σου δείξει τις δυσκολίες αλλά και να σε βοηθήσει να εκτιμήσεις τη πρόοδο σου και την αξία των επιτυχιών σου. Σε βοηθήσει να ανταπεξέλθεις σε φωνητικά προβλήματα και να συμπληρώσεις τα κομμάτια της γνώσης που χρειάζεσαι. Ο σωστός coach για σένα, θα σου δείξει πως να λάμψεις χωρίς να κουράζεις τη φωνή σου.',
    q2: 'Γιατί να επιλέξεις να δουλέψεις μαζί μας',
    a2: '·Έχουμε πολλά χρόνια εμπειρίας σαν επαγγελματίες τραγουδιστές. ·Έχουμε πάνω από 10 χρόνια διδακτικής εμπειρίας, μεταξύ άλλων και σε καθιερωμένους οργανισμούς του Ηνωμένου Βασίλειου. ·Έχουμε πάνω από 10 χρόνια διδακτικής εμπειρίας, μεταξύ άλλων και σε καθιερωμένους οργανισμούς του Ηνωμένου Βασίλειου. ·Είμαστε αφοσιωμένοι στο να ενημερωνόμαστε για τις τελευταίες εξελίξεις στη φωνητική επιστήμη που αφορούν την εφαρμογή της δουλειάς μας. ·Μπορούμε να σε βοηθήσουμε να βρεις απαντήσεις και αποτελέσματα μέσα από πρακτικές που δουλεύουν χωρίς να ξοδεύεις άσκοπα χρόνο, ενέργεια και χρήματα.   ',
    q3: 'Θα ήθελα να το δοκιμάσω, αλλά δεν είναι τα μαθήματα τραγουδιού ακριβά;',
    a3: 'Θέλεις να κάνεις μια δοκιμαστική συνεδρία; Είναι σημαντικό να αισθάνεσαι άνετα με τον coach που θα δουλέψεις και να νοιώθεις ότι ο χρόνος και τα χρήματα που δίνεις πιάνουν τόπο. Για αυτό το λόγο προσφέρουμε την επιλογή των μεμονωμένων μαθημάτων, όσο συχνά ή σπάνια θέλεις, αλλά και μια πρώτη συνέδρια γνωριμίας, η οποία περιλαμβάνει τη συζήτηση των στόχων σου και πως μπορούμε να βοηθήσουμε να τους επιτύχεις. Κλείσε ένα μισάωρο με χαμηλό κοστος, με τον coach που σε ενδιαφέρει εδώ.',
    q4: 'Υπάρχει η επιλογή ομαδικών εργαστηρίων;',
    a4: 'Εκτός από τις προσωπικές συνεδρίες, οργανώνουμε και πρακτικά εργαστήρια, δια ζώσης ή διαδυκτιακά, με τα ακόλουθα θέματα: ·Φωνητική υγεία για ηθοποιούς και τραγουδιστές ·Ερμηνεία για τραγουδιστές και ηθοποιούς ·Άγχος της σκηνής. Τι είναι και πως αντιμετωπίζεται; ·Χρήση και φροντίδα της φωνής για δασκάλους προσχολικής και σχολικής ηλικίας. ·Ανατομία για δασκάλους τραγουδιού. ·Η μεγαλύτερες επιτυχίες της ανατομίας για τραγουδιστές Τεχνική σύγχρονου τραγουδιού για κλασικούς τραγουδιστές ·Η μαγεία και οι πολλές πλευρές του Musical Theatre ·Ζητήματα διδακτικής της φωνής ·Η φωνή του ηγέτη (Φωνητική επικοινωνία και παρουσία για ηγέτες) ·Δεξιότητες δημοσίου λόγου ·Ενσυνειδητότητα για ερμηνευτές ·Συμβουλευτικές συνεδρίες συγκροτημάτων ·Φωνητικές Αρμονίες Όλα τα εργαστήρια είναι διαθέσιμα για γκρουπ διαφόρων μεγεθών. Δίνουν πρόσβαση σε νέα εργαλεία αλλά και τη δυνατότητα να εξερευνήσεις νέες πιθανότητες  που θα μεταμορφώσουν την παρουσία σου, την υγεία και τη χρήση της φωνής σου. Σχεδιάζεις ένα εργαστήριο για τους συναδέλφους σου; Επικοινώνησε μαζί μας τις ανάγκες σας και εμείς θα σχεδιάσουμε το κατάλληλο πακέτο δεξιοτήτων για σας και τη εταιρία σας.  ',
    q5: '',
    a5: '',
    q6: '',
    a6: '',
  },
};


const Faq = () => {

  const { language } = useContext(LanguageContext);
  const { font } = useContext(FontContext);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const windowWidth = window.innerWidth;
  const shouldAnimate = windowWidth > 768;


  if (shouldAnimate) {
    return (
      <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}>
        
        

        <Container fluid className={styles.about_sectionc1}>
      
      
        

        <Container fluid className={styles.about_sectionc1__text}>
        
        <h1 className={styles.faqtitle}>FAQs</h1>
        <h3>{translations[language].q1}</h3>
        <p>{translations[language].a1}</p>
        <h3>{translations[language].q2}</h3>
        <p>{translations[language].a2}</p>
        <h3>{translations[language].q3}</h3>
        <p>{translations[language].a3}</p>
        <h3>{translations[language].q4}</h3>
        <p>{translations[language].a4}</p>
        <h3>{translations[language].q5}</h3>
        <p>{translations[language].a5}</p>
        <h3>{translations[language].q6}</h3>
        <p>{translations[language].a6}</p>




        
      

        </Container>
      </Container>




      </motion.div>
    );
  } else {
    return (
      <div>
        <h1>FAQ</h1>
        <p>This is my first React component.</p>
      </div>
    );
  }
}

export default Faq;
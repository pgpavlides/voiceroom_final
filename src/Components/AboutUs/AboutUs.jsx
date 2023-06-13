import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Container, Row, Col, Button } from "react-bootstrap";


import styles from "./_AboutUs.module.scss";
import aboutdata from "./AboutData";


import LanguageContext from '../../LanguageContext';
import FontContext from '../../FontContext';
import { useContext } from 'react';


const translations = {
  en: {
    name1: "Dimitris Panagiotou",
    title1: "International Contemporary Singing Teacher and Voice Coach",
    p1_1: "Dimitris is a singing coach with 10 years of teaching experience. He is passionate about meeting and helping creative people by showing them a way to achieve their goals in a positive environment. He holds a BMus (Hons) in Music Performance from London Centre of  Contemporary Music with a specialisation in Singing, an Estill Figure Proficiency certificate from Estill Voice Training, and a  Vocal Health First Aid certificate from Vocal Health Education.  Along with his educational career, Dimitris is bringing in the room years of performance as a singer, musician and songwriter.",
    p2_1: "He works with singers on various music genres, including pop, rock, blues, jazz, musical theatre, as well as actors preparing songs for auditions, instrumentalists, songwriters, choir singers, voice or instrumental teachers who aim to gain or expand their knowledge on how to help singers, from children taking grade exams to adults who want to apply for music colleges or just enjoy singing.",
    p3_1: "Sessions are based on exploring, understanding, and improving the client’s voice, but they often expand to guitar/piano accompaniment, stylistic performance and stage presence, performance anxiety, repertoire, songwriting, music theory, sight reading, ear training, career advice, or other subjects of interest.",

    name2: "Valentini Pavlidou",
    title2:"International Voice Teacher and Contemporary Singing Voice Specialist (non- clinical)",
    p1_2: "Valentini is a Greece and UK based singer, songwriter, arranger, singing and speaking voice coach and researcher.",
    p2_2: "Graduating from London Centre of Contemporary music in 2014, Valentini gained a first lass degree in Music Performance and Production. She then went on to study for a master’s degree with a scholarship (Bundy Award) at the internationally respected Royal Central School of Speech and Drama (MA in Voice Studies: Teaching and Coaching with Distinction). Valentini has additionally studied Pedagogy at the Aristotle university of Thessaloniki. Along with her studies she embarked on a successful performing career.",
    p3_2: "For many years she performed extensively in some of the biggest venues in London such as Union Chapel, Southbank Centre, O2 Arena, The Roundhouse and more. She has also worked as a backing vocalist, arranger and choreographer in the musical theatre show, The Simon and Garfunkel Story.",
    p4_2: "Her educational background also includes a qualification as a Vocal Health First Aider with Vocal Health Education and a certificate in Estill Voice Training. She was previously taught  Musicianship, Voice and Singing at renowned UK institutions such as the BRIT School of  Music, East 15 and the Academy of Live and Recorded Arts.",
    p5_2: "In addition, she is a member of the Voice and Speech Trainers Association (VASTA) and the  British Voice Association (BVA).",
    p6_2: "Valentini maintains a very active, international, private voice studio filled with performers from myriad musical genres, ages and backgrounds as well professional voice users. She has coached extensively in the business world, and now leads a wide range of training courses, both nationally and internationally. Her unique interest in the interactions between voicework and wellbeing have led to her research titled ‘Mindfulness as a tool to tackle the somatic symptoms of performance anxiety: Practical applications’.",
  },
  gr: {
    name1: "Δημήτρης Παναγιώτου",
    title1: "Διεθνής δάσκαλος σύγχρονου τραγουδιού και Vocal Coach",
    p1_1: "Ο Δημήτρης είναι singing coach απο το 2014, βοηθώντας τραγουδιστές αρχικά στο Λονδίνο και στη συνέχεια διαδυκτιακά και στον υπόλοιπο κόσμο. Έχει μπάτσελορ (BMus Hons) στο Music Performance από το London Centre of Contemporary Music με ειδίκευση στο σύγχρονο τραγούδι, πιστοποιητικό Estill Figure Proficiency από το Estill Voice Training, και πιστοποιητικό πρώτων βοηθειών φωνητικής υγείας, Vocal Health First Aid από το Vocal Health Education. Εκτός από την εκπαιδευτική του καριέρα, ο Δημήτρης έχει να προσφέρει και χρόνια εμπειρίας σαν τραγουδιστής, κιθαρίστας, τραγουδοποιός και μουσικος.",
    p2_1: "Δουλεύει με τραγουδιστές διαφόρων ειδών, όπως ποπ, ροκ, μπλουζ, τζαζ, musical theatre, καθώς και ηθοποιούς που ετοιμάζουν τραγούδια για οντισιόν, μουσικούς που θέλουν να συνδυάσουν ένα άλλο μουσικό όργανο με τη φωνή, τραγουδοποιούς που θέλουν να ερμηνεύσουν καλύτερα τα κομμάτια τους, χορωδούς, δασκάλους μουσικών οργάνων, συμπεριλαμβανομένου και της φωνής, που θέλουν να βοηθήσουν πιο αποτελεσματικά τους τραγουδιστές, παιδιά που ετοιμάζονται για μουσικές εξετάσεις, ή ενήλικες που θέλουν να μπουν σε κάποιο μουσικό πανεπιστήμιο ή απλά απολαμβάνουν το τραγούδι. ",
    p3_1: "Τα μαθήματα βασίζονται στην εξερεύνηση, την κατανόηση και τη βελτίωση της φωνής του μαθητή, ενώ συχνά επεκτείνονται σε συνοδεία κιθάρας η πιάνου, στιλιστική ερμηνεία και σκηνική παρουσία, άγχος της σκηνής, ρεπερτόριο, τραγουδοποιία,  μουσική θεωρία, sight reading (σολφέζ), ear training (ντικτέ), συμβουλές για την επαγγελματική εξέλιξη, ή αλλά θέματα που ενδιαφέρουν τον μαθητή.",

    name2: "Βαλεντίνη Παυλίδου",
    title2: "Διεθνής καθηγήτρια φωνητικής, θεατρικού λόγου και σύγχρονου τραγουδιού",
    p1_2: "Η Βαλεντίνη Παυλίδου είναι τραγουδίστρια, τραγουδοποιός, ενορχηστρώτρια, καθηγήτρια αγωγής προφορικού και σκηνικού λόγου, φωνητικής & τραγουδιού, με βάση την Ελλάδα και το Ηνωμένο Βασίλειο.",
    p2_2: "Έχει πραγματοποιήσει προπτυχιακές σπουδές στο London Centre of Contemporary Music με ειδίκευση στη φωνητική ερμηνεία και μεταπτυχιακές σπουδές με υποτροφία (Bundy Award) στο Royal School of Speech and Drama όπου αποφοίτησε με άριστα (MA in Voice Studies; Teaching and Coaching). Παράλληλα με τις μουσικές της σπουδές, έχει ολοκληρώσει με άριστα τις σπουδές στο τμήμα Προσχολικής Αγωγής και Εκπαίδευσης του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης.",
    p3_2: "Ταυτόχρονα με τις σπουδές τις ξεκίνησε και μια επιτυχημένη καριέρα σαν επαγγελματίας μουσικός με παρουσία σε κάποια από τα πιο γνωστά συναυλιακά κέντρα του Λονδίνου όπως το Union Chapel, Southbank Centre, O2 Arena, The Roundhouse και άλλα. Είναι συνιδρύτρια, τραγουδίστρια και συνθέτρια του μουσικού ντουέτου ‘Stone Fruit’ με βάση το Λονδίνο. Επίσης έχει δουλέψει σαν τραγουδίστρια, ενορχηστρώτια και χορογράφος για το musical ‘The Simon and Garfunkel Story’, τη σύγχρονη χορωδία ‘London Contemporary Voices’ και τις ‘The Valleys’, ένα μουσικό, γυναικείο τρίο που ειδικεύεται στις διασκευές κομματιών μιούζικαλ. ",
    p4_2: "Το εκπαιδευτικό της υπόβαθρο περιλαμβάνει επίσης την κατάρτισή της σαν Vocal Health First Aider με τον οργανισμό Vocal Health Education, certificate στην τεχνική Estill Voice Training και πληθώρα masterclass με διακεκριμένους καθηγητές voice performance. Έχει συνεργαστεί με αναγνωρισμένους οργανισμούς και διδάξει σε πανεπιστήμια του Ηνωμένου Βασιλείου, όπως BRIT School of Performing Arts, Academy of Live and Recorded Arts στο Λονδίνο και στο Εast 15 Acting School στο Essex. ",
    p5_2: "Επιπρόσθετα, είναι μέλος του British Voice Association (BVA) και του Voice and Speech Trainers Association (VASTA). ",
    p6_2: "Η Βαλεντίνη έχει μαθητές απο όλο το κόσμο που δουλεύουν σε διαφορετικά μουσικά στυλ. Επίσης δουλέυει με δραματικές σχολές αλλά και εταιρείες, προσφέροντας μια ποικιλία σεμιναριών για την καλύτερη και πιο αποτελεσματική χρήση της φωνής. Το ενδιαφέρον της για τη σύνδεση μεταξύ της χρήσης της φωνής και ευεξίας την οδήγησαν στην εκπόνηση της έρευνας της με τίτλο ‘Η ενσυνειδητότητα (Mindfulness) ως εργαλείο αντιμετώπισης των σωματικών συμπτωμάτων του άγχους της σκηνής: Πρακτικές εφαρμογές’.",
    
  },

 
};


const AboutUs = () => {

  const [isVisible, setIsVisible] = useState(false);

  const { language } = useContext(LanguageContext);
  const { font } = useContext(FontContext);

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
        <Container className={styles.about_sectionc1__img}></Container>

        <Container fluid className={styles.about_sectionc1__text}>
          <h1>{translations[language].name1}</h1>
          <h3>{translations[language].title1}</h3>
          <p>{translations[language].p1_1}</p>
          <p>{translations[language].p2_1}</p>
          <p>{translations[language].p3_1}</p>
        </Container>
      </Container>
      <img className={styles.wavepano} src="/imgs/wave_quote_kato.svg" alt="Example SVG"></img>
      <Container fluid className={styles.about_sectionc2}>
      
        <Container fluid className={styles.about_sectionc2__text}>
          <h1>{translations[language].name2}</h1>
          <h3>{translations[language].title2}</h3>
          <p>{translations[language].p1_2}</p>
          <p>{translations[language].p2_2}</p>
          <p>{translations[language].p3_2}</p>
          <p>{translations[language].p4_2}</p>
          <p>{translations[language].p5_2}</p>
          <p>{translations[language].p6_2}</p>
          
        </Container>
        <Container className={styles.about_sectionc2__img}></Container>
        
      </Container>

      </motion.div>
    );
  } else {
    return (
      <>
        <Container fluid className={styles.about_sectionc1}>
        <Container className={styles.about_sectionc1__img}></Container>

        <Container fluid className={styles.about_sectionc1__text}>
          <h1>{translations[language].name1}</h1>
          <h3>{translations[language].title1}</h3>
          <p>{translations[language].p1_1}</p>
          <p>{translations[language].p2_1}</p>
          <p>{translations[language].p3_1}</p>
        </Container>
      </Container>
      <img className={styles.wavepano} src="/imgs/wave_quote_kato.svg" alt="Example SVG"></img>
      <Container fluid className={styles.about_sectionc2}>
      
        <Container fluid className={styles.about_sectionc2__text}>
          <h1>{translations[language].name2}</h1>
          <h3>{translations[language].title2}</h3>
          <p>{translations[language].p1_2}</p>
          <p>{translations[language].p2_2}</p>
          <p>{translations[language].p3_2}</p>
          <p>{translations[language].p4_2}</p>
          <p>{translations[language].p5_2}</p>
          <p>{translations[language].p6_2}</p>
          
        </Container>
        <Container className={styles.about_sectionc2__img}></Container>
        
      </Container>
      </>
    );
  }
}

export default AboutUs;
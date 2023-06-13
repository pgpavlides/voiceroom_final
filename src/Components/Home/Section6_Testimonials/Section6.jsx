import React from "react";

import styles from "./_Section6.module.scss";

import LanguageContext from '../../../LanguageContext';
import FontContext from '../../../FontContext';
import { useContext,useState, useEffect, } from 'react';

const translations = {
  en: {
    title: 'Testimonials',
    r1t:'Not only an amazing lesson but also very precise information and feedback!',
    r1n: 'Leandro, professional actor',
    r2t: 'In only 4 months, I have learned a lot about technique and noticed a definite improvement in my voice. My range has increased and I feel much more confident.',
    r2n: 'Marie, singing student ',
    r3t: 'One of the most useful workshops I have attended! Truly changed my perception of my voice and gave me practical tips that I can not wait to put into practice in my classroom.',
    r3n: 'Anna, primary teacher',
    r4t: 'Dimitris  has an excellent ear and picks up every minor detail that you might not hear yourself. He is incredibly patient and versatile across a range of music genres and he knows exactly what you need to improve in order to become a better singer. ',
    r4n: 'Zaw, singing student',
    r5t: 'Valentini has explained things in a way that they felt accessible for the first time! ',
    r5n: 'Audrey, professional singer',
    r6t: 'Felt so empowered working with Valentini. I felt heard as she adjusted to my needs and explained everything in detail but also gave me the opportunity to try new things in a safe space.',
    r6n: 'Maria, voice actor',
    r7t: 'I have found Dimitris to have a broad skill set and has used many tools to help me improve my singing. I feel he has appreciated my qualities as well as my needs. He is focused and disciplined in his teaching methods and, moreover, he makes singing so much fun!',
    r7n: 'Richard, singing and guitar student',
    r8t: 'Valentini was very knowledgable, professional and supportive. It was a pleasure working with her on my presentation skills and I am delighted to have found her.',
    r8n: 'Nicola, business client',
    r9t: 'Dimitris really knows his trade, knows how to keep you motivated and really wants you to improve.',
    r9n: 'Philip, singing student',
    r10t: 'Valentini is a knowledgeable and supportive tutor who is passionate about helping her students. She really listens to you!',
    r10n: 'Daisie, acting student',
    r11t: 'The Voice Room has helped me become a much more flexible performer.',
    r11n: 'Matthew, professional musical theatre performer.',
    r12t: 'Dimitris is very friendly and approachable - which helps if you need to get over any self-consciousness! He can teach a variety of styles and he certainly knows his stuff. ',
    r12n: 'Naomi, singing student',
    r13t: 'Valentini has a very positive approach to teaching and really boosts my confidence. She has a natural ability to bring out the best in me.',
    r13n: 'Lisa, singing student',
    r14t: 'Singing lessons can be sometimes really demanding but I have never thought they can be as much fun as this! I couldn’t have made a better choice.',
    r14n: 'Csilla, singing student',
    r15t: 'My daughter absolutely loves her singing lessons and looks forward to them each week.',
    r15n: 'Sam, parent of singing student.',
    r16t: 'First time my son looks forward to having a lesson and feels motivated to practice. This is because of his tutor’s patient, enthusiastic and passionate attitude.',
    r16n: 'Ceyla, parent of singing student',
    
  },
  gr: {
    title: 'Συστάσεις',
    r1t:'Ένα υπέροχο μάθημα με ακριβής πληροφορίες και εξατομικευμένες συμβουλές!',
    r1n: 'Leandro, ηθοποιός',
    r2t: 'Σε μόνο 4 μήνες έμαθα πολλά για την τεχνική μου, και έχω παρατηρήσει ξεκάθαρη βελτίωση στη φωνή μου. Η έκταση μου έχει αυξηθεί και νιώθω περισσότερη αυτοπεποίθηση. ',
    r2n: 'Marie, μαθήτρια τραγουδιού',
    r3t: 'Ένα από τα πιο βοηθητικά εργαστήρια που έχω παρακολουθήσει! Πραγματικά άλλαξε τις αντιλήψεις που είχα για τη φωνή μου και που έδωσε πρακτικές συμβουλές που ανυπομονώ να χρησιμοποιήσω μέσα στην τάξη μου.',
    r3n: 'Anna, δασκάλα δημοτικού',
    r4t: 'Ο Δημήτρης έχει εξαιρετικό αυτί και πιάνει κάθε μικρή λεπτομέρεια που μπορεί να μην αντιλαμβάνεσαι. Είναι πολύ υπομονετικός, μουσικά ευέλικτος και ξέρει ακριβώς τι χρειάζεται ώστε να βελτιωθείς και να γίνεις καλύτερος τραγουδιστής.',
    r4n: 'Zaw, μαθητής τραγουδιού ',
    r5t: 'Η Βαλεντίνη μου εξήγησε πράγματα έναν τρόπο που έγιναν κατανοητά για πρώτη φορά! ',
    r5n: 'Audrey, τραγουδίστρια ',
    r6t: 'Ένιωσα τόσο ενδυναμωμένη δουλεύοντας με τη Βαλεντίνη. Με άκουσε και προσαρμόστηκε στις ανάγκες μου, εξηγώντας μου τα πάντα λεπτομερώς και δίνοντας μου την ευκαιρία να δοκιμάσω καινούρια πράγματα με ασφάλεια.',
    r6n: 'Maria, ηθοποιός φωνής',
    r7t: 'Ο Δημήτρης ένα εύρος δεξιοτήτων το οποίο με βοήθησε εξατομικευμένα. Έβαλε την ενέργεια να κατανοήσει τις ανησυχίες και τις ανάγκες μου. Είναι συγκεντρωμένος και πειθαρχημένος στις διδακτικές μεθόδους του αλλά επίσης κάνει το μάθημα τόσο ευχάριστο! ',
    r7n: 'Richard, μαθητής τραγουδιού και κιθάρας',
    r8t: 'Η Βαλεντίνη είναι μια ενημερωμένη επαγγελματίας και πολύ υποστηρικτική. Ήταν πραγματική ευχαρίστηση το να δουλεύω μαζί της για τη προετοιμασία της παρουσίασης μου στη δουλειά και χαίρομαι πολύ που τη βρήκα.',
    r8n: 'Nicola, εταιρική μαθήτρια',
    r9t: 'Ο Δημήτρης ξέρει καλά τη δουλειά του, πως να σου δώσει κίνητρο και θέλει πραγματικά να βελτιωθείς. ',
    r9n: 'Philip, μαθητής τραγουδιού',
    r10t: 'Η Βαλεντίνη είναι μια υποστηρικτική δασκάλα με πολλές γνώσεις και παθιασμένη με το να βοηθάει τους μαθητές της. Πραγματικά σε ακούει! ',
    r10n: 'Daisie, μαθήτρια υποκριτικής',
    r11t: 'Το Voice Room με βοήθησε να γίνω ένας πιο ευέλικτος ερμηνευτής.',
    r11n: 'Matthew, επαγγελματίας musical theatre performer.',
    r12t: 'Ο Δημήτρης είναι πολύ φιλικός και ευπρόσιτος - κάτι που βοηθάει στο να αισθανθείς αμέσως άνετα. Μπορεί να διδάξει μια ποικιλία μουσικών ειδών και ξέρει για τι μιλάει. ',
    r12n: 'Naomi, μαθήτρια τραγουδιού',
    r13t: 'Η Βαλεντίνη έχει μια τόσο θετική προσέγγιση στη διδασκαλία που με κάνει να αισθάνομαι αυτοπεποίθηση. Έχει την ικανότητα να μου βγάζει το καλύτερό μου ευατό. ',
    r13n: 'Lisa, μαθήτρια τραγουδιού',
    r14t: 'Τα μαθήματα τραγουδιού είναι απαιτητικά αλλά δε περίμενα ότι θα ήταν και τόσο διασκεδαστικά! Δε θα μπορούσα να έχω κάνει καλύτερη επιλογή.',
    r14n: 'Csilla, μαθήτρια τραγουδιού',
    r15t: 'Η κόρη μου λατρεύει τη δασκάλα της και και ανυπομονεί για τα εβδομαδιαία της μαθήματα.',
    r15n: 'Sam, μητέρα μαθήτριας τραγουδιού',
    r16t: 'Πρώτη φορά που ο γιος μου ανυπομονεί για τα μαθήματα του και έχει την όρεξη να διαβάσει. Και αυτό οφείλεται στην υπομονή και την ενθουσιώδη στάση του δασκάλου του.',
    r16n: 'Ceyla, μητέρα μαθητή φωνητικής',

   
  },
};



function Section6() {
  const { language } = useContext(LanguageContext);
  const { font } = useContext(FontContext);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 16); // Increase slide number every 7 seconds, loop back to 0 after 16
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 16);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 15 : prevSlide - 1));
  };

  return (
    <section className={styles.section2}>
      <div className={styles.section2__container2}>
      <h1>{translations[language].title}</h1>
        
        <p>
          {translations[language][`r${currentSlide + 1}t`]}
        </p>
        <h3>
          {translations[language][`r${currentSlide + 1}n`]}
        </h3>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
      <div className={styles.section2__container1}>
        <div className={styles.section2__container1__imgcontainer}>
          <img
            className={styles.section2__container1__imgcontainer__img}
            src={`imgs/pic1.jpg`}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Section6;
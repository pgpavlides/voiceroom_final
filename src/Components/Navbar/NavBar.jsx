import { useContext, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./_NavBar.module.scss";
import { Link,useNavigate } from "react-router-dom";
import LanguageContext from "../../LanguageContext";
import FontContext from "../../FontContext";


// import greekFlag from '../../src/gr_round.png';




function NavBar() {
  const navRef = useRef();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { language, changeLanguage } = useContext(LanguageContext);
  const { font, changeFont } = useContext(FontContext);

  const showNavBar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "gr" : "en";
    changeLanguage(newLanguage);
    changeFont(newLanguage === "en" ? "defaultFont" : "greekFont");
  };

  const handleClick = () => {
    navigate("/"); 
  };

  const navigate = useNavigate();
  

  

  return (
    <header className={styles.header}>
      <img className={styles.logo} src="imgs/logo.png" alt="" onClick={handleClick} />
      <nav className={`${styles.nav} ${isNavOpen ? styles.responsive_nav : ""}`} ref={navRef}>
        <Link onClick={showNavBar} className={styles.navLinkHome} to="/">Home</Link>
        <Link onClick={showNavBar} className={styles.navLinkOurMission} to="/our-mission">Our Mission</Link>
        <Link onClick={showNavBar} className={styles.navLinkWeWorkWith} to="/we-work-with">We Work With</Link>
        <Link onClick={showNavBar} className={styles.navLinkAboutUs} to="/about-us">About us</Link>
        <Link onClick={showNavBar} className={styles.navLinkFAQ} to="/faq">F.A.Q.</Link>
        <Link onClick={showNavBar} className={styles.navLinkBookASession} to="/book-a-session">Book a Session</Link>
        
        <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavBar}>
          <FaTimes />
        </button>
        
      </nav>
      <div className={styles.containerboth}>
      <button className={`${styles.navBtn}`} onClick={showNavBar}>
        <FaBars />
      </button>
      <button className={styles.languageBtn} onClick={toggleLanguage}>
      {language === "en"
  ? <><img className={styles.langbtnimg} src="imgs/gr_round.png" alt="English" /></>
  : <><img className={styles.langbtnimg} src="imgs/uk_round.png" alt="Greek" /></>
}
        </button>
        
      </div>
    </header>
  );
}

export default NavBar;


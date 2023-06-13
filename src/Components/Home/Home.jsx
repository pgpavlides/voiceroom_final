import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import Section1 from './Section1_Intro/Section1';
import Section2 from './Section2_OurMission/Section2';
import Section3 from './Section3_Quote/Section3';
import Section4 from './Section4_WeWorkWith/Section4';
import Section5 from './Section5_DimVal/Section5';
import Section6 from './Section6_Testimonials/Section6'
import Section7 from './Section7_Videos/Section7'

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const windowWidth = window.innerWidth;
  const shouldAnimate = windowWidth > 768;

  if (shouldAnimate) {

  return (
    <>
      <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}>
      <Section1 />     
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <Section7 /> */}
      </motion.div>

    </>
  );
  } else { 
    return (
      <>
      <Section1 />     
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <Section7 /> */}
      </>
    );
  }
}

export default Home;
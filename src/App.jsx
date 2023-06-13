import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home";
import OurMission from "./components/OurMission/OurMission";
import WeWorkWith from "./components/WeWorkWith/WeWorkWith";
import AboutUs from "./components/AboutUs/AboutUs";
import Faq from "./components/FAQ/Faq";
import BookASession from "./components/BookASession/BookASession";

import FontContext from './FontContext';
import { useContext, useEffect } from 'react';



function App() {

  const { font } = useContext(FontContext);

useEffect(() => {
  const className = font === 'defaultFont' ? 'defaultFont' : 'greekFont';
  document.body.className = className;
}, [font]);


  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/we-work-with" element={<WeWorkWith />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/book-a-session" element={<BookASession />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
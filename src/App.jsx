import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/Navbar/NavBar"
import Home from "./Components/Home/Home";
import OurMission from "./Components/OurMission/OurMission";
import WeWorkWith from "./Components/WeWorkWith/WeWorkWith";
import AboutUs from "./Components/AboutUs/AboutUs";
import Faq from "./Components/FAQ/Faq";
import BookASession from "./Components/BookASession/BookASession";

import FontContext from './FontContext';
import { useContext, useEffect } from 'react';



function App() {

  const { font } = useContext(FontContext);

useEffect(() => {
  const className = font === 'defaultFont' ? 'defaultFont' : 'greekFont';
  document.body.className = className;
}, [font]);
// testing

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
import React from 'react';
import Home from '../Home/Home';
import Pricing from './Pricing/Pricing';
import Technologies from './Technologies/Technologies';
import Skills from './Skills/Skills';
import AboutSection from './About/AboutSection';
import Fade from "react-reveal/Fade"
import "../../App.css";

function Container() {
  return <div>
      <Home />
         <AboutSection />
      <Fade bottom>
      <Technologies />
      </Fade>
      <Fade bottom>
         <Skills />
      </Fade>
      <Fade bottom>
         <Pricing />
      </Fade>
  </div>;
}

export default Container;

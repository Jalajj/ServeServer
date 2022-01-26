import React from 'react';
import "./about.css"
import {aboutData} from "./aboutData"
import FAQ from './FAQ/FAQ';

function About() {
  return <div className='container'>
  <div class="row py-4 m-5">
  <div class="col-lg-7 col-md-12 col-sm-12 ">
      <div class="single-project">
          <img style={{maxHeight:400, width:'auto'}} src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1"  alt="computer" class="img-fluid" />
      </div>
  </div>
  <div class="col-lg-4 col-md-12 col-sm-12">
      <div class="project-content-block" style={{width:500}}>
          <h4>{aboutData.card1.title}</h4>
          <h2>{aboutData.card1.Caption}</h2>
          <p>{aboutData.card1.para}</p>
      </div>
  </div>
</div>
<div className='mt-5'>
    <FAQ />
</div>
</div>;
}

export default About;

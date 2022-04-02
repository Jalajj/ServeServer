import React from "react";
import logo from "../../../img/logo.png"
import { devKW, stateKW } from './../../kw/kw';

function AboutSection() {
  return  <section id="about" className='m-auto' style={{height:'auto', marginTop:'10%'}}>
  <div className="container m-auto bg-light p-3" style={{borderRadius:20}}>
      <div className="row">
          <div className="col-md-6 m-bottom-30">
              <img style={{maxHeight:'450px',width:'100%', objectFit: "cover"}} src={logo} 
                 alt="About" className="img-responsive wow fadeInLeft" />
          </div>
          <div className="col-md-6">
          
              <div className="m-bottom-30 bg-light">
                  <h2 className="p-2">About Our Agency</h2>
                  <div className="divider-small wow zoomIn" data-wow-duration="1s" data-wow-delay="0.7s"></div>
              </div>
              <div className="wow fadeInRight p-2">
                  <p className="p-auto" style={{width:'100%'}}>We are {devKW} for businesses or individuals of Bhilai and durg. We built ServeServer to provide digital identity to anyone who wants to take themselves or their business in bhilai and on the national level. 
                    Many {stateKW} charge an unbelievable price for their services, and not every business can afford it. That's where we come into play; our services start with only 1000 Rupees, so any local business or individual can afford services of our software development company. 
                  </p>
                  <p style={{width:'100%'}}>Our team is filled with skilled, talented, and capable developers who can shape your ideas to live by building modern apps which represent your business. At ServeServer, we not only provide you 
                    with scalable apps, but we also go above and beyond to provide your company with exceptional enterprise-grade applications. Want to take your business to the next level? We are here for you. 
                  </p>
              </div>
              <a href="/contact" className="btn p-3" style={{backgroundColor:"#FBA504", textDecoration:'none', color:'white'}}>Contact Us</a>
          </div> 

      </div>
  </div> 
</section>;
}

export default AboutSection;

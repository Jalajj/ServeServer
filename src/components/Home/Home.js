import React from 'react';
import heroImg from "../../img/hero.png"
import "./home.css"
import Fade from "react-reveal/Fade"
import SimpleForm from './Chatbot/Chatbot';


function Home() {

    return (
      <div class="container-xxl hero-header bg-primary">
      <div class="container px-lg-5">
          <div class="row g-5 align-items-end">   
              <div class="col-lg-6 text-center text-lg-start">
              <Fade left>
                  <h1 class="text-white mb-4 animated slideInDown" style={{color:'white'}}>Most Efficient Software development Company In Bhilai</h1>
                
                  <p class="text-white pb-3 animated slideInDown"  style={{color:'white'}}>
                  A agency that is affordable, talented, and well-skilled provides you with softwares with great efficiency and brings your ideas to life.
                  </p>
             </Fade>
                  <a href="/services" class="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft" style={{backgroundColor:"#FBA504"}}>Services</a>
                  <a href="/contact" class="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
              </div>
              <div class="col-lg-6 text-center text-lg-start">
                  <img class="img-fluid animated zoomIn" src={heroImg} alt="home" />
              </div>
          </div>
          <SimpleForm />
      </div>
  </div>
    )
}

export default Home;
// Our goal is to provide each individual, business, and everyone to have their own software as their representative
//                   so that they can bring themselves in front of local as well as national audience easily.

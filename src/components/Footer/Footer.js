import React from 'react';
import './footer.css'

function Footer() {
  return <footer className="section mt-5 " id="footer" style={{backgroundColor: '#2156c8'}}>
  <div className="overlay footer-overlay"></div>
  <div className="container">
      <div className="row justify-content-start">
          <div className="col-lg-4 col-sm-12">
              <div className="footer-widget">
                  <h2 className="footer-brand text-white">
                      ServeServer
                  </h2>
                  <p className="text-white">A digital agency that is affordable, talented, and well-skilled provides you with softwares with great efficiency and brings your ideas to life.</p>
              </div>
          </div>

          <div className="col-lg-3 ml-lg-auto col-sm-12">
              <div className="footer-widget">
                  <h3>Account</h3>
                  <ul className="footer-links ">
                      <li>
                          <a href="/services" className="text-white" style={{textDecoration:'none'}}>
                              Affiliate services
                          </a>
                      </li>
                      <li>
                          <a href='/contact' className="text-white" style={{textDecoration:'none'}}>
                              Help and support
                          </a>
                      </li>
                      <li>
                          <a href="/about" className="text-white" style={{textDecoration:'none'}}>
                              Frequently Asked Question
                          </a>
                      </li>
                  </ul>
              </div>
          </div>


          <div className="col-lg-2 col-sm-6">
              <div className="footer-widget">
                  <h3>About</h3>
                  <ul className="footer-links">
                      <li>
                          <a href="/services" className="text-white" style={{textDecoration:'none'}}>
                              Services
                          </a>
                      </li>
                      <li>
                          <a href="/about" className="text-white" style={{textDecoration:'none'}}>
                              About Us
                          </a>
                      </li>
                      <li>
                          <a href="/contact" className="text-white" style={{textDecoration:'none'}}>
                              Contact
                          </a>
                      </li>
                  </ul>
              </div>
          </div>

          <div className="col-lg-2 col-sm-6">
              <div className="footer-widget">
                  <h3>Socials</h3>
                  <ul className="list-unstyled footer-links">
                      <li><span className='text-white'><i className="fab fa-instagram"></i>Instagram
                      </span></li>
                      <li><span className='text-white'><i className="fab fa-google"></i>Jalajjain39@gmail.com
                      </span></li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  <span className='text-center mt-5 pt-4 copyright' style={{position:'relative', left:'43%', top:'20px'}}>All rights reserved @Jalaj Jain.</span>
</footer>;
}

export default Footer;

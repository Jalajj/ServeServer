import React from 'react';
import "./pricing.css"

function Pricing() {
  return <div className="container mb-4 mt-5">
      <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 text-center">
              <div className="section-heading">      
                  <h2 className="section-title p-4 bg-light" style={{borderRadius:'10px'}}>Why choose Us?</h2>
                  <p style={{display:'flex', flexDirection:'row'}}>So, you understand that we have the ability to develop softwares but why should you choose us? Well... Good question.</p>
              </div>
          </div>
      </div> 
      <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="pricing-box">
                 <h3>Affordability</h3>
                  {/* <div className="price-block">
                       <h2><small>$</small>13<span>monthly</span></h2>
                  </div> */}

                  <ul className="price-features list-unstyled">
                      <li>We are the most affordable service in Bhilai, durg.</li>
                      <li>Our projects start with only 1000 Rs. so any business or enthusiast can get their ideas into life.</li>
                      <li>We provide Affordable products, efficient and effective apps.</li>
                  </ul>
              </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="pricing-box">
                  <h3>Efficiency</h3>
                  {/* <div className="price-block">
                       <h2><small>$</small>23<span>monthly</span></h2>
                  </div> */}

                  <ul className="price-features list-unstyled">
                  <li>We use the latest cutting-edge and trending technology to develop modern apps.</li>
                      <li>We provide fast, well-designed, well-managed, and scalable apps.</li>
                      <li>We provide websites as modern Progressive Web Apps.</li>
                  </ul>
              </div>
          </div>
          <div className="col-lg-4 col-sm-8 col-md-6">
              <div className="pricing-box ">
                  <h3>Avalaibility</h3>
                  {/* <div className="price-block">
                       <h2><small>$</small>33<span>monthly</span></h2>
                  </div> */}

                  <ul className="price-features list-unstyled">
                      <li>You will get updates on your project from time to time.</li>
                      <li>We provide all kinds of things in one service, from designing developing to testing.</li>
                      <li>Our experienced developers can also guide you to making the project more successful.</li>
                  </ul>
              </div>
          </div>
      </div>
      </div>;
}

export default Pricing;

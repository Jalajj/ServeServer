import React from 'react';
import "./tech.css"
import techData from './techData';

function Technologies() {
  return  <div className="container-xxl py-5">
  <div className="container py-5 px-lg-5">
      <div className="row g-4">
              {techData.map((tech) => {
                  return ( <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="feature-item bg-light rounded text-center p-4">
                 <i className={tech.icon}></i>
                  <h5 className="mb-3">{tech.title}</h5>
                  <p className="m-0">{tech.caption}</p>
              </div>
          </div>)})}
      </div>
  </div>
</div>;
}

export default Technologies;
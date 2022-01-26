import React from 'react';
import "./service.css";
import serviceData from './serviceData';

function Services() {
  return <div>
            <div className="container-xxl py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="text-center mb-5 bg-light p-4">What Solutions We Provide</h1>
                </div>
                <div className="row g-4">
                {serviceData.map((service) => {
                    return (
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className={service.icon}></i>
                            </div>
                            <h5 className="mb-3">{service.title}</h5>
                            <p className="m-0">{service.caption}</p>
                            {/* <p className="btn btn-square"><i className="fa fa-arrow-right"></i></p> */}
                        </div>
                    </div>
                    )
                })}
                </div>
            </div>
        </div>
  </div>;
}

export default Services;

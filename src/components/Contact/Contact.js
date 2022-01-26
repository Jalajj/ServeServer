import React from 'react';
import contactData from './contactData';
import {useForm} from "react-hook-form";

function Contact() {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const submitData = (data) => {
        console.log(data)
    }
  return  <div className="container-xxl py-5">
        <section id="contact-info">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="contact-info-block text-center card p-4">
                        <i className="pe-7s-map-marker"></i>
                        <h4>Address</h4>
                        <p className="lead">{contactData.details.address}</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="contact-info-block text-center card p-4">
                        <i className="pe-7s-mail"></i>
                        <h4>Email</h4>
                        <p className="lead">{contactData.details.email}</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="contact-info-block text-center card p-4">
                        <i className="pe-7s-phone"></i>
                        <h4>Phone Number</h4>
                        <p className="lead">{contactData.details.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  <div className="container py-5 px-lg-5">
      <div className="wow fadeInUp" data-wow-delay="0.1s">
          <h1 className="text-center mb-5">Contact For Any Query</h1>
      </div>

      <div className="row justify-content-center">
          <div className="col-lg-7">
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                  <p className="text-center mb-4">We suggest you should call us if you haven't already for better experience. Otherwise you can also send us your queries, or suggestions using the form below.</p>
                  <form action="https://formsubmit.co/3daed419286e31e3d6c9ebbe252654d3" method="POST">
                      <div className="row g-3">
                          <div className="col-md-6">
                              <div className="form-floating">
                                  <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" {...register("username",{required:true, minLength:'4'})} />
                                  <label for="name">Your Name</label>
                              </div>
                              {errors.username && <span className="text-danger">Name is not valid</span>}
                          </div>
                          <div className="col-md-6">
                              <div className="form-floating">
                                  <input type="email" name="email" className="form-control" id="email" placeholder="Your Email" {...register("email",{required:true, pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/})} />
                                  <label for="email">Your Email</label>
                              </div>
                              {errors.email && <span className="text-danger">email is not valid</span>}
                          </div>
                          <div className="col-12">
                              <div className="form-floating">
                                  <input type="text" name="message" className="form-control" id="subject" placeholder="Subject"  {...register("subject",{required:true, minLength:'4'})} />
                                  <label for="subject">Subject</label>
                              </div>
                              {errors.subject && <span className="text-danger">Subject is not valid</span>}
                          </div>
                          <div className="col-12">
                              <div className="form-floating">
                                  <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}  {...register("message",{required:true, minLength:'30'})}></textarea>
                                  <label for="message">Message</label>
                              </div>
                              {errors.message && <span className="text-danger">Message is not valid</span>}
                          </div>
                          <div className="col-12">
                              <button className="btn btn-primary w-100 py-3" type="submit" onClick={handleSubmit((data) => submitData(data))}>Send Message</button>
                          </div>
                      </div>
                      <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_autoresponse" value="Hey there! Jalaj this side thank you for reaching out! I will be getting in touch soon :)"></input>
                  </form>
              </div>
          </div>
      </div>
  </div>
</div>;
}

export default Contact;

function AboutSection() {
  return  <section id="about" className='m-auto' style={{height:'auto', marginTop:'10%'}}>
  <div className="container m-auto bg-light p-3" style={{borderRadius:20}}>
      <div className="row">
          <div className="col-md-6 m-bottom-30">
              <img style={{height:'auto',width:'100%', objectFit: "cover"}} src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&q=60" 
                 alt="About" className="img-responsive wow fadeInLeft" />
          </div>
          <div className="col-md-6">
          
              <div className="m-bottom-30">
                  <h2 className="p-2">About Our Agency</h2>
                  <div className="divider-small wow zoomIn" data-wow-duration="1s" data-wow-delay="0.7s"></div>
              </div>
              <div className="wow fadeInRight p-2">
                  <p className="p-auto" style={{width:'100%'}}>We are software development company for businesses or individuals of Bhilai and durg. We built ServeServer to provide digital identity to anyone who wants to take themselves or their business in bhilai and on the national level. 
                    Many agencies charge an unbelievable price for their services, and not every business can afford it. That's where we come into play; our services start with only 1000 Rupees, so any local business or individual can afford services of our software development company. 
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

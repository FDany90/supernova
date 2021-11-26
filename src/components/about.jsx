export const About = (props) => {
    return (
  
      
      <section id="about" className="about-area pt-110 pb-120">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-9">
                      <div className="about-title text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                          {/* <h2 className="welcome">WELCOME</h2> */}
                          <h2 className="title">ABOUT US</h2>
                      </div>
                  </div>
              </div> 
                <div className="row align-items-center">
                    
                <div className="col-lg-6">
                      <div className="about-content mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                          <h4 className="title">The Team</h4>

                            <div className="row mt-50 justify-content-center">
                            
                                {/* TEAM 1 */}
                            <div className="col-lg-5 col-sm-6 col-xs-12">

                                    <div className="single-team mb-4">
                                    <img src="images/team/david.png" alt=""/>
                                    <div className="team-details">
                                    <div className="overlay"></div>
                                    <div className="team-inner">
                                    <h4 className="team-title">David Delgado</h4>
                                    <p>CEO & Co Founder</p>
                                    <ul className="social-list">
                                    <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li className="linkedin"><a href="https://www.linkedin.com/in/david-jos%C3%A9-delgado-nava-2b3b8196/ "  target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                    </div>
                                    </div>
                                    </div>

                                    
                                </div>
                                
                                {/* TEAM 2 */}

                                <div className="col-lg-5 col-sm-6 col-xs-12">

                                    <div className="single-team mb-4">
                                    <img src="images/team/dani.png" alt=""/>
                                    <div className="team-details">
                                    <div className="overlay"></div>
                                    <div className="team-inner">
                                    <h4 className="team-title">Daniel Fernandez</h4>
                                    <p>CTO & Co Founder</p>
                                    <ul className="social-list">
                                    <li className="twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li className="linkedin"><a href="https://www.linkedin.com/in/dani-fernandez/"  target="blank"><i className="fa fa-linkedin"></i></a></li>
                                    </ul>
                                    </div>
                                    </div>
                                    </div>

                                    
                            </div>
                            </div>

                            
                            
                      </div> 
                  </div>
                    
                  <div className="col-lg-6">
                      <div className="about-content mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                          
                          <p className="text">We are a group of builders that create cool stuff and have fun on the process.
                            Supernova is the space we created to support the infrastructure of our projects and to reach people for sharing and collaboration.
                            </p>
                          
                            <div className="row">
                            

                                {/* TEAM 1 */}
                           
                                
                                {/* TEAM 2 */}

                               
                            </div>

                            
                            
                      </div> 
                  </div>
              </div> 
          </div>
      </section>
      
     
      
  
    )
  }
  